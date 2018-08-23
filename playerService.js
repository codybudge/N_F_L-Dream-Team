function PlayerService(callback) {
  //Private
  var playersData = [];
  var myTeam = [];


  //Public
  this.getPlayerName = function getPlayerName(name) {
    return playersData.filter(function (player) {
      if (player.fullname.toLowerCase().includes(name.toLowerCase())) {
        return true;

      }
    })
  }

  this.getPlayersByTeam = function getPlayersByTeam(pro_team) {
    return playersData.filter(function (player) {
      if (player.pro_team.toLowerCase().includes(pro_team.toLowerCase())) {
        return true;
      }
    })
  }
  this.getPlayersByPosition = function getPlayersByPosition(position) {
    return playersData.filter(function (player) {
      if (player.position.toLowerCase().includes(position.toLowerCase())) {
        return true;
      }
    })
  }
  this.getPlayersData = function getPlayersData(playersData) {
    console.log(playersData)
    return playersData
  }
  this.addPlayer = function addPlayer(playerId, cb) {
    var sameposition = false
    for (var i = 0; i < playersData.length; i++) {

      if (playerId == playersData[i].id) {
        var newPlayer = playersData[i]
        for (let x = 0; x < myTeam.length; x++) {
          var myTeamPlayer = myTeam[x];
          if (newPlayer.position == myTeamPlayer.position) {
            sameposition = true
          }
        }
        if (!sameposition) {
          myTeam.push(playersData[i])


        }

      }
    }
    cb(myTeam)
  }

  this.removeFromTeam = function removeFromTeam(removeId, cb) {
    var removeMember = myTeam.find(function (player) {
      return player.id == removeId
    })
    var index = myTeam.indexOf(removeMember)
    myTeam.splice(index, 1)

    cb(myTeam)

  };

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