class LabelsController < ApplicationController


	def index

		@labels = Label.where("name like ?", "%#{params[:q]}%")
  		respond_to do |format|
    		format.html
    		format.json { render :json => @labels.map(&:attributes) }
  		end
		
	end


end
