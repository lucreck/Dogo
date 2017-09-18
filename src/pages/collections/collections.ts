import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Product page
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-collections',
  templateUrl: 'collections.html'
})
export class CollectionsPage {
 // product
  selectedProduct: any;
  icons: string[];
  products: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an product available as a nav param
    this.selectedProduct = navParams.get('product');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.products = [];
    for (let i = 1; i < 11; i++) {
      this.products.push({
        title: 'product ' + i,
        note: 'This is product #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  
  productTapped(event, product) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductPage, {
      product: product
    });
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
}

 

