class BooksController < ApplicationController
  def index
    respond_to do |format|
      format.html {
        @book = Book.new
      }
      format.json {
        render json: { data: { books: Book.all }} and return
      }
    end
  end

  def create
    @book = Book.new(books_params)
    if @book.save
      redirect_to books_path
    else
      render :index
    end
  end

  private
  def books_params
    params.require(:book).permit([:title, :description, :poster])
  end
end
