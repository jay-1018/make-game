class Player {
    constructer() {

    }

    getCount() {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", data => {
          playerCount = data.val();
        });
    }
    
    updateCount(count) {
    database.ref("/").update({
        playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
          positionY: this.positionY,
          
        });
    }
    
    static getPlayersInfo() {
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", data => {
          allPlayers = data.val();
        });
    }







}