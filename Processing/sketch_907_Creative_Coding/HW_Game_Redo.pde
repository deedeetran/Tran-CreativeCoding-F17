float xvalue;
float yvalue;
float xval_list[];
float yval_list[];
int count = 0;
int fill_value = 0;



void setup(){
  size (600, 600);
  frameRate(4);
  xval_list = new float[3];
  yval_list = new float[3];
}


void draw(){
  xvalue = random(550);
  yvalue = random(500);
  
  fill(fill_value);
  rect(xvalue,yvalue, 50, 100);
  
  xval_list[count] = xvalue;
  yval_list[count] = yvalue;
  
  count += 1;
  print ("count", count);
  
  if (count == 3){
    noLoop();
    println(xval_list);
  }  
}

void mouseClicked(){
  fill_value = 255;
  
}




//rect (xvalue, yvalue, 50, 100);