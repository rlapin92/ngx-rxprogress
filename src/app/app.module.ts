import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxRxprogressModule} from 'ngx-rxprogress';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRxprogressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
