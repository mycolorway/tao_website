Rails.application.routes.draw do
  root to: 'home#index'

  get '/docs', to: 'docs#index'
  # get '/docs/form/cities', to: 'docs/form/cities#index'
  # post '/docs/form/persons', to: 'docs/form/persons#create'

  namespace :docs do
    resources :cities, only: [:index]
    resources :persons, only: [:create]
    resources :departments, only: [] do
      resources :tree_items, only: [:index], module: :departments
    end
  end

  get '/docs/*path', to: 'docs#show', as: :doc
end
