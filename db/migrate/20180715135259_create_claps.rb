class CreateClaps < ActiveRecord::Migration[5.2]
  def change
    create_table :claps do |t|
      t.integer :clapper_id
      t.integer :clap_count
      t.references :clappable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
