class Book
  include Mongoid::Document
  include Mongoid::Paperclip
  include Mongoid::Timestamps::Created

  field :title, type: String
  field :description, type: String

  has_mongoid_attached_file :poster,
    default_url: '/images/missing_poster_:style.jpg',
    url: '/system/afishas/:attachment/:id/:style/:filename',
    styles: {
     	small:   ['200x200#']
    }

	validates_attachment_content_type :poster, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

	validates_presence_of :title

  def as_json(options = {})
    {
      id: id.to_s,
      title: title,
      description: description,
      poster_url: poster.url(:small),
      created_at: created_at
    }
  end
end
