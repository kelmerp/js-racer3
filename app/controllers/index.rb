get '/' do
  erb :index
end

get '/winner' do
  @game = Game.find(session[:game_id])
  p @game
  erb :winner
end


post '/race' do
  @player_1 = Player.find_or_create_by_name(params[:player1])
  @player_2 = Player.find_or_create_by_name(params[:player2])

  @game = Game.create()
  session[:game_id] = @game.id
  @game.players << @player_1
  @game.players << @player_2
  
  erb :race
end

post '/results' do
  
  @winner = params[:winner]
  @player = Player.find(@winner).name
  @game = Game.find(session[:game_id])
  @game.update_attributes(winner: @player) 

  

  redirect to('/winner')
end
