import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageExample page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-storage-example',
  templateUrl: 'storage-example.html'
})
export class StorageExamplePage {

	age: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    storage.ready().then(() => {

			// set a key/value
			storage.set('age', '23');

			// Or to get a key/value pair
			storage.get('age').then((val) => {
				console.log('Your age is', val);
				this.age = val;
			})
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorageExamplePage');
  }

}
