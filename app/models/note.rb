class Note < ActiveRecord::Base
	attr_accessible :name, :label_tokens

	has_many :labels

	attr_reader :label_tokens

	def self.search(search)
	  if search
	    where('name LIKE ?', "%#{search}%")
	  else
	    scoped
  	  end
    end

    def label_tokens=(ids)
    	self.label_ids = ids.split(",")
  	end

end




