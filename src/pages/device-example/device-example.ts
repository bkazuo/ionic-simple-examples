import { Device } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DeviceExample page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-device-example',
  templateUrl: 'device-example.html',
  providers: [Device]
})
export class DeviceExamplePage {

	version: any;
	manufacturer: any;
	model: any;
	name: any;
	uuid: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public device: Device) {
  	this.version = Device.version;
		this.manufacturer = Device.manufacturer;
		this.model = Device.model;
		this.name = Device.name;
		this.uuid = Device.uuid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceExamplePage');
  }

}
