Rails.application.routes.draw do
  
  resources :events, except: [:new, :edit]
  resources :invitations, only: [:index]
  resources :users, only: [:index, :show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
