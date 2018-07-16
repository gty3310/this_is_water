class RemoveTimestampsFromFollows < ActiveRecord::Migration[5.2]
  def change
    remove_column :follows, :created_at, :string
    remove_column :follows, :updated_at, :string
  end
end
