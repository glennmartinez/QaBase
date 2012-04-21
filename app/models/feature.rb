class Feature < ActiveRecord::Base
  belongs_to :release
  has_many :issues
  has_many :objectives

  validates :title, :presence => true
  validates :description, :presence => true,
  						  :length => { :minimum => 10}
end
