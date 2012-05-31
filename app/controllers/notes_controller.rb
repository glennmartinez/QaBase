class NotesController < ApplicationController

def index
	@notes = Note.all

	@note = Note.new
	
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
	@notes = Note.all
	
end

end
