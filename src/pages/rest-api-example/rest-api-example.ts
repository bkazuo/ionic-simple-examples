import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PeopleService } from '../../providers/people-service';

/*
  Generated class for the RestApiExample page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rest-api-example',
  templateUrl: 'rest-api-example.html',
  providers: [PeopleService]
})
export class RestApiExamplePage {

	public people: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleService: PeopleService) {
  	this.loadPeople();
  }

  loadPeople(){
    this.peopleService.load()
    .then(data => {
      this.people = data;
    });
  }


  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RestApiExamplePage');
  // }

}
