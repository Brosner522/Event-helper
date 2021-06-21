class InvitationsController < ApplicationController

    # get all invitations 
    def index
    invitations = Invitation.all
    render json: invitations 
    end

end
