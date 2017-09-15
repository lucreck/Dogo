import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpModule } from '@angular/http';
// // login
// import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

import { MyApp} from './app.component';
import { HomePage, collectionHome } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccountPage } from '../pages/account/account';
import { UserData } from '../providers/user-data';


// import { Modal2Page, ModalContentPage } from '../pages/modal2/modal2';

import { FormBuilder } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IonicStorageModule} from '@ionic/storage';
// import { Storage } from '@ionic/storage';
import { ConferenceData } from '../providers/conference-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AccountPage,
    collectionHome
    // Modal2Page,
    // ModalContentPage
  ],
  imports: [
    BrowserModule,
    HttpModule,

    IonicModule.forRoot(MyApp, {
      backButtonIcon: "ios-arrow-back",
      iconMode: "ios",
      tabsPlacement: "bottom"
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    collectionHome,
    AccountPage
    // Modal2Page,
    // ModalContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FormBuilder,
    ConferenceData,
    UserData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
//   constructor(public navCtrl: NavController){
// }

}
