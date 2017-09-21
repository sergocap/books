require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

class ActiveSupport::TestCase
  fixtures :all

	def poster_kolybelnaya
    File.open(File.join(Rails.root, 'test/fixtures/files/Chak_Palanik__Kolybelnaya.jpeg'))
	end

  def first_fixture_created
		Book.create(title: 'Колыбельная', description: 'Про значимость слов... Паланик.') do |b|
		  b.poster = poster_kolybelnaya
    end
  end

  def image_jpeg_base64
    File.read(File.join(Rails.root, 'test/fixtures/files/image_jpeg_base64.txt'))
  end

  def image_jpeg_base64_2
    File.read(File.join(Rails.root, 'test/fixtures/files/image_jpeg_base64_2.txt'))
  end
end
