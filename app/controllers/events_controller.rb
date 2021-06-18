class EventsController < ApplicationController

    def index 
        events = Event.all 
        render json: events 
    end

    def show 
        event = Event.find(params[:id])
        render json: event, status: :ok
    end

    def create
        event = Event.create(event_params)
        render json: event, status: :created
    end

    def update
        event = Event.find(params[:id])
        event.update(event_params)
        render json: event, status: :accepted
    end

    def destroy 
        event = Event.find(params[:id])
        if event 
            event.destroy
            render json: {}, status: :no_content
        else 
            render json: { "error" : "no event found!" }
        end
    end


    private 

    def event_params
        params.permit(:name, :date, :time, :location, :price, :description, :img)
    end
end
