class User < ApplicationRecord
    has_many :items
    has_many :reviews
end
