class EventsController < ApplicationController

    def index 
        events = Event.all
        render json: events 
    end

    def show 
        event = Event.find_by(id: params[:id])
        if event
            render json: event, status: :ok
        else
            render json: {error: "no event found"}, status: :not_found 
        end
    end

    def create
        event = Event.new(event_params)

        if event.valid?
            event.save 
            render json: event, status: :created
        else
            render json: {errors: event.errors.full_messages}
        end
    end

    def update
        event = Event.find_by(id: params[:id])
        if event
            event.update(event_params)
            render json: event, status: :accepted
        else 
            render json: {error: "event no found!"}, status: :bad_request
        end
    end

    def destroy 
        event = Event.find_by(id: params[:id])
        if event 
            event.destroy
            render json: {}, status: :no_content
        else 
            render json: {error: "no event found!"}, status: :not_found
        end
    end


    private 

    def event_params
        params.permit(:name, :date, :time, :location, :price, :description, :img, :user_id)
    end
end
