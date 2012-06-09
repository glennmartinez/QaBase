class Release < ActiveRecord::Base

  has_many :features, :dependent => :delete_all

  accepts_nested_attributes_for :features, :allow_destroy => true

  validates :name, :presence => true

end
