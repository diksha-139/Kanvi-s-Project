
var bgImg,roboImg, roboCollided,robot;
var bg;
var invisibleGround;
var life= 5;
var score=0;
function preload(){
bgImg= loadImage("bg.jpg");
roboImg= loadAnimation("robo1.png","robo2.png","robo3.png","robo4.png","robo5.png","robo6.png","robo7.png")
roboCollided= loadAnimation("col2.png","col3.png")
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
  robot.addAnimation("collided",roboCollided)

}

function draw() {
  background(0);  
  drawSprites();
  textSize(35);
  fill("yellow")
text("x: "+mouseX+", y: "+mouseY,100,40);
  // text("Life: "+life,20,30)
  if(keyDown("down")){
    robot.changeAnimation("collided",roboCollided)
  }
  //to  add gravity

  robot.velocityY = robot.velocityY + 0.8;

  robot.collide(invisibleGround);

  

  if(bg.x <width/4){
    bg.x= 750;
  }
}