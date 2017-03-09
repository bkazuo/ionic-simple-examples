import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleService {

	
	data: any;
 
  constructor(private http: Http) {
    this.data = null;
  }
 
  load() {
  	// console.log(this.http.get('https://randomuser.me/api/'));
   //  if (this.data) {
   //    return Promise.resolve(this.data);
   //  }
 
    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=20')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.results;
          resolve(this.data);
        });
    });
  }





	// data: any;

 //  constructor(public http: Http) {
 //  	this.data = null;
 //  }

 //  load(){
 //    // console.log(this.http.get('https://randomuser.me/api/?results=10'));
 //  }

}
