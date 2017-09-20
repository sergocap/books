class BooksController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :find_book, only: [:destroy]

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
      render json: { data: { book: @book }} and return
    else
      render json: { data: {} }, status: 500 and return
    end
  end

  def destroy
    @book.destroy
    render json: { data: {} } and return
  end

  private
  def find_book
    @book = Book.find(params[:id])
  end

  def books_params
    params.require(:book).permit([:title, :description, :poster_base64, :poster_original_file_name])
  end
end
