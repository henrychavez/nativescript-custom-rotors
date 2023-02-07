import { concatMap, from, Observable, Subject, tap } from 'rxjs';
import { Camera2Common, TakePhotoEventData } from './common';
import { request as requestPermission } from '@nativescript-community/perms';
import { Application, Dialogs, ImageSource, knownFolders, path, Utils, View } from '@nativescript/core';
import { orientationChangedEvent, OrientationChangedEventData } from '@nativescript/core/application';
import { Camera2ConfigService } from './core';

@NativeClass()
class AVCapturePhotoCaptureDelegateImpl extends NSObject implements AVCapturePhotoCaptureDelegate {
  public static ObjCProtocols = [AVCapturePhotoCaptureDelegate];
  /**
   * Used when the initWithCallbackWithOwner is called
   *
   * @private
   * @type {Camera2}
   * @memberof AVCapturePhotoCaptureDelegateImpl
   */
  private _owner: Camera2;

  /**
   *
   * No callback. Just a weak reference to owner
   * @static
   * @param {WeakRef<Camera2>} owner
   * @returns {AVCapturePhotoCaptureDelegateImpl}
   * @memberof AVCapturePhotoCaptureDelegateImpl
   */
  public static initWithOwner(owner: WeakRef<Camera2>): AVCapturePhotoCaptureDelegateImpl {
    const delegate = AVCapturePhotoCaptureDelegateImpl.new() as AVCapturePhotoCaptureDelegateImpl;
    delegate._owner = owner.get();
    console.log('AVCapturePhotoCaptureDelegate::initialized');
    return delegate;
  }

  captureOutputDidCapturePhotoForResolvedSettings(output: AVCapturePhotoOutput, resolvedSettings: AVCaptureResolvedPhotoSettings): void {
    console.log('captureOutputDidCapturePhotoForResolvedSettings');
  }

  captureOutputDidFinishProcessingPhotoError(output: AVCapturePhotoOutput, photo: AVCapturePhoto, error: NSError): void {
    console.log('captureOutputDidFinishProcessingPhotoError');
    const imageData = photo.fileDataRepresentation();
    // const image = UIImage.new().initWithData(imageData);
    const imageSource = ImageSource.fromDataSync(imageData);

    this._owner.savePhoto(imageSource);
  }
}

@NativeClass()
class AVCaptureFileOutputRecordingDelegateImpl extends NSObject implements AVCaptureFileOutputRecordingDelegate {
  public static ObjCProtocols = [AVCaptureFileOutputRecordingDelegate];
  /**
   * Used when the initWithCallbackWithOwner is called
   *
   * @private
   * @type {Camera2}
   * @memberof AVCaptureFileOutputRecordingDelegateImpl
   */
  private _owner: Camera2;

  /**
   *
   * No callback. Just a weak reference to owner
   * @static
   * @param {WeakRef<Camera2>} owner
   * @returns {AVCaptureFileOutputRecordingDelegateImpl}
   * @memberof AVCaptureFileOutputRecordingDelegateImpl
   */
  public static initWithOwner(owner: WeakRef<Camera2>): AVCaptureFileOutputRecordingDelegateImpl {
    const delegate = AVCaptureFileOutputRecordingDelegateImpl.new() as AVCaptureFileOutputRecordingDelegateImpl;
    delegate._owner = owner.get();
    console.log('AVCaptureFileOutputRecordingDelegate::initialized');
    return delegate;
  }

  captureOutputDidFinishRecordingToOutputFileAtURLFromConnectionsError(output: AVCaptureFileOutput, outputFileURL: NSURL, connections: NSArray<AVCaptureConnection> | AVCaptureConnection[], error: NSError): void {
    console.log('captureOutputDidFinishRecordingToOutputFileAtURLFromConnectionsError');
  }

  captureOutputDidStartRecordingToOutputFileAtURLFromConnections(output: AVCaptureFileOutput, fileURL: NSURL, connections: NSArray<AVCaptureConnection> | AVCaptureConnection[]): void {
    console.log('captureOutputDidStartRecordingToOutputFileAtURLFromConnections');
  }
}

export class Camera2 extends Camera2Common {
  public nativeView: UIView;

  private avCapturesession = AVCaptureSession.new();
  private photoOutput = AVCapturePhotoOutput.new();
  private videoDeviceInput: AVCaptureDeviceInput;
  private videoOutput = AVCaptureMovieFileOutput.new();
  private backCamera: AVCaptureDevice;
  private frontCamera: AVCaptureDevice;
  private currentCamera: AVCaptureDevice;
  // private audio: AVCaptureDevice;

  private backInput: AVCaptureInput;
  // private frontInput: AVCaptureInput;
  // private audioInput: AVCaptureInput;

  // private isbackCameraRunning = false;

  private videoPreviewLayer: AVCaptureVideoPreviewLayer;

  // Delegates
  private photoCaptureDelegate: AVCapturePhotoCaptureDelegate;
  private fileOutputRecordingDelegate: AVCaptureFileOutputRecordingDelegate;

