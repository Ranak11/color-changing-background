

function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,20,20);

}

function draw() 
{

  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("red");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("blue");
  }

 if( KeyIsDown(RIGHT_ARROW) )
 {
 background("green")

 }

  
  drawSprites();
}
