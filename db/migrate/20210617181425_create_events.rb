class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.date :date
      t.string :time
      t.string :location
      t.integer :price
      t.string :description
      t.string :img 
      
      t.timestamps
    end
  end
end
