import { Component, OnInit } from '@angular/core';
import templateString from './new.component.html.slim';
import { BooksService } from './books.service';
import Book from './book.ts';

@Component({
  selector: 'book-new',
  template: templateString
})
export class NewComponent implements OnInit {
  book:Book;
  poster_base64 = '';
  files_input:Object;

  constructor(private books_service:BooksService) {}

  ngOnInit() {
    this.book = this.books_service.new_book();
  }

  create_book() {
    this.books_service.create_book(this.book).subscribe(
      res => {
        this.book = this.books_service.new_book();
        this.clear_poster_input()
      },
      err => {
        let dictionary = err.json().data.errors;
        for(let key in dictionary)
          if(key == 'poster' || key == 'title')
            alert(dictionary[key][0]);
      }
    )
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
    this.files_input = [];
  }
}
