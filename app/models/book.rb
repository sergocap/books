class Book
  include Mongoid::Document
  include Mongoid::Paperclip
  include Mongoid::Timestamps::Created

  field :title, type: String
  field :description, type: String

  has_mongoid_attached_file :poster,
    path: ':rails_root/public/system/:attachment/:id/:style/:filename',
    styles: {
     	small:   ['200x200#']
    }

	validates_attachment_content_type :poster, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

	validates_presence_of :title
end
