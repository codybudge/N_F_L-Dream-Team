function PlayerController(){

//Private
var playerService = new PlayersService(drawPlaTeam);

function drawPlayTeam(players){
    var template = '<h1>Your NFL Team</h1>';
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        template += `
        <div class="row">
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="Card image cap">
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
    document.getElementById('player').innerHTML = template
}

function drawPlayerList(players){
    var template = '<h1>List of Players</h1>';
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        template += `
        <div class="card">
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
    document.getElementById('playList').innerHTML = template
}





//Public



}