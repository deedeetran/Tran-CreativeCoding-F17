//A series of 3 rectangles in a row, each rotated to a different angle in P5

function setup(){
  createCanvas(600, 600);

}

function draw(){
  fill(0,0,0);
  translate(width/2, height/2);

  rotate(PI/2);
  rect(20, 10, 10, 10);

  rotate(PI/4);
  rect(40, 10, 10, 10);

  rotate(PI/6);
  rect(60, 10, 10, 10);
}
