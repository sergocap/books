import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule  } from '@angular/http';

import { AppComponent } from './app.component.ts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
