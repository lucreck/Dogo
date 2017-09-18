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
import { HeaderPage } from '../pages/header/header';
import { UserData } from '../providers/user-data';
// collection page
import { CollectionsPage } from '../pages/collections/collections';
// Product page
import { ProductPage } from '../pages/product/product';

import { FormBuilder } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IonicStorageModule} from '@ionic/storage';
import { ConferenceData } from '../providers/conference-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AccountPage,
    collectionHome,
    CollectionsPage,
    HeaderPage,
    ProductPage
  ],
  imports: [
    BrowserModule,
    HttpModule,

    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: "md-arrow-back",
      // iconMode: "ios",
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
    AccountPage,
    CollectionsPage,
    HeaderPage,
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FormBuilder,
    ConferenceData,
    UserData,
    // NavParams,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
//   constructor(public navCtrl: NavController){
// }

}
