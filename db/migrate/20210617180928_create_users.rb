class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.integer :age
      t.string :profile_img
      t.string :password_digest

      t.timestamps
    end
  end
end
