import { Component, OnInit } from '@angular/core';
import templateString from './app.component.html';
import Book from './book.ts';
import { BooksService } from './books.service';

@Component({
  selector: 'books-index',
  template: templateString,
  styles: [ require('./app.component.sass').toString() ]
})
export class AppComponent implements OnInit {
  books:Book[] = [];

  constructor(private books_service:BooksService) {}

  ngOnInit() {
    this.books = this.books_service.get_books();
  }

  delete_book(index:number) {
    this.books_service.delete_book(index);
  }
}
