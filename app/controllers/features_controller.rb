class FeaturesController < ApplicationController

  before_filter :find_release
  before_filter :find_feature, :only => [:show,:edit,:update,:destroy]

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

  def edit
  end

  def update
    if @feature.update_attributes(params[:feature])
      flash[:notice] = "Feature has been updated."
      redirect_to [@release, @feature]
    else
      flash[:alert] = "Feature has not been updated."
      render :action => "edit"
    end
  end

  def destroy
    @feature.destroy
    flash[:notice] = "Feature has been deleted."
    redirect_to @release
  end

private

  def find_release
    @release = Release.find(params[:release_id])
  end

  def find_feature
    @feature = @release.features.find(params[:id])  
  end
end
