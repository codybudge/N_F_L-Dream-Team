function PlayersControllers() {

    //Private
    var playerService = new PlayerService(ready);

    function ready(data){

        //draw the search bars
        console.log(data)
        document.getElementById('search-form').innerHTML = `
        <form class="form-inline d-flex justify-content-center" onsubmit="app.controllers.playersControllers.getplayersData(event)">
        <div class="form-group">
            <input type="text" class="form-control" name="player" placeholder="NFL Player" />
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
            <div class="col">
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="//placehold.it/200x200" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Name:</h5>
            <p class="card-text">Position:</p>
            <p class="card-text">Team:</p>
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
            <img class="card-img-top" src="//placehold.it/200x200" alt="Card image cap">
            <div class="card-header">
            Team:
            </div>
            <div class="card-body">
            <h5 class="card-title">Name:</h5>
            <p class="card-title">Position:</p>
            <a href="#" class="btn btn-primary">Add Player</a>
            </div>
            </div>
            
            `
        }
        document.getElementById('playList').innerHTML= template
    }
    
    
    
    
    
    //Public
    
    this.getPlayers = function getPlayers(e){
        e.preventDefault();
        var playersData = e.target.playersData.value;
        playerService.getPlayersData(players)
        //  = function playersData(){
        //     console.log(playersData)
        //     playersData()
        // }
      }
    
    
}