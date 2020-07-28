//Creating the variables:-
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Creating variables.
var helicopter,package;

function preload(){
helicopter = loadImage(helicopter.png);
package = loadImage(package.png);
 
}

function setup() {
	createCanvas(800, 700);
}


function draw() { 
	background(0);
   
	var ball = createSprite(400,400,50,50);
 
	
	
	drawSprites();
 
}

function keyPressed() {
 //if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    
  //}
}



