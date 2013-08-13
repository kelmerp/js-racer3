$(document).ready(function(){

  $(".get-names").on("click", function(event){
    event.preventDefault();
    console.log("intercepted get-names");
  });

  var player1 = new Player();
  var player2 = new Player();   
  $("body").keyup(function(e) {
    if (e.which==81){ 
      $('#player1_strip > td:nth-child('+player1_location+')').removeClass("active");
      player1_location = player1_location + 1;
      $('#player1_strip > td:nth-child('+player1_location+')').addClass("active");
      if (player1_location === 20) {
        var winnerId = $('#player1_strip').attr('data-player');
        $.post('/results', {winner: winnerId}, function() {
          window.location.href = "/winner";
        });
      };
    }
    else if (e.keyCode==80){
      $('#player2_strip > td:nth-child('+player2_location+')').removeClass("active");
      player2_location = player2_location + 1;
      $('#player2_strip > td:nth-child('+player2_location+')').addClass("active");
      if (player2_location === 20) {
        $.post('/results', {winner: "winnerID", time: "time"} );
        var winnerId = $('#player2_strip').attr('data-player');
        $.post('/results', {winner: winnerId}, function() {
          window.location.href = "/winner";
        });
      }
    };
  });
});

function Player(name) {
  this.name = name;
  this.location = 1;
}
