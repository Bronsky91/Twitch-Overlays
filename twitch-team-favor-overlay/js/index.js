axios.get('http://localhost:4567/api/v1/gameid')
  .then(function (response) {
    game_info = response.data;
    setInterval(function () {
      blueWidth = 0;
      axios.get('http://localhost:4567/api/v1/teamvotes/' + game_info.game_id)
        .then(function (teamresponse) {
          teamvotes = teamresponse.data;
          b_tally = [];
          r_tally = [];
          for (i=0;i<teamvotes.length;i++){
            if (teamvotes[i].vote == game_info.blue_team){
              b_tally.push(teamvotes[i]);
            } else if (teamvotes[i].vote == game_info.red_team) {
              r_tally.push(teamvotes[i]);
            }
          }
          b_count = b_tally.length;
          r_count = r_tally.length;
          percent_favor = b_count / r_count;
          if (percent_favor == Infinity) {
            percent_favor = 100
          }
          blueWidth = document.getElementById('blue').style.width = percent_favor * 100 + '%'
        })
    }, 3000)
})
