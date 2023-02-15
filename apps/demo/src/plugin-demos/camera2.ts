import { EventData, Page } from '@nativescript/core';
import { DemoSharedCamera2 } from '@demo/shared';
import { Camera2, CameraLoadedEvent } from '@nativescript/camera2';
import { tap } from 'rxjs';
// import { } from '@nativescript/camera2';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedCamera2 {
  camera: Camera2;
  private _isRecording = false;
  private _isPaused = false;
  private _isFlashOn = false;

  get isFlashOn() {
    return this._isFlashOn;
  }

  set isFlashOn(value: boolean) {
    if (this._isFlashOn !== value) {
      this._isFlashOn = value;
      this.notifyPropertyChange('isFlashOn', value);
    }
  }

  get isRecording() {
    return this._isRecording;
  }

  set isRecording(value: boolean) {
    if (this._isRecording !== value) {
      this._isRecording = value;
      this.notifyPropertyChange('isRecording', value);
    }
  }

  get isPaused() {
    return this._isPaused;
  }

  set isPaused(value: boolean) {
    if (this._isPaused !== value) {
      this._isPaused = value;
      this.notifyPropertyChange('isPaused', value);
    }
  }

  onCameraLoad(args: CameraLoadedEvent) {
    this.camera = args.object;
  }

  takePhoto() {
    this.camera
      .takePhoto()
      .pipe(
        tap((result) => {
          console.log('from observable', result);
        })
      )
      .subscribe();
  }

  switchCamera() {
    this.camera.switchCamera();
  }

  toggleFlash() {
    this.camera.toggleFlash();
    this.isFlashOn = !this.isFlashOn;
  }

  captureVideo() {
    if (this.isPaused) {
      this.resumeVideo();
    } else {
      this.camera.captureVideo();
      this.isRecording = true;
    }
  }

  pauseVideo() {
    this.camera.pauseVideo();
    this.isRecording = false;
    this.isPaused = true;
  }

  resumeVideo() {
    this.camera.resumeVideo();
    this.isRecording = true;
    this.isPaused = false;
  }

  stopVideo() {
    this.camera.stopVideo();
    this.isRecording = false;
  }
}
