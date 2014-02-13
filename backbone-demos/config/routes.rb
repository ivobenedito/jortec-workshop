BackboneDemos::Application.routes.draw do
  root 'demos#index'

  # Data Types Primer
  get 'd01', to: 'demos#d01'

  # First Backbone Model
  get 'd02', to: 'demos#d02'

  # Validating Models
  get 'd03', to: 'demos#d03'

  # Views
  get 'd04', to: 'demos#d04'

  get 'd05', to: 'demos#d05'
  get 'd06', to: 'demos#d06'
  get 'd07', to: 'demos#d07'

  namespace :api, defaults: { format: :json } do
    resources :tasks
    resources :contacts
  end
end
