$(document).ready(function() {
  var w = new Stopwatch();
  $(document).on('keyup', function(event) {
    if (event.which === 81) {
      w.start();
      update_player_position('player1');
    }
    else if (event.which === 80) {
      w.start();
      update_player_position('player2');
    };
  });


  var update_player_position = function (player) {
    $('#' + player + '_strip').find('td').empty();
    if (player === 'player1') {
      $('#' + player + '_strip').append('<td class="active">' + '<img src="vin.jpg" height = "50px" width = "40px">' +'</td>');
    }
    else if (player === 'player2') {
      $('#' + player + '_strip').append('<td class="active">' + '<img src="paul.jpg" height = "50px" width = "40px">' +'</td>');
    }
    if ($('#' + player + '_strip').children().length === 25) {
      if (player === 'player1') {
        w.stop();
        $('#' + player + '_strip').prepend('<p class="active">' + 'vin' + ' finished at ' +
        w.toString() + '</p>')
      }
      else if (player === 'player2') {
        w.stop();
        $('#' + player + '_strip').prepend('<p class="active">' + 'paul' + ' finished at ' +
        w.toString() + '</p>')
      }
    };
  };

  // q: 81
  // p: 80
  // you can also get the current time like this:
  // var d = new Date().getTime()
  // and subtract this time from another time
  // var d2 = new Date().getTime()




  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
