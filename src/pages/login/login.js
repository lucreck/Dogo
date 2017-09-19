var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Platform, ViewController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserData } from '../../providers/user-data';
import { ConferenceData } from '../../providers/conference-data';
// import { TabsPage } from '../tabs-page/tabs-page';
// import { SignupPage } from '../signup/signup';
var LoginPage = (function () {
    function LoginPage(platform, params, viewCtrl, confData, userData, storage) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.confData = confData;
        this.userData = userData;
        this.storage = storage;
        this.tabAcc = this.params.get('charNum');
        this.isAndroid = false;
        this.type = 'password';
        this.showPass = false;
        this.iconPass = 'eye-off';
        this.login = { username: '', password: '' };
        this.submitted = false;
        this.signup = { username: '', password: '' };
        confData.load();
    }
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
            this.iconPass = 'eye';
        }
        else {
            this.type = 'password';
            this.iconPass = 'eye-off';
        }
    };
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            // this.navCtrl.push(TabsPage);
        }
    };
    LoginPage.prototype.onSignup = function () {
        // this.navCtrl.push(SignupPage);
    };
    LoginPage.prototype.onRegis = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup.username);
            // this.navCtrl.push(TabsPage);
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Component({
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [Platform,
        NavParams,
        ViewController,
        ConferenceData,
        UserData,
        Storage])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map