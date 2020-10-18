var fixedrect, movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600,10,50,50);
  fixedrect.shapeColor="green";
  fixedrect.velocityY=6;
  movingrect=createSprite(600,790,60,60);
  movingrect.shapeColor="green";
  movingrect.velocityY=-6;
}

function draw() {
  background(0,0,0);  


  //movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY;

  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&& movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&& fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2) {
    fixedrect.velocityY= -(fixedrect.velocityY);
    movingrect.velocityY= -(movingrect.velocityY);

  }

 
  //if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&& movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&& fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    //fixedrect.shapeColor="red";
    //movingrect.shapeColor="red";
  //}
  //else{
    //fixedrect.shapeColor="green";
    //movingrect.shapeColor="green";
  //}
  
  

  drawSprites();
}