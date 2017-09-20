import { Component } from '@angular/core';

@Component({
  selector: 'books-index',
  template: `<h1>{{app_name}}</h1>`
})
export class AppComponent {
  app_name = 'Список книг';
}
