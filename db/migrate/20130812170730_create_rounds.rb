class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |round|
      round.belongs_to :player
      round.belongs_to :game
    end
  end
end
