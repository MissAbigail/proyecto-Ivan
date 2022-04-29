class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
     
      alien1 = createSprite(width / 2 - 50, height - 200);
      alien1.addImage("alien1", alien1_img);
      alien1.scale = 0.35;

      alien2 = createSprite(width / 2 + 200, height - 200);
      alien2.addImage("alien2",alien2_img);
      alien2.scale = 0.25;

    aliens = [alien1, alien2];
    }
  }

  
  play(){
    form.hide();

    Player.getPlayerInfo();
    //player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      image(backgroundimg2,0,0,width,height);
      
      //index of the array
      var index = 0;
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
          var x = allPlayers[plr].positionX;
          var y = height - allPlayers[plr].positionY;
  
          aliens[index - 1].position.x = x;
          aliens[index - 1].position.y = y;
        
        }
  
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
     //player.distance +=10
      player.positionY += 10;
      player.update();
    }

    if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) {
      player.positionX -= 5;
      player.update();
    }

    if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) {
      player.positionX += 5;
      player.update();
    }
    drawSprites();    
  }

    end(){ 
    console.log("Game Ended"); 
    console.log(player.rank);
    }    

}