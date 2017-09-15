import { Component } from '@angular/core';
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
    
  ) {
 
    confData.load();
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
