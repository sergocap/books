import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import Book from './book.ts';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {
  book:Book;

  constructor(private http:Http) {}

  get_book():Observable<Book> {
    let url = `${window.location.pathname}.json`;
    return this.http.get(url).map(
      (res:Response) => {
        let res_book = res.json().data.book;

        this.book = new Book(
          res_book.id,
          res_book.title,
          res_book.description,
          res_book.poster_url,
          res_book.created_at
        );

        return this.book;
      }
    )
  }

  update_book(book:Book) {
    let data = {
      book: {
        title: book.title,
        description: book.description,
        poster_base64: book.poster_base64,
        poster_original_file_name: book.poster_original_file_name
      }
    }

    this.http.put('/books/' + book.id + '.json', data).subscribe(
      res => window.location.replace('/books'),
      err => {
				let dictionary = err.json().data.errors;
        for (let key in dictionary)
          alert(key + ': ' + dictionary[key][0])
      }
    )
  }
}
