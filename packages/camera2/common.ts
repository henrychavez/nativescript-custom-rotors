import { View } from '@nativescript/core';
import { Observable } from 'rxjs';

export type TakePhotoEventData = {
  path: string;
  object: unknown;
};

export abstract class Camera2Common extends View {
  abstract takePhoto(): Observable<TakePhotoEventData>;
  abstract startCamera(): void;
  abstract switchCamera(): void;
  abstract toggleFlash(): void;
  abstract captureVideo(): void;
  abstract stopVideo(): void;
  abstract pauseVideo(): void;
  abstract resumeVideo(): void;
}
