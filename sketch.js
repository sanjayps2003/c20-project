
var r = 0;
var g = 50;
var b=255;

var point;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
 
  circle = createSprite(100,100,30,30);
}


function draw(){
background("red");

fill("green");
  circle.x = World.mouseX;
  circle.y = World.mouseY;

  if(circle.x>200){
    background("blue");
  }
  if(circle.x>600){
    background("green");
  }
  if(circle.x>600){
    background("green");
  }




  drawSprites();



  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}