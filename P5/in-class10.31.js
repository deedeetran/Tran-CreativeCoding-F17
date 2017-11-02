//Demonstrate Object Oriented Programming in P5

var mySound;
var mySound2;
var mySound3;

var myShape;
var myShape2;
var myShape3;
var myColor;

function preload(){
  //preload sounds to get them ready
  mySound = loadSound("assets/bounce.mp3");
  mySound2 = loadSound("assets/basketball.mp3");
  mySound3 = loadSound("assets/thump.mp3");
}

function setup(){
  createCanvas (400, 400);
  //create new objects for each shape
  myShape = new Shape(250, 120, 3, 2, color(255, 216, 234), 15, mySound);
  myShape2 = new Shape(10, 90, 6, 3, color(139, 186, 0), 26, mySound2);
  myShape3 = new Shape(50, 400, 1, 4, color(155, 0, 186), 100, mySound3);

}

function draw(){
  background(109, 148, 219);
  //drawing code
  myShape.animate();
  myShape.display();
  myShape2.animate();
  myShape2.display();
  myShape3.animate();
  myShape3.display();
}

//constructor for class
function Shape(xPos, yPos, myXVel, myYVel, _color, _size, _sound){
  //in P5, this.whatever makes the variable
  this.x = xPos;
  this.y = yPos;
  this.xVel = myXVel;
  this.yVel = myYVel;
  this.size = _size;
  this.c = _color;
  this.s = _sound;

  //makes move
  this.animate = function(){
    this.x += this.xVel;
    this.y += this.yVel;

    //limit to walls of canvas and play sound when objects hit the walls
    if (this.x > width || this.x < 0){
      this.s.play();
      this.xVel *= -1;

    }
    if (this.y > height || this.y < 0){
      this.s.play();
      this.yVel *= -1;
    }
  }

  //code to make the ellipses
    this.display = function(){
      noStroke();
      fill(this.c);
      ellipse(this.x, this.y, this.size, this.size);
    }
  };
