class AddNotesListToFeature < ActiveRecord::Migration
  def change
    add_column :features, :notes_list, :string
  end
end
