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
  poster_base64 = '';
  files_input:Object;

  constructor(private books_service:BooksService) {}

  ngOnInit() {
    this.book = this.books_service.get_book().subscribe((data) => this.book = data);
  }

  update() {
    this.books_service.update_book(this.book)
  }

  set_poster_base64(event) {
    let that = this;
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onloadend = function() {
      that.poster_base64 = reader.result;
      that.book.poster_base64 = reader.result;
      that.book.poster_original_file_name = file.name;
    }

    if(file)
      reader.readAsDataURL(file)
    else
      this.clear_poster_input()
  }

  clear_poster_input() {
    this.poster_base64 = '';
    this.book.poster_base64 = '';
    this.book.poster_original_file_name = '';
    this.files_input = '';
  }
}
