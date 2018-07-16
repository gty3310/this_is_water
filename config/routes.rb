Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]

    resources :stories do
      resources :responses, only: [:create, :destroy]
    end

    post '/follows/:id', to: 'follows#create'
    delete '/follows/:id', to: 'follows#destroy'

    post '/claps', to: 'claps#create'
  end

end
