import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Gofood page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gofood',
  templateUrl: 'gofood.html'
})
export class GofoodPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GofoodPage Page');
  }

}
