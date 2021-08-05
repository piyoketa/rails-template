# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users, id: :uuid do |t|
      t.string :email
      t.text :name
      t.text :name_kana
      t.timestamps null: false
    end

    add_index :users, :email, unique: true
  end
end
