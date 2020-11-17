var fixedrect,movingrect; 
var a1,a2,a3,a4;


function setup() {
  createCanvas(800,400);

fixedrect=createSprite(150, 80, 100, 50);    
fixedrect.shapeColor="skyblue";
movingrect=createSprite(250,70,50,100);
movingrect.shapeColor="pink";
a1=createSprite(600, 20, 60, 90);
a1.shapeColor="green";
a2=createSprite(600, 300, 190, 60);
a2.shapeColor="yellow";
a3=createSprite(490, 110, 30, 100);
a3.shapeColor="purple";
a4=createSprite(670, 30, 150, 90);
a4.shapeColor="orange";
a1.velocityY=6;
a2.velocityY=-6;
}

function draw() {
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  console.log(movingrect.x-fixedrect.x);
  background(0);  

  bounceOff(a1,a2);

 if( isTouching(a4,movingrect))
 {
  a4.shapeColor="red";
  movingrect.shapeColor="red";
 }
else{
  a4.shapeColor="orange";
  movingrect.shapeColor="pink";
}

  drawSprites();
}

//true / false---> Boolean Values