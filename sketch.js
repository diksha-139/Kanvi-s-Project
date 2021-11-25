
var bgImg,roboImg, roboCollided,robot;
var bg;
var invisibleGround;
var life= 5;
var score=0;
var obstacles
var obImg,bugImg;
var InputBox;
var t;
const PLAY =1;
const END = 0;
var gameState = PLAY;
function preload(){
bgImg= loadImage("bg.jpg");
roboImg= loadAnimation("robo1.png","robo2.png","robo3.png","robo4.png","robo5.png","robo6.png","robo7.png");
roboCollided= loadAnimation("col2.png","col3.png");
obImg= loadImage("drone.png");
bugImg= loadAnimation("b1.png","b2.png","b3.png","b4.png")
bugStopImg=loadAnimation("b1.png");

robotStopImg= loadAnimation("robo1.png")
}


function setup() {
  createCanvas(1300,550);

  bg = createSprite(750,175,1500,850);
  bg.addImage("background",bgImg);
  bg.scale=4;
  bg.velocityX = -3;


  invisibleGround= createSprite(650,540,1500,20);
  invisibleGround.visible = false;


  robot = createSprite(50,height-100, 50, 50);
  robot.addAnimation("running",roboImg);
  robot.addAnimation("collided",roboCollided);
  robot.addAnimation("stopped",robotStopImg);
  obstacles= new Group();
 InputBox= createInput("");
 InputBox.position(600,300);
  t =InputBox.value()
 
}

function draw() {
  background(0);  
  drawSprites();

  textSize(40)
 fill("yellow")
text(InputBox.value(),600,400)
if(InputBox.value() === "Hello"){
  textSize(40)
  fill("yellow")
  text("You are correct!!!",400,100)
}
  textSize(35);
  fill("yellow");
text("x: "+mouseX+", y: "+mouseY,100,40);

if(gameState=== PLAY){



}else if(gameState === ENF){


}






  // text("Life: "+life,20,30)
  if(keyWentDown("space")){

    robot.velocityY=-20
  }
  //to  add gravity

  robot.velocityY = robot.velocityY + 0.8;

  if(obstacles.isTouching(robot)){
    textSize(30)
    fill("white")
    text("Question1:        .......",600,200)
    bg.velocityX=0;
    obstacles.setVelocityXEach(0);
 
   robot.changeAnimation("stopped",robotStopImg);

   
  }
  robot.collide(invisibleGround);
spawnObstacles();



  if(bg.x <width/4){
    bg.x= 750;
  }
}
function spawnObstacles(){
  if(frameCount% 40 ===0){
    obstacle= createSprite(width,height-100,10,10);
    obstacle.addAnimation("bug",bugImg);
    obstacle.addAnimation("stop",bugStopImg);
    obstacle.y= Math.round(random(height-100,500));
    obstacle.velocityX=-7

     obstacle.depth = robot.depth
    robot.depth +=1 
obstacles.add(obstacle)
  }
 
}
