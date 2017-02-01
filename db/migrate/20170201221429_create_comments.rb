class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :title
      t.text :body
      t.string :author
      t.integer :post_id
      t.user_id :integer

      t.timestamps
    end
  end
end
