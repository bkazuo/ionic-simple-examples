import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPageExamplePage } from '../pages/new-page-example/new-page-example';
import { RestApiExamplePage } from '../pages/rest-api-example/rest-api-example';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPageExamplePage,
    RestApiExamplePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPageExamplePage,
    RestApiExamplePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
