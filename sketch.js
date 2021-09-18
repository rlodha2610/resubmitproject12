var garden,rabbit;
var gardenImg,rabbitImg;
var leaf1,leaf1Img;
var leaf2,leaf2Img;
var leaf3,leaf3Img
var apple,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leaf1Img  = loadImage("leaf.png");
  leaf2Img  = loadImage("orangeLeaf.png");
  leaf3Img  = loadImage("redImage.png");
  appleImg  = loadImage("apple.png");

}

function setup(){
  createCanvas(400,400);

  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180,340,30,30);
  rabbit.addImage(rabbitImg);
  rabbit.scale =0.09;

}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


  garden.velocityX=-5;
  if (garden.x<147){
  garden.x=garden.width/2
  }

  spawnapples();
  spawnleaves1();
  spawnleaves2();
  drawSprites();
}

function spawnapples(){
  if(frameCount % 80 === 0){

  apple = createSprite(300,200,40,10);
  apple.velocityX = -4;
  apple.addImage(appleImg)
  apple.scale=0.07;
  apple.y = Math.round(random(60,80));
  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth +1;
  apple.lifetime=120;
}
}

function spawnleaves1(){
  if(frameCount % 80 === 0){

  leaf1 = createSprite(500,180,40,10);
  leaf1.velocityX = -4;
  leaf1.addImage(leaf1Img)
  leaf1.scale=0.07;
  leaf1.y = Math.round(random(50,70));
  leaf1.depth = rabbit.depth;
  rabbit.depth = rabbit.depth +1;
  leaf1.lifetime=80;
}
}

function spawnleaves2(){
  if(frameCount % 80 === 0){

  leaf2 = createSprite(700,160,40,10);
  leaf2.velocityX = -4;
  leaf2.addImage(leaf2Img)
  leaf2.scale=0.07;
  leaf2.y = Math.round(random(100,120));
  leaf2.depth = rabbit.depth;
  rabbit.depth = rabbit.depth +1;
  leaf2.lifetime=200;
}
}

function spawnleaves3(){
  if(frameCount % 80 === 0){

  leaf3 = createSprite(900,220,40,10);
  leaf3.velocityX = -4;
  leaf3.addImage(leaf3Img)
  leaf3.scale=0.07;
  leaf3.y = Math.round(random(120,140));
  leaf3.depth = rabbit.depth;
  rabbit.depth = rabbit.depth +1;
  leaf3.lifetime=120;
}
}