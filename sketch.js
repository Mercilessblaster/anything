var fixedRect;
var movingRect;
var exRect1;
var exrect2;

function setup() {
   createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);
  exRect1 = createSprite(100,300,50,50);
  exRect2 = createSprite(200,300,50,50);
}

function draw() {
  background("black");  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(anything(movingRect,exRect1)){
    exRect1.shapeColor = ('red')
    movingRect.shapeColor = ('green')
  } 
else
  {
    exRect1.shapeColor = ('grey')
    movingRect.shapeColor = ('grey')
  }
   
  drawSprites();
}
function anything(A,C){
  if (A.x - C.x < C.width/2 + A.width/2 && C.x - A.x < C.width/2 + A.width/2 && A.y - C.y < C.height/2 + A.height/2 &&  C.y - A.y < C.height/2 + A.height/2)
   {
     return true
   }
   else
   {
     return false
   }
}