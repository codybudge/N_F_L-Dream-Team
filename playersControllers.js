function PlayersControllers() {

    //Private
    var playerService = new PlayerService(ready);

    function ready(data) {
        //draw the search bars
        console.log(data)
        document.getElementById('search-form').innerHTML = `
        <div class="row">
        <form class="form-inline col-4"onsubmit="app.controllers.playersControllers.getPlayersName(event)">
        <div class="form-group">
        <input type="text" class="form-control" name="playersData" placeholder="Player Name" />
        <button type="submit" class="btnColor" id="get-player-button">Serch Players</button>
        </div>
        </form>
        <form class="form-inline col-4" onsubmit="app.controllers.playersControllers.getPlayersTeam(event)">
         <div class="form-group">
         <input type="text" class="form-control" name="playersData" placeholder="Player Team" />
         <button type="submit" class="btnColor" id="get-player-button">Serch Players</button>
         </div>
         </form>
         <form class="form-inline col-4" onsubmit="app.controllers.playersControllers.getPlayersPosition(event)">
         <div class="form-group">
         <input type="text" class="form-control" name="playersData" placeholder="Player Position" />
         <button type="submit" class="btnColor" id="get-player-button">Serch Players</button>
         </div>
         </div>
         </form>

         `
    }


    function drawPlayTeam(players) {
        var template = '<div class="col-12 textColor"><h1>Your NFL Team</h1></div>';
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            template += `
            <div class="col-3">
            <div class="cardBg">
            <img class="card-img-top" src="${player.photo}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Name:${player.fullname}</h5>
            <p class="card-text">Position:${player.position}</p>
            <p class="card-text">Team:${player.pro_team}</p>
            <button onclick="app.controllers.playersControllers.removeFromTeam(${player.id})" class="btnColor">Remove</button>
            </div>
            </div>
            </div>
            `
        }
        document.getElementById('players').innerHTML = template
    }

    function drawPlayerList(players) {
        var template = '<div class="col-12"><h1>List of Players</h1></div>';
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            template += `
            <div class="col-3">
            <div class="cardBg">
            <img class="card-img-top" src="${player.photo}" alt="Card image cap">
            <div class="card-header">
            Team:${player.pro_team}
            </div>
            <div class="card-body">
            <h5 class="card-title">Name:${player.fullname}</h5>
            <p class="card-title">Position:${player.position}</p>
            <button onclick="app.controllers.playersControllers.addPlayer(${player.id})" class="btnColor">Add Player</button>
            </div>
            </div>
            </div>
            </div>
            `
        }
        document.getElementById('playList').innerHTML = template
    }





    //Public

    this.getPlayersName = function getPlayersName(e) {
        e.preventDefault();
        var playerName = e.target.playersData.value;
        // var filteredPlayers = playerService.getPlayerName(playerName)
        // drawPlayerList(filteredPlayers)
        drawPlayerList(playerService.getPlayerName(playerName))

    }
    this.getPlayersTeam = function getPlayersTeam(e) {
        e.preventDefault();
        var playerTeam = e.target.playersData.value;
        // var filteredPlayers = playerService.getPlayerName(playerName)
        // drawPlayerList(filteredPlayers)
        drawPlayerList(playerService.getPlayersByTeam(playerTeam))
    }
    this.getPlayersPosition = function getPlayersPosition(e) {
        e.preventDefault();
        var playerPosition = e.target.playersData.value;
        // var filteredPlayers = playerService.getPlayerName(playerName)
        // drawPlayerList(filteredPlayers)
        drawPlayerList(playerService.getPlayersByPosition(playerPosition))
    }

    this.addPlayer = function addPlayer(playerId) {

        playerService.addPlayer(playerId, drawPlayTeam)
    }

    this.removeFromTeam = function removeFromTeam(playerId) {
        playerService.removeFromTeam(playerId, drawPlayTeam)
      };
}