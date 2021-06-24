class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :profile_img, :password

  
end
