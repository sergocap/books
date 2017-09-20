class BooksController < ApplicationController
  def index
    respond_to do |format|
      format.html {}
      format.json {
        json_books = Book.all.map {|book|
          {
            id: book.id.to_s,
            title: book.title,
            description: book.description,
            poster_url: book.poster.url(:small),
            created_at: book.created_at
          }
        }

        render json: { data: { books: json_books }}
      }
    end
  end
end
