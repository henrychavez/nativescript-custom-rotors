import { Application } from '@nativescript/core';
import { initializeCustomRotors } from '@nativescript/nativescript-custom-rotors';

initializeCustomRotors();

Application.run({ moduleName: 'app-root' });
