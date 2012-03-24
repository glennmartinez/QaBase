class FeaturesController < ApplicationController

before_filter :find_release
before_filter :find_feature, :only => [:show,
                                       :edit,
                                       :update,
                                       :destroy]


	def new
		@feature = @release.features.build
		
	end

	def create
  		@feature = @release.features.build(params[:feature])
 		if @feature.save
    		flash[:notice] = "Feature has been created."
    		redirect_to [@release, @feature]
  		else
    		flash[:alert] = "Feature has not been created."
    		render :action => "new"
  		end
	end

	def show
		
	end

private
  	def find_release
    	@release = Release.find(params[:release_id])
  	end

private
	def find_feature
		@feature = @release.features.find(params[:id])

		
	end
end
