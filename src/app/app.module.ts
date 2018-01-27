import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StripeJavaScriptPage } from '../pages/stripe-java-script/stripe-java-script';
import { StripeNativePage } from '../pages/stripe-native/stripe-native';

import { Stripe } from '@ionic-native/stripe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StripeJavaScriptPage,
    StripeNativePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StripeJavaScriptPage,
    StripeNativePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
