class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :name
      t.text :content
      t.references :label

      t.timestamps
    end
    add_index :notes, :label_id
  end
end

 