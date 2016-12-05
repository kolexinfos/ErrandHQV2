import { Component } from '@angular/core';

import { MenuController, NavController, Platform } from 'ionic-angular';

import { SignupPage } from '../signup/signup';

import { UserProvider } from '../../providers/user-provider/user-provider';

declare var window;

interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  templateUrl: 'tutorial.html',
  
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;


  constructor(public platform: Platform, public navCtrl: NavController, public menu: MenuController, public userProvider: UserProvider) {
    this.slides = [
      {
        title: 'Welcome to <b>ErrandHQ</b>',
        description: '<b>ErrandHQ helps you get stuff done</b>',
        image: 'img/logo.png',
      },
      {
        title: 'This is how <b>ErrandHQ</b> Works',
        description: 'You want to get stuff done but can not move around?',
        image: 'img/logo.png',
      },
      {
        title: 'Then what happens next?',
        description: 'Tell us you <i>Need Help</i>',
        image: 'img/logo.png',
      },
      {
        title: 'Need some tips to stay head on schedule??',
        description: 'Gain a <i>heads-up</i> by inviting friends</b>.',
        image: 'img/logo.png',
      }
    ];

    this.platform.ready().then(() => {
      console.log("ionViewWillEnter called");
    console.log(this.userProvider.GetLocalObject('user'));



    if(this.userProvider.GetLocalObject('user') != null){
      //this.navCtrl.setRoot(HomePage);
    }
    });
  }

  startApp() {

    this.navCtrl.setRoot(SignupPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(true);

  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

  gotoHome() {
    this.navCtrl.push(SignupPage);
  }
}
