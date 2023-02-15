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
    return delegate;
  }

  captureOutputDidStartRecordingToOutputFileAtURLFromConnections(output: AVCaptureFileOutput, fileURL: NSURL, connections: NSArray<AVCaptureConnection> | AVCaptureConnection[]): void {
    console.log('captureOutputDidStartRecordingToOutputFileAtURLFromConnections');
  }

  captureOutputDidFinishRecordingToOutputFileAtURLFromConnectionsError(output: AVCaptureFileOutput, outputFileURL: NSURL, connections: NSArray<AVCaptureConnection> | AVCaptureConnection[], error: NSError): void {
    this._owner.saveVideo(outputFileURL);
  }
}

export class Camera2 extends Camera2Common {
  public nativeView: UIView;

  // Capture Session
  private avCapturesession = AVCaptureSession.new();
  // Devices
  private backCamera: AVCaptureDevice;
  private frontCamera: AVCaptureDevice;
  private audio: AVCaptureDevice;
  private currentCamera: AVCaptureDevice;
  // Inputs
  private backCameraInput: AVCaptureDeviceInput;
  private frontCameraInput: AVCaptureDeviceInput;
  private audioInput: AVCaptureDeviceInput;
  private currentDeviceInput: AVCaptureDeviceInput;
  // Outputs
  private photoOutput = AVCapturePhotoOutput.new();
  private videoOutput = AVCaptureMovieFileOutput.new();
  // Preview Layer
  private videoPreviewLayer: AVCaptureVideoPreviewLayer;

  // Delegates
  private photoCaptureDelegate: AVCapturePhotoCaptureDelegate;
  private fileOutputRecordingDelegate: AVCaptureFileOutputRecordingDelegate;

  // private currOrientation: 'portrait' | 'landscape' | 'unknown' = 'landscape';

  public createNativeView(): UIView {
    this.nativeView = UIView.new();
    return this.nativeView;
  }

  public onLayout(left: number, top: number, right: number, bottom: number): void {
    super.onLayout(left, top, right, bottom);
    if (this.videoPreviewLayer && this.ios) {
      this.videoPreviewLayer.frame = this.ios.layer.bounds;
    }
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
    // TODO: Support screen rotation
    this.handleScreenRotation();

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
    this.videoPreviewLayer.videoGravity = AVLayerVideoGravityResizeAspect;
    this.videoPreviewLayer.frame = this.nativeView.layer.bounds;

    this.nativeView.layer.insertSublayerAtIndex(this.videoPreviewLayer, 0);

    this.videoPreviewLayer.session = this.avCapturesession;
    if (this.videoPreviewLayer.connection) {
      this.videoPreviewLayer.connection.videoOrientation = windowOrientation;
    }
    //commit configuration
    this.avCapturesession.commitConfiguration();
    //start running it
    this.avCapturesession.startRunning();
  }

