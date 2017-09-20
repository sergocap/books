import { Component, OnInit } from '@angular/core';
import templateString from './app.component.html';
import { BooksService } from './books.service';
import Book from './book.ts';

@Component({
  selector: 'books-index',
  template: templateString,
  providers: [ BooksService ]
})
export class AppComponent implements OnInit {
  books = [];

  constructor(private books_service:BooksService) {}

  ngOnInit() {
    this.books = this.books_service.get_books();
  }
}
