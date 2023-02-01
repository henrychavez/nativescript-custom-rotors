import { concatMap, from, Observable, tap } from 'rxjs';
import { Camera2Common, TakePhotoEventData } from './common';
import { request as requestPermission } from '@nativescript-community/perms';

export class Camera2 extends Camera2Common {
  private backCameraSession: AVCaptureSession;
  private frontCameraSession: AVCaptureSession;

  private backCamera: AVCaptureDevice;
  private frontCamera: AVCaptureDevice;
  private audio: AVCaptureDevice;

  private backInput: AVCaptureInput;
  private frontInput: AVCaptureInput;
  private audioInput: AVCaptureInput;

  private isbackCameraRunning = false;

  private previewLayer: AVCaptureVideoPreviewLayer;

  public createNativeView(): PreviewView {
    this.nativeView = PreviewView.new();
    return this.nativeView;
  }

  initNativeView() {
    const hasCamera = true;
    this.backCameraSession = AVCaptureSession.new();

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

  startCamera(): void {
    this.nativeView.session = this.backCameraSession;
    this.backCameraSession.beginConfiguration();

    this.backCameraSession.sessionPreset = AVCaptureSessionPresetPhoto;
    this.backCameraSession.automaticallyConfiguresCaptureDeviceForWideColor = true;

    //setup inputs
    this.setupInputs();

    this.nativeView.session = this.backCameraSession;

    //commit configuration
    this.backCameraSession.commitConfiguration();
    //start running it
    this.backCameraSession.startRunning();
  }

  setupInputs() {
    try {
      this.backCamera = AVCaptureDevice.defaultDeviceWithDeviceTypeMediaTypePosition(AVCaptureDeviceTypeBuiltInWideAngleCamera, AVMediaTypeVideo, AVCaptureDevicePosition.Back);
      this.backInput = AVCaptureDeviceInput.deviceInputWithDeviceError(this.backCamera);

      this.backCameraSession.addInput(this.backInput);
    } catch (error) {
      console.log("Couldn't add video device input to the session.", error);
    }

    try {
      this.audio = AVCaptureDevice.defaultDeviceWithMediaType(AVCaptureDeviceTypeBuiltInMicrophone);
      this.audioInput = AVCaptureDeviceInput.deviceInputWithDeviceError(this.audio);

      this.backCameraSession.addInput(this.audioInput);
    } catch (error) {
      console.log('Could not add audio device input to the session', error);
    }
  }

  pauseVideo(): void {
    throw new Error('Method not implemented.');
  }
  resumeVideo(): void {
    throw new Error('Method not implemented.');
  }
  takePhoto(): Observable<TakePhotoEventData> {
    throw new Error('Method not implemented.');
  }
  switchCamera(): void {
    throw new Error('Method not implemented.');
  }
  toggleFlash(): void {
    throw new Error('Method not implemented.');
  }

  captureVideo(): void {
    throw new Error('Method not implemented.');
  }
}
