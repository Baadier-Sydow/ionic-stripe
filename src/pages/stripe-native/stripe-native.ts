import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';

@Component({
  selector: 'page-stripe-native',
  templateUrl: 'stripe-native.html',
})
export class StripeNativePage {

  cardNumber: string;
  cardMonth: number;
  cardYear: number;
  cardCVV: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public stripe: Stripe) {
  }

  ionViewDidLoad() {
    this.stripe.setPublishableKey('');
  }

  validateCard(){
    let card = {
      number: this.cardNumber,
      expMonth: this.cardMonth,
      expYear: this.cardYear,
      cvc: this.cardCVV
     };

     // Run card validation here and then attempt to tokenise
     
     this.stripe.createCardToken(card)
        .then(token => console.log(token))
        .catch(error => console.error(error));
  }

}
