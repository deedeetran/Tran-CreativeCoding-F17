/*
Create a bouncing ball animation (or other simple animation of your choice) with a sound effect on the “impact” into the walls. Be intentional with your aesthetic choices. Post a screenshot on your blog and the code on Github.
*/

var mySound;
var myImage;
var from;
var to;
var back;

var xPos = 0;
var move = 1;

function preload(){
  mySound = loadSound ('assets/bounce.mp3');
  myImage = loadImage ('assets/car.png');

}

function setup(){
  from = color (10, 157, 173);
  to = color (9, 140, 173);
  back = lerpColor(from, to, .4);
  createCanvas(600, 600);



}

function draw(){
  background(back);
  xPos += move;
  image(myImage, xPos, height/2, myImage.width/3, myImage.height/3);

  if (xPos >= width - myImage.width/3){
    mySound.play();
    move = move * -1;
  }
  if (move < 0 &&  ! mySound.isPlaying()){
    move = 0;
  }

}
