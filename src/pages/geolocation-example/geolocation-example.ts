import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';


/*
  Generated class for the GeolocationExample page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-geolocation-example',
  templateUrl: 'geolocation-example.html',
  providers: [Geolocation]
})
export class GeolocationExamplePage {

  lat: any;
  lng: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  	this.getPosition();
  }

  getPosition() {
	  Geolocation.getCurrentPosition().then((resp) => {
	  	this.lat = resp.coords.latitude;
	  	this.lng = resp.coords.longitude;
		 	console.log(resp.coords.latitude);
		 	console.log(resp.coords.longitude);

		}).catch((error) => {
	  	console.log('Error getting location', error);
		});

  }
}
