class Book
  include Mongoid::Document
  include Mongoid::Paperclip
  include Mongoid::Timestamps::Created

  attr_accessor :poster_base64, :poster_original_file_name

  field :title, type: String
  field :description, type: String

  has_mongoid_attached_file :poster,
    default_url: '/images/missing_poster_:style.jpg',
    url: '/system/book/:attachment/:id/:style/:filename',
    styles: {
     	small:   ['200x200#']
    }

	validates_attachment_content_type :poster, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

	validates_presence_of :title

  before_validation :build_poster

  def as_json(options = {})
    {
      id: id.to_s,
      title: title,
      description: description,
      poster_url: poster.url(:small),
      created_at: created_at
    }
  end

  private
  def build_poster
    if poster_base64 && poster_original_file_name
      image = Paperclip.io_adapters.for(poster_base64)
      image.original_filename = poster_original_file_name
      self.poster = image
    end
  end
end
