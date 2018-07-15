class RemovePublishDateColumnFromStories < ActiveRecord::Migration[5.2]
  def change
    remove_column :stories, :publish_date
  end
end
