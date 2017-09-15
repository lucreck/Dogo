import { Component, ViewChild, Input } from '@angular/core';
import { Nav, Platform, ViewController, ModalController, NavParams,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
// login
// import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { UserData } from '../providers/user-data';
import { UserOptions } from '../interfaces/user-options';
import { ConferenceData } from '../providers/conference-data';

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

pages: Array<{title: string, component: any}>;

constructor(
  public platform: Platform,
  public statusBar: StatusBar,
  public splashScreen: SplashScreen,
  public modalCtrl: ModalController,
  // public confData: ConferenceData,
  // public userData: UserData,
  // public storage: Storage
  ) {
  this.initializeApp();
// // load the conference data
//     confData.load();
  // used for an example of ngFor and navigation
  this.pages = [
    { title: 'Home', component: HomePage },
    { title: 'List', component: ListPage },
    // { title: 'Đăng ký', component: Modal2Page },
    // { title: 'Đăng nhập', component: ListPage },
  ];

}
openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

  
//   goBack() {
//     // this.navCtrl.pop();
//   }
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


@Component({
  template: `
<ion-header color="primary">
  <ion-toolbar>
    <ion-title text-uppercase class="title-modal">
      Đăng nhập / Đăng ký
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()" class="fsize-38" padding-horizontal>
        <ion-icon name="close"></ion-icon>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-segment [(ngModel)]="tabAcc">
    <ion-segment-button value="loginTab" text-uppercase>
      đăng nhập
    </ion-segment-button>
    <ion-segment-button value="regTab" text-uppercase>
      đăng ký
    </ion-segment-button>
  </ion-segment>

<div [ngSwitch]="tabAcc">

  <ion-list *ngSwitchCase="'loginTab'">
    <ion-item>
      <ion-thumbnail item-start>
        <form #loginForm="ngForm" novalidate>
        
          <ion-list>
            <ion-item>
              <ion-label floating>Địa chỉ email</ion-label>
              <ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"
                required>
              </ion-input>
              <button ion-button item-right type="reset" class="fs-clear-btn">
                <ion-icon name="close"></ion-icon>
                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
              </button>
            </ion-item>
            <p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>
              Địa chỉ email không hợp lệ!
            </p>
            <ion-item>
              <ion-label floating>Mật khẩu</ion-label>
              <ion-input [(ngModel)]="login.password" name="password" type="{{type}}" #password="ngModel" required>
              </ion-input>
              <button ion-button item-right class="fs-eye" (click)="showPassword()">
                <ion-icon name="{{iconPass}}" md="md-{{iconPass}}" showWhen="android, windows"></ion-icon>
                <ion-icon ios="ios-{{iconPass}}" md="md-{{iconPass}}"></ion-icon>
              </button>
            </ion-item>
            <p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>
              Mật khẩu không hợp lệ!
            </p>
          </ion-list>

          <ion-row>
            <ion-col class="fget-pas" text-right padding-bottom>
              <a>Quên mật khẩu?</a>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col col-12 padding-left>
              <button ion-button (click)="onLogin(loginForm)" type="submit" full text-uppercase>Đăng nhập</button>
            </ion-col>
            
          </ion-row>
        </form>
        <ion-row>
          <ion-col col-12 text-center padding-vertical>
            <b>Hoặc đăng nhập bằng</b>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-8 offset-2 text-center>
            <button ion-button block text-uppercase icon-left class="btn-social-gg"><ion-icon name="logo-google"></ion-icon> Tài khoản google</button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-8 offset-2 text-center>
            <button ion-button block text-uppercase icon-left class="btn-social-fb"><ion-icon name="logo-facebook"></ion-icon> Tài khoản facebook</button>
          </ion-col>
        </ion-row>
      </ion-thumbnail>
    </ion-item>
  </ion-list>

  <ion-list *ngSwitchCase="'regTab'">
    <ion-item>
      <ion-thumbnail item-start>
        
        <form #signupForm="ngForm" novalidate>
        
          <ion-list>
          <ion-row>
            <ion-col col-12 padding-top>
              <b>Cần điền tất cả các mục</b>
            </ion-col>
          </ion-row>
            <ion-item>
              <ion-label floating>Họ tên đầy đủ</ion-label>
              <ion-input [(ngModel)]="signup.fullname" name="fullname" type="text" #fullname="ngModel" spellcheck="false" autocapitalize="off"
                required>
              </ion-input>
              <button ion-button item-right type="reset" class="fs-clear-btn">
                <ion-icon name="close"></ion-icon>
                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
              </button>
            </ion-item>
            <p ion-text [hidden]="fullname.valid || submitted == false" color="danger" padding-left>
              Mục này còn thiếu
            </p>
            <ion-item>
              <ion-label floating>Địa chỉ email</ion-label>
              <ion-input [(ngModel)]="signup.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"
                required>
              </ion-input>
              <button ion-button item-right type="reset" class="fs-clear-btn">
                <ion-icon name="close"></ion-icon>
                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
              </button>
            </ion-item>
            <p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>
              Địa chỉ email không hợp lệ!
            </p>
            <ion-item padding-bottom>
              <ion-label floating>Số điện thoại</ion-label>
              <ion-input [(ngModel)]="signup.phone" name="phone" type="number" #phone="ngModel" spellcheck="false" autocapitalize="off"
                required>
              </ion-input>
              <button ion-button item-right type="reset" class="fs-clear-btn">
                <ion-icon name="close"></ion-icon>
                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
              </button>
            </ion-item>
            <p ion-text [hidden]="phone.valid || submitted == false" color="danger" padding-left>
              Số điện thoại không hợp lệ!
            </p>
            <ion-item padding-top>
              <ion-label floating>Mật khẩu</ion-label>
              <ion-input [(ngModel)]="signup.password" name="password" type="{{type}}" #password="ngModel" required>
              </ion-input>
              <button ion-button item-right class="fs-eye" (click)="showPassword()">
                <ion-icon name="{{iconPass}}" md="md-{{iconPass}}" showWhen="android, windows"></ion-icon>
                <ion-icon ios="ios-{{iconPass}}" md="md-{{iconPass}}"></ion-icon>
              </button>
            </ion-item>
            <p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>
              Mật khẩu không hợp lệ!
            </p>
            <p ion-text padding>
              Mật khẩu phải bao gồm ít nhất 6 ký tự và 1 chữ hoa
            </p>
            <ion-item padding-bottom>
              <ion-label floating>Nhập lại mật khẩu</ion-label>
              <ion-input [(ngModel)]="signup.repassword" name="repassword" type="{{type}}" #repassword="ngModel" required>
              </ion-input>
              <button ion-button item-right class="fs-eye" (click)="showPassword()">
                <ion-icon name="{{iconPass}}" md="md-{{iconPass}}" showWhen="android, windows"></ion-icon>
                <ion-icon ios="ios-{{iconPass}}" md="md-{{iconPass}}"></ion-icon>
              </button>
            </ion-item>
            <p ion-text [hidden]="repassword.valid || submitted == false" color="danger" padding-left>
              Mật khẩu nhập lại không đúng!
            </p>
            <ion-item padding-top>
              <ion-label floating text-uppercase>mã giới thiệu</ion-label>
              <ion-input [(ngModel)]="login.code" name="code" type="text" #code="ngModel" spellcheck="false" autocapitalize="off"
                required>
              </ion-input>
              <button ion-button item-right type="reset" class="fs-clear-btn">
                <ion-icon name="close"></ion-icon>
                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
              </button>
            </ion-item>
            <p ion-text [hidden]="code.valid || submitted == false" color="danger" padding-left>
              Địa chỉ email không hợp lệ!
            </p>
            <p ion-text padding>
              Mã giới thiệu được tạo ra bởi thành viên chính thức
            </p>
            <ion-item padding-vertical class="border-bt-no">
              <ion-label>Tôi muốn nhận các tin khuyến mại qua email</ion-label>
              <ion-toggle checked="true"></ion-toggle>
            </ion-item>
          </ion-list>

          <ion-row>
            <ion-col col-12 padding-left>
              <button ion-button (click)="onRegis(signupForm)" type="submit" full text-uppercase>Đăng ký ngay</button>
            </ion-col>
            
          </ion-row>
        </form>
        <ion-row padding-bottom>
          <ion-col col-12 text-center padding-top>
            <p padding-left>Tôi đã đọc và hiểu rõ các <a>điều khoản</a> và <a>chính sách bảo mật</a> của hệ thống Dogo Apps</p>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-12 text-center padding-vertical>
            <b>Hoặc đăng ký bằng</b>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-8 offset-2 text-center>
            <button ion-button block text-uppercase icon-left class="btn-social-gg"><ion-icon name="logo-google"></ion-icon> Tài khoản google</button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-8 offset-2 text-center>
            <button ion-button block text-uppercase icon-left class="btn-social-fb"><ion-icon name="logo-facebook"></ion-icon> Tài khoản facebook</button>
          </ion-col>
        </ion-row>
      </ion-thumbnail>
    </ion-item>
  </ion-list>

</div>
  
</ion-content>
`
})
// <ion-col>
//         <button ion-button (click)="onSignup()" color="light" block>Signup</button>
//       </ion-col>

// export interface UserOptions {
// }

export class ModalContentPage {
  // username: string;
  // password: string;
  character;
   
  // @ViewChild(Nav) nav: Nav;
  // set the root pages for each tab
//   .state('tabs.collections', {
//   url: "/collections",
//   views: {
//     'home-tab': {
//       template: "hihi",
//       controller: 'collections'
//     }
//   }
// })
// @ViewChild('myTabs') tabRef: Tabs;

// ionViewDidEnter() {
//   this.tabRef.select(2);
//  }

  
// mySelectedIndex: number;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public confData: ConferenceData,
    public userData: UserData,
    public storage: Storage,
    // public auth: Auth,
    // public user: User
    // public userData: UserData
  ) {
 // this.mySelectedIndex = params.data.tabIndex || 0;
  // this.isAndroid = platform.is('android');
    // load the conference data
    confData.load();
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    // this.character = characters[this.params.get('charNum')];

  }
tabAcc: string = this.params.get('charNum');
  isAndroid: boolean = false;
  dismiss() {
    this.viewCtrl.dismiss();
  }
  public type = 'password';
  public showPass = false;
  public iconPass = 'eye-off';
 
 
  showPassword() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
      this.iconPass = 'eye';
    } else {
      this.type = 'password';
      this.iconPass = 'eye-off';
    }
  }
//   resetInput() {
// this.value('');
//   };
  // login: UserOptions = { username: '', password: '' };
  // submitted = false;

  // onLogin(form: NgForm) {
  //   this.submitted = true;

  //   if (form.valid) {
  //     this.userData.login(this.login.username);
  //     // this.navCtrl.push(TabsPage);
  //   }
  // }
// tabAcc: string = "loginTab";
// tabAcc: string = "loginTab";
//   isAndroid: boolean = false;
  // onSignup() {
  //   // this.navCtrl.push(SignupPage);
  // }
login: UserOptions = { username: '', password: '' };
  submitted = false;

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      // this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    // this.navCtrl.push(SignupPage);
  }

  signup: UserOptions = { username: '', password: '' };


  onRegis(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      // this.navCtrl.push(TabsPage);
    }

  // test regis
//   this.auth.signup(this.signup).then(() => {
//   // `this.user` is now registered
// }, (err: IDetailedError<string[]>) => {
//   for (let e of err.details) {
//     if (e === 'conflict_email') {
//       alert('Email already exists.');
//     } else {
//       // handle other errors
//     }
//   }
// });
  }
}
// export interface UserOptions {
//   username: string,
//   password: string
// }

export class FloatingPage { }
