class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :name
      t.text :content
      t.string :tag

      t.timestamps
    end
  end
end
