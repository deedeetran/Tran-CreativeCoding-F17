
//Interactive Screen Sectioning

function setup() {
  createCanvas(600, 500);
}


function draw() {
  //draw red rectangle if mouse is positioned more than 1/2 of the page but less than 500px
  if ((mouseX > width * .5) && (mouseX < width-100)){
    fill(255, 8, 8);
    rect(.5 * width, 0, .5 * width, height);
  }
  //draw Teal rectangle if the mouse is pressed and y-position is less than 1/3rd of canvas
  else if (mouseIsPressed && (mouseY < (1/3) * height)){
    fill(8, 236, 255);
    rect(0,0, .5 * width, (1/3) * height);
  }
  //draw Blue rectangle if y-position is more than 1/3rd of the height and x-position is less than 1/2 of the width
  else if (mouseX < .5 * width && (mouseY > (height - ((1/3) * height)))){
    fill(8, 13, 255);
    rect(0,(1/3) * height, .5 * width, ((2/3) * height));
  }

  //Turn the whole canvas yellow if the x-position is greater than 500px on the screen
  else if (mouseX > width-100){
    background(255, 243, 8);
  }
  //If none of the above conditions are satisfied, turn the whole canvas blank (white)
  else{
    background(255, 255, 255);
  }
}
