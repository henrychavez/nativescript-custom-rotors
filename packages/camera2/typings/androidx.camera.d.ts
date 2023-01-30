declare module androidx {
  export module camera {
    export module camera2 {
      export class Camera2Config {
        public static class: java.lang.Class<androidx.camera.camera2.Camera2Config>;
        public static defaultConfig(): androidx.camera.core.CameraXConfig;
      }
      export module Camera2Config {
        export class DefaultProvider extends androidx.camera.core.CameraXConfig.Provider {
          public static class: java.lang.Class<androidx.camera.camera2.Camera2Config.DefaultProvider>;
          public constructor();
          public getCameraXConfig(): androidx.camera.core.CameraXConfig;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module impl {
        export class Camera2CameraCaptureResultConverter {
          public static class: java.lang.Class<androidx.camera.camera2.impl.Camera2CameraCaptureResultConverter>;
          public static getCaptureResult(param0: androidx.camera.core.impl.CameraCaptureResult): globalAndroid.hardware.camera2.CaptureResult;
          public static getCaptureFailure(param0: androidx.camera.core.impl.CameraCaptureFailure): globalAndroid.hardware.camera2.CaptureFailure;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module impl {
        export class Camera2ImplConfig extends androidx.camera.camera2.interop.CaptureRequestOptions {
          public static class: java.lang.Class<androidx.camera.camera2.impl.Camera2ImplConfig>;
          public static CAPTURE_REQUEST_ID_STEM: string;
          public static TEMPLATE_TYPE_OPTION: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static STREAM_USE_CASE_OPTION: androidx.camera.core.impl.Config.Option<java.lang.Long>;
          public static DEVICE_STATE_CALLBACK_OPTION: androidx.camera.core.impl.Config.Option<globalAndroid.hardware.camera2.CameraDevice.StateCallback>;
          public static SESSION_STATE_CALLBACK_OPTION: androidx.camera.core.impl.Config.Option<globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback>;
          public static SESSION_CAPTURE_CALLBACK_OPTION: androidx.camera.core.impl.Config.Option<globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback>;
          public static CAMERA_EVENT_CALLBACK_OPTION: androidx.camera.core.impl.Config.Option<androidx.camera.camera2.impl.CameraEventCallbacks>;
          public static CAPTURE_REQUEST_TAG_OPTION: androidx.camera.core.impl.Config.Option<any>;
          public static SESSION_PHYSICAL_CAMERA_ID_OPTION: androidx.camera.core.impl.Config.Option<string>;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getConfig(): androidx.camera.core.impl.Config;
          public constructor(param0: androidx.camera.core.impl.Config);
          public getCameraEventCallback(param0: androidx.camera.camera2.impl.CameraEventCallbacks): androidx.camera.camera2.impl.CameraEventCallbacks;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public getSessionCaptureCallback(param0: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public getStreamUseCase(param0: number): number;
          public getCaptureRequestTag(param0: any): any;
          public static createCaptureRequestOption(param0: globalAndroid.hardware.camera2.CaptureRequest.Key<any>): androidx.camera.core.impl.Config.Option<any>;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public getSessionStateCallback(param0: globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback): globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback;
          public getCaptureRequestTemplate(param0: number): number;
          public getDeviceStateCallback(param0: globalAndroid.hardware.camera2.CameraDevice.StateCallback): globalAndroid.hardware.camera2.CameraDevice.StateCallback;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
          public getCaptureRequestOptions(): androidx.camera.camera2.interop.CaptureRequestOptions;
          public getPhysicalCameraId(param0: string): string;
        }
        export module Camera2ImplConfig {
          export class Builder extends androidx.camera.core.ExtendableBuilder<androidx.camera.camera2.impl.Camera2ImplConfig> {
            public static class: java.lang.Class<androidx.camera.camera2.impl.Camera2ImplConfig.Builder>;
            public setCaptureRequestOption(param0: globalAndroid.hardware.camera2.CaptureRequest.Key, param1: any): androidx.camera.camera2.impl.Camera2ImplConfig.Builder;
            public build(): androidx.camera.camera2.impl.Camera2ImplConfig;
            public constructor();
            public insertAllOptions(param0: androidx.camera.core.impl.Config): androidx.camera.camera2.impl.Camera2ImplConfig.Builder;
            public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
            public setCaptureRequestOptionWithPriority(param0: globalAndroid.hardware.camera2.CaptureRequest.Key, param1: any, param2: androidx.camera.core.impl.Config.OptionPriority): androidx.camera.camera2.impl.Camera2ImplConfig.Builder;
            public build(): any;
          }
          export class Extender<T> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.camera2.impl.Camera2ImplConfig.Extender<any>>;
            public constructor(param0: androidx.camera.core.ExtendableBuilder<T>);
            public setCameraEventCallback(param0: androidx.camera.camera2.impl.CameraEventCallbacks): androidx.camera.camera2.impl.Camera2ImplConfig.Extender<T>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module impl {
        export abstract class CameraEventCallback {
          public static class: java.lang.Class<androidx.camera.camera2.impl.CameraEventCallback>;
          public onInitSession(): androidx.camera.core.impl.CaptureConfig;
          public constructor();
          public onEnableSession(): androidx.camera.core.impl.CaptureConfig;
          public onDisableSession(): androidx.camera.core.impl.CaptureConfig;
          public onRepeating(): androidx.camera.core.impl.CaptureConfig;
          public onDeInitSession(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module impl {
        export class CameraEventCallbacks extends androidx.camera.core.impl.MultiValueSet<androidx.camera.camera2.impl.CameraEventCallback> {
          public static class: java.lang.Class<androidx.camera.camera2.impl.CameraEventCallbacks>;
          public constructor(param0: androidNative.Array<androidx.camera.camera2.impl.CameraEventCallback>);
          public clone(): androidx.camera.core.impl.MultiValueSet<any>;
          public createComboCallback(): androidx.camera.camera2.impl.CameraEventCallbacks.ComboCameraEventCallback;
          public constructor();
          public static createEmptyCallback(): androidx.camera.camera2.impl.CameraEventCallbacks;
          public clone(): androidx.camera.core.impl.MultiValueSet<androidx.camera.camera2.impl.CameraEventCallback>;
        }
        export module CameraEventCallbacks {
          export class ComboCameraEventCallback {
            public static class: java.lang.Class<androidx.camera.camera2.impl.CameraEventCallbacks.ComboCameraEventCallback>;
            public onDisableSession(): java.util.List<androidx.camera.core.impl.CaptureConfig>;
            public onEnableSession(): java.util.List<androidx.camera.core.impl.CaptureConfig>;
            public onInitSession(): java.util.List<androidx.camera.core.impl.CaptureConfig>;
            public getCallbacks(): java.util.List<androidx.camera.camera2.impl.CameraEventCallback>;
            public onRepeating(): java.util.List<androidx.camera.core.impl.CaptureConfig>;
            public onDeInitSession(): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class AndroidRZoomImpl extends androidx.camera.camera2.internal.ZoomControl.ZoomImpl {
          public static class: java.lang.Class<androidx.camera.camera2.internal.AndroidRZoomImpl>;
          public static DEFAULT_ZOOM_RATIO: number;
          public getMinZoom(): number;
          public addRequestOption(param0: androidx.camera.camera2.impl.Camera2ImplConfig.Builder): void;
          public onCaptureResult(param0: globalAndroid.hardware.camera2.TotalCaptureResult): void;
          public resetZoom(): void;
          public getCropSensorRegion(): globalAndroid.graphics.Rect;
          public getMaxZoom(): number;
          public setZoomRatio(param0: number, param1: androidx.concurrent.futures.CallbackToFutureAdapter.Completer<java.lang.Void>): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class AutoValue_Camera2CameraImpl_UseCaseInfo extends androidx.camera.camera2.internal.Camera2CameraImpl.UseCaseInfo {
          public static class: java.lang.Class<androidx.camera.camera2.internal.AutoValue_Camera2CameraImpl_UseCaseInfo>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class AutoValue_CameraDeviceId extends androidx.camera.camera2.internal.CameraDeviceId {
          public static class: java.lang.Class<androidx.camera.camera2.internal.AutoValue_CameraDeviceId>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getBrand(): string;
          public getCameraId(): string;
          public getModel(): string;
          public getDevice(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CamcorderProfileHelper {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CamcorderProfileHelper>;
          /**
           * Constructs a new instance of the androidx.camera.camera2.internal.CamcorderProfileHelper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { hasProfile(param0: number, param1: number): boolean; get(param0: number, param1: number): globalAndroid.media.CamcorderProfile });
          public constructor();
          public get(param0: number, param1: number): globalAndroid.media.CamcorderProfile;
          public hasProfile(param0: number, param1: number): boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2CamcorderProfileProvider extends androidx.camera.core.impl.CamcorderProfileProvider {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CamcorderProfileProvider>;
          public get(param0: number): androidx.camera.core.impl.CamcorderProfileProxy;
          public constructor(param0: string, param1: androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat);
          public hasProfile(param0: number): boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2CameraCaptureFailure extends androidx.camera.core.impl.CameraCaptureFailure {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraCaptureFailure>;
          public getCaptureFailure(): globalAndroid.hardware.camera2.CaptureFailure;
          public constructor(param0: androidx.camera.core.impl.CameraCaptureFailure.Reason, param1: globalAndroid.hardware.camera2.CaptureFailure);
          public constructor(param0: androidx.camera.core.impl.CameraCaptureFailure.Reason);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2CameraCaptureResult extends androidx.camera.core.impl.CameraCaptureResult {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraCaptureResult>;
          public getAeState(): androidx.camera.core.impl.CameraCaptureMetaData.AeState;
          public populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
          public getAwbState(): androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
          public getTimestamp(): number;
          public getCaptureResult(): globalAndroid.hardware.camera2.CaptureResult;
          public getFlashState(): androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
          public getAfMode(): androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
          public getTagBundle(): androidx.camera.core.impl.TagBundle;
          public constructor(param0: androidx.camera.core.impl.TagBundle, param1: globalAndroid.hardware.camera2.CaptureResult);
          public getAfState(): androidx.camera.core.impl.CameraCaptureMetaData.AfState;
          public constructor(param0: globalAndroid.hardware.camera2.CaptureResult);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2CameraControlImpl extends androidx.camera.core.impl.CameraControlInternal {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraControlImpl>;
          public submitStillCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>, param1: number, param2: number): com.google.common.util.concurrent.ListenableFuture<java.util.List<java.lang.Void>>;
          public addZslConfig(param0: androidx.camera.core.impl.SessionConfig.Builder): void;
          public setZoomRatio(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public updateSessionConfig(): void;
          public startFocusAndMetering(param0: androidx.camera.core.FocusMeteringAction): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.FocusMeteringResult>;
          public getInteropConfig(): androidx.camera.core.impl.Config;
          public getFlashMode(): number;
          public setPreviewAspectRatio(param0: globalAndroid.util.Rational): void;
          public setFlashMode(param0: number): void;
          public enableTorch(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public setLinearZoom(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public addInteropConfig(param0: androidx.camera.core.impl.Config): void;
          public setZslDisabledByUserCaseConfig(param0: boolean): void;
          public cancelFocusAndMetering(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public getCamera2CameraControl(): androidx.camera.camera2.interop.Camera2CameraControl;
          public isZslDisabledByByUserCaseConfig(): boolean;
          public clearInteropConfig(): void;
          public getZoomControl(): androidx.camera.camera2.internal.ZoomControl;
          public getFocusMeteringControl(): androidx.camera.camera2.internal.FocusMeteringControl;
          public getZslControl(): androidx.camera.camera2.internal.ZslControl;
          public getTorchControl(): androidx.camera.camera2.internal.TorchControl;
          public getSessionConfig(): androidx.camera.core.impl.SessionConfig;
          public setExposureCompensationIndex(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Integer>;
          public getSensorRect(): globalAndroid.graphics.Rect;
          public getExposureControl(): androidx.camera.camera2.internal.ExposureControl;
        }
        export module Camera2CameraControlImpl {
          export class CameraCaptureCallbackSet extends androidx.camera.core.impl.CameraCaptureCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraControlImpl.CameraCaptureCallbackSet>;
            public onCaptureCompleted(param0: androidx.camera.core.impl.CameraCaptureResult): void;
            public onCaptureFailed(param0: androidx.camera.core.impl.CameraCaptureFailure): void;
            public onCaptureCancelled(): void;
          }
          export class CameraControlSessionCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraControlImpl.CameraControlSessionCallback>;
            public onCaptureCompleted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.TotalCaptureResult): void;
          }
          export class CaptureResultListener {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraControlImpl.CaptureResultListener>;
            /**
             * Constructs a new instance of the androidx.camera.camera2.internal.Camera2CameraControlImpl$CaptureResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onCaptureResult(param0: globalAndroid.hardware.camera2.TotalCaptureResult): boolean });
            public constructor();
            public onCaptureResult(param0: globalAndroid.hardware.camera2.TotalCaptureResult): boolean;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2CameraFactory extends androidx.camera.core.impl.CameraFactory {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraFactory>;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.camera.core.impl.CameraThreadConfig, param2: androidx.camera.core.CameraSelector);
          public getCameraManager(): any;
          public getAvailableCameraIds(): java.util.Set<string>;
          public getCamera(param0: string): androidx.camera.core.impl.CameraInternal;
          public getCameraManager(): androidx.camera.camera2.internal.compat.CameraManagerCompat;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2CameraImpl extends androidx.camera.core.impl.CameraInternal {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraImpl>;
          public onUseCaseReset(param0: androidx.camera.core.UseCase): void;
          public setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void;
          public getCameraControlInternal(): androidx.camera.core.impl.CameraControlInternal;
          public getCameraInfoInternal(): androidx.camera.core.impl.CameraInfoInternal;
          public getCameraAvailability(): androidx.camera.camera2.internal.Camera2CameraImpl.CameraAvailability;
          public toString(): string;
          public getCameraControl(): androidx.camera.core.CameraControl;
          public getCameraState(): androidx.camera.core.impl.Observable<androidx.camera.core.impl.CameraInternal.State>;
          public onUseCaseActive(param0: androidx.camera.core.UseCase): void;
          public close(): void;
          public onUseCaseInactive(param0: androidx.camera.core.UseCase): void;
          public onUseCaseUpdated(param0: androidx.camera.core.UseCase): void;
          public getExtendedConfig(): androidx.camera.core.impl.CameraConfig;
          public setActiveResumingMode(param0: boolean): void;
          public open(): void;
          public attachUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
          public getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
          public isUseCasesCombinationSupported(param0: androidNative.Array<androidx.camera.core.UseCase>): boolean;
          public release(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public getCameraInfo(): androidx.camera.core.CameraInfo;
          public detachUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
        }
        export module Camera2CameraImpl {
          export class CameraAvailability implements androidx.camera.core.impl.CameraStateRegistry.OnOpenAvailableListener {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraImpl.CameraAvailability>;
            public onCameraUnavailable(param0: string): void;
            public onCameraAvailable(param0: string): void;
            public onOpenAvailable(): void;
          }
          export class ControlUpdateListenerInternal extends androidx.camera.core.impl.CameraControlInternal.ControlUpdateCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraImpl.ControlUpdateListenerInternal>;
            public onCameraControlCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>): void;
            public onCameraControlUpdateSessionConfig(): void;
          }
          export class InternalState {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraImpl.InternalState>;
            public static INITIALIZED: androidx.camera.camera2.internal.Camera2CameraImpl.InternalState;
            public static PENDING_OPEN: androidx.camera.camera2.internal.Camera2CameraImpl.InternalState;
            public static OPENING: androidx.camera.camera2.internal.Camera2CameraImpl.InternalState;
            public static OPENED: androidx.camera.camera2.internal.Camera2CameraImpl.InternalState;
            public static CLOSING: androidx.camera.camera2.internal.Camera2CameraImpl.InternalState;
            public static REOPENING: androidx.camera.camera2.internal.Camera2CameraImpl.InternalState;
            public static RELEASING: androidx.camera.camera2.internal.Camera2CameraImpl.InternalState;
            public static RELEASED: androidx.camera.camera2.internal.Camera2CameraImpl.InternalState;
            public static values(): androidNative.Array<androidx.camera.camera2.internal.Camera2CameraImpl.InternalState>;
            public static valueOf(param0: string): androidx.camera.camera2.internal.Camera2CameraImpl.InternalState;
          }
          export class StateCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraImpl.StateCallback>;
            public onOpened(param0: globalAndroid.hardware.camera2.CameraDevice): void;
            public onError(param0: globalAndroid.hardware.camera2.CameraDevice, param1: number): void;
            public onDisconnected(param0: globalAndroid.hardware.camera2.CameraDevice): void;
            public onClosed(param0: globalAndroid.hardware.camera2.CameraDevice): void;
          }
          export module StateCallback {
            export class CameraReopenMonitor {
              public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraImpl.StateCallback.CameraReopenMonitor>;
            }
            export class ScheduledReopen {
              public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraImpl.StateCallback.ScheduledReopen>;
              public run(): void;
            }
          }
          export abstract class UseCaseInfo {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraImpl.UseCaseInfo>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2CameraInfoImpl extends androidx.camera.core.impl.CameraInfoInternal {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraInfoImpl>;
          public isFocusMeteringSupported(param0: androidx.camera.core.FocusMeteringAction): boolean;
          public getCameraQuirks(): androidx.camera.core.impl.Quirks;
          public getCameraSelector(): androidx.camera.core.CameraSelector;
          public getSensorRotationDegrees(param0: number): number;
          public removeSessionCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): void;
          public isPrivateReprocessingSupported(): boolean;
          public addSessionCaptureCallback(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.CameraCaptureCallback): void;
          public getSensorRotationDegrees(): number;
          public getCamera2CameraInfo(): androidx.camera.camera2.interop.Camera2CameraInfo;
          public isZslSupported(): boolean;
          public getImplementationType(): string;
          public getCameraState(): androidx.lifecycle.LiveData<androidx.camera.core.CameraState>;
          public getExposureState(): androidx.camera.core.ExposureState;
          public getCameraId(): string;
          public getCamcorderProfileProvider(): androidx.camera.core.impl.CamcorderProfileProvider;
          public getTorchState(): androidx.lifecycle.LiveData<java.lang.Integer>;
          public getZoomState(): androidx.lifecycle.LiveData<androidx.camera.core.ZoomState>;
          public getCameraCharacteristicsMap(): java.util.Map<string, globalAndroid.hardware.camera2.CameraCharacteristics>;
          public hasFlashUnit(): boolean;
          public getLensFacing(): java.lang.Integer;
          public getTimebase(): androidx.camera.core.impl.Timebase;
          public getCameraCharacteristicsCompat(): androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat;
        }
        export module Camera2CameraInfoImpl {
          export class RedirectableLiveData<T> extends androidx.lifecycle.MediatorLiveData<any> {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CameraInfoImpl.RedirectableLiveData<any>>;
            public getValue(): any;
            public addSource(param0: androidx.lifecycle.LiveData, param1: androidx.lifecycle.Observer): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2CaptureCallbacks {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CaptureCallbacks>;
          public static createComboCallback(param0: androidNative.Array<globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback>): globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback;
          public static createNoOpCallback(): globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback;
        }
        export module Camera2CaptureCallbacks {
          export class ComboSessionCaptureCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CaptureCallbacks.ComboSessionCaptureCallback>;
            public onCaptureFailed(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.CaptureFailure): void;
            public onCaptureCompleted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.TotalCaptureResult): void;
            public onCaptureStarted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: number, param3: number): void;
            public onCaptureBufferLost(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.view.Surface, param3: number): void;
            public onCaptureSequenceAborted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: number): void;
            public onCaptureProgressed(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.CaptureResult): void;
            public onCaptureSequenceCompleted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: number, param2: number): void;
          }
          export class NoOpSessionCaptureCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CaptureCallbacks.NoOpSessionCaptureCallback>;
            public onCaptureFailed(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.CaptureFailure): void;
            public onCaptureCompleted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.TotalCaptureResult): void;
            public onCaptureStarted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: number, param3: number): void;
            public onCaptureBufferLost(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.view.Surface, param3: number): void;
            public onCaptureSequenceAborted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: number): void;
            public onCaptureProgressed(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.CaptureResult): void;
            public onCaptureSequenceCompleted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: number, param2: number): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2CaptureOptionUnpacker extends androidx.camera.core.impl.CaptureConfig.OptionUnpacker {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CaptureOptionUnpacker>;
          public unpack(param0: androidx.camera.core.impl.UseCaseConfig<any>, param1: androidx.camera.core.impl.CaptureConfig.Builder): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2CapturePipeline {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CapturePipeline>;
          public setTemplate(param0: number): void;
          public submitStillCaptures(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>, param1: number, param2: number, param3: number): com.google.common.util.concurrent.ListenableFuture<java.util.List<java.lang.Void>>;
        }
        export module Camera2CapturePipeline {
          export class AePreCaptureTask extends androidx.camera.camera2.internal.Camera2CapturePipeline.PipelineTask {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CapturePipeline.AePreCaptureTask>;
            public postCapture(): void;
            public preCapture(param0: globalAndroid.hardware.camera2.TotalCaptureResult): com.google.common.util.concurrent.ListenableFuture<java.lang.Boolean>;
            public isCaptureResultNeeded(): boolean;
          }
          export class AfTask extends androidx.camera.camera2.internal.Camera2CapturePipeline.PipelineTask {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CapturePipeline.AfTask>;
            public postCapture(): void;
            public preCapture(param0: globalAndroid.hardware.camera2.TotalCaptureResult): com.google.common.util.concurrent.ListenableFuture<java.lang.Boolean>;
            public isCaptureResultNeeded(): boolean;
          }
          export class Pipeline {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CapturePipeline.Pipeline>;
          }
          export class PipelineTask {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CapturePipeline.PipelineTask>;
            /**
             * Constructs a new instance of the androidx.camera.camera2.internal.Camera2CapturePipeline$PipelineTask interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { preCapture(param0: globalAndroid.hardware.camera2.TotalCaptureResult): com.google.common.util.concurrent.ListenableFuture<java.lang.Boolean>; isCaptureResultNeeded(): boolean; postCapture(): void });
            public constructor();
            public postCapture(): void;
            public preCapture(param0: globalAndroid.hardware.camera2.TotalCaptureResult): com.google.common.util.concurrent.ListenableFuture<java.lang.Boolean>;
            public isCaptureResultNeeded(): boolean;
          }
          export class ResultListener extends androidx.camera.camera2.internal.Camera2CameraControlImpl.CaptureResultListener {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CapturePipeline.ResultListener>;
            public getFuture(): com.google.common.util.concurrent.ListenableFuture<globalAndroid.hardware.camera2.TotalCaptureResult>;
            public onCaptureResult(param0: globalAndroid.hardware.camera2.TotalCaptureResult): boolean;
          }
          export module ResultListener {
            export class Checker {
              public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CapturePipeline.ResultListener.Checker>;
              /**
               * Constructs a new instance of the androidx.camera.camera2.internal.Camera2CapturePipeline$ResultListener$Checker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { check(param0: globalAndroid.hardware.camera2.TotalCaptureResult): boolean });
              public constructor();
              public check(param0: globalAndroid.hardware.camera2.TotalCaptureResult): boolean;
            }
          }
          export class TorchTask extends androidx.camera.camera2.internal.Camera2CapturePipeline.PipelineTask {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CapturePipeline.TorchTask>;
            public postCapture(): void;
            public preCapture(param0: globalAndroid.hardware.camera2.TotalCaptureResult): com.google.common.util.concurrent.ListenableFuture<java.lang.Boolean>;
            public isCaptureResultNeeded(): boolean;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2CaptureRequestBuilder {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CaptureRequestBuilder>;
          public static build(param0: androidx.camera.core.impl.CaptureConfig, param1: globalAndroid.hardware.camera2.CameraDevice, param2: java.util.Map<androidx.camera.core.impl.DeferrableSurface, globalAndroid.view.Surface>): globalAndroid.hardware.camera2.CaptureRequest;
          public static buildWithoutTarget(param0: androidx.camera.core.impl.CaptureConfig, param1: globalAndroid.hardware.camera2.CameraDevice): globalAndroid.hardware.camera2.CaptureRequest;
        }
        export module Camera2CaptureRequestBuilder {
          export class Api23Impl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2CaptureRequestBuilder.Api23Impl>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2DeviceSurfaceManager extends androidx.camera.core.impl.CameraDeviceSurfaceManager {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2DeviceSurfaceManager>;
          public constructor(param0: globalAndroid.content.Context, param1: any, param2: java.util.Set<string>);
          public checkSupported(param0: string, param1: java.util.List<androidx.camera.core.impl.SurfaceConfig>): boolean;
          public getSuggestedResolutions(param0: string, param1: java.util.List<androidx.camera.core.impl.AttachedSurfaceInfo>, param2: java.util.List<androidx.camera.core.impl.UseCaseConfig<any>>): java.util.Map<androidx.camera.core.impl.UseCaseConfig<any>, any>;
          public transformSurfaceConfig(param0: string, param1: number, param2: any): androidx.camera.core.impl.SurfaceConfig;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2RequestProcessor extends androidx.camera.core.impl.RequestProcessor {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2RequestProcessor>;
          public constructor(param0: androidx.camera.camera2.internal.CaptureSession, param1: java.util.List<androidx.camera.core.impl.SessionProcessorSurface>);
          public submit(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.RequestProcessor.Callback): number;
          public close(): void;
          public setRepeating(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.RequestProcessor.Callback): number;
          public stopRepeating(): void;
          public submit(param0: java.util.List<androidx.camera.core.impl.RequestProcessor.Request>, param1: androidx.camera.core.impl.RequestProcessor.Callback): number;
          public updateSessionConfig(param0: androidx.camera.core.impl.SessionConfig): void;
          public abortCaptures(): void;
        }
        export module Camera2RequestProcessor {
          export class Camera2CallbackWrapper {
            public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2RequestProcessor.Camera2CallbackWrapper>;
            public onCaptureFailed(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.CaptureFailure): void;
            public onCaptureCompleted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.TotalCaptureResult): void;
            public onCaptureStarted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: number, param3: number): void;
            public onCaptureSequenceAborted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: number): void;
            public onCaptureBufferLost(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.view.Surface, param3: number): void;
            public onCaptureProgressed(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.CaptureResult): void;
            public onCaptureSequenceCompleted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: number, param2: number): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2SessionOptionUnpacker extends androidx.camera.core.impl.SessionConfig.OptionUnpacker {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2SessionOptionUnpacker>;
          public unpack(param0: androidx.camera.core.impl.UseCaseConfig<any>, param1: androidx.camera.core.impl.SessionConfig.Builder): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class Camera2UseCaseConfigFactory extends androidx.camera.core.impl.UseCaseConfigFactory {
          public static class: java.lang.Class<androidx.camera.camera2.internal.Camera2UseCaseConfigFactory>;
          public constructor(param0: globalAndroid.content.Context);
          public getConfig(param0: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType, param1: number): androidx.camera.core.impl.Config;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CameraBurstCaptureCallback {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CameraBurstCaptureCallback>;
          public onCaptureStarted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: number, param3: number): void;
          public onCaptureSequenceCompleted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: number, param2: number): void;
          public onCaptureSequenceAborted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: number): void;
          public setCaptureSequenceCallback(param0: androidx.camera.camera2.internal.CameraBurstCaptureCallback.CaptureSequenceCallback): void;
          public onCaptureBufferLost(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.view.Surface, param3: number): void;
          public onCaptureCompleted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.TotalCaptureResult): void;
          public onCaptureProgressed(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.CaptureResult): void;
          public onCaptureFailed(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.CaptureFailure): void;
        }
        export module CameraBurstCaptureCallback {
          export class CaptureSequenceCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.CameraBurstCaptureCallback.CaptureSequenceCallback>;
            /**
             * Constructs a new instance of the androidx.camera.camera2.internal.CameraBurstCaptureCallback$CaptureSequenceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onCaptureSequenceCompletedOrAborted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: number, param2: boolean): void });
            public constructor();
            public onCaptureSequenceCompletedOrAborted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: number, param2: boolean): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CameraCaptureSessionStateCallbacks {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CameraCaptureSessionStateCallbacks>;
          public static createComboCallback(param0: java.util.List<globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback>): globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback;
          public static createComboCallback(param0: androidNative.Array<globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback>): globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback;
          public static createNoOpCallback(): globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback;
        }
        export module CameraCaptureSessionStateCallbacks {
          export class ComboSessionStateCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.CameraCaptureSessionStateCallbacks.ComboSessionStateCallback>;
            public onActive(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
            public onClosed(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
            public onConfigureFailed(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
            public onReady(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
            public onConfigured(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
            public onSurfacePrepared(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.view.Surface): void;
            public onCaptureQueueEmpty(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
          }
          export class NoOpSessionStateCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.CameraCaptureSessionStateCallbacks.NoOpSessionStateCallback>;
            public onActive(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
            public onClosed(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
            public onConfigureFailed(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
            public onReady(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
            public onConfigured(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
            public onSurfacePrepared(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.view.Surface): void;
            public onCaptureQueueEmpty(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export abstract class CameraDeviceId {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CameraDeviceId>;
          public static create(param0: string, param1: string, param2: string, param3: string): androidx.camera.camera2.internal.CameraDeviceId;
          public getBrand(): string;
          public getCameraId(): string;
          public getModel(): string;
          public getDevice(): string;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CameraDeviceStateCallbacks {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CameraDeviceStateCallbacks>;
          public static createNoOpCallback(): globalAndroid.hardware.camera2.CameraDevice.StateCallback;
          public static createComboCallback(param0: androidNative.Array<globalAndroid.hardware.camera2.CameraDevice.StateCallback>): globalAndroid.hardware.camera2.CameraDevice.StateCallback;
          public static createComboCallback(param0: java.util.List<globalAndroid.hardware.camera2.CameraDevice.StateCallback>): globalAndroid.hardware.camera2.CameraDevice.StateCallback;
        }
        export module CameraDeviceStateCallbacks {
          export class ComboDeviceStateCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.CameraDeviceStateCallbacks.ComboDeviceStateCallback>;
            public onOpened(param0: globalAndroid.hardware.camera2.CameraDevice): void;
            public onError(param0: globalAndroid.hardware.camera2.CameraDevice, param1: number): void;
            public onDisconnected(param0: globalAndroid.hardware.camera2.CameraDevice): void;
            public onClosed(param0: globalAndroid.hardware.camera2.CameraDevice): void;
          }
          export class NoOpDeviceStateCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.CameraDeviceStateCallbacks.NoOpDeviceStateCallback>;
            public onOpened(param0: globalAndroid.hardware.camera2.CameraDevice): void;
            public onError(param0: globalAndroid.hardware.camera2.CameraDevice, param1: number): void;
            public onDisconnected(param0: globalAndroid.hardware.camera2.CameraDevice): void;
            public onClosed(param0: globalAndroid.hardware.camera2.CameraDevice): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CameraSelectionOptimizer {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CameraSelectionOptimizer>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CameraStateMachine {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CameraStateMachine>;
          public updateState(param0: androidx.camera.core.impl.CameraInternal.State, param1: androidx.camera.core.CameraState.StateError): void;
          public getStateLiveData(): androidx.lifecycle.LiveData<androidx.camera.core.CameraState>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CameraUnavailableExceptionHelper {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CameraUnavailableExceptionHelper>;
          public static createFrom(param0: androidx.camera.camera2.internal.compat.CameraAccessExceptionCompat): androidx.camera.core.CameraUnavailableException;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CaptureCallbackAdapter {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CaptureCallbackAdapter>;
          public onCaptureCompleted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.TotalCaptureResult): void;
          public onCaptureFailed(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.CaptureFailure): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CaptureCallbackContainer extends androidx.camera.core.impl.CameraCaptureCallback {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CaptureCallbackContainer>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CaptureCallbackConverter {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CaptureCallbackConverter>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CaptureSession extends androidx.camera.camera2.internal.CaptureSessionInterface {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CaptureSession>;
          public setSessionConfig(param0: androidx.camera.core.impl.SessionConfig): void;
          public cancelIssuedCaptureRequests(): void;
          public release(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public close(): void;
          public getCaptureConfigs(): java.util.List<androidx.camera.core.impl.CaptureConfig>;
          public getSessionConfig(): androidx.camera.core.impl.SessionConfig;
          public open(param0: androidx.camera.core.impl.SessionConfig, param1: globalAndroid.hardware.camera2.CameraDevice, param2: androidx.camera.camera2.internal.SynchronizedCaptureSessionOpener): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public issueCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>): void;
        }
        export module CaptureSession {
          export class State {
            public static class: java.lang.Class<androidx.camera.camera2.internal.CaptureSession.State>;
            public static UNINITIALIZED: androidx.camera.camera2.internal.CaptureSession.State;
            public static INITIALIZED: androidx.camera.camera2.internal.CaptureSession.State;
            public static GET_SURFACE: androidx.camera.camera2.internal.CaptureSession.State;
            public static OPENING: androidx.camera.camera2.internal.CaptureSession.State;
            public static OPENED: androidx.camera.camera2.internal.CaptureSession.State;
            public static CLOSED: androidx.camera.camera2.internal.CaptureSession.State;
            public static RELEASING: androidx.camera.camera2.internal.CaptureSession.State;
            public static RELEASED: androidx.camera.camera2.internal.CaptureSession.State;
            public static values(): androidNative.Array<androidx.camera.camera2.internal.CaptureSession.State>;
            public static valueOf(param0: string): androidx.camera.camera2.internal.CaptureSession.State;
          }
          export class StateCallback extends androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.CaptureSession.StateCallback>;
            public onConfigureFailed(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
            public onReady(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
            public onConfigured(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
            public onSessionFinished(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CaptureSessionInterface {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CaptureSessionInterface>;
          /**
           * Constructs a new instance of the androidx.camera.camera2.internal.CaptureSessionInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { open(param0: androidx.camera.core.impl.SessionConfig, param1: globalAndroid.hardware.camera2.CameraDevice, param2: androidx.camera.camera2.internal.SynchronizedCaptureSessionOpener): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>; setSessionConfig(param0: androidx.camera.core.impl.SessionConfig): void; getSessionConfig(): androidx.camera.core.impl.SessionConfig; getCaptureConfigs(): java.util.List<androidx.camera.core.impl.CaptureConfig>; issueCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>): void; cancelIssuedCaptureRequests(): void; close(): void; release(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void> });
          public constructor();
          public setSessionConfig(param0: androidx.camera.core.impl.SessionConfig): void;
          public cancelIssuedCaptureRequests(): void;
          public release(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public close(): void;
          public getCaptureConfigs(): java.util.List<androidx.camera.core.impl.CaptureConfig>;
          public getSessionConfig(): androidx.camera.core.impl.SessionConfig;
          public open(param0: androidx.camera.core.impl.SessionConfig, param1: globalAndroid.hardware.camera2.CameraDevice, param2: androidx.camera.camera2.internal.SynchronizedCaptureSessionOpener): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public issueCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CaptureSessionRepository {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CaptureSessionRepository>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class CropRegionZoomImpl extends androidx.camera.camera2.internal.ZoomControl.ZoomImpl {
          public static class: java.lang.Class<androidx.camera.camera2.internal.CropRegionZoomImpl>;
          public static MIN_DIGITAL_ZOOM: number;
          public getMinZoom(): number;
          public addRequestOption(param0: androidx.camera.camera2.impl.Camera2ImplConfig.Builder): void;
          public onCaptureResult(param0: globalAndroid.hardware.camera2.TotalCaptureResult): void;
          public resetZoom(): void;
          public getCropSensorRegion(): globalAndroid.graphics.Rect;
          public getMaxZoom(): number;
          public setZoomRatio(param0: number, param1: androidx.concurrent.futures.CallbackToFutureAdapter.Completer<java.lang.Void>): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class DisplayInfoManager {
          public static class: java.lang.Class<androidx.camera.camera2.internal.DisplayInfoManager>;
          public getMaxSizeDisplay(): globalAndroid.view.Display;
          public static getInstance(param0: globalAndroid.content.Context): androidx.camera.camera2.internal.DisplayInfoManager;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class ExposureControl {
          public static class: java.lang.Class<androidx.camera.camera2.internal.ExposureControl>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class ExposureStateImpl extends androidx.camera.core.ExposureState {
          public static class: java.lang.Class<androidx.camera.camera2.internal.ExposureStateImpl>;
          public getExposureCompensationRange(): globalAndroid.util.Range<java.lang.Integer>;
          public getExposureCompensationIndex(): number;
          public isExposureCompensationSupported(): boolean;
          public getExposureCompensationStep(): globalAndroid.util.Rational;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class FocusMeteringControl {
          public static class: java.lang.Class<androidx.camera.camera2.internal.FocusMeteringControl>;
          public setPreviewAspectRatio(param0: globalAndroid.util.Rational): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class GuaranteedConfigurationsUtil {
          public static class: java.lang.Class<androidx.camera.camera2.internal.GuaranteedConfigurationsUtil>;
          public static getLevel3SupportedCombinationList(): java.util.List<androidx.camera.core.impl.SurfaceCombination>;
          public static getBurstSupportedCombinationList(): java.util.List<androidx.camera.core.impl.SurfaceCombination>;
          public static generateSupportedCombinationList(param0: number, param1: boolean, param2: boolean): java.util.List<androidx.camera.core.impl.SurfaceCombination>;
          public static getLimitedSupportedCombinationList(): java.util.List<androidx.camera.core.impl.SurfaceCombination>;
          public static getLegacySupportedCombinationList(): java.util.List<androidx.camera.core.impl.SurfaceCombination>;
          public static getFullSupportedCombinationList(): java.util.List<androidx.camera.core.impl.SurfaceCombination>;
          public static getRAWSupportedCombinationList(): java.util.List<androidx.camera.core.impl.SurfaceCombination>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class ImageCaptureOptionUnpacker extends androidx.camera.camera2.internal.Camera2CaptureOptionUnpacker {
          public static class: java.lang.Class<androidx.camera.camera2.internal.ImageCaptureOptionUnpacker>;
          public unpack(param0: androidx.camera.core.impl.UseCaseConfig<any>, param1: androidx.camera.core.impl.CaptureConfig.Builder): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class MeteringRepeatingSession {
          public static class: java.lang.Class<androidx.camera.camera2.internal.MeteringRepeatingSession>;
        }
        export module MeteringRepeatingSession {
          export class MeteringRepeatingConfig extends androidx.camera.core.impl.UseCaseConfig<androidx.camera.core.UseCase> {
            public static class: java.lang.Class<androidx.camera.camera2.internal.MeteringRepeatingSession.MeteringRepeatingConfig>;
            public getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
            public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
            public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            public getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
            public getConfig(): androidx.camera.core.impl.Config;
            public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            public getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
            public getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
            public getTargetClass(): java.lang.Class<any>;
            public getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
            public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
            public getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
            public isZslDisabled(param0: boolean): boolean;
            public getInputFormat(): number;
            public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            public getSurfaceOccupancyPriority(param0: number): number;
            public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            public getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
            public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            public getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
            public getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
            public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            public getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
            public getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
            public getTargetName(param0: string): string;
            public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            public getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
            public getTargetName(): string;
            public getSurfaceOccupancyPriority(): number;
            public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
            public getCameraSelector(): androidx.camera.core.CameraSelector;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class ProcessingCaptureSession extends androidx.camera.camera2.internal.CaptureSessionInterface {
          public static class: java.lang.Class<androidx.camera.camera2.internal.ProcessingCaptureSession>;
          public cancelIssuedCaptureRequests(): void;
          public setSessionConfig(param0: androidx.camera.core.impl.SessionConfig): void;
          public release(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public close(): void;
          public getCaptureConfigs(): java.util.List<androidx.camera.core.impl.CaptureConfig>;
          public getSessionConfig(): androidx.camera.core.impl.SessionConfig;
          public open(param0: androidx.camera.core.impl.SessionConfig, param1: globalAndroid.hardware.camera2.CameraDevice, param2: androidx.camera.camera2.internal.SynchronizedCaptureSessionOpener): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public issueCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>): void;
        }
        export module ProcessingCaptureSession {
          export class ProcessorState {
            public static class: java.lang.Class<androidx.camera.camera2.internal.ProcessingCaptureSession.ProcessorState>;
            public static UNINITIALIZED: androidx.camera.camera2.internal.ProcessingCaptureSession.ProcessorState;
            public static SESSION_INITIALIZED: androidx.camera.camera2.internal.ProcessingCaptureSession.ProcessorState;
            public static ON_CAPTURE_SESSION_STARTED: androidx.camera.camera2.internal.ProcessingCaptureSession.ProcessorState;
            public static ON_CAPTURE_SESSION_ENDED: androidx.camera.camera2.internal.ProcessingCaptureSession.ProcessorState;
            public static CLOSED: androidx.camera.camera2.internal.ProcessingCaptureSession.ProcessorState;
            public static valueOf(param0: string): androidx.camera.camera2.internal.ProcessingCaptureSession.ProcessorState;
            public static values(): androidNative.Array<androidx.camera.camera2.internal.ProcessingCaptureSession.ProcessorState>;
          }
          export class SessionProcessorCaptureCallback extends androidx.camera.core.impl.SessionProcessor.CaptureCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.ProcessingCaptureSession.SessionProcessorCaptureCallback>;
            public onCaptureSequenceCompleted(param0: number): void;
            public onCaptureProcessStarted(param0: number): void;
            public onCaptureFailed(param0: number): void;
            public onCaptureCompleted(param0: number, param1: number, param2: java.util.Map<globalAndroid.hardware.camera2.CaptureResult.Key, any>): void;
            public onCaptureStarted(param0: number, param1: number): void;
            public onCaptureSequenceAborted(param0: number): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class StreamUseCaseUtil {
          public static class: java.lang.Class<androidx.camera.camera2.internal.StreamUseCaseUtil>;
          public static getStreamUseCaseFromUseCaseConfigs(param0: java.util.Collection<androidx.camera.core.impl.UseCaseConfig<any>>, param1: java.util.Collection<androidx.camera.core.impl.SessionConfig>): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class SupportedSurfaceCombination {
          public static class: java.lang.Class<androidx.camera.camera2.internal.SupportedSurfaceCombination>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class SynchronizedCaptureSession {
          public static class: java.lang.Class<androidx.camera.camera2.internal.SynchronizedCaptureSession>;
          /**
           * Constructs a new instance of the androidx.camera.camera2.internal.SynchronizedCaptureSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getDevice(): globalAndroid.hardware.camera2.CameraDevice;
            getStateCallback(): androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback;
            getInputSurface(): globalAndroid.view.Surface;
            getOpeningBlocker(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
            toCameraCaptureSessionCompat(): androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat;
            captureSingleRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            captureBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            setRepeatingBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            captureSingleRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            captureBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            setRepeatingBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            stopRepeating(): void;
            abortCaptures(): void;
            close(): void;
            finishClose(): void;
          });
          public constructor();
          public captureBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public setRepeatingBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public getOpeningBlocker(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public setRepeatingBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public stopRepeating(): void;
          public getInputSurface(): globalAndroid.view.Surface;
          public setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public getStateCallback(): androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback;
          public finishClose(): void;
          public abortCaptures(): void;
          public setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public getDevice(): globalAndroid.hardware.camera2.CameraDevice;
          public close(): void;
          public toCameraCaptureSessionCompat(): androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat;
          public captureBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public captureSingleRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public captureSingleRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
        }
        export module SynchronizedCaptureSession {
          export abstract class StateCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback>;
            public constructor();
            public onClosed(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
            public onConfigureFailed(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class SynchronizedCaptureSessionBaseImpl extends androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback implements androidx.camera.camera2.internal.SynchronizedCaptureSession, androidx.camera.camera2.internal.SynchronizedCaptureSessionOpener.OpenerImpl {
          public static class: java.lang.Class<androidx.camera.camera2.internal.SynchronizedCaptureSessionBaseImpl>;
          public getExecutor(): java.util.concurrent.Executor;
          public onActive(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public getOpeningBlocker(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public setRepeatingBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public getInputSurface(): globalAndroid.view.Surface;
          public getStateCallback(): androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback;
          public abortCaptures(): void;
          public onConfigureFailed(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public onClosed(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public onReady(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public close(): void;
          public createSessionConfigurationCompat(param0: number, param1: java.util.List<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat>, param2: androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback): androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat;
          public toCameraCaptureSessionCompat(): androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat;
          public onConfigured(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public captureBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public openCaptureSession(param0: globalAndroid.hardware.camera2.CameraDevice, param1: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat, param2: java.util.List<androidx.camera.core.impl.DeferrableSurface>): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public setRepeatingBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public onCaptureQueueEmpty(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public stopRepeating(): void;
          public setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public finishClose(): void;
          public onSurfacePrepared(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession, param1: globalAndroid.view.Surface): void;
          public setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public stop(): boolean;
          public getDevice(): globalAndroid.hardware.camera2.CameraDevice;
          public startWithDeferrableSurface(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>, param1: number): com.google.common.util.concurrent.ListenableFuture<java.util.List<globalAndroid.view.Surface>>;
          public captureBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public captureSingleRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public captureSingleRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
        }
        export module SynchronizedCaptureSessionBaseImpl {
          export class Api23Impl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.SynchronizedCaptureSessionBaseImpl.Api23Impl>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class SynchronizedCaptureSessionImpl extends androidx.camera.camera2.internal.SynchronizedCaptureSessionBaseImpl {
          public static class: java.lang.Class<androidx.camera.camera2.internal.SynchronizedCaptureSessionImpl>;
          public captureBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public openCaptureSession(param0: globalAndroid.hardware.camera2.CameraDevice, param1: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat, param2: java.util.List<androidx.camera.core.impl.DeferrableSurface>): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public getExecutor(): java.util.concurrent.Executor;
          public setRepeatingBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public getOpeningBlocker(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public setRepeatingBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public stopRepeating(): void;
          public getInputSurface(): globalAndroid.view.Surface;
          public setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public getStateCallback(): androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback;
          public finishClose(): void;
          public abortCaptures(): void;
          public setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public stop(): boolean;
          public getDevice(): globalAndroid.hardware.camera2.CameraDevice;
          public startWithDeferrableSurface(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>, param1: number): com.google.common.util.concurrent.ListenableFuture<java.util.List<globalAndroid.view.Surface>>;
          public onClosed(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public close(): void;
          public createSessionConfigurationCompat(param0: number, param1: java.util.List<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat>, param2: androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback): androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat;
          public toCameraCaptureSessionCompat(): androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat;
          public captureBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public onConfigured(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public captureSingleRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          public captureSingleRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class SynchronizedCaptureSessionOpener {
          public static class: java.lang.Class<androidx.camera.camera2.internal.SynchronizedCaptureSessionOpener>;
          public getExecutor(): java.util.concurrent.Executor;
        }
        export module SynchronizedCaptureSessionOpener {
          export class Builder {
            public static class: java.lang.Class<androidx.camera.camera2.internal.SynchronizedCaptureSessionOpener.Builder>;
          }
          export class OpenerImpl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.SynchronizedCaptureSessionOpener.OpenerImpl>;
            /**
             * Constructs a new instance of the androidx.camera.camera2.internal.SynchronizedCaptureSessionOpener$OpenerImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              openCaptureSession(param0: globalAndroid.hardware.camera2.CameraDevice, param1: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat, param2: java.util.List<androidx.camera.core.impl.DeferrableSurface>): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
              createSessionConfigurationCompat(param0: number, param1: java.util.List<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat>, param2: androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback): androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat;
              getExecutor(): java.util.concurrent.Executor;
              startWithDeferrableSurface(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>, param1: number): com.google.common.util.concurrent.ListenableFuture<java.util.List<globalAndroid.view.Surface>>;
              stop(): boolean;
            });
            public constructor();
            public startWithDeferrableSurface(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>, param1: number): com.google.common.util.concurrent.ListenableFuture<java.util.List<globalAndroid.view.Surface>>;
            public createSessionConfigurationCompat(param0: number, param1: java.util.List<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat>, param2: androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback): androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat;
            public stop(): boolean;
            public openCaptureSession(param0: globalAndroid.hardware.camera2.CameraDevice, param1: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat, param2: java.util.List<androidx.camera.core.impl.DeferrableSurface>): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
            public getExecutor(): java.util.concurrent.Executor;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class SynchronizedCaptureSessionStateCallbacks extends androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback {
          public static class: java.lang.Class<androidx.camera.camera2.internal.SynchronizedCaptureSessionStateCallbacks>;
          public onConfigureFailed(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public onActive(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public onClosed(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public onReady(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public onCaptureQueueEmpty(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public onConfigured(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          public onSurfacePrepared(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession, param1: globalAndroid.view.Surface): void;
        }
        export module SynchronizedCaptureSessionStateCallbacks {
          export class Adapter extends androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback {
            public static class: java.lang.Class<androidx.camera.camera2.internal.SynchronizedCaptureSessionStateCallbacks.Adapter>;
            public onCaptureQueueEmpty(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
            public onActive(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
            public onClosed(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
            public onConfigureFailed(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
            public onSurfacePrepared(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession, param1: globalAndroid.view.Surface): void;
            public onReady(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
            public onConfigured(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class TorchControl {
          public static class: java.lang.Class<androidx.camera.camera2.internal.TorchControl>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class ZoomControl {
          public static class: java.lang.Class<androidx.camera.camera2.internal.ZoomControl>;
          public static DEFAULT_ZOOM_RATIO: number;
        }
        export module ZoomControl {
          export class ZoomImpl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.ZoomControl.ZoomImpl>;
            /**
             * Constructs a new instance of the androidx.camera.camera2.internal.ZoomControl$ZoomImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getMinZoom(): number; getMaxZoom(): number; addRequestOption(param0: androidx.camera.camera2.impl.Camera2ImplConfig.Builder): void; resetZoom(): void; setZoomRatio(param0: number, param1: androidx.concurrent.futures.CallbackToFutureAdapter.Completer<java.lang.Void>): void; onCaptureResult(param0: globalAndroid.hardware.camera2.TotalCaptureResult): void; getCropSensorRegion(): globalAndroid.graphics.Rect });
            public constructor();
            public addRequestOption(param0: androidx.camera.camera2.impl.Camera2ImplConfig.Builder): void;
            public resetZoom(): void;
            public onCaptureResult(param0: globalAndroid.hardware.camera2.TotalCaptureResult): void;
            public getMaxZoom(): number;
            public getMinZoom(): number;
            public getCropSensorRegion(): globalAndroid.graphics.Rect;
            public setZoomRatio(param0: number, param1: androidx.concurrent.futures.CallbackToFutureAdapter.Completer<java.lang.Void>): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class ZoomStateImpl extends androidx.camera.core.ZoomState {
          public static class: java.lang.Class<androidx.camera.camera2.internal.ZoomStateImpl>;
          public getMinZoomRatio(): number;
          public getLinearZoom(): number;
          public getMaxZoomRatio(): number;
          public getZoomRatio(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class ZslControl {
          public static class: java.lang.Class<androidx.camera.camera2.internal.ZslControl>;
          /**
           * Constructs a new instance of the androidx.camera.camera2.internal.ZslControl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { addZslConfig(param0: androidx.camera.core.impl.SessionConfig.Builder): void; setZslDisabledByUserCaseConfig(param0: boolean): void; isZslDisabledByUserCaseConfig(): boolean; setZslDisabledByFlashMode(param0: boolean): void; isZslDisabledByFlashMode(): boolean; dequeueImageFromBuffer(): androidx.camera.core.ImageProxy; enqueueImageToImageWriter(param0: androidx.camera.core.ImageProxy): boolean });
          public constructor();
          public addZslConfig(param0: androidx.camera.core.impl.SessionConfig.Builder): void;
          public isZslDisabledByUserCaseConfig(): boolean;
          public setZslDisabledByUserCaseConfig(param0: boolean): void;
          public isZslDisabledByFlashMode(): boolean;
          public enqueueImageToImageWriter(param0: androidx.camera.core.ImageProxy): boolean;
          public dequeueImageFromBuffer(): androidx.camera.core.ImageProxy;
          public setZslDisabledByFlashMode(param0: boolean): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class ZslControlImpl extends androidx.camera.camera2.internal.ZslControl {
          public static class: java.lang.Class<androidx.camera.camera2.internal.ZslControlImpl>;
          public isZslDisabledByUserCaseConfig(): boolean;
          public addZslConfig(param0: androidx.camera.core.impl.SessionConfig.Builder): void;
          public setZslDisabledByUserCaseConfig(param0: boolean): void;
          public isZslDisabledByFlashMode(): boolean;
          public enqueueImageToImageWriter(param0: androidx.camera.core.ImageProxy): boolean;
          public dequeueImageFromBuffer(): androidx.camera.core.ImageProxy;
          public setZslDisabledByFlashMode(param0: boolean): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class ZslControlNoOpImpl extends androidx.camera.camera2.internal.ZslControl {
          public static class: java.lang.Class<androidx.camera.camera2.internal.ZslControlNoOpImpl>;
          public constructor();
          public addZslConfig(param0: androidx.camera.core.impl.SessionConfig.Builder): void;
          public isZslDisabledByUserCaseConfig(): boolean;
          public setZslDisabledByUserCaseConfig(param0: boolean): void;
          public isZslDisabledByFlashMode(): boolean;
          public enqueueImageToImageWriter(param0: androidx.camera.core.ImageProxy): boolean;
          public dequeueImageFromBuffer(): androidx.camera.core.ImageProxy;
          public setZslDisabledByFlashMode(param0: boolean): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export class ZslUtil {
          public static class: java.lang.Class<androidx.camera.camera2.internal.ZslUtil>;
          public static isCapabilitySupported(param0: androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat, param1: number): boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module annotation {
          export class CameraExecutor {
            public static class: java.lang.Class<androidx.camera.camera2.internal.annotation.CameraExecutor>;
            /**
             * Constructs a new instance of the androidx.camera.camera2.internal.annotation.CameraExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class ApiCompat {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.ApiCompat>;
          }
          export module ApiCompat {
            export class Api21Impl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.ApiCompat.Api21Impl>;
              public static close(param0: globalAndroid.hardware.camera2.CameraDevice): void;
            }
            export class Api23Impl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.ApiCompat.Api23Impl>;
              public static onSurfacePrepared(param0: globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback, param1: globalAndroid.hardware.camera2.CameraCaptureSession, param2: globalAndroid.view.Surface): void;
            }
            export class Api24Impl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.ApiCompat.Api24Impl>;
              public static onCaptureBufferLost(param0: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback, param1: globalAndroid.hardware.camera2.CameraCaptureSession, param2: globalAndroid.hardware.camera2.CaptureRequest, param3: globalAndroid.view.Surface, param4: number): void;
            }
            export class Api26Impl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.ApiCompat.Api26Impl>;
              public static newOutputConfiguration(param0: any, param1: java.lang.Class<any>): globalAndroid.hardware.camera2.params.OutputConfiguration;
              public static onCaptureQueueEmpty(param0: globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback, param1: globalAndroid.hardware.camera2.CameraCaptureSession): void;
            }
            export class Api29Impl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.ApiCompat.Api29Impl>;
              public static onCameraAccessPrioritiesChanged(param0: globalAndroid.hardware.camera2.CameraManager.AvailabilityCallback): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraAccessExceptionCompat {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraAccessExceptionCompat>;
            public static CAMERA_IN_USE: number;
            public static MAX_CAMERAS_IN_USE: number;
            public static CAMERA_DISABLED: number;
            public static CAMERA_DISCONNECTED: number;
            public static CAMERA_ERROR: number;
            public static CAMERA_DEPRECATED_HAL: number;
            public static CAMERA_UNAVAILABLE_DO_NOT_DISTURB: number;
            public static CAMERA_CHARACTERISTICS_CREATION_ERROR: number;
            public constructor(param0: number, param1: java.lang.Throwable);
            public constructor(param0: number, param1: string);
            public constructor(param0: number);
            public static toCameraAccessExceptionCompat(param0: globalAndroid.hardware.camera2.CameraAccessException): androidx.camera.camera2.internal.compat.CameraAccessExceptionCompat;
            public constructor(param0: number, param1: string, param2: java.lang.Throwable);
            public toCameraAccessException(): globalAndroid.hardware.camera2.CameraAccessException;
            public getReason(): number;
          }
          export module CameraAccessExceptionCompat {
            export class AccessError {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraAccessExceptionCompat.AccessError>;
              /**
               * Constructs a new instance of the androidx.camera.camera2.internal.compat.CameraAccessExceptionCompat$AccessError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraCaptureSessionCompat {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat>;
            public toCameraCaptureSession(): globalAndroid.hardware.camera2.CameraCaptureSession;
            public captureBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            public captureSingleRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            public static toCameraCaptureSessionCompat(param0: globalAndroid.hardware.camera2.CameraCaptureSession): androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat;
            public setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            public setRepeatingBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            public static toCameraCaptureSessionCompat(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.os.Handler): androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat;
          }
          export module CameraCaptureSessionCompat {
            export class CameraCaptureSessionCompatImpl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat.CameraCaptureSessionCompatImpl>;
              /**
               * Constructs a new instance of the androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat$CameraCaptureSessionCompatImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                captureBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
                captureSingleRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
                setRepeatingBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
                setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
                unwrap(): globalAndroid.hardware.camera2.CameraCaptureSession;
              });
              public constructor();
              public setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
              public captureSingleRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
              public unwrap(): globalAndroid.hardware.camera2.CameraCaptureSession;
              public setRepeatingBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
              public captureBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            }
            export class CaptureCallbackExecutorWrapper {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat.CaptureCallbackExecutorWrapper>;
              public onCaptureSequenceAborted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: number): void;
              public onCaptureCompleted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.TotalCaptureResult): void;
              public onCaptureSequenceCompleted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: number, param2: number): void;
              public onCaptureBufferLost(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.view.Surface, param3: number): void;
              public onCaptureProgressed(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.CaptureResult): void;
              public onCaptureFailed(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: globalAndroid.hardware.camera2.CaptureFailure): void;
              public onCaptureStarted(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.hardware.camera2.CaptureRequest, param2: number, param3: number): void;
            }
            export class StateCallbackExecutorWrapper {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat.StateCallbackExecutorWrapper>;
              public onCaptureQueueEmpty(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
              public onActive(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
              public onClosed(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
              public onReady(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
              public onConfigured(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
              public onSurfacePrepared(param0: globalAndroid.hardware.camera2.CameraCaptureSession, param1: globalAndroid.view.Surface): void;
              public onConfigureFailed(param0: globalAndroid.hardware.camera2.CameraCaptureSession): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraCaptureSessionCompatApi28Impl extends androidx.camera.camera2.internal.compat.CameraCaptureSessionCompatBaseImpl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraCaptureSessionCompatApi28Impl>;
            public unwrap(): globalAndroid.hardware.camera2.CameraCaptureSession;
            public captureBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            public captureSingleRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            public setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            public setRepeatingBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraCaptureSessionCompatBaseImpl extends androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat.CameraCaptureSessionCompatImpl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraCaptureSessionCompatBaseImpl>;
            public unwrap(): globalAndroid.hardware.camera2.CameraCaptureSession;
            public captureBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            public captureSingleRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            public setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
            public setRepeatingBurstRequests(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
          }
          export module CameraCaptureSessionCompatBaseImpl {
            export class CameraCaptureSessionCompatParamsApi21 {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraCaptureSessionCompatBaseImpl.CameraCaptureSessionCompatParamsApi21>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraCharacteristicsApi28Impl extends androidx.camera.camera2.internal.compat.CameraCharacteristicsBaseImpl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraCharacteristicsApi28Impl>;
            public unwrap(): globalAndroid.hardware.camera2.CameraCharacteristics;
            public get(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
            public getPhysicalCameraIds(): java.util.Set<string>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraCharacteristicsBaseImpl extends androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat.CameraCharacteristicsCompatImpl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraCharacteristicsBaseImpl>;
            public mCameraCharacteristics: globalAndroid.hardware.camera2.CameraCharacteristics;
            public unwrap(): globalAndroid.hardware.camera2.CameraCharacteristics;
            public get(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
            public getPhysicalCameraIds(): java.util.Set<string>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraCharacteristicsCompat {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat>;
            public static toCameraCharacteristicsCompat(param0: globalAndroid.hardware.camera2.CameraCharacteristics): androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat;
            public get(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
            public toCameraCharacteristics(): globalAndroid.hardware.camera2.CameraCharacteristics;
            public getPhysicalCameraIds(): java.util.Set<string>;
          }
          export module CameraCharacteristicsCompat {
            export class CameraCharacteristicsCompatImpl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat.CameraCharacteristicsCompatImpl>;
              /**
               * Constructs a new instance of the androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat$CameraCharacteristicsCompatImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { get(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any; getPhysicalCameraIds(): java.util.Set<string>; unwrap(): globalAndroid.hardware.camera2.CameraCharacteristics });
              public constructor();
              public getPhysicalCameraIds(): java.util.Set<string>;
              public unwrap(): globalAndroid.hardware.camera2.CameraCharacteristics;
              public get(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraDeviceCompat {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraDeviceCompat>;
            public static SESSION_OPERATION_MODE_NORMAL: number;
            public static SESSION_OPERATION_MODE_CONSTRAINED_HIGH_SPEED: number;
            public toCameraDevice(): globalAndroid.hardware.camera2.CameraDevice;
            public createCaptureSession(param0: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat): void;
            public static toCameraDeviceCompat(param0: globalAndroid.hardware.camera2.CameraDevice, param1: globalAndroid.os.Handler): androidx.camera.camera2.internal.compat.CameraDeviceCompat;
            public static toCameraDeviceCompat(param0: globalAndroid.hardware.camera2.CameraDevice): androidx.camera.camera2.internal.compat.CameraDeviceCompat;
          }
          export module CameraDeviceCompat {
            export class CameraDeviceCompatImpl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraDeviceCompat.CameraDeviceCompatImpl>;
              /**
               * Constructs a new instance of the androidx.camera.camera2.internal.compat.CameraDeviceCompat$CameraDeviceCompatImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { createCaptureSession(param0: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat): void; unwrap(): globalAndroid.hardware.camera2.CameraDevice });
              public constructor();
              public unwrap(): globalAndroid.hardware.camera2.CameraDevice;
              public createCaptureSession(param0: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat): void;
            }
            export class StateCallbackExecutorWrapper {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraDeviceCompat.StateCallbackExecutorWrapper>;
              public onClosed(param0: globalAndroid.hardware.camera2.CameraDevice): void;
              public onDisconnected(param0: globalAndroid.hardware.camera2.CameraDevice): void;
              public onOpened(param0: globalAndroid.hardware.camera2.CameraDevice): void;
              public onError(param0: globalAndroid.hardware.camera2.CameraDevice, param1: number): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraDeviceCompatApi23Impl extends androidx.camera.camera2.internal.compat.CameraDeviceCompatBaseImpl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraDeviceCompatApi23Impl>;
            public createCaptureSession(param0: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat): void;
            public unwrap(): globalAndroid.hardware.camera2.CameraDevice;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraDeviceCompatApi24Impl extends androidx.camera.camera2.internal.compat.CameraDeviceCompatApi23Impl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraDeviceCompatApi24Impl>;
            public createCaptureSession(param0: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat): void;
            public unwrap(): globalAndroid.hardware.camera2.CameraDevice;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraDeviceCompatApi28Impl extends androidx.camera.camera2.internal.compat.CameraDeviceCompatApi24Impl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraDeviceCompatApi28Impl>;
            public createCaptureSession(param0: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat): void;
            public unwrap(): globalAndroid.hardware.camera2.CameraDevice;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraDeviceCompatBaseImpl extends androidx.camera.camera2.internal.compat.CameraDeviceCompat.CameraDeviceCompatImpl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraDeviceCompatBaseImpl>;
            public createCaptureSession(param0: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat): void;
            public unwrap(): globalAndroid.hardware.camera2.CameraDevice;
          }
          export module CameraDeviceCompatBaseImpl {
            export class CameraDeviceCompatParamsApi21 {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraDeviceCompatBaseImpl.CameraDeviceCompatParamsApi21>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraManagerCompat {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraManagerCompat>;
            public static from(param0: globalAndroid.content.Context): androidx.camera.camera2.internal.compat.CameraManagerCompat;
            public static from(param0: androidx.camera.camera2.internal.compat.CameraManagerCompat.CameraManagerCompatImpl): androidx.camera.camera2.internal.compat.CameraManagerCompat;
            public getCameraCharacteristicsCompat(param0: string): androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat;
            public getCameraIdList(): androidNative.Array<string>;
            public unregisterAvailabilityCallback(param0: globalAndroid.hardware.camera2.CameraManager.AvailabilityCallback): void;
            public openCamera(param0: string, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraDevice.StateCallback): void;
            public static from(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): androidx.camera.camera2.internal.compat.CameraManagerCompat;
            public registerAvailabilityCallback(param0: java.util.concurrent.Executor, param1: globalAndroid.hardware.camera2.CameraManager.AvailabilityCallback): void;
            public unwrap(): globalAndroid.hardware.camera2.CameraManager;
          }
          export module CameraManagerCompat {
            export class AvailabilityCallbackExecutorWrapper {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraManagerCompat.AvailabilityCallbackExecutorWrapper>;
              public onCameraAvailable(param0: string): void;
              public onCameraUnavailable(param0: string): void;
              public onCameraAccessPrioritiesChanged(): void;
            }
            export class CameraManagerCompatImpl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraManagerCompat.CameraManagerCompatImpl>;
              /**
               * Constructs a new instance of the androidx.camera.camera2.internal.compat.CameraManagerCompat$CameraManagerCompatImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getCameraIdList(): androidNative.Array<string>;
                registerAvailabilityCallback(param0: java.util.concurrent.Executor, param1: globalAndroid.hardware.camera2.CameraManager.AvailabilityCallback): void;
                unregisterAvailabilityCallback(param0: globalAndroid.hardware.camera2.CameraManager.AvailabilityCallback): void;
                getCameraCharacteristics(param0: string): globalAndroid.hardware.camera2.CameraCharacteristics;
                openCamera(param0: string, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraDevice.StateCallback): void;
                getCameraManager(): globalAndroid.hardware.camera2.CameraManager;
                from(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): androidx.camera.camera2.internal.compat.CameraManagerCompat.CameraManagerCompatImpl;
              });
              public constructor();
              public openCamera(param0: string, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraDevice.StateCallback): void;
              public getCameraManager(): globalAndroid.hardware.camera2.CameraManager;
              public registerAvailabilityCallback(param0: java.util.concurrent.Executor, param1: globalAndroid.hardware.camera2.CameraManager.AvailabilityCallback): void;
              public unregisterAvailabilityCallback(param0: globalAndroid.hardware.camera2.CameraManager.AvailabilityCallback): void;
              public getCameraIdList(): androidNative.Array<string>;
              public static from(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): androidx.camera.camera2.internal.compat.CameraManagerCompat.CameraManagerCompatImpl;
              public getCameraCharacteristics(param0: string): globalAndroid.hardware.camera2.CameraCharacteristics;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraManagerCompatApi28Impl extends androidx.camera.camera2.internal.compat.CameraManagerCompatBaseImpl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraManagerCompatApi28Impl>;
            public getCameraCharacteristics(param0: string): globalAndroid.hardware.camera2.CameraCharacteristics;
            public unregisterAvailabilityCallback(param0: globalAndroid.hardware.camera2.CameraManager.AvailabilityCallback): void;
            public openCamera(param0: string, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraDevice.StateCallback): void;
            public getCameraIdList(): androidNative.Array<string>;
            public registerAvailabilityCallback(param0: java.util.concurrent.Executor, param1: globalAndroid.hardware.camera2.CameraManager.AvailabilityCallback): void;
            public static from(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): androidx.camera.camera2.internal.compat.CameraManagerCompat.CameraManagerCompatImpl;
            public getCameraManager(): globalAndroid.hardware.camera2.CameraManager;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraManagerCompatApi29Impl extends androidx.camera.camera2.internal.compat.CameraManagerCompatApi28Impl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraManagerCompatApi29Impl>;
            public getCameraCharacteristics(param0: string): globalAndroid.hardware.camera2.CameraCharacteristics;
            public openCamera(param0: string, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraDevice.StateCallback): void;
            public getCameraIdList(): androidNative.Array<string>;
            public unregisterAvailabilityCallback(param0: globalAndroid.hardware.camera2.CameraManager.AvailabilityCallback): void;
            public registerAvailabilityCallback(param0: java.util.concurrent.Executor, param1: globalAndroid.hardware.camera2.CameraManager.AvailabilityCallback): void;
            public static from(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): androidx.camera.camera2.internal.compat.CameraManagerCompat.CameraManagerCompatImpl;
            public getCameraManager(): globalAndroid.hardware.camera2.CameraManager;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export class CameraManagerCompatBaseImpl extends androidx.camera.camera2.internal.compat.CameraManagerCompat.CameraManagerCompatImpl {
            public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraManagerCompatBaseImpl>;
            public getCameraCharacteristics(param0: string): globalAndroid.hardware.camera2.CameraCharacteristics;
            public getCameraIdList(): androidNative.Array<string>;
            public unregisterAvailabilityCallback(param0: globalAndroid.hardware.camera2.CameraManager.AvailabilityCallback): void;
            public openCamera(param0: string, param1: java.util.concurrent.Executor, param2: globalAndroid.hardware.camera2.CameraDevice.StateCallback): void;
            public registerAvailabilityCallback(param0: java.util.concurrent.Executor, param1: globalAndroid.hardware.camera2.CameraManager.AvailabilityCallback): void;
            public static from(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): androidx.camera.camera2.internal.compat.CameraManagerCompat.CameraManagerCompatImpl;
            public getCameraManager(): globalAndroid.hardware.camera2.CameraManager;
          }
          export module CameraManagerCompatBaseImpl {
            export class CameraManagerCompatParamsApi21 {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.CameraManagerCompatBaseImpl.CameraManagerCompatParamsApi21>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module params {
            export class InputConfigurationCompat {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.InputConfigurationCompat>;
              public getWidth(): number;
              public getHeight(): number;
              public constructor(param0: number, param1: number, param2: number);
              public static wrap(param0: any): androidx.camera.camera2.internal.compat.params.InputConfigurationCompat;
              public unwrap(): any;
              public hashCode(): number;
              public toString(): string;
              public isMultiResolution(): boolean;
              public getFormat(): number;
              public equals(param0: any): boolean;
            }
            export module InputConfigurationCompat {
              export class InputConfigurationCompatApi23Impl extends androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatApi23Impl>;
                public toString(): string;
                public isMultiResolution(): boolean;
                public equals(param0: any): boolean;
                public getFormat(): number;
                public getInputConfiguration(): any;
                public hashCode(): number;
                public getHeight(): number;
                public getWidth(): number;
              }
              export class InputConfigurationCompatApi31Impl extends androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatApi23Impl {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatApi31Impl>;
                public isMultiResolution(): boolean;
                public getFormat(): number;
                public getInputConfiguration(): any;
                public getHeight(): number;
                public getWidth(): number;
              }
              export class InputConfigurationCompatBaseImpl extends androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatBaseImpl>;
                public toString(): string;
                public isMultiResolution(): boolean;
                public equals(param0: any): boolean;
                public getFormat(): number;
                public getInputConfiguration(): any;
                public hashCode(): number;
                public getHeight(): number;
                public getWidth(): number;
              }
              export class InputConfigurationCompatImpl {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl>;
                /**
                 * Constructs a new instance of the androidx.camera.camera2.internal.compat.params.InputConfigurationCompat$InputConfigurationCompatImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { getWidth(): number; getHeight(): number; getFormat(): number; isMultiResolution(): boolean; getInputConfiguration(): any });
                public constructor();
                public isMultiResolution(): boolean;
                public getFormat(): number;
                public getInputConfiguration(): any;
                public getHeight(): number;
                public getWidth(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module params {
            export class OutputConfigurationCompat {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat>;
              public static SURFACE_GROUP_ID_NONE: number;
              public static STREAM_USE_CASE_NONE: number;
              public removeSurface(param0: globalAndroid.view.Surface): void;
              public getSurfaceGroupId(): number;
              public unwrap(): any;
              public hashCode(): number;
              public constructor(param0: globalAndroid.view.Surface);
              public getMaxSharedSurfaceCount(): number;
              public getStreamUseCase(): number;
              public constructor(param0: number, param1: globalAndroid.view.Surface);
              public enableSurfaceSharing(): void;
              public getSurfaces(): java.util.List<globalAndroid.view.Surface>;
              public constructor(param0: any, param1: java.lang.Class<any>);
              public setStreamUseCase(param0: number): void;
              public static wrap(param0: any): androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat;
              public setPhysicalCameraId(param0: string): void;
              public addSurface(param0: globalAndroid.view.Surface): void;
              public getSurface(): globalAndroid.view.Surface;
              public equals(param0: any): boolean;
              public getPhysicalCameraId(): string;
            }
            export module OutputConfigurationCompat {
              export class OutputConfigurationCompatImpl {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat.OutputConfigurationCompatImpl>;
                /**
                 * Constructs a new instance of the androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat$OutputConfigurationCompatImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { enableSurfaceSharing(): void; getPhysicalCameraId(): string; setPhysicalCameraId(param0: string): void; addSurface(param0: globalAndroid.view.Surface): void; removeSurface(param0: globalAndroid.view.Surface): void; getMaxSharedSurfaceCount(): number; setStreamUseCase(param0: number): void; getStreamUseCase(): number; getSurface(): globalAndroid.view.Surface; getSurfaces(): java.util.List<globalAndroid.view.Surface>; getSurfaceGroupId(): number; getOutputConfiguration(): any });
                public constructor();
                public setStreamUseCase(param0: number): void;
                public getOutputConfiguration(): any;
                public removeSurface(param0: globalAndroid.view.Surface): void;
                public setPhysicalCameraId(param0: string): void;
                public getMaxSharedSurfaceCount(): number;
                public getStreamUseCase(): number;
                public getSurfaceGroupId(): number;
                public getSurface(): globalAndroid.view.Surface;
                public addSurface(param0: globalAndroid.view.Surface): void;
                public enableSurfaceSharing(): void;
                public getSurfaces(): java.util.List<globalAndroid.view.Surface>;
                public getPhysicalCameraId(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module params {
            export class OutputConfigurationCompatApi24Impl extends androidx.camera.camera2.internal.compat.params.OutputConfigurationCompatBaseImpl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompatApi24Impl>;
              public setStreamUseCase(param0: number): void;
              public getSurfaceGroupId(): number;
              public removeSurface(param0: globalAndroid.view.Surface): void;
              public setPhysicalCameraId(param0: string): void;
              public getOutputConfiguration(): any;
              public addSurface(param0: globalAndroid.view.Surface): void;
              public getMaxSharedSurfaceCount(): number;
              public getStreamUseCase(): number;
              public enableSurfaceSharing(): void;
              public getSurface(): globalAndroid.view.Surface;
              public getSurfaces(): java.util.List<globalAndroid.view.Surface>;
              public getPhysicalCameraId(): string;
            }
            export module OutputConfigurationCompatApi24Impl {
              export class OutputConfigurationParamsApi24 {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompatApi24Impl.OutputConfigurationParamsApi24>;
                public equals(param0: any): boolean;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module params {
            export class OutputConfigurationCompatApi26Impl extends androidx.camera.camera2.internal.compat.params.OutputConfigurationCompatApi24Impl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompatApi26Impl>;
              public setStreamUseCase(param0: number): void;
              public removeSurface(param0: globalAndroid.view.Surface): void;
              public getSurfaceGroupId(): number;
              public setPhysicalCameraId(param0: string): void;
              public getOutputConfiguration(): any;
              public addSurface(param0: globalAndroid.view.Surface): void;
              public getMaxSharedSurfaceCount(): number;
              public getStreamUseCase(): number;
              public enableSurfaceSharing(): void;
              public getSurface(): globalAndroid.view.Surface;
              public getSurfaces(): java.util.List<globalAndroid.view.Surface>;
              public getPhysicalCameraId(): string;
            }
            export module OutputConfigurationCompatApi26Impl {
              export class OutputConfigurationParamsApi26 {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompatApi26Impl.OutputConfigurationParamsApi26>;
                public equals(param0: any): boolean;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module params {
            export class OutputConfigurationCompatApi28Impl extends androidx.camera.camera2.internal.compat.params.OutputConfigurationCompatApi26Impl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompatApi28Impl>;
              public setStreamUseCase(param0: number): void;
              public removeSurface(param0: globalAndroid.view.Surface): void;
              public getSurfaceGroupId(): number;
              public setPhysicalCameraId(param0: string): void;
              public getOutputConfiguration(): any;
              public getMaxSharedSurfaceCount(): number;
              public addSurface(param0: globalAndroid.view.Surface): void;
              public getStreamUseCase(): number;
              public enableSurfaceSharing(): void;
              public getSurface(): globalAndroid.view.Surface;
              public getSurfaces(): java.util.List<globalAndroid.view.Surface>;
              public getPhysicalCameraId(): string;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module params {
            export class OutputConfigurationCompatApi33Impl extends androidx.camera.camera2.internal.compat.params.OutputConfigurationCompatApi28Impl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompatApi33Impl>;
              public setStreamUseCase(param0: number): void;
              public removeSurface(param0: globalAndroid.view.Surface): void;
              public getSurfaceGroupId(): number;
              public setPhysicalCameraId(param0: string): void;
              public getOutputConfiguration(): any;
              public getStreamUseCase(): number;
              public addSurface(param0: globalAndroid.view.Surface): void;
              public getMaxSharedSurfaceCount(): number;
              public enableSurfaceSharing(): void;
              public getSurface(): globalAndroid.view.Surface;
              public getSurfaces(): java.util.List<globalAndroid.view.Surface>;
              public getPhysicalCameraId(): string;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module params {
            export class OutputConfigurationCompatBaseImpl extends androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat.OutputConfigurationCompatImpl {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompatBaseImpl>;
              public removeSurface(param0: globalAndroid.view.Surface): void;
              public getSurfaceGroupId(): number;
              public hashCode(): number;
              public getStreamUseCase(): number;
              public getMaxSharedSurfaceCount(): number;
              public enableSurfaceSharing(): void;
              public getSurfaces(): java.util.List<globalAndroid.view.Surface>;
              public setStreamUseCase(param0: number): void;
              public setPhysicalCameraId(param0: string): void;
              public getOutputConfiguration(): any;
              public addSurface(param0: globalAndroid.view.Surface): void;
              public getSurface(): globalAndroid.view.Surface;
              public equals(param0: any): boolean;
              public getPhysicalCameraId(): string;
            }
            export module OutputConfigurationCompatBaseImpl {
              export class OutputConfigurationParamsApi21 {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompatBaseImpl.OutputConfigurationParamsApi21>;
                public equals(param0: any): boolean;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module params {
            export class SessionConfigurationCompat {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat>;
              public static SESSION_REGULAR: number;
              public static SESSION_HIGH_SPEED: number;
              public unwrap(): any;
              public hashCode(): number;
              public constructor(param0: number, param1: java.util.List<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat>, param2: java.util.concurrent.Executor, param3: globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback);
              public setSessionParameters(param0: globalAndroid.hardware.camera2.CaptureRequest): void;
              public setInputConfiguration(param0: androidx.camera.camera2.internal.compat.params.InputConfigurationCompat): void;
              public static wrap(param0: any): androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat;
              public getSessionParameters(): globalAndroid.hardware.camera2.CaptureRequest;
              public static transformFromCompat(param0: java.util.List<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat>): java.util.List<globalAndroid.hardware.camera2.params.OutputConfiguration>;
              public getSessionType(): number;
              public getOutputConfigurations(): java.util.List<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat>;
              public equals(param0: any): boolean;
              public getInputConfiguration(): androidx.camera.camera2.internal.compat.params.InputConfigurationCompat;
              public getStateCallback(): globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback;
              public getExecutor(): java.util.concurrent.Executor;
            }
            export module SessionConfigurationCompat {
              export class SessionConfigurationCompatApi28Impl extends androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatApi28Impl>;
                public getStateCallback(): globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback;
                public setSessionParameters(param0: globalAndroid.hardware.camera2.CaptureRequest): void;
                public setInputConfiguration(param0: androidx.camera.camera2.internal.compat.params.InputConfigurationCompat): void;
                public getExecutor(): java.util.concurrent.Executor;
                public getOutputConfigurations(): java.util.List<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat>;
                public equals(param0: any): boolean;
                public getSessionType(): number;
                public getSessionParameters(): globalAndroid.hardware.camera2.CaptureRequest;
                public getInputConfiguration(): androidx.camera.camera2.internal.compat.params.InputConfigurationCompat;
                public getSessionConfiguration(): any;
                public hashCode(): number;
              }
              export class SessionConfigurationCompatBaseImpl extends androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatBaseImpl>;
                public getStateCallback(): globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback;
                public setSessionParameters(param0: globalAndroid.hardware.camera2.CaptureRequest): void;
                public setInputConfiguration(param0: androidx.camera.camera2.internal.compat.params.InputConfigurationCompat): void;
                public getExecutor(): java.util.concurrent.Executor;
                public getOutputConfigurations(): java.util.List<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat>;
                public equals(param0: any): boolean;
                public getSessionType(): number;
                public getSessionParameters(): globalAndroid.hardware.camera2.CaptureRequest;
                public getInputConfiguration(): androidx.camera.camera2.internal.compat.params.InputConfigurationCompat;
                public getSessionConfiguration(): any;
                public hashCode(): number;
              }
              export class SessionConfigurationCompatImpl {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl>;
                /**
                 * Constructs a new instance of the androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat$SessionConfigurationCompatImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { getSessionType(): number; getOutputConfigurations(): java.util.List<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat>; getStateCallback(): globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback; getExecutor(): java.util.concurrent.Executor; getInputConfiguration(): androidx.camera.camera2.internal.compat.params.InputConfigurationCompat; setInputConfiguration(param0: androidx.camera.camera2.internal.compat.params.InputConfigurationCompat): void; getSessionParameters(): globalAndroid.hardware.camera2.CaptureRequest; setSessionParameters(param0: globalAndroid.hardware.camera2.CaptureRequest): void; getSessionConfiguration(): any });
                public constructor();
                public getStateCallback(): globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback;
                public setSessionParameters(param0: globalAndroid.hardware.camera2.CaptureRequest): void;
                public setInputConfiguration(param0: androidx.camera.camera2.internal.compat.params.InputConfigurationCompat): void;
                public getExecutor(): java.util.concurrent.Executor;
                public getOutputConfigurations(): java.util.List<androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat>;
                public getSessionType(): number;
                public getSessionParameters(): globalAndroid.hardware.camera2.CaptureRequest;
                public getInputConfiguration(): androidx.camera.camera2.internal.compat.params.InputConfigurationCompat;
                public getSessionConfiguration(): any;
              }
              export class SessionMode {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionMode>;
                /**
                 * Constructs a new instance of the androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat$SessionMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class AeFpsRangeLegacyQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.AeFpsRangeLegacyQuirk>;
              public getRange(): globalAndroid.util.Range<java.lang.Integer>;
              public constructor(param0: androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat);
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class AfRegionFlipHorizontallyQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.AfRegionFlipHorizontallyQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class AspectRatioLegacyApi21Quirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.AspectRatioLegacyApi21Quirk>;
              public constructor();
              public getCorrectedAspectRatio(): number;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class AutoFlashUnderExposedQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.AutoFlashUnderExposedQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class CamcorderProfileResolutionQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.CamcorderProfileResolutionQuirk>;
              public getSupportedResolutions(): java.util.List<any>;
              public constructor(param0: androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat);
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class CameraNoResponseWhenEnablingFlashQuirk extends androidx.camera.camera2.internal.compat.quirk.UseTorchAsFlashQuirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.CameraNoResponseWhenEnablingFlashQuirk>;
              public static AFFECTED_MODELS: java.util.List<string>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class CameraQuirks {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.CameraQuirks>;
              public static get(param0: string, param1: androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat): androidx.camera.core.impl.Quirks;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class CaptureSessionOnClosedNotCalledQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.CaptureSessionOnClosedNotCalledQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class CaptureSessionStuckQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.CaptureSessionStuckQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class ConfigureSurfaceToSecondarySessionFailQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.ConfigureSurfaceToSecondarySessionFailQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class CrashWhenTakingPhotoWithAutoFlashAEModeQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.CrashWhenTakingPhotoWithAutoFlashAEModeQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class DeviceQuirks {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.DeviceQuirks>;
              public static getAll(): androidx.camera.core.impl.Quirks;
              public static get(param0: java.lang.Class<any>): androidx.camera.core.impl.Quirk;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class DeviceQuirksLoader {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.DeviceQuirksLoader>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class ExcludedSupportedSizesQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.ExcludedSupportedSizesQuirk>;
              public constructor();
              public getExcludedSizes(param0: string, param1: number): java.util.List<any>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class ExtraCroppingQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.ExtraCroppingQuirk>;
              public constructor();
              public getVerifiedResolution(param0: androidx.camera.core.impl.SurfaceConfig.ConfigType): any;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class ExtraSupportedSurfaceCombinationsQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.ExtraSupportedSurfaceCombinationsQuirk>;
              public constructor();
              public getExtraSupportedSurfaceCombinations(param0: string, param1: number): java.util.List<androidx.camera.core.impl.SurfaceCombination>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class FlashAvailabilityBufferUnderflowQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.FlashAvailabilityBufferUnderflowQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class FlashTooSlowQuirk extends androidx.camera.camera2.internal.compat.quirk.UseTorchAsFlashQuirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.FlashTooSlowQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class ImageCaptureFailWithAutoFlashQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.ImageCaptureFailWithAutoFlashQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class ImageCaptureFlashNotFireQuirk extends androidx.camera.camera2.internal.compat.quirk.UseTorchAsFlashQuirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.ImageCaptureFlashNotFireQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class ImageCapturePixelHDRPlusQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.ImageCapturePixelHDRPlusQuirk>;
              public static BUILD_MODELS: java.util.List<string>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class ImageCaptureWashedOutImageQuirk extends androidx.camera.camera2.internal.compat.quirk.UseTorchAsFlashQuirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.ImageCaptureWashedOutImageQuirk>;
              public static BUILD_MODELS: java.util.List<string>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class ImageCaptureWithFlashUnderexposureQuirk extends androidx.camera.camera2.internal.compat.quirk.UseTorchAsFlashQuirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.ImageCaptureWithFlashUnderexposureQuirk>;
              public static BUILD_MODELS: java.util.List<string>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class JpegHalCorruptImageQuirk extends androidx.camera.core.internal.compat.quirk.SoftwareJpegEncodingPreferredQuirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.JpegHalCorruptImageQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class Nexus4AndroidLTargetAspectRatioQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.Nexus4AndroidLTargetAspectRatioQuirk>;
              public constructor();
              public getCorrectedAspectRatio(): number;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class PreviewOrientationIncorrectQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.PreviewOrientationIncorrectQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class PreviewPixelHDRnetQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.PreviewPixelHDRnetQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class RepeatingStreamConstraintForVideoRecordingQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.RepeatingStreamConstraintForVideoRecordingQuirk>;
              public constructor();
              public static isHuaweiMate9(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class StillCaptureFlashStopRepeatingQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.StillCaptureFlashStopRepeatingQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class TextureViewIsClosedQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.TextureViewIsClosedQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class TorchIsClosedAfterImageCapturingQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.TorchIsClosedAfterImageCapturingQuirk>;
              public static BUILD_MODELS: java.util.List<string>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class UseTorchAsFlashQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.UseTorchAsFlashQuirk>;
              /**
               * Constructs a new instance of the androidx.camera.camera2.internal.compat.quirk.UseTorchAsFlashQuirk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module quirk {
            export class YuvImageOnePixelShiftQuirk extends androidx.camera.core.internal.compat.quirk.OnePixelShiftQuirk {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.quirk.YuvImageOnePixelShiftQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class AeFpsRange {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.AeFpsRange>;
              public addAeFpsRangeOptions(param0: androidx.camera.camera2.impl.Camera2ImplConfig.Builder): void;
              public constructor(param0: androidx.camera.core.impl.Quirks);
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class AutoFlashAEModeDisabler {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.AutoFlashAEModeDisabler>;
              public constructor(param0: androidx.camera.core.impl.Quirks);
              public getCorrectedAeMode(param0: number): number;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class CamcorderProfileResolutionValidator {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.CamcorderProfileResolutionValidator>;
              public constructor(param0: androidx.camera.camera2.internal.compat.quirk.CamcorderProfileResolutionQuirk);
              public hasQuirk(): boolean;
              public hasValidVideoResolution(param0: androidx.camera.core.impl.CamcorderProfileProxy): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class ExcludedSupportedSizesContainer {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.ExcludedSupportedSizesContainer>;
              public constructor(param0: string);
              public get(param0: number): java.util.List<any>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class ExtraSupportedSurfaceCombinationsContainer {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.ExtraSupportedSurfaceCombinationsContainer>;
              public constructor();
              public get(param0: string, param1: number): java.util.List<androidx.camera.core.impl.SurfaceCombination>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class FlashAvailabilityChecker {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.FlashAvailabilityChecker>;
              public static isFlashAvailable(param0: androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class ForceCloseCaptureSession {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.ForceCloseCaptureSession>;
              public constructor(param0: androidx.camera.core.impl.Quirks);
              public shouldForceClose(): boolean;
              public onSessionConfigured(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession, param1: java.util.List<androidx.camera.camera2.internal.SynchronizedCaptureSession>, param2: java.util.List<androidx.camera.camera2.internal.SynchronizedCaptureSession>, param3: androidx.camera.camera2.internal.compat.workaround.ForceCloseCaptureSession.OnConfigured): void;
            }
            export module ForceCloseCaptureSession {
              export class OnConfigured {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.ForceCloseCaptureSession.OnConfigured>;
                /**
                 * Constructs a new instance of the androidx.camera.camera2.internal.compat.workaround.ForceCloseCaptureSession$OnConfigured interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { run(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void });
                public constructor();
                public run(param0: androidx.camera.camera2.internal.SynchronizedCaptureSession): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class ForceCloseDeferrableSurface {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.ForceCloseDeferrableSurface>;
              public constructor(param0: androidx.camera.core.impl.Quirks, param1: androidx.camera.core.impl.Quirks);
              public shouldForceClose(): boolean;
              public onSessionEnd(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class ImageCapturePixelHDRPlus {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.ImageCapturePixelHDRPlus>;
              public constructor();
              public toggleHDRPlus(param0: number, param1: androidx.camera.camera2.impl.Camera2ImplConfig.Builder): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class MaxPreviewSize {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.MaxPreviewSize>;
              public constructor();
              public getMaxPreviewResolution(param0: any): any;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class MeteringRegionCorrection {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.MeteringRegionCorrection>;
              public constructor(param0: androidx.camera.core.impl.Quirks);
              public getCorrectedPoint(param0: androidx.camera.core.MeteringPoint, param1: number): globalAndroid.graphics.PointF;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class OverrideAeModeForStillCapture {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.OverrideAeModeForStillCapture>;
              public onAePrecaptureFinished(): void;
              public constructor(param0: androidx.camera.core.impl.Quirks);
              public onAePrecaptureStarted(): void;
              public shouldSetAeModeAlwaysFlash(param0: number): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class PreviewPixelHDRnet {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.PreviewPixelHDRnet>;
              public static setHDRnet(param0: androidx.camera.core.impl.SessionConfig.Builder): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class ResolutionCorrector {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.ResolutionCorrector>;
              public constructor();
              public insertOrPrioritize(param0: androidx.camera.core.impl.SurfaceConfig.ConfigType, param1: java.util.List<any>): java.util.List<any>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class StillCaptureFlow {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.StillCaptureFlow>;
              public constructor();
              public shouldStopRepeatingBeforeCapture(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: boolean): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class SupportedRepeatingSurfaceSize {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.SupportedRepeatingSurfaceSize>;
              public constructor();
              public getSupportedSizes(param0: androidNative.Array<any>): androidNative.Array<any>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class TargetAspectRatio {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.TargetAspectRatio>;
              public static RATIO_4_3: number;
              public static RATIO_16_9: number;
              public static RATIO_MAX_JPEG: number;
              public static RATIO_ORIGINAL: number;
              public constructor();
              public get(param0: string, param1: androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat): number;
            }
            export module TargetAspectRatio {
              export class Ratio {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.TargetAspectRatio.Ratio>;
                /**
                 * Constructs a new instance of the androidx.camera.camera2.internal.compat.workaround.TargetAspectRatio$Ratio interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class TorchStateReset {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.TorchStateReset>;
              public constructor();
              public isTorchResetRequired(param0: java.util.List<globalAndroid.hardware.camera2.CaptureRequest>, param1: boolean): boolean;
              public createTorchResetRequest(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class UseTorchAsFlash {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.UseTorchAsFlash>;
              public constructor(param0: androidx.camera.core.impl.Quirks);
              public shouldUseTorchAsFlash(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module internal {
        export module compat {
          export module workaround {
            export class WaitForRepeatingRequestStart {
              public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.WaitForRepeatingRequestStart>;
              public getStartStreamFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
              public shouldWaitRepeatingSubmit(): boolean;
              public constructor(param0: androidx.camera.core.impl.Quirks);
              public openCaptureSession(param0: globalAndroid.hardware.camera2.CameraDevice, param1: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat, param2: java.util.List<androidx.camera.core.impl.DeferrableSurface>, param3: java.util.List<androidx.camera.camera2.internal.SynchronizedCaptureSession>, param4: androidx.camera.camera2.internal.compat.workaround.WaitForRepeatingRequestStart.OpenCaptureSession): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
              public setSingleRepeatingRequest(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback, param2: androidx.camera.camera2.internal.compat.workaround.WaitForRepeatingRequestStart.SingleRepeatingRequest): number;
              public onSessionEnd(): void;
            }
            export module WaitForRepeatingRequestStart {
              export class OpenCaptureSession {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.WaitForRepeatingRequestStart.OpenCaptureSession>;
                /**
                 * Constructs a new instance of the androidx.camera.camera2.internal.compat.workaround.WaitForRepeatingRequestStart$OpenCaptureSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { run(param0: globalAndroid.hardware.camera2.CameraDevice, param1: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat, param2: java.util.List<androidx.camera.core.impl.DeferrableSurface>): com.google.common.util.concurrent.ListenableFuture<java.lang.Void> });
                public constructor();
                public run(param0: globalAndroid.hardware.camera2.CameraDevice, param1: androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat, param2: java.util.List<androidx.camera.core.impl.DeferrableSurface>): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
              }
              export class SingleRepeatingRequest {
                public static class: java.lang.Class<androidx.camera.camera2.internal.compat.workaround.WaitForRepeatingRequestStart.SingleRepeatingRequest>;
                /**
                 * Constructs a new instance of the androidx.camera.camera2.internal.compat.workaround.WaitForRepeatingRequestStart$SingleRepeatingRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { run(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number });
                public constructor();
                public run(param0: globalAndroid.hardware.camera2.CaptureRequest, param1: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module interop {
        export class Camera2CameraControl {
          public static class: java.lang.Class<androidx.camera.camera2.interop.Camera2CameraControl>;
          public static TAG_KEY: string;
          public setCaptureRequestOptions(param0: androidx.camera.camera2.interop.CaptureRequestOptions): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public constructor(param0: androidx.camera.camera2.internal.Camera2CameraControlImpl, param1: java.util.concurrent.Executor);
          public getCaptureRequestListener(): androidx.camera.camera2.internal.Camera2CameraControlImpl.CaptureResultListener;
          public getCamera2ImplConfig(): androidx.camera.camera2.impl.Camera2ImplConfig;
          public setActive(param0: boolean): void;
          public addCaptureRequestOptions(param0: androidx.camera.camera2.interop.CaptureRequestOptions): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public clearCaptureRequestOptions(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public getCaptureRequestOptions(): androidx.camera.camera2.interop.CaptureRequestOptions;
          public static from(param0: androidx.camera.core.CameraControl): androidx.camera.camera2.interop.Camera2CameraControl;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module interop {
        export class Camera2CameraInfo {
          public static class: java.lang.Class<androidx.camera.camera2.interop.Camera2CameraInfo>;
          public static from(param0: androidx.camera.core.CameraInfo): androidx.camera.camera2.interop.Camera2CameraInfo;
          public getCameraId(): string;
          public constructor(param0: androidx.camera.camera2.internal.Camera2CameraInfoImpl);
          public getCameraCharacteristic(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
          public static extractCameraCharacteristics(param0: androidx.camera.core.CameraInfo): globalAndroid.hardware.camera2.CameraCharacteristics;
          public getCameraCharacteristicsMap(): java.util.Map<string, globalAndroid.hardware.camera2.CameraCharacteristics>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module interop {
        export class Camera2Interop {
          public static class: java.lang.Class<androidx.camera.camera2.interop.Camera2Interop>;
        }
        export module Camera2Interop {
          export class Extender<T> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.camera2.interop.Camera2Interop.Extender<any>>;
            public constructor(param0: androidx.camera.core.ExtendableBuilder<T>);
            public setCaptureRequestOption(param0: globalAndroid.hardware.camera2.CaptureRequest.Key, param1: any): androidx.camera.camera2.interop.Camera2Interop.Extender<any>;
            public setDeviceStateCallback(param0: globalAndroid.hardware.camera2.CameraDevice.StateCallback): androidx.camera.camera2.interop.Camera2Interop.Extender<T>;
            public setStreamUseCase(param0: number): androidx.camera.camera2.interop.Camera2Interop.Extender<T>;
            public setSessionStateCallback(param0: globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback): androidx.camera.camera2.interop.Camera2Interop.Extender<T>;
            public setPhysicalCameraId(param0: string): androidx.camera.camera2.interop.Camera2Interop.Extender<T>;
            public setCaptureRequestTemplate(param0: number): androidx.camera.camera2.interop.Camera2Interop.Extender<T>;
            public setSessionCaptureCallback(param0: globalAndroid.hardware.camera2.CameraCaptureSession.CaptureCallback): androidx.camera.camera2.interop.Camera2Interop.Extender<T>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module interop {
        export class CaptureRequestOptions extends androidx.camera.core.impl.ReadableConfig {
          public static class: java.lang.Class<androidx.camera.camera2.interop.CaptureRequestOptions>;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getCaptureRequestOption(param0: globalAndroid.hardware.camera2.CaptureRequest.Key, param1: any): any;
          public getConfig(): androidx.camera.core.impl.Config;
          public constructor(param0: androidx.camera.core.impl.Config);
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public getCaptureRequestOption(param0: globalAndroid.hardware.camera2.CaptureRequest.Key): any;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
        }
        export module CaptureRequestOptions {
          export class Builder extends androidx.camera.core.ExtendableBuilder<androidx.camera.camera2.interop.CaptureRequestOptions> {
            public static class: java.lang.Class<androidx.camera.camera2.interop.CaptureRequestOptions.Builder>;
            public constructor();
            public static from(param0: androidx.camera.core.impl.Config): androidx.camera.camera2.interop.CaptureRequestOptions.Builder;
            public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
            public clearCaptureRequestOption(param0: globalAndroid.hardware.camera2.CaptureRequest.Key): androidx.camera.camera2.interop.CaptureRequestOptions.Builder;
            public setCaptureRequestOption(param0: globalAndroid.hardware.camera2.CaptureRequest.Key, param1: any): androidx.camera.camera2.interop.CaptureRequestOptions.Builder;
            public build(): androidx.camera.camera2.interop.CaptureRequestOptions;
            public build(): any;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module camera2 {
      export module interop {
        export class ExperimentalCamera2Interop {
          public static class: java.lang.Class<androidx.camera.camera2.interop.ExperimentalCamera2Interop>;
          /**
           * Constructs a new instance of the androidx.camera.camera2.interop.ExperimentalCamera2Interop interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class AndroidImageProxy extends androidx.camera.core.ImageProxy {
        public static class: java.lang.Class<androidx.camera.core.AndroidImageProxy>;
        public getImageInfo(): androidx.camera.core.ImageInfo;
        public close(): void;
        public getHeight(): number;
        public getWidth(): number;
        public getCropRect(): globalAndroid.graphics.Rect;
        public setCropRect(param0: globalAndroid.graphics.Rect): void;
        public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
        public getImage(): globalAndroid.media.Image;
        public getFormat(): number;
      }
      export module AndroidImageProxy {
        export class PlaneProxy extends androidx.camera.core.ImageProxy.PlaneProxy {
          public static class: java.lang.Class<androidx.camera.core.AndroidImageProxy.PlaneProxy>;
          public getRowStride(): number;
          public getBuffer(): java.nio.ByteBuffer;
          public getPixelStride(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class AndroidImageReaderProxy extends androidx.camera.core.impl.ImageReaderProxy {
        public static class: java.lang.Class<androidx.camera.core.AndroidImageReaderProxy>;
        public acquireLatestImage(): androidx.camera.core.ImageProxy;
        public close(): void;
        public getHeight(): number;
        public getWidth(): number;
        public getSurface(): globalAndroid.view.Surface;
        public getImageFormat(): number;
        public getMaxImages(): number;
        public setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void;
        public clearOnImageAvailableListener(): void;
        public acquireNextImage(): androidx.camera.core.ImageProxy;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class AspectRatio {
        public static class: java.lang.Class<androidx.camera.core.AspectRatio>;
        public static RATIO_4_3: number;
        public static RATIO_16_9: number;
      }
      export module AspectRatio {
        export class Ratio {
          public static class: java.lang.Class<androidx.camera.core.AspectRatio.Ratio>;
          /**
           * Constructs a new instance of the androidx.camera.core.AspectRatio$Ratio interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class AutoValue_CameraState extends androidx.camera.core.CameraState {
        public static class: java.lang.Class<androidx.camera.core.AutoValue_CameraState>;
        public getType(): androidx.camera.core.CameraState.Type;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getError(): androidx.camera.core.CameraState.StateError;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class AutoValue_CameraState_StateError extends androidx.camera.core.CameraState.StateError {
        public static class: java.lang.Class<androidx.camera.core.AutoValue_CameraState_StateError>;
        public hashCode(): number;
        public getCode(): number;
        public equals(param0: any): boolean;
        public getCause(): java.lang.Throwable;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class AutoValue_ImageReaderFormatRecommender_FormatCombo extends androidx.camera.core.ImageReaderFormatRecommender.FormatCombo {
        public static class: java.lang.Class<androidx.camera.core.AutoValue_ImageReaderFormatRecommender_FormatCombo>;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class AutoValue_ImmutableImageInfo extends androidx.camera.core.ImmutableImageInfo {
        public static class: java.lang.Class<androidx.camera.core.AutoValue_ImmutableImageInfo>;
        public getSensorToBufferTransformMatrix(): globalAndroid.graphics.Matrix;
        public populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
        public hashCode(): number;
        public getTagBundle(): androidx.camera.core.impl.TagBundle;
        public equals(param0: any): boolean;
        public getRotationDegrees(): number;
        public toString(): string;
        public getTimestamp(): number;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class AutoValue_ResolutionInfo extends androidx.camera.core.ResolutionInfo {
        public static class: java.lang.Class<androidx.camera.core.AutoValue_ResolutionInfo>;
        public getCropRect(): globalAndroid.graphics.Rect;
        public hashCode(): number;
        public getResolution(): any;
        public equals(param0: any): boolean;
        public getRotationDegrees(): number;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class AutoValue_SurfaceOutput_Event extends androidx.camera.core.SurfaceOutput.Event {
        public static class: java.lang.Class<androidx.camera.core.AutoValue_SurfaceOutput_Event>;
        public hashCode(): number;
        public getEventCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
        public getSurfaceOutput(): androidx.camera.core.SurfaceOutput;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class AutoValue_SurfaceRequest_Result extends androidx.camera.core.SurfaceRequest.Result {
        public static class: java.lang.Class<androidx.camera.core.AutoValue_SurfaceRequest_Result>;
        public getSurface(): globalAndroid.view.Surface;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
        public getResultCode(): number;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class AutoValue_SurfaceRequest_TransformationInfo extends androidx.camera.core.SurfaceRequest.TransformationInfo {
        public static class: java.lang.Class<androidx.camera.core.AutoValue_SurfaceRequest_TransformationInfo>;
        public getCropRect(): globalAndroid.graphics.Rect;
        public getTargetRotation(): number;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getRotationDegrees(): number;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class Camera {
        public static class: java.lang.Class<androidx.camera.core.Camera>;
        /**
         * Constructs a new instance of the androidx.camera.core.Camera interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getCameraControl(): androidx.camera.core.CameraControl; getCameraInfo(): androidx.camera.core.CameraInfo; getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>; getExtendedConfig(): androidx.camera.core.impl.CameraConfig; setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void; isUseCasesCombinationSupported(param0: androidNative.Array<androidx.camera.core.UseCase>): boolean });
        public constructor();
        public getExtendedConfig(): androidx.camera.core.impl.CameraConfig;
        public isUseCasesCombinationSupported(param0: androidNative.Array<androidx.camera.core.UseCase>): boolean;
        public getCameraControl(): androidx.camera.core.CameraControl;
        public getCameraInfo(): androidx.camera.core.CameraInfo;
        public getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
        public setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CameraClosedException {
        public static class: java.lang.Class<androidx.camera.core.CameraClosedException>;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CameraControl {
        public static class: java.lang.Class<androidx.camera.core.CameraControl>;
        /**
         * Constructs a new instance of the androidx.camera.core.CameraControl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { enableTorch(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>; startFocusAndMetering(param0: androidx.camera.core.FocusMeteringAction): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.FocusMeteringResult>; cancelFocusAndMetering(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>; setZoomRatio(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>; setLinearZoom(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>; setExposureCompensationIndex(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Integer> });
        public constructor();
        public setZoomRatio(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public cancelFocusAndMetering(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public setExposureCompensationIndex(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Integer>;
        public startFocusAndMetering(param0: androidx.camera.core.FocusMeteringAction): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.FocusMeteringResult>;
        public enableTorch(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public setLinearZoom(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
      }
      export module CameraControl {
        export class OperationCanceledException {
          public static class: java.lang.Class<androidx.camera.core.CameraControl.OperationCanceledException>;
          public constructor(param0: string, param1: java.lang.Throwable);
          public constructor(param0: string);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CameraEffect {
        public static class: java.lang.Class<androidx.camera.core.CameraEffect>;
        public static PREVIEW: number;
        public static VIDEO_CAPTURE: number;
        public static IMAGE_CAPTURE: number;
        public getSurfaceProcessor(): androidx.camera.core.SurfaceProcessor;
        public getProcessorExecutor(): java.util.concurrent.Executor;
        public constructor(param0: number, param1: java.util.concurrent.Executor, param2: androidx.camera.core.ImageProcessor);
        public constructor(param0: number, param1: java.util.concurrent.Executor, param2: androidx.camera.core.SurfaceProcessor);
        public getImageProcessor(): androidx.camera.core.ImageProcessor;
        public getTargets(): number;
      }
      export module CameraEffect {
        export class Builder {
          public static class: java.lang.Class<androidx.camera.core.CameraEffect.Builder>;
          public setSurfaceProcessor(param0: java.util.concurrent.Executor, param1: androidx.camera.core.SurfaceProcessor): androidx.camera.core.CameraEffect.Builder;
          public setImageProcessor(param0: java.util.concurrent.Executor, param1: androidx.camera.core.ImageProcessor): androidx.camera.core.CameraEffect.Builder;
          public constructor(param0: number);
          public build(): androidx.camera.core.CameraEffect;
        }
        export class Targets {
          public static class: java.lang.Class<androidx.camera.core.CameraEffect.Targets>;
          /**
           * Constructs a new instance of the androidx.camera.core.CameraEffect$Targets interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CameraExecutor {
        public static class: java.lang.Class<androidx.camera.core.CameraExecutor>;
        public execute(param0: java.lang.Runnable): void;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CameraFilter {
        public static class: java.lang.Class<androidx.camera.core.CameraFilter>;
        /**
         * Constructs a new instance of the androidx.camera.core.CameraFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { filter(param0: java.util.List<androidx.camera.core.CameraInfo>): java.util.List<androidx.camera.core.CameraInfo>; getIdentifier(): androidx.camera.core.impl.Identifier; '<clinit>'(): void });
        public constructor();
        public static DEFAULT_ID: androidx.camera.core.impl.Identifier;
        public getIdentifier(): androidx.camera.core.impl.Identifier;
        public filter(param0: java.util.List<androidx.camera.core.CameraInfo>): java.util.List<androidx.camera.core.CameraInfo>;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CameraInfo {
        public static class: java.lang.Class<androidx.camera.core.CameraInfo>;
        /**
         * Constructs a new instance of the androidx.camera.core.CameraInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getSensorRotationDegrees(): number; getSensorRotationDegrees(param0: number): number; hasFlashUnit(): boolean; getTorchState(): androidx.lifecycle.LiveData<java.lang.Integer>; getZoomState(): androidx.lifecycle.LiveData<androidx.camera.core.ZoomState>; getExposureState(): androidx.camera.core.ExposureState; getCameraState(): androidx.lifecycle.LiveData<androidx.camera.core.CameraState>; getImplementationType(): string; getCameraSelector(): androidx.camera.core.CameraSelector; isFocusMeteringSupported(param0: androidx.camera.core.FocusMeteringAction): boolean; isZslSupported(): boolean; isPrivateReprocessingSupported(): boolean });
        public constructor();
        public static IMPLEMENTATION_TYPE_CAMERA2: string;
        public static IMPLEMENTATION_TYPE_CAMERA2_LEGACY: string;
        public static IMPLEMENTATION_TYPE_UNKNOWN: string;
        public static IMPLEMENTATION_TYPE_FAKE: string;
        public getCameraState(): androidx.lifecycle.LiveData<androidx.camera.core.CameraState>;
        public getSensorRotationDegrees(): number;
        public getImplementationType(): string;
        public isPrivateReprocessingSupported(): boolean;
        public getExposureState(): androidx.camera.core.ExposureState;
        public getCameraSelector(): androidx.camera.core.CameraSelector;
        public isFocusMeteringSupported(param0: androidx.camera.core.FocusMeteringAction): boolean;
        public getSensorRotationDegrees(param0: number): number;
        public hasFlashUnit(): boolean;
        public isZslSupported(): boolean;
        public getTorchState(): androidx.lifecycle.LiveData<java.lang.Integer>;
        public getZoomState(): androidx.lifecycle.LiveData<androidx.camera.core.ZoomState>;
      }
      export module CameraInfo {
        export class ImplementationType {
          public static class: java.lang.Class<androidx.camera.core.CameraInfo.ImplementationType>;
          /**
           * Constructs a new instance of the androidx.camera.core.CameraInfo$ImplementationType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CameraInfoUnavailableException {
        public static class: java.lang.Class<androidx.camera.core.CameraInfoUnavailableException>;
        public constructor(param0: string, param1: java.lang.Throwable);
        public constructor(param0: string);
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CameraProvider {
        public static class: java.lang.Class<androidx.camera.core.CameraProvider>;
        /**
         * Constructs a new instance of the androidx.camera.core.CameraProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { hasCamera(param0: androidx.camera.core.CameraSelector): boolean; getAvailableCameraInfos(): java.util.List<androidx.camera.core.CameraInfo> });
        public constructor();
        public hasCamera(param0: androidx.camera.core.CameraSelector): boolean;
        public getAvailableCameraInfos(): java.util.List<androidx.camera.core.CameraInfo>;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CameraSelector {
        public static class: java.lang.Class<androidx.camera.core.CameraSelector>;
        public static LENS_FACING_FRONT: number;
        public static LENS_FACING_BACK: number;
        public static DEFAULT_FRONT_CAMERA: androidx.camera.core.CameraSelector;
        public static DEFAULT_BACK_CAMERA: androidx.camera.core.CameraSelector;
        public select(param0: java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>): androidx.camera.core.impl.CameraInternal;
        public getLensFacing(): java.lang.Integer;
        public filter(param0: java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
        public filter(param0: java.util.List<androidx.camera.core.CameraInfo>): java.util.List<androidx.camera.core.CameraInfo>;
        public getCameraFilterSet(): java.util.LinkedHashSet<androidx.camera.core.CameraFilter>;
      }
      export module CameraSelector {
        export class Builder {
          public static class: java.lang.Class<androidx.camera.core.CameraSelector.Builder>;
          public static fromSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector.Builder;
          public build(): androidx.camera.core.CameraSelector;
          public constructor();
          public addCameraFilter(param0: androidx.camera.core.CameraFilter): androidx.camera.core.CameraSelector.Builder;
          public requireLensFacing(param0: number): androidx.camera.core.CameraSelector.Builder;
        }
        export class LensFacing {
          public static class: java.lang.Class<androidx.camera.core.CameraSelector.LensFacing>;
          /**
           * Constructs a new instance of the androidx.camera.core.CameraSelector$LensFacing interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export abstract class CameraState {
        public static class: java.lang.Class<androidx.camera.core.CameraState>;
        public static ERROR_MAX_CAMERAS_IN_USE: number;
        public static ERROR_CAMERA_IN_USE: number;
        public static ERROR_OTHER_RECOVERABLE_ERROR: number;
        public static ERROR_STREAM_CONFIG: number;
        public static ERROR_CAMERA_DISABLED: number;
        public static ERROR_CAMERA_FATAL_ERROR: number;
        public static ERROR_DO_NOT_DISTURB_MODE_ENABLED: number;
        public getType(): androidx.camera.core.CameraState.Type;
        public getError(): androidx.camera.core.CameraState.StateError;
        public static create(param0: androidx.camera.core.CameraState.Type, param1: androidx.camera.core.CameraState.StateError): androidx.camera.core.CameraState;
        public static create(param0: androidx.camera.core.CameraState.Type): androidx.camera.core.CameraState;
        public constructor();
      }
      export module CameraState {
        export class ErrorType {
          public static class: java.lang.Class<androidx.camera.core.CameraState.ErrorType>;
          public static RECOVERABLE: androidx.camera.core.CameraState.ErrorType;
          public static CRITICAL: androidx.camera.core.CameraState.ErrorType;
          public static valueOf(param0: string): androidx.camera.core.CameraState.ErrorType;
          public static values(): androidNative.Array<androidx.camera.core.CameraState.ErrorType>;
        }
        export abstract class StateError {
          public static class: java.lang.Class<androidx.camera.core.CameraState.StateError>;
          public constructor();
          public static create(param0: number): androidx.camera.core.CameraState.StateError;
          public getType(): androidx.camera.core.CameraState.ErrorType;
          public getCause(): java.lang.Throwable;
          public static create(param0: number, param1: java.lang.Throwable): androidx.camera.core.CameraState.StateError;
          public getCode(): number;
        }
        export class Type {
          public static class: java.lang.Class<androidx.camera.core.CameraState.Type>;
          public static PENDING_OPEN: androidx.camera.core.CameraState.Type;
          public static OPENING: androidx.camera.core.CameraState.Type;
          public static OPEN: androidx.camera.core.CameraState.Type;
          public static CLOSING: androidx.camera.core.CameraState.Type;
          public static CLOSED: androidx.camera.core.CameraState.Type;
          public static values(): androidNative.Array<androidx.camera.core.CameraState.Type>;
          public static valueOf(param0: string): androidx.camera.core.CameraState.Type;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CameraUnavailableException {
        public static class: java.lang.Class<androidx.camera.core.CameraUnavailableException>;
        public static CAMERA_UNKNOWN_ERROR: number;
        public static CAMERA_DISABLED: number;
        public static CAMERA_DISCONNECTED: number;
        public static CAMERA_ERROR: number;
        public static CAMERA_IN_USE: number;
        public static CAMERA_MAX_IN_USE: number;
        public static CAMERA_UNAVAILABLE_DO_NOT_DISTURB: number;
        public constructor(param0: number, param1: string);
        public getReason(): number;
        public constructor(param0: number);
        public constructor(param0: number, param1: string, param2: java.lang.Throwable);
        public constructor(param0: number, param1: java.lang.Throwable);
      }
      export module CameraUnavailableException {
        export class Reason {
          public static class: java.lang.Class<androidx.camera.core.CameraUnavailableException.Reason>;
          /**
           * Constructs a new instance of the androidx.camera.core.CameraUnavailableException$Reason interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CameraX {
        public static class: java.lang.Class<androidx.camera.core.CameraX>;
        public getDefaultConfigFactory(): androidx.camera.core.impl.UseCaseConfigFactory;
        public getCameraFactory(): androidx.camera.core.impl.CameraFactory;
        public shutdown(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public getCameraDeviceSurfaceManager(): androidx.camera.core.impl.CameraDeviceSurfaceManager;
        public getCameraRepository(): androidx.camera.core.impl.CameraRepository;
        public constructor(param0: globalAndroid.content.Context, param1: androidx.camera.core.CameraXConfig.Provider);
        public getInitializeFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
      }
      export module CameraX {
        export class InternalInitState {
          public static class: java.lang.Class<androidx.camera.core.CameraX.InternalInitState>;
          public static UNINITIALIZED: androidx.camera.core.CameraX.InternalInitState;
          public static INITIALIZING: androidx.camera.core.CameraX.InternalInitState;
          public static INITIALIZING_ERROR: androidx.camera.core.CameraX.InternalInitState;
          public static INITIALIZED: androidx.camera.core.CameraX.InternalInitState;
          public static SHUTDOWN: androidx.camera.core.CameraX.InternalInitState;
          public static valueOf(param0: string): androidx.camera.core.CameraX.InternalInitState;
          public static values(): androidNative.Array<androidx.camera.core.CameraX.InternalInitState>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CameraXConfig extends androidx.camera.core.internal.TargetConfig<androidx.camera.core.CameraX> {
        public static class: java.lang.Class<androidx.camera.core.CameraXConfig>;
        public getCameraExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
        public getConfig(): androidx.camera.core.impl.Config;
        public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
        public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
        public getCameraFactoryProvider(param0: androidx.camera.core.impl.CameraFactory.Provider): androidx.camera.core.impl.CameraFactory.Provider;
        public getDeviceSurfaceManagerProvider(param0: androidx.camera.core.impl.CameraDeviceSurfaceManager.Provider): androidx.camera.core.impl.CameraDeviceSurfaceManager.Provider;
        public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
        public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
        public getAvailableCamerasLimiter(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
        public getTargetClass(): java.lang.Class<any>;
        public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
        public getSchedulerHandler(param0: globalAndroid.os.Handler): globalAndroid.os.Handler;
        public getTargetName(param0: string): string;
        public getMinimumLoggingLevel(): number;
        public getTargetName(): string;
        public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
        public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
        public getUseCaseConfigFactoryProvider(param0: androidx.camera.core.impl.UseCaseConfigFactory.Provider): androidx.camera.core.impl.UseCaseConfigFactory.Provider;
        public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
        public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
        public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
        public getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
      }
      export module CameraXConfig {
        export class Builder extends androidx.camera.core.internal.TargetConfig.Builder<androidx.camera.core.CameraX, androidx.camera.core.CameraXConfig.Builder> {
          public static class: java.lang.Class<androidx.camera.core.CameraXConfig.Builder>;
          public setSchedulerHandler(param0: globalAndroid.os.Handler): androidx.camera.core.CameraXConfig.Builder;
          public setTargetClass(param0: java.lang.Class<any>): any;
          public setCameraFactoryProvider(param0: androidx.camera.core.impl.CameraFactory.Provider): androidx.camera.core.CameraXConfig.Builder;
          public setAvailableCamerasLimiter(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraXConfig.Builder;
          public static fromConfig(param0: androidx.camera.core.CameraXConfig): androidx.camera.core.CameraXConfig.Builder;
          public setUseCaseConfigFactoryProvider(param0: androidx.camera.core.impl.UseCaseConfigFactory.Provider): androidx.camera.core.CameraXConfig.Builder;
          public setTargetName(param0: string): androidx.camera.core.CameraXConfig.Builder;
          public build(): androidx.camera.core.CameraXConfig;
          public constructor();
          public setDeviceSurfaceManagerProvider(param0: androidx.camera.core.impl.CameraDeviceSurfaceManager.Provider): androidx.camera.core.CameraXConfig.Builder;
          public setTargetName(param0: string): any;
          public setMinimumLoggingLevel(param0: number): androidx.camera.core.CameraXConfig.Builder;
          public setCameraExecutor(param0: java.util.concurrent.Executor): androidx.camera.core.CameraXConfig.Builder;
          public setTargetClass(param0: java.lang.Class<androidx.camera.core.CameraX>): androidx.camera.core.CameraXConfig.Builder;
        }
        export class Provider {
          public static class: java.lang.Class<androidx.camera.core.CameraXConfig.Provider>;
          /**
           * Constructs a new instance of the androidx.camera.core.CameraXConfig$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getCameraXConfig(): androidx.camera.core.CameraXConfig });
          public constructor();
          public getCameraXConfig(): androidx.camera.core.CameraXConfig;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CameraXThreads {
        public static class: java.lang.Class<androidx.camera.core.CameraXThreads>;
        public static TAG: string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CaptureBundles {
        public static class: java.lang.Class<androidx.camera.core.CaptureBundles>;
        public static singleDefaultCaptureBundle(): androidx.camera.core.impl.CaptureBundle;
      }
      export module CaptureBundles {
        export class CaptureBundleImpl extends androidx.camera.core.impl.CaptureBundle {
          public static class: java.lang.Class<androidx.camera.core.CaptureBundles.CaptureBundleImpl>;
          public getCaptureStages(): java.util.List<androidx.camera.core.impl.CaptureStage>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class CaptureProcessorPipeline extends androidx.camera.core.impl.CaptureProcessor {
        public static class: java.lang.Class<androidx.camera.core.CaptureProcessorPipeline>;
        public close(): void;
        public onOutputSurface(param0: globalAndroid.view.Surface, param1: number): void;
        public process(param0: androidx.camera.core.impl.ImageProxyBundle): void;
        public onResolutionUpdate(param0: any): void;
        public getCloseFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class DisplayOrientedMeteringPointFactory extends androidx.camera.core.MeteringPointFactory {
        public static class: java.lang.Class<androidx.camera.core.DisplayOrientedMeteringPointFactory>;
        public constructor(param0: globalAndroid.view.Display, param1: androidx.camera.core.CameraInfo, param2: number, param3: number);
        public constructor(param0: globalAndroid.util.Rational);
        public convertPoint(param0: number, param1: number): globalAndroid.graphics.PointF;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ExperimentalGetImage {
        public static class: java.lang.Class<androidx.camera.core.ExperimentalGetImage>;
        /**
         * Constructs a new instance of the androidx.camera.core.ExperimentalGetImage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ExperimentalUseCaseApi {
        public static class: java.lang.Class<androidx.camera.core.ExperimentalUseCaseApi>;
        /**
         * Constructs a new instance of the androidx.camera.core.ExperimentalUseCaseApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ExperimentalZeroShutterLag {
        public static class: java.lang.Class<androidx.camera.core.ExperimentalZeroShutterLag>;
        /**
         * Constructs a new instance of the androidx.camera.core.ExperimentalZeroShutterLag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ExposureState {
        public static class: java.lang.Class<androidx.camera.core.ExposureState>;
        /**
         * Constructs a new instance of the androidx.camera.core.ExposureState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getExposureCompensationIndex(): number; getExposureCompensationRange(): globalAndroid.util.Range<java.lang.Integer>; getExposureCompensationStep(): globalAndroid.util.Rational; isExposureCompensationSupported(): boolean });
        public constructor();
        public isExposureCompensationSupported(): boolean;
        public getExposureCompensationRange(): globalAndroid.util.Range<java.lang.Integer>;
        public getExposureCompensationIndex(): number;
        public getExposureCompensationStep(): globalAndroid.util.Rational;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ExtendableBuilder<T> extends java.lang.Object {
        public static class: java.lang.Class<androidx.camera.core.ExtendableBuilder<any>>;
        /**
         * Constructs a new instance of the androidx.camera.core.ExtendableBuilder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getMutableConfig(): androidx.camera.core.impl.MutableConfig; build(): T });
        public constructor();
        public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
        public build(): T;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class FocusMeteringAction {
        public static class: java.lang.Class<androidx.camera.core.FocusMeteringAction>;
        public static FLAG_AF: number;
        public static FLAG_AE: number;
        public static FLAG_AWB: number;
        public getMeteringPointsAwb(): java.util.List<androidx.camera.core.MeteringPoint>;
        public getAutoCancelDurationInMillis(): number;
        public getMeteringPointsAf(): java.util.List<androidx.camera.core.MeteringPoint>;
        public isAutoCancelEnabled(): boolean;
        public getMeteringPointsAe(): java.util.List<androidx.camera.core.MeteringPoint>;
      }
      export module FocusMeteringAction {
        export class Builder {
          public static class: java.lang.Class<androidx.camera.core.FocusMeteringAction.Builder>;
          public disableAutoCancel(): androidx.camera.core.FocusMeteringAction.Builder;
          public addPoint(param0: androidx.camera.core.MeteringPoint): androidx.camera.core.FocusMeteringAction.Builder;
          public constructor(param0: androidx.camera.core.MeteringPoint, param1: number);
          public build(): androidx.camera.core.FocusMeteringAction;
          public setAutoCancelDuration(param0: number, param1: java.util.concurrent.TimeUnit): androidx.camera.core.FocusMeteringAction.Builder;
          public constructor(param0: androidx.camera.core.MeteringPoint);
          public addPoint(param0: androidx.camera.core.MeteringPoint, param1: number): androidx.camera.core.FocusMeteringAction.Builder;
        }
        export class MeteringMode {
          public static class: java.lang.Class<androidx.camera.core.FocusMeteringAction.MeteringMode>;
          /**
           * Constructs a new instance of the androidx.camera.core.FocusMeteringAction$MeteringMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class FocusMeteringResult {
        public static class: java.lang.Class<androidx.camera.core.FocusMeteringResult>;
        public static emptyInstance(): androidx.camera.core.FocusMeteringResult;
        public static create(param0: boolean): androidx.camera.core.FocusMeteringResult;
        public isFocusSuccessful(): boolean;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export abstract class ForwardingImageProxy extends androidx.camera.core.ImageProxy {
        public static class: java.lang.Class<androidx.camera.core.ForwardingImageProxy>;
        public mImage: androidx.camera.core.ImageProxy;
        public getImageInfo(): androidx.camera.core.ImageInfo;
        public constructor(param0: androidx.camera.core.ImageProxy);
        public close(): void;
        public getHeight(): number;
        public getWidth(): number;
        public getCropRect(): globalAndroid.graphics.Rect;
        public setCropRect(param0: globalAndroid.graphics.Rect): void;
        public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
        public notifyOnImageCloseListeners(): void;
        public getImage(): globalAndroid.media.Image;
        public addOnImageCloseListener(param0: androidx.camera.core.ForwardingImageProxy.OnImageCloseListener): void;
        public getFormat(): number;
      }
      export module ForwardingImageProxy {
        export class OnImageCloseListener {
          public static class: java.lang.Class<androidx.camera.core.ForwardingImageProxy.OnImageCloseListener>;
          /**
           * Constructs a new instance of the androidx.camera.core.ForwardingImageProxy$OnImageCloseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onImageClose(param0: androidx.camera.core.ImageProxy): void });
          public constructor();
          public onImageClose(param0: androidx.camera.core.ImageProxy): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageAnalysis extends androidx.camera.core.UseCase {
        public static class: java.lang.Class<androidx.camera.core.ImageAnalysis>;
        public static STRATEGY_KEEP_ONLY_LATEST: number;
        public static STRATEGY_BLOCK_PRODUCER: number;
        public static OUTPUT_IMAGE_FORMAT_YUV_420_888: number;
        public static OUTPUT_IMAGE_FORMAT_RGBA_8888: number;
        public static DEFAULT_CONFIG: androidx.camera.core.ImageAnalysis.Defaults;
        public static COORDINATE_SYSTEM_ORIGINAL: number;
        public onMergeConfig(param0: androidx.camera.core.impl.CameraInfoInternal, param1: androidx.camera.core.impl.UseCaseConfig.Builder<any, any, any>): androidx.camera.core.impl.UseCaseConfig<any>;
        public getResolutionInfo(): androidx.camera.core.ResolutionInfo;
        public isOutputImageRotationEnabled(): boolean;
        public getUseCaseConfigBuilder(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.UseCaseConfig.Builder<any, any, any>;
        public setViewPortCropRect(param0: globalAndroid.graphics.Rect): void;
        public getBackpressureStrategy(): number;
        public toString(): string;
        public setAnalyzer(param0: java.util.concurrent.Executor, param1: androidx.camera.core.ImageAnalysis.Analyzer): void;
        public getOutputImageFormat(): number;
        public setSensorToBufferTransformMatrix(param0: globalAndroid.graphics.Matrix): void;
        public getImageQueueDepth(): number;
        public onAttached(): void;
        public getDefaultConfig(param0: boolean, param1: androidx.camera.core.impl.UseCaseConfigFactory): androidx.camera.core.impl.UseCaseConfig<any>;
        public getTargetRotation(): number;
        public setTargetRotation(param0: number): void;
        public getBackgroundExecutor(): java.util.concurrent.Executor;
        public onSuggestedResolutionUpdated(param0: any): any;
        public clearAnalyzer(): void;
        public getOnePixelShiftEnabled(): java.lang.Boolean;
        public onDetached(): void;
      }
      export module ImageAnalysis {
        export class Analyzer {
          public static class: java.lang.Class<androidx.camera.core.ImageAnalysis.Analyzer>;
          /**
           * Constructs a new instance of the androidx.camera.core.ImageAnalysis$Analyzer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { analyze(param0: androidx.camera.core.ImageProxy): void; getDefaultTargetResolution(): any; getTargetCoordinateSystem(): number; updateTransform(param0: globalAndroid.graphics.Matrix): void });
          public constructor();
          public updateTransform(param0: globalAndroid.graphics.Matrix): void;
          public getTargetCoordinateSystem(): number;
          public analyze(param0: androidx.camera.core.ImageProxy): void;
          public getDefaultTargetResolution(): any;
        }
        export class BackpressureStrategy {
          public static class: java.lang.Class<androidx.camera.core.ImageAnalysis.BackpressureStrategy>;
          /**
           * Constructs a new instance of the androidx.camera.core.ImageAnalysis$BackpressureStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
        export class Builder extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.ImageAnalysis.Builder>;
          public setTargetAspectRatio(param0: number): androidx.camera.core.ImageAnalysis.Builder;
          public setZslDisabled(param0: boolean): any;
          public getUseCaseConfig(): androidx.camera.core.impl.ImageAnalysisConfig;
          public setImageQueueDepth(param0: number): androidx.camera.core.ImageAnalysis.Builder;
          public setImageReaderProxyProvider(param0: androidx.camera.core.ImageReaderProxyProvider): androidx.camera.core.ImageAnalysis.Builder;
          public setTargetRotation(param0: number): androidx.camera.core.ImageAnalysis.Builder;
          public setDefaultResolution(param0: any): any;
          public build(): any;
          public setOutputImageRotationEnabled(param0: boolean): androidx.camera.core.ImageAnalysis.Builder;
          public setTargetName(param0: string): androidx.camera.core.ImageAnalysis.Builder;
          public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
          public setDefaultResolution(param0: any): androidx.camera.core.ImageAnalysis.Builder;
          public getUseCaseConfig(): any;
          public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.ImageAnalysis.Builder;
          public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): any;
          public constructor();
          public setTargetResolution(param0: any): androidx.camera.core.ImageAnalysis.Builder;
          public setBackgroundExecutor(param0: java.util.concurrent.Executor): any;
          public setMaxResolution(param0: any): androidx.camera.core.ImageAnalysis.Builder;
          public setTargetClass(param0: java.lang.Class<androidx.camera.core.ImageAnalysis>): androidx.camera.core.ImageAnalysis.Builder;
          public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.ImageAnalysis.Builder;
          public setBackpressureStrategy(param0: number): androidx.camera.core.ImageAnalysis.Builder;
          public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.ImageAnalysis.Builder;
          public setMaxResolution(param0: any): any;
          public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): any;
          public setCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.ImageAnalysis.Builder;
          public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): any;
          public setTargetClass(param0: java.lang.Class<any>): any;
          public setSurfaceOccupancyPriority(param0: number): androidx.camera.core.ImageAnalysis.Builder;
          public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): any;
          public setOnePixelShiftEnabled(param0: boolean): androidx.camera.core.ImageAnalysis.Builder;
          public setTargetRotation(param0: number): any;
          public setBackgroundExecutor(param0: java.util.concurrent.Executor): androidx.camera.core.ImageAnalysis.Builder;
          public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.ImageAnalysis.Builder;
          public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): any;
          public setSurfaceOccupancyPriority(param0: number): any;
          public setTargetAspectRatio(param0: number): any;
          public static fromConfig(param0: androidx.camera.core.impl.ImageAnalysisConfig): androidx.camera.core.ImageAnalysis.Builder;
          public setTargetName(param0: string): any;
          public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): any;
          public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.ImageAnalysis.Builder;
          public setZslDisabled(param0: boolean): androidx.camera.core.ImageAnalysis.Builder;
          public setOutputImageFormat(param0: number): androidx.camera.core.ImageAnalysis.Builder;
          public build(): androidx.camera.core.ImageAnalysis;
          public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): androidx.camera.core.ImageAnalysis.Builder;
          public setTargetResolution(param0: any): any;
          public setCameraSelector(param0: androidx.camera.core.CameraSelector): any;
        }
        export class Defaults extends androidx.camera.core.impl.ConfigProvider<androidx.camera.core.impl.ImageAnalysisConfig> {
          public static class: java.lang.Class<androidx.camera.core.ImageAnalysis.Defaults>;
          public getConfig(): androidx.camera.core.impl.ImageAnalysisConfig;
          public constructor();
          public getConfig(): any;
        }
        export class OutputImageFormat {
          public static class: java.lang.Class<androidx.camera.core.ImageAnalysis.OutputImageFormat>;
          /**
           * Constructs a new instance of the androidx.camera.core.ImageAnalysis$OutputImageFormat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export abstract class ImageAnalysisAbstractAnalyzer extends androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener {
        public static class: java.lang.Class<androidx.camera.core.ImageAnalysisAbstractAnalyzer>;
        public mIsAttached: boolean;
        public onImageAvailable(param0: androidx.camera.core.impl.ImageReaderProxy): void;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageAnalysisBlockingAnalyzer extends androidx.camera.core.ImageAnalysisAbstractAnalyzer {
        public static class: java.lang.Class<androidx.camera.core.ImageAnalysisBlockingAnalyzer>;
        public onImageAvailable(param0: androidx.camera.core.impl.ImageReaderProxy): void;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageAnalysisNonBlockingAnalyzer extends androidx.camera.core.ImageAnalysisAbstractAnalyzer {
        public static class: java.lang.Class<androidx.camera.core.ImageAnalysisNonBlockingAnalyzer>;
        public onImageAvailable(param0: androidx.camera.core.impl.ImageReaderProxy): void;
      }
      export module ImageAnalysisNonBlockingAnalyzer {
        export class CacheAnalyzingImageProxy extends androidx.camera.core.ForwardingImageProxy {
          public static class: java.lang.Class<androidx.camera.core.ImageAnalysisNonBlockingAnalyzer.CacheAnalyzingImageProxy>;
          public getFormat(): number;
          public getCropRect(): globalAndroid.graphics.Rect;
          public getHeight(): number;
          public getImageInfo(): androidx.camera.core.ImageInfo;
          public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
          public close(): void;
          public getWidth(): number;
          public getImage(): globalAndroid.media.Image;
          public setCropRect(param0: globalAndroid.graphics.Rect): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageCapture extends androidx.camera.core.UseCase {
        public static class: java.lang.Class<androidx.camera.core.ImageCapture>;
        public static ERROR_UNKNOWN: number;
        public static ERROR_FILE_IO: number;
        public static ERROR_CAPTURE_FAILED: number;
        public static ERROR_CAMERA_CLOSED: number;
        public static ERROR_INVALID_CAMERA: number;
        public static CAPTURE_MODE_MAXIMIZE_QUALITY: number;
        public static CAPTURE_MODE_MINIMIZE_LATENCY: number;
        public static CAPTURE_MODE_ZERO_SHUTTER_LAG: number;
        public static FLASH_MODE_AUTO: number;
        public static FLASH_MODE_ON: number;
        public static FLASH_MODE_OFF: number;
        public static FLASH_TYPE_ONE_SHOT_FLASH: number;
        public static FLASH_TYPE_USE_TORCH_AS_FLASH: number;
        public static DEFAULT_CONFIG: androidx.camera.core.ImageCapture.Defaults;
        public onMergeConfig(param0: androidx.camera.core.impl.CameraInfoInternal, param1: androidx.camera.core.impl.UseCaseConfig.Builder<any, any, any>): androidx.camera.core.impl.UseCaseConfig<any>;
        public getFlashMode(): number;
        public onStateDetached(): void;
        public getResolutionInfo(): androidx.camera.core.ResolutionInfo;
        public getCaptureMode(): number;
        public setFlashMode(param0: number): void;
        public getUseCaseConfigBuilder(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.UseCaseConfig.Builder<any, any, any>;
        public toString(): string;
        public takePicture(param0: androidx.camera.core.ImageCapture.OutputFileOptions, param1: java.util.concurrent.Executor, param2: androidx.camera.core.ImageCapture.OnImageSavedCallback): void;
        public onCameraControlReady(): void;
        public getResolutionInfoInternal(): androidx.camera.core.ResolutionInfo;
        public onAttached(): void;
        public takePicture(param0: java.util.concurrent.Executor, param1: androidx.camera.core.ImageCapture.OnImageCapturedCallback): void;
        public getDefaultConfig(param0: boolean, param1: androidx.camera.core.impl.UseCaseConfigFactory): androidx.camera.core.impl.UseCaseConfig<any>;
        public getTargetRotation(): number;
        public setTargetRotation(param0: number): void;
        public setCropAspectRatio(param0: globalAndroid.util.Rational): void;
        public getJpegQuality(): number;
        public onSuggestedResolutionUpdated(param0: any): any;
        public onDetached(): void;
      }
      export module ImageCapture {
        export class Builder extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.ImageCapture.Builder>;
          public setZslDisabled(param0: boolean): any;
          public setTargetAspectRatio(param0: number): androidx.camera.core.ImageCapture.Builder;
          public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.ImageCapture.Builder;
          public setCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.ImageCapture.Builder;
          public setImageReaderProxyProvider(param0: androidx.camera.core.ImageReaderProxyProvider): androidx.camera.core.ImageCapture.Builder;
          public build(): any;
          public setTargetResolution(param0: any): androidx.camera.core.ImageCapture.Builder;
          public setSurfaceOccupancyPriority(param0: number): androidx.camera.core.ImageCapture.Builder;
          public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): any;
          public setFlashMode(param0: number): androidx.camera.core.ImageCapture.Builder;
          public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.ImageCapture.Builder;
          public constructor();
          public getUseCaseConfig(): androidx.camera.core.impl.ImageCaptureConfig;
          public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): any;
          public setBufferFormat(param0: number): androidx.camera.core.ImageCapture.Builder;
          public setSoftwareJpegEncoderRequested(param0: boolean): androidx.camera.core.ImageCapture.Builder;
          public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): androidx.camera.core.ImageCapture.Builder;
          public setTargetRotation(param0: number): any;
          public setIoExecutor(param0: java.util.concurrent.Executor): androidx.camera.core.ImageCapture.Builder;
          public setMaxCaptureStages(param0: number): androidx.camera.core.ImageCapture.Builder;
          public setCaptureBundle(param0: androidx.camera.core.impl.CaptureBundle): androidx.camera.core.ImageCapture.Builder;
          public setSurfaceOccupancyPriority(param0: number): any;
          public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): any;
          public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.ImageCapture.Builder;
          public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.ImageCapture.Builder;
          public setTargetResolution(param0: any): any;
          public setTargetClass(param0: java.lang.Class<androidx.camera.core.ImageCapture>): androidx.camera.core.ImageCapture.Builder;
          public setCaptureProcessor(param0: androidx.camera.core.impl.CaptureProcessor): androidx.camera.core.ImageCapture.Builder;
          public setDefaultResolution(param0: any): any;
          public setTargetName(param0: string): androidx.camera.core.ImageCapture.Builder;
          public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
          public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.ImageCapture.Builder;
          public getUseCaseConfig(): any;
          public setIoExecutor(param0: java.util.concurrent.Executor): any;
          public setMaxResolution(param0: any): any;
          public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): any;
          public setTargetClass(param0: java.lang.Class<any>): any;
          public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): any;
          public setDefaultResolution(param0: any): androidx.camera.core.ImageCapture.Builder;
          public setFlashType(param0: number): androidx.camera.core.ImageCapture.Builder;
          public build(): androidx.camera.core.ImageCapture;
          public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): any;
          public setTargetAspectRatio(param0: number): any;
          public setCaptureMode(param0: number): androidx.camera.core.ImageCapture.Builder;
          public static fromConfig(param0: androidx.camera.core.impl.Config): androidx.camera.core.ImageCapture.Builder;
          public setMaxResolution(param0: any): androidx.camera.core.ImageCapture.Builder;
          public setTargetName(param0: string): any;
          public setZslDisabled(param0: boolean): androidx.camera.core.ImageCapture.Builder;
          public setTargetRotation(param0: number): androidx.camera.core.ImageCapture.Builder;
          public setJpegQuality(param0: number): androidx.camera.core.ImageCapture.Builder;
          public setCameraSelector(param0: androidx.camera.core.CameraSelector): any;
        }
        export class CaptureMode {
          public static class: java.lang.Class<androidx.camera.core.ImageCapture.CaptureMode>;
          /**
           * Constructs a new instance of the androidx.camera.core.ImageCapture$CaptureMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
        export class Defaults extends androidx.camera.core.impl.ConfigProvider<androidx.camera.core.impl.ImageCaptureConfig> {
          public static class: java.lang.Class<androidx.camera.core.ImageCapture.Defaults>;
          public getConfig(): androidx.camera.core.impl.ImageCaptureConfig;
          public constructor();
          public getConfig(): any;
        }
        export class FlashMode {
          public static class: java.lang.Class<androidx.camera.core.ImageCapture.FlashMode>;
          /**
           * Constructs a new instance of the androidx.camera.core.ImageCapture$FlashMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
        export class FlashType {
          public static class: java.lang.Class<androidx.camera.core.ImageCapture.FlashType>;
          /**
           * Constructs a new instance of the androidx.camera.core.ImageCapture$FlashType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
        export class ImageCaptureError {
          public static class: java.lang.Class<androidx.camera.core.ImageCapture.ImageCaptureError>;
          /**
           * Constructs a new instance of the androidx.camera.core.ImageCapture$ImageCaptureError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
        export class ImageCaptureRequest {
          public static class: java.lang.Class<androidx.camera.core.ImageCapture.ImageCaptureRequest>;
        }
        export class ImageCaptureRequestProcessor extends androidx.camera.core.ForwardingImageProxy.OnImageCloseListener {
          public static class: java.lang.Class<androidx.camera.core.ImageCapture.ImageCaptureRequestProcessor>;
          public sendRequest(param0: androidx.camera.core.ImageCapture.ImageCaptureRequest): void;
          public cancelRequests(param0: java.lang.Throwable): void;
          public onImageClose(param0: androidx.camera.core.ImageProxy): void;
          public pullOutUnfinishedRequests(): java.util.List<androidx.camera.core.ImageCapture.ImageCaptureRequest>;
        }
        export module ImageCaptureRequestProcessor {
          export class ImageCaptor {
            public static class: java.lang.Class<androidx.camera.core.ImageCapture.ImageCaptureRequestProcessor.ImageCaptor>;
            /**
             * Constructs a new instance of the androidx.camera.core.ImageCapture$ImageCaptureRequestProcessor$ImageCaptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { capture(param0: androidx.camera.core.ImageCapture.ImageCaptureRequest): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.ImageProxy> });
            public constructor();
            public capture(param0: androidx.camera.core.ImageCapture.ImageCaptureRequest): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.ImageProxy>;
          }
          export class RequestProcessCallback {
            public static class: java.lang.Class<androidx.camera.core.ImageCapture.ImageCaptureRequestProcessor.RequestProcessCallback>;
            /**
             * Constructs a new instance of the androidx.camera.core.ImageCapture$ImageCaptureRequestProcessor$RequestProcessCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onPreProcessRequest(param0: androidx.camera.core.ImageCapture.ImageCaptureRequest): void });
            public constructor();
            public onPreProcessRequest(param0: androidx.camera.core.ImageCapture.ImageCaptureRequest): void;
          }
        }
        export class Metadata {
          public static class: java.lang.Class<androidx.camera.core.ImageCapture.Metadata>;
          public setReversedVertical(param0: boolean): void;
          public setReversedHorizontal(param0: boolean): void;
          public setLocation(param0: globalAndroid.location.Location): void;
          public constructor();
          public isReversedHorizontalSet(): boolean;
          public isReversedHorizontal(): boolean;
          public isReversedVertical(): boolean;
          public getLocation(): globalAndroid.location.Location;
        }
        export abstract class OnImageCapturedCallback {
          public static class: java.lang.Class<androidx.camera.core.ImageCapture.OnImageCapturedCallback>;
          public onError(param0: androidx.camera.core.ImageCaptureException): void;
          public constructor();
          public onCaptureSuccess(param0: androidx.camera.core.ImageProxy): void;
        }
        export class OnImageSavedCallback {
          public static class: java.lang.Class<androidx.camera.core.ImageCapture.OnImageSavedCallback>;
          /**
           * Constructs a new instance of the androidx.camera.core.ImageCapture$OnImageSavedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onImageSaved(param0: androidx.camera.core.ImageCapture.OutputFileResults): void; onError(param0: androidx.camera.core.ImageCaptureException): void });
          public constructor();
          public onError(param0: androidx.camera.core.ImageCaptureException): void;
          public onImageSaved(param0: androidx.camera.core.ImageCapture.OutputFileResults): void;
        }
        export class OutputFileOptions {
          public static class: java.lang.Class<androidx.camera.core.ImageCapture.OutputFileOptions>;
          public getMetadata(): androidx.camera.core.ImageCapture.Metadata;
          public getContentResolver(): globalAndroid.content.ContentResolver;
          public getSaveCollection(): globalAndroid.net.Uri;
          public getOutputStream(): java.io.OutputStream;
          public getFile(): java.io.File;
          public getContentValues(): globalAndroid.content.ContentValues;
        }
        export module OutputFileOptions {
          export class Builder {
            public static class: java.lang.Class<androidx.camera.core.ImageCapture.OutputFileOptions.Builder>;
            public constructor(param0: java.io.OutputStream);
            public constructor(param0: java.io.File);
            public setMetadata(param0: androidx.camera.core.ImageCapture.Metadata): androidx.camera.core.ImageCapture.OutputFileOptions.Builder;
            public constructor(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri, param2: globalAndroid.content.ContentValues);
            public build(): androidx.camera.core.ImageCapture.OutputFileOptions;
          }
        }
        export class OutputFileResults {
          public static class: java.lang.Class<androidx.camera.core.ImageCapture.OutputFileResults>;
          public getSavedUri(): globalAndroid.net.Uri;
          public constructor(param0: globalAndroid.net.Uri);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageCaptureException {
        public static class: java.lang.Class<androidx.camera.core.ImageCaptureException>;
        public getImageCaptureError(): number;
        public constructor(param0: number, param1: string, param2: java.lang.Throwable);
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageInfo {
        public static class: java.lang.Class<androidx.camera.core.ImageInfo>;
        /**
         * Constructs a new instance of the androidx.camera.core.ImageInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getTagBundle(): androidx.camera.core.impl.TagBundle; getTimestamp(): number; getRotationDegrees(): number; getSensorToBufferTransformMatrix(): globalAndroid.graphics.Matrix; populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void });
        public constructor();
        public getSensorToBufferTransformMatrix(): globalAndroid.graphics.Matrix;
        public populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
        public getTagBundle(): androidx.camera.core.impl.TagBundle;
        public getRotationDegrees(): number;
        public getTimestamp(): number;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageProcessingUtil {
        public static class: java.lang.Class<androidx.camera.core.ImageProcessingUtil>;
        public static rotateYUV(param0: androidx.camera.core.ImageProxy, param1: androidx.camera.core.impl.ImageReaderProxy, param2: globalAndroid.media.ImageWriter, param3: java.nio.ByteBuffer, param4: java.nio.ByteBuffer, param5: java.nio.ByteBuffer, param6: number): androidx.camera.core.ImageProxy;
        public static applyPixelShiftForYUV(param0: androidx.camera.core.ImageProxy): boolean;
        public static convertJpegBytesToImage(param0: androidx.camera.core.impl.ImageReaderProxy, param1: androidNative.Array<number>): androidx.camera.core.ImageProxy;
        public static convertYUVToRGB(param0: androidx.camera.core.ImageProxy, param1: androidx.camera.core.impl.ImageReaderProxy, param2: java.nio.ByteBuffer, param3: number, param4: boolean): androidx.camera.core.ImageProxy;
      }
      export module ImageProcessingUtil {
        export class Result {
          public static class: java.lang.Class<androidx.camera.core.ImageProcessingUtil.Result>;
          public static UNKNOWN: androidx.camera.core.ImageProcessingUtil.Result;
          public static SUCCESS: androidx.camera.core.ImageProcessingUtil.Result;
          public static ERROR_CONVERSION: androidx.camera.core.ImageProcessingUtil.Result;
          public static values(): androidNative.Array<androidx.camera.core.ImageProcessingUtil.Result>;
          public static valueOf(param0: string): androidx.camera.core.ImageProcessingUtil.Result;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageProcessor {
        public static class: java.lang.Class<androidx.camera.core.ImageProcessor>;
        /**
         * Constructs a new instance of the androidx.camera.core.ImageProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { process(param0: androidx.camera.core.ImageProcessor.Request): androidx.camera.core.ImageProcessor.Response });
        public constructor();
        public process(param0: androidx.camera.core.ImageProcessor.Request): androidx.camera.core.ImageProcessor.Response;
      }
      export module ImageProcessor {
        export class Request {
          public static class: java.lang.Class<androidx.camera.core.ImageProcessor.Request>;
          /**
           * Constructs a new instance of the androidx.camera.core.ImageProcessor$Request interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getInputImages(): java.util.List<androidx.camera.core.ImageProxy>; getOutputFormat(): number });
          public constructor();
          public getInputImages(): java.util.List<androidx.camera.core.ImageProxy>;
          public getOutputFormat(): number;
        }
        export class Response {
          public static class: java.lang.Class<androidx.camera.core.ImageProcessor.Response>;
          /**
           * Constructs a new instance of the androidx.camera.core.ImageProcessor$Response interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getOutputImage(): androidx.camera.core.ImageProxy });
          public constructor();
          public getOutputImage(): androidx.camera.core.ImageProxy;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageProxy {
        public static class: java.lang.Class<androidx.camera.core.ImageProxy>;
        /**
         * Constructs a new instance of the androidx.camera.core.ImageProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { close(): void; getCropRect(): globalAndroid.graphics.Rect; setCropRect(param0: globalAndroid.graphics.Rect): void; getFormat(): number; getHeight(): number; getWidth(): number; getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>; getImageInfo(): androidx.camera.core.ImageInfo; getImage(): globalAndroid.media.Image });
        public constructor();
        public getImageInfo(): androidx.camera.core.ImageInfo;
        public close(): void;
        public getHeight(): number;
        public getWidth(): number;
        public getCropRect(): globalAndroid.graphics.Rect;
        public setCropRect(param0: globalAndroid.graphics.Rect): void;
        public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
        public getImage(): globalAndroid.media.Image;
        public getFormat(): number;
      }
      export module ImageProxy {
        export class PlaneProxy {
          public static class: java.lang.Class<androidx.camera.core.ImageProxy.PlaneProxy>;
          /**
           * Constructs a new instance of the androidx.camera.core.ImageProxy$PlaneProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getRowStride(): number; getPixelStride(): number; getBuffer(): java.nio.ByteBuffer });
          public constructor();
          public getRowStride(): number;
          public getBuffer(): java.nio.ByteBuffer;
          public getPixelStride(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageProxyDownsampler {
        public static class: java.lang.Class<androidx.camera.core.ImageProxyDownsampler>;
      }
      export module ImageProxyDownsampler {
        export class DownsamplingMethod {
          public static class: java.lang.Class<androidx.camera.core.ImageProxyDownsampler.DownsamplingMethod>;
          public static NEAREST_NEIGHBOR: androidx.camera.core.ImageProxyDownsampler.DownsamplingMethod;
          public static AVERAGING: androidx.camera.core.ImageProxyDownsampler.DownsamplingMethod;
          public static values(): androidNative.Array<androidx.camera.core.ImageProxyDownsampler.DownsamplingMethod>;
          public static valueOf(param0: string): androidx.camera.core.ImageProxyDownsampler.DownsamplingMethod;
        }
        export class ForwardingImageProxyImpl extends androidx.camera.core.ForwardingImageProxy {
          public static class: java.lang.Class<androidx.camera.core.ImageProxyDownsampler.ForwardingImageProxyImpl>;
          public getFormat(): number;
          public getCropRect(): globalAndroid.graphics.Rect;
          public getHeight(): number;
          public getImageInfo(): androidx.camera.core.ImageInfo;
          public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
          public close(): void;
          public getWidth(): number;
          public getImage(): globalAndroid.media.Image;
          public setCropRect(param0: globalAndroid.graphics.Rect): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageReaderFormatRecommender {
        public static class: java.lang.Class<androidx.camera.core.ImageReaderFormatRecommender>;
      }
      export module ImageReaderFormatRecommender {
        export abstract class FormatCombo {
          public static class: java.lang.Class<androidx.camera.core.ImageReaderFormatRecommender.FormatCombo>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageReaderProxyProvider {
        public static class: java.lang.Class<androidx.camera.core.ImageReaderProxyProvider>;
        /**
         * Constructs a new instance of the androidx.camera.core.ImageReaderProxyProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { newInstance(param0: number, param1: number, param2: number, param3: number, param4: number): androidx.camera.core.impl.ImageReaderProxy });
        public constructor();
        public newInstance(param0: number, param1: number, param2: number, param3: number, param4: number): androidx.camera.core.impl.ImageReaderProxy;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageReaderProxys {
        public static class: java.lang.Class<androidx.camera.core.ImageReaderProxys>;
        public static createIsolatedReader(param0: number, param1: number, param2: number, param3: number): androidx.camera.core.impl.ImageReaderProxy;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ImageSaver {
        public static class: java.lang.Class<androidx.camera.core.ImageSaver>;
        public run(): void;
      }
      export module ImageSaver {
        export class OnImageSavedCallback {
          public static class: java.lang.Class<androidx.camera.core.ImageSaver.OnImageSavedCallback>;
          /**
           * Constructs a new instance of the androidx.camera.core.ImageSaver$OnImageSavedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onImageSaved(param0: androidx.camera.core.ImageCapture.OutputFileResults): void; onError(param0: androidx.camera.core.ImageSaver.SaveError, param1: string, param2: java.lang.Throwable): void });
          public constructor();
          public onError(param0: androidx.camera.core.ImageSaver.SaveError, param1: string, param2: java.lang.Throwable): void;
          public onImageSaved(param0: androidx.camera.core.ImageCapture.OutputFileResults): void;
        }
        export class SaveError {
          public static class: java.lang.Class<androidx.camera.core.ImageSaver.SaveError>;
          public static FILE_IO_FAILED: androidx.camera.core.ImageSaver.SaveError;
          public static ENCODE_FAILED: androidx.camera.core.ImageSaver.SaveError;
          public static CROP_FAILED: androidx.camera.core.ImageSaver.SaveError;
          public static UNKNOWN: androidx.camera.core.ImageSaver.SaveError;
          public static valueOf(param0: string): androidx.camera.core.ImageSaver.SaveError;
          public static values(): androidNative.Array<androidx.camera.core.ImageSaver.SaveError>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export abstract class ImmutableImageInfo extends androidx.camera.core.ImageInfo {
        public static class: java.lang.Class<androidx.camera.core.ImmutableImageInfo>;
        public getSensorToBufferTransformMatrix(): globalAndroid.graphics.Matrix;
        public populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
        public getTagBundle(): androidx.camera.core.impl.TagBundle;
        public static create(param0: androidx.camera.core.impl.TagBundle, param1: number, param2: number, param3: globalAndroid.graphics.Matrix): androidx.camera.core.ImageInfo;
        public getRotationDegrees(): number;
        public getTimestamp(): number;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class InitializationException {
        public static class: java.lang.Class<androidx.camera.core.InitializationException>;
        public constructor(param0: string, param1: java.lang.Throwable);
        public constructor(param0: java.lang.Throwable);
        public constructor(param0: string);
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class Logger {
        public static class: java.lang.Class<androidx.camera.core.Logger>;
        public static d(param0: string, param1: string, param2: java.lang.Throwable): void;
        public static isDebugEnabled(param0: string): boolean;
        public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
        public static e(param0: string, param1: string): void;
        public static isWarnEnabled(param0: string): boolean;
        public static i(param0: string, param1: string, param2: java.lang.Throwable): void;
        public static isErrorEnabled(param0: string): boolean;
        public static i(param0: string, param1: string): void;
        public static w(param0: string, param1: string, param2: java.lang.Throwable): void;
        public static w(param0: string, param1: string): void;
        public static isInfoEnabled(param0: string): boolean;
        public static d(param0: string, param1: string): void;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class MetadataImageReader implements androidx.camera.core.impl.ImageReaderProxy, androidx.camera.core.ForwardingImageProxy.OnImageCloseListener {
        public static class: java.lang.Class<androidx.camera.core.MetadataImageReader>;
        public close(): void;
        public getHeight(): number;
        public getCameraCaptureCallback(): androidx.camera.core.impl.CameraCaptureCallback;
        public getImageFormat(): number;
        public setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void;
        public clearOnImageAvailableListener(): void;
        public acquireLatestImage(): androidx.camera.core.ImageProxy;
        public getWidth(): number;
        public getSurface(): globalAndroid.view.Surface;
        public constructor(param0: number, param1: number, param2: number, param3: number);
        public getMaxImages(): number;
        public acquireNextImage(): androidx.camera.core.ImageProxy;
        public onImageClose(param0: androidx.camera.core.ImageProxy): void;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class MeteringPoint {
        public static class: java.lang.Class<androidx.camera.core.MeteringPoint>;
        public getX(): number;
        public getSize(): number;
        public getY(): number;
        public getSurfaceAspectRatio(): globalAndroid.util.Rational;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export abstract class MeteringPointFactory {
        public static class: java.lang.Class<androidx.camera.core.MeteringPointFactory>;
        public static getDefaultPointSize(): number;
        public createPoint(param0: number, param1: number): androidx.camera.core.MeteringPoint;
        public createPoint(param0: number, param1: number, param2: number): androidx.camera.core.MeteringPoint;
        public constructor(param0: globalAndroid.util.Rational);
        public convertPoint(param0: number, param1: number): globalAndroid.graphics.PointF;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ModifiableImageReaderProxy extends androidx.camera.core.AndroidImageReaderProxy {
        public static class: java.lang.Class<androidx.camera.core.ModifiableImageReaderProxy>;
        public acquireLatestImage(): androidx.camera.core.ImageProxy;
        public close(): void;
        public getHeight(): number;
        public getWidth(): number;
        public getSurface(): globalAndroid.view.Surface;
        public getImageFormat(): number;
        public getMaxImages(): number;
        public setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void;
        public clearOnImageAvailableListener(): void;
        public acquireNextImage(): androidx.camera.core.ImageProxy;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class Preview extends androidx.camera.core.UseCase {
        public static class: java.lang.Class<androidx.camera.core.Preview>;
        public static DEFAULT_CONFIG: androidx.camera.core.Preview.Defaults;
        public onMergeConfig(param0: androidx.camera.core.impl.CameraInfoInternal, param1: androidx.camera.core.impl.UseCaseConfig.Builder<any, any, any>): androidx.camera.core.impl.UseCaseConfig<any>;
        public getResolutionInfo(): androidx.camera.core.ResolutionInfo;
        public getUseCaseConfigBuilder(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.UseCaseConfig.Builder<any, any, any>;
        public setViewPortCropRect(param0: globalAndroid.graphics.Rect): void;
        public toString(): string;
        public getProcessor(): androidx.camera.core.processing.SurfaceProcessorInternal;
        public setSurfaceProvider(param0: androidx.camera.core.Preview.SurfaceProvider): void;
        public getDefaultConfig(param0: boolean, param1: androidx.camera.core.impl.UseCaseConfigFactory): androidx.camera.core.impl.UseCaseConfig<any>;
        public setTargetRotation(param0: number): void;
        public getTargetRotation(): number;
        public setProcessor(param0: androidx.camera.core.processing.SurfaceProcessorInternal): void;
        public onSuggestedResolutionUpdated(param0: any): any;
        public setSurfaceProvider(param0: java.util.concurrent.Executor, param1: androidx.camera.core.Preview.SurfaceProvider): void;
        public onDetached(): void;
      }
      export module Preview {
        export class Builder extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.Preview.Builder>;
          public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.Preview.Builder;
          public setZslDisabled(param0: boolean): any;
          public getUseCaseConfig(): androidx.camera.core.impl.PreviewConfig;
          public setIsRgba8888SurfaceRequired(param0: boolean): androidx.camera.core.Preview.Builder;
          public static fromConfig(param0: androidx.camera.core.impl.PreviewConfig): androidx.camera.core.Preview.Builder;
          public setDefaultResolution(param0: any): any;
          public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): androidx.camera.core.Preview.Builder;
          public build(): any;
          public setTargetAspectRatio(param0: number): androidx.camera.core.Preview.Builder;
          public setSurfaceOccupancyPriority(param0: number): androidx.camera.core.Preview.Builder;
          public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
          public setCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.Preview.Builder;
          public getUseCaseConfig(): any;
          public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.Preview.Builder;
          public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): any;
          public constructor();
          public setBackgroundExecutor(param0: java.util.concurrent.Executor): androidx.camera.core.Preview.Builder;
          public setImageInfoProcessor(param0: androidx.camera.core.impl.ImageInfoProcessor): androidx.camera.core.Preview.Builder;
          public setTargetClass(param0: java.lang.Class<androidx.camera.core.Preview>): androidx.camera.core.Preview.Builder;
          public setBackgroundExecutor(param0: java.util.concurrent.Executor): any;
          public setZslDisabled(param0: boolean): androidx.camera.core.Preview.Builder;
          public setCaptureProcessor(param0: androidx.camera.core.impl.CaptureProcessor): androidx.camera.core.Preview.Builder;
          public setMaxResolution(param0: any): any;
          public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): any;
          public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): any;
          public setTargetClass(param0: java.lang.Class<any>): any;
          public setTargetResolution(param0: any): androidx.camera.core.Preview.Builder;
          public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): any;
          public setTargetRotation(param0: number): any;
          public setTargetName(param0: string): androidx.camera.core.Preview.Builder;
          public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.Preview.Builder;
          public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): any;
          public setSurfaceOccupancyPriority(param0: number): any;
          public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.Preview.Builder;
          public setTargetAspectRatio(param0: number): any;
          public setDefaultResolution(param0: any): androidx.camera.core.Preview.Builder;
          public setTargetName(param0: string): any;
          public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): any;
          public build(): androidx.camera.core.Preview;
          public setMaxResolution(param0: any): androidx.camera.core.Preview.Builder;
          public setTargetRotation(param0: number): androidx.camera.core.Preview.Builder;
          public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.Preview.Builder;
          public setCameraSelector(param0: androidx.camera.core.CameraSelector): any;
          public setTargetResolution(param0: any): any;
        }
        export class Defaults extends androidx.camera.core.impl.ConfigProvider<androidx.camera.core.impl.PreviewConfig> {
          public static class: java.lang.Class<androidx.camera.core.Preview.Defaults>;
          public constructor();
          public getConfig(): androidx.camera.core.impl.PreviewConfig;
          public getConfig(): any;
        }
        export class SurfaceProvider {
          public static class: java.lang.Class<androidx.camera.core.Preview.SurfaceProvider>;
          /**
           * Constructs a new instance of the androidx.camera.core.Preview$SurfaceProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSurfaceRequested(param0: androidx.camera.core.SurfaceRequest): void });
          public constructor();
          public onSurfaceRequested(param0: androidx.camera.core.SurfaceRequest): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ProcessingImageReader extends androidx.camera.core.impl.ImageReaderProxy {
        public static class: java.lang.Class<androidx.camera.core.ProcessingImageReader>;
        public close(): void;
        public getHeight(): number;
        public getTagBundleKey(): string;
        public getImageFormat(): number;
        public setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void;
        public clearOnImageAvailableListener(): void;
        public acquireLatestImage(): androidx.camera.core.ImageProxy;
        public getWidth(): number;
        public getSurface(): globalAndroid.view.Surface;
        public setCaptureBundle(param0: androidx.camera.core.impl.CaptureBundle): void;
        public getMaxImages(): number;
        public setOnProcessingErrorCallback(param0: java.util.concurrent.Executor, param1: androidx.camera.core.ProcessingImageReader.OnProcessingErrorCallback): void;
        public acquireNextImage(): androidx.camera.core.ImageProxy;
      }
      export module ProcessingImageReader {
        export class Builder {
          public static class: java.lang.Class<androidx.camera.core.ProcessingImageReader.Builder>;
          public mInputImageReader: androidx.camera.core.impl.ImageReaderProxy;
          public mCaptureBundle: androidx.camera.core.impl.CaptureBundle;
          public mCaptureProcessor: androidx.camera.core.impl.CaptureProcessor;
          public mOutputFormat: number;
          public mPostProcessExecutor: java.util.concurrent.Executor;
        }
        export class OnProcessingErrorCallback {
          public static class: java.lang.Class<androidx.camera.core.ProcessingImageReader.OnProcessingErrorCallback>;
          /**
           * Constructs a new instance of the androidx.camera.core.ProcessingImageReader$OnProcessingErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { notifyProcessingError(param0: string, param1: java.lang.Throwable): void });
          public constructor();
          public notifyProcessingError(param0: string, param1: java.lang.Throwable): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ProcessingSurface extends androidx.camera.core.impl.DeferrableSurface {
        public static class: java.lang.Class<androidx.camera.core.ProcessingSurface>;
        public provideSurface(): com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export abstract class ResolutionInfo {
        public static class: java.lang.Class<androidx.camera.core.ResolutionInfo>;
        public getCropRect(): globalAndroid.graphics.Rect;
        public getResolution(): any;
        public getRotationDegrees(): number;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class SafeCloseImageReaderProxy extends androidx.camera.core.impl.ImageReaderProxy {
        public static class: java.lang.Class<androidx.camera.core.SafeCloseImageReaderProxy>;
        public close(): void;
        public getHeight(): number;
        public getCapacity(): number;
        public getImageFormat(): number;
        public setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void;
        public clearOnImageAvailableListener(): void;
        public safeClose(): void;
        public constructor(param0: androidx.camera.core.impl.ImageReaderProxy);
        public acquireLatestImage(): androidx.camera.core.ImageProxy;
        public getWidth(): number;
        public getSurface(): globalAndroid.view.Surface;
        public setOnImageCloseListener(param0: androidx.camera.core.ForwardingImageProxy.OnImageCloseListener): void;
        public getMaxImages(): number;
        public acquireNextImage(): androidx.camera.core.ImageProxy;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class SettableImageProxy extends androidx.camera.core.ForwardingImageProxy {
        public static class: java.lang.Class<androidx.camera.core.SettableImageProxy>;
        public getImageInfo(): androidx.camera.core.ImageInfo;
        public constructor(param0: androidx.camera.core.ImageProxy);
        public getWidth(): number;
        public getHeight(): number;
        public close(): void;
        public getCropRect(): globalAndroid.graphics.Rect;
        public constructor(param0: androidx.camera.core.ImageProxy, param1: any, param2: androidx.camera.core.ImageInfo);
        public setCropRect(param0: globalAndroid.graphics.Rect): void;
        public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
        public getImage(): globalAndroid.media.Image;
        public getFormat(): number;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class SettableImageProxyBundle extends androidx.camera.core.impl.ImageProxyBundle {
        public static class: java.lang.Class<androidx.camera.core.SettableImageProxyBundle>;
        public getCaptureIds(): java.util.List<java.lang.Integer>;
        public getImageProxy(param0: number): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.ImageProxy>;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class SingleCloseImageProxy extends androidx.camera.core.ForwardingImageProxy {
        public static class: java.lang.Class<androidx.camera.core.SingleCloseImageProxy>;
        public getImageInfo(): androidx.camera.core.ImageInfo;
        public close(): void;
        public getHeight(): number;
        public getWidth(): number;
        public getCropRect(): globalAndroid.graphics.Rect;
        public setCropRect(param0: globalAndroid.graphics.Rect): void;
        public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
        public getImage(): globalAndroid.media.Image;
        public getFormat(): number;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class SurfaceOrientedMeteringPointFactory extends androidx.camera.core.MeteringPointFactory {
        public static class: java.lang.Class<androidx.camera.core.SurfaceOrientedMeteringPointFactory>;
        public constructor(param0: number, param1: number);
        public constructor(param0: globalAndroid.util.Rational);
        public convertPoint(param0: number, param1: number): globalAndroid.graphics.PointF;
        public constructor(param0: number, param1: number, param2: androidx.camera.core.UseCase);
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class SurfaceOutput {
        public static class: java.lang.Class<androidx.camera.core.SurfaceOutput>;
        /**
         * Constructs a new instance of the androidx.camera.core.SurfaceOutput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getSurface(param0: java.util.concurrent.Executor, param1: androidx.core.util.Consumer<androidx.camera.core.SurfaceOutput.Event>): globalAndroid.view.Surface; getTargets(): number; getSize(): any; getFormat(): number; getRotationDegrees(): number; close(): void; updateTransformMatrix(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void });
        public constructor();
        public close(): void;
        public getTargets(): number;
        public getSurface(param0: java.util.concurrent.Executor, param1: androidx.core.util.Consumer<androidx.camera.core.SurfaceOutput.Event>): globalAndroid.view.Surface;
        public getRotationDegrees(): number;
        public updateTransformMatrix(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
        public getSize(): any;
        public getFormat(): number;
      }
      export module SurfaceOutput {
        export abstract class Event {
          public static class: java.lang.Class<androidx.camera.core.SurfaceOutput.Event>;
          public static EVENT_REQUEST_CLOSE: number;
          public getSurfaceOutput(): androidx.camera.core.SurfaceOutput;
          public constructor();
          public static of(param0: number, param1: androidx.camera.core.SurfaceOutput): androidx.camera.core.SurfaceOutput.Event;
          public getEventCode(): number;
        }
        export module Event {
          export class EventCode {
            public static class: java.lang.Class<androidx.camera.core.SurfaceOutput.Event.EventCode>;
            /**
             * Constructs a new instance of the androidx.camera.core.SurfaceOutput$Event$EventCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
        export class GlTransformOptions {
          public static class: java.lang.Class<androidx.camera.core.SurfaceOutput.GlTransformOptions>;
          public static USE_SURFACE_TEXTURE_TRANSFORM: androidx.camera.core.SurfaceOutput.GlTransformOptions;
          public static APPLY_CROP_ROTATE_AND_MIRRORING: androidx.camera.core.SurfaceOutput.GlTransformOptions;
          public static valueOf(param0: string): androidx.camera.core.SurfaceOutput.GlTransformOptions;
          public static values(): androidNative.Array<androidx.camera.core.SurfaceOutput.GlTransformOptions>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class SurfaceProcessor {
        public static class: java.lang.Class<androidx.camera.core.SurfaceProcessor>;
        /**
         * Constructs a new instance of the androidx.camera.core.SurfaceProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onInputSurface(param0: androidx.camera.core.SurfaceRequest): void; onOutputSurface(param0: androidx.camera.core.SurfaceOutput): void });
        public constructor();
        public onOutputSurface(param0: androidx.camera.core.SurfaceOutput): void;
        public onInputSurface(param0: androidx.camera.core.SurfaceRequest): void;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class SurfaceRequest {
        public static class: java.lang.Class<androidx.camera.core.SurfaceRequest>;
        public updateTransformationInfo(param0: androidx.camera.core.SurfaceRequest.TransformationInfo): void;
        public clearTransformationInfoListener(): void;
        public constructor(param0: any, param1: androidx.camera.core.impl.CameraInternal, param2: boolean);
        public getCamera(): androidx.camera.core.impl.CameraInternal;
        public addRequestCancellationListener(param0: java.util.concurrent.Executor, param1: java.lang.Runnable): void;
        public getDeferrableSurface(): androidx.camera.core.impl.DeferrableSurface;
        public isRGBA8888Required(): boolean;
        public getResolution(): any;
        public provideSurface(param0: globalAndroid.view.Surface, param1: java.util.concurrent.Executor, param2: androidx.core.util.Consumer<androidx.camera.core.SurfaceRequest.Result>): void;
        public willNotProvideSurface(): boolean;
        public setTransformationInfoListener(param0: java.util.concurrent.Executor, param1: androidx.camera.core.SurfaceRequest.TransformationInfoListener): void;
        public constructor(param0: any, param1: androidx.camera.core.impl.CameraInternal, param2: boolean, param3: globalAndroid.util.Range<java.lang.Integer>);
        public getExpectedFrameRate(): globalAndroid.util.Range<java.lang.Integer>;
      }
      export module SurfaceRequest {
        export class RequestCancelledException {
          public static class: java.lang.Class<androidx.camera.core.SurfaceRequest.RequestCancelledException>;
        }
        export abstract class Result {
          public static class: java.lang.Class<androidx.camera.core.SurfaceRequest.Result>;
          public static RESULT_SURFACE_USED_SUCCESSFULLY: number;
          public static RESULT_REQUEST_CANCELLED: number;
          public static RESULT_INVALID_SURFACE: number;
          public static RESULT_SURFACE_ALREADY_PROVIDED: number;
          public static RESULT_WILL_NOT_PROVIDE_SURFACE: number;
          public getResultCode(): number;
          public getSurface(): globalAndroid.view.Surface;
        }
        export module Result {
          export class ResultCode {
            public static class: java.lang.Class<androidx.camera.core.SurfaceRequest.Result.ResultCode>;
            /**
             * Constructs a new instance of the androidx.camera.core.SurfaceRequest$Result$ResultCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
        export abstract class TransformationInfo {
          public static class: java.lang.Class<androidx.camera.core.SurfaceRequest.TransformationInfo>;
          public getCropRect(): globalAndroid.graphics.Rect;
          public getRotationDegrees(): number;
          public getTargetRotation(): number;
          public static of(param0: globalAndroid.graphics.Rect, param1: number, param2: number): androidx.camera.core.SurfaceRequest.TransformationInfo;
        }
        export class TransformationInfoListener {
          public static class: java.lang.Class<androidx.camera.core.SurfaceRequest.TransformationInfoListener>;
          /**
           * Constructs a new instance of the androidx.camera.core.SurfaceRequest$TransformationInfoListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onTransformationInfoUpdate(param0: androidx.camera.core.SurfaceRequest.TransformationInfo): void });
          public constructor();
          public onTransformationInfoUpdate(param0: androidx.camera.core.SurfaceRequest.TransformationInfo): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class TorchState {
        public static class: java.lang.Class<androidx.camera.core.TorchState>;
        public static OFF: number;
        public static ON: number;
      }
      export module TorchState {
        export class State {
          public static class: java.lang.Class<androidx.camera.core.TorchState.State>;
          /**
           * Constructs a new instance of the androidx.camera.core.TorchState$State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export abstract class UseCase {
        public static class: java.lang.Class<androidx.camera.core.UseCase>;
        public getSessionConfig(): androidx.camera.core.impl.SessionConfig;
        public onMergeConfig(param0: androidx.camera.core.impl.CameraInfoInternal, param1: androidx.camera.core.impl.UseCaseConfig.Builder<any, any, any>): androidx.camera.core.impl.UseCaseConfig<any>;
        public onStateAttached(): void;
        public onStateDetached(): void;
        public getResolutionInfo(): androidx.camera.core.ResolutionInfo;
        public getCamera(): androidx.camera.core.impl.CameraInternal;
        public mergeConfigs(param0: androidx.camera.core.impl.CameraInfoInternal, param1: androidx.camera.core.impl.UseCaseConfig<any>, param2: androidx.camera.core.impl.UseCaseConfig<any>): androidx.camera.core.impl.UseCaseConfig<any>;
        public updateSuggestedResolution(param0: any): void;
        public getUseCaseConfigBuilder(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.UseCaseConfig.Builder<any, any, any>;
        public getCurrentConfig(): androidx.camera.core.impl.UseCaseConfig<any>;
        public setViewPortCropRect(param0: globalAndroid.graphics.Rect): void;
        public onAttached(): void;
        public getCameraId(): string;
        public isCurrentCamera(param0: string): boolean;
        public updateSessionConfig(param0: androidx.camera.core.impl.SessionConfig): void;
        public notifyState(): void;
        public getViewPortCropRect(): globalAndroid.graphics.Rect;
        public notifyInactive(): void;
        public notifyActive(): void;
        public getAttachedSurfaceResolution(): any;
        public constructor(param0: androidx.camera.core.impl.UseCaseConfig<any>);
        public notifyUpdated(): void;
        public getCameraControl(): androidx.camera.core.impl.CameraControlInternal;
        public onAttach(param0: androidx.camera.core.impl.CameraInternal, param1: androidx.camera.core.impl.UseCaseConfig<any>, param2: androidx.camera.core.impl.UseCaseConfig<any>): void;
        public getImageFormat(): number;
        public getName(): string;
        public onDetach(param0: androidx.camera.core.impl.CameraInternal): void;
        public getTargetRotationInternal(): number;
        public onCameraControlReady(): void;
        public getSensorToBufferTransformMatrix(): globalAndroid.graphics.Matrix;
        public getResolutionInfoInternal(): androidx.camera.core.ResolutionInfo;
        public setSensorToBufferTransformMatrix(param0: globalAndroid.graphics.Matrix): void;
        public getRelativeRotation(param0: androidx.camera.core.impl.CameraInternal): number;
        public getDefaultConfig(param0: boolean, param1: androidx.camera.core.impl.UseCaseConfigFactory): androidx.camera.core.impl.UseCaseConfig<any>;
        public setTargetRotationInternal(param0: number): boolean;
        public getAppTargetRotation(): number;
        public onSuggestedResolutionUpdated(param0: any): any;
        public notifyReset(): void;
        public onDetached(): void;
      }
      export module UseCase {
        export class EventCallback {
          public static class: java.lang.Class<androidx.camera.core.UseCase.EventCallback>;
          /**
           * Constructs a new instance of the androidx.camera.core.UseCase$EventCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onAttach(param0: androidx.camera.core.CameraInfo): void; onDetach(): void });
          public constructor();
          public onAttach(param0: androidx.camera.core.CameraInfo): void;
          public onDetach(): void;
        }
        export class State {
          public static class: java.lang.Class<androidx.camera.core.UseCase.State>;
          public static ACTIVE: androidx.camera.core.UseCase.State;
          public static INACTIVE: androidx.camera.core.UseCase.State;
          public static values(): androidNative.Array<androidx.camera.core.UseCase.State>;
          public static valueOf(param0: string): androidx.camera.core.UseCase.State;
        }
        export class StateChangeCallback {
          public static class: java.lang.Class<androidx.camera.core.UseCase.StateChangeCallback>;
          /**
           * Constructs a new instance of the androidx.camera.core.UseCase$StateChangeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onUseCaseActive(param0: androidx.camera.core.UseCase): void; onUseCaseInactive(param0: androidx.camera.core.UseCase): void; onUseCaseUpdated(param0: androidx.camera.core.UseCase): void; onUseCaseReset(param0: androidx.camera.core.UseCase): void });
          public constructor();
          public onUseCaseReset(param0: androidx.camera.core.UseCase): void;
          public onUseCaseActive(param0: androidx.camera.core.UseCase): void;
          public onUseCaseInactive(param0: androidx.camera.core.UseCase): void;
          public onUseCaseUpdated(param0: androidx.camera.core.UseCase): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class UseCaseGroup {
        public static class: java.lang.Class<androidx.camera.core.UseCaseGroup>;
        public getViewPort(): androidx.camera.core.ViewPort;
        public getUseCases(): java.util.List<androidx.camera.core.UseCase>;
        public getEffects(): java.util.List<androidx.camera.core.CameraEffect>;
      }
      export module UseCaseGroup {
        export class Builder {
          public static class: java.lang.Class<androidx.camera.core.UseCaseGroup.Builder>;
          public addEffect(param0: androidx.camera.core.CameraEffect): androidx.camera.core.UseCaseGroup.Builder;
          public constructor();
          public addUseCase(param0: androidx.camera.core.UseCase): androidx.camera.core.UseCaseGroup.Builder;
          public build(): androidx.camera.core.UseCaseGroup;
          public setViewPort(param0: androidx.camera.core.ViewPort): androidx.camera.core.UseCaseGroup.Builder;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class VideoCapture extends androidx.camera.core.UseCase {
        public static class: java.lang.Class<androidx.camera.core.VideoCapture>;
        public static ERROR_UNKNOWN: number;
        public static ERROR_ENCODER: number;
        public static ERROR_MUXER: number;
        public static ERROR_RECORDING_IN_PROGRESS: number;
        public static ERROR_FILE_IO: number;
        public static ERROR_INVALID_CAMERA: number;
        public static ERROR_RECORDING_TOO_SHORT: number;
        public static DEFAULT_CONFIG: androidx.camera.core.VideoCapture.Defaults;
        public mIsFirstVideoKeyFrameWrite: java.util.concurrent.atomic.AtomicBoolean;
        public mIsFirstAudioSampleWrite: java.util.concurrent.atomic.AtomicBoolean;
        public startRecording(param0: androidx.camera.core.VideoCapture.OutputFileOptions, param1: java.util.concurrent.Executor, param2: androidx.camera.core.VideoCapture.OnVideoSavedCallback): void;
        public onAttached(): void;
        public onStateDetached(): void;
        public getDefaultConfig(param0: boolean, param1: androidx.camera.core.impl.UseCaseConfigFactory): androidx.camera.core.impl.UseCaseConfig<any>;
        public setTargetRotation(param0: number): void;
        public getUseCaseConfigBuilder(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.UseCaseConfig.Builder<any, any, any>;
        public onSuggestedResolutionUpdated(param0: any): any;
        public stopRecording(): void;
        public onDetached(): void;
      }
      export module VideoCapture {
        export class Api23Impl {
          public static class: java.lang.Class<androidx.camera.core.VideoCapture.Api23Impl>;
        }
        export class Api26Impl {
          public static class: java.lang.Class<androidx.camera.core.VideoCapture.Api26Impl>;
        }
        export class Builder extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.VideoCapture.Builder>;
          public setZslDisabled(param0: boolean): any;
          public setTargetClass(param0: java.lang.Class<androidx.camera.core.VideoCapture>): androidx.camera.core.VideoCapture.Builder;
          public setAudioMinBufferSize(param0: number): androidx.camera.core.VideoCapture.Builder;
          public setDefaultResolution(param0: any): androidx.camera.core.VideoCapture.Builder;
          public setDefaultResolution(param0: any): any;
          public build(): any;
          public build(): androidx.camera.core.VideoCapture;
          public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
          public getUseCaseConfig(): any;
          public getUseCaseConfig(): androidx.camera.core.impl.VideoCaptureConfig;
          public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): androidx.camera.core.VideoCapture.Builder;
          public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): any;
          public setMaxResolution(param0: any): androidx.camera.core.VideoCapture.Builder;
          public static fromConfig(param0: androidx.camera.core.impl.VideoCaptureConfig): androidx.camera.core.VideoCapture.Builder;
          public constructor();
          public setTargetRotation(param0: number): androidx.camera.core.VideoCapture.Builder;
          public setAudioSampleRate(param0: number): androidx.camera.core.VideoCapture.Builder;
          public setAudioChannelCount(param0: number): androidx.camera.core.VideoCapture.Builder;
          public setBackgroundExecutor(param0: java.util.concurrent.Executor): any;
          public setVideoFrameRate(param0: number): androidx.camera.core.VideoCapture.Builder;
          public setBitRate(param0: number): androidx.camera.core.VideoCapture.Builder;
          public setCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.VideoCapture.Builder;
          public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.VideoCapture.Builder;
          public setMaxResolution(param0: any): any;
          public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): any;
          public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.VideoCapture.Builder;
          public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.VideoCapture.Builder;
          public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): any;
          public setTargetClass(param0: java.lang.Class<any>): any;
          public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): any;
          public setTargetAspectRatio(param0: number): androidx.camera.core.VideoCapture.Builder;
          public setZslDisabled(param0: boolean): androidx.camera.core.VideoCapture.Builder;
          public setTargetResolution(param0: any): androidx.camera.core.VideoCapture.Builder;
          public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.VideoCapture.Builder;
          public setTargetRotation(param0: number): any;
          public setTargetName(param0: string): androidx.camera.core.VideoCapture.Builder;
          public setBackgroundExecutor(param0: java.util.concurrent.Executor): androidx.camera.core.VideoCapture.Builder;
          public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): any;
          public setSurfaceOccupancyPriority(param0: number): any;
          public setTargetAspectRatio(param0: number): any;
          public setSurfaceOccupancyPriority(param0: number): androidx.camera.core.VideoCapture.Builder;
          public setTargetName(param0: string): any;
          public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): any;
          public setIFrameInterval(param0: number): androidx.camera.core.VideoCapture.Builder;
          public setAudioBitRate(param0: number): androidx.camera.core.VideoCapture.Builder;
          public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.VideoCapture.Builder;
          public setCameraSelector(param0: androidx.camera.core.CameraSelector): any;
          public setTargetResolution(param0: any): any;
        }
        export class Defaults extends androidx.camera.core.impl.ConfigProvider<androidx.camera.core.impl.VideoCaptureConfig> {
          public static class: java.lang.Class<androidx.camera.core.VideoCapture.Defaults>;
          public constructor();
          public getConfig(): any;
          public getConfig(): androidx.camera.core.impl.VideoCaptureConfig;
        }
        export class Metadata {
          public static class: java.lang.Class<androidx.camera.core.VideoCapture.Metadata>;
          public location: globalAndroid.location.Location;
          public constructor();
        }
        export class OnVideoSavedCallback {
          public static class: java.lang.Class<androidx.camera.core.VideoCapture.OnVideoSavedCallback>;
          /**
           * Constructs a new instance of the androidx.camera.core.VideoCapture$OnVideoSavedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onVideoSaved(param0: androidx.camera.core.VideoCapture.OutputFileResults): void; onError(param0: number, param1: string, param2: java.lang.Throwable): void });
          public constructor();
          public onVideoSaved(param0: androidx.camera.core.VideoCapture.OutputFileResults): void;
          public onError(param0: number, param1: string, param2: java.lang.Throwable): void;
        }
        export class OutputFileOptions {
          public static class: java.lang.Class<androidx.camera.core.VideoCapture.OutputFileOptions>;
        }
        export module OutputFileOptions {
          export class Builder {
            public static class: java.lang.Class<androidx.camera.core.VideoCapture.OutputFileOptions.Builder>;
            public build(): androidx.camera.core.VideoCapture.OutputFileOptions;
            public constructor(param0: java.io.File);
            public setMetadata(param0: androidx.camera.core.VideoCapture.Metadata): androidx.camera.core.VideoCapture.OutputFileOptions.Builder;
            public constructor(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri, param2: globalAndroid.content.ContentValues);
            public constructor(param0: java.io.FileDescriptor);
          }
        }
        export class OutputFileResults {
          public static class: java.lang.Class<androidx.camera.core.VideoCapture.OutputFileResults>;
          public getSavedUri(): globalAndroid.net.Uri;
        }
        export class VideoCaptureError {
          public static class: java.lang.Class<androidx.camera.core.VideoCapture.VideoCaptureError>;
          /**
           * Constructs a new instance of the androidx.camera.core.VideoCapture$VideoCaptureError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
        export class VideoEncoderInitStatus {
          public static class: java.lang.Class<androidx.camera.core.VideoCapture.VideoEncoderInitStatus>;
          public static VIDEO_ENCODER_INIT_STATUS_UNINITIALIZED: androidx.camera.core.VideoCapture.VideoEncoderInitStatus;
          public static VIDEO_ENCODER_INIT_STATUS_INITIALIZED_FAILED: androidx.camera.core.VideoCapture.VideoEncoderInitStatus;
          public static VIDEO_ENCODER_INIT_STATUS_INSUFFICIENT_RESOURCE: androidx.camera.core.VideoCapture.VideoEncoderInitStatus;
          public static VIDEO_ENCODER_INIT_STATUS_RESOURCE_RECLAIMED: androidx.camera.core.VideoCapture.VideoEncoderInitStatus;
          public static values(): androidNative.Array<androidx.camera.core.VideoCapture.VideoEncoderInitStatus>;
          public static valueOf(param0: string): androidx.camera.core.VideoCapture.VideoEncoderInitStatus;
        }
        export class VideoSavedListenerWrapper extends androidx.camera.core.VideoCapture.OnVideoSavedCallback {
          public static class: java.lang.Class<androidx.camera.core.VideoCapture.VideoSavedListenerWrapper>;
          public onVideoSaved(param0: androidx.camera.core.VideoCapture.OutputFileResults): void;
          public onError(param0: number, param1: string, param2: java.lang.Throwable): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ViewPort {
        public static class: java.lang.Class<androidx.camera.core.ViewPort>;
        public static FILL_START: number;
        public static FILL_CENTER: number;
        public static FILL_END: number;
        public static FIT: number;
        public getAspectRatio(): globalAndroid.util.Rational;
        public getLayoutDirection(): number;
        public getScaleType(): number;
        public getRotation(): number;
      }
      export module ViewPort {
        export class Builder {
          public static class: java.lang.Class<androidx.camera.core.ViewPort.Builder>;
          public constructor(param0: globalAndroid.util.Rational, param1: number);
          public setLayoutDirection(param0: number): androidx.camera.core.ViewPort.Builder;
          public setScaleType(param0: number): androidx.camera.core.ViewPort.Builder;
          public build(): androidx.camera.core.ViewPort;
        }
        export class LayoutDirection {
          public static class: java.lang.Class<androidx.camera.core.ViewPort.LayoutDirection>;
          /**
           * Constructs a new instance of the androidx.camera.core.ViewPort$LayoutDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
        export class ScaleType {
          public static class: java.lang.Class<androidx.camera.core.ViewPort.ScaleType>;
          /**
           * Constructs a new instance of the androidx.camera.core.ViewPort$ScaleType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export class ZoomState {
        public static class: java.lang.Class<androidx.camera.core.ZoomState>;
        /**
         * Constructs a new instance of the androidx.camera.core.ZoomState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getZoomRatio(): number; getMaxZoomRatio(): number; getMinZoomRatio(): number; getLinearZoom(): number });
        public constructor();
        public getZoomRatio(): number;
        public getMaxZoomRatio(): number;
        public getMinZoomRatio(): number;
        public getLinearZoom(): number;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class AutoValue_Bitmap2JpegBytes_In extends androidx.camera.core.imagecapture.Bitmap2JpegBytes.In {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_Bitmap2JpegBytes_In>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class AutoValue_CaptureNode_In extends androidx.camera.core.imagecapture.CaptureNode.In {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_CaptureNode_In>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class AutoValue_CaptureNode_Out extends androidx.camera.core.imagecapture.CaptureNode.Out {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_CaptureNode_Out>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class AutoValue_Image2JpegBytes_In extends androidx.camera.core.imagecapture.Image2JpegBytes.In {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_Image2JpegBytes_In>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class AutoValue_JpegBytes2Disk_In extends androidx.camera.core.imagecapture.JpegBytes2Disk.In {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_JpegBytes2Disk_In>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class AutoValue_ProcessingNode_In extends androidx.camera.core.imagecapture.ProcessingNode.In {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_ProcessingNode_In>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class AutoValue_ProcessingNode_InputPacket extends androidx.camera.core.imagecapture.ProcessingNode.InputPacket {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_ProcessingNode_InputPacket>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class AutoValue_TakePictureRequest extends androidx.camera.core.imagecapture.TakePictureRequest {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.AutoValue_TakePictureRequest>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class Bitmap2JpegBytes extends androidx.camera.core.processing.Operation<androidx.camera.core.imagecapture.Bitmap2JpegBytes.In, androidx.camera.core.processing.Packet<androidNative.Array<number>>> {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.Bitmap2JpegBytes>;
          public apply(param0: any): any;
          public apply(param0: androidx.camera.core.imagecapture.Bitmap2JpegBytes.In): androidx.camera.core.processing.Packet<androidNative.Array<number>>;
        }
        export module Bitmap2JpegBytes {
          export abstract class In {
            public static class: java.lang.Class<androidx.camera.core.imagecapture.Bitmap2JpegBytes.In>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class BundlingNode extends androidx.camera.core.processing.Node<androidx.camera.core.imagecapture.CaptureNode.Out, androidx.camera.core.imagecapture.ProcessingNode.In> {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.BundlingNode>;
          /**
           * Constructs a new instance of the androidx.camera.core.imagecapture.BundlingNode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { transform(param0: any): any; release(): void });
          public constructor();
          public transform(param0: any): any;
          public release(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class CameraRequest {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.CameraRequest>;
          public constructor(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>, param1: androidx.camera.core.imagecapture.TakePictureCallback);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class CaptureNode extends androidx.camera.core.processing.Node<androidx.camera.core.imagecapture.CaptureNode.In, androidx.camera.core.imagecapture.CaptureNode.Out> {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.CaptureNode>;
          public getCapacity(): number;
          public transform(param0: any): any;
          public release(): void;
          public transform(param0: androidx.camera.core.imagecapture.CaptureNode.In): androidx.camera.core.imagecapture.CaptureNode.Out;
          public setOnImageCloseListener(param0: androidx.camera.core.ForwardingImageProxy.OnImageCloseListener): void;
        }
        export module CaptureNode {
          export abstract class In {
            public static class: java.lang.Class<androidx.camera.core.imagecapture.CaptureNode.In>;
          }
          export abstract class Out {
            public static class: java.lang.Class<androidx.camera.core.imagecapture.CaptureNode.Out>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class Image2JpegBytes extends androidx.camera.core.processing.Operation<androidx.camera.core.imagecapture.Image2JpegBytes.In, androidx.camera.core.processing.Packet<androidNative.Array<number>>> {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.Image2JpegBytes>;
          public apply(param0: androidx.camera.core.imagecapture.Image2JpegBytes.In): androidx.camera.core.processing.Packet<androidNative.Array<number>>;
          public apply(param0: any): any;
        }
        export module Image2JpegBytes {
          export abstract class In {
            public static class: java.lang.Class<androidx.camera.core.imagecapture.Image2JpegBytes.In>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class ImageCaptureControl {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.ImageCaptureControl>;
          /**
           * Constructs a new instance of the androidx.camera.core.imagecapture.ImageCaptureControl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { lockFlashMode(): void; unlockFlashMode(): void; submitStillCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>): com.google.common.util.concurrent.ListenableFuture<java.lang.Void> });
          public constructor();
          public lockFlashMode(): void;
          public unlockFlashMode(): void;
          public submitStillCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class ImagePipeline {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.ImagePipeline>;
          public getCapacity(): number;
          public createSessionConfigBuilder(): androidx.camera.core.impl.SessionConfig.Builder;
          public constructor(param0: androidx.camera.core.impl.ImageCaptureConfig, param1: any);
          public close(): void;
          public setOnImageCloseListener(param0: androidx.camera.core.ForwardingImageProxy.OnImageCloseListener): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class JpegBytes2CroppedBitmap extends androidx.camera.core.processing.Operation<androidx.camera.core.processing.Packet<androidNative.Array<number>>, androidx.camera.core.processing.Packet<globalAndroid.graphics.Bitmap>> {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.JpegBytes2CroppedBitmap>;
          public apply(param0: androidx.camera.core.processing.Packet<androidNative.Array<number>>): androidx.camera.core.processing.Packet<globalAndroid.graphics.Bitmap>;
          public apply(param0: any): any;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class JpegBytes2Disk extends androidx.camera.core.processing.Operation<androidx.camera.core.imagecapture.JpegBytes2Disk.In, androidx.camera.core.ImageCapture.OutputFileResults> {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.JpegBytes2Disk>;
          public apply(param0: any): any;
          public apply(param0: androidx.camera.core.imagecapture.JpegBytes2Disk.In): androidx.camera.core.ImageCapture.OutputFileResults;
        }
        export module JpegBytes2Disk {
          export abstract class In {
            public static class: java.lang.Class<androidx.camera.core.imagecapture.JpegBytes2Disk.In>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class JpegBytes2Image extends androidx.camera.core.processing.Operation<androidx.camera.core.processing.Packet<androidNative.Array<number>>, androidx.camera.core.processing.Packet<androidx.camera.core.ImageProxy>> {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.JpegBytes2Image>;
          public apply(param0: androidx.camera.core.processing.Packet<androidNative.Array<number>>): androidx.camera.core.processing.Packet<androidx.camera.core.ImageProxy>;
          public constructor();
          public apply(param0: any): any;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class JpegImage2Result extends androidx.camera.core.processing.Operation<androidx.camera.core.processing.Packet<androidx.camera.core.ImageProxy>, androidx.camera.core.ImageProxy> {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.JpegImage2Result>;
          public constructor();
          public apply(param0: any): any;
          public apply(param0: androidx.camera.core.processing.Packet<androidx.camera.core.ImageProxy>): androidx.camera.core.ImageProxy;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class ProcessingInput2Packet extends androidx.camera.core.processing.Operation<androidx.camera.core.imagecapture.ProcessingNode.InputPacket, androidx.camera.core.processing.Packet<androidx.camera.core.ImageProxy>> {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.ProcessingInput2Packet>;
          public apply(param0: any): any;
          public apply(param0: androidx.camera.core.imagecapture.ProcessingNode.InputPacket): androidx.camera.core.processing.Packet<androidx.camera.core.ImageProxy>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class ProcessingNode extends androidx.camera.core.processing.Node<androidx.camera.core.imagecapture.ProcessingNode.In, java.lang.Void> {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.ProcessingNode>;
          public transform(param0: any): any;
          public release(): void;
          public transform(param0: androidx.camera.core.imagecapture.ProcessingNode.In): java.lang.Void;
        }
        export module ProcessingNode {
          export abstract class In {
            public static class: java.lang.Class<androidx.camera.core.imagecapture.ProcessingNode.In>;
          }
          export abstract class InputPacket {
            public static class: java.lang.Class<androidx.camera.core.imagecapture.ProcessingNode.InputPacket>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class ProcessingRequest {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.ProcessingRequest>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class RequestWithCallback extends androidx.camera.core.imagecapture.TakePictureCallback {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.RequestWithCallback>;
          public onFinalResult(param0: androidx.camera.core.ImageCapture.OutputFileResults): void;
          public onCaptureFailure(param0: androidx.camera.core.ImageCaptureException): void;
          public onImageCaptured(): void;
          public onFinalResult(param0: androidx.camera.core.ImageProxy): void;
          public onProcessFailure(param0: androidx.camera.core.ImageCaptureException): void;
          public isAborted(): boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class RgbaImageProxy extends androidx.camera.core.ImageProxy {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.RgbaImageProxy>;
          public getFormat(): number;
          public createBitmap(): globalAndroid.graphics.Bitmap;
          public getCropRect(): globalAndroid.graphics.Rect;
          public constructor(param0: androidx.camera.core.processing.Packet<globalAndroid.graphics.Bitmap>);
          public getHeight(): number;
          public getImageInfo(): androidx.camera.core.ImageInfo;
          public getPlanes(): androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>;
          public constructor(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Rect, param5: number, param6: globalAndroid.graphics.Matrix, param7: number);
          public close(): void;
          public getWidth(): number;
          public getImage(): globalAndroid.media.Image;
          public setCropRect(param0: globalAndroid.graphics.Rect): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class SingleBundlingNode extends androidx.camera.core.imagecapture.BundlingNode {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.SingleBundlingNode>;
          public transform(param0: any): any;
          public transform(param0: androidx.camera.core.imagecapture.CaptureNode.Out): androidx.camera.core.imagecapture.ProcessingNode.In;
          public release(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class TakePictureCallback {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.TakePictureCallback>;
          /**
           * Constructs a new instance of the androidx.camera.core.imagecapture.TakePictureCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onImageCaptured(): void; onFinalResult(param0: androidx.camera.core.ImageCapture.OutputFileResults): void; onFinalResult(param0: androidx.camera.core.ImageProxy): void; onCaptureFailure(param0: androidx.camera.core.ImageCaptureException): void; onProcessFailure(param0: androidx.camera.core.ImageCaptureException): void; isAborted(): boolean });
          public constructor();
          public onFinalResult(param0: androidx.camera.core.ImageCapture.OutputFileResults): void;
          public onCaptureFailure(param0: androidx.camera.core.ImageCaptureException): void;
          public onImageCaptured(): void;
          public onFinalResult(param0: androidx.camera.core.ImageProxy): void;
          public onProcessFailure(param0: androidx.camera.core.ImageCaptureException): void;
          public isAborted(): boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export class TakePictureManager extends androidx.camera.core.ForwardingImageProxy.OnImageCloseListener {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.TakePictureManager>;
          public abortRequests(): void;
          public pause(): void;
          public resume(): void;
          public onImageClose(param0: androidx.camera.core.ImageProxy): void;
          public constructor(param0: androidx.camera.core.imagecapture.ImageCaptureControl, param1: androidx.camera.core.imagecapture.ImagePipeline);
          public offerRequest(param0: androidx.camera.core.imagecapture.TakePictureRequest): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module imagecapture {
        export abstract class TakePictureRequest {
          public static class: java.lang.Class<androidx.camera.core.imagecapture.TakePictureRequest>;
          public static of(param0: java.util.concurrent.Executor, param1: androidx.camera.core.ImageCapture.OnImageCapturedCallback, param2: androidx.camera.core.ImageCapture.OnImageSavedCallback, param3: androidx.camera.core.ImageCapture.OutputFileOptions, param4: globalAndroid.graphics.Rect, param5: globalAndroid.graphics.Matrix, param6: number, param7: number, param8: number, param9: java.util.List<androidx.camera.core.impl.CameraCaptureCallback>): androidx.camera.core.imagecapture.TakePictureRequest;
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export abstract class AttachedSurfaceInfo {
          public static class: java.lang.Class<androidx.camera.core.impl.AttachedSurfaceInfo>;
          public static create(param0: androidx.camera.core.impl.SurfaceConfig, param1: number, param2: any, param3: globalAndroid.util.Range<java.lang.Integer>): androidx.camera.core.impl.AttachedSurfaceInfo;
          public getTargetFrameRate(): globalAndroid.util.Range<java.lang.Integer>;
          public getImageFormat(): number;
          public getSurfaceConfig(): androidx.camera.core.impl.SurfaceConfig;
          public getSize(): any;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class AutoValue_AttachedSurfaceInfo extends androidx.camera.core.impl.AttachedSurfaceInfo {
          public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_AttachedSurfaceInfo>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getTargetFrameRate(): globalAndroid.util.Range<java.lang.Integer>;
          public getImageFormat(): number;
          public getSurfaceConfig(): androidx.camera.core.impl.SurfaceConfig;
          public getSize(): any;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class AutoValue_CamcorderProfileProxy extends androidx.camera.core.impl.CamcorderProfileProxy {
          public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_CamcorderProfileProxy>;
          public getVideoFrameWidth(): number;
          public getVideoCodec(): number;
          public getVideoFrameRate(): number;
          public equals(param0: any): boolean;
          public getDuration(): number;
          public getVideoFrameHeight(): number;
          public toString(): string;
          public getAudioBitRate(): number;
          public getVideoBitRate(): number;
          public getAudioSampleRate(): number;
          public getQuality(): number;
          public getAudioCodec(): number;
          public getFileFormat(): number;
          public getAudioChannels(): number;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class AutoValue_CameraThreadConfig extends androidx.camera.core.impl.CameraThreadConfig {
          public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_CameraThreadConfig>;
          public getCameraExecutor(): java.util.concurrent.Executor;
          public equals(param0: any): boolean;
          public toString(): string;
          public getSchedulerHandler(): globalAndroid.os.Handler;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class AutoValue_Config_Option<T> extends androidx.camera.core.impl.Config.Option<any> {
          public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_Config_Option<any>>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getId(): string;
          public getValueClass(): java.lang.Class<any>;
          public getToken(): any;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class AutoValue_DeviceProperties extends androidx.camera.core.impl.DeviceProperties {
          public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_DeviceProperties>;
          public equals(param0: any): boolean;
          public toString(): string;
          public sdkVersion(): number;
          public manufacturer(): string;
          public hashCode(): number;
          public model(): string;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class AutoValue_Identifier extends androidx.camera.core.impl.Identifier {
          public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_Identifier>;
          public equals(param0: any): boolean;
          public getValue(): any;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class AutoValue_OutputSurface extends androidx.camera.core.impl.OutputSurface {
          public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_OutputSurface>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getImageFormat(): number;
          public getSurface(): globalAndroid.view.Surface;
          public getSize(): any;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class AutoValue_SessionConfig_OutputConfig extends androidx.camera.core.impl.SessionConfig.OutputConfig {
          public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_SessionConfig_OutputConfig>;
          public equals(param0: any): boolean;
          public getSurfaceGroupId(): number;
          public toString(): string;
          public getSurface(): androidx.camera.core.impl.DeferrableSurface;
          public getPhysicalCameraId(): string;
          public getSharedSurfaces(): java.util.List<androidx.camera.core.impl.DeferrableSurface>;
          public hashCode(): number;
        }
        export module AutoValue_SessionConfig_OutputConfig {
          export class Builder extends androidx.camera.core.impl.SessionConfig.OutputConfig.Builder {
            public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_SessionConfig_OutputConfig.Builder>;
            public setPhysicalCameraId(param0: string): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
            public setSurfaceGroupId(param0: number): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
            public build(): androidx.camera.core.impl.SessionConfig.OutputConfig;
            public setSurface(param0: androidx.camera.core.impl.DeferrableSurface): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
            public setSharedSurfaces(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class AutoValue_StateObservable_ErrorWrapper extends androidx.camera.core.impl.StateObservable.ErrorWrapper {
          public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_StateObservable_ErrorWrapper>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
          public getError(): java.lang.Throwable;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class AutoValue_SurfaceConfig extends androidx.camera.core.impl.SurfaceConfig {
          public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_SurfaceConfig>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getConfigType(): androidx.camera.core.impl.SurfaceConfig.ConfigType;
          public static getConfigType(param0: number): androidx.camera.core.impl.SurfaceConfig.ConfigType;
          public getConfigSize(): androidx.camera.core.impl.SurfaceConfig.ConfigSize;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class AutoValue_SurfaceSizeDefinition extends androidx.camera.core.impl.SurfaceSizeDefinition {
          public static class: java.lang.Class<androidx.camera.core.impl.AutoValue_SurfaceSizeDefinition>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getRecordSize(): any;
          public getPreviewSize(): any;
          public hashCode(): number;
          public getAnalysisSize(): any;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CamcorderProfileProvider {
          public static class: java.lang.Class<androidx.camera.core.impl.CamcorderProfileProvider>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.CamcorderProfileProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { hasProfile(param0: number): boolean; get(param0: number): androidx.camera.core.impl.CamcorderProfileProxy; '<clinit>'(): void });
          public constructor();
          public static EMPTY: androidx.camera.core.impl.CamcorderProfileProvider;
          public get(param0: number): androidx.camera.core.impl.CamcorderProfileProxy;
          public hasProfile(param0: number): boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export abstract class CamcorderProfileProxy {
          public static class: java.lang.Class<androidx.camera.core.impl.CamcorderProfileProxy>;
          public static CODEC_PROFILE_NONE: number;
          public getVideoFrameWidth(): number;
          public getAudioCodecMimeType(): string;
          public getVideoCodec(): number;
          public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number): androidx.camera.core.impl.CamcorderProfileProxy;
          public static fromCamcorderProfile(param0: globalAndroid.media.CamcorderProfile): androidx.camera.core.impl.CamcorderProfileProxy;
          public getVideoFrameRate(): number;
          public getDuration(): number;
          public getVideoFrameHeight(): number;
          public getAudioBitRate(): number;
          public getVideoBitRate(): number;
          public constructor();
          public getAudioSampleRate(): number;
          public getQuality(): number;
          public getAudioCodec(): number;
          public getFileFormat(): number;
          public getVideoCodecMimeType(): string;
          public getAudioChannels(): number;
          public getRequiredAudioProfile(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export abstract class CameraCaptureCallback {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureCallback>;
          public constructor();
          public onCaptureCompleted(param0: androidx.camera.core.impl.CameraCaptureResult): void;
          public onCaptureFailed(param0: androidx.camera.core.impl.CameraCaptureFailure): void;
          public onCaptureCancelled(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraCaptureCallbacks {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureCallbacks>;
          public static createNoOpCallback(): androidx.camera.core.impl.CameraCaptureCallback;
          public static createComboCallback(param0: androidNative.Array<androidx.camera.core.impl.CameraCaptureCallback>): androidx.camera.core.impl.CameraCaptureCallback;
        }
        export module CameraCaptureCallbacks {
          export class ComboCameraCaptureCallback extends androidx.camera.core.impl.CameraCaptureCallback {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureCallbacks.ComboCameraCaptureCallback>;
            public getCallbacks(): java.util.List<androidx.camera.core.impl.CameraCaptureCallback>;
            public onCaptureCompleted(param0: androidx.camera.core.impl.CameraCaptureResult): void;
            public onCaptureFailed(param0: androidx.camera.core.impl.CameraCaptureFailure): void;
            public onCaptureCancelled(): void;
          }
          export class NoOpCameraCaptureCallback extends androidx.camera.core.impl.CameraCaptureCallback {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureCallbacks.NoOpCameraCaptureCallback>;
            public onCaptureCompleted(param0: androidx.camera.core.impl.CameraCaptureResult): void;
            public onCaptureFailed(param0: androidx.camera.core.impl.CameraCaptureFailure): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraCaptureFailure {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureFailure>;
          public constructor(param0: androidx.camera.core.impl.CameraCaptureFailure.Reason);
          public getReason(): androidx.camera.core.impl.CameraCaptureFailure.Reason;
        }
        export module CameraCaptureFailure {
          export class Reason {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureFailure.Reason>;
            public static ERROR: androidx.camera.core.impl.CameraCaptureFailure.Reason;
            public static valueOf(param0: string): androidx.camera.core.impl.CameraCaptureFailure.Reason;
            public static values(): androidNative.Array<androidx.camera.core.impl.CameraCaptureFailure.Reason>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraCaptureMetaData {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureMetaData>;
        }
        export module CameraCaptureMetaData {
          export class AeState {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureMetaData.AeState>;
            public static UNKNOWN: androidx.camera.core.impl.CameraCaptureMetaData.AeState;
            public static INACTIVE: androidx.camera.core.impl.CameraCaptureMetaData.AeState;
            public static SEARCHING: androidx.camera.core.impl.CameraCaptureMetaData.AeState;
            public static FLASH_REQUIRED: androidx.camera.core.impl.CameraCaptureMetaData.AeState;
            public static CONVERGED: androidx.camera.core.impl.CameraCaptureMetaData.AeState;
            public static LOCKED: androidx.camera.core.impl.CameraCaptureMetaData.AeState;
            public static values(): androidNative.Array<androidx.camera.core.impl.CameraCaptureMetaData.AeState>;
            public static valueOf(param0: string): androidx.camera.core.impl.CameraCaptureMetaData.AeState;
          }
          export class AfMode {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureMetaData.AfMode>;
            public static UNKNOWN: androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
            public static OFF: androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
            public static ON_MANUAL_AUTO: androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
            public static ON_CONTINUOUS_AUTO: androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
            public static values(): androidNative.Array<androidx.camera.core.impl.CameraCaptureMetaData.AfMode>;
            public static valueOf(param0: string): androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
          }
          export class AfState {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureMetaData.AfState>;
            public static UNKNOWN: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
            public static INACTIVE: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
            public static SCANNING: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
            public static PASSIVE_FOCUSED: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
            public static PASSIVE_NOT_FOCUSED: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
            public static LOCKED_FOCUSED: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
            public static LOCKED_NOT_FOCUSED: androidx.camera.core.impl.CameraCaptureMetaData.AfState;
            public static values(): androidNative.Array<androidx.camera.core.impl.CameraCaptureMetaData.AfState>;
            public static valueOf(param0: string): androidx.camera.core.impl.CameraCaptureMetaData.AfState;
          }
          export class AwbState {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureMetaData.AwbState>;
            public static UNKNOWN: androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
            public static INACTIVE: androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
            public static METERING: androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
            public static CONVERGED: androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
            public static LOCKED: androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
            public static valueOf(param0: string): androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
            public static values(): androidNative.Array<androidx.camera.core.impl.CameraCaptureMetaData.AwbState>;
          }
          export class FlashState {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureMetaData.FlashState>;
            public static UNKNOWN: androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
            public static NONE: androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
            public static READY: androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
            public static FIRED: androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
            public static values(): androidNative.Array<androidx.camera.core.impl.CameraCaptureMetaData.FlashState>;
            public static valueOf(param0: string): androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraCaptureResult {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureResult>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.CameraCaptureResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getAfMode(): androidx.camera.core.impl.CameraCaptureMetaData.AfMode; getAfState(): androidx.camera.core.impl.CameraCaptureMetaData.AfState; getAeState(): androidx.camera.core.impl.CameraCaptureMetaData.AeState; getAwbState(): androidx.camera.core.impl.CameraCaptureMetaData.AwbState; getFlashState(): androidx.camera.core.impl.CameraCaptureMetaData.FlashState; getTimestamp(): number; getTagBundle(): androidx.camera.core.impl.TagBundle; populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void; getCaptureResult(): globalAndroid.hardware.camera2.CaptureResult });
          public constructor();
          public getAeState(): androidx.camera.core.impl.CameraCaptureMetaData.AeState;
          public populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
          public getAwbState(): androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
          public getTimestamp(): number;
          public getCaptureResult(): globalAndroid.hardware.camera2.CaptureResult;
          public getFlashState(): androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
          public getAfMode(): androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
          public getTagBundle(): androidx.camera.core.impl.TagBundle;
          public getAfState(): androidx.camera.core.impl.CameraCaptureMetaData.AfState;
        }
        export module CameraCaptureResult {
          export class EmptyCameraCaptureResult extends androidx.camera.core.impl.CameraCaptureResult {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureResult.EmptyCameraCaptureResult>;
            public getAeState(): androidx.camera.core.impl.CameraCaptureMetaData.AeState;
            public constructor();
            public getAfMode(): androidx.camera.core.impl.CameraCaptureMetaData.AfMode;
            public getFlashState(): androidx.camera.core.impl.CameraCaptureMetaData.FlashState;
            public getTimestamp(): number;
            public getTagBundle(): androidx.camera.core.impl.TagBundle;
            public populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
            public getCaptureResult(): globalAndroid.hardware.camera2.CaptureResult;
            public static create(): androidx.camera.core.impl.CameraCaptureResult;
            public getAfState(): androidx.camera.core.impl.CameraCaptureMetaData.AfState;
            public getAwbState(): androidx.camera.core.impl.CameraCaptureMetaData.AwbState;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraCaptureResults {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraCaptureResults>;
          public static retrieveCameraCaptureResult(param0: androidx.camera.core.ImageInfo): androidx.camera.core.impl.CameraCaptureResult;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraConfig extends androidx.camera.core.impl.ReadableConfig {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraConfig>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.CameraConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getUseCaseConfigFactory(): androidx.camera.core.impl.UseCaseConfigFactory;
            getCompatibilityId(): androidx.camera.core.impl.Identifier;
            getUseCaseCombinationRequiredRule(): number;
            getSessionProcessor(param0: androidx.camera.core.impl.SessionProcessor): androidx.camera.core.impl.SessionProcessor;
            getSessionProcessor(): androidx.camera.core.impl.SessionProcessor;
            '<clinit>'(): void;
            getConfig(): androidx.camera.core.impl.Config;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          });
          public constructor();
          public static REQUIRED_RULE_NONE: number;
          public static OPTION_USECASE_CONFIG_FACTORY: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.UseCaseConfigFactory>;
          public static OPTION_COMPATIBILITY_ID: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.Identifier>;
          public static OPTION_USE_CASE_COMBINATION_REQUIRED_RULE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static REQUIRED_RULE_COEXISTING_PREVIEW_AND_IMAGE_CAPTURE: number;
          public static OPTION_SESSION_PROCESSOR: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.SessionProcessor>;
          public static OPTION_ZSL_DISABLED: androidx.camera.core.impl.Config.Option<java.lang.Boolean>;
          public getCompatibilityId(): androidx.camera.core.impl.Identifier;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getUseCaseConfigFactory(): androidx.camera.core.impl.UseCaseConfigFactory;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getConfig(): androidx.camera.core.impl.Config;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public getSessionProcessor(param0: androidx.camera.core.impl.SessionProcessor): androidx.camera.core.impl.SessionProcessor;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
          public getUseCaseCombinationRequiredRule(): number;
          public getSessionProcessor(): androidx.camera.core.impl.SessionProcessor;
        }
        export module CameraConfig {
          export class Builder<B> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraConfig.Builder<any>>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.CameraConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { setUseCaseConfigFactory(param0: androidx.camera.core.impl.UseCaseConfigFactory): B; setCompatibilityId(param0: androidx.camera.core.impl.Identifier): B; setUseCaseCombinationRequiredRule(param0: number): B; setSessionProcessor(param0: androidx.camera.core.impl.SessionProcessor): B; setZslDisabled(param0: boolean): B });
            public constructor();
            public setZslDisabled(param0: boolean): B;
            public setSessionProcessor(param0: androidx.camera.core.impl.SessionProcessor): B;
            public setUseCaseConfigFactory(param0: androidx.camera.core.impl.UseCaseConfigFactory): B;
            public setUseCaseCombinationRequiredRule(param0: number): B;
            public setCompatibilityId(param0: androidx.camera.core.impl.Identifier): B;
          }
          export class RequiredRule {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraConfig.RequiredRule>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.CameraConfig$RequiredRule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraConfigProvider {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraConfigProvider>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.CameraConfigProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getConfig(param0: androidx.camera.core.CameraInfo, param1: globalAndroid.content.Context): androidx.camera.core.impl.CameraConfig; lambda$static$0(param0: androidx.camera.core.CameraInfo, param1: globalAndroid.content.Context): androidx.camera.core.impl.CameraConfig; '<clinit>'(): void });
          public constructor();
          public static EMPTY: androidx.camera.core.impl.CameraConfigProvider;
          public getConfig(param0: androidx.camera.core.CameraInfo, param1: globalAndroid.content.Context): androidx.camera.core.impl.CameraConfig;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraConfigs {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraConfigs>;
          public static emptyConfig(): androidx.camera.core.impl.CameraConfig;
        }
        export module CameraConfigs {
          export class EmptyCameraConfig extends androidx.camera.core.impl.CameraConfig {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraConfigs.EmptyCameraConfig>;
            public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            public getSessionProcessor(): androidx.camera.core.impl.SessionProcessor;
            public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            public getConfig(): androidx.camera.core.impl.Config;
            public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            public getUseCaseConfigFactory(): androidx.camera.core.impl.UseCaseConfigFactory;
            public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
            public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            public getCompatibilityId(): androidx.camera.core.impl.Identifier;
            public getUseCaseCombinationRequiredRule(): number;
            public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            public getSessionProcessor(param0: androidx.camera.core.impl.SessionProcessor): androidx.camera.core.impl.SessionProcessor;
            public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraControlInternal extends androidx.camera.core.CameraControl {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraControlInternal>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.CameraControlInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getFlashMode(): number;
            setFlashMode(param0: number): void;
            addZslConfig(param0: androidx.camera.core.impl.SessionConfig.Builder): void;
            setZslDisabledByUserCaseConfig(param0: boolean): void;
            isZslDisabledByByUserCaseConfig(): boolean;
            submitStillCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>, param1: number, param2: number): com.google.common.util.concurrent.ListenableFuture<java.util.List<java.lang.Void>>;
            getSessionConfig(): androidx.camera.core.impl.SessionConfig;
            getSensorRect(): globalAndroid.graphics.Rect;
            addInteropConfig(param0: androidx.camera.core.impl.Config): void;
            clearInteropConfig(): void;
            getInteropConfig(): androidx.camera.core.impl.Config;
            '<clinit>'(): void;
            enableTorch(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
            startFocusAndMetering(param0: androidx.camera.core.FocusMeteringAction): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.FocusMeteringResult>;
            cancelFocusAndMetering(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
            setZoomRatio(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
            setLinearZoom(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
            setExposureCompensationIndex(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Integer>;
          });
          public constructor();
          public static DEFAULT_EMPTY_INSTANCE: androidx.camera.core.impl.CameraControlInternal;
          public submitStillCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>, param1: number, param2: number): com.google.common.util.concurrent.ListenableFuture<java.util.List<java.lang.Void>>;
          public setLinearZoom(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public addInteropConfig(param0: androidx.camera.core.impl.Config): void;
          public addZslConfig(param0: androidx.camera.core.impl.SessionConfig.Builder): void;
          public setZslDisabledByUserCaseConfig(param0: boolean): void;
          public cancelFocusAndMetering(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public setZoomRatio(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public isZslDisabledByByUserCaseConfig(): boolean;
          public startFocusAndMetering(param0: androidx.camera.core.FocusMeteringAction): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.FocusMeteringResult>;
          public clearInteropConfig(): void;
          public getInteropConfig(): androidx.camera.core.impl.Config;
          public getFlashMode(): number;
          public getSessionConfig(): androidx.camera.core.impl.SessionConfig;
          public getSensorRect(): globalAndroid.graphics.Rect;
          public setExposureCompensationIndex(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Integer>;
          public setFlashMode(param0: number): void;
          public enableTorch(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        }
        export module CameraControlInternal {
          export class CameraControlException {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraControlInternal.CameraControlException>;
            public getCameraCaptureFailure(): androidx.camera.core.impl.CameraCaptureFailure;
            public constructor(param0: androidx.camera.core.impl.CameraCaptureFailure);
            public constructor(param0: androidx.camera.core.impl.CameraCaptureFailure, param1: java.lang.Throwable);
          }
          export class ControlUpdateCallback {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraControlInternal.ControlUpdateCallback>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.CameraControlInternal$ControlUpdateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onCameraControlUpdateSessionConfig(): void; onCameraControlCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>): void });
            public constructor();
            public onCameraControlCaptureRequests(param0: java.util.List<androidx.camera.core.impl.CaptureConfig>): void;
            public onCameraControlUpdateSessionConfig(): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraDeviceSurfaceManager {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraDeviceSurfaceManager>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.CameraDeviceSurfaceManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { checkSupported(param0: string, param1: java.util.List<androidx.camera.core.impl.SurfaceConfig>): boolean; transformSurfaceConfig(param0: string, param1: number, param2: any): androidx.camera.core.impl.SurfaceConfig; getSuggestedResolutions(param0: string, param1: java.util.List<androidx.camera.core.impl.AttachedSurfaceInfo>, param2: java.util.List<androidx.camera.core.impl.UseCaseConfig<any>>): java.util.Map<androidx.camera.core.impl.UseCaseConfig<any>, any> });
          public constructor();
          public checkSupported(param0: string, param1: java.util.List<androidx.camera.core.impl.SurfaceConfig>): boolean;
          public getSuggestedResolutions(param0: string, param1: java.util.List<androidx.camera.core.impl.AttachedSurfaceInfo>, param2: java.util.List<androidx.camera.core.impl.UseCaseConfig<any>>): java.util.Map<androidx.camera.core.impl.UseCaseConfig<any>, any>;
          public transformSurfaceConfig(param0: string, param1: number, param2: any): androidx.camera.core.impl.SurfaceConfig;
        }
        export module CameraDeviceSurfaceManager {
          export class Provider {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraDeviceSurfaceManager.Provider>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.CameraDeviceSurfaceManager$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { newInstance(param0: globalAndroid.content.Context, param1: any, param2: java.util.Set<string>): androidx.camera.core.impl.CameraDeviceSurfaceManager });
            public constructor();
            public newInstance(param0: globalAndroid.content.Context, param1: any, param2: java.util.Set<string>): androidx.camera.core.impl.CameraDeviceSurfaceManager;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraFactory {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraFactory>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.CameraFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getCamera(param0: string): androidx.camera.core.impl.CameraInternal; getAvailableCameraIds(): java.util.Set<string>; getCameraManager(): any });
          public constructor();
          public getCameraManager(): any;
          public getAvailableCameraIds(): java.util.Set<string>;
          public getCamera(param0: string): androidx.camera.core.impl.CameraInternal;
        }
        export module CameraFactory {
          export class Provider {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraFactory.Provider>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.CameraFactory$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { newInstance(param0: globalAndroid.content.Context, param1: androidx.camera.core.impl.CameraThreadConfig, param2: androidx.camera.core.CameraSelector): androidx.camera.core.impl.CameraFactory });
            public constructor();
            public newInstance(param0: globalAndroid.content.Context, param1: androidx.camera.core.impl.CameraThreadConfig, param2: androidx.camera.core.CameraSelector): androidx.camera.core.impl.CameraFactory;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraFilters {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraFilters>;
          public static ANY: androidx.camera.core.CameraFilter;
          public static NONE: androidx.camera.core.CameraFilter;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraInfoInternal extends androidx.camera.core.CameraInfo {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraInfoInternal>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.CameraInfoInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getLensFacing(): java.lang.Integer;
            getCameraId(): string;
            addSessionCaptureCallback(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.CameraCaptureCallback): void;
            removeSessionCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): void;
            getCameraQuirks(): androidx.camera.core.impl.Quirks;
            getCamcorderProfileProvider(): androidx.camera.core.impl.CamcorderProfileProvider;
            getTimebase(): androidx.camera.core.impl.Timebase;
            getCameraSelector(): androidx.camera.core.CameraSelector;
            lambda$getCameraSelector$0(param0: java.util.List<any>): java.util.List<any>;
            getSensorRotationDegrees(): number;
            getSensorRotationDegrees(param0: number): number;
            hasFlashUnit(): boolean;
            getTorchState(): androidx.lifecycle.LiveData<java.lang.Integer>;
            getZoomState(): androidx.lifecycle.LiveData<androidx.camera.core.ZoomState>;
            getExposureState(): androidx.camera.core.ExposureState;
            getCameraState(): androidx.lifecycle.LiveData<androidx.camera.core.CameraState>;
            getImplementationType(): string;
            getCameraSelector(): androidx.camera.core.CameraSelector;
            isFocusMeteringSupported(param0: androidx.camera.core.FocusMeteringAction): boolean;
            isZslSupported(): boolean;
            isPrivateReprocessingSupported(): boolean;
          });
          public constructor();
          public static IMPLEMENTATION_TYPE_CAMERA2: string;
          public static IMPLEMENTATION_TYPE_CAMERA2_LEGACY: string;
          public static IMPLEMENTATION_TYPE_UNKNOWN: string;
          public static IMPLEMENTATION_TYPE_FAKE: string;
          public getCameraQuirks(): androidx.camera.core.impl.Quirks;
          public getCameraSelector(): androidx.camera.core.CameraSelector;
          public isFocusMeteringSupported(param0: androidx.camera.core.FocusMeteringAction): boolean;
          public removeSessionCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): void;
          public getSensorRotationDegrees(param0: number): number;
          public addSessionCaptureCallback(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.CameraCaptureCallback): void;
          public isPrivateReprocessingSupported(): boolean;
          public getSensorRotationDegrees(): number;
          public isZslSupported(): boolean;
          public getImplementationType(): string;
          public getCameraState(): androidx.lifecycle.LiveData<androidx.camera.core.CameraState>;
          public getExposureState(): androidx.camera.core.ExposureState;
          public getCameraId(): string;
          public getCamcorderProfileProvider(): androidx.camera.core.impl.CamcorderProfileProvider;
          public getTorchState(): androidx.lifecycle.LiveData<java.lang.Integer>;
          public getZoomState(): androidx.lifecycle.LiveData<androidx.camera.core.ZoomState>;
          public hasFlashUnit(): boolean;
          public getLensFacing(): java.lang.Integer;
          public getTimebase(): androidx.camera.core.impl.Timebase;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraInternal implements androidx.camera.core.Camera, androidx.camera.core.UseCase.StateChangeCallback {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraInternal>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.CameraInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            open(): void;
            close(): void;
            setActiveResumingMode(param0: boolean): void;
            release(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
            getCameraState(): androidx.camera.core.impl.Observable<androidx.camera.core.impl.CameraInternal.State>;
            attachUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
            detachUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
            getCameraControlInternal(): androidx.camera.core.impl.CameraControlInternal;
            getCameraInfoInternal(): androidx.camera.core.impl.CameraInfoInternal;
            getCameraControl(): androidx.camera.core.CameraControl;
            getCameraInfo(): androidx.camera.core.CameraInfo;
            getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
            getExtendedConfig(): androidx.camera.core.impl.CameraConfig;
            setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void;
            getCameraControl(): androidx.camera.core.CameraControl;
            getCameraInfo(): androidx.camera.core.CameraInfo;
            getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
            getExtendedConfig(): androidx.camera.core.impl.CameraConfig;
            setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void;
            isUseCasesCombinationSupported(param0: androidNative.Array<androidx.camera.core.UseCase>): boolean;
            onUseCaseActive(param0: androidx.camera.core.UseCase): void;
            onUseCaseInactive(param0: androidx.camera.core.UseCase): void;
            onUseCaseUpdated(param0: androidx.camera.core.UseCase): void;
            onUseCaseReset(param0: androidx.camera.core.UseCase): void;
          });
          public constructor();
          public onUseCaseReset(param0: androidx.camera.core.UseCase): void;
          public setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void;
          public getCameraControlInternal(): androidx.camera.core.impl.CameraControlInternal;
          public getCameraInfoInternal(): androidx.camera.core.impl.CameraInfoInternal;
          public getCameraControl(): androidx.camera.core.CameraControl;
          public getCameraState(): androidx.camera.core.impl.Observable<androidx.camera.core.impl.CameraInternal.State>;
          public onUseCaseActive(param0: androidx.camera.core.UseCase): void;
          public close(): void;
          public getExtendedConfig(): androidx.camera.core.impl.CameraConfig;
          public onUseCaseInactive(param0: androidx.camera.core.UseCase): void;
          public onUseCaseUpdated(param0: androidx.camera.core.UseCase): void;
          public setActiveResumingMode(param0: boolean): void;
          public open(): void;
          public attachUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
          public getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
          public isUseCasesCombinationSupported(param0: androidNative.Array<androidx.camera.core.UseCase>): boolean;
          public release(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public getCameraInfo(): androidx.camera.core.CameraInfo;
          public detachUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
        }
        export module CameraInternal {
          export class State {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraInternal.State>;
            public static PENDING_OPEN: androidx.camera.core.impl.CameraInternal.State;
            public static OPENING: androidx.camera.core.impl.CameraInternal.State;
            public static OPEN: androidx.camera.core.impl.CameraInternal.State;
            public static CLOSING: androidx.camera.core.impl.CameraInternal.State;
            public static CLOSED: androidx.camera.core.impl.CameraInternal.State;
            public static RELEASING: androidx.camera.core.impl.CameraInternal.State;
            public static RELEASED: androidx.camera.core.impl.CameraInternal.State;
            public static values(): androidNative.Array<androidx.camera.core.impl.CameraInternal.State>;
            public static valueOf(param0: string): androidx.camera.core.impl.CameraInternal.State;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraRepository {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraRepository>;
          public init(param0: androidx.camera.core.impl.CameraFactory): void;
          public getCameras(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
          public constructor();
          public getCamera(param0: string): androidx.camera.core.impl.CameraInternal;
          public deinit(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraStateRegistry {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraStateRegistry>;
          public markCameraState(param0: androidx.camera.core.Camera, param1: androidx.camera.core.impl.CameraInternal.State): void;
          public registerCamera(param0: androidx.camera.core.Camera, param1: java.util.concurrent.Executor, param2: androidx.camera.core.impl.CameraStateRegistry.OnOpenAvailableListener): void;
          public markCameraState(param0: androidx.camera.core.Camera, param1: androidx.camera.core.impl.CameraInternal.State, param2: boolean): void;
          public isCameraClosing(): boolean;
          public constructor(param0: number);
          public tryOpenCamera(param0: androidx.camera.core.Camera): boolean;
        }
        export module CameraStateRegistry {
          export class CameraRegistration {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraStateRegistry.CameraRegistration>;
          }
          export class OnOpenAvailableListener {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraStateRegistry.OnOpenAvailableListener>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.CameraStateRegistry$OnOpenAvailableListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onOpenAvailable(): void });
            public constructor();
            public onOpenAvailable(): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export abstract class CameraThreadConfig {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraThreadConfig>;
          public getCameraExecutor(): java.util.concurrent.Executor;
          public static create(param0: java.util.concurrent.Executor, param1: globalAndroid.os.Handler): androidx.camera.core.impl.CameraThreadConfig;
          public constructor();
          public getSchedulerHandler(): globalAndroid.os.Handler;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CameraValidator {
          public static class: java.lang.Class<androidx.camera.core.impl.CameraValidator>;
          public static validateCameras(param0: globalAndroid.content.Context, param1: androidx.camera.core.impl.CameraRepository, param2: androidx.camera.core.CameraSelector): void;
        }
        export module CameraValidator {
          export class CameraIdListIncorrectException {
            public static class: java.lang.Class<androidx.camera.core.impl.CameraValidator.CameraIdListIncorrectException>;
            public constructor(param0: string, param1: java.lang.Throwable);
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CaptureBundle {
          public static class: java.lang.Class<androidx.camera.core.impl.CaptureBundle>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.CaptureBundle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getCaptureStages(): java.util.List<androidx.camera.core.impl.CaptureStage> });
          public constructor();
          public getCaptureStages(): java.util.List<androidx.camera.core.impl.CaptureStage>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CaptureConfig {
          public static class: java.lang.Class<androidx.camera.core.impl.CaptureConfig>;
          public static TEMPLATE_TYPE_NONE: number;
          public static OPTION_ROTATION: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_JPEG_QUALITY: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public isUseRepeatingSurface(): boolean;
          public getCameraCaptureResult(): androidx.camera.core.impl.CameraCaptureResult;
          public static defaultEmptyCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
          public getTagBundle(): androidx.camera.core.impl.TagBundle;
          public getSurfaces(): java.util.List<androidx.camera.core.impl.DeferrableSurface>;
          public getCameraCaptureCallbacks(): java.util.List<androidx.camera.core.impl.CameraCaptureCallback>;
          public getImplementationOptions(): androidx.camera.core.impl.Config;
          public getTemplateType(): number;
        }
        export module CaptureConfig {
          export class Builder {
            public static class: java.lang.Class<androidx.camera.core.impl.CaptureConfig.Builder>;
            public constructor();
            public addTag(param0: string, param1: any): void;
            public removeSurface(param0: androidx.camera.core.impl.DeferrableSurface): void;
            public isUseRepeatingSurface(): boolean;
            public build(): androidx.camera.core.impl.CaptureConfig;
            public clearSurfaces(): void;
            public getImplementationOptions(): androidx.camera.core.impl.Config;
            public getTag(param0: string): any;
            public setCameraCaptureResult(param0: androidx.camera.core.impl.CameraCaptureResult): void;
            public static createFrom(param0: androidx.camera.core.impl.UseCaseConfig<any>): androidx.camera.core.impl.CaptureConfig.Builder;
            public getTemplateType(): number;
            public removeCameraCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): boolean;
            public setUseRepeatingSurface(param0: boolean): void;
            public addSurface(param0: androidx.camera.core.impl.DeferrableSurface): void;
            public getSurfaces(): java.util.Set<androidx.camera.core.impl.DeferrableSurface>;
            public addImplementationOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): void;
            public addCameraCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): void;
            public addAllTags(param0: androidx.camera.core.impl.TagBundle): void;
            public static from(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig.Builder;
            public setTemplateType(param0: number): void;
            public setImplementationOptions(param0: androidx.camera.core.impl.Config): void;
            public addAllCameraCaptureCallbacks(param0: java.util.Collection<androidx.camera.core.impl.CameraCaptureCallback>): void;
            public addImplementationOptions(param0: androidx.camera.core.impl.Config): void;
          }
          export class OptionUnpacker {
            public static class: java.lang.Class<androidx.camera.core.impl.CaptureConfig.OptionUnpacker>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.CaptureConfig$OptionUnpacker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { unpack(param0: androidx.camera.core.impl.UseCaseConfig<any>, param1: androidx.camera.core.impl.CaptureConfig.Builder): void });
            public constructor();
            public unpack(param0: androidx.camera.core.impl.UseCaseConfig<any>, param1: androidx.camera.core.impl.CaptureConfig.Builder): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CaptureProcessor {
          public static class: java.lang.Class<androidx.camera.core.impl.CaptureProcessor>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.CaptureProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onOutputSurface(param0: globalAndroid.view.Surface, param1: number): void; process(param0: androidx.camera.core.impl.ImageProxyBundle): void; onResolutionUpdate(param0: any): void; close(): void; getCloseFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void> });
          public constructor();
          public getCloseFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public onOutputSurface(param0: globalAndroid.view.Surface, param1: number): void;
          public close(): void;
          public onResolutionUpdate(param0: any): void;
          public process(param0: androidx.camera.core.impl.ImageProxyBundle): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class CaptureStage {
          public static class: java.lang.Class<androidx.camera.core.impl.CaptureStage>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.CaptureStage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getId(): number; getCaptureConfig(): androidx.camera.core.impl.CaptureConfig });
          public constructor();
          public getCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
          public getId(): number;
        }
        export module CaptureStage {
          export class DefaultCaptureStage extends androidx.camera.core.impl.CaptureStage {
            public static class: java.lang.Class<androidx.camera.core.impl.CaptureStage.DefaultCaptureStage>;
            public getCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
            public constructor();
            public getId(): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class Config {
          public static class: java.lang.Class<androidx.camera.core.impl.Config>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.Config interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          });
          public constructor();
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
        }
        export module Config {
          export abstract class Option<T> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.core.impl.Config.Option<any>>;
            public getValueClass(): java.lang.Class<T>;
            public static create(param0: string, param1: java.lang.Class<any>, param2: any): androidx.camera.core.impl.Config.Option<any>;
            public getId(): string;
            public getToken(): any;
            public static create(param0: string, param1: java.lang.Class<any>): androidx.camera.core.impl.Config.Option<any>;
          }
          export class OptionMatcher {
            public static class: java.lang.Class<androidx.camera.core.impl.Config.OptionMatcher>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.Config$OptionMatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onOptionMatched(param0: androidx.camera.core.impl.Config.Option<any>): boolean });
            public constructor();
            public onOptionMatched(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          }
          export class OptionPriority {
            public static class: java.lang.Class<androidx.camera.core.impl.Config.OptionPriority>;
            public static ALWAYS_OVERRIDE: androidx.camera.core.impl.Config.OptionPriority;
            public static REQUIRED: androidx.camera.core.impl.Config.OptionPriority;
            public static OPTIONAL: androidx.camera.core.impl.Config.OptionPriority;
            public static valueOf(param0: string): androidx.camera.core.impl.Config.OptionPriority;
            public static values(): androidNative.Array<androidx.camera.core.impl.Config.OptionPriority>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class ConfigProvider<C> extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.impl.ConfigProvider<any>>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.ConfigProvider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getConfig(): C });
          public constructor();
          public getConfig(): C;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class ConstantObservable<T> extends androidx.camera.core.impl.Observable<any> {
          public static class: java.lang.Class<androidx.camera.core.impl.ConstantObservable<any>>;
          public addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
          public fetchData(): com.google.common.util.concurrent.ListenableFuture<any>;
          public static withValue(param0: any): androidx.camera.core.impl.Observable<any>;
          public removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export abstract class DeferrableSurface {
          public static class: java.lang.Class<androidx.camera.core.impl.DeferrableSurface>;
          public static SIZE_UNDEFINED: any;
          public incrementUseCount(): void;
          public getSurface(): com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>;
          public getContainerClass(): java.lang.Class<any>;
          public provideSurface(): com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>;
          public getPrescribedSize(): any;
          public setContainerClass(param0: java.lang.Class<any>): void;
          public getUseCount(): number;
          public constructor(param0: any, param1: number);
          public constructor();
          public close(): void;
          public decrementUseCount(): void;
          public getPrescribedStreamFormat(): number;
          public getTerminationFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        }
        export module DeferrableSurface {
          export class SurfaceClosedException {
            public static class: java.lang.Class<androidx.camera.core.impl.DeferrableSurface.SurfaceClosedException>;
            public constructor(param0: string, param1: androidx.camera.core.impl.DeferrableSurface);
            public getDeferrableSurface(): androidx.camera.core.impl.DeferrableSurface;
          }
          export class SurfaceUnavailableException {
            public static class: java.lang.Class<androidx.camera.core.impl.DeferrableSurface.SurfaceUnavailableException>;
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class DeferrableSurfaces {
          public static class: java.lang.Class<androidx.camera.core.impl.DeferrableSurfaces>;
          public static tryIncrementAll(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>): boolean;
          public static incrementAll(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>): void;
          public static decrementAll(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>): void;
          public static surfaceListWithTimeout(param0: java.util.Collection<androidx.camera.core.impl.DeferrableSurface>, param1: boolean, param2: number, param3: java.util.concurrent.Executor, param4: java.util.concurrent.ScheduledExecutorService): com.google.common.util.concurrent.ListenableFuture<java.util.List<globalAndroid.view.Surface>>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export abstract class DeviceProperties {
          public static class: java.lang.Class<androidx.camera.core.impl.DeviceProperties>;
          public static create(param0: string, param1: string, param2: number): androidx.camera.core.impl.DeviceProperties;
          public constructor();
          public sdkVersion(): number;
          public static create(): androidx.camera.core.impl.DeviceProperties;
          public manufacturer(): string;
          public model(): string;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class ExtendedCameraConfigProviderStore {
          public static class: java.lang.Class<androidx.camera.core.impl.ExtendedCameraConfigProviderStore>;
          public static addConfig(param0: any, param1: androidx.camera.core.impl.CameraConfigProvider): void;
          public static getConfigProvider(param0: any): androidx.camera.core.impl.CameraConfigProvider;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export abstract class Identifier {
          public static class: java.lang.Class<androidx.camera.core.impl.Identifier>;
          public getValue(): any;
          public constructor();
          public static create(param0: any): androidx.camera.core.impl.Identifier;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class ImageAnalysisConfig extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.impl.ImageAnalysisConfig>;
          public static OPTION_BACKPRESSURE_STRATEGY: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_IMAGE_QUEUE_DEPTH: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_IMAGE_READER_PROXY_PROVIDER: androidx.camera.core.impl.Config.Option<androidx.camera.core.ImageReaderProxyProvider>;
          public static OPTION_OUTPUT_IMAGE_FORMAT: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_ONE_PIXEL_SHIFT_ENABLED: androidx.camera.core.impl.Config.Option<java.lang.Boolean>;
          public static OPTION_OUTPUT_IMAGE_ROTATION_ENABLED: androidx.camera.core.impl.Config.Option<java.lang.Boolean>;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getMaxResolution(param0: any): any;
          public isOutputImageRotationEnabled(param0: java.lang.Boolean): java.lang.Boolean;
          public getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public constructor(param0: androidx.camera.core.impl.OptionsBundle);
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getTargetResolution(param0: any): any;
          public getImageQueueDepth(): number;
          public getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
          public hasTargetAspectRatio(): boolean;
          public getTargetRotation(param0: number): number;
          public getInputFormat(): number;
          public getTargetClass(): java.lang.Class<any>;
          public getBackpressureStrategy(): number;
          public getSupportedResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public isZslDisabled(param0: boolean): boolean;
          public getSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
          public getSurfaceOccupancyPriority(): number;
          public getOutputImageFormat(param0: number): number;
          public getBackgroundExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
          public getTargetName(): string;
          public getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
          public getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
          public getBackgroundExecutor(): java.util.concurrent.Executor;
          public getTargetName(param0: string): string;
          public getImageQueueDepth(param0: number): number;
          public getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
          public getAppTargetRotation(param0: number): number;
          public getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
          public getOnePixelShiftEnabled(param0: java.lang.Boolean): java.lang.Boolean;
          public getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
          public getCameraSelector(): androidx.camera.core.CameraSelector;
          public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
          public getDefaultResolution(param0: any): any;
          public getTargetRotation(): number;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public getTargetAspectRatio(): number;
          public getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
          public getSurfaceOccupancyPriority(param0: number): number;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
          public getTargetResolution(): any;
          public getImageReaderProxyProvider(): androidx.camera.core.ImageReaderProxyProvider;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public getConfig(): androidx.camera.core.impl.Config;
          public getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
          public getMaxResolution(): any;
          public getDefaultResolution(): any;
          public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
          public getBackpressureStrategy(param0: number): number;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class ImageCaptureConfig extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.impl.ImageCaptureConfig>;
          public static OPTION_IMAGE_CAPTURE_MODE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_FLASH_MODE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_CAPTURE_BUNDLE: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.CaptureBundle>;
          public static OPTION_CAPTURE_PROCESSOR: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.CaptureProcessor>;
          public static OPTION_BUFFER_FORMAT: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_MAX_CAPTURE_STAGES: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_IMAGE_READER_PROXY_PROVIDER: androidx.camera.core.impl.Config.Option<androidx.camera.core.ImageReaderProxyProvider>;
          public static OPTION_USE_SOFTWARE_JPEG_ENCODER: androidx.camera.core.impl.Config.Option<java.lang.Boolean>;
          public static OPTION_FLASH_TYPE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_JPEG_COMPRESSION_QUALITY: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public getMaxCaptureStages(): number;
          public getMaxCaptureStages(param0: number): number;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getMaxResolution(param0: any): any;
          public getBufferFormat(param0: java.lang.Integer): java.lang.Integer;
          public getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public constructor(param0: androidx.camera.core.impl.OptionsBundle);
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getFlashType(param0: number): number;
          public getTargetResolution(param0: any): any;
          public getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
          public hasTargetAspectRatio(): boolean;
          public getTargetRotation(param0: number): number;
          public getInputFormat(): number;
          public hasCaptureMode(): boolean;
          public getTargetClass(): java.lang.Class<any>;
          public getSupportedResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public isZslDisabled(param0: boolean): boolean;
          public getSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
          public getSurfaceOccupancyPriority(): number;
          public getFlashType(): number;
          public getIoExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
          public getTargetName(): string;
          public getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
          public getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
          public getTargetName(param0: string): string;
          public getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
          public getAppTargetRotation(param0: number): number;
          public getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
          public getCaptureProcessor(): androidx.camera.core.impl.CaptureProcessor;
          public getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
          public getCameraSelector(): androidx.camera.core.CameraSelector;
          public getCaptureBundle(param0: androidx.camera.core.impl.CaptureBundle): androidx.camera.core.impl.CaptureBundle;
          public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
          public getDefaultResolution(param0: any): any;
          public getIoExecutor(): java.util.concurrent.Executor;
          public getTargetRotation(): number;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public getTargetAspectRatio(): number;
          public getFlashMode(): number;
          public getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
          public getSurfaceOccupancyPriority(param0: number): number;
          public getCaptureProcessor(param0: androidx.camera.core.impl.CaptureProcessor): androidx.camera.core.impl.CaptureProcessor;
          public getCaptureMode(): number;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
          public getJpegQuality(param0: number): number;
          public getTargetResolution(): any;
          public getImageReaderProxyProvider(): androidx.camera.core.ImageReaderProxyProvider;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public isSoftwareJpegEncoderRequested(): boolean;
          public getConfig(): androidx.camera.core.impl.Config;
          public getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
          public getJpegQuality(): number;
          public getMaxResolution(): any;
          public getBufferFormat(): java.lang.Integer;
          public getDefaultResolution(): any;
          public getFlashMode(param0: number): number;
          public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public getCaptureBundle(): androidx.camera.core.impl.CaptureBundle;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class ImageFormatConstants {
          public static class: java.lang.Class<androidx.camera.core.impl.ImageFormatConstants>;
          public static INTERNAL_DEFINED_IMAGE_FORMAT_JPEG: number;
          public static INTERNAL_DEFINED_IMAGE_FORMAT_PRIVATE: number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class ImageInfoProcessor {
          public static class: java.lang.Class<androidx.camera.core.impl.ImageInfoProcessor>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.ImageInfoProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getCaptureStage(): androidx.camera.core.impl.CaptureStage; process(param0: androidx.camera.core.ImageInfo): boolean });
          public constructor();
          public getCaptureStage(): androidx.camera.core.impl.CaptureStage;
          public process(param0: androidx.camera.core.ImageInfo): boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class ImageInputConfig extends androidx.camera.core.impl.ReadableConfig {
          public static class: java.lang.Class<androidx.camera.core.impl.ImageInputConfig>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.ImageInputConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getInputFormat(): number;
            '<clinit>'(): void;
            getConfig(): androidx.camera.core.impl.Config;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          });
          public constructor();
          public static OPTION_INPUT_FORMAT: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public getConfig(): androidx.camera.core.impl.Config;
          public getInputFormat(): number;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class ImageOutputConfig extends androidx.camera.core.impl.ReadableConfig {
          public static class: java.lang.Class<androidx.camera.core.impl.ImageOutputConfig>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.ImageOutputConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            hasTargetAspectRatio(): boolean;
            getTargetAspectRatio(): number;
            getTargetRotation(param0: number): number;
            getAppTargetRotation(param0: number): number;
            getTargetRotation(): number;
            getTargetResolution(param0: any): any;
            getTargetResolution(): any;
            getDefaultResolution(param0: any): any;
            getDefaultResolution(): any;
            getMaxResolution(param0: any): any;
            getMaxResolution(): any;
            getSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
            getSupportedResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
            '<clinit>'(): void;
            getConfig(): androidx.camera.core.impl.Config;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          });
          public constructor();
          public static OPTION_TARGET_RESOLUTION: androidx.camera.core.impl.Config.Option<any>;
          public static OPTION_DEFAULT_RESOLUTION: androidx.camera.core.impl.Config.Option<any>;
          public static OPTION_TARGET_ASPECT_RATIO: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_SUPPORTED_RESOLUTIONS: androidx.camera.core.impl.Config.Option<java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>>;
          public static OPTION_APP_TARGET_ROTATION: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_TARGET_ROTATION: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static ROTATION_NOT_SPECIFIED: number;
          public static OPTION_MAX_RESOLUTION: androidx.camera.core.impl.Config.Option<any>;
          public static INVALID_ROTATION: number;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getMaxResolution(param0: any): any;
          public getConfig(): androidx.camera.core.impl.Config;
          public getDefaultResolution(param0: any): any;
          public getMaxResolution(): any;
          public getTargetRotation(): number;
          public getDefaultResolution(): any;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public getTargetAspectRatio(): number;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getTargetResolution(param0: any): any;
          public getAppTargetRotation(param0: number): number;
          public hasTargetAspectRatio(): boolean;
          public getTargetRotation(param0: number): number;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
          public getSupportedResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public getTargetResolution(): any;
        }
        export module ImageOutputConfig {
          export class Builder<B> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.core.impl.ImageOutputConfig.Builder<any>>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.ImageOutputConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { setTargetAspectRatio(param0: number): B; setTargetRotation(param0: number): B; setTargetResolution(param0: any): B; setDefaultResolution(param0: any): B; setMaxResolution(param0: any): B; setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): B });
            public constructor();
            public setTargetRotation(param0: number): B;
            public setMaxResolution(param0: any): B;
            public setTargetResolution(param0: any): B;
            public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): B;
            public setTargetAspectRatio(param0: number): B;
            public setDefaultResolution(param0: any): B;
          }
          export class OptionalRotationValue {
            public static class: java.lang.Class<androidx.camera.core.impl.ImageOutputConfig.OptionalRotationValue>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.ImageOutputConfig$OptionalRotationValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
          export class RotationDegreesValue {
            public static class: java.lang.Class<androidx.camera.core.impl.ImageOutputConfig.RotationDegreesValue>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.ImageOutputConfig$RotationDegreesValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
          export class RotationValue {
            public static class: java.lang.Class<androidx.camera.core.impl.ImageOutputConfig.RotationValue>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.ImageOutputConfig$RotationValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class ImageProxyBundle {
          public static class: java.lang.Class<androidx.camera.core.impl.ImageProxyBundle>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.ImageProxyBundle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getImageProxy(param0: number): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.ImageProxy>; getCaptureIds(): java.util.List<java.lang.Integer> });
          public constructor();
          public getImageProxy(param0: number): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.ImageProxy>;
          public getCaptureIds(): java.util.List<java.lang.Integer>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class ImageReaderProxy {
          public static class: java.lang.Class<androidx.camera.core.impl.ImageReaderProxy>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.ImageReaderProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { acquireLatestImage(): androidx.camera.core.ImageProxy; acquireNextImage(): androidx.camera.core.ImageProxy; close(): void; getHeight(): number; getWidth(): number; getImageFormat(): number; getMaxImages(): number; getSurface(): globalAndroid.view.Surface; setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void; clearOnImageAvailableListener(): void });
          public constructor();
          public setOnImageAvailableListener(param0: androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener, param1: java.util.concurrent.Executor): void;
          public getMaxImages(): number;
          public getHeight(): number;
          public acquireLatestImage(): androidx.camera.core.ImageProxy;
          public close(): void;
          public getWidth(): number;
          public getImageFormat(): number;
          public getSurface(): globalAndroid.view.Surface;
          public clearOnImageAvailableListener(): void;
          public acquireNextImage(): androidx.camera.core.ImageProxy;
        }
        export module ImageReaderProxy {
          export class OnImageAvailableListener {
            public static class: java.lang.Class<androidx.camera.core.impl.ImageReaderProxy.OnImageAvailableListener>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.ImageReaderProxy$OnImageAvailableListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onImageAvailable(param0: androidx.camera.core.impl.ImageReaderProxy): void });
            public constructor();
            public onImageAvailable(param0: androidx.camera.core.impl.ImageReaderProxy): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class ImmediateSurface extends androidx.camera.core.impl.DeferrableSurface {
          public static class: java.lang.Class<androidx.camera.core.impl.ImmediateSurface>;
          public constructor(param0: any, param1: number);
          public constructor(param0: globalAndroid.view.Surface, param1: any, param2: number);
          public constructor();
          public constructor(param0: globalAndroid.view.Surface);
          public provideSurface(): com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class LensFacingCameraFilter extends androidx.camera.core.CameraFilter {
          public static class: java.lang.Class<androidx.camera.core.impl.LensFacingCameraFilter>;
          public getIdentifier(): androidx.camera.core.impl.Identifier;
          public getLensFacing(): number;
          public filter(param0: java.util.List<androidx.camera.core.CameraInfo>): java.util.List<androidx.camera.core.CameraInfo>;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class LensFacingConverter {
          public static class: java.lang.Class<androidx.camera.core.impl.LensFacingConverter>;
          public static values(): androidNative.Array<java.lang.Integer>;
          public static valueOf(param0: string): number;
          public static nameOf(param0: number): string;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class LiveDataObservable<T> extends androidx.camera.core.impl.Observable<any> {
          public static class: java.lang.Class<androidx.camera.core.impl.LiveDataObservable<any>>;
          public constructor();
          public getLiveData(): androidx.lifecycle.LiveData<androidx.camera.core.impl.LiveDataObservable.Result<any>>;
          public addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
          public fetchData(): com.google.common.util.concurrent.ListenableFuture<any>;
          public postValue(param0: any): void;
          public removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
          public postError(param0: java.lang.Throwable): void;
        }
        export module LiveDataObservable {
          export class LiveDataObserverAdapter<T> extends androidx.lifecycle.Observer<androidx.camera.core.impl.LiveDataObservable.Result<any>> {
            public static class: java.lang.Class<androidx.camera.core.impl.LiveDataObservable.LiveDataObserverAdapter<any>>;
            public onChanged(param0: androidx.camera.core.impl.LiveDataObservable.Result<any>): void;
          }
          export class Result<T> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.core.impl.LiveDataObservable.Result<any>>;
            public completedSuccessfully(): boolean;
            public getValue(): T;
            public toString(): string;
            public getError(): java.lang.Throwable;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class MetadataHolderService {
          public static class: java.lang.Class<androidx.camera.core.impl.MetadataHolderService>;
          public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export abstract class MultiValueSet<C> extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.impl.MultiValueSet<any>>;
          public constructor();
          public addAll(param0: java.util.List<C>): void;
          public getAllItems(): java.util.List<C>;
          public clone(): androidx.camera.core.impl.MultiValueSet<C>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class MutableConfig extends androidx.camera.core.impl.Config {
          public static class: java.lang.Class<androidx.camera.core.impl.MutableConfig>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.MutableConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            insertOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): void;
            insertOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority, param2: any): void;
            removeOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          });
          public constructor();
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public insertOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): void;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public removeOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public insertOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority, param2: any): void;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class MutableOptionsBundle extends androidx.camera.core.impl.OptionsBundle implements androidx.camera.core.impl.MutableConfig {
          public static class: java.lang.Class<androidx.camera.core.impl.MutableOptionsBundle>;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public static from(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.OptionsBundle;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public static from(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.MutableOptionsBundle;
          public insertOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): void;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public static create(): androidx.camera.core.impl.MutableOptionsBundle;
          public removeOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public insertOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority, param2: any): void;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class MutableStateObservable<T> extends androidx.camera.core.impl.StateObservable<any> {
          public static class: java.lang.Class<androidx.camera.core.impl.MutableStateObservable<any>>;
          public addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
          public static withInitialError(param0: java.lang.Throwable): androidx.camera.core.impl.MutableStateObservable<any>;
          public fetchData(): com.google.common.util.concurrent.ListenableFuture<any>;
          public static withInitialState(param0: any): androidx.camera.core.impl.MutableStateObservable<any>;
          public setError(param0: java.lang.Throwable): void;
          public removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
          public setState(param0: any): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class MutableTagBundle extends androidx.camera.core.impl.TagBundle {
          public static class: java.lang.Class<androidx.camera.core.impl.MutableTagBundle>;
          public static create(param0: globalAndroid.util.Pair<string, any>): androidx.camera.core.impl.TagBundle;
          public addTagBundle(param0: androidx.camera.core.impl.TagBundle): void;
          public static create(): androidx.camera.core.impl.MutableTagBundle;
          public putTag(param0: string, param1: any): void;
          public static from(param0: androidx.camera.core.impl.TagBundle): androidx.camera.core.impl.MutableTagBundle;
          public static from(param0: androidx.camera.core.impl.TagBundle): androidx.camera.core.impl.TagBundle;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class Observable<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.impl.Observable<any>>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.Observable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { fetchData(): com.google.common.util.concurrent.ListenableFuture<T>; addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void; removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void });
          public constructor();
          public addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
          public removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
          public fetchData(): com.google.common.util.concurrent.ListenableFuture<T>;
        }
        export module Observable {
          export class Observer<T> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.core.impl.Observable.Observer<any>>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.Observable$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onNewData(param0: T): void; onError(param0: java.lang.Throwable): void });
            public constructor();
            public onNewData(param0: T): void;
            public onError(param0: java.lang.Throwable): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class OptionsBundle extends androidx.camera.core.impl.Config {
          public static class: java.lang.Class<androidx.camera.core.impl.OptionsBundle>;
          public static ID_COMPARE: java.util.Comparator<androidx.camera.core.impl.Config.Option<any>>;
          public mOptions: java.util.TreeMap<androidx.camera.core.impl.Config.Option<any>, java.util.Map<androidx.camera.core.impl.Config.OptionPriority, any>>;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public static from(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.OptionsBundle;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public static emptyBundle(): androidx.camera.core.impl.OptionsBundle;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export abstract class OutputSurface {
          public static class: java.lang.Class<androidx.camera.core.impl.OutputSurface>;
          public constructor();
          public getImageFormat(): number;
          public getSurface(): globalAndroid.view.Surface;
          public getSize(): any;
          public static create(param0: globalAndroid.view.Surface, param1: any, param2: number): androidx.camera.core.impl.OutputSurface;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class PreviewConfig extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.impl.PreviewConfig>;
          public static IMAGE_INFO_PROCESSOR: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.ImageInfoProcessor>;
          public static OPTION_PREVIEW_CAPTURE_PROCESSOR: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.CaptureProcessor>;
          public static OPTION_RGBA8888_SURFACE_REQUIRED: androidx.camera.core.impl.Config.Option<java.lang.Boolean>;
          public isRgba8888SurfaceRequired(param0: boolean): boolean;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getMaxResolution(param0: any): any;
          public getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public constructor(param0: androidx.camera.core.impl.OptionsBundle);
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getTargetResolution(param0: any): any;
          public getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
          public hasTargetAspectRatio(): boolean;
          public getTargetRotation(param0: number): number;
          public getInputFormat(): number;
          public getTargetClass(): java.lang.Class<any>;
          public getSupportedResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public isZslDisabled(param0: boolean): boolean;
          public getSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
          public getSurfaceOccupancyPriority(): number;
          public getBackgroundExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
          public getTargetName(): string;
          public getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
          public getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
          public getBackgroundExecutor(): java.util.concurrent.Executor;
          public getTargetName(param0: string): string;
          public getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
          public getAppTargetRotation(param0: number): number;
          public getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
          public getCaptureProcessor(): androidx.camera.core.impl.CaptureProcessor;
          public getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
          public getCameraSelector(): androidx.camera.core.CameraSelector;
          public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
          public getDefaultResolution(param0: any): any;
          public getTargetRotation(): number;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public getTargetAspectRatio(): number;
          public getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
          public getSurfaceOccupancyPriority(param0: number): number;
          public getCaptureProcessor(param0: androidx.camera.core.impl.CaptureProcessor): androidx.camera.core.impl.CaptureProcessor;
          public getImageInfoProcessor(param0: androidx.camera.core.impl.ImageInfoProcessor): androidx.camera.core.impl.ImageInfoProcessor;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
          public getTargetResolution(): any;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public getConfig(): androidx.camera.core.impl.Config;
          public getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
          public getMaxResolution(): any;
          public getDefaultResolution(): any;
          public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class Quirk {
          public static class: java.lang.Class<androidx.camera.core.impl.Quirk>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.Quirk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class Quirks {
          public static class: java.lang.Class<androidx.camera.core.impl.Quirks>;
          public get(param0: java.lang.Class<any>): androidx.camera.core.impl.Quirk;
          public contains(param0: java.lang.Class<any>): boolean;
          public constructor(param0: java.util.List<androidx.camera.core.impl.Quirk>);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class ReadableConfig extends androidx.camera.core.impl.Config {
          public static class: java.lang.Class<androidx.camera.core.impl.ReadableConfig>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.ReadableConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getConfig(): androidx.camera.core.impl.Config;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          });
          public constructor();
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public getConfig(): androidx.camera.core.impl.Config;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class RequestProcessor {
          public static class: java.lang.Class<androidx.camera.core.impl.RequestProcessor>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.RequestProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { submit(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.RequestProcessor.Callback): number; submit(param0: java.util.List<androidx.camera.core.impl.RequestProcessor.Request>, param1: androidx.camera.core.impl.RequestProcessor.Callback): number; setRepeating(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.RequestProcessor.Callback): number; abortCaptures(): void; stopRepeating(): void });
          public constructor();
          public submit(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.RequestProcessor.Callback): number;
          public setRepeating(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.RequestProcessor.Callback): number;
          public stopRepeating(): void;
          public submit(param0: java.util.List<androidx.camera.core.impl.RequestProcessor.Request>, param1: androidx.camera.core.impl.RequestProcessor.Callback): number;
          public abortCaptures(): void;
        }
        export module RequestProcessor {
          export class Callback {
            public static class: java.lang.Class<androidx.camera.core.impl.RequestProcessor.Callback>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.RequestProcessor$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onCaptureStarted(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: number, param2: number): void;
              onCaptureProgressed(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureResult): void;
              onCaptureCompleted(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureResult): void;
              onCaptureFailed(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureFailure): void;
              onCaptureBufferLost(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: number, param2: number): void;
              onCaptureSequenceCompleted(param0: number, param1: number): void;
              onCaptureSequenceAborted(param0: number): void;
            });
            public constructor();
            public onCaptureBufferLost(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: number, param2: number): void;
            public onCaptureCompleted(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureResult): void;
            public onCaptureStarted(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: number, param2: number): void;
            public onCaptureSequenceAborted(param0: number): void;
            public onCaptureFailed(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureFailure): void;
            public onCaptureSequenceCompleted(param0: number, param1: number): void;
            public onCaptureProgressed(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureResult): void;
          }
          export class Request {
            public static class: java.lang.Class<androidx.camera.core.impl.RequestProcessor.Request>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.RequestProcessor$Request interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getTargetOutputConfigIds(): java.util.List<java.lang.Integer>; getParameters(): androidx.camera.core.impl.Config; getTemplateId(): number });
            public constructor();
            public getTemplateId(): number;
            public getParameters(): androidx.camera.core.impl.Config;
            public getTargetOutputConfigIds(): java.util.List<java.lang.Integer>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class SessionConfig {
          public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig>;
          public getDeviceStateCallbacks(): java.util.List<globalAndroid.hardware.camera2.CameraDevice.StateCallback>;
          public getInputConfiguration(): globalAndroid.hardware.camera2.params.InputConfiguration;
          public getRepeatingCameraCaptureCallbacks(): java.util.List<androidx.camera.core.impl.CameraCaptureCallback>;
          public getSessionStateCallbacks(): java.util.List<globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback>;
          public getErrorListeners(): java.util.List<androidx.camera.core.impl.SessionConfig.ErrorListener>;
          public getSingleCameraCaptureCallbacks(): java.util.List<androidx.camera.core.impl.CameraCaptureCallback>;
          public static defaultEmptySessionConfig(): androidx.camera.core.impl.SessionConfig;
          public getRepeatingCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
          public getSurfaces(): java.util.List<androidx.camera.core.impl.DeferrableSurface>;
          public getOutputConfigs(): java.util.List<androidx.camera.core.impl.SessionConfig.OutputConfig>;
          public getImplementationOptions(): androidx.camera.core.impl.Config;
          public getTemplateType(): number;
        }
        export module SessionConfig {
          export class BaseBuilder {
            public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.BaseBuilder>;
          }
          export class Builder extends androidx.camera.core.impl.SessionConfig.BaseBuilder {
            public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.Builder>;
            public constructor();
            public addAllDeviceStateCallbacks(param0: java.util.Collection<globalAndroid.hardware.camera2.CameraDevice.StateCallback>): androidx.camera.core.impl.SessionConfig.Builder;
            public clearSurfaces(): androidx.camera.core.impl.SessionConfig.Builder;
            public addImplementationOptions(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.SessionConfig.Builder;
            public addDeviceStateCallback(param0: globalAndroid.hardware.camera2.CameraDevice.StateCallback): androidx.camera.core.impl.SessionConfig.Builder;
            public addRepeatingCameraCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): androidx.camera.core.impl.SessionConfig.Builder;
            public build(): androidx.camera.core.impl.SessionConfig;
            public setTemplateType(param0: number): androidx.camera.core.impl.SessionConfig.Builder;
            public setImplementationOptions(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.SessionConfig.Builder;
            public static createFrom(param0: androidx.camera.core.impl.UseCaseConfig<any>): androidx.camera.core.impl.SessionConfig.Builder;
            public addSessionStateCallback(param0: globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback): androidx.camera.core.impl.SessionConfig.Builder;
            public addAllRepeatingCameraCaptureCallbacks(param0: java.util.Collection<androidx.camera.core.impl.CameraCaptureCallback>): androidx.camera.core.impl.SessionConfig.Builder;
            public addSurface(param0: androidx.camera.core.impl.DeferrableSurface): androidx.camera.core.impl.SessionConfig.Builder;
            public setInputConfiguration(param0: globalAndroid.hardware.camera2.params.InputConfiguration): androidx.camera.core.impl.SessionConfig.Builder;
            public getSingleCameraCaptureCallbacks(): java.util.List<androidx.camera.core.impl.CameraCaptureCallback>;
            public removeCameraCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): boolean;
            public removeSurface(param0: androidx.camera.core.impl.DeferrableSurface): androidx.camera.core.impl.SessionConfig.Builder;
            public addOutputConfig(param0: androidx.camera.core.impl.SessionConfig.OutputConfig): androidx.camera.core.impl.SessionConfig.Builder;
            public addNonRepeatingSurface(param0: androidx.camera.core.impl.DeferrableSurface): androidx.camera.core.impl.SessionConfig.Builder;
            public addAllSessionStateCallbacks(param0: java.util.List<globalAndroid.hardware.camera2.CameraCaptureSession.StateCallback>): androidx.camera.core.impl.SessionConfig.Builder;
            public addAllCameraCaptureCallbacks(param0: java.util.Collection<androidx.camera.core.impl.CameraCaptureCallback>): androidx.camera.core.impl.SessionConfig.Builder;
            public addCameraCaptureCallback(param0: androidx.camera.core.impl.CameraCaptureCallback): androidx.camera.core.impl.SessionConfig.Builder;
            public addTag(param0: string, param1: any): androidx.camera.core.impl.SessionConfig.Builder;
            public addErrorListener(param0: androidx.camera.core.impl.SessionConfig.ErrorListener): androidx.camera.core.impl.SessionConfig.Builder;
          }
          export class ErrorListener {
            public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.ErrorListener>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.SessionConfig$ErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onError(param0: androidx.camera.core.impl.SessionConfig, param1: androidx.camera.core.impl.SessionConfig.SessionError): void });
            public constructor();
            public onError(param0: androidx.camera.core.impl.SessionConfig, param1: androidx.camera.core.impl.SessionConfig.SessionError): void;
          }
          export class OptionUnpacker {
            public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.OptionUnpacker>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.SessionConfig$OptionUnpacker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { unpack(param0: androidx.camera.core.impl.UseCaseConfig<any>, param1: androidx.camera.core.impl.SessionConfig.Builder): void });
            public constructor();
            public unpack(param0: androidx.camera.core.impl.UseCaseConfig<any>, param1: androidx.camera.core.impl.SessionConfig.Builder): void;
          }
          export abstract class OutputConfig {
            public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.OutputConfig>;
            public static SURFACE_GROUP_ID_NONE: number;
            public static builder(param0: androidx.camera.core.impl.DeferrableSurface): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
            public constructor();
            public getSharedSurfaces(): java.util.List<androidx.camera.core.impl.DeferrableSurface>;
            public getPhysicalCameraId(): string;
            public getSurfaceGroupId(): number;
            public getSurface(): androidx.camera.core.impl.DeferrableSurface;
          }
          export module OutputConfig {
            export abstract class Builder {
              public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.OutputConfig.Builder>;
              public constructor();
              public setSurface(param0: androidx.camera.core.impl.DeferrableSurface): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
              public build(): androidx.camera.core.impl.SessionConfig.OutputConfig;
              public setPhysicalCameraId(param0: string): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
              public setSharedSurfaces(param0: java.util.List<androidx.camera.core.impl.DeferrableSurface>): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
              public setSurfaceGroupId(param0: number): androidx.camera.core.impl.SessionConfig.OutputConfig.Builder;
            }
          }
          export class SessionError {
            public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.SessionError>;
            public static SESSION_ERROR_SURFACE_NEEDS_RESET: androidx.camera.core.impl.SessionConfig.SessionError;
            public static SESSION_ERROR_UNKNOWN: androidx.camera.core.impl.SessionConfig.SessionError;
            public static values(): androidNative.Array<androidx.camera.core.impl.SessionConfig.SessionError>;
            public static valueOf(param0: string): androidx.camera.core.impl.SessionConfig.SessionError;
          }
          export class ValidatingBuilder extends androidx.camera.core.impl.SessionConfig.BaseBuilder {
            public static class: java.lang.Class<androidx.camera.core.impl.SessionConfig.ValidatingBuilder>;
            public constructor();
            public addImplementationOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): void;
            public build(): androidx.camera.core.impl.SessionConfig;
            public add(param0: androidx.camera.core.impl.SessionConfig): void;
            public clearSurfaces(): void;
            public isValid(): boolean;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class SessionProcessor {
          public static class: java.lang.Class<androidx.camera.core.impl.SessionProcessor>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.SessionProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { initSession(param0: androidx.camera.core.CameraInfo, param1: androidx.camera.core.impl.OutputSurface, param2: androidx.camera.core.impl.OutputSurface, param3: androidx.camera.core.impl.OutputSurface): androidx.camera.core.impl.SessionConfig; deInitSession(): void; setParameters(param0: androidx.camera.core.impl.Config): void; onCaptureSessionStart(param0: androidx.camera.core.impl.RequestProcessor): void; onCaptureSessionEnd(): void; startRepeating(param0: androidx.camera.core.impl.SessionProcessor.CaptureCallback): number; stopRepeating(): void; startCapture(param0: androidx.camera.core.impl.SessionProcessor.CaptureCallback): number; abortCapture(param0: number): void });
          public constructor();
          public onCaptureSessionStart(param0: androidx.camera.core.impl.RequestProcessor): void;
          public deInitSession(): void;
          public setParameters(param0: androidx.camera.core.impl.Config): void;
          public stopRepeating(): void;
          public startCapture(param0: androidx.camera.core.impl.SessionProcessor.CaptureCallback): number;
          public startRepeating(param0: androidx.camera.core.impl.SessionProcessor.CaptureCallback): number;
          public initSession(param0: androidx.camera.core.CameraInfo, param1: androidx.camera.core.impl.OutputSurface, param2: androidx.camera.core.impl.OutputSurface, param3: androidx.camera.core.impl.OutputSurface): androidx.camera.core.impl.SessionConfig;
          public onCaptureSessionEnd(): void;
          public abortCapture(param0: number): void;
        }
        export module SessionProcessor {
          export class CaptureCallback {
            public static class: java.lang.Class<androidx.camera.core.impl.SessionProcessor.CaptureCallback>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.SessionProcessor$CaptureCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onCaptureStarted(param0: number, param1: number): void; onCaptureProcessStarted(param0: number): void; onCaptureFailed(param0: number): void; onCaptureSequenceCompleted(param0: number): void; onCaptureSequenceAborted(param0: number): void; onCaptureCompleted(param0: number, param1: number, param2: java.util.Map<globalAndroid.hardware.camera2.CaptureResult.Key, any>): void });
            public constructor();
            public onCaptureSequenceCompleted(param0: number): void;
            public onCaptureProcessStarted(param0: number): void;
            public onCaptureFailed(param0: number): void;
            public onCaptureCompleted(param0: number, param1: number, param2: java.util.Map<globalAndroid.hardware.camera2.CaptureResult.Key, any>): void;
            public onCaptureStarted(param0: number, param1: number): void;
            public onCaptureSequenceAborted(param0: number): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class SessionProcessorSurface extends androidx.camera.core.impl.DeferrableSurface {
          public static class: java.lang.Class<androidx.camera.core.impl.SessionProcessorSurface>;
          public constructor(param0: any, param1: number);
          public constructor();
          public getOutputConfigId(): number;
          public provideSurface(): com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>;
          public constructor(param0: globalAndroid.view.Surface, param1: number);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class SingleImageProxyBundle extends androidx.camera.core.impl.ImageProxyBundle {
          public static class: java.lang.Class<androidx.camera.core.impl.SingleImageProxyBundle>;
          public getImageProxy(param0: number): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.ImageProxy>;
          public close(): void;
          public getCaptureIds(): java.util.List<java.lang.Integer>;
          public constructor(param0: androidx.camera.core.ImageProxy, param1: string);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export abstract class StateObservable<T> extends androidx.camera.core.impl.Observable<any> {
          public static class: java.lang.Class<androidx.camera.core.impl.StateObservable<any>>;
          public addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
          public fetchData(): com.google.common.util.concurrent.ListenableFuture<any>;
          public removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
        }
        export module StateObservable {
          export abstract class ErrorWrapper {
            public static class: java.lang.Class<androidx.camera.core.impl.StateObservable.ErrorWrapper>;
            public getError(): java.lang.Throwable;
          }
          export class ObserverWrapper<T> extends java.lang.Runnable {
            public static class: java.lang.Class<androidx.camera.core.impl.StateObservable.ObserverWrapper<any>>;
            public run(): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class SurfaceCombination {
          public static class: java.lang.Class<androidx.camera.core.impl.SurfaceCombination>;
          public getSurfaceConfigList(): java.util.List<androidx.camera.core.impl.SurfaceConfig>;
          public removeSurfaceConfig(param0: androidx.camera.core.impl.SurfaceConfig): boolean;
          public isSupported(param0: java.util.List<androidx.camera.core.impl.SurfaceConfig>): boolean;
          public constructor();
          public addSurfaceConfig(param0: androidx.camera.core.impl.SurfaceConfig): boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export abstract class SurfaceConfig {
          public static class: java.lang.Class<androidx.camera.core.impl.SurfaceConfig>;
          public getConfigType(): androidx.camera.core.impl.SurfaceConfig.ConfigType;
          public getConfigSize(): androidx.camera.core.impl.SurfaceConfig.ConfigSize;
          public static getConfigType(param0: number): androidx.camera.core.impl.SurfaceConfig.ConfigType;
          public static create(param0: androidx.camera.core.impl.SurfaceConfig.ConfigType, param1: androidx.camera.core.impl.SurfaceConfig.ConfigSize): androidx.camera.core.impl.SurfaceConfig;
          public isSupported(param0: androidx.camera.core.impl.SurfaceConfig): boolean;
          public static transformSurfaceConfig(param0: number, param1: any, param2: androidx.camera.core.impl.SurfaceSizeDefinition): androidx.camera.core.impl.SurfaceConfig;
        }
        export module SurfaceConfig {
          export class ConfigSize {
            public static class: java.lang.Class<androidx.camera.core.impl.SurfaceConfig.ConfigSize>;
            public static VGA: androidx.camera.core.impl.SurfaceConfig.ConfigSize;
            public static PREVIEW: androidx.camera.core.impl.SurfaceConfig.ConfigSize;
            public static RECORD: androidx.camera.core.impl.SurfaceConfig.ConfigSize;
            public static MAXIMUM: androidx.camera.core.impl.SurfaceConfig.ConfigSize;
            public static NOT_SUPPORT: androidx.camera.core.impl.SurfaceConfig.ConfigSize;
            public static values(): androidNative.Array<androidx.camera.core.impl.SurfaceConfig.ConfigSize>;
            public static valueOf(param0: string): androidx.camera.core.impl.SurfaceConfig.ConfigSize;
          }
          export class ConfigType {
            public static class: java.lang.Class<androidx.camera.core.impl.SurfaceConfig.ConfigType>;
            public static PRIV: androidx.camera.core.impl.SurfaceConfig.ConfigType;
            public static YUV: androidx.camera.core.impl.SurfaceConfig.ConfigType;
            public static JPEG: androidx.camera.core.impl.SurfaceConfig.ConfigType;
            public static RAW: androidx.camera.core.impl.SurfaceConfig.ConfigType;
            public static valueOf(param0: string): androidx.camera.core.impl.SurfaceConfig.ConfigType;
            public static values(): androidNative.Array<androidx.camera.core.impl.SurfaceConfig.ConfigType>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export abstract class SurfaceSizeDefinition {
          public static class: java.lang.Class<androidx.camera.core.impl.SurfaceSizeDefinition>;
          public getRecordSize(): any;
          public static create(param0: any, param1: any, param2: any): androidx.camera.core.impl.SurfaceSizeDefinition;
          public getPreviewSize(): any;
          public getAnalysisSize(): any;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class TagBundle {
          public static class: java.lang.Class<androidx.camera.core.impl.TagBundle>;
          public mTagMap: java.util.Map<string, any>;
          public static create(param0: globalAndroid.util.Pair<string, any>): androidx.camera.core.impl.TagBundle;
          public toString(): string;
          public getTag(param0: string): any;
          public listKeys(): java.util.Set<string>;
          public static emptyBundle(): androidx.camera.core.impl.TagBundle;
          public static from(param0: androidx.camera.core.impl.TagBundle): androidx.camera.core.impl.TagBundle;
          public constructor(param0: java.util.Map<string, any>);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class Timebase {
          public static class: java.lang.Class<androidx.camera.core.impl.Timebase>;
          public static UPTIME: androidx.camera.core.impl.Timebase;
          public static REALTIME: androidx.camera.core.impl.Timebase;
          public static valueOf(param0: string): androidx.camera.core.impl.Timebase;
          public static values(): androidNative.Array<androidx.camera.core.impl.Timebase>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class UseCaseAttachState {
          public static class: java.lang.Class<androidx.camera.core.impl.UseCaseAttachState>;
          public constructor(param0: string);
          public setUseCaseDetached(param0: string): void;
          public isUseCaseAttached(param0: string): boolean;
          public setUseCaseActive(param0: string, param1: androidx.camera.core.impl.SessionConfig, param2: androidx.camera.core.impl.UseCaseConfig<any>): void;
          public setUseCaseInactive(param0: string): void;
          public getActiveAndAttachedBuilder(): androidx.camera.core.impl.SessionConfig.ValidatingBuilder;
          public getAttachedBuilder(): androidx.camera.core.impl.SessionConfig.ValidatingBuilder;
          public getAttachedUseCaseConfigs(): java.util.Collection<androidx.camera.core.impl.UseCaseConfig<any>>;
          public getAttachedSessionConfigs(): java.util.Collection<androidx.camera.core.impl.SessionConfig>;
          public removeUseCase(param0: string): void;
          public getActiveAndAttachedSessionConfigs(): java.util.Collection<androidx.camera.core.impl.SessionConfig>;
          public updateUseCase(param0: string, param1: androidx.camera.core.impl.SessionConfig, param2: androidx.camera.core.impl.UseCaseConfig<any>): void;
          public setUseCaseAttached(param0: string, param1: androidx.camera.core.impl.SessionConfig, param2: androidx.camera.core.impl.UseCaseConfig<any>): void;
        }
        export module UseCaseAttachState {
          export class AttachStateFilter {
            public static class: java.lang.Class<androidx.camera.core.impl.UseCaseAttachState.AttachStateFilter>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.UseCaseAttachState$AttachStateFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { filter(param0: androidx.camera.core.impl.UseCaseAttachState.UseCaseAttachInfo): boolean });
            public constructor();
            public filter(param0: androidx.camera.core.impl.UseCaseAttachState.UseCaseAttachInfo): boolean;
          }
          export class UseCaseAttachInfo {
            public static class: java.lang.Class<androidx.camera.core.impl.UseCaseAttachState.UseCaseAttachInfo>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class UseCaseConfig<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.impl.UseCaseConfig<any>>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.UseCaseConfig<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
            getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
            getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
            getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
            getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
            getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
            getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
            getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
            getSurfaceOccupancyPriority(param0: number): number;
            getSurfaceOccupancyPriority(): number;
            getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
            getCameraSelector(): androidx.camera.core.CameraSelector;
            getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
            getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
            isZslDisabled(param0: boolean): boolean;
            '<clinit>'(): void;
            getTargetClass(param0: java.lang.Class<T>): java.lang.Class<T>;
            getTargetClass(): java.lang.Class<T>;
            getTargetName(param0: string): string;
            getTargetName(): string;
            '<clinit>'(): void;
            getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
            getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
            '<clinit>'(): void;
            getInputFormat(): number;
            '<clinit>'(): void;
            getConfig(): androidx.camera.core.impl.Config;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            getConfig(): androidx.camera.core.impl.Config;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            getConfig(): androidx.camera.core.impl.Config;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          });
          public constructor();
          public static OPTION_DEFAULT_CAPTURE_CONFIG: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.CaptureConfig>;
          public static OPTION_USE_CASE_EVENT_CALLBACK: androidx.camera.core.impl.Config.Option<androidx.camera.core.UseCase.EventCallback>;
          public static OPTION_SESSION_CONFIG_UNPACKER: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.SessionConfig.OptionUnpacker>;
          public static OPTION_CAPTURE_CONFIG_UNPACKER: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.CaptureConfig.OptionUnpacker>;
          public static OPTION_TARGET_FRAME_RATE: androidx.camera.core.impl.Config.Option<globalAndroid.util.Range<java.lang.Integer>>;
          public static OPTION_TARGET_NAME: androidx.camera.core.impl.Config.Option<string>;
          public static OPTION_TARGET_CLASS: androidx.camera.core.impl.Config.Option<java.lang.Class<any>>;
          public static OPTION_DEFAULT_SESSION_CONFIG: androidx.camera.core.impl.Config.Option<androidx.camera.core.impl.SessionConfig>;
          public static OPTION_CAMERA_SELECTOR: androidx.camera.core.impl.Config.Option<androidx.camera.core.CameraSelector>;
          public static OPTION_INPUT_FORMAT: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_SURFACE_OCCUPANCY_PRIORITY: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_ZSL_DISABLED: androidx.camera.core.impl.Config.Option<java.lang.Boolean>;
          public getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
          public getCameraSelector(): androidx.camera.core.CameraSelector;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
          public getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
          public getSurfaceOccupancyPriority(param0: number): number;
          public getInputFormat(): number;
          public getTargetClass(): java.lang.Class<T>;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
          public isZslDisabled(param0: boolean): boolean;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
          public getSurfaceOccupancyPriority(): number;
          public getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
          public getConfig(): androidx.camera.core.impl.Config;
          public getTargetName(): string;
          public getTargetClass(param0: java.lang.Class<T>): java.lang.Class<T>;
          public getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
          public getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
          public getTargetName(param0: string): string;
          public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
          public getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
          public getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
        }
        export module UseCaseConfig {
          export class Builder<T, C, B> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.core.impl.UseCaseConfig.Builder<any, any, any>>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.UseCaseConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): B; setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): B; setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): B; setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): B; setSurfaceOccupancyPriority(param0: number): B; setCameraSelector(param0: androidx.camera.core.CameraSelector): B; setZslDisabled(param0: boolean): B; getUseCaseConfig(): C; setTargetClass(param0: java.lang.Class<T>): B; setTargetName(param0: string): B; getMutableConfig(): androidx.camera.core.impl.MutableConfig; build(): T; setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): B });
            public constructor();
            public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): B;
            public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): B;
            public setTargetClass(param0: java.lang.Class<T>): B;
            public setTargetName(param0: string): B;
            public setCameraSelector(param0: androidx.camera.core.CameraSelector): B;
            public setSurfaceOccupancyPriority(param0: number): B;
            public setZslDisabled(param0: boolean): B;
            public getUseCaseConfig(): C;
            public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): B;
            public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): B;
            public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): B;
            public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
            public build(): T;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class UseCaseConfigFactory {
          public static class: java.lang.Class<androidx.camera.core.impl.UseCaseConfigFactory>;
          /**
           * Constructs a new instance of the androidx.camera.core.impl.UseCaseConfigFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getConfig(param0: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType, param1: number): androidx.camera.core.impl.Config; '<clinit>'(): void });
          public constructor();
          public static EMPTY_INSTANCE: androidx.camera.core.impl.UseCaseConfigFactory;
          public getConfig(param0: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType, param1: number): androidx.camera.core.impl.Config;
        }
        export module UseCaseConfigFactory {
          export class CaptureType {
            public static class: java.lang.Class<androidx.camera.core.impl.UseCaseConfigFactory.CaptureType>;
            public static IMAGE_CAPTURE: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType;
            public static PREVIEW: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType;
            public static IMAGE_ANALYSIS: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType;
            public static VIDEO_CAPTURE: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType;
            public static valueOf(param0: string): androidx.camera.core.impl.UseCaseConfigFactory.CaptureType;
            public static values(): androidNative.Array<androidx.camera.core.impl.UseCaseConfigFactory.CaptureType>;
          }
          export class Provider {
            public static class: java.lang.Class<androidx.camera.core.impl.UseCaseConfigFactory.Provider>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.UseCaseConfigFactory$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { newInstance(param0: globalAndroid.content.Context): androidx.camera.core.impl.UseCaseConfigFactory });
            public constructor();
            public newInstance(param0: globalAndroid.content.Context): androidx.camera.core.impl.UseCaseConfigFactory;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export class VideoCaptureConfig extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.impl.VideoCaptureConfig>;
          public static OPTION_VIDEO_FRAME_RATE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_BIT_RATE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_INTRA_FRAME_INTERVAL: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_AUDIO_BIT_RATE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_AUDIO_SAMPLE_RATE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_AUDIO_CHANNEL_COUNT: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public static OPTION_AUDIO_MIN_BUFFER_SIZE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
          public getAudioMinBufferSize(param0: number): number;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getMaxResolution(param0: any): any;
          public getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
          public getIFrameInterval(param0: number): number;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public constructor(param0: androidx.camera.core.impl.OptionsBundle);
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getAudioBitRate(): number;
          public getTargetResolution(param0: any): any;
          public getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
          public hasTargetAspectRatio(): boolean;
          public getTargetRotation(param0: number): number;
          public getInputFormat(): number;
          public getAudioMinBufferSize(): number;
          public getTargetClass(): java.lang.Class<any>;
          public getAudioBitRate(param0: number): number;
          public getSupportedResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public getIFrameInterval(): number;
          public isZslDisabled(param0: boolean): boolean;
          public getSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
          public getSurfaceOccupancyPriority(): number;
          public getAudioSampleRate(param0: number): number;
          public getBackgroundExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
          public getTargetName(): string;
          public getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
          public getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
          public getBackgroundExecutor(): java.util.concurrent.Executor;
          public getTargetName(param0: string): string;
          public getAudioChannelCount(param0: number): number;
          public getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
          public getAppTargetRotation(param0: number): number;
          public getAudioChannelCount(): number;
          public getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
          public getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
          public getCameraSelector(): androidx.camera.core.CameraSelector;
          public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
          public getDefaultResolution(param0: any): any;
          public getTargetRotation(): number;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public getVideoFrameRate(param0: number): number;
          public getBitRate(param0: number): number;
          public getTargetAspectRatio(): number;
          public getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
          public getSurfaceOccupancyPriority(param0: number): number;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
          public getTargetResolution(): any;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public getConfig(): androidx.camera.core.impl.Config;
          public getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
          public getVideoFrameRate(): number;
          public getMaxResolution(): any;
          public getDefaultResolution(): any;
          public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
          public getAudioSampleRate(): number;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public getBitRate(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module annotation {
          export class ExecutedBy {
            public static class: java.lang.Class<androidx.camera.core.impl.annotation.ExecutedBy>;
            /**
             * Constructs a new instance of the androidx.camera.core.impl.annotation.ExecutedBy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { value(): string });
            public constructor();
            public value(): string;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class Absent<T> extends androidx.camera.core.impl.utils.Optional<any> {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.Absent<any>>;
            public isPresent(): boolean;
            public orNull(): any;
            public or(param0: androidx.core.util.Supplier<any>): any;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public or(param0: any): any;
            public get(): any;
            public toString(): string;
            public or(param0: androidx.camera.core.impl.utils.Optional<any>): androidx.camera.core.impl.utils.Optional<any>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class AspectRatioUtil {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.AspectRatioUtil>;
            public static ASPECT_RATIO_4_3: globalAndroid.util.Rational;
            public static ASPECT_RATIO_3_4: globalAndroid.util.Rational;
            public static ASPECT_RATIO_16_9: globalAndroid.util.Rational;
            public static ASPECT_RATIO_9_16: globalAndroid.util.Rational;
            public static hasMatchingAspectRatio(param0: any, param1: globalAndroid.util.Rational): boolean;
          }
          export module AspectRatioUtil {
            export class CompareAspectRatiosByDistanceToTargetRatio extends java.util.Comparator<globalAndroid.util.Rational> {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.AspectRatioUtil.CompareAspectRatiosByDistanceToTargetRatio>;
              public constructor(param0: globalAndroid.util.Rational);
              public compare(param0: globalAndroid.util.Rational, param1: globalAndroid.util.Rational): number;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class ByteOrderedDataInputStream {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.ByteOrderedDataInputStream>;
            public read(): number;
            public skipBytes(param0: number): number;
            public readInt(): number;
            public readUnsignedByte(): number;
            public readUTF(): string;
            public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
            public readChar(): string;
            public readFully(param0: androidNative.Array<number>): void;
            public readDouble(): number;
            public mark(param0: number): void;
            public peek(): number;
            public getLength(): number;
            public readUnsignedInt(): number;
            public available(): number;
            public readShort(): number;
            public setByteOrder(param0: java.nio.ByteOrder): void;
            public readFully(param0: androidNative.Array<number>, param1: number, param2: number): void;
            public readByte(): number;
            public readBoolean(): boolean;
            public readUnsignedShort(): number;
            public readFloat(): number;
            public seek(param0: number): void;
            public readLong(): number;
            public readLine(): string;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class ByteOrderedDataOutputStream {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.ByteOrderedDataOutputStream>;
            public setByteOrder(param0: java.nio.ByteOrder): void;
            public writeUnsignedShort(param0: number): void;
            public writeByte(param0: number): void;
            public writeInt(param0: number): void;
            public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
            public writeUnsignedInt(param0: number): void;
            public writeShort(param0: number): void;
            public write(param0: androidNative.Array<number>): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class CameraOrientationUtil {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.CameraOrientationUtil>;
            public static surfaceRotationToDegrees(param0: number): number;
            public static getRelativeImageRotation(param0: number, param1: number, param2: boolean): number;
            public static degreesToSurfaceRotation(param0: number): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class CloseGuardHelper {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.CloseGuardHelper>;
            public static create(): androidx.camera.core.impl.utils.CloseGuardHelper;
            public close(): void;
            public open(param0: string): void;
            public warnIfOpen(): void;
          }
          export module CloseGuardHelper {
            export class CloseGuardApi30Impl extends androidx.camera.core.impl.utils.CloseGuardHelper.CloseGuardImpl {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.CloseGuardHelper.CloseGuardApi30Impl>;
              public close(): void;
              public open(param0: string): void;
              public warnIfOpen(): void;
            }
            export class CloseGuardImpl {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.CloseGuardHelper.CloseGuardImpl>;
              /**
               * Constructs a new instance of the androidx.camera.core.impl.utils.CloseGuardHelper$CloseGuardImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { open(param0: string): void; close(): void; warnIfOpen(): void });
              public constructor();
              public close(): void;
              public open(param0: string): void;
              public warnIfOpen(): void;
            }
            export class CloseGuardNoOpImpl extends androidx.camera.core.impl.utils.CloseGuardHelper.CloseGuardImpl {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.CloseGuardHelper.CloseGuardNoOpImpl>;
              public close(): void;
              public open(param0: string): void;
              public warnIfOpen(): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class CompareSizesByArea extends java.util.Comparator<any> {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.CompareSizesByArea>;
            public constructor();
            public constructor(param0: boolean);
            public compare(param0: any, param1: any): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class ContextUtil {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.ContextUtil>;
            public static getApplicationContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
            public static getApplicationFromContext(param0: globalAndroid.content.Context): globalAndroid.app.Application;
            public static getBaseContext(param0: globalAndroid.content.ContextWrapper): globalAndroid.content.Context;
          }
          export module ContextUtil {
            export class Api30Impl {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.ContextUtil.Api30Impl>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class Exif {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.Exif>;
            public static INVALID_TIMESTAMP: number;
            public static createFromInputStream(param0: java.io.InputStream): androidx.camera.core.impl.utils.Exif;
            public flipVertically(): void;
            public flipHorizontally(): void;
            public getLocation(): globalAndroid.location.Location;
            public isFlippedHorizontally(): boolean;
            public attachLocation(param0: globalAndroid.location.Location): void;
            public rotate(param0: number): void;
            public attachTimestamp(): void;
            public static createFromFileString(param0: string): androidx.camera.core.impl.utils.Exif;
            public isFlippedVertically(): boolean;
            public getTimestamp(): number;
            public setOrientation(param0: number): void;
            public getRotation(): number;
            public getLastModifiedTimestamp(): number;
            public getOrientation(): number;
            public copyToCroppedImage(param0: androidx.camera.core.impl.utils.Exif): void;
            public static getAllExifTags(): java.util.List<string>;
            public getHeight(): number;
            public toString(): string;
            public setDescription(param0: string): void;
            public static createFromImageProxy(param0: androidx.camera.core.ImageProxy): androidx.camera.core.impl.utils.Exif;
            public removeTimestamp(): void;
            public getWidth(): number;
            public getExifInterface(): androidx.exifinterface.media.ExifInterface;
            public static createFromFile(param0: java.io.File): androidx.camera.core.impl.utils.Exif;
            public save(): void;
            public getDescription(): string;
            public removeLocation(): void;
          }
          export module Exif {
            export class Speed {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.Exif.Speed>;
            }
            export module Speed {
              export class Converter {
                public static class: java.lang.Class<androidx.camera.core.impl.utils.Exif.Speed.Converter>;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class ExifAttribute {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifAttribute>;
            public static BYTES_OFFSET_UNKNOWN: number;
            public format: number;
            public numberOfComponents: number;
            public bytesOffset: number;
            public bytes: androidNative.Array<number>;
            public static createString(param0: string): androidx.camera.core.impl.utils.ExifAttribute;
            public static createSRational(param0: androidNative.Array<androidx.camera.core.impl.utils.LongRational>, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
            public static createULong(param0: androidNative.Array<number>, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
            public static createUShort(param0: androidNative.Array<number>, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
            public static createULong(param0: number, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
            public static createURational(param0: androidx.camera.core.impl.utils.LongRational, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
            public static createSLong(param0: number, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
            public static createByte(param0: string): androidx.camera.core.impl.utils.ExifAttribute;
            public static createSRational(param0: androidx.camera.core.impl.utils.LongRational, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
            public getStringValue(param0: java.nio.ByteOrder): string;
            public toString(): string;
            public static createSLong(param0: androidNative.Array<number>, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
            public static createDouble(param0: androidNative.Array<number>, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
            public static createUShort(param0: number, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
            public getIntValue(param0: java.nio.ByteOrder): number;
            public static createURational(param0: androidNative.Array<androidx.camera.core.impl.utils.LongRational>, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
            public static createDouble(param0: number, param1: java.nio.ByteOrder): androidx.camera.core.impl.utils.ExifAttribute;
            public getDoubleValue(param0: java.nio.ByteOrder): number;
            public size(): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class ExifData {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifData>;
            public static builderForDevice(): androidx.camera.core.impl.utils.ExifData.Builder;
            public static create(param0: androidx.camera.core.ImageProxy, param1: number): androidx.camera.core.impl.utils.ExifData;
            public getByteOrder(): java.nio.ByteOrder;
            public getAttribute(param0: string): string;
          }
          export module ExifData {
            export class Builder {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifData.Builder>;
              public setImageWidth(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
              public setExposureTimeNanos(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
              public setFlashState(param0: androidx.camera.core.impl.CameraCaptureMetaData.FlashState): androidx.camera.core.impl.utils.ExifData.Builder;
              public setLensFNumber(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
              public setFocalLength(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
              public removeAttribute(param0: string): androidx.camera.core.impl.utils.ExifData.Builder;
              public setIso(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
              public setOrientationDegrees(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
              public setWhiteBalanceMode(param0: androidx.camera.core.impl.utils.ExifData.WhiteBalanceMode): androidx.camera.core.impl.utils.ExifData.Builder;
              public setAttribute(param0: string, param1: string): androidx.camera.core.impl.utils.ExifData.Builder;
              public setImageHeight(param0: number): androidx.camera.core.impl.utils.ExifData.Builder;
              public build(): androidx.camera.core.impl.utils.ExifData;
            }
            export class WhiteBalanceMode {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifData.WhiteBalanceMode>;
              public static AUTO: androidx.camera.core.impl.utils.ExifData.WhiteBalanceMode;
              public static MANUAL: androidx.camera.core.impl.utils.ExifData.WhiteBalanceMode;
              public static values(): androidNative.Array<androidx.camera.core.impl.utils.ExifData.WhiteBalanceMode>;
              public static valueOf(param0: string): androidx.camera.core.impl.utils.ExifData.WhiteBalanceMode;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class ExifOutputStream {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifOutputStream>;
            public constructor(param0: java.io.OutputStream, param1: androidx.camera.core.impl.utils.ExifData);
            public write(param0: number): void;
            public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
            public write(param0: androidNative.Array<number>): void;
          }
          export module ExifOutputStream {
            export class JpegHeader {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifOutputStream.JpegHeader>;
              public static SOI: number;
              public static APP1: number;
              public static EOI: number;
              public static SOF0: number;
              public static SOF15: number;
              public static DHT: number;
              public static JPG: number;
              public static DAC: number;
              public static isSofMarker(param0: number): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class ExifTag {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.ExifTag>;
            public number: number;
            public name: string;
            public primaryFormat: number;
            public secondaryFormat: number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class LongRational {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.LongRational>;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class MainThreadAsyncHandler {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.MainThreadAsyncHandler>;
            public static getInstance(): globalAndroid.os.Handler;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class MatrixExt {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.MatrixExt>;
            public static preRotate(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): void;
            public static toString(param0: androidNative.Array<number>, param1: number): string;
            public static setRotate(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): void;
            public static postRotate(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export abstract class Optional<T> extends java.io.Serializable {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.Optional<any>>;
            public isPresent(): boolean;
            public orNull(): any;
            public static fromNullable(param0: any): androidx.camera.core.impl.utils.Optional<any>;
            public or(param0: androidx.core.util.Supplier<any>): any;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public static of(param0: any): androidx.camera.core.impl.utils.Optional<any>;
            public or(param0: any): any;
            public static absent(): androidx.camera.core.impl.utils.Optional<any>;
            public get(): any;
            public toString(): string;
            public or(param0: androidx.camera.core.impl.utils.Optional<any>): androidx.camera.core.impl.utils.Optional<any>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class Present<T> extends androidx.camera.core.impl.utils.Optional<any> {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.Present<any>>;
            public isPresent(): boolean;
            public orNull(): any;
            public or(param0: androidx.core.util.Supplier<any>): any;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public or(param0: any): any;
            public get(): any;
            public toString(): string;
            public or(param0: androidx.camera.core.impl.utils.Optional<any>): androidx.camera.core.impl.utils.Optional<any>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class Threads {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.Threads>;
            public static isMainThread(): boolean;
            public static checkBackgroundThread(): void;
            public static isBackgroundThread(): boolean;
            public static checkMainThread(): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export class TransformUtils {
            public static class: java.lang.Class<androidx.camera.core.impl.utils.TransformUtils>;
            public static NORMALIZED_RECT: globalAndroid.graphics.RectF;
            public static rectToString(param0: globalAndroid.graphics.Rect): string;
            public static hasCropping(param0: globalAndroid.graphics.Rect, param1: any): boolean;
            public static sizeToRect(param0: any, param1: number, param2: number): globalAndroid.graphics.Rect;
            public static max(param0: number, param1: number, param2: number, param3: number): number;
            public static sizeToRectF(param0: any): globalAndroid.graphics.RectF;
            public static getNormalizedToBuffer(param0: globalAndroid.graphics.Rect): globalAndroid.graphics.Matrix;
            public static reverseSize(param0: any): any;
            public static rotateSize(param0: any, param1: number): any;
            public static isAspectRatioMatchingWithRoundingError(param0: any, param1: boolean, param2: any, param3: boolean): boolean;
            public static getNormalizedToBuffer(param0: globalAndroid.graphics.RectF): globalAndroid.graphics.Matrix;
            public static min(param0: number, param1: number, param2: number, param3: number): number;
            public static is90or270(param0: number): boolean;
            public static rectToSize(param0: globalAndroid.graphics.Rect): any;
            public static sizeToRectF(param0: any, param1: number, param2: number): globalAndroid.graphics.RectF;
            public static sizeToVertices(param0: any): androidNative.Array<number>;
            public static getRectToRect(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.RectF, param2: number): globalAndroid.graphics.Matrix;
            public static rectToVertices(param0: globalAndroid.graphics.RectF): androidNative.Array<number>;
            public static updateSensorToBufferTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect): globalAndroid.graphics.Matrix;
            public static getRectToRect(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.RectF, param2: number, param3: boolean): globalAndroid.graphics.Matrix;
            public static getExifTransform(param0: number, param1: number, param2: number): globalAndroid.graphics.Matrix;
            public static verticesToRect(param0: androidNative.Array<number>): globalAndroid.graphics.RectF;
            public static sizeToRect(param0: any): globalAndroid.graphics.Rect;
            public static within360(param0: number): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module executor {
            export class CameraXExecutors {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.CameraXExecutors>;
              public static newSequentialExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
              public static newHandlerExecutor(param0: globalAndroid.os.Handler): java.util.concurrent.ScheduledExecutorService;
              public static isSequentialExecutor(param0: java.util.concurrent.Executor): boolean;
              public static mainThreadExecutor(): java.util.concurrent.ScheduledExecutorService;
              public static myLooperExecutor(): java.util.concurrent.ScheduledExecutorService;
              public static highPriorityExecutor(): java.util.concurrent.Executor;
              public static ioExecutor(): java.util.concurrent.Executor;
              public static directExecutor(): java.util.concurrent.Executor;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module executor {
            export class DirectExecutor {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.DirectExecutor>;
              public execute(param0: java.lang.Runnable): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module executor {
            export class HandlerScheduledExecutorService {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.HandlerScheduledExecutorService>;
              public schedule(param0: java.util.concurrent.Callable<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
              public scheduleAtFixedRate(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
              public execute(param0: java.lang.Runnable): void;
              public scheduleWithFixedDelay(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
              public shutdownNow(): java.util.List<java.lang.Runnable>;
              public isShutdown(): boolean;
              public isTerminated(): boolean;
              public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
              public shutdown(): void;
              public schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
            }
            export module HandlerScheduledExecutorService {
              export class HandlerScheduledFuture<V> extends java.util.concurrent.RunnableScheduledFuture<any> {
                public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.HandlerScheduledExecutorService.HandlerScheduledFuture<any>>;
                public isPeriodic(): boolean;
                public isCancelled(): boolean;
                public get(): any;
                public getDelay(param0: java.util.concurrent.TimeUnit): number;
                public run(): void;
                public isDone(): boolean;
                public cancel(param0: boolean): boolean;
                public compareTo(param0: java.util.concurrent.Delayed): number;
                public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module executor {
            export class HighPriorityExecutor {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.HighPriorityExecutor>;
              public execute(param0: java.lang.Runnable): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module executor {
            export class IoExecutor {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.IoExecutor>;
              public execute(param0: java.lang.Runnable): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module executor {
            export class MainThreadExecutor {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.MainThreadExecutor>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module executor {
            export class SequentialExecutor {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.SequentialExecutor>;
              public execute(param0: java.lang.Runnable): void;
            }
            export module SequentialExecutor {
              export class QueueWorker {
                public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.SequentialExecutor.QueueWorker>;
                public run(): void;
              }
              export class WorkerRunningState {
                public static class: java.lang.Class<androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState>;
                public static IDLE: androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState;
                public static QUEUING: androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState;
                public static QUEUED: androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState;
                public static RUNNING: androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState;
                public static valueOf(param0: string): androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState;
                public static values(): androidNative.Array<androidx.camera.core.impl.utils.executor.SequentialExecutor.WorkerRunningState>;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module futures {
            export class AsyncFunction<I, O> extends java.lang.Object {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.AsyncFunction<any, any>>;
              /**
               * Constructs a new instance of the androidx.camera.core.impl.utils.futures.AsyncFunction<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { apply(param0: I): com.google.common.util.concurrent.ListenableFuture<O> });
              public constructor();
              public apply(param0: I): com.google.common.util.concurrent.ListenableFuture<O>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module futures {
            export class ChainingListenableFuture<I, O> extends androidx.camera.core.impl.utils.futures.FutureChain<any> implements java.lang.Runnable {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.ChainingListenableFuture<any, any>>;
              public get(): any;
              public cancel(param0: boolean): boolean;
              public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module futures {
            export class FutureCallback<V> extends java.lang.Object {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.FutureCallback<any>>;
              /**
               * Constructs a new instance of the androidx.camera.core.impl.utils.futures.FutureCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onSuccess(param0: V): void; onFailure(param0: java.lang.Throwable): void });
              public constructor();
              public onSuccess(param0: V): void;
              public onFailure(param0: java.lang.Throwable): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module futures {
            export class FutureChain<V> extends com.google.common.util.concurrent.ListenableFuture<any> {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.FutureChain<any>>;
              public transform(param0: androidx.arch.core.util.Function, param1: java.util.concurrent.Executor): androidx.camera.core.impl.utils.futures.FutureChain<any>;
              public addCallback(param0: androidx.camera.core.impl.utils.futures.FutureCallback<any>, param1: java.util.concurrent.Executor): void;
              public get(): any;
              public static from(param0: com.google.common.util.concurrent.ListenableFuture): androidx.camera.core.impl.utils.futures.FutureChain<any>;
              public addListener(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void;
              public cancel(param0: boolean): boolean;
              public isCancelled(): boolean;
              public isDone(): boolean;
              public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
              public transformAsync(param0: androidx.camera.core.impl.utils.futures.AsyncFunction<any, any>, param1: java.util.concurrent.Executor): androidx.camera.core.impl.utils.futures.FutureChain<any>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module futures {
            export class Futures {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.Futures>;
              public static addCallback(param0: com.google.common.util.concurrent.ListenableFuture, param1: androidx.camera.core.impl.utils.futures.FutureCallback<any>, param2: java.util.concurrent.Executor): void;
              public static getDone(param0: java.util.concurrent.Future<any>): any;
              public static immediateFailedFuture(param0: java.lang.Throwable): com.google.common.util.concurrent.ListenableFuture;
              public static allAsList(param0: java.util.Collection<any>): com.google.common.util.concurrent.ListenableFuture;
              public static transform(param0: com.google.common.util.concurrent.ListenableFuture, param1: androidx.arch.core.util.Function, param2: java.util.concurrent.Executor): com.google.common.util.concurrent.ListenableFuture;
              public static immediateFuture(param0: any): com.google.common.util.concurrent.ListenableFuture;
              public static immediateFailedScheduledFuture(param0: java.lang.Throwable): java.util.concurrent.ScheduledFuture<any>;
              public static getUninterruptibly(param0: java.util.concurrent.Future<any>): any;
              public static successfulAsList(param0: java.util.Collection<any>): com.google.common.util.concurrent.ListenableFuture;
              public static transformAsync(param0: com.google.common.util.concurrent.ListenableFuture, param1: androidx.camera.core.impl.utils.futures.AsyncFunction<any, any>, param2: java.util.concurrent.Executor): com.google.common.util.concurrent.ListenableFuture;
              public static nonCancellationPropagating(param0: com.google.common.util.concurrent.ListenableFuture): com.google.common.util.concurrent.ListenableFuture;
              public static propagateTransform(param0: com.google.common.util.concurrent.ListenableFuture, param1: androidx.arch.core.util.Function, param2: androidx.concurrent.futures.CallbackToFutureAdapter.Completer, param3: java.util.concurrent.Executor): void;
              public static propagate(param0: com.google.common.util.concurrent.ListenableFuture, param1: androidx.concurrent.futures.CallbackToFutureAdapter.Completer): void;
            }
            export module Futures {
              export class CallbackListener<V> extends java.lang.Runnable {
                public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.Futures.CallbackListener<any>>;
                public toString(): string;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module futures {
            export abstract class ImmediateFuture<V> extends com.google.common.util.concurrent.ListenableFuture<any> {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.ImmediateFuture<any>>;
              public get(): any;
              public static nullFuture(): com.google.common.util.concurrent.ListenableFuture;
              public addListener(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void;
              public cancel(param0: boolean): boolean;
              public isCancelled(): boolean;
              public isDone(): boolean;
              public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
            }
            export module ImmediateFuture {
              export class ImmediateFailedFuture<V> extends androidx.camera.core.impl.utils.futures.ImmediateFuture<any> {
                public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateFailedFuture<any>>;
                public toString(): string;
                public get(): any;
                public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
              }
              export class ImmediateFailedScheduledFuture<V> extends androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateFailedFuture<any> implements java.util.concurrent.ScheduledFuture<any> {
                public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateFailedScheduledFuture<any>>;
                public getDelay(param0: java.util.concurrent.TimeUnit): number;
                public compareTo(param0: java.util.concurrent.Delayed): number;
              }
              export class ImmediateSuccessfulFuture<V> extends androidx.camera.core.impl.utils.futures.ImmediateFuture<any> {
                public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateSuccessfulFuture<any>>;
                public toString(): string;
                public get(): any;
                public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module impl {
        export module utils {
          export module futures {
            export class ListFuture<V> extends com.google.common.util.concurrent.ListenableFuture<java.util.List<any>> {
              public static class: java.lang.Class<androidx.camera.core.impl.utils.futures.ListFuture<any>>;
              public get(param0: number, param1: java.util.concurrent.TimeUnit): java.util.List<any>;
              public addListener(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void;
              public cancel(param0: boolean): boolean;
              public isCancelled(): boolean;
              public isDone(): boolean;
              public get(): java.util.List<any>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export class AutoValue_ImmutableZoomState extends androidx.camera.core.internal.ImmutableZoomState {
          public static class: java.lang.Class<androidx.camera.core.internal.AutoValue_ImmutableZoomState>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getMinZoomRatio(): number;
          public getLinearZoom(): number;
          public getMaxZoomRatio(): number;
          public hashCode(): number;
          public getZoomRatio(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export class ByteBufferOutputStream {
          public static class: java.lang.Class<androidx.camera.core.internal.ByteBufferOutputStream>;
          public write(param0: number): void;
          public constructor(param0: java.nio.ByteBuffer);
          public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export class CameraCaptureResultImageInfo extends androidx.camera.core.ImageInfo {
          public static class: java.lang.Class<androidx.camera.core.internal.CameraCaptureResultImageInfo>;
          public populateExifData(param0: androidx.camera.core.impl.utils.ExifData.Builder): void;
          public getRotationDegrees(): number;
          public getTimestamp(): number;
          public constructor(param0: androidx.camera.core.impl.CameraCaptureResult);
          public getSensorToBufferTransformMatrix(): globalAndroid.graphics.Matrix;
          public getCameraCaptureResult(): androidx.camera.core.impl.CameraCaptureResult;
          public getTagBundle(): androidx.camera.core.impl.TagBundle;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export class CameraUseCaseAdapter extends androidx.camera.core.Camera {
          public static class: java.lang.Class<androidx.camera.core.internal.CameraUseCaseAdapter>;
          public getUseCases(): java.util.List<androidx.camera.core.UseCase>;
          public getCameraId(): androidx.camera.core.internal.CameraUseCaseAdapter.CameraId;
          public setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void;
          public attachUseCases(): void;
          public setEffects(param0: java.util.List<androidx.camera.core.CameraEffect>): void;
          public addUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
          public removeUseCases(param0: java.util.Collection<androidx.camera.core.UseCase>): void;
          public constructor(param0: java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>, param1: androidx.camera.core.impl.CameraDeviceSurfaceManager, param2: androidx.camera.core.impl.UseCaseConfigFactory);
          public getCameraControl(): androidx.camera.core.CameraControl;
          public setViewPort(param0: androidx.camera.core.ViewPort): void;
          public detachUseCases(): void;
          public getExtendedConfig(): androidx.camera.core.impl.CameraConfig;
          public static generateCameraId(param0: java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>): androidx.camera.core.internal.CameraUseCaseAdapter.CameraId;
          public setActiveResumingMode(param0: boolean): void;
          public getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
          public isEquivalent(param0: androidx.camera.core.internal.CameraUseCaseAdapter): boolean;
          public isUseCasesCombinationSupported(param0: androidNative.Array<androidx.camera.core.UseCase>): boolean;
          public getCameraInfo(): androidx.camera.core.CameraInfo;
        }
        export module CameraUseCaseAdapter {
          export class CameraException {
            public static class: java.lang.Class<androidx.camera.core.internal.CameraUseCaseAdapter.CameraException>;
            public constructor();
            public constructor(param0: java.lang.Throwable);
            public constructor(param0: string);
          }
          export class CameraId {
            public static class: java.lang.Class<androidx.camera.core.internal.CameraUseCaseAdapter.CameraId>;
            public equals(param0: any): boolean;
            public hashCode(): number;
          }
          export class ConfigPair {
            public static class: java.lang.Class<androidx.camera.core.internal.CameraUseCaseAdapter.ConfigPair>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export abstract class ImmutableZoomState extends androidx.camera.core.ZoomState {
          public static class: java.lang.Class<androidx.camera.core.internal.ImmutableZoomState>;
          public static create(param0: androidx.camera.core.ZoomState): androidx.camera.core.ZoomState;
          public static create(param0: number, param1: number, param2: number, param3: number): androidx.camera.core.ZoomState;
          public getMinZoomRatio(): number;
          public constructor();
          public getLinearZoom(): number;
          public getMaxZoomRatio(): number;
          public getZoomRatio(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export class IoConfig extends androidx.camera.core.impl.ReadableConfig {
          public static class: java.lang.Class<androidx.camera.core.internal.IoConfig>;
          /**
           * Constructs a new instance of the androidx.camera.core.internal.IoConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getIoExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
            getIoExecutor(): java.util.concurrent.Executor;
            '<clinit>'(): void;
            getConfig(): androidx.camera.core.impl.Config;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          });
          public constructor();
          public static OPTION_IO_EXECUTOR: androidx.camera.core.impl.Config.Option<java.util.concurrent.Executor>;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getConfig(): androidx.camera.core.impl.Config;
          public getIoExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
          public getIoExecutor(): java.util.concurrent.Executor;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
        }
        export module IoConfig {
          export class Builder<B> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.core.internal.IoConfig.Builder<any>>;
            /**
             * Constructs a new instance of the androidx.camera.core.internal.IoConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { setIoExecutor(param0: java.util.concurrent.Executor): B });
            public constructor();
            public setIoExecutor(param0: java.util.concurrent.Executor): B;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export class TargetConfig<T> extends androidx.camera.core.impl.ReadableConfig {
          public static class: java.lang.Class<androidx.camera.core.internal.TargetConfig<any>>;
          /**
           * Constructs a new instance of the androidx.camera.core.internal.TargetConfig<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
            getTargetClass(): java.lang.Class<any>;
            getTargetName(param0: string): string;
            getTargetName(): string;
            '<clinit>'(): void;
            getConfig(): androidx.camera.core.impl.Config;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          });
          public constructor();
          public static OPTION_TARGET_NAME: androidx.camera.core.impl.Config.Option<string>;
          public static OPTION_TARGET_CLASS: androidx.camera.core.impl.Config.Option<java.lang.Class<any>>;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getTargetClass(param0: java.lang.Class<any>): java.lang.Class<any>;
          public getConfig(): androidx.camera.core.impl.Config;
          public getTargetName(): string;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public getTargetName(param0: string): string;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public getTargetClass(): java.lang.Class<any>;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
        }
        export module TargetConfig {
          export class Builder<T, B> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.core.internal.TargetConfig.Builder<any, any>>;
            /**
             * Constructs a new instance of the androidx.camera.core.internal.TargetConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { setTargetClass(param0: java.lang.Class<T>): B; setTargetName(param0: string): B });
            public constructor();
            public setTargetClass(param0: java.lang.Class<T>): B;
            public setTargetName(param0: string): B;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export class ThreadConfig extends androidx.camera.core.impl.ReadableConfig {
          public static class: java.lang.Class<androidx.camera.core.internal.ThreadConfig>;
          /**
           * Constructs a new instance of the androidx.camera.core.internal.ThreadConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getBackgroundExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
            getBackgroundExecutor(): java.util.concurrent.Executor;
            '<clinit>'(): void;
            getConfig(): androidx.camera.core.impl.Config;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          });
          public constructor();
          public static OPTION_BACKGROUND_EXECUTOR: androidx.camera.core.impl.Config.Option<java.util.concurrent.Executor>;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getConfig(): androidx.camera.core.impl.Config;
          public getBackgroundExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public getBackgroundExecutor(): java.util.concurrent.Executor;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
        }
        export module ThreadConfig {
          export class Builder<B> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.core.internal.ThreadConfig.Builder<any>>;
            /**
             * Constructs a new instance of the androidx.camera.core.internal.ThreadConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { setBackgroundExecutor(param0: java.util.concurrent.Executor): B });
            public constructor();
            public setBackgroundExecutor(param0: java.util.concurrent.Executor): B;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export class UseCaseEventConfig extends androidx.camera.core.impl.ReadableConfig {
          public static class: java.lang.Class<androidx.camera.core.internal.UseCaseEventConfig>;
          /**
           * Constructs a new instance of the androidx.camera.core.internal.UseCaseEventConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
            getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
            '<clinit>'(): void;
            getConfig(): androidx.camera.core.impl.Config;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
            retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
            retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
            getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
            findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
            listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
            getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
            hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
            mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          });
          public constructor();
          public static OPTION_USE_CASE_EVENT_CALLBACK: androidx.camera.core.impl.Config.Option<androidx.camera.core.UseCase.EventCallback>;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getConfig(): androidx.camera.core.impl.Config;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
        }
        export module UseCaseEventConfig {
          export class Builder<B> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.core.internal.UseCaseEventConfig.Builder<any>>;
            /**
             * Constructs a new instance of the androidx.camera.core.internal.UseCaseEventConfig$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): B });
            public constructor();
            public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): B;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export class ViewPorts {
          public static class: java.lang.Class<androidx.camera.core.internal.ViewPorts>;
          public static getScaledRect(param0: globalAndroid.graphics.RectF, param1: globalAndroid.util.Rational, param2: number, param3: boolean, param4: number, param5: number): globalAndroid.graphics.RectF;
          public static calculateViewPortRects(param0: globalAndroid.graphics.Rect, param1: boolean, param2: globalAndroid.util.Rational, param3: number, param4: number, param5: number, param6: java.util.Map<androidx.camera.core.UseCase, any>): java.util.Map<androidx.camera.core.UseCase, globalAndroid.graphics.Rect>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export class YuvToJpegProcessor extends androidx.camera.core.impl.CaptureProcessor {
          public static class: java.lang.Class<androidx.camera.core.internal.YuvToJpegProcessor>;
          public getCloseFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public setJpegQuality(param0: number): void;
          public setRotationDegrees(param0: number): void;
          public onOutputSurface(param0: globalAndroid.view.Surface, param1: number): void;
          public close(): void;
          public onResolutionUpdate(param0: any): void;
          public process(param0: androidx.camera.core.impl.ImageProxyBundle): void;
          public constructor(param0: number, param1: number);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module compat {
          export class ImageWriterCompat {
            public static class: java.lang.Class<androidx.camera.core.internal.compat.ImageWriterCompat>;
            public static queueInputImage(param0: globalAndroid.media.ImageWriter, param1: globalAndroid.media.Image): void;
            public static dequeueInputImage(param0: globalAndroid.media.ImageWriter): globalAndroid.media.Image;
            public static newInstance(param0: globalAndroid.view.Surface, param1: number): globalAndroid.media.ImageWriter;
            public static newInstance(param0: globalAndroid.view.Surface, param1: number, param2: number): globalAndroid.media.ImageWriter;
            public static close(param0: globalAndroid.media.ImageWriter): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module compat {
          export class ImageWriterCompatApi23Impl {
            public static class: java.lang.Class<androidx.camera.core.internal.compat.ImageWriterCompatApi23Impl>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module compat {
          export class ImageWriterCompatApi26Impl {
            public static class: java.lang.Class<androidx.camera.core.internal.compat.ImageWriterCompatApi26Impl>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module compat {
          export class ImageWriterCompatApi29Impl {
            public static class: java.lang.Class<androidx.camera.core.internal.compat.ImageWriterCompatApi29Impl>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module compat {
          export module quirk {
            export class DeviceQuirks {
              public static class: java.lang.Class<androidx.camera.core.internal.compat.quirk.DeviceQuirks>;
              public static get(param0: java.lang.Class<any>): androidx.camera.core.impl.Quirk;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module compat {
          export module quirk {
            export class DeviceQuirksLoader {
              public static class: java.lang.Class<androidx.camera.core.internal.compat.quirk.DeviceQuirksLoader>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module compat {
          export module quirk {
            export class ImageCaptureRotationOptionQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.core.internal.compat.quirk.ImageCaptureRotationOptionQuirk>;
              public constructor();
              public isSupported(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module compat {
          export module quirk {
            export class OnePixelShiftQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.core.internal.compat.quirk.OnePixelShiftQuirk>;
              /**
               * Constructs a new instance of the androidx.camera.core.internal.compat.quirk.OnePixelShiftQuirk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module compat {
          export module quirk {
            export class SoftwareJpegEncodingPreferredQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.core.internal.compat.quirk.SoftwareJpegEncodingPreferredQuirk>;
              /**
               * Constructs a new instance of the androidx.camera.core.internal.compat.quirk.SoftwareJpegEncodingPreferredQuirk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module compat {
          export module quirk {
            export class SurfaceOrderQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.core.internal.compat.quirk.SurfaceOrderQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module compat {
          export module workaround {
            export class ExifRotationAvailability {
              public static class: java.lang.Class<androidx.camera.core.internal.compat.workaround.ExifRotationAvailability>;
              public constructor();
              public isRotationOptionSupported(): boolean;
              public shouldUseExifOrientation(param0: androidx.camera.core.ImageProxy): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module compat {
          export module workaround {
            export class SurfaceSorter {
              public static class: java.lang.Class<androidx.camera.core.internal.compat.workaround.SurfaceSorter>;
              public constructor();
              public sort(param0: java.util.List<androidx.camera.core.impl.SessionConfig.OutputConfig>): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module utils {
          export class ArrayRingBuffer<T> extends androidx.camera.core.internal.utils.RingBuffer<any> {
            public static class: java.lang.Class<androidx.camera.core.internal.utils.ArrayRingBuffer<any>>;
            public constructor(param0: number, param1: androidx.camera.core.internal.utils.RingBuffer.OnRemoveCallback<any>);
            public constructor(param0: number);
            public getMaxCapacity(): number;
            public dequeue(): any;
            public isEmpty(): boolean;
            public enqueue(param0: any): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module utils {
          export class ImageUtil {
            public static class: java.lang.Class<androidx.camera.core.internal.utils.ImageUtil>;
            public static DEFAULT_RGBA_PIXEL_STRIDE: number;
            public static jpegImageToJpegByteArray(param0: androidx.camera.core.ImageProxy, param1: globalAndroid.graphics.Rect, param2: number): androidNative.Array<number>;
            public static yuvImageToJpegByteArray(param0: androidx.camera.core.ImageProxy, param1: globalAndroid.graphics.Rect, param2: number): androidNative.Array<number>;
            public static getRotatedAspectRatio(param0: number, param1: globalAndroid.util.Rational): globalAndroid.util.Rational;
            public static yuv_420_888toNv21(param0: androidx.camera.core.ImageProxy): androidNative.Array<number>;
            public static createBitmapFromPlane(param0: androidNative.Array<androidx.camera.core.ImageProxy.PlaneProxy>, param1: number, param2: number): globalAndroid.graphics.Bitmap;
            public static createDirectByteBuffer(param0: globalAndroid.graphics.Bitmap): java.nio.ByteBuffer;
            public static jpegImageToJpegByteArray(param0: androidx.camera.core.ImageProxy): androidNative.Array<number>;
            public static computeCropRectFromAspectRatio(param0: any, param1: globalAndroid.util.Rational): globalAndroid.graphics.Rect;
            public static min(param0: number, param1: number, param2: number, param3: number): number;
            public static isAspectRatioValid(param0: any, param1: globalAndroid.util.Rational): boolean;
            public static computeCropRectFromDispatchInfo(param0: globalAndroid.graphics.Rect, param1: number, param2: any, param3: number): globalAndroid.graphics.Rect;
            public static shouldCropImage(param0: androidx.camera.core.ImageProxy): boolean;
            public static sizeToVertexes(param0: any): androidNative.Array<number>;
            public static isAspectRatioValid(param0: globalAndroid.util.Rational): boolean;
            public static shouldCropImage(param0: number, param1: number, param2: number, param3: number): boolean;
          }
          export module ImageUtil {
            export class CodecFailedException {
              public static class: java.lang.Class<androidx.camera.core.internal.utils.ImageUtil.CodecFailedException>;
              public getFailureType(): androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType;
            }
            export module CodecFailedException {
              export class FailureType {
                public static class: java.lang.Class<androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType>;
                public static ENCODE_FAILED: androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType;
                public static DECODE_FAILED: androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType;
                public static UNKNOWN: androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType;
                public static valueOf(param0: string): androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType;
                public static values(): androidNative.Array<androidx.camera.core.internal.utils.ImageUtil.CodecFailedException.FailureType>;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module utils {
          export class RingBuffer<T> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.core.internal.utils.RingBuffer<any>>;
            /**
             * Constructs a new instance of the androidx.camera.core.internal.utils.RingBuffer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { enqueue(param0: T): void; dequeue(): T; getMaxCapacity(): number; isEmpty(): boolean });
            public constructor();
            public enqueue(param0: T): void;
            public dequeue(): T;
            public getMaxCapacity(): number;
            public isEmpty(): boolean;
          }
          export module RingBuffer {
            export class OnRemoveCallback<T> extends java.lang.Object {
              public static class: java.lang.Class<androidx.camera.core.internal.utils.RingBuffer.OnRemoveCallback<any>>;
              /**
               * Constructs a new instance of the androidx.camera.core.internal.utils.RingBuffer$OnRemoveCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRemove(param0: T): void });
              public constructor();
              public onRemove(param0: T): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module utils {
          export class SizeUtil {
            public static class: java.lang.Class<androidx.camera.core.internal.utils.SizeUtil>;
            public static RESOLUTION_ZERO: any;
            public static RESOLUTION_VGA: any;
            public static RESOLUTION_480P: any;
            public static RESOLUTION_1080P: any;
            public static getArea(param0: any): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module utils {
          export class UseCaseConfigUtil {
            public static class: java.lang.Class<androidx.camera.core.internal.utils.UseCaseConfigUtil>;
            public static updateTargetRotationAndRelatedConfigs(param0: androidx.camera.core.impl.UseCaseConfig.Builder<any, any, any>, param1: number): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module utils {
          export class VideoUtil {
            public static class: java.lang.Class<androidx.camera.core.internal.utils.VideoUtil>;
            public static getAbsolutePathFromUri(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): string;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module internal {
        export module utils {
          export class ZslRingBuffer extends androidx.camera.core.internal.utils.ArrayRingBuffer<androidx.camera.core.ImageProxy> {
            public static class: java.lang.Class<androidx.camera.core.internal.utils.ZslRingBuffer>;
            public enqueue(param0: androidx.camera.core.ImageProxy): void;
            public constructor(param0: number, param1: androidx.camera.core.internal.utils.RingBuffer.OnRemoveCallback<any>);
            public constructor(param0: number, param1: androidx.camera.core.internal.utils.RingBuffer.OnRemoveCallback<androidx.camera.core.ImageProxy>);
            public constructor(param0: number);
            public getMaxCapacity(): number;
            public dequeue(): any;
            public isEmpty(): boolean;
            public enqueue(param0: any): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class AutoValue_OpenGlRenderer_OutputSurface extends androidx.camera.core.processing.OpenGlRenderer.OutputSurface {
          public static class: java.lang.Class<androidx.camera.core.processing.AutoValue_OpenGlRenderer_OutputSurface>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class AutoValue_Packet<T> extends androidx.camera.core.processing.Packet<any> {
          public static class: java.lang.Class<androidx.camera.core.processing.AutoValue_Packet<any>>;
          public getFormat(): number;
          public equals(param0: any): boolean;
          public getData(): any;
          public getCropRect(): globalAndroid.graphics.Rect;
          public toString(): string;
          public getExif(): androidx.camera.core.impl.utils.Exif;
          public getRotationDegrees(): number;
          public getCameraCaptureResult(): androidx.camera.core.impl.CameraCaptureResult;
          public getSensorToBufferTransform(): globalAndroid.graphics.Matrix;
          public getSize(): any;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class AutoValue_SurfaceEdge extends androidx.camera.core.processing.SurfaceEdge {
          public static class: java.lang.Class<androidx.camera.core.processing.AutoValue_SurfaceEdge>;
          public getSurfaces(): java.util.List<androidx.camera.core.processing.SettableSurface>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class DefaultSurfaceProcessor extends androidx.camera.core.processing.SurfaceProcessorInternal {
          public static class: java.lang.Class<androidx.camera.core.processing.DefaultSurfaceProcessor>;
          public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
          public constructor(param0: androidx.camera.core.processing.ShaderProvider);
          public constructor();
          public onOutputSurface(param0: androidx.camera.core.SurfaceOutput): void;
          public release(): void;
          public onInputSurface(param0: androidx.camera.core.SurfaceRequest): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class Edge<T> extends androidx.core.util.Consumer<any> {
          public static class: java.lang.Class<androidx.camera.core.processing.Edge<any>>;
          public accept(param0: any): void;
          public constructor();
          public setListener(param0: androidx.core.util.Consumer<any>): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class ImageProcessorRequest extends androidx.camera.core.ImageProcessor.Request {
          public static class: java.lang.Class<androidx.camera.core.processing.ImageProcessorRequest>;
          public constructor(param0: java.util.List<androidx.camera.core.ImageProxy>, param1: number);
          public getInputImages(): java.util.List<androidx.camera.core.ImageProxy>;
          public getOutputFormat(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class InternalImageProcessor {
          public static class: java.lang.Class<androidx.camera.core.processing.InternalImageProcessor>;
          public safeProcess(param0: androidx.camera.core.ImageProcessor.Request): androidx.camera.core.ImageProcessor.Response;
          public constructor(param0: androidx.camera.core.CameraEffect);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class Node<I, O> extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.processing.Node<any, any>>;
          /**
           * Constructs a new instance of the androidx.camera.core.processing.Node<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { transform(param0: I): O; release(): void });
          public constructor();
          public transform(param0: I): O;
          public release(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class OpenGlRenderer {
          public static class: java.lang.Class<androidx.camera.core.processing.OpenGlRenderer>;
          public getTextureName(): number;
          public constructor();
          public setOutputSurface(param0: globalAndroid.view.Surface): void;
          public release(): void;
          public render(param0: number, param1: androidNative.Array<number>): void;
          public static createFloatBuffer(param0: androidNative.Array<number>): java.nio.FloatBuffer;
          public init(param0: androidx.camera.core.processing.ShaderProvider): void;
        }
        export module OpenGlRenderer {
          export abstract class OutputSurface {
            public static class: java.lang.Class<androidx.camera.core.processing.OpenGlRenderer.OutputSurface>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class Operation<I, O> extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.processing.Operation<any, any>>;
          /**
           * Constructs a new instance of the androidx.camera.core.processing.Operation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { apply(param0: I): O });
          public constructor();
          public apply(param0: I): O;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export abstract class Packet<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.core.processing.Packet<any>>;
          public getFormat(): number;
          public getCropRect(): globalAndroid.graphics.Rect;
          public getExif(): androidx.camera.core.impl.utils.Exif;
          public hasCropping(): boolean;
          public static of(param0: globalAndroid.graphics.Bitmap, param1: androidx.camera.core.impl.utils.Exif, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.Matrix, param5: androidx.camera.core.impl.CameraCaptureResult): androidx.camera.core.processing.Packet<globalAndroid.graphics.Bitmap>;
          public getData(): T;
          public static of(param0: androidx.camera.core.ImageProxy, param1: androidx.camera.core.impl.utils.Exif, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.Matrix, param5: androidx.camera.core.impl.CameraCaptureResult): androidx.camera.core.processing.Packet<androidx.camera.core.ImageProxy>;
          public getRotationDegrees(): number;
          public constructor();
          public getCameraCaptureResult(): androidx.camera.core.impl.CameraCaptureResult;
          public static of(param0: androidNative.Array<number>, param1: androidx.camera.core.impl.utils.Exif, param2: number, param3: any, param4: globalAndroid.graphics.Rect, param5: number, param6: globalAndroid.graphics.Matrix, param7: androidx.camera.core.impl.CameraCaptureResult): androidx.camera.core.processing.Packet<androidNative.Array<number>>;
          public getSensorToBufferTransform(): globalAndroid.graphics.Matrix;
          public getSize(): any;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class SettableSurface extends androidx.camera.core.impl.DeferrableSurface {
          public static class: java.lang.Class<androidx.camera.core.processing.SettableSurface>;
          public getFormat(): number;
          public getCropRect(): globalAndroid.graphics.Rect;
          public hasEmbeddedTransform(): boolean;
          public setRotationDegrees(param0: number): void;
          public createSurfaceRequest(param0: androidx.camera.core.impl.CameraInternal): androidx.camera.core.SurfaceRequest;
          public constructor(param0: number, param1: any, param2: number, param3: globalAndroid.graphics.Matrix, param4: boolean, param5: globalAndroid.graphics.Rect, param6: number, param7: boolean);
          public provideSurface(): com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>;
          public createSurfaceOutputFuture(param0: androidx.camera.core.SurfaceOutput.GlTransformOptions, param1: any, param2: globalAndroid.graphics.Rect, param3: number, param4: boolean): com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.SurfaceOutput>;
          public getTargets(): number;
          public setProvider(param0: com.google.common.util.concurrent.ListenableFuture<globalAndroid.view.Surface>): void;
          public constructor(param0: any, param1: number);
          public getRotationDegrees(): number;
          public getMirroring(): boolean;
          public constructor();
          public setProvider(param0: androidx.camera.core.impl.DeferrableSurface): void;
          public createSurfaceRequest(param0: androidx.camera.core.impl.CameraInternal, param1: globalAndroid.util.Range<java.lang.Integer>): androidx.camera.core.SurfaceRequest;
          public close(): void;
          public getSensorToBufferTransform(): globalAndroid.graphics.Matrix;
          public getSize(): any;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class ShaderProvider {
          public static class: java.lang.Class<androidx.camera.core.processing.ShaderProvider>;
          /**
           * Constructs a new instance of the androidx.camera.core.processing.ShaderProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { createFragmentShader(param0: string, param1: string): string; '<clinit>'(): void });
          public constructor();
          public static DEFAULT: androidx.camera.core.processing.ShaderProvider;
          public createFragmentShader(param0: string, param1: string): string;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export abstract class SurfaceEdge {
          public static class: java.lang.Class<androidx.camera.core.processing.SurfaceEdge>;
          public getSurfaces(): java.util.List<androidx.camera.core.processing.SettableSurface>;
          public constructor();
          public static create(param0: java.util.List<androidx.camera.core.processing.SettableSurface>): androidx.camera.core.processing.SurfaceEdge;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class SurfaceOutputImpl extends androidx.camera.core.SurfaceOutput {
          public static class: java.lang.Class<androidx.camera.core.processing.SurfaceOutputImpl>;
          public getFormat(): number;
          public requestClose(): void;
          public getCloseFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public getRotationDegrees(): number;
          public close(): void;
          public updateTransformMatrix(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
          public getTargets(): number;
          public getSize(): any;
          public getSurface(param0: java.util.concurrent.Executor, param1: androidx.core.util.Consumer<androidx.camera.core.SurfaceOutput.Event>): globalAndroid.view.Surface;
          public isClosed(): boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class SurfaceProcessorInternal extends androidx.camera.core.SurfaceProcessor {
          public static class: java.lang.Class<androidx.camera.core.processing.SurfaceProcessorInternal>;
          /**
           * Constructs a new instance of the androidx.camera.core.processing.SurfaceProcessorInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { release(): void; onInputSurface(param0: androidx.camera.core.SurfaceRequest): void; onOutputSurface(param0: androidx.camera.core.SurfaceOutput): void });
          public constructor();
          public onOutputSurface(param0: androidx.camera.core.SurfaceOutput): void;
          public release(): void;
          public onInputSurface(param0: androidx.camera.core.SurfaceRequest): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class SurfaceProcessorNode extends androidx.camera.core.processing.Node<androidx.camera.core.processing.SurfaceEdge, androidx.camera.core.processing.SurfaceEdge> {
          public static class: java.lang.Class<androidx.camera.core.processing.SurfaceProcessorNode>;
          public constructor(param0: androidx.camera.core.impl.CameraInternal, param1: androidx.camera.core.SurfaceOutput.GlTransformOptions, param2: androidx.camera.core.processing.SurfaceProcessorInternal);
          public transform(param0: any): any;
          public release(): void;
          public transform(param0: androidx.camera.core.processing.SurfaceEdge): androidx.camera.core.processing.SurfaceEdge;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module core {
      export module processing {
        export class SurfaceProcessorWithExecutor extends androidx.camera.core.processing.SurfaceProcessorInternal {
          public static class: java.lang.Class<androidx.camera.core.processing.SurfaceProcessorWithExecutor>;
          public getExecutor(): java.util.concurrent.Executor;
          public onOutputSurface(param0: androidx.camera.core.SurfaceOutput): void;
          public constructor(param0: androidx.camera.core.SurfaceProcessor, param1: java.util.concurrent.Executor);
          public getProcessor(): androidx.camera.core.SurfaceProcessor;
          public release(): void;
          public onInputSurface(param0: androidx.camera.core.SurfaceRequest): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export class ExtensionCameraFilter extends androidx.camera.core.CameraFilter {
        public static class: java.lang.Class<androidx.camera.extensions.ExtensionCameraFilter>;
        public getIdentifier(): androidx.camera.core.impl.Identifier;
        public filter(param0: java.util.List<androidx.camera.core.CameraInfo>): java.util.List<androidx.camera.core.CameraInfo>;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export class ExtensionMode {
        public static class: java.lang.Class<androidx.camera.extensions.ExtensionMode>;
        public static NONE: number;
        public static BOKEH: number;
        public static HDR: number;
        public static NIGHT: number;
        public static FACE_RETOUCH: number;
        public static AUTO: number;
      }
      export module ExtensionMode {
        export class Mode {
          public static class: java.lang.Class<androidx.camera.extensions.ExtensionMode.Mode>;
          /**
           * Constructs a new instance of the androidx.camera.extensions.ExtensionMode$Mode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export class ExtensionsConfig extends androidx.camera.core.impl.CameraConfig {
        public static class: java.lang.Class<androidx.camera.extensions.ExtensionsConfig>;
        public static OPTION_EXTENSION_MODE: androidx.camera.core.impl.Config.Option<java.lang.Integer>;
        public getConfig(): androidx.camera.core.impl.Config;
        public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
        public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
        public getCompatibilityId(): androidx.camera.core.impl.Identifier;
        public getUseCaseConfigFactory(): androidx.camera.core.impl.UseCaseConfigFactory;
        public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
        public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
        public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
        public getExtensionMode(): number;
        public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
        public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
        public getSessionProcessor(): androidx.camera.core.impl.SessionProcessor;
        public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
        public getUseCaseCombinationRequiredRule(): number;
        public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
        public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
        public getSessionProcessor(param0: androidx.camera.core.impl.SessionProcessor): androidx.camera.core.impl.SessionProcessor;
      }
      export module ExtensionsConfig {
        export class Builder extends androidx.camera.core.impl.CameraConfig.Builder<androidx.camera.extensions.ExtensionsConfig.Builder> {
          public static class: java.lang.Class<androidx.camera.extensions.ExtensionsConfig.Builder>;
          public setZslDisabled(param0: boolean): any;
          public setExtensionMode(param0: number): androidx.camera.extensions.ExtensionsConfig.Builder;
          public setSessionProcessor(param0: androidx.camera.core.impl.SessionProcessor): any;
          public setUseCaseCombinationRequiredRule(param0: number): androidx.camera.extensions.ExtensionsConfig.Builder;
          public setUseCaseConfigFactory(param0: androidx.camera.core.impl.UseCaseConfigFactory): androidx.camera.extensions.ExtensionsConfig.Builder;
          public setSessionProcessor(param0: androidx.camera.core.impl.SessionProcessor): androidx.camera.extensions.ExtensionsConfig.Builder;
          public setCompatibilityId(param0: androidx.camera.core.impl.Identifier): androidx.camera.extensions.ExtensionsConfig.Builder;
          public setCompatibilityId(param0: androidx.camera.core.impl.Identifier): any;
          public setUseCaseCombinationRequiredRule(param0: number): any;
          public setZslDisabled(param0: boolean): androidx.camera.extensions.ExtensionsConfig.Builder;
          public setUseCaseConfigFactory(param0: androidx.camera.core.impl.UseCaseConfigFactory): any;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export class ExtensionsInfo {
        public static class: java.lang.Class<androidx.camera.extensions.ExtensionsInfo>;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export class ExtensionsManager {
        public static class: java.lang.Class<androidx.camera.extensions.ExtensionsManager>;
        public static getInstanceAsync(param0: globalAndroid.content.Context, param1: androidx.camera.core.CameraProvider): com.google.common.util.concurrent.ListenableFuture<androidx.camera.extensions.ExtensionsManager>;
        public isExtensionAvailable(param0: androidx.camera.core.CameraSelector, param1: number): boolean;
        public shutdown(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public getEstimatedCaptureLatencyRange(param0: androidx.camera.core.CameraSelector, param1: number): globalAndroid.util.Range<java.lang.Long>;
        public getExtensionEnabledCameraSelector(param0: androidx.camera.core.CameraSelector, param1: number): androidx.camera.core.CameraSelector;
      }
      export module ExtensionsManager {
        export class ExtensionsAvailability {
          public static class: java.lang.Class<androidx.camera.extensions.ExtensionsManager.ExtensionsAvailability>;
          public static LIBRARY_AVAILABLE: androidx.camera.extensions.ExtensionsManager.ExtensionsAvailability;
          public static LIBRARY_UNAVAILABLE_ERROR_LOADING: androidx.camera.extensions.ExtensionsManager.ExtensionsAvailability;
          public static LIBRARY_UNAVAILABLE_MISSING_IMPLEMENTATION: androidx.camera.extensions.ExtensionsManager.ExtensionsAvailability;
          public static NONE: androidx.camera.extensions.ExtensionsManager.ExtensionsAvailability;
          public static values(): androidNative.Array<androidx.camera.extensions.ExtensionsManager.ExtensionsAvailability>;
          public static valueOf(param0: string): androidx.camera.extensions.ExtensionsManager.ExtensionsAvailability;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class AdaptingCaptureProcessor implements androidx.camera.core.impl.CaptureProcessor, androidx.camera.extensions.internal.VendorProcessor {
          public static class: java.lang.Class<androidx.camera.extensions.internal.AdaptingCaptureProcessor>;
          public getCloseFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public constructor(param0: androidx.camera.extensions.impl.CaptureProcessorImpl);
          public close(): void;
          public onOutputSurface(param0: globalAndroid.view.Surface, param1: number): void;
          public onDeInit(): void;
          public onResolutionUpdate(param0: any): void;
          public process(param0: androidx.camera.core.impl.ImageProxyBundle): void;
          public onInit(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class AdaptingCaptureStage extends androidx.camera.core.impl.CaptureStage {
          public static class: java.lang.Class<androidx.camera.extensions.internal.AdaptingCaptureStage>;
          public getCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
          public getId(): number;
          public constructor(param0: androidx.camera.extensions.impl.CaptureStageImpl);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class AdaptingPreviewProcessor implements androidx.camera.core.impl.CaptureProcessor, androidx.camera.extensions.internal.VendorProcessor {
          public static class: java.lang.Class<androidx.camera.extensions.internal.AdaptingPreviewProcessor>;
          public getCloseFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          public constructor(param0: androidx.camera.extensions.impl.PreviewImageProcessorImpl);
          public onOutputSurface(param0: globalAndroid.view.Surface, param1: number): void;
          public close(): void;
          public onResolutionUpdate(param0: any): void;
          public onDeInit(): void;
          public process(param0: androidx.camera.core.impl.ImageProxyBundle): void;
          public onInit(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class AdaptingRequestUpdateProcessor implements androidx.camera.core.impl.ImageInfoProcessor, androidx.camera.extensions.internal.VendorProcessor {
          public static class: java.lang.Class<androidx.camera.extensions.internal.AdaptingRequestUpdateProcessor>;
          public getCaptureStage(): androidx.camera.core.impl.CaptureStage;
          public process(param0: androidx.camera.core.ImageInfo): boolean;
          public close(): void;
          public constructor(param0: androidx.camera.extensions.impl.PreviewExtenderImpl);
          public onDeInit(): void;
          public onInit(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class AdvancedVendorExtender extends androidx.camera.extensions.internal.VendorExtender {
          public static class: java.lang.Class<androidx.camera.extensions.internal.AdvancedVendorExtender>;
          public createSessionProcessor(param0: globalAndroid.content.Context): androidx.camera.core.impl.SessionProcessor;
          public init(param0: androidx.camera.core.CameraInfo): void;
          public getEstimatedCaptureLatencyRange(param0: any): globalAndroid.util.Range<java.lang.Long>;
          public getSupportedPreviewOutputResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public isExtensionAvailable(param0: string, param1: java.util.Map<string, globalAndroid.hardware.camera2.CameraCharacteristics>): boolean;
          public getSupportedCaptureOutputResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public getSupportedYuvAnalysisResolutions(): androidNative.Array<any>;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class AutoValue_Version extends androidx.camera.extensions.internal.Version {
          public static class: java.lang.Class<androidx.camera.extensions.internal.AutoValue_Version>;
          public getMajor(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class BasicVendorExtender extends androidx.camera.extensions.internal.VendorExtender {
          public static class: java.lang.Class<androidx.camera.extensions.internal.BasicVendorExtender>;
          public createSessionProcessor(param0: globalAndroid.content.Context): androidx.camera.core.impl.SessionProcessor;
          public getPreviewExtenderImpl(): androidx.camera.extensions.impl.PreviewExtenderImpl;
          public init(param0: androidx.camera.core.CameraInfo): void;
          public getEstimatedCaptureLatencyRange(param0: any): globalAndroid.util.Range<java.lang.Long>;
          public getSupportedPreviewOutputResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public isExtensionAvailable(param0: string, param1: java.util.Map<string, globalAndroid.hardware.camera2.CameraCharacteristics>): boolean;
          public getSupportedCaptureOutputResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public getSupportedYuvAnalysisResolutions(): androidNative.Array<any>;
          public constructor(param0: number);
          public getImageCaptureExtenderImpl(): androidx.camera.extensions.impl.ImageCaptureExtenderImpl;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class BlockingCloseAccessCounter {
          public static class: java.lang.Class<androidx.camera.extensions.internal.BlockingCloseAccessCounter>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export abstract class ExtensionVersion {
          public static class: java.lang.Class<androidx.camera.extensions.internal.ExtensionVersion>;
          public static isAdvancedExtenderSupported(): boolean;
          public constructor();
          public static isExtensionVersionSupported(): boolean;
          public static getRuntimeVersion(): androidx.camera.extensions.internal.Version;
        }
        export module ExtensionVersion {
          export class DefaultExtenderVersioning extends androidx.camera.extensions.internal.ExtensionVersion {
            public static class: java.lang.Class<androidx.camera.extensions.internal.ExtensionVersion.DefaultExtenderVersioning>;
          }
          export class VendorExtenderVersioning extends androidx.camera.extensions.internal.ExtensionVersion {
            public static class: java.lang.Class<androidx.camera.extensions.internal.ExtensionVersion.VendorExtenderVersioning>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class ExtensionsUseCaseConfigFactory extends androidx.camera.core.impl.UseCaseConfigFactory {
          public static class: java.lang.Class<androidx.camera.extensions.internal.ExtensionsUseCaseConfigFactory>;
          public getConfig(param0: androidx.camera.core.impl.UseCaseConfigFactory.CaptureType, param1: number): androidx.camera.core.impl.Config;
          public constructor(param0: number, param1: androidx.camera.extensions.internal.VendorExtender, param2: globalAndroid.content.Context);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class ImageCaptureConfigProvider extends androidx.camera.core.impl.ConfigProvider<androidx.camera.core.impl.ImageCaptureConfig> {
          public static class: java.lang.Class<androidx.camera.extensions.internal.ImageCaptureConfigProvider>;
          public getConfig(): androidx.camera.core.impl.ImageCaptureConfig;
          public constructor(param0: number, param1: androidx.camera.extensions.internal.VendorExtender, param2: globalAndroid.content.Context);
          public getConfig(): any;
        }
        export module ImageCaptureConfigProvider {
          export class ImageCaptureEventAdapter extends androidx.camera.camera2.impl.CameraEventCallback implements androidx.camera.core.UseCase.EventCallback, androidx.camera.core.impl.CaptureBundle {
            public static class: java.lang.Class<androidx.camera.extensions.internal.ImageCaptureConfigProvider.ImageCaptureEventAdapter>;
            public onInitSession(): androidx.camera.core.impl.CaptureConfig;
            public onDisableSession(): androidx.camera.core.impl.CaptureConfig;
            public getCaptureStages(): java.util.List<androidx.camera.core.impl.CaptureStage>;
            public onDetach(): void;
            public onDeInitSession(): void;
            public onAttach(param0: androidx.camera.core.CameraInfo): void;
            public onEnableSession(): androidx.camera.core.impl.CaptureConfig;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class PreviewConfigProvider extends androidx.camera.core.impl.ConfigProvider<androidx.camera.core.impl.PreviewConfig> {
          public static class: java.lang.Class<androidx.camera.extensions.internal.PreviewConfigProvider>;
          public getConfig(): androidx.camera.core.impl.PreviewConfig;
          public constructor(param0: number, param1: androidx.camera.extensions.internal.VendorExtender, param2: globalAndroid.content.Context);
          public getConfig(): any;
        }
        export module PreviewConfigProvider {
          export class PreviewEventAdapter extends androidx.camera.camera2.impl.CameraEventCallback implements androidx.camera.core.UseCase.EventCallback {
            public static class: java.lang.Class<androidx.camera.extensions.internal.PreviewConfigProvider.PreviewEventAdapter>;
            public onRepeating(): androidx.camera.core.impl.CaptureConfig;
            public onInitSession(): androidx.camera.core.impl.CaptureConfig;
            public onDisableSession(): androidx.camera.core.impl.CaptureConfig;
            public onDetach(): void;
            public onDeInitSession(): void;
            public onAttach(param0: androidx.camera.core.CameraInfo): void;
            public onEnableSession(): androidx.camera.core.impl.CaptureConfig;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class VendorExtender {
          public static class: java.lang.Class<androidx.camera.extensions.internal.VendorExtender>;
          /**
           * Constructs a new instance of the androidx.camera.extensions.internal.VendorExtender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { isExtensionAvailable(param0: string, param1: java.util.Map<string, globalAndroid.hardware.camera2.CameraCharacteristics>): boolean; init(param0: androidx.camera.core.CameraInfo): void; getEstimatedCaptureLatencyRange(param0: any): globalAndroid.util.Range<java.lang.Long>; getSupportedPreviewOutputResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>; getSupportedCaptureOutputResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>; getSupportedYuvAnalysisResolutions(): androidNative.Array<any>; createSessionProcessor(param0: globalAndroid.content.Context): androidx.camera.core.impl.SessionProcessor });
          public constructor();
          public createSessionProcessor(param0: globalAndroid.content.Context): androidx.camera.core.impl.SessionProcessor;
          public init(param0: androidx.camera.core.CameraInfo): void;
          public getEstimatedCaptureLatencyRange(param0: any): globalAndroid.util.Range<java.lang.Long>;
          public getSupportedPreviewOutputResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public isExtensionAvailable(param0: string, param1: java.util.Map<string, globalAndroid.hardware.camera2.CameraCharacteristics>): boolean;
          public getSupportedCaptureOutputResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public getSupportedYuvAnalysisResolutions(): androidNative.Array<any>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class VendorProcessor {
          public static class: java.lang.Class<androidx.camera.extensions.internal.VendorProcessor>;
          /**
           * Constructs a new instance of the androidx.camera.extensions.internal.VendorProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onInit(): void; onDeInit(): void; close(): void });
          public constructor();
          public close(): void;
          public onDeInit(): void;
          public onInit(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export abstract class Version extends java.lang.Comparable<androidx.camera.extensions.internal.Version> {
          public static class: java.lang.Class<androidx.camera.extensions.internal.Version>;
          public static VERSION_1_0: androidx.camera.extensions.internal.Version;
          public static VERSION_1_1: androidx.camera.extensions.internal.Version;
          public static VERSION_1_2: androidx.camera.extensions.internal.Version;
          public equals(param0: any): boolean;
          public getMajor(): number;
          public toString(): string;
          public static create(param0: number, param1: number, param2: number, param3: string): androidx.camera.extensions.internal.Version;
          public static parse(param0: string): androidx.camera.extensions.internal.Version;
          public compareTo(param0: androidx.camera.extensions.internal.Version): number;
          public compareTo(param0: number, param1: number): number;
          public hashCode(): number;
          public compareTo(param0: number): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export class VersionName {
          public static class: java.lang.Class<androidx.camera.extensions.internal.VersionName>;
          public static getCurrentVersion(): androidx.camera.extensions.internal.VersionName;
          public constructor(param0: string);
          public toVersionString(): string;
          public getVersion(): androidx.camera.extensions.internal.Version;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module compat {
          export module quirk {
            export class DeviceQuirks {
              public static class: java.lang.Class<androidx.camera.extensions.internal.compat.quirk.DeviceQuirks>;
              public static getAll(): androidx.camera.core.impl.Quirks;
              public static get(param0: java.lang.Class<any>): androidx.camera.core.impl.Quirk;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module compat {
          export module quirk {
            export class DeviceQuirksLoader {
              public static class: java.lang.Class<androidx.camera.extensions.internal.compat.quirk.DeviceQuirksLoader>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module compat {
          export module quirk {
            export class ExtensionDisabledQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.extensions.internal.compat.quirk.ExtensionDisabledQuirk>;
              public constructor();
              public shouldDisableExtension(param0: string, param1: number): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module compat {
          export module workaround {
            export class ExtensionDisabledValidator {
              public static class: java.lang.Class<androidx.camera.extensions.internal.compat.workaround.ExtensionDisabledValidator>;
              public constructor();
              public shouldDisableExtension(param0: string, param1: number): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export class AdvancedSessionProcessor extends androidx.camera.extensions.internal.sessionprocessor.SessionProcessorBase {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.AdvancedSessionProcessor>;
            public startRepeating(param0: androidx.camera.core.impl.SessionProcessor.CaptureCallback): number;
            public initSessionInternal(param0: string, param1: java.util.Map<string, globalAndroid.hardware.camera2.CameraCharacteristics>, param2: androidx.camera.core.impl.OutputSurface, param3: androidx.camera.core.impl.OutputSurface, param4: androidx.camera.core.impl.OutputSurface): androidx.camera.extensions.internal.sessionprocessor.Camera2SessionConfig;
            public startCapture(param0: androidx.camera.core.impl.SessionProcessor.CaptureCallback): number;
            public onCaptureSessionStart(param0: androidx.camera.core.impl.RequestProcessor): void;
            public onCaptureSessionEnd(): void;
            public initSession(param0: androidx.camera.core.CameraInfo, param1: androidx.camera.core.impl.OutputSurface, param2: androidx.camera.core.impl.OutputSurface, param3: androidx.camera.core.impl.OutputSurface): androidx.camera.core.impl.SessionConfig;
            public abortCapture(param0: number): void;
            public deInitSessionInternal(): void;
            public setParameters(param0: androidx.camera.core.impl.Config): void;
            public constructor(param0: androidx.camera.extensions.impl.advanced.SessionProcessorImpl, param1: globalAndroid.content.Context);
            public stopRepeating(): void;
            public deInitSession(): void;
          }
          export module AdvancedSessionProcessor {
            export class CallbackAdapter extends androidx.camera.core.impl.RequestProcessor.Callback {
              public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.AdvancedSessionProcessor.CallbackAdapter>;
              public onCaptureBufferLost(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: number, param2: number): void;
              public onCaptureSequenceAborted(param0: number): void;
              public onCaptureProgressed(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureResult): void;
              public onCaptureCompleted(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureResult): void;
              public onCaptureSequenceCompleted(param0: number, param1: number): void;
              public onCaptureFailed(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: androidx.camera.core.impl.CameraCaptureFailure): void;
              public onCaptureStarted(param0: androidx.camera.core.impl.RequestProcessor.Request, param1: number, param2: number): void;
            }
            export class ImageProcessorAdapter extends androidx.camera.extensions.internal.sessionprocessor.ImageProcessor {
              public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.AdvancedSessionProcessor.ImageProcessorAdapter>;
              public onNextImageAvailable(param0: number, param1: number, param2: androidx.camera.extensions.internal.sessionprocessor.ImageReference, param3: string): void;
            }
            export class ImageReferenceImplAdapter {
              public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.AdvancedSessionProcessor.ImageReferenceImplAdapter>;
              public increment(): boolean;
              public decrement(): boolean;
              public get(): globalAndroid.media.Image;
            }
            export class OutputSurfaceImplAdapter {
              public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.AdvancedSessionProcessor.OutputSurfaceImplAdapter>;
              public getSize(): any;
              public getImageFormat(): number;
              public getSurface(): globalAndroid.view.Surface;
            }
            export class RequestAdapter extends androidx.camera.core.impl.RequestProcessor.Request {
              public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.AdvancedSessionProcessor.RequestAdapter>;
              public getImplRequest(): androidx.camera.extensions.impl.advanced.RequestProcessorImpl.Request;
              public getTemplateId(): number;
              public getTargetOutputConfigIds(): java.util.List<java.lang.Integer>;
              public getParameters(): androidx.camera.core.impl.Config;
            }
            export class RequestProcessorImplAdapter {
              public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.AdvancedSessionProcessor.RequestProcessorImplAdapter>;
              public stopRepeating(): void;
              public submit(param0: androidx.camera.extensions.impl.advanced.RequestProcessorImpl.Request, param1: androidx.camera.extensions.impl.advanced.RequestProcessorImpl.Callback): number;
              public submit(param0: java.util.List<androidx.camera.extensions.impl.advanced.RequestProcessorImpl.Request>, param1: androidx.camera.extensions.impl.advanced.RequestProcessorImpl.Callback): number;
              public setRepeating(param0: androidx.camera.extensions.impl.advanced.RequestProcessorImpl.Request, param1: androidx.camera.extensions.impl.advanced.RequestProcessorImpl.Callback): number;
              public abortCaptures(): void;
              public setImageProcessor(param0: number, param1: androidx.camera.extensions.impl.advanced.ImageProcessorImpl): void;
            }
            export class SessionProcessorImplCaptureCallbackAdapter {
              public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.AdvancedSessionProcessor.SessionProcessorImplCaptureCallbackAdapter>;
              public onCaptureProcessStarted(param0: number): void;
              public onCaptureStarted(param0: number, param1: number): void;
              public onCaptureSequenceCompleted(param0: number): void;
              public onCaptureSequenceAborted(param0: number): void;
              public onCaptureCompleted(param0: number, param1: number, param2: java.util.Map<globalAndroid.hardware.camera2.CaptureResult.Key, any>): void;
              public onCaptureFailed(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export class AutoValue_ImageReaderOutputConfig extends androidx.camera.extensions.internal.sessionprocessor.ImageReaderOutputConfig {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.AutoValue_ImageReaderOutputConfig>;
            public getSurfaceSharingOutputConfigs(): java.util.List<androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig>;
            public getSurfaceGroupId(): number;
            public getPhysicalCameraId(): string;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toString(): string;
            public getId(): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export class AutoValue_MultiResolutionImageReaderOutputConfig extends androidx.camera.extensions.internal.sessionprocessor.MultiResolutionImageReaderOutputConfig {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.AutoValue_MultiResolutionImageReaderOutputConfig>;
            public getSurfaceSharingOutputConfigs(): java.util.List<androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig>;
            public getSurfaceGroupId(): number;
            public getPhysicalCameraId(): string;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toString(): string;
            public getId(): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export class AutoValue_SurfaceOutputConfig extends androidx.camera.extensions.internal.sessionprocessor.SurfaceOutputConfig {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.AutoValue_SurfaceOutputConfig>;
            public getSurfaceSharingOutputConfigs(): java.util.List<androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig>;
            public getSurfaceGroupId(): number;
            public getPhysicalCameraId(): string;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toString(): string;
            public getId(): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export class Camera2OutputConfig {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig>;
            /**
             * Constructs a new instance of the androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getId(): number; getSurfaceGroupId(): number; getPhysicalCameraId(): string; getSurfaceSharingOutputConfigs(): java.util.List<androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig> });
            public constructor();
            public getSurfaceSharingOutputConfigs(): java.util.List<androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig>;
            public getSurfaceGroupId(): number;
            public getPhysicalCameraId(): string;
            public getId(): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export class Camera2OutputConfigConverter {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfigConverter>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export class Camera2SessionConfig {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.Camera2SessionConfig>;
            /**
             * Constructs a new instance of the androidx.camera.extensions.internal.sessionprocessor.Camera2SessionConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getOutputConfigs(): java.util.List<androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig>; getSessionParameters(): java.util.Map<globalAndroid.hardware.camera2.CaptureRequest.Key<any>, any>; getSessionTemplateId(): number });
            public constructor();
            public getOutputConfigs(): java.util.List<androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig>;
            public getSessionParameters(): java.util.Map<globalAndroid.hardware.camera2.CaptureRequest.Key<any>, any>;
            public getSessionTemplateId(): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export class Camera2SessionConfigBuilder {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.Camera2SessionConfigBuilder>;
          }
          export module Camera2SessionConfigBuilder {
            export class SessionConfigImpl extends androidx.camera.extensions.internal.sessionprocessor.Camera2SessionConfig {
              public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.Camera2SessionConfigBuilder.SessionConfigImpl>;
              public getSessionTemplateId(): number;
              public getSessionParameters(): java.util.Map<globalAndroid.hardware.camera2.CaptureRequest.Key<any>, any>;
              public getOutputConfigs(): java.util.List<androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export class ImageProcessor {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.ImageProcessor>;
            /**
             * Constructs a new instance of the androidx.camera.extensions.internal.sessionprocessor.ImageProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onNextImageAvailable(param0: number, param1: number, param2: androidx.camera.extensions.internal.sessionprocessor.ImageReference, param3: string): void });
            public constructor();
            public onNextImageAvailable(param0: number, param1: number, param2: androidx.camera.extensions.internal.sessionprocessor.ImageReference, param3: string): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export abstract class ImageReaderOutputConfig extends androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.ImageReaderOutputConfig>;
            public getSurfaceSharingOutputConfigs(): java.util.List<androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig>;
            public constructor();
            public getSurfaceGroupId(): number;
            public getPhysicalCameraId(): string;
            public getId(): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export class ImageReference {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.ImageReference>;
            /**
             * Constructs a new instance of the androidx.camera.extensions.internal.sessionprocessor.ImageReference interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { increment(): boolean; decrement(): boolean; get(): globalAndroid.media.Image });
            public constructor();
            public decrement(): boolean;
            public get(): globalAndroid.media.Image;
            public increment(): boolean;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export abstract class MultiResolutionImageReaderOutputConfig extends androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.MultiResolutionImageReaderOutputConfig>;
            public getSurfaceSharingOutputConfigs(): java.util.List<androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig>;
            public constructor();
            public getSurfaceGroupId(): number;
            public getPhysicalCameraId(): string;
            public getId(): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export abstract class SessionProcessorBase extends androidx.camera.core.impl.SessionProcessor {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.SessionProcessorBase>;
            public startRepeating(param0: androidx.camera.core.impl.SessionProcessor.CaptureCallback): number;
            public initSessionInternal(param0: string, param1: java.util.Map<string, globalAndroid.hardware.camera2.CameraCharacteristics>, param2: androidx.camera.core.impl.OutputSurface, param3: androidx.camera.core.impl.OutputSurface, param4: androidx.camera.core.impl.OutputSurface): androidx.camera.extensions.internal.sessionprocessor.Camera2SessionConfig;
            public startCapture(param0: androidx.camera.core.impl.SessionProcessor.CaptureCallback): number;
            public onCaptureSessionStart(param0: androidx.camera.core.impl.RequestProcessor): void;
            public onCaptureSessionEnd(): void;
            public setImageProcessor(param0: number, param1: androidx.camera.extensions.internal.sessionprocessor.ImageProcessor): void;
            public initSession(param0: androidx.camera.core.CameraInfo, param1: androidx.camera.core.impl.OutputSurface, param2: androidx.camera.core.impl.OutputSurface, param3: androidx.camera.core.impl.OutputSurface): androidx.camera.core.impl.SessionConfig;
            public abortCapture(param0: number): void;
            public deInitSessionInternal(): void;
            public setParameters(param0: androidx.camera.core.impl.Config): void;
            public stopRepeating(): void;
            public deInitSession(): void;
          }
          export module SessionProcessorBase {
            export class ImageRefHolder extends androidx.camera.extensions.internal.sessionprocessor.ImageReference {
              public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.SessionProcessorBase.ImageRefHolder>;
              public increment(): boolean;
              public decrement(): boolean;
              public get(): globalAndroid.media.Image;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module extensions {
      export module internal {
        export module sessionprocessor {
          export abstract class SurfaceOutputConfig extends androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig {
            public static class: java.lang.Class<androidx.camera.extensions.internal.sessionprocessor.SurfaceOutputConfig>;
            public getSurfaceSharingOutputConfigs(): java.util.List<androidx.camera.extensions.internal.sessionprocessor.Camera2OutputConfig>;
            public constructor();
            public getSurfaceGroupId(): number;
            public getPhysicalCameraId(): string;
            public getId(): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module lifecycle {
      export class AutoValue_LifecycleCameraRepository_Key extends androidx.camera.lifecycle.LifecycleCameraRepository.Key {
        public static class: java.lang.Class<androidx.camera.lifecycle.AutoValue_LifecycleCameraRepository_Key>;
        public hashCode(): number;
        public getLifecycleOwner(): androidx.lifecycle.LifecycleOwner;
        public equals(param0: any): boolean;
        public getCameraId(): androidx.camera.core.internal.CameraUseCaseAdapter.CameraId;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module lifecycle {
      export class ExperimentalCameraProviderConfiguration {
        public static class: java.lang.Class<androidx.camera.lifecycle.ExperimentalCameraProviderConfiguration>;
        /**
         * Constructs a new instance of the androidx.camera.lifecycle.ExperimentalCameraProviderConfiguration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module lifecycle {
      export class LifecycleCamera extends androidx.camera.core.Camera {
        public static class: java.lang.Class<androidx.camera.lifecycle.LifecycleCamera>;
        public unsuspend(): void;
        public getExtendedConfig(): androidx.camera.core.impl.CameraConfig;
        public onDestroy(param0: androidx.lifecycle.LifecycleOwner): void;
        public getLifecycleOwner(): androidx.lifecycle.LifecycleOwner;
        public suspend(): void;
        public isBound(param0: androidx.camera.core.UseCase): boolean;
        public getCameraInfo(): androidx.camera.core.CameraInfo;
        public getCameraInternals(): java.util.LinkedHashSet<androidx.camera.core.impl.CameraInternal>;
        public setExtendedConfig(param0: androidx.camera.core.impl.CameraConfig): void;
        public onPause(param0: androidx.lifecycle.LifecycleOwner): void;
        public isUseCasesCombinationSupported(param0: androidNative.Array<androidx.camera.core.UseCase>): boolean;
        public onStart(param0: androidx.lifecycle.LifecycleOwner): void;
        public isActive(): boolean;
        public onStop(param0: androidx.lifecycle.LifecycleOwner): void;
        public getCameraControl(): androidx.camera.core.CameraControl;
        public onResume(param0: androidx.lifecycle.LifecycleOwner): void;
        public getUseCases(): java.util.List<androidx.camera.core.UseCase>;
        public getCameraUseCaseAdapter(): androidx.camera.core.internal.CameraUseCaseAdapter;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module lifecycle {
      export class LifecycleCameraProvider extends androidx.camera.core.CameraProvider {
        public static class: java.lang.Class<androidx.camera.lifecycle.LifecycleCameraProvider>;
        /**
         * Constructs a new instance of the androidx.camera.lifecycle.LifecycleCameraProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { isBound(param0: androidx.camera.core.UseCase): boolean; unbind(param0: androidNative.Array<androidx.camera.core.UseCase>): void; unbindAll(): void; hasCamera(param0: androidx.camera.core.CameraSelector): boolean; getAvailableCameraInfos(): java.util.List<androidx.camera.core.CameraInfo> });
        public constructor();
        public unbind(param0: androidNative.Array<androidx.camera.core.UseCase>): void;
        public unbindAll(): void;
        public hasCamera(param0: androidx.camera.core.CameraSelector): boolean;
        public isBound(param0: androidx.camera.core.UseCase): boolean;
        public getAvailableCameraInfos(): java.util.List<androidx.camera.core.CameraInfo>;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module lifecycle {
      export class LifecycleCameraRepository {
        public static class: java.lang.Class<androidx.camera.lifecycle.LifecycleCameraRepository>;
      }
      export module LifecycleCameraRepository {
        export abstract class Key {
          public static class: java.lang.Class<androidx.camera.lifecycle.LifecycleCameraRepository.Key>;
          public getCameraId(): androidx.camera.core.internal.CameraUseCaseAdapter.CameraId;
          public getLifecycleOwner(): androidx.lifecycle.LifecycleOwner;
        }
        export class LifecycleCameraRepositoryObserver {
          public static class: java.lang.Class<androidx.camera.lifecycle.LifecycleCameraRepository.LifecycleCameraRepositoryObserver>;
          public onDestroy(param0: androidx.lifecycle.LifecycleOwner): void;
          public onStart(param0: androidx.lifecycle.LifecycleOwner): void;
          public onStop(param0: androidx.lifecycle.LifecycleOwner): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module lifecycle {
      export class ProcessCameraProvider extends androidx.camera.lifecycle.LifecycleCameraProvider {
        public static class: java.lang.Class<androidx.camera.lifecycle.ProcessCameraProvider>;
        public static getInstance(param0: globalAndroid.content.Context): com.google.common.util.concurrent.ListenableFuture<androidx.camera.lifecycle.ProcessCameraProvider>;
        public shutdown(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public unbind(param0: androidNative.Array<androidx.camera.core.UseCase>): void;
        public unbindAll(): void;
        public hasCamera(param0: androidx.camera.core.CameraSelector): boolean;
        public bindToLifecycle(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.camera.core.CameraSelector, param2: androidx.camera.core.UseCaseGroup): androidx.camera.core.Camera;
        public bindToLifecycle(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.camera.core.CameraSelector, param2: androidNative.Array<androidx.camera.core.UseCase>): androidx.camera.core.Camera;
        public isBound(param0: androidx.camera.core.UseCase): boolean;
        public static configureInstance(param0: androidx.camera.core.CameraXConfig): void;
        public getAvailableCameraInfos(): java.util.List<androidx.camera.core.CameraInfo>;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export abstract class AudioSpec {
        public static class: java.lang.Class<androidx.camera.video.AudioSpec>;
        public static SOURCE_FORMAT_AUTO: number;
        public static SOURCE_FORMAT_PCM_16BIT: number;
        public static CHANNEL_COUNT_AUTO: number;
        public static CHANNEL_COUNT_NONE: number;
        public static CHANNEL_COUNT_MONO: number;
        public static CHANNEL_COUNT_STEREO: number;
        public static SOURCE_AUTO: number;
        public static SOURCE_CAMCORDER: number;
        public static BITRATE_RANGE_AUTO: globalAndroid.util.Range<java.lang.Integer>;
        public static SAMPLE_RATE_RANGE_AUTO: globalAndroid.util.Range<java.lang.Integer>;
        public static NO_AUDIO: androidx.camera.video.AudioSpec;
        public getBitrate(): globalAndroid.util.Range<java.lang.Integer>;
        public static builder(): androidx.camera.video.AudioSpec.Builder;
        public getSampleRate(): globalAndroid.util.Range<java.lang.Integer>;
        public getSourceFormat(): number;
        public toBuilder(): androidx.camera.video.AudioSpec.Builder;
        public getSource(): number;
        public getChannelCount(): number;
      }
      export module AudioSpec {
        export abstract class Builder {
          public static class: java.lang.Class<androidx.camera.video.AudioSpec.Builder>;
          public setSampleRate(param0: globalAndroid.util.Range<java.lang.Integer>): androidx.camera.video.AudioSpec.Builder;
          public setSourceFormat(param0: number): androidx.camera.video.AudioSpec.Builder;
          public setSource(param0: number): androidx.camera.video.AudioSpec.Builder;
          public build(): androidx.camera.video.AudioSpec;
          public setChannelCount(param0: number): androidx.camera.video.AudioSpec.Builder;
          public setBitrate(param0: globalAndroid.util.Range<java.lang.Integer>): androidx.camera.video.AudioSpec.Builder;
        }
        export class ChannelCount {
          public static class: java.lang.Class<androidx.camera.video.AudioSpec.ChannelCount>;
          /**
           * Constructs a new instance of the androidx.camera.video.AudioSpec$ChannelCount interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
        export class Source {
          public static class: java.lang.Class<androidx.camera.video.AudioSpec.Source>;
          /**
           * Constructs a new instance of the androidx.camera.video.AudioSpec$Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export abstract class AudioStats {
        public static class: java.lang.Class<androidx.camera.video.AudioStats>;
        public static AUDIO_STATE_ACTIVE: number;
        public static AUDIO_STATE_DISABLED: number;
        public static AUDIO_STATE_SOURCE_SILENCED: number;
        public static AUDIO_STATE_ENCODER_ERROR: number;
        public hasAudio(): boolean;
        public getAudioState(): number;
        public hasError(): boolean;
        public getErrorCause(): java.lang.Throwable;
      }
      export module AudioStats {
        export class AudioState {
          public static class: java.lang.Class<androidx.camera.video.AudioStats.AudioState>;
          /**
           * Constructs a new instance of the androidx.camera.video.AudioStats$AudioState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class AutoValue_AudioSpec extends androidx.camera.video.AudioSpec {
        public static class: java.lang.Class<androidx.camera.video.AutoValue_AudioSpec>;
        public getBitrate(): globalAndroid.util.Range<java.lang.Integer>;
        public getSampleRate(): globalAndroid.util.Range<java.lang.Integer>;
        public getSourceFormat(): number;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toBuilder(): androidx.camera.video.AudioSpec.Builder;
        public toString(): string;
        public getSource(): number;
        public getChannelCount(): number;
      }
      export module AutoValue_AudioSpec {
        export class Builder extends androidx.camera.video.AudioSpec.Builder {
          public static class: java.lang.Class<androidx.camera.video.AutoValue_AudioSpec.Builder>;
          public setSampleRate(param0: globalAndroid.util.Range<java.lang.Integer>): androidx.camera.video.AudioSpec.Builder;
          public setSourceFormat(param0: number): androidx.camera.video.AudioSpec.Builder;
          public setSource(param0: number): androidx.camera.video.AudioSpec.Builder;
          public build(): androidx.camera.video.AudioSpec;
          public setChannelCount(param0: number): androidx.camera.video.AudioSpec.Builder;
          public setBitrate(param0: globalAndroid.util.Range<java.lang.Integer>): androidx.camera.video.AudioSpec.Builder;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class AutoValue_AudioStats extends androidx.camera.video.AudioStats {
        public static class: java.lang.Class<androidx.camera.video.AutoValue_AudioStats>;
        public getAudioState(): number;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getErrorCause(): java.lang.Throwable;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class AutoValue_FallbackStrategy_RuleStrategy extends androidx.camera.video.FallbackStrategy.RuleStrategy {
        public static class: java.lang.Class<androidx.camera.video.AutoValue_FallbackStrategy_RuleStrategy>;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class AutoValue_FileDescriptorOutputOptions_FileDescriptorOutputOptionsInternal extends androidx.camera.video.FileDescriptorOutputOptions.FileDescriptorOutputOptionsInternal {
        public static class: java.lang.Class<androidx.camera.video.AutoValue_FileDescriptorOutputOptions_FileDescriptorOutputOptionsInternal>;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
      export module AutoValue_FileDescriptorOutputOptions_FileDescriptorOutputOptionsInternal {
        export class Builder extends androidx.camera.video.FileDescriptorOutputOptions.FileDescriptorOutputOptionsInternal.Builder {
          public static class: java.lang.Class<androidx.camera.video.AutoValue_FileDescriptorOutputOptions_FileDescriptorOutputOptionsInternal.Builder>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class AutoValue_FileOutputOptions_FileOutputOptionsInternal extends androidx.camera.video.FileOutputOptions.FileOutputOptionsInternal {
        public static class: java.lang.Class<androidx.camera.video.AutoValue_FileOutputOptions_FileOutputOptionsInternal>;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
      export module AutoValue_FileOutputOptions_FileOutputOptionsInternal {
        export class Builder extends androidx.camera.video.FileOutputOptions.FileOutputOptionsInternal.Builder {
          public static class: java.lang.Class<androidx.camera.video.AutoValue_FileOutputOptions_FileOutputOptionsInternal.Builder>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class AutoValue_MediaSpec extends androidx.camera.video.MediaSpec {
        public static class: java.lang.Class<androidx.camera.video.AutoValue_MediaSpec>;
        public getOutputFormat(): number;
        public toBuilder(): androidx.camera.video.MediaSpec.Builder;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getVideoSpec(): androidx.camera.video.VideoSpec;
        public getAudioSpec(): androidx.camera.video.AudioSpec;
        public toString(): string;
      }
      export module AutoValue_MediaSpec {
        export class Builder extends androidx.camera.video.MediaSpec.Builder {
          public static class: java.lang.Class<androidx.camera.video.AutoValue_MediaSpec.Builder>;
          public setOutputFormat(param0: number): androidx.camera.video.MediaSpec.Builder;
          public setAudioSpec(param0: androidx.camera.video.AudioSpec): androidx.camera.video.MediaSpec.Builder;
          public setVideoSpec(param0: androidx.camera.video.VideoSpec): androidx.camera.video.MediaSpec.Builder;
          public build(): androidx.camera.video.MediaSpec;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class AutoValue_MediaStoreOutputOptions_MediaStoreOutputOptionsInternal extends androidx.camera.video.MediaStoreOutputOptions.MediaStoreOutputOptionsInternal {
        public static class: java.lang.Class<androidx.camera.video.AutoValue_MediaStoreOutputOptions_MediaStoreOutputOptionsInternal>;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
      export module AutoValue_MediaStoreOutputOptions_MediaStoreOutputOptionsInternal {
        export class Builder extends androidx.camera.video.MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder {
          public static class: java.lang.Class<androidx.camera.video.AutoValue_MediaStoreOutputOptions_MediaStoreOutputOptionsInternal.Builder>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class AutoValue_OutputResults extends androidx.camera.video.OutputResults {
        public static class: java.lang.Class<androidx.camera.video.AutoValue_OutputResults>;
        public getOutputUri(): globalAndroid.net.Uri;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class AutoValue_Quality_ConstantQuality extends androidx.camera.video.Quality.ConstantQuality {
        public static class: java.lang.Class<androidx.camera.video.AutoValue_Quality_ConstantQuality>;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class AutoValue_Recorder_RecordingRecord extends androidx.camera.video.Recorder.RecordingRecord {
        public static class: java.lang.Class<androidx.camera.video.AutoValue_Recorder_RecordingRecord>;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class AutoValue_RecordingStats extends androidx.camera.video.RecordingStats {
        public static class: java.lang.Class<androidx.camera.video.AutoValue_RecordingStats>;
        public getAudioStats(): androidx.camera.video.AudioStats;
        public hashCode(): number;
        public getNumBytesRecorded(): number;
        public equals(param0: any): boolean;
        public getRecordedDurationNanos(): number;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class AutoValue_StreamInfo extends androidx.camera.video.StreamInfo {
        public static class: java.lang.Class<androidx.camera.video.AutoValue_StreamInfo>;
        public getStreamState(): androidx.camera.video.StreamInfo.StreamState;
        public hashCode(): number;
        public getId(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class AutoValue_VideoSpec extends androidx.camera.video.VideoSpec {
        public static class: java.lang.Class<androidx.camera.video.AutoValue_VideoSpec>;
        public getBitrate(): globalAndroid.util.Range<java.lang.Integer>;
        public getQualitySelector(): androidx.camera.video.QualitySelector;
        public hashCode(): number;
        public getFrameRate(): globalAndroid.util.Range<java.lang.Integer>;
        public equals(param0: any): boolean;
        public toString(): string;
        public toBuilder(): androidx.camera.video.VideoSpec.Builder;
      }
      export module AutoValue_VideoSpec {
        export class Builder extends androidx.camera.video.VideoSpec.Builder {
          public static class: java.lang.Class<androidx.camera.video.AutoValue_VideoSpec.Builder>;
          public setQualitySelector(param0: androidx.camera.video.QualitySelector): androidx.camera.video.VideoSpec.Builder;
          public setFrameRate(param0: globalAndroid.util.Range<java.lang.Integer>): androidx.camera.video.VideoSpec.Builder;
          public build(): androidx.camera.video.VideoSpec;
          public setBitrate(param0: globalAndroid.util.Range<java.lang.Integer>): androidx.camera.video.VideoSpec.Builder;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class FallbackStrategy {
        public static class: java.lang.Class<androidx.camera.video.FallbackStrategy>;
        public static higherQualityOrLowerThan(param0: androidx.camera.video.Quality): androidx.camera.video.FallbackStrategy;
        public static lowerQualityOrHigherThan(param0: androidx.camera.video.Quality): androidx.camera.video.FallbackStrategy;
        public static lowerQualityThan(param0: androidx.camera.video.Quality): androidx.camera.video.FallbackStrategy;
        public static higherQualityThan(param0: androidx.camera.video.Quality): androidx.camera.video.FallbackStrategy;
      }
      export module FallbackStrategy {
        export abstract class RuleStrategy extends androidx.camera.video.FallbackStrategy {
          public static class: java.lang.Class<androidx.camera.video.FallbackStrategy.RuleStrategy>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class FileDescriptorOutputOptions extends androidx.camera.video.OutputOptions {
        public static class: java.lang.Class<androidx.camera.video.FileDescriptorOutputOptions>;
        public getParcelFileDescriptor(): globalAndroid.os.ParcelFileDescriptor;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
      export module FileDescriptorOutputOptions {
        export class Builder extends androidx.camera.video.OutputOptions.Builder<androidx.camera.video.FileDescriptorOutputOptions, androidx.camera.video.FileDescriptorOutputOptions.Builder> {
          public static class: java.lang.Class<androidx.camera.video.FileDescriptorOutputOptions.Builder>;
          public build(): androidx.camera.video.FileDescriptorOutputOptions;
          public constructor(param0: globalAndroid.os.ParcelFileDescriptor);
          public setFileSizeLimit(param0: number): any;
          public setFileSizeLimit(param0: number): androidx.camera.video.FileDescriptorOutputOptions.Builder;
        }
        export abstract class FileDescriptorOutputOptionsInternal extends androidx.camera.video.OutputOptions.OutputOptionsInternal {
          public static class: java.lang.Class<androidx.camera.video.FileDescriptorOutputOptions.FileDescriptorOutputOptionsInternal>;
        }
        export module FileDescriptorOutputOptionsInternal {
          export abstract class Builder extends androidx.camera.video.OutputOptions.OutputOptionsInternal.Builder<androidx.camera.video.FileDescriptorOutputOptions.FileDescriptorOutputOptionsInternal.Builder> {
            public static class: java.lang.Class<androidx.camera.video.FileDescriptorOutputOptions.FileDescriptorOutputOptionsInternal.Builder>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class FileOutputOptions extends androidx.camera.video.OutputOptions {
        public static class: java.lang.Class<androidx.camera.video.FileOutputOptions>;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getFile(): java.io.File;
        public toString(): string;
      }
      export module FileOutputOptions {
        export class Builder extends androidx.camera.video.OutputOptions.Builder<androidx.camera.video.FileOutputOptions, androidx.camera.video.FileOutputOptions.Builder> {
          public static class: java.lang.Class<androidx.camera.video.FileOutputOptions.Builder>;
          public build(): androidx.camera.video.FileOutputOptions;
          public setFileSizeLimit(param0: number): any;
          public setFileSizeLimit(param0: number): androidx.camera.video.FileOutputOptions.Builder;
          public constructor(param0: java.io.File);
        }
        export abstract class FileOutputOptionsInternal extends androidx.camera.video.OutputOptions.OutputOptionsInternal {
          public static class: java.lang.Class<androidx.camera.video.FileOutputOptions.FileOutputOptionsInternal>;
        }
        export module FileOutputOptionsInternal {
          export abstract class Builder extends androidx.camera.video.OutputOptions.OutputOptionsInternal.Builder<androidx.camera.video.FileOutputOptions.FileOutputOptionsInternal.Builder> {
            public static class: java.lang.Class<androidx.camera.video.FileOutputOptions.FileOutputOptionsInternal.Builder>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export abstract class MediaSpec {
        public static class: java.lang.Class<androidx.camera.video.MediaSpec>;
        public static OUTPUT_FORMAT_AUTO: number;
        public static OUTPUT_FORMAT_MPEG_4: number;
        public static OUTPUT_FORMAT_WEBM: number;
        public getOutputFormat(): number;
        public toBuilder(): androidx.camera.video.MediaSpec.Builder;
        public static outputFormatToAudioMime(param0: number): string;
        public static outputFormatToAudioProfile(param0: number): number;
        public getVideoSpec(): androidx.camera.video.VideoSpec;
        public static builder(): androidx.camera.video.MediaSpec.Builder;
        public getAudioSpec(): androidx.camera.video.AudioSpec;
        public static outputFormatToVideoMime(param0: number): string;
      }
      export module MediaSpec {
        export abstract class Builder {
          public static class: java.lang.Class<androidx.camera.video.MediaSpec.Builder>;
          public setOutputFormat(param0: number): androidx.camera.video.MediaSpec.Builder;
          public configureVideo(param0: androidx.core.util.Consumer<androidx.camera.video.VideoSpec.Builder>): androidx.camera.video.MediaSpec.Builder;
          public setAudioSpec(param0: androidx.camera.video.AudioSpec): androidx.camera.video.MediaSpec.Builder;
          public setVideoSpec(param0: androidx.camera.video.VideoSpec): androidx.camera.video.MediaSpec.Builder;
          public configureAudio(param0: androidx.core.util.Consumer<androidx.camera.video.AudioSpec.Builder>): androidx.camera.video.MediaSpec.Builder;
          public build(): androidx.camera.video.MediaSpec;
        }
        export class OutputFormat {
          public static class: java.lang.Class<androidx.camera.video.MediaSpec.OutputFormat>;
          /**
           * Constructs a new instance of the androidx.camera.video.MediaSpec$OutputFormat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class MediaStoreOutputOptions extends androidx.camera.video.OutputOptions {
        public static class: java.lang.Class<androidx.camera.video.MediaStoreOutputOptions>;
        public static EMPTY_CONTENT_VALUES: globalAndroid.content.ContentValues;
        public getContentValues(): globalAndroid.content.ContentValues;
        public hashCode(): number;
        public getCollectionUri(): globalAndroid.net.Uri;
        public equals(param0: any): boolean;
        public toString(): string;
        public getContentResolver(): globalAndroid.content.ContentResolver;
      }
      export module MediaStoreOutputOptions {
        export class Builder extends androidx.camera.video.OutputOptions.Builder<androidx.camera.video.MediaStoreOutputOptions, androidx.camera.video.MediaStoreOutputOptions.Builder> {
          public static class: java.lang.Class<androidx.camera.video.MediaStoreOutputOptions.Builder>;
          public constructor(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri);
          public build(): androidx.camera.video.MediaStoreOutputOptions;
          public setContentValues(param0: globalAndroid.content.ContentValues): androidx.camera.video.MediaStoreOutputOptions.Builder;
          public setFileSizeLimit(param0: number): any;
          public setFileSizeLimit(param0: number): androidx.camera.video.MediaStoreOutputOptions.Builder;
        }
        export abstract class MediaStoreOutputOptionsInternal extends androidx.camera.video.OutputOptions.OutputOptionsInternal {
          public static class: java.lang.Class<androidx.camera.video.MediaStoreOutputOptions.MediaStoreOutputOptionsInternal>;
        }
        export module MediaStoreOutputOptionsInternal {
          export abstract class Builder extends androidx.camera.video.OutputOptions.OutputOptionsInternal.Builder<androidx.camera.video.MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder> {
            public static class: java.lang.Class<androidx.camera.video.MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export abstract class OutputOptions {
        public static class: java.lang.Class<androidx.camera.video.OutputOptions>;
        public static FILE_SIZE_UNLIMITED: number;
        public getLocation(): globalAndroid.location.Location;
        public getFileSizeLimit(): number;
      }
      export module OutputOptions {
        export abstract class Builder<T, B> extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.video.OutputOptions.Builder<any, any>>;
          public setFileSizeLimit(param0: number): B;
          public setLocation(param0: globalAndroid.location.Location): B;
        }
        export abstract class OutputOptionsInternal {
          public static class: java.lang.Class<androidx.camera.video.OutputOptions.OutputOptionsInternal>;
        }
        export module OutputOptionsInternal {
          export abstract class Builder<B> extends java.lang.Object {
            public static class: java.lang.Class<androidx.camera.video.OutputOptions.OutputOptionsInternal.Builder<any>>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export abstract class OutputResults {
        public static class: java.lang.Class<androidx.camera.video.OutputResults>;
        public getOutputUri(): globalAndroid.net.Uri;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class PendingRecording {
        public static class: java.lang.Class<androidx.camera.video.PendingRecording>;
        public withAudioEnabled(): androidx.camera.video.PendingRecording;
        public start(param0: java.util.concurrent.Executor, param1: androidx.core.util.Consumer<androidx.camera.video.VideoRecordEvent>): androidx.camera.video.Recording;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class Quality {
        public static class: java.lang.Class<androidx.camera.video.Quality>;
        public static SD: androidx.camera.video.Quality;
        public static HD: androidx.camera.video.Quality;
        public static FHD: androidx.camera.video.Quality;
        public static UHD: androidx.camera.video.Quality;
        public static LOWEST: androidx.camera.video.Quality;
        public static HIGHEST: androidx.camera.video.Quality;
      }
      export module Quality {
        export abstract class ConstantQuality extends androidx.camera.video.Quality {
          public static class: java.lang.Class<androidx.camera.video.Quality.ConstantQuality>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class QualitySelector {
        public static class: java.lang.Class<androidx.camera.video.QualitySelector>;
        public static fromOrderedList(param0: java.util.List<androidx.camera.video.Quality>, param1: androidx.camera.video.FallbackStrategy): androidx.camera.video.QualitySelector;
        public static from(param0: androidx.camera.video.Quality): androidx.camera.video.QualitySelector;
        public static getSupportedQualities(param0: androidx.camera.core.CameraInfo): java.util.List<androidx.camera.video.Quality>;
        public static from(param0: androidx.camera.video.Quality, param1: androidx.camera.video.FallbackStrategy): androidx.camera.video.QualitySelector;
        public static isQualitySupported(param0: androidx.camera.core.CameraInfo, param1: androidx.camera.video.Quality): boolean;
        public toString(): string;
        public static getResolution(param0: androidx.camera.core.CameraInfo, param1: androidx.camera.video.Quality): any;
        public static fromOrderedList(param0: java.util.List<androidx.camera.video.Quality>): androidx.camera.video.QualitySelector;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class Recorder extends androidx.camera.video.VideoOutput {
        public static class: java.lang.Class<androidx.camera.video.Recorder>;
        public static DEFAULT_QUALITY_SELECTOR: androidx.camera.video.QualitySelector;
        public getStreamInfo(): androidx.camera.core.impl.Observable<androidx.camera.video.StreamInfo>;
        public getQualitySelector(): androidx.camera.video.QualitySelector;
        public onSurfaceRequested(param0: androidx.camera.core.SurfaceRequest, param1: androidx.camera.core.impl.Timebase): void;
        public getExecutor(): java.util.concurrent.Executor;
        public getMediaSpec(): androidx.camera.core.impl.Observable<androidx.camera.video.MediaSpec>;
        public prepareRecording(param0: globalAndroid.content.Context, param1: androidx.camera.video.FileOutputOptions): androidx.camera.video.PendingRecording;
        public prepareRecording(param0: globalAndroid.content.Context, param1: androidx.camera.video.FileDescriptorOutputOptions): androidx.camera.video.PendingRecording;
        public onSourceStateChanged(param0: androidx.camera.video.VideoOutput.SourceState): void;
        public onSurfaceRequested(param0: androidx.camera.core.SurfaceRequest): void;
        public prepareRecording(param0: globalAndroid.content.Context, param1: androidx.camera.video.MediaStoreOutputOptions): androidx.camera.video.PendingRecording;
      }
      export module Recorder {
        export class AudioState {
          public static class: java.lang.Class<androidx.camera.video.Recorder.AudioState>;
          public static INITIALIZING: androidx.camera.video.Recorder.AudioState;
          public static IDLING: androidx.camera.video.Recorder.AudioState;
          public static DISABLED: androidx.camera.video.Recorder.AudioState;
          public static ACTIVE: androidx.camera.video.Recorder.AudioState;
          public static ERROR: androidx.camera.video.Recorder.AudioState;
          public static valueOf(param0: string): androidx.camera.video.Recorder.AudioState;
          public static values(): androidNative.Array<androidx.camera.video.Recorder.AudioState>;
        }
        export class Builder {
          public static class: java.lang.Class<androidx.camera.video.Recorder.Builder>;
          public constructor();
          public setExecutor(param0: java.util.concurrent.Executor): androidx.camera.video.Recorder.Builder;
          public build(): androidx.camera.video.Recorder;
          public setQualitySelector(param0: androidx.camera.video.QualitySelector): androidx.camera.video.Recorder.Builder;
        }
        export abstract class RecordingRecord {
          public static class: java.lang.Class<androidx.camera.video.Recorder.RecordingRecord>;
          public finalize(): void;
          public close(): void;
        }
        export module RecordingRecord {
          export class AudioSourceSupplier {
            public static class: java.lang.Class<androidx.camera.video.Recorder.RecordingRecord.AudioSourceSupplier>;
            /**
             * Constructs a new instance of the androidx.camera.video.Recorder$RecordingRecord$AudioSourceSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { get(param0: androidx.camera.video.internal.AudioSource.Settings, param1: java.util.concurrent.Executor): androidx.camera.video.internal.AudioSource });
            public constructor();
            public get(param0: androidx.camera.video.internal.AudioSource.Settings, param1: java.util.concurrent.Executor): androidx.camera.video.internal.AudioSource;
          }
          export class MediaMuxerSupplier {
            public static class: java.lang.Class<androidx.camera.video.Recorder.RecordingRecord.MediaMuxerSupplier>;
            /**
             * Constructs a new instance of the androidx.camera.video.Recorder$RecordingRecord$MediaMuxerSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { get(param0: number, param1: androidx.core.util.Consumer<globalAndroid.net.Uri>): globalAndroid.media.MediaMuxer });
            public constructor();
            public get(param0: number, param1: androidx.core.util.Consumer<globalAndroid.net.Uri>): globalAndroid.media.MediaMuxer;
          }
        }
        export class State {
          public static class: java.lang.Class<androidx.camera.video.Recorder.State>;
          public static INITIALIZING: androidx.camera.video.Recorder.State;
          public static PENDING_RECORDING: androidx.camera.video.Recorder.State;
          public static PENDING_PAUSED: androidx.camera.video.Recorder.State;
          public static IDLING: androidx.camera.video.Recorder.State;
          public static RECORDING: androidx.camera.video.Recorder.State;
          public static PAUSED: androidx.camera.video.Recorder.State;
          public static STOPPING: androidx.camera.video.Recorder.State;
          public static RESETTING: androidx.camera.video.Recorder.State;
          public static ERROR: androidx.camera.video.Recorder.State;
          public static valueOf(param0: string): androidx.camera.video.Recorder.State;
          public static values(): androidNative.Array<androidx.camera.video.Recorder.State>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class Recording {
        public static class: java.lang.Class<androidx.camera.video.Recording>;
        public stop(): void;
        public close(): void;
        public resume(): void;
        public pause(): void;
        public finalize(): void;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export abstract class RecordingStats {
        public static class: java.lang.Class<androidx.camera.video.RecordingStats>;
        public getAudioStats(): androidx.camera.video.AudioStats;
        public getNumBytesRecorded(): number;
        public getRecordedDurationNanos(): number;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export abstract class StreamInfo {
        public static class: java.lang.Class<androidx.camera.video.StreamInfo>;
        public getStreamState(): androidx.camera.video.StreamInfo.StreamState;
        public getId(): number;
      }
      export module StreamInfo {
        export class StreamState {
          public static class: java.lang.Class<androidx.camera.video.StreamInfo.StreamState>;
          public static ACTIVE: androidx.camera.video.StreamInfo.StreamState;
          public static INACTIVE: androidx.camera.video.StreamInfo.StreamState;
          public static valueOf(param0: string): androidx.camera.video.StreamInfo.StreamState;
          public static values(): androidNative.Array<androidx.camera.video.StreamInfo.StreamState>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class VideoCapabilities {
        public static class: java.lang.Class<androidx.camera.video.VideoCapabilities>;
        public findHighestSupportedQualityFor(param0: any): androidx.camera.video.Quality;
        public static from(param0: androidx.camera.core.CameraInfo): androidx.camera.video.VideoCapabilities;
        public findHighestSupportedCamcorderProfileFor(param0: any): androidx.camera.core.impl.CamcorderProfileProxy;
        public isQualitySupported(param0: androidx.camera.video.Quality): boolean;
        public getSupportedQualities(): java.util.List<androidx.camera.video.Quality>;
        public getProfile(param0: androidx.camera.video.Quality): androidx.camera.core.impl.CamcorderProfileProxy;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class VideoCapture<T> extends androidx.camera.core.UseCase {
        public static class: java.lang.Class<androidx.camera.video.VideoCapture<any>>;
        public static withOutput(param0: androidx.camera.video.VideoOutput): androidx.camera.video.VideoCapture<any>;
        public onMergeConfig(param0: androidx.camera.core.impl.CameraInfoInternal, param1: androidx.camera.core.impl.UseCaseConfig.Builder<any, any, any>): androidx.camera.core.impl.UseCaseConfig<any>;
        public onStateAttached(): void;
        public onStateDetached(): void;
        public getUseCaseConfigBuilder(param0: androidx.camera.core.impl.Config): androidx.camera.core.impl.UseCaseConfig.Builder<any, any, any>;
        public setViewPortCropRect(param0: globalAndroid.graphics.Rect): void;
        public toString(): string;
        public getOutput(): androidx.camera.video.Recorder;
        public getDefaultConfig(param0: boolean, param1: androidx.camera.core.impl.UseCaseConfigFactory): androidx.camera.core.impl.UseCaseConfig<any>;
        public getTargetRotation(): number;
        public setTargetRotation(param0: number): void;
        public setProcessor(param0: androidx.camera.core.processing.SurfaceProcessorInternal): void;
        public onSuggestedResolutionUpdated(param0: any): any;
        public onDetached(): void;
      }
      export module VideoCapture {
        export class Builder<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.video.VideoCapture.Builder<any>>;
          public setZslDisabled(param0: boolean): any;
          public setTargetClass(param0: java.lang.Class<T>): any;
          public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.video.VideoCapture.Builder<T>;
          public setZslDisabled(param0: boolean): androidx.camera.video.VideoCapture.Builder<T>;
          public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.video.VideoCapture.Builder<T>;
          public setDefaultResolution(param0: any): any;
          public getMutableConfig(): androidx.camera.core.impl.MutableConfig;
          public getUseCaseConfig(): any;
          public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.video.VideoCapture.Builder<T>;
          public getUseCaseConfig(): androidx.camera.video.impl.VideoCaptureConfig<T>;
          public setSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): any;
          public setTargetClass(param0: java.lang.Class<androidx.camera.video.VideoCapture<T>>): androidx.camera.video.VideoCapture.Builder<T>;
          public setCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.video.VideoCapture.Builder<T>;
          public setBackgroundExecutor(param0: java.util.concurrent.Executor): any;
          public setTargetAspectRatio(param0: number): androidx.camera.video.VideoCapture.Builder<T>;
          public setTargetResolution(param0: any): androidx.camera.video.VideoCapture.Builder<T>;
          public setDefaultResolution(param0: any): androidx.camera.video.VideoCapture.Builder<T>;
          public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.video.VideoCapture.Builder<T>;
          public setMaxResolution(param0: any): any;
          public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): any;
          public setBackgroundExecutor(param0: java.util.concurrent.Executor): androidx.camera.video.VideoCapture.Builder<T>;
          public setDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): any;
          public setTargetRotation(param0: number): androidx.camera.video.VideoCapture.Builder<T>;
          public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): any;
          public setTargetRotation(param0: number): any;
          public setSurfaceOccupancyPriority(param0: number): androidx.camera.video.VideoCapture.Builder<T>;
          public static fromConfig(param0: androidx.camera.video.impl.VideoCaptureConfig<any>): androidx.camera.video.VideoCapture.Builder<any>;
          public setMaxResolution(param0: any): androidx.camera.video.VideoCapture.Builder<T>;
          public setCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): any;
          public setSurfaceOccupancyPriority(param0: number): any;
          public setTargetAspectRatio(param0: number): any;
          public build(): androidx.camera.video.VideoCapture<T>;
          public setTargetName(param0: string): any;
          public setUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): any;
          public setSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): androidx.camera.video.VideoCapture.Builder<T>;
          public setDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.video.VideoCapture.Builder<T>;
          public setTargetName(param0: string): androidx.camera.video.VideoCapture.Builder<T>;
          public build(): T;
          public setCameraSelector(param0: androidx.camera.core.CameraSelector): any;
          public setTargetResolution(param0: any): any;
        }
        export class Defaults extends androidx.camera.core.impl.ConfigProvider<androidx.camera.video.impl.VideoCaptureConfig<any>> {
          public static class: java.lang.Class<androidx.camera.video.VideoCapture.Defaults>;
          public constructor();
          public getConfig(): androidx.camera.video.impl.VideoCaptureConfig<any>;
          public getConfig(): any;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export class VideoOutput {
        public static class: java.lang.Class<androidx.camera.video.VideoOutput>;
        /**
         * Constructs a new instance of the androidx.camera.video.VideoOutput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSurfaceRequested(param0: androidx.camera.core.SurfaceRequest): void; onSurfaceRequested(param0: androidx.camera.core.SurfaceRequest, param1: androidx.camera.core.impl.Timebase): void; getStreamInfo(): androidx.camera.core.impl.Observable<androidx.camera.video.StreamInfo>; getMediaSpec(): androidx.camera.core.impl.Observable<androidx.camera.video.MediaSpec>; onSourceStateChanged(param0: androidx.camera.video.VideoOutput.SourceState): void });
        public constructor();
        public getStreamInfo(): androidx.camera.core.impl.Observable<androidx.camera.video.StreamInfo>;
        public onSurfaceRequested(param0: androidx.camera.core.SurfaceRequest, param1: androidx.camera.core.impl.Timebase): void;
        public getMediaSpec(): androidx.camera.core.impl.Observable<androidx.camera.video.MediaSpec>;
        public onSourceStateChanged(param0: androidx.camera.video.VideoOutput.SourceState): void;
        public onSurfaceRequested(param0: androidx.camera.core.SurfaceRequest): void;
      }
      export module VideoOutput {
        export class SourceState {
          public static class: java.lang.Class<androidx.camera.video.VideoOutput.SourceState>;
          public static ACTIVE_STREAMING: androidx.camera.video.VideoOutput.SourceState;
          public static ACTIVE_NON_STREAMING: androidx.camera.video.VideoOutput.SourceState;
          public static INACTIVE: androidx.camera.video.VideoOutput.SourceState;
          public static valueOf(param0: string): androidx.camera.video.VideoOutput.SourceState;
          public static values(): androidNative.Array<androidx.camera.video.VideoOutput.SourceState>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export abstract class VideoRecordEvent {
        public static class: java.lang.Class<androidx.camera.video.VideoRecordEvent>;
        public getRecordingStats(): androidx.camera.video.RecordingStats;
        public getOutputOptions(): androidx.camera.video.OutputOptions;
      }
      export module VideoRecordEvent {
        export class Finalize extends androidx.camera.video.VideoRecordEvent {
          public static class: java.lang.Class<androidx.camera.video.VideoRecordEvent.Finalize>;
          public static ERROR_NONE: number;
          public static ERROR_UNKNOWN: number;
          public static ERROR_FILE_SIZE_LIMIT_REACHED: number;
          public static ERROR_INSUFFICIENT_STORAGE: number;
          public static ERROR_SOURCE_INACTIVE: number;
          public static ERROR_INVALID_OUTPUT_OPTIONS: number;
          public static ERROR_ENCODING_FAILED: number;
          public static ERROR_RECORDER_ERROR: number;
          public static ERROR_NO_VALID_DATA: number;
          public getError(): number;
          public getOutputResults(): androidx.camera.video.OutputResults;
          public hasError(): boolean;
          public getCause(): java.lang.Throwable;
        }
        export module Finalize {
          export class VideoRecordError {
            public static class: java.lang.Class<androidx.camera.video.VideoRecordEvent.Finalize.VideoRecordError>;
            /**
             * Constructs a new instance of the androidx.camera.video.VideoRecordEvent$Finalize$VideoRecordError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
        export class Pause extends androidx.camera.video.VideoRecordEvent {
          public static class: java.lang.Class<androidx.camera.video.VideoRecordEvent.Pause>;
        }
        export class Resume extends androidx.camera.video.VideoRecordEvent {
          public static class: java.lang.Class<androidx.camera.video.VideoRecordEvent.Resume>;
        }
        export class Start extends androidx.camera.video.VideoRecordEvent {
          public static class: java.lang.Class<androidx.camera.video.VideoRecordEvent.Start>;
        }
        export class Status extends androidx.camera.video.VideoRecordEvent {
          public static class: java.lang.Class<androidx.camera.video.VideoRecordEvent.Status>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export abstract class VideoSpec {
        public static class: java.lang.Class<androidx.camera.video.VideoSpec>;
        public static FRAME_RATE_RANGE_AUTO: globalAndroid.util.Range<java.lang.Integer>;
        public static BITRATE_RANGE_AUTO: globalAndroid.util.Range<java.lang.Integer>;
        public static QUALITY_SELECTOR_AUTO: androidx.camera.video.QualitySelector;
        public getBitrate(): globalAndroid.util.Range<java.lang.Integer>;
        public getQualitySelector(): androidx.camera.video.QualitySelector;
        public static builder(): androidx.camera.video.VideoSpec.Builder;
        public getFrameRate(): globalAndroid.util.Range<java.lang.Integer>;
        public toBuilder(): androidx.camera.video.VideoSpec.Builder;
      }
      export module VideoSpec {
        export abstract class Builder {
          public static class: java.lang.Class<androidx.camera.video.VideoSpec.Builder>;
          public setQualitySelector(param0: androidx.camera.video.QualitySelector): androidx.camera.video.VideoSpec.Builder;
          public setFrameRate(param0: globalAndroid.util.Range<java.lang.Integer>): androidx.camera.video.VideoSpec.Builder;
          public build(): androidx.camera.video.VideoSpec;
          public setBitrate(param0: globalAndroid.util.Range<java.lang.Integer>): androidx.camera.video.VideoSpec.Builder;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module impl {
        export class VideoCaptureConfig<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.camera.video.impl.VideoCaptureConfig<any>>;
          public static OPTION_VIDEO_OUTPUT: androidx.camera.core.impl.Config.Option<androidx.camera.video.VideoOutput>;
          public static OPTION_VIDEO_ENCODER_INFO_FINDER: androidx.camera.core.impl.Config.Option<androidx.arch.core.util.Function<androidx.camera.video.internal.encoder.VideoEncoderConfig, androidx.camera.video.internal.encoder.VideoEncoderInfo>>;
          public findOptions(param0: string, param1: androidx.camera.core.impl.Config.OptionMatcher): void;
          public getMaxResolution(param0: any): any;
          public getDefaultSessionConfig(param0: androidx.camera.core.impl.SessionConfig): androidx.camera.core.impl.SessionConfig;
          public containsOption(param0: androidx.camera.core.impl.Config.Option<any>): boolean;
          public retrieveOptionWithPriority(param0: androidx.camera.core.impl.Config.Option<any>, param1: androidx.camera.core.impl.Config.OptionPriority): any;
          public constructor(param0: androidx.camera.core.impl.OptionsBundle);
          public static hasConflict(param0: androidx.camera.core.impl.Config.OptionPriority, param1: androidx.camera.core.impl.Config.OptionPriority): boolean;
          public getTargetResolution(param0: any): any;
          public getDefaultCaptureConfig(): androidx.camera.core.impl.CaptureConfig;
          public hasTargetAspectRatio(): boolean;
          public getTargetRotation(param0: number): number;
          public getInputFormat(): number;
          public getTargetClass(): java.lang.Class<T>;
          public getSupportedResolutions(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public isZslDisabled(param0: boolean): boolean;
          public getSupportedResolutions(param0: java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>): java.util.List<globalAndroid.util.Pair<java.lang.Integer, androidNative.Array<any>>>;
          public getCameraSelector(param0: androidx.camera.core.CameraSelector): androidx.camera.core.CameraSelector;
          public getSurfaceOccupancyPriority(): number;
          public getBackgroundExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
          public getTargetName(): string;
          public getTargetClass(param0: java.lang.Class<T>): java.lang.Class<T>;
          public getCaptureOptionUnpacker(): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
          public getSessionOptionUnpacker(param0: androidx.camera.core.impl.SessionConfig.OptionUnpacker): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
          public getBackgroundExecutor(): java.util.concurrent.Executor;
          public getTargetName(param0: string): string;
          public getVideoEncoderInfoFinder(): androidx.arch.core.util.Function<androidx.camera.video.internal.encoder.VideoEncoderConfig, androidx.camera.video.internal.encoder.VideoEncoderInfo>;
          public getCaptureOptionUnpacker(param0: androidx.camera.core.impl.CaptureConfig.OptionUnpacker): androidx.camera.core.impl.CaptureConfig.OptionUnpacker;
          public getAppTargetRotation(param0: number): number;
          public getDefaultSessionConfig(): androidx.camera.core.impl.SessionConfig;
          public getTargetFramerate(param0: globalAndroid.util.Range<java.lang.Integer>): globalAndroid.util.Range<java.lang.Integer>;
          public getCameraSelector(): androidx.camera.core.CameraSelector;
          public getUseCaseEventCallback(param0: androidx.camera.core.UseCase.EventCallback): androidx.camera.core.UseCase.EventCallback;
          public getOptionPriority(param0: androidx.camera.core.impl.Config.Option<any>): androidx.camera.core.impl.Config.OptionPriority;
          public getDefaultResolution(param0: any): any;
          public getTargetRotation(): number;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>, param1: any): any;
          public getTargetAspectRatio(): number;
          public getDefaultCaptureConfig(param0: androidx.camera.core.impl.CaptureConfig): androidx.camera.core.impl.CaptureConfig;
          public getSurfaceOccupancyPriority(param0: number): number;
          public listOptions(): java.util.Set<androidx.camera.core.impl.Config.Option<any>>;
          public getVideoOutput(): T;
          public getTargetResolution(): any;
          public retrieveOption(param0: androidx.camera.core.impl.Config.Option<any>): any;
          public getConfig(): androidx.camera.core.impl.Config;
          public getSessionOptionUnpacker(): androidx.camera.core.impl.SessionConfig.OptionUnpacker;
          public getMaxResolution(): any;
          public getDefaultResolution(): any;
          public getUseCaseEventCallback(): androidx.camera.core.UseCase.EventCallback;
          public getPriorities(param0: androidx.camera.core.impl.Config.Option<any>): java.util.Set<androidx.camera.core.impl.Config.OptionPriority>;
          public getTargetFramerate(): globalAndroid.util.Range<java.lang.Integer>;
          public static mergeConfigs(param0: androidx.camera.core.impl.Config, param1: androidx.camera.core.impl.Config): androidx.camera.core.impl.Config;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export class AudioSource {
          public static class: java.lang.Class<androidx.camera.video.internal.AudioSource>;
          public static COMMON_SAMPLE_RATES: java.util.List<java.lang.Integer>;
          public setBufferProvider(param0: androidx.camera.video.internal.BufferProvider<androidx.camera.video.internal.encoder.InputBuffer>): void;
          public setAudioSourceCallback(param0: java.util.concurrent.Executor, param1: androidx.camera.video.internal.AudioSource.AudioSourceCallback): void;
          public stop(): void;
          public constructor(param0: androidx.camera.video.internal.AudioSource.Settings, param1: java.util.concurrent.Executor, param2: globalAndroid.content.Context);
          public start(): void;
          public static isSettingsSupported(param0: number, param1: number, param2: number): boolean;
          public release(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        }
        export module AudioSource {
          export class AudioRecordingApi29Callback {
            public static class: java.lang.Class<androidx.camera.video.internal.AudioSource.AudioRecordingApi29Callback>;
            public onRecordingConfigChanged(param0: java.util.List<globalAndroid.media.AudioRecordingConfiguration>): void;
          }
          export class AudioSourceCallback {
            public static class: java.lang.Class<androidx.camera.video.internal.AudioSource.AudioSourceCallback>;
            /**
             * Constructs a new instance of the androidx.camera.video.internal.AudioSource$AudioSourceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSilenced(param0: boolean): void; onError(param0: java.lang.Throwable): void });
            public constructor();
            public onSilenced(param0: boolean): void;
            public onError(param0: java.lang.Throwable): void;
          }
          export class InternalState {
            public static class: java.lang.Class<androidx.camera.video.internal.AudioSource.InternalState>;
            public static CONFIGURED: androidx.camera.video.internal.AudioSource.InternalState;
            public static STARTED: androidx.camera.video.internal.AudioSource.InternalState;
            public static RELEASED: androidx.camera.video.internal.AudioSource.InternalState;
            public static values(): androidNative.Array<androidx.camera.video.internal.AudioSource.InternalState>;
            public static valueOf(param0: string): androidx.camera.video.internal.AudioSource.InternalState;
          }
          export abstract class Settings {
            public static class: java.lang.Class<androidx.camera.video.internal.AudioSource.Settings>;
            public getAudioSource(): number;
            public getSampleRate(): number;
            public toBuilder(): androidx.camera.video.internal.AudioSource.Settings.Builder;
            public static builder(): androidx.camera.video.internal.AudioSource.Settings.Builder;
            public getAudioFormat(): number;
            public getChannelCount(): number;
          }
          export module Settings {
            export abstract class Builder {
              public static class: java.lang.Class<androidx.camera.video.internal.AudioSource.Settings.Builder>;
              public setAudioSource(param0: number): androidx.camera.video.internal.AudioSource.Settings.Builder;
              public setChannelCount(param0: number): androidx.camera.video.internal.AudioSource.Settings.Builder;
              public build(): androidx.camera.video.internal.AudioSource.Settings;
              public setAudioFormat(param0: number): androidx.camera.video.internal.AudioSource.Settings.Builder;
              public setSampleRate(param0: number): androidx.camera.video.internal.AudioSource.Settings.Builder;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export class AudioSourceAccessException {
          public static class: java.lang.Class<androidx.camera.video.internal.AudioSourceAccessException>;
          public constructor(param0: string, param1: java.lang.Throwable);
          public constructor(param0: string);
          public constructor(param0: java.lang.Throwable);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export class AutoValue_AudioSource_Settings extends androidx.camera.video.internal.AudioSource.Settings {
          public static class: java.lang.Class<androidx.camera.video.internal.AutoValue_AudioSource_Settings>;
          public equals(param0: any): boolean;
          public getChannelCount(): number;
          public toString(): string;
          public toBuilder(): androidx.camera.video.internal.AudioSource.Settings.Builder;
          public getAudioSource(): number;
          public getSampleRate(): number;
          public getAudioFormat(): number;
          public hashCode(): number;
        }
        export module AutoValue_AudioSource_Settings {
          export class Builder extends androidx.camera.video.internal.AudioSource.Settings.Builder {
            public static class: java.lang.Class<androidx.camera.video.internal.AutoValue_AudioSource_Settings.Builder>;
            public setAudioFormat(param0: number): androidx.camera.video.internal.AudioSource.Settings.Builder;
            public setChannelCount(param0: number): androidx.camera.video.internal.AudioSource.Settings.Builder;
            public setAudioSource(param0: number): androidx.camera.video.internal.AudioSource.Settings.Builder;
            public setSampleRate(param0: number): androidx.camera.video.internal.AudioSource.Settings.Builder;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export class BufferProvider<T> extends androidx.camera.core.impl.Observable<androidx.camera.video.internal.BufferProvider.State> {
          public static class: java.lang.Class<androidx.camera.video.internal.BufferProvider<any>>;
          /**
           * Constructs a new instance of the androidx.camera.video.internal.BufferProvider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { acquireBuffer(): com.google.common.util.concurrent.ListenableFuture<any>; fetchData(): com.google.common.util.concurrent.ListenableFuture<any>; addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void; removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void });
          public constructor();
          public acquireBuffer(): com.google.common.util.concurrent.ListenableFuture<any>;
          public addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
          public fetchData(): com.google.common.util.concurrent.ListenableFuture<any>;
          public removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
        }
        export module BufferProvider {
          export class State {
            public static class: java.lang.Class<androidx.camera.video.internal.BufferProvider.State>;
            public static ACTIVE: androidx.camera.video.internal.BufferProvider.State;
            public static INACTIVE: androidx.camera.video.internal.BufferProvider.State;
            public static valueOf(param0: string): androidx.camera.video.internal.BufferProvider.State;
            public static values(): androidNative.Array<androidx.camera.video.internal.BufferProvider.State>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export class DebugUtils {
          public static class: java.lang.Class<androidx.camera.video.internal.DebugUtils>;
          public static dumpMediaCodecListForFormat(param0: globalAndroid.media.MediaCodecList, param1: globalAndroid.media.MediaFormat): string;
          public static dumpCodecCapabilities(param0: string, param1: globalAndroid.media.MediaCodec, param2: globalAndroid.media.MediaFormat): string;
          public static readableUs(param0: number): string;
          public static readableMs(param0: number): string;
          public static readableBufferInfo(param0: globalAndroid.media.MediaCodec.BufferInfo): string;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export class ResourceCreationException {
          public static class: java.lang.Class<androidx.camera.video.internal.ResourceCreationException>;
          public constructor(param0: string, param1: java.lang.Throwable);
          public constructor(param0: string);
          public constructor(param0: java.lang.Throwable);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export class SharedByteBuffer {
          public static class: java.lang.Class<androidx.camera.video.internal.SharedByteBuffer>;
          public get(): java.nio.ByteBuffer;
          public toString(): string;
          public finalize(): void;
          public close(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export class Api23Impl {
            public static class: java.lang.Class<androidx.camera.video.internal.compat.Api23Impl>;
            public static setAudioFormat(param0: globalAndroid.media.AudioRecord.Builder, param1: globalAndroid.media.AudioFormat): void;
            public static createAudioRecordBuilder(): globalAndroid.media.AudioRecord.Builder;
            public static setAudioSource(param0: globalAndroid.media.AudioRecord.Builder, param1: number): void;
            public static build(param0: globalAndroid.media.AudioRecord.Builder): globalAndroid.media.AudioRecord;
            public static setBufferSizeInBytes(param0: globalAndroid.media.AudioRecord.Builder, param1: number): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export class Api24Impl {
            public static class: java.lang.Class<androidx.camera.video.internal.compat.Api24Impl>;
            public static getTimestamp(param0: globalAndroid.media.AudioRecord, param1: globalAndroid.media.AudioTimestamp, param2: number): number;
            public static getClientAudioSessionId(param0: globalAndroid.media.AudioRecordingConfiguration): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export class Api26Impl {
            public static class: java.lang.Class<androidx.camera.video.internal.compat.Api26Impl>;
            public static createMediaMuxer(param0: java.io.FileDescriptor, param1: number): globalAndroid.media.MediaMuxer;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export class Api28Impl {
            public static class: java.lang.Class<androidx.camera.video.internal.compat.Api28Impl>;
            public static getQualityRange(param0: globalAndroid.media.MediaCodecInfo.EncoderCapabilities): globalAndroid.util.Range<java.lang.Integer>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export class Api29Impl {
            public static class: java.lang.Class<androidx.camera.video.internal.compat.Api29Impl>;
            public static registerAudioRecordingCallback(param0: globalAndroid.media.AudioRecord, param1: java.util.concurrent.Executor, param2: globalAndroid.media.AudioManager.AudioRecordingCallback): void;
            public static isClientSilenced(param0: globalAndroid.media.AudioRecordingConfiguration): boolean;
            public static unregisterAudioRecordingCallback(param0: globalAndroid.media.AudioRecord, param1: globalAndroid.media.AudioManager.AudioRecordingCallback): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export class Api31Impl {
            public static class: java.lang.Class<androidx.camera.video.internal.compat.Api31Impl>;
            public static getMinInputChannelCount(param0: globalAndroid.media.MediaCodecInfo.AudioCapabilities): number;
            public static setContext(param0: globalAndroid.media.AudioRecord.Builder, param1: globalAndroid.content.Context): void;
            public static getInputChannelCountRanges(param0: globalAndroid.media.MediaCodecInfo.AudioCapabilities): androidNative.Array<globalAndroid.util.Range<java.lang.Integer>>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class AudioEncoderIgnoresInputTimestampQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.AudioEncoderIgnoresInputTimestampQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class AudioTimestampFramePositionIncorrectQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.AudioTimestampFramePositionIncorrectQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class CameraUseInconsistentTimebaseQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.CameraUseInconsistentTimebaseQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class DeactivateEncoderSurfaceBeforeStopEncoderQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.DeactivateEncoderSurfaceBeforeStopEncoderQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class DeviceQuirks {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.DeviceQuirks>;
              public static getAll(): androidx.camera.core.impl.Quirks;
              public static get(param0: java.lang.Class<any>): androidx.camera.core.impl.Quirk;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class DeviceQuirksLoader {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.DeviceQuirksLoader>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class EncoderNotUsePersistentInputSurfaceQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.EncoderNotUsePersistentInputSurfaceQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class ExcludeStretchedVideoQualityQuirk extends androidx.camera.video.internal.compat.quirk.VideoQualityQuirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.ExcludeStretchedVideoQualityQuirk>;
              public constructor();
              public isProblematicVideoQuality(param0: androidx.camera.video.Quality): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class ImageCaptureFailedWhenVideoCaptureIsBoundQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.ImageCaptureFailedWhenVideoCaptureIsBoundQuirk>;
              public constructor();
              public static isVivo1805(): boolean;
              public static isItelW6004(): boolean;
              public static isBluStudioX10(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class MediaCodecInfoReportIncorrectInfoQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.MediaCodecInfoReportIncorrectInfoQuirk>;
              public constructor();
              public isUnSupportMediaCodecInfo(param0: globalAndroid.media.MediaFormat): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class MediaFormatMustNotUseFrameRateToFindEncoderQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.MediaFormatMustNotUseFrameRateToFindEncoderQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class MediaStoreVideoCannotWrite extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.MediaStoreVideoCannotWrite>;
              public constructor();
              public static isPositivoTwist2Pro(): boolean;
              public static isItelW6004(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class NegativeLatLongSavesIncorrectlyQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.NegativeLatLongSavesIncorrectlyQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class PreviewDelayWhenVideoCaptureIsBoundQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.PreviewDelayWhenVideoCaptureIsBoundQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class PreviewStretchWhenVideoCaptureIsBoundQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.PreviewStretchWhenVideoCaptureIsBoundQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class ReportedVideoQualityNotSupportedQuirk extends androidx.camera.video.internal.compat.quirk.VideoQualityQuirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.ReportedVideoQualityNotSupportedQuirk>;
              public constructor();
              public isProblematicVideoQuality(param0: androidx.camera.video.Quality): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class VideoEncoderCrashQuirk extends androidx.camera.video.internal.compat.quirk.VideoQualityQuirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.VideoEncoderCrashQuirk>;
              public constructor();
              public isProblematicVideoQuality(param0: androidx.camera.video.Quality): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class VideoEncoderSuspendDoesNotIncludeSuspendTimeQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.VideoEncoderSuspendDoesNotIncludeSuspendTimeQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module compat {
          export module quirk {
            export class VideoQualityQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.video.internal.compat.quirk.VideoQualityQuirk>;
              /**
               * Constructs a new instance of the androidx.camera.video.internal.compat.quirk.VideoQualityQuirk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { isProblematicVideoQuality(param0: androidx.camera.video.Quality): boolean });
              public constructor();
              public isProblematicVideoQuality(param0: androidx.camera.video.Quality): boolean;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module config {
          export class AudioConfigUtil {
            public static class: java.lang.Class<androidx.camera.video.internal.config.AudioConfigUtil>;
            public static resolveAudioSourceSettings(param0: androidx.camera.video.internal.config.MimeInfo, param1: androidx.camera.video.AudioSpec): androidx.camera.video.internal.AudioSource.Settings;
            public static resolveAudioMimeInfo(param0: androidx.camera.video.MediaSpec, param1: androidx.camera.core.impl.CamcorderProfileProxy): androidx.camera.video.internal.config.MimeInfo;
            public static resolveAudioEncoderConfig(param0: androidx.camera.video.internal.config.MimeInfo, param1: androidx.camera.core.impl.Timebase, param2: androidx.camera.video.internal.AudioSource.Settings, param3: androidx.camera.video.AudioSpec): androidx.camera.video.internal.encoder.AudioEncoderConfig;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module config {
          export class AudioEncoderConfigCamcorderProfileResolver extends androidx.core.util.Supplier<androidx.camera.video.internal.encoder.AudioEncoderConfig> {
            public static class: java.lang.Class<androidx.camera.video.internal.config.AudioEncoderConfigCamcorderProfileResolver>;
            public constructor(param0: string, param1: number, param2: androidx.camera.core.impl.Timebase, param3: androidx.camera.video.AudioSpec, param4: androidx.camera.video.internal.AudioSource.Settings, param5: androidx.camera.core.impl.CamcorderProfileProxy);
            public get(): androidx.camera.video.internal.encoder.AudioEncoderConfig;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module config {
          export class AudioEncoderConfigDefaultResolver extends androidx.core.util.Supplier<androidx.camera.video.internal.encoder.AudioEncoderConfig> {
            public static class: java.lang.Class<androidx.camera.video.internal.config.AudioEncoderConfigDefaultResolver>;
            public constructor(param0: string, param1: number, param2: androidx.camera.core.impl.Timebase, param3: androidx.camera.video.AudioSpec, param4: androidx.camera.video.internal.AudioSource.Settings);
            public get(): androidx.camera.video.internal.encoder.AudioEncoderConfig;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module config {
          export class AudioSourceSettingsCamcorderProfileResolver extends androidx.core.util.Supplier<androidx.camera.video.internal.AudioSource.Settings> {
            public static class: java.lang.Class<androidx.camera.video.internal.config.AudioSourceSettingsCamcorderProfileResolver>;
            public constructor(param0: androidx.camera.video.AudioSpec, param1: androidx.camera.core.impl.CamcorderProfileProxy);
            public get(): androidx.camera.video.internal.AudioSource.Settings;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module config {
          export class AudioSourceSettingsDefaultResolver extends androidx.core.util.Supplier<androidx.camera.video.internal.AudioSource.Settings> {
            public static class: java.lang.Class<androidx.camera.video.internal.config.AudioSourceSettingsDefaultResolver>;
            public constructor(param0: androidx.camera.video.AudioSpec);
            public get(): androidx.camera.video.internal.AudioSource.Settings;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module config {
          export class AutoValue_MimeInfo extends androidx.camera.video.internal.config.MimeInfo {
            public static class: java.lang.Class<androidx.camera.video.internal.config.AutoValue_MimeInfo>;
            public getMimeType(): string;
            public getCompatibleCamcorderProfile(): androidx.camera.core.impl.CamcorderProfileProxy;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getProfile(): number;
            public toString(): string;
          }
          export module AutoValue_MimeInfo {
            export class Builder extends androidx.camera.video.internal.config.MimeInfo.Builder {
              public static class: java.lang.Class<androidx.camera.video.internal.config.AutoValue_MimeInfo.Builder>;
              public setCompatibleCamcorderProfile(param0: androidx.camera.core.impl.CamcorderProfileProxy): androidx.camera.video.internal.config.MimeInfo.Builder;
              public setProfile(param0: number): androidx.camera.video.internal.config.MimeInfo.Builder;
              public build(): androidx.camera.video.internal.config.MimeInfo;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module config {
          export abstract class MimeInfo {
            public static class: java.lang.Class<androidx.camera.video.internal.config.MimeInfo>;
            public constructor();
            public getMimeType(): string;
            public getCompatibleCamcorderProfile(): androidx.camera.core.impl.CamcorderProfileProxy;
            public static builder(param0: string): androidx.camera.video.internal.config.MimeInfo.Builder;
            public getProfile(): number;
          }
          export module MimeInfo {
            export abstract class Builder {
              public static class: java.lang.Class<androidx.camera.video.internal.config.MimeInfo.Builder>;
              public constructor();
              public setCompatibleCamcorderProfile(param0: androidx.camera.core.impl.CamcorderProfileProxy): androidx.camera.video.internal.config.MimeInfo.Builder;
              public setProfile(param0: number): androidx.camera.video.internal.config.MimeInfo.Builder;
              public build(): androidx.camera.video.internal.config.MimeInfo;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module config {
          export class VideoConfigUtil {
            public static class: java.lang.Class<androidx.camera.video.internal.config.VideoConfigUtil>;
            public static resolveVideoMimeInfo(param0: androidx.camera.video.MediaSpec, param1: androidx.camera.core.impl.CamcorderProfileProxy): androidx.camera.video.internal.config.MimeInfo;
            public static resolveVideoEncoderConfig(param0: androidx.camera.video.internal.config.MimeInfo, param1: androidx.camera.core.impl.Timebase, param2: androidx.camera.video.VideoSpec, param3: any, param4: globalAndroid.util.Range<java.lang.Integer>): androidx.camera.video.internal.encoder.VideoEncoderConfig;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module config {
          export class VideoEncoderConfigCamcorderProfileResolver extends androidx.core.util.Supplier<androidx.camera.video.internal.encoder.VideoEncoderConfig> {
            public static class: java.lang.Class<androidx.camera.video.internal.config.VideoEncoderConfigCamcorderProfileResolver>;
            public constructor(param0: string, param1: androidx.camera.core.impl.Timebase, param2: androidx.camera.video.VideoSpec, param3: any, param4: androidx.camera.core.impl.CamcorderProfileProxy, param5: globalAndroid.util.Range<java.lang.Integer>);
            public get(): androidx.camera.video.internal.encoder.VideoEncoderConfig;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module config {
          export class VideoEncoderConfigDefaultResolver extends androidx.core.util.Supplier<androidx.camera.video.internal.encoder.VideoEncoderConfig> {
            public static class: java.lang.Class<androidx.camera.video.internal.config.VideoEncoderConfigDefaultResolver>;
            public constructor(param0: string, param1: androidx.camera.core.impl.Timebase, param2: androidx.camera.video.VideoSpec, param3: any, param4: globalAndroid.util.Range<java.lang.Integer>);
            public get(): androidx.camera.video.internal.encoder.VideoEncoderConfig;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export abstract class AudioEncoderConfig extends androidx.camera.video.internal.encoder.EncoderConfig {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.AudioEncoderConfig>;
            public getSampleRate(): number;
            public getMimeType(): string;
            public getInputTimebase(): androidx.camera.core.impl.Timebase;
            public static builder(): androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder;
            public getBitrate(): number;
            public toMediaFormat(): globalAndroid.media.MediaFormat;
            public getProfile(): number;
            public getChannelCount(): number;
          }
          export module AudioEncoderConfig {
            export abstract class Builder {
              public static class: java.lang.Class<androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder>;
              public setChannelCount(param0: number): androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder;
              public build(): androidx.camera.video.internal.encoder.AudioEncoderConfig;
              public setInputTimebase(param0: androidx.camera.core.impl.Timebase): androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder;
              public setMimeType(param0: string): androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder;
              public setSampleRate(param0: number): androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder;
              public setBitrate(param0: number): androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder;
              public setProfile(param0: number): androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class AudioEncoderInfo extends androidx.camera.video.internal.encoder.EncoderInfo {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.AudioEncoderInfo>;
            /**
             * Constructs a new instance of the androidx.camera.video.internal.encoder.AudioEncoderInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getBitrateRange(): globalAndroid.util.Range<java.lang.Integer>; getName(): string });
            public constructor();
            public getBitrateRange(): globalAndroid.util.Range<java.lang.Integer>;
            public getName(): string;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class AudioEncoderInfoImpl extends androidx.camera.video.internal.encoder.EncoderInfoImpl implements androidx.camera.video.internal.encoder.AudioEncoderInfo {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.AudioEncoderInfoImpl>;
            public getBitrateRange(): globalAndroid.util.Range<java.lang.Integer>;
            public static from(param0: androidx.camera.video.internal.encoder.AudioEncoderConfig): androidx.camera.video.internal.encoder.AudioEncoderInfoImpl;
            public getName(): string;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class AutoValue_AudioEncoderConfig extends androidx.camera.video.internal.encoder.AudioEncoderConfig {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.AutoValue_AudioEncoderConfig>;
            public getSampleRate(): number;
            public getMimeType(): string;
            public getInputTimebase(): androidx.camera.core.impl.Timebase;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getBitrate(): number;
            public toMediaFormat(): globalAndroid.media.MediaFormat;
            public getProfile(): number;
            public getChannelCount(): number;
            public toString(): string;
          }
          export module AutoValue_AudioEncoderConfig {
            export class Builder extends androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder {
              public static class: java.lang.Class<androidx.camera.video.internal.encoder.AutoValue_AudioEncoderConfig.Builder>;
              public setChannelCount(param0: number): androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder;
              public setInputTimebase(param0: androidx.camera.core.impl.Timebase): androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder;
              public setMimeType(param0: string): androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder;
              public setSampleRate(param0: number): androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder;
              public setBitrate(param0: number): androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder;
              public setProfile(param0: number): androidx.camera.video.internal.encoder.AudioEncoderConfig.Builder;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class AutoValue_VideoEncoderConfig extends androidx.camera.video.internal.encoder.VideoEncoderConfig {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.AutoValue_VideoEncoderConfig>;
            public getMimeType(): string;
            public getInputTimebase(): androidx.camera.core.impl.Timebase;
            public getResolution(): any;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getBitrate(): number;
            public toMediaFormat(): globalAndroid.media.MediaFormat;
            public getProfile(): number;
            public getIFrameInterval(): number;
            public toString(): string;
            public getColorFormat(): number;
            public getFrameRate(): number;
          }
          export module AutoValue_VideoEncoderConfig {
            export class Builder extends androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder {
              public static class: java.lang.Class<androidx.camera.video.internal.encoder.AutoValue_VideoEncoderConfig.Builder>;
              public setResolution(param0: any): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public setMimeType(param0: string): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public setProfile(param0: number): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public setColorFormat(param0: number): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public setIFrameInterval(param0: number): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public build(): androidx.camera.video.internal.encoder.VideoEncoderConfig;
              public setFrameRate(param0: number): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public setBitrate(param0: number): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public setInputTimebase(param0: androidx.camera.core.impl.Timebase): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class BufferCopiedEncodedData extends androidx.camera.video.internal.encoder.EncodedData {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.BufferCopiedEncodedData>;
            public getByteBuffer(): java.nio.ByteBuffer;
            public isKeyFrame(): boolean;
            public close(): void;
            public constructor(param0: androidx.camera.video.internal.encoder.EncodedData);
            public getBufferInfo(): globalAndroid.media.MediaCodec.BufferInfo;
            public size(): number;
            public getPresentationTimeUs(): number;
            public getClosedFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class EncodeException {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncodeException>;
            public static ERROR_UNKNOWN: number;
            public static ERROR_CODEC: number;
            public constructor(param0: number, param1: string, param2: java.lang.Throwable);
            public getErrorType(): number;
          }
          export module EncodeException {
            export class ErrorType {
              public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncodeException.ErrorType>;
              /**
               * Constructs a new instance of the androidx.camera.video.internal.encoder.EncodeException$ErrorType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class EncodedData {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncodedData>;
            /**
             * Constructs a new instance of the androidx.camera.video.internal.encoder.EncodedData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getByteBuffer(): java.nio.ByteBuffer; getBufferInfo(): globalAndroid.media.MediaCodec.BufferInfo; getPresentationTimeUs(): number; size(): number; isKeyFrame(): boolean; close(): void; getClosedFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void> });
            public constructor();
            public getByteBuffer(): java.nio.ByteBuffer;
            public isKeyFrame(): boolean;
            public close(): void;
            public getBufferInfo(): globalAndroid.media.MediaCodec.BufferInfo;
            public size(): number;
            public getPresentationTimeUs(): number;
            public getClosedFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class EncodedDataImpl extends androidx.camera.video.internal.encoder.EncodedData {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncodedDataImpl>;
            public getByteBuffer(): java.nio.ByteBuffer;
            public isKeyFrame(): boolean;
            public close(): void;
            public getBufferInfo(): globalAndroid.media.MediaCodec.BufferInfo;
            public size(): number;
            public getPresentationTimeUs(): number;
            public getClosedFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class Encoder {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.Encoder>;
            /**
             * Constructs a new instance of the androidx.camera.video.internal.encoder.Encoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getInput(): androidx.camera.video.internal.encoder.Encoder.EncoderInput; getEncoderInfo(): androidx.camera.video.internal.encoder.EncoderInfo; start(): void; stop(): void; stop(param0: number): void; pause(): void; release(): void; getReleasedFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>; setEncoderCallback(param0: androidx.camera.video.internal.encoder.EncoderCallback, param1: java.util.concurrent.Executor): void; requestKeyFrame(): void });
            public constructor();
            public getEncoderInfo(): androidx.camera.video.internal.encoder.EncoderInfo;
            public start(): void;
            public pause(): void;
            public setEncoderCallback(param0: androidx.camera.video.internal.encoder.EncoderCallback, param1: java.util.concurrent.Executor): void;
            public getReleasedFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
            public release(): void;
            public stop(): void;
            public getInput(): androidx.camera.video.internal.encoder.Encoder.EncoderInput;
            public stop(param0: number): void;
            public requestKeyFrame(): void;
          }
          export module Encoder {
            export class ByteBufferInput extends java.lang.Object {
              public static class: java.lang.Class<androidx.camera.video.internal.encoder.Encoder.ByteBufferInput>;
              /**
               * Constructs a new instance of the androidx.camera.video.internal.encoder.Encoder$ByteBufferInput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { acquireBuffer(): com.google.common.util.concurrent.ListenableFuture<any>; fetchData(): com.google.common.util.concurrent.ListenableFuture<any>; addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void; removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void });
              public constructor();
              public removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
              public addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
              public acquireBuffer(): com.google.common.util.concurrent.ListenableFuture<any>;
              public fetchData(): com.google.common.util.concurrent.ListenableFuture<any>;
            }
            export class EncoderInput {
              public static class: java.lang.Class<androidx.camera.video.internal.encoder.Encoder.EncoderInput>;
              /**
               * Constructs a new instance of the androidx.camera.video.internal.encoder.Encoder$EncoderInput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class SurfaceInput extends androidx.camera.video.internal.encoder.Encoder.EncoderInput {
              public static class: java.lang.Class<androidx.camera.video.internal.encoder.Encoder.SurfaceInput>;
              /**
               * Constructs a new instance of the androidx.camera.video.internal.encoder.Encoder$SurfaceInput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { setOnSurfaceUpdateListener(param0: java.util.concurrent.Executor, param1: androidx.camera.video.internal.encoder.Encoder.SurfaceInput.OnSurfaceUpdateListener): void });
              public constructor();
              public setOnSurfaceUpdateListener(param0: java.util.concurrent.Executor, param1: androidx.camera.video.internal.encoder.Encoder.SurfaceInput.OnSurfaceUpdateListener): void;
            }
            export module SurfaceInput {
              export class OnSurfaceUpdateListener {
                public static class: java.lang.Class<androidx.camera.video.internal.encoder.Encoder.SurfaceInput.OnSurfaceUpdateListener>;
                /**
                 * Constructs a new instance of the androidx.camera.video.internal.encoder.Encoder$SurfaceInput$OnSurfaceUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onSurfaceUpdate(param0: globalAndroid.view.Surface): void });
                public constructor();
                public onSurfaceUpdate(param0: globalAndroid.view.Surface): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class EncoderCallback {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncoderCallback>;
            /**
             * Constructs a new instance of the androidx.camera.video.internal.encoder.EncoderCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onEncodeStart(): void; onEncodeStop(): void; onEncodePaused(): void; onEncodeError(param0: androidx.camera.video.internal.encoder.EncodeException): void; onEncodedData(param0: androidx.camera.video.internal.encoder.EncodedData): void; onOutputConfigUpdate(param0: androidx.camera.video.internal.encoder.OutputConfig): void; '<clinit>'(): void });
            public constructor();
            public static EMPTY: androidx.camera.video.internal.encoder.EncoderCallback;
            public onOutputConfigUpdate(param0: androidx.camera.video.internal.encoder.OutputConfig): void;
            public onEncodeError(param0: androidx.camera.video.internal.encoder.EncodeException): void;
            public onEncodedData(param0: androidx.camera.video.internal.encoder.EncodedData): void;
            public onEncodeStart(): void;
            public onEncodePaused(): void;
            public onEncodeStop(): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class EncoderConfig {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncoderConfig>;
            /**
             * Constructs a new instance of the androidx.camera.video.internal.encoder.EncoderConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getMimeType(): string; getProfile(): number; getInputTimebase(): androidx.camera.core.impl.Timebase; toMediaFormat(): globalAndroid.media.MediaFormat; '<clinit>'(): void });
            public constructor();
            public static CODEC_PROFILE_NONE: number;
            public getMimeType(): string;
            public getInputTimebase(): androidx.camera.core.impl.Timebase;
            public toMediaFormat(): globalAndroid.media.MediaFormat;
            public getProfile(): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class EncoderFactory {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncoderFactory>;
            /**
             * Constructs a new instance of the androidx.camera.video.internal.encoder.EncoderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { createEncoder(param0: java.util.concurrent.Executor, param1: androidx.camera.video.internal.encoder.EncoderConfig): androidx.camera.video.internal.encoder.Encoder });
            public constructor();
            public createEncoder(param0: java.util.concurrent.Executor, param1: androidx.camera.video.internal.encoder.EncoderConfig): androidx.camera.video.internal.encoder.Encoder;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class EncoderImpl extends androidx.camera.video.internal.encoder.Encoder {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncoderImpl>;
            public getEncoderInfo(): androidx.camera.video.internal.encoder.EncoderInfo;
            public start(): void;
            public pause(): void;
            public setEncoderCallback(param0: androidx.camera.video.internal.encoder.EncoderCallback, param1: java.util.concurrent.Executor): void;
            public signalSourceStopped(): void;
            public getReleasedFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
            public release(): void;
            public stop(): void;
            public getInput(): androidx.camera.video.internal.encoder.Encoder.EncoderInput;
            public stop(param0: number): void;
            public constructor(param0: java.util.concurrent.Executor, param1: androidx.camera.video.internal.encoder.EncoderConfig);
            public requestKeyFrame(): void;
          }
          export module EncoderImpl {
            export class Api23Impl {
              public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncoderImpl.Api23Impl>;
            }
            export class ByteBufferInput extends androidx.camera.video.internal.encoder.Encoder.ByteBufferInput {
              public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncoderImpl.ByteBufferInput>;
              public acquireBuffer(): com.google.common.util.concurrent.ListenableFuture<androidx.camera.video.internal.encoder.InputBuffer>;
              public removeObserver(param0: androidx.camera.core.impl.Observable.Observer<any>): void;
              public addObserver(param0: java.util.concurrent.Executor, param1: androidx.camera.core.impl.Observable.Observer<any>): void;
              public fetchData(): com.google.common.util.concurrent.ListenableFuture<androidx.camera.video.internal.BufferProvider.State>;
              public acquireBuffer(): com.google.common.util.concurrent.ListenableFuture<any>;
              public fetchData(): com.google.common.util.concurrent.ListenableFuture<any>;
            }
            export class InternalState {
              public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncoderImpl.InternalState>;
              public static CONFIGURED: androidx.camera.video.internal.encoder.EncoderImpl.InternalState;
              public static STARTED: androidx.camera.video.internal.encoder.EncoderImpl.InternalState;
              public static PAUSED: androidx.camera.video.internal.encoder.EncoderImpl.InternalState;
              public static STOPPING: androidx.camera.video.internal.encoder.EncoderImpl.InternalState;
              public static PENDING_START: androidx.camera.video.internal.encoder.EncoderImpl.InternalState;
              public static PENDING_START_PAUSED: androidx.camera.video.internal.encoder.EncoderImpl.InternalState;
              public static PENDING_RELEASE: androidx.camera.video.internal.encoder.EncoderImpl.InternalState;
              public static ERROR: androidx.camera.video.internal.encoder.EncoderImpl.InternalState;
              public static RELEASED: androidx.camera.video.internal.encoder.EncoderImpl.InternalState;
              public static values(): androidNative.Array<androidx.camera.video.internal.encoder.EncoderImpl.InternalState>;
              public static valueOf(param0: string): androidx.camera.video.internal.encoder.EncoderImpl.InternalState;
            }
            export class MediaCodecCallback {
              public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncoderImpl.MediaCodecCallback>;
              public onOutputFormatChanged(param0: globalAndroid.media.MediaCodec, param1: globalAndroid.media.MediaFormat): void;
              public onInputBufferAvailable(param0: globalAndroid.media.MediaCodec, param1: number): void;
              public onError(param0: globalAndroid.media.MediaCodec, param1: globalAndroid.media.MediaCodec.CodecException): void;
              public onOutputBufferAvailable(param0: globalAndroid.media.MediaCodec, param1: number, param2: globalAndroid.media.MediaCodec.BufferInfo): void;
            }
            export class SurfaceInput extends androidx.camera.video.internal.encoder.Encoder.SurfaceInput {
              public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncoderImpl.SurfaceInput>;
              public setOnSurfaceUpdateListener(param0: java.util.concurrent.Executor, param1: androidx.camera.video.internal.encoder.Encoder.SurfaceInput.OnSurfaceUpdateListener): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class EncoderInfo {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncoderInfo>;
            /**
             * Constructs a new instance of the androidx.camera.video.internal.encoder.EncoderInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getName(): string });
            public constructor();
            public getName(): string;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export abstract class EncoderInfoImpl extends androidx.camera.video.internal.encoder.EncoderInfo {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.EncoderInfoImpl>;
            public mCodecCapabilities: globalAndroid.media.MediaCodecInfo.CodecCapabilities;
            public getName(): string;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class InputBuffer {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.InputBuffer>;
            /**
             * Constructs a new instance of the androidx.camera.video.internal.encoder.InputBuffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getByteBuffer(): java.nio.ByteBuffer; setPresentationTimeUs(param0: number): void; setEndOfStream(param0: boolean): void; submit(): boolean; cancel(): boolean; getTerminationFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void> });
            public constructor();
            public getByteBuffer(): java.nio.ByteBuffer;
            public setEndOfStream(param0: boolean): void;
            public setPresentationTimeUs(param0: number): void;
            public getTerminationFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
            public submit(): boolean;
            public cancel(): boolean;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class InputBufferImpl extends androidx.camera.video.internal.encoder.InputBuffer {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.InputBufferImpl>;
            public getByteBuffer(): java.nio.ByteBuffer;
            public setEndOfStream(param0: boolean): void;
            public setPresentationTimeUs(param0: number): void;
            public getTerminationFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
            public submit(): boolean;
            public cancel(): boolean;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class InvalidConfigException {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.InvalidConfigException>;
            public constructor(param0: java.lang.Throwable);
            public constructor(param0: string, param1: java.lang.Throwable);
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class OutputConfig {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.OutputConfig>;
            /**
             * Constructs a new instance of the androidx.camera.video.internal.encoder.OutputConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getMediaFormat(): globalAndroid.media.MediaFormat });
            public constructor();
            public getMediaFormat(): globalAndroid.media.MediaFormat;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class SystemTimeProvider extends androidx.camera.video.internal.encoder.TimeProvider {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.SystemTimeProvider>;
            public uptimeUs(): number;
            public constructor();
            public realtimeUs(): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class TimeProvider {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.TimeProvider>;
            /**
             * Constructs a new instance of the androidx.camera.video.internal.encoder.TimeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { uptimeUs(): number; realtimeUs(): number });
            public constructor();
            public uptimeUs(): number;
            public realtimeUs(): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export abstract class VideoEncoderConfig extends androidx.camera.video.internal.encoder.EncoderConfig {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.VideoEncoderConfig>;
            public getMimeType(): string;
            public getInputTimebase(): androidx.camera.core.impl.Timebase;
            public getResolution(): any;
            public static builder(): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
            public getBitrate(): number;
            public toMediaFormat(): globalAndroid.media.MediaFormat;
            public getProfile(): number;
            public getIFrameInterval(): number;
            public getColorFormat(): number;
            public getFrameRate(): number;
          }
          export module VideoEncoderConfig {
            export abstract class Builder {
              public static class: java.lang.Class<androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder>;
              public setResolution(param0: any): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public setMimeType(param0: string): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public setProfile(param0: number): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public setColorFormat(param0: number): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public setIFrameInterval(param0: number): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public build(): androidx.camera.video.internal.encoder.VideoEncoderConfig;
              public setFrameRate(param0: number): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public setBitrate(param0: number): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
              public setInputTimebase(param0: androidx.camera.core.impl.Timebase): androidx.camera.video.internal.encoder.VideoEncoderConfig.Builder;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class VideoEncoderInfo extends androidx.camera.video.internal.encoder.EncoderInfo {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.VideoEncoderInfo>;
            /**
             * Constructs a new instance of the androidx.camera.video.internal.encoder.VideoEncoderInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getSupportedWidths(): globalAndroid.util.Range<java.lang.Integer>; getSupportedHeights(): globalAndroid.util.Range<java.lang.Integer>; getSupportedWidthsFor(param0: number): globalAndroid.util.Range<java.lang.Integer>; getSupportedHeightsFor(param0: number): globalAndroid.util.Range<java.lang.Integer>; getWidthAlignment(): number; getHeightAlignment(): number; getName(): string });
            public constructor();
            public getSupportedWidthsFor(param0: number): globalAndroid.util.Range<java.lang.Integer>;
            public getSupportedWidths(): globalAndroid.util.Range<java.lang.Integer>;
            public getSupportedHeightsFor(param0: number): globalAndroid.util.Range<java.lang.Integer>;
            public getHeightAlignment(): number;
            public getSupportedHeights(): globalAndroid.util.Range<java.lang.Integer>;
            public getWidthAlignment(): number;
            public getName(): string;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module encoder {
          export class VideoEncoderInfoImpl extends androidx.camera.video.internal.encoder.EncoderInfoImpl implements androidx.camera.video.internal.encoder.VideoEncoderInfo {
            public static class: java.lang.Class<androidx.camera.video.internal.encoder.VideoEncoderInfoImpl>;
            public static from(param0: androidx.camera.video.internal.encoder.VideoEncoderConfig): androidx.camera.video.internal.encoder.VideoEncoderInfoImpl;
            public getSupportedWidthsFor(param0: number): globalAndroid.util.Range<java.lang.Integer>;
            public getSupportedWidths(): globalAndroid.util.Range<java.lang.Integer>;
            public getSupportedHeightsFor(param0: number): globalAndroid.util.Range<java.lang.Integer>;
            public getHeightAlignment(): number;
            public getSupportedHeights(): globalAndroid.util.Range<java.lang.Integer>;
            public getWidthAlignment(): number;
            public getName(): string;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module utils {
          export class OutputUtil {
            public static class: java.lang.Class<androidx.camera.video.internal.utils.OutputUtil>;
            public static createParentFolder(param0: java.io.File): boolean;
            public static getAbsolutePathFromUri(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri, param2: string): string;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module workaround {
          export class CorrectNegativeLatLongForMediaMuxer {
            public static class: java.lang.Class<androidx.camera.video.internal.workaround.CorrectNegativeLatLongForMediaMuxer>;
            public static adjustGeoLocation(param0: number, param1: number): globalAndroid.util.Pair<java.lang.Double, java.lang.Double>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module workaround {
          export class EncoderFinder {
            public static class: java.lang.Class<androidx.camera.video.internal.workaround.EncoderFinder>;
            public constructor();
            public findEncoder(param0: globalAndroid.media.MediaFormat): globalAndroid.media.MediaCodec;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module workaround {
          export class VideoEncoderInfoWrapper extends androidx.camera.video.internal.encoder.VideoEncoderInfo {
            public static class: java.lang.Class<androidx.camera.video.internal.workaround.VideoEncoderInfoWrapper>;
            public getSupportedWidthsFor(param0: number): globalAndroid.util.Range<java.lang.Integer>;
            public getSupportedWidths(): globalAndroid.util.Range<java.lang.Integer>;
            public getSupportedHeightsFor(param0: number): globalAndroid.util.Range<java.lang.Integer>;
            public getHeightAlignment(): number;
            public static from(param0: androidx.camera.video.internal.encoder.VideoEncoderInfo, param1: any): androidx.camera.video.internal.encoder.VideoEncoderInfo;
            public getSupportedHeights(): globalAndroid.util.Range<java.lang.Integer>;
            public getWidthAlignment(): number;
            public getName(): string;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module video {
      export module internal {
        export module workaround {
          export class VideoTimebaseConverter {
            public static class: java.lang.Class<androidx.camera.video.internal.workaround.VideoTimebaseConverter>;
            public constructor(param0: androidx.camera.video.internal.encoder.TimeProvider, param1: androidx.camera.core.impl.Timebase);
            public convertToUptimeUs(param0: number): number;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export abstract class CameraController {
        public static class: java.lang.Class<androidx.camera.view.CameraController>;
        public static COORDINATE_SYSTEM_VIEW_REFERENCED: number;
        public static TAP_TO_FOCUS_NOT_STARTED: number;
        public static TAP_TO_FOCUS_STARTED: number;
        public static TAP_TO_FOCUS_FOCUSED: number;
        public static TAP_TO_FOCUS_NOT_FOCUSED: number;
        public static TAP_TO_FOCUS_FAILED: number;
        public static IMAGE_CAPTURE: number;
        public static IMAGE_ANALYSIS: number;
        public static VIDEO_CAPTURE: number;
        public setImageCaptureTargetSize(param0: androidx.camera.view.CameraController.OutputSize): void;
        public isPinchToZoomEnabled(): boolean;
        public isTapToFocusEnabled(): boolean;
        public isImageCaptureEnabled(): boolean;
        public getVideoCaptureTargetSize(): androidx.camera.view.CameraController.OutputSize;
        public getZoomState(): androidx.lifecycle.LiveData<androidx.camera.core.ZoomState>;
        public getInitializationFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public getImageAnalysisBackpressureStrategy(): number;
        public setImageAnalysisImageQueueDepth(param0: number): void;
        public isImageAnalysisEnabled(): boolean;
        public setLinearZoom(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public setImageAnalysisBackgroundExecutor(param0: java.util.concurrent.Executor): void;
        public getPreviewTargetSize(): androidx.camera.view.CameraController.OutputSize;
        public setPinchToZoomEnabled(param0: boolean): void;
        public setImageCaptureIoExecutor(param0: java.util.concurrent.Executor): void;
        public hasCamera(param0: androidx.camera.core.CameraSelector): boolean;
        public enableTorch(param0: boolean): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public getCameraInfo(): androidx.camera.core.CameraInfo;
        public getTorchState(): androidx.lifecycle.LiveData<java.lang.Integer>;
        public clearImageAnalysisAnalyzer(): void;
        public isVideoCaptureEnabled(): boolean;
        public setZoomRatio(param0: number): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public takePicture(param0: java.util.concurrent.Executor, param1: androidx.camera.core.ImageCapture.OnImageCapturedCallback): void;
        public setImageAnalysisAnalyzer(param0: java.util.concurrent.Executor, param1: androidx.camera.core.ImageAnalysis.Analyzer): void;
        public setImageAnalysisBackpressureStrategy(param0: number): void;
        public getCameraControl(): androidx.camera.core.CameraControl;
        public setEffects(param0: java.util.List<androidx.camera.core.CameraEffect>): void;
        public getImageAnalysisTargetSize(): androidx.camera.view.CameraController.OutputSize;
        public getImageCaptureIoExecutor(): java.util.concurrent.Executor;
        public setImageAnalysisTargetSize(param0: androidx.camera.view.CameraController.OutputSize): void;
        public setImageCaptureFlashMode(param0: number): void;
        public getImageCaptureTargetSize(): androidx.camera.view.CameraController.OutputSize;
        public setPreviewTargetSize(param0: androidx.camera.view.CameraController.OutputSize): void;
        public getImageAnalysisImageQueueDepth(): number;
        public getImageAnalysisBackgroundExecutor(): java.util.concurrent.Executor;
        public startRecording(param0: androidx.camera.view.video.OutputFileOptions, param1: java.util.concurrent.Executor, param2: androidx.camera.view.video.OnVideoSavedCallback): void;
        public setVideoCaptureTargetSize(param0: androidx.camera.view.CameraController.OutputSize): void;
        public setCameraSelector(param0: androidx.camera.core.CameraSelector): void;
        public createUseCaseGroup(): androidx.camera.core.UseCaseGroup;
        public setEnabledUseCases(param0: number): void;
        public stopRecording(): void;
        public isRecording(): boolean;
        public setImageCaptureMode(param0: number): void;
        public getTapToFocusState(): androidx.lifecycle.LiveData<java.lang.Integer>;
        public getCameraSelector(): androidx.camera.core.CameraSelector;
        public getImageCaptureMode(): number;
        public takePicture(param0: androidx.camera.core.ImageCapture.OutputFileOptions, param1: java.util.concurrent.Executor, param2: androidx.camera.core.ImageCapture.OnImageSavedCallback): void;
        public setTapToFocusEnabled(param0: boolean): void;
        public getImageCaptureFlashMode(): number;
      }
      export module CameraController {
        export class Api30Impl {
          public static class: java.lang.Class<androidx.camera.view.CameraController.Api30Impl>;
        }
        export class OutputSize {
          public static class: java.lang.Class<androidx.camera.view.CameraController.OutputSize>;
          public static UNASSIGNED_ASPECT_RATIO: number;
          public getAspectRatio(): number;
          public toString(): string;
          public getResolution(): any;
          public constructor(param0: any);
          public constructor(param0: number);
        }
        export module OutputSize {
          export class OutputAspectRatio {
            public static class: java.lang.Class<androidx.camera.view.CameraController.OutputSize.OutputAspectRatio>;
            /**
             * Constructs a new instance of the androidx.camera.view.CameraController$OutputSize$OutputAspectRatio interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
        export class TapToFocusStates {
          public static class: java.lang.Class<androidx.camera.view.CameraController.TapToFocusStates>;
          /**
           * Constructs a new instance of the androidx.camera.view.CameraController$TapToFocusStates interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
        export class UseCases {
          public static class: java.lang.Class<androidx.camera.view.CameraController.UseCases>;
          /**
           * Constructs a new instance of the androidx.camera.view.CameraController$UseCases interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export class FlashModeConverter {
        public static class: java.lang.Class<androidx.camera.view.FlashModeConverter>;
        public static nameOf(param0: number): string;
        public static valueOf(param0: string): number;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export class ForwardingLiveData<T> extends androidx.lifecycle.MediatorLiveData<any> {
        public static class: java.lang.Class<androidx.camera.view.ForwardingLiveData<any>>;
        public getValue(): any;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export class LifecycleCameraController extends androidx.camera.view.CameraController {
        public static class: java.lang.Class<androidx.camera.view.LifecycleCameraController>;
        public bindToLifecycle(param0: androidx.lifecycle.LifecycleOwner): void;
        public constructor(param0: globalAndroid.content.Context);
        public unbind(): void;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export class PreviewStreamStateObserver extends androidx.camera.core.impl.Observable.Observer<androidx.camera.core.impl.CameraInternal.State> {
        public static class: java.lang.Class<androidx.camera.view.PreviewStreamStateObserver>;
        public onNewData(param0: androidx.camera.core.impl.CameraInternal.State): void;
        public onNewData(param0: any): void;
        public onError(param0: java.lang.Throwable): void;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export class PreviewTransformation {
        public static class: java.lang.Class<androidx.camera.view.PreviewTransformation>;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export class PreviewView {
        public static class: java.lang.Class<androidx.camera.view.PreviewView>;
        public getPreviewStreamState(): androidx.lifecycle.LiveData<androidx.camera.view.PreviewView.StreamState>;
        public setFrameUpdateListener(param0: java.util.concurrent.Executor, param1: androidx.camera.view.PreviewView.OnFrameUpdateListener): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public performClick(): boolean;
        public getSurfaceProvider(): androidx.camera.core.Preview.SurfaceProvider;
        public setScaleType(param0: androidx.camera.view.PreviewView.ScaleType): void;
        public getBitmap(): globalAndroid.graphics.Bitmap;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
        public getViewPort(): androidx.camera.core.ViewPort;
        public getController(): androidx.camera.view.CameraController;
        public getOutputTransform(): androidx.camera.view.transform.OutputTransform;
        public getViewPort(param0: number): androidx.camera.core.ViewPort;
        public constructor(param0: globalAndroid.content.Context);
        public getImplementationMode(): androidx.camera.view.PreviewView.ImplementationMode;
        public getScaleType(): androidx.camera.view.PreviewView.ScaleType;
        public setImplementationMode(param0: androidx.camera.view.PreviewView.ImplementationMode): void;
        public onDetachedFromWindow(): void;
        public getMeteringPointFactory(): androidx.camera.core.MeteringPointFactory;
        public setController(param0: androidx.camera.view.CameraController): void;
        public onAttachedToWindow(): void;
      }
      export module PreviewView {
        export class DisplayRotationListener {
          public static class: java.lang.Class<androidx.camera.view.PreviewView.DisplayRotationListener>;
          public onDisplayRemoved(param0: number): void;
          public onDisplayAdded(param0: number): void;
          public onDisplayChanged(param0: number): void;
        }
        export class ImplementationMode {
          public static class: java.lang.Class<androidx.camera.view.PreviewView.ImplementationMode>;
          public static PERFORMANCE: androidx.camera.view.PreviewView.ImplementationMode;
          public static COMPATIBLE: androidx.camera.view.PreviewView.ImplementationMode;
          public static values(): androidNative.Array<androidx.camera.view.PreviewView.ImplementationMode>;
          public static valueOf(param0: string): androidx.camera.view.PreviewView.ImplementationMode;
        }
        export class OnFrameUpdateListener {
          public static class: java.lang.Class<androidx.camera.view.PreviewView.OnFrameUpdateListener>;
          /**
           * Constructs a new instance of the androidx.camera.view.PreviewView$OnFrameUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onFrameUpdate(param0: number): void });
          public constructor();
          public onFrameUpdate(param0: number): void;
        }
        export class PinchToZoomOnScaleGestureListener {
          public static class: java.lang.Class<androidx.camera.view.PreviewView.PinchToZoomOnScaleGestureListener>;
          public onScale(param0: globalAndroid.view.ScaleGestureDetector): boolean;
        }
        export class ScaleType {
          public static class: java.lang.Class<androidx.camera.view.PreviewView.ScaleType>;
          public static FILL_START: androidx.camera.view.PreviewView.ScaleType;
          public static FILL_CENTER: androidx.camera.view.PreviewView.ScaleType;
          public static FILL_END: androidx.camera.view.PreviewView.ScaleType;
          public static FIT_START: androidx.camera.view.PreviewView.ScaleType;
          public static FIT_CENTER: androidx.camera.view.PreviewView.ScaleType;
          public static FIT_END: androidx.camera.view.PreviewView.ScaleType;
          public static values(): androidNative.Array<androidx.camera.view.PreviewView.ScaleType>;
          public static valueOf(param0: string): androidx.camera.view.PreviewView.ScaleType;
        }
        export class StreamState {
          public static class: java.lang.Class<androidx.camera.view.PreviewView.StreamState>;
          public static IDLE: androidx.camera.view.PreviewView.StreamState;
          public static STREAMING: androidx.camera.view.PreviewView.StreamState;
          public static valueOf(param0: string): androidx.camera.view.PreviewView.StreamState;
          public static values(): androidNative.Array<androidx.camera.view.PreviewView.StreamState>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export abstract class PreviewViewImplementation {
        public static class: java.lang.Class<androidx.camera.view.PreviewViewImplementation>;
      }
      export module PreviewViewImplementation {
        export class OnSurfaceNotInUseListener {
          public static class: java.lang.Class<androidx.camera.view.PreviewViewImplementation.OnSurfaceNotInUseListener>;
          /**
           * Constructs a new instance of the androidx.camera.view.PreviewViewImplementation$OnSurfaceNotInUseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSurfaceNotInUse(): void });
          public constructor();
          public onSurfaceNotInUse(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export class PreviewViewMeteringPointFactory extends androidx.camera.core.MeteringPointFactory {
        public static class: java.lang.Class<androidx.camera.view.PreviewViewMeteringPointFactory>;
        public convertPoint(param0: number, param1: number): globalAndroid.graphics.PointF;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export class RotationProvider {
        public static class: java.lang.Class<androidx.camera.view.RotationProvider>;
        public addListener(param0: java.util.concurrent.Executor, param1: androidx.camera.view.RotationProvider.Listener): boolean;
        public constructor(param0: globalAndroid.content.Context);
        public removeListener(param0: androidx.camera.view.RotationProvider.Listener): void;
      }
      export module RotationProvider {
        export class Listener {
          public static class: java.lang.Class<androidx.camera.view.RotationProvider.Listener>;
          /**
           * Constructs a new instance of the androidx.camera.view.RotationProvider$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onRotationChanged(param0: number): void });
          public constructor();
          public onRotationChanged(param0: number): void;
        }
        export class ListenerWrapper {
          public static class: java.lang.Class<androidx.camera.view.RotationProvider.ListenerWrapper>;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export class SurfaceViewImplementation extends androidx.camera.view.PreviewViewImplementation {
        public static class: java.lang.Class<androidx.camera.view.SurfaceViewImplementation>;
      }
      export module SurfaceViewImplementation {
        export class Api24Impl {
          public static class: java.lang.Class<androidx.camera.view.SurfaceViewImplementation.Api24Impl>;
        }
        export class SurfaceRequestCallback {
          public static class: java.lang.Class<androidx.camera.view.SurfaceViewImplementation.SurfaceRequestCallback>;
          public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
          public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
          public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export class TextureViewImplementation extends androidx.camera.view.PreviewViewImplementation {
        public static class: java.lang.Class<androidx.camera.view.TextureViewImplementation>;
        public initializePreview(): void;
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export class TransformExperimental {
        public static class: java.lang.Class<androidx.camera.view.TransformExperimental>;
        /**
         * Constructs a new instance of the androidx.camera.view.TransformExperimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module internal {
        export module compat {
          export module quirk {
            export class DeviceQuirks {
              public static class: java.lang.Class<androidx.camera.view.internal.compat.quirk.DeviceQuirks>;
              public static get(param0: java.lang.Class<any>): androidx.camera.core.impl.Quirk;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module internal {
        export module compat {
          export module quirk {
            export class DeviceQuirksLoader {
              public static class: java.lang.Class<androidx.camera.view.internal.compat.quirk.DeviceQuirksLoader>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module internal {
        export module compat {
          export module quirk {
            export class SurfaceViewNotCroppedByParentQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.view.internal.compat.quirk.SurfaceViewNotCroppedByParentQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module internal {
        export module compat {
          export module quirk {
            export class SurfaceViewStretchedQuirk extends androidx.camera.core.impl.Quirk {
              public static class: java.lang.Class<androidx.camera.view.internal.compat.quirk.SurfaceViewStretchedQuirk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module transform {
        export class CoordinateTransform {
          public static class: java.lang.Class<androidx.camera.view.transform.CoordinateTransform>;
          public transform(param0: globalAndroid.graphics.Matrix): void;
          public mapPoints(param0: androidNative.Array<number>): void;
          public mapRect(param0: globalAndroid.graphics.RectF): void;
          public mapPoint(param0: globalAndroid.graphics.PointF): void;
          public constructor(param0: androidx.camera.view.transform.OutputTransform, param1: androidx.camera.view.transform.OutputTransform);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module transform {
        export class FileTransformFactory {
          public static class: java.lang.Class<androidx.camera.view.transform.FileTransformFactory>;
          public setUsingExifOrientation(param0: boolean): void;
          public constructor();
          public getOutputTransform(param0: java.io.File): androidx.camera.view.transform.OutputTransform;
          public getOutputTransform(param0: java.io.InputStream): androidx.camera.view.transform.OutputTransform;
          public isUsingExifOrientation(): boolean;
          public getOutputTransform(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): androidx.camera.view.transform.OutputTransform;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module transform {
        export class ImageProxyTransformFactory {
          public static class: java.lang.Class<androidx.camera.view.transform.ImageProxyTransformFactory>;
          public setUsingCropRect(param0: boolean): void;
          public isUsingRotationDegrees(): boolean;
          public isUsingCropRect(): boolean;
          public constructor();
          public setUsingRotationDegrees(param0: boolean): void;
          public getOutputTransform(param0: androidx.camera.core.ImageProxy): androidx.camera.view.transform.OutputTransform;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module transform {
        export class OutputTransform {
          public static class: java.lang.Class<androidx.camera.view.transform.OutputTransform>;
          public getMatrix(): globalAndroid.graphics.Matrix;
          public constructor(param0: globalAndroid.graphics.Matrix, param1: any);
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module video {
        export class AutoValue_Metadata extends androidx.camera.view.video.Metadata {
          public static class: java.lang.Class<androidx.camera.view.video.AutoValue_Metadata>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
          public getLocation(): globalAndroid.location.Location;
        }
        export module AutoValue_Metadata {
          export class Builder extends androidx.camera.view.video.Metadata.Builder {
            public static class: java.lang.Class<androidx.camera.view.video.AutoValue_Metadata.Builder>;
            public setLocation(param0: globalAndroid.location.Location): androidx.camera.view.video.Metadata.Builder;
            public build(): androidx.camera.view.video.Metadata;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module video {
        export class AutoValue_OutputFileOptions extends androidx.camera.view.video.OutputFileOptions {
          public static class: java.lang.Class<androidx.camera.view.video.AutoValue_OutputFileOptions>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getMetadata(): androidx.camera.view.video.Metadata;
          public hashCode(): number;
        }
        export module AutoValue_OutputFileOptions {
          export class Builder extends androidx.camera.view.video.OutputFileOptions.Builder {
            public static class: java.lang.Class<androidx.camera.view.video.AutoValue_OutputFileOptions.Builder>;
            public setMetadata(param0: androidx.camera.view.video.Metadata): androidx.camera.view.video.OutputFileOptions.Builder;
            public build(): androidx.camera.view.video.OutputFileOptions;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module video {
        export class AutoValue_OutputFileResults extends androidx.camera.view.video.OutputFileResults {
          public static class: java.lang.Class<androidx.camera.view.video.AutoValue_OutputFileResults>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getSavedUri(): globalAndroid.net.Uri;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module video {
        export class ExperimentalVideo {
          public static class: java.lang.Class<androidx.camera.view.video.ExperimentalVideo>;
          /**
           * Constructs a new instance of the androidx.camera.view.video.ExperimentalVideo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module video {
        export abstract class Metadata {
          public static class: java.lang.Class<androidx.camera.view.video.Metadata>;
          public static builder(): androidx.camera.view.video.Metadata.Builder;
          public getLocation(): globalAndroid.location.Location;
        }
        export module Metadata {
          export abstract class Builder {
            public static class: java.lang.Class<androidx.camera.view.video.Metadata.Builder>;
            public setLocation(param0: globalAndroid.location.Location): androidx.camera.view.video.Metadata.Builder;
            public build(): androidx.camera.view.video.Metadata;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module video {
        export class OnVideoSavedCallback {
          public static class: java.lang.Class<androidx.camera.view.video.OnVideoSavedCallback>;
          /**
           * Constructs a new instance of the androidx.camera.view.video.OnVideoSavedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onVideoSaved(param0: androidx.camera.view.video.OutputFileResults): void; onError(param0: number, param1: string, param2: java.lang.Throwable): void });
          public constructor();
          public static ERROR_UNKNOWN: number;
          public static ERROR_RECORDING_IN_PROGRESS: number;
          public static ERROR_ENCODER: number;
          public static ERROR_FILE_IO: number;
          public static ERROR_INVALID_CAMERA: number;
          public static ERROR_MUXER: number;
          public onVideoSaved(param0: androidx.camera.view.video.OutputFileResults): void;
          public onError(param0: number, param1: string, param2: java.lang.Throwable): void;
        }
        export module OnVideoSavedCallback {
          export class VideoCaptureError {
            public static class: java.lang.Class<androidx.camera.view.video.OnVideoSavedCallback.VideoCaptureError>;
            /**
             * Constructs a new instance of the androidx.camera.view.video.OnVideoSavedCallback$VideoCaptureError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module video {
        export abstract class OutputFileOptions {
          public static class: java.lang.Class<androidx.camera.view.video.OutputFileOptions>;
          public static builder(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri, param2: globalAndroid.content.ContentValues): androidx.camera.view.video.OutputFileOptions.Builder;
          public getMetadata(): androidx.camera.view.video.Metadata;
          public toVideoCaptureOutputFileOptions(): androidx.camera.core.VideoCapture.OutputFileOptions;
          public static builder(param0: globalAndroid.os.ParcelFileDescriptor): androidx.camera.view.video.OutputFileOptions.Builder;
          public static builder(param0: java.io.File): androidx.camera.view.video.OutputFileOptions.Builder;
        }
        export module OutputFileOptions {
          export abstract class Builder {
            public static class: java.lang.Class<androidx.camera.view.video.OutputFileOptions.Builder>;
            public setMetadata(param0: androidx.camera.view.video.Metadata): androidx.camera.view.video.OutputFileOptions.Builder;
            public build(): androidx.camera.view.video.OutputFileOptions;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module camera {
    export module view {
      export module video {
        export abstract class OutputFileResults {
          public static class: java.lang.Class<androidx.camera.view.video.OutputFileResults>;
          public static create(param0: globalAndroid.net.Uri): androidx.camera.view.video.OutputFileResults;
          public getSavedUri(): globalAndroid.net.Uri;
        }
      }
    }
  }
}

//Generics information:
//androidx.camera.camera2.impl.Camera2ImplConfig.Extender:1
//androidx.camera.camera2.internal.Camera2CameraInfoImpl.RedirectableLiveData:1
//androidx.camera.camera2.interop.Camera2Interop.Extender:1
//androidx.camera.core.ExtendableBuilder:1
//androidx.camera.core.impl.AutoValue_Config_Option:1
//androidx.camera.core.impl.CameraConfig.Builder:1
//androidx.camera.core.impl.Config.Option:1
//androidx.camera.core.impl.ConfigProvider:1
//androidx.camera.core.impl.ConstantObservable:1
//androidx.camera.core.impl.ImageOutputConfig.Builder:1
//androidx.camera.core.impl.LiveDataObservable:1
//androidx.camera.core.impl.LiveDataObservable.LiveDataObserverAdapter:1
//androidx.camera.core.impl.LiveDataObservable.Result:1
//androidx.camera.core.impl.MultiValueSet:1
//androidx.camera.core.impl.MutableStateObservable:1
//androidx.camera.core.impl.Observable:1
//androidx.camera.core.impl.Observable.Observer:1
//androidx.camera.core.impl.StateObservable:1
//androidx.camera.core.impl.StateObservable.ObserverWrapper:1
//androidx.camera.core.impl.UseCaseConfig:1
//androidx.camera.core.impl.UseCaseConfig.Builder:3
//androidx.camera.core.impl.utils.Absent:1
//androidx.camera.core.impl.utils.Optional:1
//androidx.camera.core.impl.utils.Present:1
//androidx.camera.core.impl.utils.executor.HandlerScheduledExecutorService.HandlerScheduledFuture:1
//androidx.camera.core.impl.utils.futures.AsyncFunction:2
//androidx.camera.core.impl.utils.futures.ChainingListenableFuture:2
//androidx.camera.core.impl.utils.futures.FutureCallback:1
//androidx.camera.core.impl.utils.futures.FutureChain:1
//androidx.camera.core.impl.utils.futures.Futures.CallbackListener:1
//androidx.camera.core.impl.utils.futures.ImmediateFuture:1
//androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateFailedFuture:1
//androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateFailedScheduledFuture:1
//androidx.camera.core.impl.utils.futures.ImmediateFuture.ImmediateSuccessfulFuture:1
//androidx.camera.core.impl.utils.futures.ListFuture:1
//androidx.camera.core.internal.IoConfig.Builder:1
//androidx.camera.core.internal.TargetConfig:1
//androidx.camera.core.internal.TargetConfig.Builder:2
//androidx.camera.core.internal.ThreadConfig.Builder:1
//androidx.camera.core.internal.UseCaseEventConfig.Builder:1
//androidx.camera.core.internal.utils.ArrayRingBuffer:1
//androidx.camera.core.internal.utils.RingBuffer:1
//androidx.camera.core.internal.utils.RingBuffer.OnRemoveCallback:1
//androidx.camera.core.processing.AutoValue_Packet:1
//androidx.camera.core.processing.Edge:1
//androidx.camera.core.processing.Node:2
//androidx.camera.core.processing.Operation:2
//androidx.camera.core.processing.Packet:1
//androidx.camera.video.OutputOptions.Builder:2
//androidx.camera.video.OutputOptions.OutputOptionsInternal.Builder:1
//androidx.camera.video.VideoCapture:1
//androidx.camera.video.VideoCapture.Builder:1
//androidx.camera.video.impl.VideoCaptureConfig:1
//androidx.camera.video.internal.BufferProvider:1
//androidx.camera.view.ForwardingLiveData:1
