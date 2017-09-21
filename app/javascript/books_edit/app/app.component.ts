import { Component, OnInit } from '@angular/core';
import templateString from './app.component.html';
import Book from './book.ts';
import { BooksService } from './books.service';

@Component({
  selector: 'book-edit',
  template: templateString
})
export class AppComponent implements OnInit {
  book:Book;

  constructor(private books_service:BooksService) {}

  ngOnInit() {
    this.book = this.books_service.get_book().subscribe((data) => this.book = data);
  }

  update() {
    this.books_service.update_book(this.book).subscribe(
      res => window.location.replace('/books'),
      err => {
				let dictionary = err.json().data.errors;
				for (let key in dictionary) {
          alert(key + ': ' + dictionary[key][0])
				}
    });
  }
}
