import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { NewPageExamplePage } from '../pages/new-page-example/new-page-example';
import { RestApiExamplePage } from '../pages/rest-api-example/rest-api-example';
import { GeolocationExamplePage } from '../pages/geolocation-example/geolocation-example';
import { StorageExamplePage } from '../pages/storage-example/storage-example';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPageExamplePage,
    RestApiExamplePage,
    GeolocationExamplePage,
    StorageExamplePage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPageExamplePage,
    RestApiExamplePage,
    GeolocationExamplePage,
    StorageExamplePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
