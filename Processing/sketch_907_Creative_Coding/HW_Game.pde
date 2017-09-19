//Start of Game sketch

//initialize variables
float reuse;
int count= 0;

//setup framesize and rate
void setup(){
  size(600,600);
  frameRate(4);
}

//draw loop
void draw(){
  //initialize local variable
  float xvalue= random(550);
  //test printlns (only for testing purposes)
  println("Reuse", reuse);
  println("Xvalue", xvalue);
    //while loop to try to stop overlapping rectangles
    while ((reuse <= xvalue+50) &&(reuse >= xvalue -50)){
      xvalue= random(550);
    }
  //draw the rectangles
  rect(xvalue,random(500), 50, 100);
  //counter variable to count the number of rectangles
  count += 1;
  reuse= xvalue;
  //conditional to stop drawing and end game
  if (count == 15){
    noLoop();
    println("GAMEOVER TOO SLOW");
    
  }

  
}