class Game {

    constructor(){

    }
    getState(){
        var stateRef = database.ref('gameState');
        stateRef.on("value",function (data) {
            gameState = data.val();
        })

    }
    update(state) {
        database.ref('/').update({
            gameState:state
        });
    }

    play() {
        form.hide();
        Player.getPlayersInfo();

        if (allPlayers !== undefined){
            if (keyDown("up")) {
                paddle1.y = paddle1.y - 5

            }

            if (keyDown("down")) {
                paddle1.y = paddle1.y + 5

            }

            
            
            if (keyDown("up")) {
                paddle.y = paddle.y - 5

            }

            if (keyDown("down")) {
                paddle.y = paddle.y + 5

            }


            ball.velocityY = 7
        
        
        }
        


        

    }

    start() {
        player = new Player();
        playerCount = player.getCount();
    
        form = new Form();
        form.display();

        pongPaddle = createSprite(20,200,10,20);
        pongPaddle.addImage("pongPaddleImg",pongPaddleImg);
        pongPaddle.scale = 0.3

        pongPaddle1 = createSprite(375,200,10,20)
        pongPaddle1.addImage("pongPaddleImg",pongPaddleImg);
        pongPaddle1.scale = 0.3

        ball = createSprite(200,200,10,10);
        ball.addImage("pongBallImg",pongBallImg)
        ball.scale = 0.05

    }    


}