import { concatMap, from, Observable, Subject, tap } from 'rxjs';
import { request as requestPermission } from '@nativescript-community/perms';

import { Camera2Common, TakePhotoEventData } from './common';
import { Camera2ConfigService } from './core';

declare type CameraSelector = androidx.camera.core.CameraSelector;

export class Camera2 extends Camera2Common {
  nativeView: androidx.camera.view.PreviewView;
  _context: android.content.Context;
  imageCapture!: androidx.camera.core.ImageCapture;
  videoCapture!: androidx.camera.video.VideoCapture<androidx.camera.video.Recorder>;
  // Used to bind the lifecycle of cameras to the lifecycle owner
  cameraProvider!: androidx.camera.lifecycle.ProcessCameraProvider;
  preview!: androidx.camera.core.Preview;
  cameraSelector: CameraSelector = androidx.camera.core.CameraSelector.DEFAULT_BACK_CAMERA;
  torchEnabled = false;

  private camera!: androidx.camera.core.Camera;
  private pendingRecording!: androidx.camera.video.PendingRecording;
  private recording!: androidx.camera.video.Recording;

  public createNativeView(): androidx.camera.view.PreviewView {
    this.nativeView = new androidx.camera.view.PreviewView(this._context);
    return this.nativeView;
  }

  initNativeView() {
    const hasCamera = (this._context as android.content.Context).getPackageManager().hasSystemFeature(android.content.pm.PackageManager.FEATURE_CAMERA);

    // Request permissions
    from(requestPermission('camera'))
      .pipe(
        concatMap(() => from(requestPermission('microphone'))),
        concatMap(() => from(requestPermission('photo')))
      )
      .pipe(
        tap((response) => {
          console.log('permission event', response);
        })
      )
      .subscribe();

    if (hasCamera) {
      // Start Camera
      this.startCamera();
    }
  }

  takePhoto(): Observable<TakePhotoEventData> {
    // Get a stable reference of the modifiable image capture use case
    const $result = new Subject<TakePhotoEventData>();
    // Create time stamped name and MediaStore entry.
    const name = `${Date.now()}`;

    const contentValues = new android.content.ContentValues();
    contentValues.put(android.provider.MediaStore.MediaColumns.DISPLAY_NAME, name);
    contentValues.put(android.provider.MediaStore.MediaColumns.MIME_TYPE, 'image/jpeg');

    if (android.os.Build.VERSION.SDK_INT > android.os.Build.VERSION_CODES.P) {
      contentValues.put(android.provider.MediaStore.MediaColumns.RELATIVE_PATH, `Pictures/${Camera2ConfigService.instance.folderName}`);
    }

    // Create output options object which contains file + metadata

    const outputOptions = new androidx.camera.core.ImageCapture.OutputFileOptions.Builder(
      this._context.getContentResolver(), //
      android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
      contentValues
    ).build();

    // Set up image capture listener, which is triggered after photo has
    // been taken
    this.imageCapture.takePicture(
      outputOptions,
      androidx.core.content.ContextCompat.getMainExecutor(this._context),
      new androidx.camera.core.ImageCapture.OnImageSavedCallback({
        onError: (exc: androidx.camera.core.ImageCaptureException) => {
          console.log('onError', exc);
          $result.error('exception');
        }, //
        onImageSaved: (output: androidx.camera.core.ImageCapture.OutputFileResults) => {
          console.log('onImageSaved', output);
          $result.next({ path: output.getSavedUri().getPath(), object: output });
          $result.complete();
        },
      })
    );

    return $result;
  }

