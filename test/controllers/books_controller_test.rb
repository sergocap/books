class ArticlesControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get books_url
    assert_response :success
  end

	test 'api index for angular' do
		get books_url, as: :json
		assert_not JSON.parse(@response.body)['data']['books'].nil?
	end
end
