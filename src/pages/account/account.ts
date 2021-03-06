import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Platform, ViewController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { ConferenceData } from '../../providers/conference-data';



@Component({
  templateUrl: 'account.html'
})


export class AccountPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public confData: ConferenceData,
    public userData: UserData,
    public storage: Storage,
    // public elementRef: ElementRef,
    
  ) {
 
    confData.load();
  }
tabAcc: string = this.params.get('charNum');
  isAndroid: boolean = false;
  dismiss() {
    this.viewCtrl.dismiss();
  }
  // /**
  //    * @private
  //    */
  // TextInput.prototype.clearTextInput = function () {
  //       void 0;
  //       this._value = '';
  //       // this.onChange(this._value);
  //       this.writeValue(this._value);
  //   };
//     InputBase.prototype.clearTextInput1 = function () {
// void 0;
// this._value = '';
// };
 // @ViewChild('searchbar', {read: ElementRef}) searchbar: ElementRef;
// reset input
// itemAround = get.
// inputAround = document.getElementsByTagName('ion-item');
// inputAround1: any[] =[document.getElementsByTagName('ion-item')];
// ngAfterViewInit() {}
// resetInput() {
// var inputAround = this.searchbar.nativeElement.querySelector('ion-item');
// 	inputAround.forEach(function() {
// 		this.find('ion-input').value('');
// 	})
// }

// public valueInput: string;
// reset() {
// var valueInput = '';
// 	let el = this.elementRef.nativeElement;
//    var svg = document.getElementsByTagName('input');
//    <HTMLInputElement>document.getElementsByClassName("searchbar-input") = <HTMLCollectionOf>get.valueInput;
//   // name.elementRef.nativeElement.value;
// 	 document.getElementsByTagName('input')= valueInput ;
// }
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

  }
}
