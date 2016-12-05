import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';

//import { WebPage } from '../web/web';
//import { ReportPage } from '../report/report';
//import { ContactPage } from '../contact/contact';

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

}
