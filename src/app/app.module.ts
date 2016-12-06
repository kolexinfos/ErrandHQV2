import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { VerifyPage } from '../pages/verify/verify';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SignupPage } from '../pages/signup/signup';
import { GocleanPage } from '../pages/goclean/goclean';
import { GofoodPage } from '../pages/gofood/gofood';
import { GosendPage } from '../pages/gosend/gosend';
import { GopersonalPage } from '../pages/gopersonal/gopersonal';

import { ServiceProvider } from '../providers/service-provider/service-provider';
import { UserProvider } from '../providers/user-provider/user-provider';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    TutorialPage,
    VerifyPage,
    SignupPage,
    GocleanPage,
    GofoodPage,
    GopersonalPage,
    GosendPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    TutorialPage,
    VerifyPage,
    SignupPage,
    GofoodPage,
    GocleanPage,
    GosendPage,
    GopersonalPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},UserProvider]
})
export class AppModule {}
