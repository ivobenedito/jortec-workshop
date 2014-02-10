AngularDemos::Application.routes.draw do
  root 'demos#index'

  # Data Binding
  get 'd01', to: 'demos#d01'

  # Controllers
  get 'd02', to: 'demos#d02'

  # Directives
  get 'd03', to: 'demos#d03'

  # get 'demos/02-data-binding', to: 'demos#01-data-binding'
  # get 'demos/01-data-binding', to: 'demos#01-data-binding'
  # get 'demos/01-data-binding', to: 'demos#01-data-binding'
  # get 'demos/01-data-binding', to: 'demos#01-data-binding'

  # get 'playground',       to: 'welcome#playground'
  # get 'contacts',         to: 'welcome#contacts'
  # get 'filter',           to: 'welcome#filter'
  # get 'custom_filter',    to: 'welcome#custom_filter'
  # get 'custom_directive', to: 'welcome#custom_directive'
  # get 'kontacts',         to: 'welcome#kontacts'

  namespace :api, defaults: { format: :json } do
    resources :tasks
    resources :contacts
  end
end
