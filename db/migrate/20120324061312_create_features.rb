class CreateFeatures < ActiveRecord::Migration
  def change
    create_table :features do |t|
      t.string :title
      t.text :description
      t.references :release

      t.timestamps
    end
    add_index :features, :release_id
  end
end
