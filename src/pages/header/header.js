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
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
/**
 * Generated class for the HeaderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HeaderPage = (function () {
    function HeaderPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
    }
    HeaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeaderPage');
    };
    HeaderPage.prototype.openMenu = function (evt) {
        if (evt === "main") {
            this.menu.enable(true, 'menu1');
            this.menu.enable(false, 'menu2');
        }
        else {
            this.menu.enable(true, 'menu2');
            this.menu.enable(false, 'menu1');
        }
        this.menu.toggle();
    };
    return HeaderPage;
}());
HeaderPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-header',
        templateUrl: 'header.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, MenuController])
], HeaderPage);
export { HeaderPage };
//# sourceMappingURL=header.js.map