class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time, :location, :price, :description, :img, :users
  # attributes :users, only: [:username, :age, :profile_img]
  # attributes :users, except: [:created_at, :updated_at]


end