import { Component } from '@angular/core';
import templateString from './app.component.html'

@Component({
  selector: 'books-index',
  template: templateString
})
export class AppComponent {
  app_name = 'Список книг';
}
