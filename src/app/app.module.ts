import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxRxprogressModule} from '../../projects/ngx-rxprogress/src/lib/ngx-rxprogress.module';

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
