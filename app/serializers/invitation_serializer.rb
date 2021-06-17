class InvitationSerializer < ActiveModel::Serializer
  attributes :id, :date, :user_id, :event_id
end
