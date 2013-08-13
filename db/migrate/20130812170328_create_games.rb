class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |game|
      game.string :winner
      game.integer :time
      game.string :url
      game.timestamps
    end
  end
end
