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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild(Nav) nav: Nav;

  
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  

  constructor(
     public navCtrl: NavController,
    public navParams: NavParams, 
    public menu: MenuController
    ) {

    // menu.enable(true);
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

    
  }  

itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CollectionsPage, {
      item: item
    });
  }



}
@Component({
  selector: 'collection-home',
  templateUrl: 'home-collection.html'
})
export class collectionHome {
  // collection
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  // product
  selectedProduct: any;
  proicon: string[];
  products: Array<{title: string, note: string, icon: string}>;

   constructor(
     public navCtrl: NavController,
    public navParams: NavParams, 
    public menu: MenuController
    ) {
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
}
