class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.string :title
      t.text :description
      t.references :feature

      t.timestamps
    end
    add_index :issues, :feature_id
  end
end
