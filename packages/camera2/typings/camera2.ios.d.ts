/* eslint-disable @typescript-eslint/no-misused-new */

declare class PreviewView extends UIView {
  static alloc(): PreviewView; // inherited from NSObject

  static appearance(): PreviewView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): PreviewView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PreviewView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): PreviewView; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PreviewView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): PreviewView; // inherited from UIAppearance

  static layerClass(): typeof NSObject;

  static new(): PreviewView; // inherited from NSObject

  session: AVCaptureSession;

  readonly videoPreviewLayer: AVCaptureVideoPreviewLayer;
}
