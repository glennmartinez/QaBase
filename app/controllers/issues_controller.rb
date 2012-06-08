class IssuesController < ApplicationController
  before_filter :find_feature

  def index
    @issues = Issue.all
  end

  def new
    @issue = @feature.issues.build
  end

  def create
    @issue = @feature.issues.build(params[:issue])
    if @issue.save
      flash[:notice] = "Issue has been created."
      redirect_to [@feature, @issue]
    else
      flash[:alert] = "Issue has not been created."
      render :action => "new"
    end
  end

  def show
    @issue = Issue.find(params[:id])
  end

  def find_feature
    @feature = Feature.find(params[:feature_id])
  end

end
