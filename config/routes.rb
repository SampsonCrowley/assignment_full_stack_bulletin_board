Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "post#index"

  resources :posts, only: [:show, :index, :create, :delete]
  resources :comments, only: [:create, :destroy]
end