Rails.application.routes.draw do
  root to: 'home#index'

  get '/docs', to: 'docs#index'
  get '/docs/*path', to: 'docs#show', as: :doc
  post '/docs/form/persons', to: 'docs/form/persons#create'
end
