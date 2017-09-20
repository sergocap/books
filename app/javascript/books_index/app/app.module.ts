import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule  } from '@angular/http';
import { BooksService } from './books.service';

import { NewComponent } from './new.component.ts';
import { AppComponent } from './app.component.ts';

@NgModule({
  declarations: [
    AppComponent, NewComponent
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
