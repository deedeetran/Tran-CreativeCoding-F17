//series of rectangles, made with a for loop controlling their rotation angle in P5

function setup(){
  createCanvas(600, 600);

}

function draw(){
  fill(0,0,0);
  translate(width/2, height/2);
  for (var i =1; i <= 3; i++){
      rotate(PI/i*2);
      rect(i*20, 10, 10, 10);

    }
  }
