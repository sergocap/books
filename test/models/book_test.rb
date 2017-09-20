require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
	test "should save book with all params" do
		book = Book.new(title: 'Колыбельная', description: 'Про значимость слов... Паланик.')
		book.poster = poster_kolybelnaya

    assert book.save
	end

	test "should not save book without title" do
		book = Book.new(description: 'Про значимость слов... Паланик.')
		book.poster = poster_kolybelnaya

    assert_not book.save
	end
end
