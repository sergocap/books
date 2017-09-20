require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

class ActiveSupport::TestCase
  fixtures :all

	def poster_kolybelnaya
    File.open(File.join(Rails.root, 'test/fixtures/files/Chak_Palanik__Kolybelnaya.jpeg'))
	end
end
