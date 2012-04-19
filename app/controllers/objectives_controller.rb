class ObjectivesController < ApplicationController
before_filter :find_feature

	
	def index
		@objectives = Objective.all
		
	end


	def new
		@objective = @feature.objectives.build
		
	end

	def create
		@objective = @feature.objectives.build(params[:objective])
		if @objective.save
			flash[:notice] = "Issue has been created."
			redirect_to [@feature, @objective]
		else
			flash[:alert] = "Issue has not been created."
			render :action => "new"
		end
		
	end

	def show

		@objective = Objective.find(params[:id])

	end

	def find_feature
		@feature = Feature.find(params[:feature_id])
		
	end

end
