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
import { Nav, NavParams, MenuController, NavController } from 'ionic-angular';
// import { NgForm } from '@angular/forms';
// import { UserData } from '../../providers/user-data';
// import { UserOptions } from '../../interfaces/user-options';
// import { ConferenceData } from '../../providers/conference-data';
// import { Storage } from '@ionic/storage';
// collection page
import { CollectionsPage } from '../collections/collections';
// Product page
import { ProductPage } from '../product/product';
var HomePage = (function () {
    function HomePage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        // menu.enable(true);
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    HomePage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(CollectionsPage, {
            item: item
        });
    };
    return HomePage;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], HomePage.prototype, "nav", void 0);
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        MenuController])
], HomePage);
export { HomePage };
var collectionHome = (function () {
    function collectionHome(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        //      var mySwiper = new Swiper('.swiper-container', {
        //     speed: 400,
        //     spaceBetween: 100
        // });
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
        // product
        // If we navigated to this page, we will have an product available as a nav param
        this.selectedProduct = navParams.get('product');
        // Let's populate this page with some filler content for funzies
        this.proicon = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.products = [];
        for (var i = 1; i < 11; i++) {
            this.products.push({
                title: 'product ' + i,
                note: 'This is product #' + i,
                icon: this.proicon[Math.floor(Math.random() * this.proicon.length)]
            });
        }
    }
    collectionHome.prototype.productTapped = function (event, product) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ProductPage, {
            product: product
        });
    };
    collectionHome.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(CollectionsPage, {
            item: item
        });
    };
    return collectionHome;
}());
collectionHome = __decorate([
    Component({
        selector: 'collection-home',
        templateUrl: 'home-collection.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        MenuController])
], collectionHome);
export { collectionHome };
//# sourceMappingURL=home.js.map