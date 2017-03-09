import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the NewPageExample page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-page-example',
  templateUrl: 'new-page-example.html'
})
export class NewPageExamplePage {

	item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.item = navParams.get('text');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPageExamplePage');
  }

}
