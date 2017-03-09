import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { NewPageExamplePage } from '../new-page-example/new-page-example';
import { RestApiExamplePage } from '../rest-api-example/rest-api-example';

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
}
