//replicating Peter Foolen's photo of structures in front of a Sol LeWitt piece in P5.js
//link to original photo (2nd photo in blog post): //http://peterfoolen.blogspot.com/2012/09/sol-lewitt-bonnefantenmuseum-maastricht.html


//setting up
function setup(){
  createCanvas(800, 600);
  background(17, 17, 17);
}


//function to draw all of the lines
function makeLine(stop, x1, y1, x2, y2, add1, add2){
  while(y1 < stop){
    line(x1, y1, x2, y2);
    y1 += add1;
    y2 += add2;
  }
}

//function to draw light colors shapes
function makeShape(x1, y1, x2, y2, x3, y3, x4, y4){
  beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, y3);
    vertex(x4, y4);
  endShape(CLOSE);
}



//draw it all
function draw(){
  //trying to create gradient
  var from = color(222, 224, 223);
  var to = color(209, 209, 209);
  var c1 = lerpColor(from, to, .95);
  var c2 = lerpColor(from, to, .70);
  var c3 = lerpColor(from, to, .50);
  var c4 = lerpColor(from, to, .30);
  var c5 = lerpColor(from, to, .20);
  var c6 = lerpColor(from, to, .10);


  //create fake lighting on left side
  fill (39, 40, 39);
  noStroke();
  makeShape(538, 0, 800, 0, 800, 600, 544, 600);


  stroke(212, 216, 215);

  strokeWeight(2.45);
  //left first set of lines
  makeLine(30, 0, -15, 545, 8, 16, 13)
  //right first set of lines
  makeLine(40, 534, 8, 800, 0, 13, 10);

  strokeWeight(2);
  //left 2nd set of lines
  makeLine(400, 0, 30, 545, 45, 15, 15);
  //right 2nd set of lines
  makeLine(420, 534, 45, 800, 30, 15, 15);

  //left 3rd set of lines
  makeLine(450, 0, 410, 545, 420, 14.4, 15);
  //right 3rd set of lines-- stop value must be larger because inverted from left side
  makeLine(460, 534, 420, 800, 410, 15, 14.4);

  //left 4th set of lines
  makeLine(650, 0, 458, 545, 462, 18, 15);
  //right 4th set of lines
  makeLine(600, 534, 462, 800, 458, 15, 18);

  noStroke();
  fill(84, 63, 45);
  makeShape(715,600, 710,579, 800,585, 800,600);



  //bigger shape
  fill(209, 209, 209);
  makeShape(360,600, 420,237, 467,210, 465,600);
  fill(222, 224, 223);
  makeShape(465,600, 467,210, 537,187, 573,600);
  fill(211, 211, 211);
  makeShape(573,600, 537,187, 617,170, 715,600);

  //shading shapes
  fill(c1);
  makeShape(465,600, 465,500, 565,500, 573,600);
  fill(c2);
  makeShape(465,500, 465,450, 560,450, 564,500);
  fill(c3);
  makeShape(466,450, 466,400, 556,400, 561,450);
  fill(c4);
  makeShape(466,400, 466,350, 552,350, 556,400);
  fill(c5);
  makeShape(466,350, 466,300, 547,300, 552,350);
  fill(c6);
  makeShape(466,300, 466,250, 543,250, 547,300);



  //whole left shape
  fill(111, 112, 111);
  makeShape(40,600, 110,320, 180,352, 180,600);
  fill(173, 173, 173);
  makeShape(180,600, 180,352, 270,400, 315,600);
  fill(206, 206, 206);
  makeShape(315,600, 270,400, 360,470, 408,600);










}
