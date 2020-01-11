var moving;
var fix;

function setup() {
  createCanvas(800,400);
 fix= createSprite(400, 200, 50, 50);
 moving=createSprite(200,10,200,15)
moving.shapeColor="black"
}

function draw() {
  
  
  background("blue");  
  moving.x=mouseX
  moving.y=mouseY
 if(moving.x-fix.x<moving.width/2+fix.width/2
  &&fix.x-moving.x<fix.width/2+moving.width/2
  &&moving.y-fix.y<moving.height/2+fix.height/2
  &&fix.y-moving.y<fix.height/2+moving.height/2){
    moving.shapeColor="green"
    fix.shapeColor="yellow"
  }
 
  drawSprites();
}