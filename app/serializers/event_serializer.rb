class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time, :location, :price, :description, :img, :user_id
  has_many :users
  
end