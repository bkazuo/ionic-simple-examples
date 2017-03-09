import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { NewPageExamplePage } from '../new-page-example/new-page-example';
import { RestApiExamplePage } from '../rest-api-example/rest-api-example';
import { GeolocationExamplePage } from '../geolocation-example/geolocation-example';
import { StorageExamplePage } from '../storage-example/storage-example';
import { DeviceExamplePage } from '../device-example/device-example';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  newPageExample(string){
  	// console.log(string);
  	this.navCtrl.push(NewPageExamplePage, {text: string});
  }

  restApiExample(){
  	this.navCtrl.push(RestApiExamplePage);
  }

  geolocationExample(){
    this.navCtrl.push(GeolocationExamplePage);
  }

  storageExample(){
    this.navCtrl.push(StorageExamplePage);
  }

  deviceExample(){
    this.navCtrl.push(DeviceExamplePage);
  }
}
