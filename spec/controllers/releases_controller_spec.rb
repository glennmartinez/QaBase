require 'spec_helper'

describe ReleasesController do
	 it "displays an error for a missing project" do
          get :show, :id => "not-here"
          response.should redirect_to(releases_path)
          message = "The release you were looking for could not be found."
          flash[:alert].should eql(message)
	 end

end
