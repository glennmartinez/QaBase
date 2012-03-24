class Feature < ActiveRecord::Base
  belongs_to :release

  validates :title, :presence => true
  validates :description, :presence => true,
  						  :length => { :minimum => 10}
end
