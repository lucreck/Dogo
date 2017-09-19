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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProductPage = (function () {
    function ProductPage(navCtrl, navParams) {
        // HTMLElement num: number = );
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.num = 1;
        // this.element = element;
        // this.element.innerText += "The time is: ";
        // this.span = document.createElement('span');
        // element = document.getElementById('qty-num');
    }
    // element: HTMLElement;
    // this.deeplinks.route({
    //      '/product/:overview': ProductPage,
    //      '/product/:detail': ProductPage
    //    }).subscribe((match) => {
    //      // match.$route - the route we matched, which is the matched entry from the arguments to route()
    //      // match.$args - the args passed in the link
    //      // match.$link - the full link data
    //      console.log('Successfully matched route', match);
    //    }, (nomatch) => {
    //      // nomatch.$link - the full link data
    //      console.error('Got a deeplink that didn\'t match', nomatch);
    //    });
    // HTMLCollectionOf <ipt>(document.getElementsByClassName('qty-num text-input'));
    // var document: Document.getElementsByClassName('qty-num text-input')[0];
    ProductPage.prototype.doPlus = function () {
        this.num = this.num + 1;
        // return this.num;
    };
    ProductPage.prototype.doMinus = function (num) {
        // var numIpt = document.getElementsByClassName('qty-num text-input')[0];
        // this.num = numIpt + 1;
        this.num = num - 1;
        // return this.num;
    };
    // 	className: string = 'item-selected';
    // variantSelected () {
    // this.className = 'item-variant';
    // }
    ProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPage');
    };
    return ProductPage;
}());
ProductPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-product',
        templateUrl: 'product.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], ProductPage);
export { ProductPage };
//# sourceMappingURL=product.js.map