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
  }

  captureVideo() {
    this.camera.captureVideo();
  }

  pauseVideo() {
    this.camera.pauseVideo();
  }

  resumeVideo() {
    this.camera.resumeVideo();
  }
}
