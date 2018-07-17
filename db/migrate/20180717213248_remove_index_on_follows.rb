class RemoveIndexOnFollows < ActiveRecord::Migration[5.2]
  def change
    remove_index :follows, name: "index_follows_on_follower_id_and_followed_id"
  end
end
