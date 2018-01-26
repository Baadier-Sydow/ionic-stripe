import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StripeJavaScriptPage } from './../stripe-java-script/stripe-java-script';

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

}
