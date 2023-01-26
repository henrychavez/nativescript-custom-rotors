import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'camera2', loadChildren: () => import('./plugin-demos/camera2.module').then((m) => m.Camera2Module) },
  { path: 'nativescript-custom-rotors', loadChildren: () => import('./plugin-demos/nativescript-custom-rotors.module').then((m) => m.NativescriptCustomRotorsModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
