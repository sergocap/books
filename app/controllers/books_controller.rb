class BooksController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :find_book, only: [:update, :destroy]

  def index
    respond_to do |format|
      format.html {}
      format.json {
        render json: { data: { books: Book.all } }
      }
    end
  end

  def edit
    respond_to do |format|
      format.html {}
      format.json {
        render json: { data: { book: Book.find(params[:id]) } }
      }
    end
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render json: { data: { book: @book } }, status: 200
    else
      render json: { data: { errors: @book.errors } }, status: 500
    end
  end

  def update
    if @book.update_attributes(book_params)
      render json: { data: {} }, status: 200
    else
      render json: { data: { errors: @book.errors } }, status: 500
    end
  end

  def destroy
    @book.destroy
    respond_to do |format|
      format.html { redirect_to books_path, status: 303 }
      format.json {
        render json: { data: {} }
      }
    end
  end

  private
  def find_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit([:title, :description, :poster_base64, :poster_original_file_name])
  end
end
