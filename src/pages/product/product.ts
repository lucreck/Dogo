import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// collection page
import { CollectionsPage } from '../collections/collections';



/**
 * Generated class for the ProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
num: number = 1;
// collection
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  // product
  selectedProduct: any;
  proicon: string[];
  products: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	 // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
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
    for (let i = 1; i < 11; i++) {
      this.products.push({
        title: 'product ' + i,
        note: 'This is product #' + i,
        icon: this.proicon[Math.floor(Math.random() * this.proicon.length)]
      });
    }

  }
 productTapped(event, product) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductPage, {
      product: product
    });
  } 
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CollectionsPage, {
      item: item
    });
  }
	doPlus(){
		this.num = this.num + 1;
		return this.num;
	}
	doMinus(num){
		this.num = num - 1;
		return this.num;
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
}
