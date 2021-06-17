class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time, :location, :price, :description, :img
end
