import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WjInputModule,
    WjGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
