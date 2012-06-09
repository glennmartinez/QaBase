class Feature < ActiveRecord::Base

  belongs_to :release
  has_many :issues
  has_many :objectives

  accepts_nested_attributes_for :issues, :allow_destroy => true
  accepts_nested_attributes_for :objectives, :allow_destroy => true

  validates :title, :presence => true
  validates :description, :presence => true, :length => { :minimum => 10 }

end
