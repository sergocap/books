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

      err => console.log(err)
    )

    return this.books;
  }

  delete_book(index:number) {
    let book = this.books[index];
    this.http.delete('/books/' + book.id).subscribe(
      res => this.books.splice(index, 1),
      err => console.log(err)
    )
  }

  new_book() {
    return new Book('', '', '', '', '')
  }

  create_book(book:Book) {
    console.log(book);
    let data = {
      book: {
        title: book.title,
        description: book.description,
        poster_base64: book.poster_base64,
        poster_original_file_name: book.poster_original_file_name
      }
    }

    this.http.post('/books', data).subscribe(
      res => {
      	let res_book = res.json().data.book;
				this.books.unshift(new Book(
					res_book.id,
					res_book.title,
					res_book.description,
					res_book.poster_url,
					res_book.created_at
				))
      },
      err => {
        console.log(err)
      }
    )
  }
}
