var car, wall;
var speed, weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,100,50,50);
  car.shapeColor = "white";
  car.velocityX = speed; 
  fill(80,80,80);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "gray";
}

function draw() {
  background("gray"); 
  collide( car, wall);
  drawSprites();
}

function collide(object1 , object2) {
  if(object2.x-object1.x < object2.width/2+object1.width/2 ) {
      object1.velocityX = 0;
      var deformation = 0.5*weight*speed*speed/22500 ;
      if(deformation > 180){
        object1.shapeColor = color(250,0,0);
      }
      if(deformation < 180 && deformation > 100){
        object1.shapeColor = color(230,230,0);
      }
      if(deformation < 100){
        object1.shapeColor = color(0,255,0);
      }
  }
}