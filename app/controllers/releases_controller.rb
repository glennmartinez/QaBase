class ReleasesController < ApplicationController

before_filter :find_release, :only => [:show,
                                       :edit,
                                       :update,
                                       :destroy]

	def index
		@releases = Release.all
		
	end

	def new

		@release = Release.new
		
	end

	def create
		@release = Release.new(params[:release])
		if @release.save
			flash[:notice] = "Release has been created."
			redirect_to @release
		else
			flash[:alert] = "Release has not been created."
			render :action => "new"
		end
	end

	def show
		
		
	end

	def edit
		
	end

	def update
		if @release.update_attributes(params[:release])
			flash[:notice] = "Release has been updated."
			redirect_to @release
		else
			flash[:alert] = "Release has not been updated."
			render :action => "edit"
		end	
	end

	def destroy
		@release.destroy
		flash[:notice] = "Release has been deleted."
		redirect_to releases_path
	end
private
	  def find_release
	    @release = Release.find(params[:id])
	    rescue ActiveRecord::RecordNotFound
	    flash[:alert] = "The project you were looking" +
	                    " for could not be found."
	    redirect_to releases_path
	  end

end
