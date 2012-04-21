class CreateObjectives < ActiveRecord::Migration
  def change
    create_table :objectives do |t|
      t.string :title
      t.references :feature

      t.timestamps
    end
    add_index :objectives, :feature_id
  end
end
