class Item < ApplicationRecord
  belongs_to :user
  has_many :reviews, through: :users
end
