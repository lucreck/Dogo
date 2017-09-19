var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
// import { UserData } from '../providers/user-data';
// import { UserOptions } from '../interfaces/user-options';
import { AccountPage } from '../pages/account/account';
// import { ConferenceData } from '../providers/conference-data';
// collection page
import { CollectionsPage } from '../pages/collections/collections';
// // collection page
// import { CollectionsPage } from '../pages/collections/collections';
// import { Modal2Page, ModalContentPage } from '../pages/modal2/modal2';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl, menu) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.menu = menu;
        // @Pipe(MyApp);
        // @ViewChild('navCtrl') navCtrl: NavController;
        this.rootPage = HomePage;
        this.initializeApp();
        // // load the conference data
        //     confData.load();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Trang chủ', component: HomePage, icon: 'add-circle' },
            { title: 'Gia dụng', component: CollectionsPage, icon: 'add-circle' },
            { title: 'Mẹ và bé', component: CollectionsPage, icon: 'add-circle' },
        ];
    }
    MyApp.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(AccountPage, characterNum);
        modal.present();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform,
        StatusBar,
        SplashScreen,
        ModalController,
        MenuController])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map