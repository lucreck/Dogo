import { Component, ViewChild } from '@angular/core';
import { Nav, NavParams, MenuController, NavController } from 'ionic-angular';
// import { NgForm } from '@angular/forms';

// import { UserData } from '../../providers/user-data';
// import { UserOptions } from '../../interfaces/user-options';
// import { ConferenceData } from '../../providers/conference-data';
// import { Storage } from '@ionic/storage';

// collection page
import { CollectionsPage } from '../collections/collections';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild(Nav) nav: Nav;
  constructor(
     public navCtrl: NavController,
    public navParams: NavParams, 
    public menu: MenuController
   
    ) {
    menu.enable(true);
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
 

 

  viewCollection(id) {
    
  }
 
}
@Component({
  selector: 'collection-home',
  templateUrl: 'home-collection.html'
})
export class collectionHome {

}
