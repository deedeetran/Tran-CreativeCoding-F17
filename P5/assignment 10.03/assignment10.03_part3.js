//series of rectangles, with mouse interactivity controlling a dynamic rotation angle in P5

function setup(){
  createCanvas(600,600);
}

function draw(){
  fill(0,0,0);
  background(255);
  translate(width/2, height/2);
  for (var i = 1; i <= 3; i++){
    rotate(PI/i*mouseX);
    rect(i*20, 100, 10, 10);
  }
}
