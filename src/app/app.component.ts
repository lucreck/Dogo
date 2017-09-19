import { Component, ViewChild} from '@angular/core';
import { Nav, Platform, MenuController, ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { Storage } from '@ionic/storage';
// import { FormBuilder, Validators } from '@angular/forms';
// import { NgForm } from '@angular/forms';
// login
// import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

// import { HeaderPage } from '../pages/header/header';
import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
// import { UserData } from '../providers/user-data';
// import { UserOptions } from '../interfaces/user-options';
import { AccountPage } from '../pages/account/account';
// import { ConferenceData } from '../providers/conference-data';

// collection page
import { CollectionsPage } from '../pages/collections/collections';
// // collection page
// import { CollectionsPage } from '../pages/collections/collections';
// import { Modal2Page, ModalContentPage } from '../pages/modal2/modal2';

@Component({
templateUrl: 'app.html'
})
export class MyApp {
@ViewChild(Nav) nav: Nav;
// @Pipe(MyApp);
 // @ViewChild('navCtrl') navCtrl: NavController;
rootPage: any = HomePage;

pages: Array<{title: string, component: any, icon: string}>;

constructor(
  public platform: Platform,
  public statusBar: StatusBar,
  public splashScreen: SplashScreen,
  public modalCtrl: ModalController,
  public menu: MenuController

  ) {
  this.initializeApp();
// // load the conference data
//     confData.load();
  // used for an example of ngFor and navigation
  this.pages = [
    { title: 'Trang chủ', component: HomePage, icon: 'add-circle' },
    { title: 'Gia dụng', component: CollectionsPage, icon: 'add-circle' },
    { title: 'Mẹ và bé', component: CollectionsPage, icon: 'add-circle' },
    // { title: 'Đăng ký', component: Modal2Page },
    // { title: 'Đăng nhập', component: ListPage },
  ];
 

} 

openModal(characterNum) {

    let modal = this.modalCtrl.create(AccountPage, characterNum);
    modal.present();
  }

initializeApp() {
  this.platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  });
}

openPage(page) {
  // Reset the content nav to have just this page
  // we wouldn't want the back button to show in this scenario
  this.nav.setRoot(page.component);
}

}