  captureVideo() {
    if (!this.videoCapture) return;
    const curRecording = this.recording;
    if (curRecording != null) {
      // Stop the current recording session.
      curRecording.stop();
      this.pendingRecording = null;
      return;
    }
    // create and start a new recording session
    const name = `${Date.now()}`;
    const contentValues = new android.content.ContentValues();
    contentValues.put(android.provider.MediaStore.MediaColumns.DISPLAY_NAME, name);
    contentValues.put(android.provider.MediaStore.MediaColumns.MIME_TYPE, 'video/mp4');

    if (android.os.Build.VERSION.SDK_INT > android.os.Build.VERSION_CODES.P) {
      contentValues.put(android.provider.MediaStore.MediaColumns.RELATIVE_PATH, `Movies/${Camera2ConfigService.instance.folderName}`);
    }

    const mediaStoreOutputOptions = new androidx.camera.video.MediaStoreOutputOptions.Builder(this._context.getContentResolver(), android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI) //
      .setContentValues(contentValues)
      .build();

    this.pendingRecording = this.videoCapture.getOutput().prepareRecording(this._context, mediaStoreOutputOptions);

    if (androidx.core.content.PermissionChecker.checkSelfPermission(this._context, android.Manifest.permission.RECORD_AUDIO) === androidx.core.content.PermissionChecker.PERMISSION_GRANTED) {
      this.pendingRecording.withAudioEnabled();
    }

    this.recording = this.pendingRecording.start(
      androidx.core.content.ContextCompat.getMainExecutor(this._context),
      new androidx.core.util.Consumer({
        accept: (videoRecordEvent) => {
          if (videoRecordEvent instanceof androidx.camera.video.VideoRecordEvent.Start) {
            console.log('VideoRecordEvent [Start]', videoRecordEvent);
          }

          if (videoRecordEvent instanceof androidx.camera.video.VideoRecordEvent.Pause) {
            console.log('VideoRecordEvent [Pause]', videoRecordEvent);
          }

          if (videoRecordEvent instanceof androidx.camera.video.VideoRecordEvent.Resume) {
            console.log('VideoRecordEvent [Resume]', videoRecordEvent);
          }

          if (videoRecordEvent instanceof androidx.camera.video.VideoRecordEvent.Finalize) {
            console.log('VideoRecordEvent [Finalize]', videoRecordEvent);

            if (videoRecordEvent.hasError()) {
              this.recording.close();
              this.recording = null;
              console.log('Video capture ends with error: ', videoRecordEvent.getError());
            }
          }
        },
      })
    );
  }

  pauseVideo(): void {
    this.recording.pause();
  }

  resumeVideo(): void {
    this.recording.resume();
  }

  switchCamera(): void {
    if (this.cameraSelector == androidx.camera.core.CameraSelector.DEFAULT_FRONT_CAMERA) this.cameraSelector = androidx.camera.core.CameraSelector.DEFAULT_BACK_CAMERA;
    else if (this.cameraSelector == androidx.camera.core.CameraSelector.DEFAULT_BACK_CAMERA) this.cameraSelector = androidx.camera.core.CameraSelector.DEFAULT_FRONT_CAMERA;
    this.refreshCamaraPreview();
  }

  toggleFlash(): void {
    const cameraControl = this.camera.getCameraControl();
    this.torchEnabled = !this.torchEnabled;
    cameraControl.enableTorch(this.torchEnabled);
  }

  startCamera() {
    const cameraProviderFuture = androidx.camera.lifecycle.ProcessCameraProvider.getInstance(this._context);

    cameraProviderFuture.addListener(
      new java.lang.Runnable({
        run: () => {
          this.cameraProvider = cameraProviderFuture.get();
          this.preview = new androidx.camera.core.Preview.Builder().build();
          // Select back camera as a default
          this.imageCapture = new androidx.camera.core.ImageCapture.Builder().build();
          const recorder = new androidx.camera.video.Recorder.Builder() //
            .setQualitySelector(androidx.camera.video.QualitySelector.from(androidx.camera.video.Quality.HD))
            .build();
          this.videoCapture = androidx.camera.video.VideoCapture.withOutput(recorder);

          this.preview.setSurfaceProvider(this.nativeView.getSurfaceProvider());

          this.refreshCamaraPreview();
        },
      }),
      androidx.core.content.ContextCompat.getMainExecutor(this._context)
    );

    // change cameras // done
    // pause and continue recording for video
    // flash // done
    // video recording
    // change cameras during recording (optional)
  }

  private refreshCamaraPreview() {
    try {
      // Unbind use cases before rebinding
      this.cameraProvider.unbindAll();
      // Bind use cases to camera
      const useCaseGroup = new androidx.camera.core.UseCaseGroup.Builder() //
        .addUseCase(this.preview)
        .addUseCase(this.imageCapture)
        .addUseCase(this.videoCapture)
        .build();

      this.camera = this.cameraProvider.bindToLifecycle(this._context as androidx.appcompat.app.AppCompatActivity, this.cameraSelector, useCaseGroup);
    } catch (error) {
      console.error('ERROR IN CAMERA PROVIDER', error);
    }
  }
}
