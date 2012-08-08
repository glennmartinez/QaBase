class Label < ActiveRecord::Base
  attr_accessible :name
  has_many :labelships
  has_many :notes, :through => :labelships
  # validates_uniqueness_of :name


end
