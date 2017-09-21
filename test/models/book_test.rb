require 'test_helper'

class BookTest < ActiveSupport::TestCase
  setup do
    Book.destroy_all
  end

	test 'should save book with all params' do
		book = Book.new(title: 'Колыбельная', description: 'Про значимость слов... Паланик.')
		book.poster = poster_kolybelnaya

    assert book.save
	end

	test 'should not save book without title' do
		book = Book.new(description: 'Про значимость слов... Паланик.')
		book.poster = poster_kolybelnaya

    assert_not book.save
	end

  test 'saving with base64 image' do
    book = Book.new(title: 'Manson', description: 'Трек «Personal Jesus» является кавер-версией на одноимённую песню британской группы Depeche Mode. Сингл был выпущен 20 сентября 2004 года.')
		book.poster_base64 = image_jpeg_base64
    book.poster_original_file_name = 'personal_jesus.jpeg'

    assert book.save
    assert book.poster_file_name == 'personal_jesus.jpeg'
    assert book.poster_file_size > 0
  end

  test 'saving with tempfile' do
    book = Book.new(title: 'Manson', description: 'Трек «Personal Jesus» является кавер-версией на одноимённую песню британской группы Depeche Mode. Сингл был выпущен 20 сентября 2004 года.')
    book.poster = poster_kolybelnaya

    assert book.save
    assert book.poster_file_name == 'Chak_Palanik__Kolybelnaya.jpeg'
    assert book.poster_file_size > 0
  end
end
