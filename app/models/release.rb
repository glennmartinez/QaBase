class Release < ActiveRecord::Base

	has_many :features, :dependent => :delete_all
	validates :name, :presence => true

end
