class BooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    packs_test_dir = Rails.root.join('public/packs-test')
    packs_dir = Rails.root.join('public/packs')

    FileUtils.remove_dir(packs_test_dir)
    FileUtils.cp_r(packs_dir, packs_test_dir)

    Book.destroy_all
  end

  test 'should get index, edit' do
    book = first_fixture_created

    get books_url
    assert_response :success

    get edit_book_url(id: book.id)
    assert_response :success
  end

  test 'create; Books count should equal 1' do
    post books_url, as: :json, params: {
      book: {
        title: 'bird',
        description: 'a word',
        poster_base64: image_jpeg_base64,
        poster_original_file_name: 'bbbbb.jpeg'
      }
    }

    book = Book.last

    assert_equal(Book.count, 1)
    assert book.title = 'bird'
    assert book.description = 'a word'
    assert book.poster_file_name = 'bbbbb.jpeg'
  end

  test 'update; should change title, description, poster' do
    book = first_fixture_created

    put book_url(id: book.id), as: :json, params: {
      book: {
        title: 'don_t',
        description: 'worry',
        poster_base64: image_jpeg_base64_2,
        poster_original_file_name: 'by_happy.jpeg'
      }
    }

    book = Book.last

    assert Book.count == 1
    assert book.title = 'don_t'
    assert book.description = 'worry'
    assert book.poster_file_name = 'by_happy.jpeg'
  end

	test 'json structure for index' do
    first_fixture_created

		get books_url, as: :json
    data = JSON.parse(@response.body)


    params = ['id', 'title', 'description', 'poster_url', 'created_at'].sort

    assert data
    assert data['data']
    assert data['data']['books']
    assert data['data']['books'].first.keys.sort.eql?(params)
	end
end
