class CreateResponsesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.string :body, null: false
      t.integer :story_id, null: false
      t.integer :responder_id, null: false

      t.timestamps
    end

    add_index :responses, :story_id
    add_index :responses, :responder_id
  end
end
