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
import { NavController, NavParams } from 'ionic-angular';
// Product page
import { ProductPage } from '../product/product';
var CollectionsPage = (function () {
    function CollectionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an product available as a nav param
        this.selectedProduct = navParams.get('product');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.products = [];
        for (var i = 1; i < 11; i++) {
            this.products.push({
                title: 'product ' + i,
                note: 'This is product #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    CollectionsPage.prototype.productTapped = function (event, product) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ProductPage, {
            product: product
        });
    };
    CollectionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPage');
    };
    return CollectionsPage;
}());
CollectionsPage = __decorate([
    Component({
        selector: 'page-collections',
        templateUrl: 'collections.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], CollectionsPage);
export { CollectionsPage };
//# sourceMappingURL=collections.js.map