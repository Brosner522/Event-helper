class Event < ApplicationRecord
    has_many :invitations 
    has_many :users, through: :invitations 

    validates :price, numericality: { greate_than_or_equal_to: 0 ,less_than_or_equal_to: 100}

end
