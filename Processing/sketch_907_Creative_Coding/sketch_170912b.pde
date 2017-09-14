//9/12 In-Class Challenge (divide screen by colors)
//interactive screen Assignment 09.12
//Deanna Tran


void setup(){
  size(600,600);
}



void draw(){
  //red
  if (mouseX > width*.5){
    fill(255, 8, 8);
    rect(.5*width, 0, .5*width, height);
  } 
  //yellow
  if (mouseX > width * .75){
    background(255,243,8);
  }
  //Teal
  if (mousePressed && (mouseY > .66 * height)){
    fill(8, 236, 255);
    rect(0,.66 * height, .5 * width, .66 * height);
  }
  //Blue
  if (mouseX < .5 * width && (mouseY < (height-(.66 * height)))){
    fill(8, 13, 255);
    rect(0,0, .5 * width, (.66 * height));
  }
    
}