class LabelsController < ApplicationController


	def index

		@labels = Label.where("name ilike ?", "%#{params[:q]}%").limit(1)
		resultlabel = @labels.map(&:attributes)
		resultlabel << {:name => "Add: #{params[:q]}", :id => "CREATE_#{params[:q]}_END"}

  		respond_to do |format|
    		format.html
    		# format.json { render :json => @labels.map(&:attributes) }
    		format.json {render :json => resultlabel}
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
