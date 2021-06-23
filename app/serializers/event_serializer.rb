class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time, :location, :price, :description, :img
  has_many :users
  
end