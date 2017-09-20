class BooksController < ApplicationController
  def index
    respond_to do |format|
      format.html {}
      format.json {
        render json: { data: { books: Book.all } } and return
      }
    end
  end
end
