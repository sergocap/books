import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import Book from './book.ts';

@Injectable()
export class BooksService {
  books = [];

  constructor(private http:Http) {}

  get_books() {
    this.http.get('/books.json').subscribe(
      res => {
        let books_res = res.json().data.books;

        for(let res_book of books_res) {
          this.books.unshift(new Book(
            res_book.id,
            res_book.title,
            res_book.description,
            res_book.poster_url,
            res_book.created_at
          ))
        }
      },

      err => {
        console.log(err)
      }
    )

    return this.books;
  }
}
