import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { Camera2Component } from './camera2.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: Camera2Component }])],
  declarations: [Camera2Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Camera2Module {}
