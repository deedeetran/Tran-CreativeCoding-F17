
//P5.js
//Music Sequencer
//Deanna Tran

var gong;
var ball;
var count = 0;
var ballArray = [];
var ballArray2 = [];

//sound variables
var pop;
var tone4;
var ding;


function preload(){
  pop = loadSound("assets/pop.mp3");
   tone4 = loadSound("assets/4tonechime.mp3");
   ding = loadSound("assets/ding.mp3");
}


function setup(){
  createCanvas(850, 600);
  gong = new Gong();
  //create an array of instrument objects
  for (var i = 0; i < 15; i++){
    //array for balls on left side
    ballArray[i] = new Instruments(0, random(150, 450), 0, random(5,20), random(1,3), 0);
    //array for balls on right side
    ballArray2[i] = new Instruments(width, random(150, 450), 0, random(5,20), random(-1,-3), 0);
  }
}

function draw(){
  background(7,55,99);

  gong.display();

  //perform these functions for every object in the ballArrays
  for (var j = 0; j < ballArray.length; j++){
    ballArray[j].display();
    ballArray2[j].display();

    var ballWidth = ballArray[j].size/2;
    var ballWidth2 = ballArray2[j].size/2;

    var gongWidth = 150;

    ballArray[j].move();
    ballArray2[j].move();

    //this is to determine space between instruments (balls) and gong
    var d = dist(ballArray[j].x, ballArray[j].y, gong.x, gong.y);
    var d2 = dist(ballArray2[j].x, ballArray2[j].y, gong.x, gong.y);

    //when the instruments (balls) collide with the gong, play sound and reverse
    if (d < ballWidth + gongWidth){
      ballArray[j].reverse();
      count += 1;
      //conditional to determine which sounds to play
      if (ballArray[j].color >= 0 && ballArray[j].color <= 85){
        pop.play();
      } else if(ballArray[j].color > 85 && ballArray[j].color < 170){
        tone4.play();
      } else{
        ding.play();
        }
      }

      if (d2 < ballWidth2 + gongWidth){
        ballArray2[j].reverse();
        //conditional to determine which sounds to play
        if (ballArray2[j].color >= 0 && ballArray2[j].color <= 85){
          pop.play();
        } else if(ballArray2[j].color > 85 && ballArray2[j].color < 170){
          tone4.play();
        } else{
          ding.play();
          }
      }

    //when the instruments (balls) hit left edge of the screen, reverse again
    if ((ballArray[j].x < ballArray[j].size) && (count > 0)){
      ballArray[j].reverse();
      ballArray[j].change();
    }

    //when the instruments (balls) hit right edge of the screen, reverse again
    if ((ballArray2[j].x > width) && (count > 0)){
      ballArray2[j].reverse();
      ballArray2[j].change();
    }

//close for loop
}






//close draw
}

//class makes middle "gong"
function Gong(){
  this.x = width/2;
  this.y = height/2;
  this.w = 300;
  this.h = 300;

  //function that draws the gong shape
  this.display = function(){
    strokeWeight(12);
    fill(195, 199, 229);
    ellipse(this.x, this.y, this.w, this.h);
  }
};

//class makes instruments that play the gong
function Instruments(x, y, _color, _size, _xvel, _yvel){
  this.x = x;
  this.y = y;
  this.color = _color;
  this.size = _size;
  this.Xspeed = _xvel;
  this.Yspeed = _yvel;

  //function that displays the instrument
  this.display = function(){
    strokeWeight(0);
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  //function that controls instruments' movements
  this.move = function(){
      this.x += this.Xspeed;
      this.y += this.Yspeed;
    }

  //function that reverses the instruments' motion
  this.reverse = function(){
    this.Xspeed *= -1;
    this.Yspeed *= -1;
  }

  //function that changes the instruments' colors
  this.change = function(){
    this.color = random(255);

  }


};
