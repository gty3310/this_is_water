class UpdateStoriesTable < ActiveRecord::Migration[5.2]
  def change
    add_index :stories, :author_id
    add_column :stories, :header, :string
  end
end
