function PlayersControllers() {

    //Private
    var playerService = new PlayerService(ready);

    function ready(data) {
        //draw the search bars
        console.log(data)
        document.getElementById('search-form').innerHTML = `
        <form class="form-inline d-flex justify-content-center" onsubmit="app.controllers.playersControllers.getPlayersName(event)">
        <div class="form-group">
        <input type="text" class="form-control" name="playersData" placeholder="Player Name" />
        <button type="submit" class="btn btn-primary" id="get-player-button">Serch Players</button>
        </div>
        </form>

        <form class="form-inline d-flex justify-content-center" onsubmit="app.controllers.playersControllers.getPlayersTeam(event)">
         <div class="form-group">
         <input type="text" class="form-control" name="playersData" placeholder="Player Team" />
         <button type="submit" class="btn btn-primary" id="get-player-button">Serch Players</button>
         </div>
         </form>

         <form class="form-inline d-flex justify-content-center" onsubmit="app.controllers.playersControllers.getPlayersPosition(event)">
         <div class="form-group">
         <input type="text" class="form-control" name="playersData" placeholder="Player Position" />
         <button type="submit" class="btn btn-primary" id="get-player-button">Serch Players</button>
         </div>
         </form>`
    }


    function drawPlayTeam(players) {
        console.log(players)
        var template = '<h1>Your NFL Team</h1>';
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            template += `
            <div class="row">
            <div class="col-3">
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${player.photo}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Name:${player.fullname}</h5>
            <p class="card-text">Position:${player.position}</p>
            <p class="card-text">Team:${player.pro_team}</p>
            <a href="#" class="btn btn-primary">Remove</a>
            </div>
            </div>
            </div>
            </div>
            `
        }
        document.getElementById('players').innerHTML = template
    }

    function drawPlayerList(players) {
        var template = '<h1>List of Players</h1>';
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            template += `
            <div class="card">
            <img class="card-img-top" src="${player.photo}" alt="Card image cap">
            <div class="card-header">
            Team:${player.pro_team}
            </div>
            <div class="card-body">
            <h5 class="card-title">Name:${player.fullname}</h5>
            <p class="card-title">Position:${player.position}</p>
            <a onclick="" href="#" class="btn btn-primary">Add Player</a>
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
      this.getPlayersTeam = function getPlayersTeam(e){
        e.preventDefault();
        var playerTeam = e.target.playersData.value;
        // var filteredPlayers = playerService.getPlayerName(playerName)
        // drawPlayerList(filteredPlayers)
        drawPlayerList(playerService.getPlayersByTeam(playerTeam))
      }
      this.getPlayersPosition = function getPlayersPosition(e){
        e.preventDefault();
        var playerPosition = e.target.playersData.value;
        // var filteredPlayers = playerService.getPlayerName(playerName)
        // drawPlayerList(filteredPlayers)
        drawPlayerList(playerService.getPlayersByPosition(playerPosition))
      }

this.addPlayer()
}