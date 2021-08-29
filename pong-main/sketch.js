
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var sprite;

function preload() {
  pongPaddleImg = loadImage("Pong paddle.png")
  pongBallImg = loadImage("pongBall.png")

}

function setup()
{
  createCanvas(400,400);

  
  database = firebase.database();

  game = new Game()

  game.getState();
  game.start();


}

function draw() 
{
  background(51);


  
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }

  




  
  drawSprites();
 
}

