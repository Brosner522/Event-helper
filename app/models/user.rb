class User < ApplicationRecord
    has_many :invitations 
    has_many :events, through: :invitations 

    validates :age, numericality: { greater_than_or_equal_to: 18 }
end
