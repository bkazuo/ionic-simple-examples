import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SQLite} from "ionic-native";

/*
  Generated class for the DatabaseExample page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-database-example',
  templateUrl: 'database-example.html'
})
export class DatabaseExamplePage {

	public database: SQLite;
	public people: Array<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.database = new SQLite();
    this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
        this.refresh();
    }, (error) => {
        console.log("ERROR: ", error);
    });
  }

  public add() {
    this.database.executeSql("INSERT INTO people (firstname, lastname) VALUES ('Database', 'Test')", []).then((data) => {
        console.log("INSERTED: " + JSON.stringify(data));
    }, (error) => {
        console.log("ERROR: " + JSON.stringify(error.err));
    });
  }

  public refresh() {
    this.database.executeSql("SELECT * FROM people", []).then((data) => {
        this.people = [];
        if(data.rows.length > 0) {
            for(var i = 0; i < data.rows.length; i++) {
                this.people.push({firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname});
            }
        }
    }, (error) => {
        console.log("ERROR: " + JSON.stringify(error));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatabaseExamplePage');
  }

}
