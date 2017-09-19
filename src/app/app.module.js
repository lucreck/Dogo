var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
// // login
// import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
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
import { IonicStorageModule } from '@ionic/storage';
import { ConferenceData } from '../providers/conference-data';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map