class NotesController < ApplicationController
	  # helper_method :sort_column, :sort_direction
	  respond_to :html, :json

def index
	 # @notes = Note.all

	# @note = Note.new
	@notes = Note.search(params[:search]).order(sort_column + " " + sort_direction).paginate(:per_page => 25, :page => params[:page])
	# @notes = Note.where("name like ?", "%#{params[:q]}%")
	# respond_to do |format|
	#     format.html
	#     format.json { render :json => @notes.map(&:attributes) }
 #  end

  @labels = Label.all
  	 
end

def new
	
	@note = Note.new
		
end

def create

		@note = Note.new(params[:note])
		if @note.save
			flash[:notice] = "Note has been created."
			redirect_to @note
		else
			flash[:alert] = "Note has not been created."
			render :action => "new"
		end
	
end

def show

	@note = Note.find(params[:id])
	#@notes = Note.all
	@notes = Note.search(params[:search]).order(sort_column + " " + sort_direction).paginate(:per_page => 25, :page => params[:page])

	
end

def edit
end

def update
	@note = Note.find(params[:id])
	@note.update_attributes(params[:note])
	respond_with @note		 
	 
end

  private
  
  def sort_column
    Note.column_names.include?(params[:sort]) ? params[:sort] : "name"
  end
  
  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
  end

end
