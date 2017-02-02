Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "angular#index"

  scope :api do
    scope :v1 do
      devise_for :users
      resources :posts, only: [:show, :index, :create, :delete]
      resources :comments, only: [:create, :destroy]
    end
  end
end
