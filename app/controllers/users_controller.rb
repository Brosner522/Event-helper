class UsersController < ApplicationController

    def index 
        users = User.all
        render json: users 
    end

    def show 
        user = User.find(params[:id])
        if user 
            render json: user, status: :ok
        else 
            render json: {error: "no user found!"}, status: :not_found 
        end
    end

    def create 
        user = User.new(user_params)
        if user.valid?
            user.save
            token = encode_token({
                user_id: user.id 
            })
            render json: {user: user, token: token}, status: :created
        else 
            render json: {error: user.errors.full_messages}, status: 400
            byebug
        end
    end

    private 
    
    def user_params 
        params.permit(:username, :age, :profile_img, :password_digest)
    end
end
