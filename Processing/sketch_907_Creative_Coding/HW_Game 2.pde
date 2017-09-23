//Start of Game sketch
//Game: reaction time test

//initialize variables
float reusey;
float reusex;
int count = 0;
int i = 14;

//declare array of integers for x and y values of rectangles
float[] rectxval;
float[] rectyval;






//setup framesize and rate
void setup(){
  size(600,600);
  frameRate(4);
  background(152,2,2);
  rectxval = new float[15];
  rectyval = new float[15];
}

//draw loop
void draw(){
  //initialize local variable
  float xvalue= random(550);
  float yvalue= random(500);
  
  
  while (i >= 0){
    if (((xvalue <= rectxval[i] + 50) && (xvalue >= rectxval[i])) || ((yvalue <= rectyval[i]+100) && (yvalue >= rectyval[i]))){
      println("bad", xvalue);
      xvalue = random(550);
      yvalue = random(550);
      println("blah");
      i = 15;
    }

    i -= 1;
  }
    
  
  //while ((rectxval[i] + 50 >= xvalue) && (rectxval[i] <= xvalue)){
  //  xvalue = random(550);
  //  i += 1;
  //}
  
  //while ((rectyval[i] + 100 >= yvalue) && (rectyval[i] <= yvalue)){
  //  yvalue = random(550);
  //  i += 1;
  //}
  
  //i = 0;
  
  //for (int i = 0; i == rectxval.length; i++){
  //  if ((rectxval[i] + 50 >= xvalue) && (rectxval[i] == xvalue)) {
  //    xvalue = random(550);
  //  }
  //  if ((rectyval[i] + 100 >= yvalue) && (rectyval[i] == yvalue)) {
  //    yvalue = random(550);
  //  }
  //}
  
  ////while loop to try to stop overlapping rectangles
  //while ((reusex <= xvalue+50) && (reusex >= xvalue -50)){
  //  xvalue= random(550);      
  //}
  
  //while ((reusey <= yvalue+100) && (reusey >= yvalue -100)){
  //  yvalue= random(550);      
  //}
  
  rectxval[count] = xvalue;
  rectyval[count] = yvalue;
  
  //draw the rectangles
  rect(xvalue,yvalue, 50, 100);
  println ("xvalue", xvalue);
  
  //counter variable to count the number of rectangles
  i = 14;
  count += 1;
  //reusex = xvalue;
  //reusey = yvalue;
  
  //conditional to stop drawing and end game
  if (count == 15){
    noLoop();
    println("GAMEOVER TOO SLOW");
  } 
}