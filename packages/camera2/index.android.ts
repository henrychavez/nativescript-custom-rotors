import { Utils } from '@nativescript/core';

import { Observable, Subject } from 'rxjs';
import { Camera2Common } from './common';
import { Camera2ConfigService } from './core';
import { TakePhotoEventData } from '.';

declare type CameraSelector = androidx.camera.core.CameraSelector;

export class Camera2 extends Camera2Common {
  nativeView: androidx.camera.view.PreviewView;
  _context: android.content.Context;
  imageCapture!: androidx.camera.core.ImageCapture;
  // Used to bind the lifecycle of cameras to the lifecycle owner
  cameraProvider!: androidx.camera.lifecycle.ProcessCameraProvider;
  preview!: androidx.camera.core.Preview;
  cameraSelector: CameraSelector = androidx.camera.core.CameraSelector.DEFAULT_BACK_CAMERA;
  torchEnabled = false;

  public createNativeView(): any {
    this.nativeView = new androidx.camera.view.PreviewView(this._context);
    return this.nativeView;
  }

  initNativeView() {
    const hasCamera = (this._context as android.content.Context).getPackageManager().hasSystemFeature(android.content.pm.PackageManager.FEATURE_CAMERA);

    // const ctx = Utils.ad.getApplicationContext();

    // if (ctx.checkSelfPermission(android.Manifest.permission.CAMERA) != android.content.pm.PackageManager.PERMISSION_GRANTED) {
    //   console.log('not granted');
    // }

    if (hasCamera) {
      // Start Camera
      this.startCamera();
    }
  }

  private startCamera() {
    const cameraProviderFuture = androidx.camera.lifecycle.ProcessCameraProvider.getInstance(this._context);

    cameraProviderFuture.addListener(
      new java.lang.Runnable({
        run: () => {
          this.cameraProvider = cameraProviderFuture.get();
          this.preview = new androidx.camera.core.Preview.Builder().build();
          // Select back camera as a default
          // this.cameraSelector = androidx.camera.core.CameraSelector.DEFAULT_BACK_CAMERA;

          const builder: androidx.camera.core.ImageCapture.Builder = new androidx.camera.core.ImageCapture.Builder();

          // this.imageCapture = builder.setTargetRotation(Utils.ad.getApplicationContext().getResources().getConfiguration().orientation).build();
          this.imageCapture = builder.build();
          // this.imageCapture.takePicture()

          this.preview.setSurfaceProvider(this.nativeView.getSurfaceProvider());

          try {
            // Unbind use cases before rebinding
            this.cameraProvider.unbindAll();
            // Bind use cases to camera
            const useCaseGroup = new androidx.camera.core.UseCaseGroup.Builder().addUseCase(this.preview).addUseCase(this.imageCapture).build();

            this.cameraProvider.bindToLifecycle(this._context as androidx.appcompat.app.AppCompatActivity, this.cameraSelector, useCaseGroup);
          } catch (error) {
            console.error('ERROR IN CAMERA PROVIDER', error);
          }
        },
      }),
      androidx.core.content.ContextCompat.getMainExecutor(this._context)
    );

    // change cameras
    // pause and continue recording for video
    // flash
    // video recording
    // change cameras during recording (optional)
  }

  takePhoto(): Observable<TakePhotoEventData> {
    // Get a stable reference of the modifiable image capture use case
    const $result = new Subject<TakePhotoEventData>();
    // Create time stamped name and MediaStore entry.
    const name = `${Date.now()}`;

    const contentValues = new android.content.ContentValues();
    contentValues.put(android.provider.MediaStore.MediaColumns.DISPLAY_NAME, name);
    contentValues.put(android.provider.MediaStore.MediaColumns.MIME_TYPE, 'image/jpeg');

    // const contentResolver = new android.content.ContentResolver.

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

  switchCamera(): void {
    if (this.cameraSelector == androidx.camera.core.CameraSelector.DEFAULT_FRONT_CAMERA) this.cameraSelector = androidx.camera.core.CameraSelector.DEFAULT_BACK_CAMERA;
    else if (this.cameraSelector == androidx.camera.core.CameraSelector.DEFAULT_BACK_CAMERA) this.cameraSelector = androidx.camera.core.CameraSelector.DEFAULT_FRONT_CAMERA;
    this.startCamera();
  }

  toggleFlash(): void {
    const cameraControl = this.imageCapture.getCameraControl();
    this.torchEnabled = !this.torchEnabled;
    cameraControl.enableTorch(this.torchEnabled);
  }
}
