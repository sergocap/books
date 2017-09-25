import { Component, OnInit } from '@angular/core';
import templateString from './app.component.html.slim';
import Book from './book.ts';
import { BooksService } from './books.service';

@Component({
  selector: 'book-edit',
  template: templateString,
  styles: [`
    img { max-width: 200px; margin-bottom: 15px }
    input[type="file"] { max-width: 250px; font-size: 14px }
    .date_col { width: 100px }
    `]
})
export class AppComponent implements OnInit {
  book:Book;
  poster_base64 = '';
  files_input:Object;
  old_title = '';

  constructor(private books_service:BooksService) {}

  ngOnInit() {
    this.book = this.books_service.get_book().subscribe((data) => {
      this.book = data;
      this.old_title = this.book.title;
    });
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
