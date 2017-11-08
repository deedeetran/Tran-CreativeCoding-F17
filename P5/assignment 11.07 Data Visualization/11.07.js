
//Data Visual showing the number of inductees into the Rock N' Roll Hall of Fame from 1986-2015
var count = 0;
var what = 0;
var data;
var array = [];
var countArray = [];
var myfont;
var labelfont;

function preload(){
  data= loadJSON("rock.json");
  myfont= loadFont("assets/NewRocker-Regular.ttf");
  labelfont= loadFont("assets/helvetica.ttf");
}

function setup(){
  createCanvas(800, 1000);


  //puts one of each of the years into a new array
  for (var i = 1; i < data.artists.length; i++){
    if (data.artists[i].year != data.artists[i-1].year){
      array[what]= data.artists[i-1].year;
      what += 1;
    }
  }
  //add last year to array
  array[what] = data.artists[data.artists.length-1].year;



  //counts the number of times each year repeats in the original json array and puts it into a seperate array
  for (var j = 0; j < array.length; j++){
    for (var g= 0; g < data.artists.length; g++){
      if (array[j]== data.artists[g].year){
        count += 1;
      }
    }
    countArray[j] = count;
    count = 0;
  }





}



function draw(){
  background(255);

  var y= 0;
  var size= width/countArray.length;

  //draw bars
  for (var z = 0; z < countArray.length; z++){
    fill(26, 109, 191);
    noStroke();
    //scale bar sizes by multiplying by 30, evenly space out bars
    rect(0, y+=size+4, countArray[z] *30, size-5);
    fill(255);
    textFont(labelfont);
    textSize(15);
    //label bars with years
    text(array[z], 20, y+15);
    fill(0,0,0);
    //label end of bars with number of inductees
    text(countArray[z], (countArray[z] *30) + 20, y+15);

  }

  //title the bar graph
  textFont(myfont);
  textSize(20);
  textAlign(CENTER);
  text("Number of inductees to the Rock N' Roll Hall of Fame from 1986-2015", 550, 50, 100);

}
