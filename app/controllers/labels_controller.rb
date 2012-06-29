class LabelsController < ApplicationController


	def index

		@labels = Label.where("name like ?", "%#{params[:q]}%")
  		respond_to do |format|
    		format.html
    		format.json { render :json => @labels.map(&:attributes) }
  		end
		

	end

	def show
    @label = Label.find(params[:id])
  	end

	  def new
	    @label = Label.new
	  end

	  def create
	    @label = Label.new(params[:label])
	    if @label.save
	      redirect_to @label, :notice => "Successfully created label."
	    else
	      render :action => 'new'
	    end
	  end

	  def edit
	    @label = Label.find(params[:id])
	  end

	  def update
	    @label = Label.find(params[:id])
	    if @label.update_attributes(params[:label])
	      redirect_to @labels, :notice  => "Successfully updated author."
	    else
	      render :action => 'edit'
	    end
	  end

	  def destroy
	    @label = Label.find(params[:id])
	    @label.destroy
	    redirect_to labels_url, :notice => "Successfully destroyed author."
	  end


end
