var bg,bath,brush,drink,eat,gym,sleep,move;
var astronaut;

function preload(){
  bg = loadImage("iss.png")
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  bath = loadAnimation("bath1.png","bath2.png");
  move = loadAnimation("move.png","move.png","move1.png","move1.png");
}
function setup() {
  createCanvas(800,400);
  

  astronaut = createSprite(400,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;


}

function draw() {
  background(bg);
  
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
   
  textSize(20);
  fill("white");
  text("Instructions:", 10, 25);
  textSize(15);
  fill("yellow");
  text("Up Arrow = Brushing", 10, 55);
  text("Down Arrow = Gymming",10, 70);
  text("Right Arrow = Eating",10, 85);
  text("Left Arrow = Bathing",10, 100);
  text("m Key = Moving", 10, 115);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
   if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 300;
    astronaut.x = 400;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 300;
    astronaut.y = 300;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  
  drawSprites();

}