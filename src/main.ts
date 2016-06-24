import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyDYDZRJj1z0KzAlEu9cn85fx0fz2KzIZlM",
    authDomain: "amber-torch-7838.firebaseapp.com",
    databaseURL: "https://amber-torch-7838.firebaseio.com",
    storageBucket: "amber-torch-7838.appspot.com",
  })
]);

