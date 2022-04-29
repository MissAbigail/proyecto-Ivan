var canvas, backgroundImage;

var gameState=0;
var playerCount;

var database;

var form, player, game;

var allPlayers;
var alien1,alien2;
var aliens = [];

var backgroundimg1,backgroundimg2;
var alien1_img,alien2_img;
function preload(){
  backgroundimg1 = loadImage("../images/escenario1.jpg");
  backgroundimg2 = loadImage("../images/escenario2.jpg");
  alien1_img = loadImage("../images/alien.png");
  alien2_img = loadImage("../images/alien2.png");
}


function setup(){
  //canvas = createCanvas(displayWidth - 20, displayHeight-30);
  //canvas = createCanvas(1200, 600);
  createCanvas(windowWidth,windowHeight);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
background(backgroundimg1);

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    //clear();
    game.play();
  }

 
}
