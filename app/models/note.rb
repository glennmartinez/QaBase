class Note < ActiveRecord::Base
	 attr_accessible :name, :content, :label_tokens
	has_many :labelships
	has_many :labels, :through => :labelships
	attr_reader :label_tokens

	def self.search(search)
	  if search
	    where('name ILIKE ?', "%#{search}%")
	  else
	    scoped
  	  end
    end

    def label_tokens=(ids)
    	

    	ids.gsub!(/CREATE_(.+?)_END/) do
      	Label.create!(:name => $1).id
    end
    self.label_ids = ids.split(",")
  	end

 

end




