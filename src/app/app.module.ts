import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { ImagePicker } from '@ionic-native/image-picker';


import { firebaseConfig } from './firebaseconf';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { TrajetsPage } from '../pages/trajets/trajets';
import { SearchresultPage } from '../pages/searchresult/searchresult';
import { SearchPage } from '../pages/search/search';
import { ProposePage } from '../pages/propose/propose';
import { MytrajetsPage } from '../pages/mytrajets/mytrajets';
import { CommDataProvider } from '../providers/comm-data/comm-data';
import { AutocompletePage } from '../pages/autocomplete/autocomplete';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrajetsPage,
    SearchPage,
    ProposePage,
    ProfilePage,
    MytrajetsPage,
    SearchresultPage,
    AutocompletePage,
    AboutPage
  ],
  imports: [

    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDo42K5dooXhYOY2hlGBy7wkUR8lFB7ew4",
      libraries: ["places"]
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularFireDatabaseModule,
    GooglePlaceModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrajetsPage,
    SearchPage,
    ProposePage,
    ProfilePage,
    SearchresultPage,
    MytrajetsPage,
    AutocompletePage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    CommDataProvider,
    ImagePicker
  ]
})
export class AppModule {}
