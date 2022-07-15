# @nativescript/nativescript-custom-rotors

```javascript
ns plugin add @nativescript/nativescript-custom-rotors
```
NativeScript Custom Rotors plugin provides an easy way to improve accessibility navigation on complex apps.
NOTE: This will only work for the iOS side of your application code. Android does not have an analog for ios AccessibilityCustomRotors

## Usage
in `app.ts`
```typescript
...
import {initializeCustomRotors} from '@nativescript/nativescript-custom-rotors'

...
initialzeCustomRotors();

...
Application.run({ moduleName: 'app-root' });
```

then simply add the `rotorContainer="true"` to any ContentView, including Page, in .xml files, or `page.rotorContainer = true` prior to the "loaded" event for same.

then annotate elements that you want to group together with the `rotorGroup` property.

```xml
...
<Button text="anything" rotorGroup="group1">
<Button text="anythingElse" rotorGroup="group2">
```
```javascript
childOfContentViewAtAnyLevel.rotorGroup = "someGroupName";
```
NOTE: if using the vanilla TS/JS approach, the property must be assigned before the `rotorContainer` has called `onLoaded`. Dynamic updates to NativescriptCustomRotors is not supported at this time.

## License

Apache License Version 2.0
