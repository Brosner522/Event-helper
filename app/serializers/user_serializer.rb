class UserSerializer < ActiveModel::Serializer
  attributes :id, :Username, :age, :profile_img, :password
end
