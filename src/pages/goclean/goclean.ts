import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



/*
  Generated class for the Goclean page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-goclean',
  templateUrl: 'goclean.html'
})
export class GocleanPage {
  goclean: {location?: string, size?: number, email?: string, phone?: string} = {};
  submitted:boolean = false;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GocleanPage Page');
  }

  showMap(){
    console.log("Location input clicked");
  }

}
