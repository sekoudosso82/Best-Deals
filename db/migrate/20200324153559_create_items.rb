class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :description
      t.string :image_url

      t.timestamps
    end
  end
end
