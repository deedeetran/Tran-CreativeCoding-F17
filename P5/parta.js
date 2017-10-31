/*
Write a function to toggle between audio play modes (“sustain” and “restart”). Call this function from one of your interactive functions, like keyPressed(). This does not need to be posted on your blog, but should be uploaded on Github.
*/
var loopMode= "restart";
var mySound;
var color;

function preload(){
  mySound = loadSound ('assets/marching.mp3');

}

function setup(){
  createCanvas(600, 600);
  console.log (loopMode);

  mySound.playMode(loopMode);
  mySound.loop(true);
  mySound.play();

}

function draw(){
  background(color, 0, 0);
  fill(255, 255, 255);
  text(loopMode, width/2, height/2);

}

function keyPressed(){
  if (color == 0){
    loopMode = "restart";
    mySound.playMode(loopMode);
    color = 255;
  } else{
    loopMode = "sustain";
    color = 0;
    mySound.playMode(loopMode);
  }

}