  // private currOrientation: 'portrait' | 'landscape' | 'unknown' = 'landscape';

  public createNativeView(): UIView {
    this.nativeView = UIView.new();
    return this.nativeView;
  }

  initNativeView() {
    // Request permissions
    from(requestPermission('camera'))
      .pipe(
        concatMap(() => from(requestPermission('microphone'))),
        concatMap(() => from(requestPermission('photo')))
      )
      .pipe(
        tap((response) => {
          this.startCamera();
        })
      )
      .subscribe();
    // this.handleScreenRotation();

    // Init Delegates
    const owner = new WeakRef(this);
    this.photoCaptureDelegate = AVCapturePhotoCaptureDelegateImpl.initWithOwner(owner);
    this.fileOutputRecordingDelegate = AVCaptureFileOutputRecordingDelegateImpl.initWithOwner(owner);
  }

  startCamera(): void {
    //start configuration
    this.avCapturesession.beginConfiguration();
    this.avCapturesession.sessionPreset = AVCaptureSessionPresetPhoto;
    this.avCapturesession.automaticallyConfiguresCaptureDeviceForWideColor = true;

    //setup inputs
    this.setupSessionInputs();

    //setup inputs
    this.setupSessionOutputs();

    // Setup Preview Layer
    const windowOrientation: AVCaptureVideoOrientation = this.nativeView.window?.windowScene?.interfaceOrientation as unknown as AVCaptureVideoOrientation;

    this.videoPreviewLayer = AVCaptureVideoPreviewLayer.new();
    this.videoPreviewLayer.frame = this.nativeView.layer.bounds;

    this.nativeView.layer.insertSublayerAtIndex(this.videoPreviewLayer, 0);

    this.videoPreviewLayer.session = this.avCapturesession;
    this.videoPreviewLayer.connection.videoOrientation = windowOrientation;
    //commit configuration
    this.avCapturesession.commitConfiguration();
    //start running it
    this.avCapturesession.startRunning();
  }

  setupDevice() {
    // let deviceDiscoverySession = AVCaptureDevice.DiscoverySession(deviceTypes: [AVCaptureDevice.DeviceType.builtInWideAngleCamera], mediaType: AVMediaType.video, position: AVCaptureDevice.Position.unspecified)
    // let devices = deviceDiscoverySession.devices
    // for device in devices {
    //     if device.position == AVCaptureDevice.Position.front {
    //         frontCamera = device
    //     }
    //     if device.position == AVCaptureDevice.Position.back {
    //         rearCamera = device
    //     }
    // }
    // currentCamera = rearCamera
  }

  setupSessionInputs() {
    this.backCamera = AVCaptureDevice.defaultDeviceWithDeviceTypeMediaTypePosition(AVCaptureDeviceTypeBuiltInWideAngleCamera, AVMediaTypeVideo, AVCaptureDevicePosition.Back);
    this.frontCamera = AVCaptureDevice.defaultDeviceWithDeviceTypeMediaTypePosition(AVCaptureDeviceTypeBuiltInWideAngleCamera, AVMediaTypeVideo, AVCaptureDevicePosition.Front);
    this.currentCamera = this.backCamera;
    try {
      this.videoDeviceInput = AVCaptureDeviceInput.deviceInputWithDeviceError(this.backCamera);

      // this.avCapturesession.canAddInput(this.backInput) && this.avCapturesession.addInput(this.backInput);

      if (this.avCapturesession.canAddInput(this.videoDeviceInput)) {
        this.avCapturesession.addInput(this.videoDeviceInput);
      }
    } catch (error) {
      console.log("Couldn't add video device input to the session.", error);
    }
  }

  setupSessionOutputs() {
    // Set up photo output
    if (this.avCapturesession.canAddOutput(this.photoOutput)) {
      this.avCapturesession.addOutput(this.photoOutput);
    }

    // Set up video output
    if (this.avCapturesession.canAddOutput(this.videoOutput)) {
      this.avCapturesession.addOutput(this.videoOutput);
    }
  }

