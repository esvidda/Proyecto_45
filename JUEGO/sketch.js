var a,b,c;
var pc;

var casita;
var mc;
var villianImg, villian;

var floorGroup;

function preload(){
  casita = loadImage ("casita.jpeg");
  mc = loadImage ("mc.png");
  villianImg = loadImage ("villianImg.png");

}

function setup(){
createCanvas (600,600);
floorGroup = new Group ();
a = createSprite(250,250,20,100);
b = createSprite(250,200,100,20);
c = createSprite(250,50,20,100);

pc = createSprite(100,100,10,10);
pc.addImage(mc);
pc.scale = 0.3;

villian = createSprite(550,550,10,10);
villian.addImage(villianImg);
villian.scale = 0.3;
floors(400,325);

}

function draw(){
background("white");
image(casita,0,0,2000,1000);

if(keyDown(RIGHT_ARROW)){
  pc.x+=2;
}
if(keyDown(LEFT_ARROW)){
  pc.x-=2;
}
if(keyDown(UP_ARROW)){
  pc.y-=2;
}
if(keyDown(DOWN_ARROW)){
  pc.y+=2;
}
camera.position.x = pc.x;
camera.position.y = pc.y;
drawSprites();
}

function floors(x,y){
  var floor =createSprite(x,y,300,25);
  floorGroup.add(floor);
}