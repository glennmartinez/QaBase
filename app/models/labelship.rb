class Labelship < ActiveRecord::Base
  attr_accessible :note_id, :label_id
  belongs_to :note
  belongs_to :label

end
