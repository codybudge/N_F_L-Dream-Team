function PlayerService(callback) {
  //Private
  var playersData = []



  //Public
  this.getPlayerName = function (fullname) {
    return playersData.filter(function (player) {
      if (player.name == fullname) {
        return true;
      }
    })
  }

  this.getPlayersByTeam = function (pro_team) {
    return playersData.filter(function (player) {
      if (player.team == pro_team) {
        return true;
      }
    })
  }
  this.getPlayersByPosition = function (position) {
    return playersData.filter(function (player) {
      if (player.position == position) {
        return true;
      }
    })
  }
  this.getPlayersData = function (playersData) {
    console.log(playersData)
    return playersData
  }

  function loadPlayersData() {
    //check if the player already has a copy of the NFL playersData
    var localData = localStorage.getItem('playersData');
    //if they do, pull from there
    if (localData) {
      playersData = JSON.parse(localData);
      //return will short-circuit the loadPlayersData function
      //this will prevent the code below from ever executing
      return callback(playersData)
    }
    //if not go get that data
    var url = "https://bcw-getter.herokuapp.com/?url=";
    var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
    var apiUrl = url + encodeURIComponent(endpointUri);

    $.getJSON(apiUrl, function (data) {
      playersData = data.body.players;
      console.log('Player Data Ready')
      console.log('Writing Player Data to localStorage')
      localStorage.setItem('playersData', JSON.stringify(playersData))
      console.log('Finished Writing Player Data to localStorage')
      callback(playersData)
    });
  }
  loadPlayersData(); //call the function above every time we create a new service
} 