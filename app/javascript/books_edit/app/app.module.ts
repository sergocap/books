import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule  } from '@angular/http';
import { BooksService } from './books.service';

import { AppComponent } from './app.component.ts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ BooksService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
