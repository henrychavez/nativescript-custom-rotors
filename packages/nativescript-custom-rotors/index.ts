import { ContentView, isIOS, Property, ViewBase } from '@nativescript/core';
import { Observable } from '@nativescript/core';

/**
 * @override
 * Add `rotorGroup` property to ViewBase.
 * Set the name of the rotorGroup that this view is a part of
 */
declare module '@nativescript/core/ui/core/view-base' {
  export interface ViewBase {
    rotorGroup: string;
  }
}
export const rotorGroupProperty = new Property<ViewBase, string>({
  name: 'rotorGroup',
  defaultValue: undefined,
});
rotorGroupProperty.register(ViewBase);

/**
 * @override
 * Add `rotorContainer` property to ContentView
 * Mark any ContentView, specifically Page, as a "rotorContainer"
 */
declare module '@nativescript/core/ui/content-view' {
  export interface ContentView {
    rotorContainer: boolean;
  }
}
export const rotorContainerProperty = new Property<ContentView, boolean>({
  name: 'rotorContainer',
  defaultValue: false,
  valueConverter: (value: string): boolean => {
    if (value?.toLowerCase() === 'true') return true;
    return false;
  },
});
rotorContainerProperty.register(ContentView);

/**
 * @function initializeCustomRotors
 * This is the ONLY function that needs to be called.
 * MUST be called in app.ts
 */
export function initializeCustomRotors(): void {
  // define 'rotorGroup' on ViewBase
  Object.defineProperty(ViewBase.prototype, 'rotorGroup', {
    value: undefined,
    enumerable: true,
    configurable: true,
    writable: true,
  });
  // define the {N} property for 'rotorGroup'
  ViewBase.prototype[rotorGroupProperty.setNative] = function rotorGroupPropSetNative(value: string): void {
    if (!isIOS) return;
    const iosView = this.nativeViewProtected as UIView;
    iosView.setValueForKey(value, 'rotorGroup');
  };

  // define 'rotorContainer' on ContentView
  Object.defineProperty(ContentView.prototype, 'rotorContainer', {
    value: false,
    enumerable: true,
    configurable: true,
    writable: true,
  });

  /**
   * @override
   * Override the "onLoaded" function of ContentView to create the custom rotor actions
   */
  const _onLoaded = ContentView.prototype.onLoaded;
  Object.defineProperty(ContentView.prototype, 'onLoaded', {
    value: function onLoaded(): void {
      _onLoaded.call(this);
      if (!isIOS || !this.rotorContainer) return;
      setupRotorGroups(this);
      const nativeContent = this.nativeViewProtected as UIView;
      nativeContent.isAccessibilityElement = true;
      setTimeout(() => {
        UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, nativeContent);
      });
    },
  });
  console.log('finished initializing custom rotors');
}

/**
 * @function setupRotorGroups
 * Creates rotor groups for descrete navigation
 */
function setupRotorGroups(cv: ContentView): void {
  const { content } = cv;
  const rotorGroups = {};
  recurseChildrenForRotorGroups(content, rotorGroups);
  console.log(Object.keys(rotorGroups));

  const rotors: NSMutableArray<UIAccessibilityCustomRotor> = NSMutableArray.new();
  Object.keys(rotorGroups).forEach((key) => {
    const rotor = UIAccessibilityCustomRotor.alloc().initWithNameItemSearchBlock(key, (predicate: UIAccessibilityCustomRotorSearchPredicate): UIAccessibilityCustomRotorItemResult => {
      const rotorItems = (<Array<ViewBase>>rotorGroups[key]).map((item) => item.nativeViewProtected);
      if (rotorItems.length <= 0) return null;
      const forward = predicate.searchDirection == UIAccessibilityCustomRotorDirection.Next;
      const currentView = predicate.currentItem.targetElement as UIView;
      const currentIndex = rotorItems.indexOf(currentView);
      const nextIndex = currentIndex >= 0 ? currentIndex + (forward ? 1 : -1) : 0;
      let target;

      if (nextIndex >= rotorItems.length) target = null;
      else target = rotorItems[nextIndex];

      return UIAccessibilityCustomRotorItemResult.alloc().initWithTargetElementTargetRange(target, null);
    });
    // console.log('add rotor', key);
    rotors.addObject(rotor);
  });
  // console.log('setup custom routers');
  (<UIView>cv.nativeViewProtected).accessibilityCustomRotors = rotors;
}
/**
 * @function recurseChildrenForRotorGroups
 * recursive function to find all children in a ContentView that belong to a rotorGroup
 */
function recurseChildrenForRotorGroups(vb: ViewBase, rotorGroups: any): boolean {
  if (vb.rotorGroup) {
    if (!rotorGroups[vb.rotorGroup]) rotorGroups[vb.rotorGroup] = [];
    rotorGroups[vb.rotorGroup].push(vb);
  }
  vb.eachChild((child) => recurseChildrenForRotorGroups(child, rotorGroups));
  return true;
}
