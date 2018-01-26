import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StripeJavaScriptPage } from './../stripe-java-script/stripe-java-script';
import { StripeNativePage } from '../stripe-native/stripe-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openJavaScript(){
    this.navCtrl.push(StripeJavaScriptPage)
  }

  openNative(){
    this.navCtrl.push(StripeNativePage)
  }

}
