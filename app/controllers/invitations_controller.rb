class InvitationsController < ApplicationController

    def index
    invitations = Invitation.all
    render json: invitations 
    end

end
