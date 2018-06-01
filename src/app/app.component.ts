import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { firebaseConfig } from './firebaseconf';
import { HomePage } from '../pages/home/home';
import { Unsubscribe } from '@firebase/util';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private oneSignal:OneSignal
  ) {
    firebase.initializeApp(firebaseConfig);

    const unsubscribe: Unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.rootPage = HomePage;
        unsubscribe();
      } else {
        this.rootPage = 'LoginPage';
        unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.oneSignal.startInit('66722b88-63fc-4a80-9832-2df96aa60e54', '966188057856');

       this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

       this.oneSignal.handleNotificationReceived().subscribe(() => {
 // do something when notification is received
                  });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
  // do something when a notification is opened
                  });

        this.oneSignal.endInit();
       });
  }
}
