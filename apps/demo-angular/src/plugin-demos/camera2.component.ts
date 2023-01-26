import { Component, NgZone } from '@angular/core';
import { DemoSharedCamera2 } from '@demo/shared';
import {} from '@nativescript/camera2';

@Component({
  selector: 'demo-camera2',
  templateUrl: 'camera2.component.html',
})
export class Camera2Component {
  demoShared: DemoSharedCamera2;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedCamera2();
  }
}
