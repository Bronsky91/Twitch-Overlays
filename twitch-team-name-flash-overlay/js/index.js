var animation = document.getElementById('container');
var bSpan = document.getElementById('blue_team')
var rSpan = document.getElementById('red_team')
setInterval(function () {
  axios.get('https://powerful-gorge-93867.herokuapp.com/api/v1/gameid')
    .then(function (response) {
      game_info = response.data;
      console.log(game_info.game_started);
      if (game_info.game_started) {
        var redTeam = game_info.red_team;
        var blueTeam = game_info.blue_team;
        bSpan.innerHTML = blueTeam
        rSpan.innerHTML = redTeam
        animation.classList.add('enable')
      } else {
        animation.classList.remove('enable')
      }
    })
}, 5000)