  takePhoto(): Observable<TakePhotoEventData> {
    const response = new Subject<TakePhotoEventData>();
    const photoSettings = AVCapturePhotoSettings.new();

    const videoPreviewLayerOrientation = this.videoPreviewLayer.connection.videoOrientation;
    this.photoOutput.connectionWithMediaType(AVMediaTypeVideo).videoOrientation = videoPreviewLayerOrientation;

    if (this.videoDeviceInput.device.flashAvailable) {
      photoSettings.flashMode = AVCaptureFlashMode.Auto;
    }

    this.photoOutput.highResolutionCaptureEnabled = true;
    photoSettings.highResolutionPhotoEnabled = true;

    this.photoOutput.capturePhotoWithSettingsDelegate(photoSettings, this.photoCaptureDelegate);

    return response;
  }
  switchCamera(): void {
    // const currentVideoDevice = this.videoDeviceInput.device;
    // const currentPosition = currentVideoDevice.position;
    // const newPosition = currentPosition == AVCaptureDevicePosition.Front ? AVCaptureDevicePosition.Back : AVCaptureDevicePosition.Front;
    // const newDevice = AVCaptureDevice.defaultDeviceWithDeviceTypeMediaTypePosition(AVCaptureDeviceTypeBuiltInWideAngleCamera, AVMediaTypeVideo, newPosition);

    // this.currentCamera = newDevice;
    this.avCapturesession.beginConfiguration();

    // Change the device based on the current camera
    const newDevice = this.currentCamera?.position == AVCaptureDevicePosition.Back ? this.frontCamera : this.backCamera;

    // Remove all inputs from the session
    for (let index = 0; index < this.avCapturesession.inputs.count; index++) {
      const input = this.avCapturesession.inputs.objectAtIndex(index);
      this.avCapturesession?.removeInput(input as unknown as AVCaptureDeviceInput);
    }

    // Change to the new input
    this.videoDeviceInput = AVCaptureDeviceInput.deviceInputWithDeviceError(newDevice);
    if (this.avCapturesession.canAddInput(this.videoDeviceInput)) {
      console.log('av capture session');
      this.avCapturesession.addInput(this.videoDeviceInput);
      this.currentCamera = newDevice;
    }

    this.avCapturesession?.commitConfiguration();
  }
  toggleFlash(): void {
    if (!this.currentCamera.torchAvailable) {
      Dialogs.alert('Torch not available');
      return;
    }

    this.currentCamera.lockForConfiguration();
    this.currentCamera.torchMode = this.currentCamera.torchActive ? AVCaptureTorchMode.Off : AVCaptureTorchMode.On;
    this.currentCamera.unlockForConfiguration();
  }

  captureVideo(): void {
    const filePath = `${knownFolders.temp().path}/${Date.now()}.mov`;
    const tempFilePath = NSURL.fileURLWithPath(filePath);

    if (this.videoOutput.recording) {
      console.log('stopping recording');
      this.videoOutput.stopRecording();
      return;
    }
    console.log('starting recording');
    this.videoOutput.startRecordingToOutputFileURLRecordingDelegate(tempFilePath, this.fileOutputRecordingDelegate);
  }

  pauseVideo(): void {
    // if (this.videoOutput.recording) {
    //   this.videoOutput.
    // }
  }
  resumeVideo(): void {
    throw new Error('Method not implemented.');
  }

  savePhoto(image: ImageSource) {
    try {
      const CompletionTarget = NSObject.extend(
        {
          'thisImage:hasBeenSavedInPhotoAlbumWithError:usingContextInfo:': (image, error, context) => {
            if (error) {
              console.warn('help-page.saveToAlbum error: CompletionTarget creation failed');
            }
          },
        },
        {
          exposedMethods: {
            'thisImage:hasBeenSavedInPhotoAlbumWithError:usingContextInfo:': {
              returns: interop.types.void,
              params: [UIImage, NSError, interop.Pointer],
            },
          },
        }
      );
      const completionTarget = CompletionTarget.new();
      UIImageWriteToSavedPhotosAlbum(image.ios, completionTarget, 'thisImage:hasBeenSavedInPhotoAlbumWithError:usingContextInfo:', null);
    } catch (error) {
      console.log('error saving', error);
    }
  }

  private handleScreenRotation(): void {
    // Orientation info for StreamAxia
    // int ORIENTATION_UNDEFINED = 0;
    // int ORIENTATION_PORTRAIT = 1;
    // int ORIENTATION_LANDSCAPE = 2;
    // console.log('handleScreenRotation');
    // Application.on(orientationChangedEvent, (args: OrientationChangedEventData) => {
    // if (args.newValue === 'portrait') {
    //   this.previewLayer.connection.videoOrientation = AVCaptureVideoOrientation.Portrait;
    // }
    // if (this.currOrientation !== args.newValue) {
    //   console.log('orientationChangedEvent!', args.newValue);
    //   // this.previewLayer.frame = this.nativeView.layer.bounds;
    //   setTimeout(() => {
    //     console.log('object', this.nativeView.sizeToFit());
    //     console.log('object', this.nativeView.layer.bounds.size.width, this.nativeView.layer.bounds.size.height);
    //   });
    //   this.previewLayer.connection.videoOrientation = this.nativeView.window?.windowScene?.interfaceOrientation as unknown as AVCaptureVideoOrientation;
    //   this.currOrientation = args.newValue;
    // }
    // if (args.newValue === 'landscape') {
    //   this.previewLayer.connection.videoOrientation = AVCaptureVideoOrientation.LandscapeRight;
    // }
    // this.previewLayer.layoutIfNeeded();
    // this.previewLayer.displayIfNeeded()
    // this.previewLayer.fillMode = kCAFillModeBoth
    // this.previewLayer.position = { x: 0, y: 0 };
    // this.previewLayer.anchorPoint = { x: 0, y: 0 };
    // this.previewLayer.needsDisplay();
    // });
  }
}
