class RemoveAuthorIdIndexOnStories < ActiveRecord::Migration[5.2]
  def change
    remove_index "stories", name: "index_stories_on_author_id"
  end
end