  setupSessionInputs() {
    // Setup devices
    this.backCamera = AVCaptureDevice.defaultDeviceWithDeviceTypeMediaTypePosition(AVCaptureDeviceTypeBuiltInWideAngleCamera, AVMediaTypeVideo, AVCaptureDevicePosition.Back);
    this.frontCamera = AVCaptureDevice.defaultDeviceWithDeviceTypeMediaTypePosition(AVCaptureDeviceTypeBuiltInWideAngleCamera, AVMediaTypeVideo, AVCaptureDevicePosition.Front);
    this.audio = AVCaptureDevice.defaultDeviceWithDeviceTypeMediaTypePosition(AVCaptureDeviceTypeBuiltInMicrophone, AVMediaTypeAudio, AVCaptureDevicePosition.Unspecified);

    this.currentCamera = this.backCamera;

    try {
      // Setup device inputs
      this.backCameraInput = AVCaptureDeviceInput.deviceInputWithDeviceError(this.backCamera);
      this.frontCameraInput = AVCaptureDeviceInput.deviceInputWithDeviceError(this.frontCamera);
      this.audioInput = AVCaptureDeviceInput.deviceInputWithDeviceError(this.audio);
      this.currentDeviceInput = this.backCameraInput;

      // Setup Back camera as default device input
      if (this.avCapturesession.canAddInput(this.currentDeviceInput)) {
        this.avCapturesession.addInput(this.currentDeviceInput);
      }

      if (this.avCapturesession.canAddInput(this.audioInput)) {
        this.avCapturesession.addInput(this.audioInput);
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

    if (this.currentDeviceInput.device.flashAvailable) {
      photoSettings.flashMode = AVCaptureFlashMode.Auto;
    }

    this.photoOutput.highResolutionCaptureEnabled = true;
    photoSettings.highResolutionPhotoEnabled = true;

    this.photoOutput.capturePhotoWithSettingsDelegate(photoSettings, this.photoCaptureDelegate);

    return response;
  }
  switchCamera(): void {
    this.avCapturesession.beginConfiguration();

    // Change the device based on the current camera
    const newDevice = this.currentCamera?.position == AVCaptureDevicePosition.Back ? this.frontCamera : this.backCamera;

    // Remove all inputs from the session
    for (let index = 0; index < this.avCapturesession.inputs.count; index++) {
      const input = this.avCapturesession.inputs.objectAtIndex(index);
      this.avCapturesession?.removeInput(input as unknown as AVCaptureDeviceInput);
    }

    // Change to the new input
    this.currentDeviceInput = AVCaptureDeviceInput.deviceInputWithDeviceError(newDevice);
    if (this.avCapturesession.canAddInput(this.currentDeviceInput)) {
      this.avCapturesession.addInput(this.currentDeviceInput);
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
    const filePath = `${NSTemporaryDirectory()}${Date.now()}.mov`;
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
    // TODO: the docs mention a puaseRecording Method but it seems to only be available for macOS
    // if (this.videoOutput.recording) {
    //   this.videoOutput.
    // }
  }
  resumeVideo(): void {
    // throw new Error('Method not implemented.');
  }

  savePhoto(image: ImageSource) {
    try {
      const CompletionTarget = (NSObject as any).extend(
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
      console.error('Error saving image', error);
    }
  }

  saveVideo(videoPathUrl: NSURL) {
    console.log('video path', videoPathUrl);
    PHPhotoLibrary.sharedPhotoLibrary().performChangesCompletionHandler(
      () => {
        PHAssetChangeRequest.creationRequestForAssetFromVideoAtFileURL(videoPathUrl);
      },
      (saved, error) => {
        if (saved) {
          console.log('Video saved!');
          return;
        }
        console.error('Error saving video', saved, error);
      }
    );
  }

  private handleScreenRotation(): void {
    // Orientation info for StreamAxia
    // int ORIENTATION_UNDEFINED = 0;
    // int ORIENTATION_PORTRAIT = 1;
    // int ORIENTATION_LANDSCAPE = 2;
    console.log('handleScreenRotation');
    Application.on(orientationChangedEvent, (args: OrientationChangedEventData) => {
      if (this.videoPreviewLayer.connection) {
        if (args.newValue === 'portrait') {
          console.log('portrait');
          this.videoPreviewLayer.connection.videoOrientation = AVCaptureVideoOrientation.Portrait;
          // this.videoPreviewLayer.videoGravity = AVLayerVideoGravityResizeAspect;
          // this.videoPreviewLayer.frame = this.nativeView.layer.bounds;
          // this.videoPreviewLayer.layoutIfNeeded();
          // this.videoPreviewLayer.needsDisplay();
        }
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
        if (args.newValue === 'landscape') {
          console.log('landscape');
          this.videoPreviewLayer.connection.videoOrientation = AVCaptureVideoOrientation.LandscapeRight;
        }
        // this.previewLayer.layoutIfNeeded();
        // this.previewLayer.displayIfNeeded();
        // this.previewLayer.fillMode = kCAFillModeBoth;
        // this.previewLayer.position = { x: 0, y: 0 };
        // this.previewLayer.anchorPoint = { x: 0, y: 0 };
        // this.previewLayer.needsDisplay();
      }
    });
  }
}
