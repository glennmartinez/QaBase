Qabase::Application.routes.draw do 

 resources :releases do 
      resources :features
 end
  
 resources :features do 
      resources :issues, :objectives
 end

 resources :notes
 resources :labels
 
   root :to => 'releases#index' 
end
