import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the HeaderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
})
export class HeaderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderPage');
  }
   openMenu(evt) {
      if(evt === "main"){ 
         this.menu.enable(true, 'menu1');
         this.menu.enable(false, 'menu2');
      }else{
         this.menu.enable(true, 'menu2');
         this.menu.enable(false, 'menu1');
      }
      this.menu.toggle();
  }

}
