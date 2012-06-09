Qabase::Application.routes.draw do 

  resources :notes

  resources :releases do 
    resources :features
  end

  resources :features do 
    resources :issues, :objectives
  end

  root :to => 'releases#index'

end
