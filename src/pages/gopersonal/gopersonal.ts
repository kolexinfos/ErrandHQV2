import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Gopersonal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gopersonal',
  templateUrl: 'gopersonal.html'
})
export class GopersonalPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GopersonalPage Page');
  }

}
