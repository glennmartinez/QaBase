class Label < ActiveRecord::Base
  attr_accessible :name
  has_many :labelships
  has_many :notes, :through => :labelships


end
