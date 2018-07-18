class RemoveImageUrlColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :stories, :image_url
    remove_column :stories, :video_url
    remove_column :users, :image_url
  end
end
