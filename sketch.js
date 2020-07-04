var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4,image1,image2,image3,image4,image5,image6;


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function prelload(){


image1 = loadImage("car1.png");
image2 = loadImage("car2.png");
image3 = loadImage("car3.png");
image4 = loadImage("car4.png");
image5 = loadImage("ground.png");
image6 = loadImage("track.jpg");




}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
