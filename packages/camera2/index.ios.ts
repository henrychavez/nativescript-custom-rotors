import { Observable } from 'rxjs';
import { Camera2Common, TakePhotoEventData } from './common';

export class Camera2 extends Camera2Common {
  takePhoto(): Observable<TakePhotoEventData> {
    throw new Error('Method not implemented.');
  }
  switchCamera(): void {
    throw new Error('Method not implemented.');
  }
  toggleFlash(): void {
    throw new Error('Method not implemented.');
  }
}
