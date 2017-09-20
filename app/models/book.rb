class Book
  include Mongoid::Document
  include Mongoid::Paperclip
  include Mongoid::Timestamps::Created

  field :title, type: String
  field :description, type: String

  has_mongoid_attached_file :poster
end
