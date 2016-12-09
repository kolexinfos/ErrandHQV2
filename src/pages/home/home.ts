import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';

import { GosendPage } from '../gosend/gosend';
import { GofoodPage } from '../gofood/gofood';
import { GocleanPage } from '../goclean/goclean';
import { GopersonalPage } from '../gopersonal/gopersonal';



//import {RadioPlayer} from '../../providers/radio-player/radio-player';

declare var window;
/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'home.html',

})
export class HomePage {

  mySlideOptions = {
    initialSlide: 1,
    loop: true,
    autoplay: 2000,
    pager:true
  };

  constructor( public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

onSlideChangeStart(event){
  //console.log("onSlideChangeStart");
}

GoSend(){
  console.log("Go to GoSendPage");
  this.navCtrl.push(GosendPage);
}

GoSendEnquiry(){
  console.log("Clicked GoSendEnquiry");
}

GoSendAvailability(){
  console.log("Clicked GoSendAvailability");
}

GoSendMore(){
 console.log("Clicked GoSendMore");
}

GoClean(){
  console.log("Go to GoCleanPage");
  this.navCtrl.push(GocleanPage);
}

GoCleanEnquiry(){
  console.log("Clicked GoCleanEnquiry");
}

GoCleanAvailability(){
  console.log("Clicked GoCleanAvailability");
}

GoCleanMore(){
  console.log("Clicked GoCleanMore");
}

GoFood(){
  console.log("Go to GoFoodPage");
 this.navCtrl.push(GofoodPage);
}

GoFoodEnquiry(){
 console.log("Clicked GoFoodEnquiry");
}

GoFoodAvailability(){
  console.log("Clicked GoFoodAvailability");
}

GoFoodMore(){
  console.log("Clicked GoFoodMore");
}

GoPersonal(){
  console.log("Go to GoPersonalPage");
this.navCtrl.push(GopersonalPage);
}

GoPersonalEnquiry(){
  console.log("Clicked GoPeronsalEnquiry");
}

GoPersonalAvailability(){
  console.log("Clicked GoPersonalAvailability");
}

GoPersonalMore(){
  console.log("Clicked GoPersonalMore");
}


}
