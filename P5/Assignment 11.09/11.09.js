var data;
var url;

var baseUrl;
var query;
var appID;
var headline;
var i = 0;


var mapLoc1;
var mapLoc2;
var mapLoc3;

var img;
var myFont;

var searchTerms = []; //make an array to store search terms
var searchIndex = 0;



function preload(){
	img = loadImage("assets/donaldfistsresize.png");
	img2 = loadImage("assets/obamaresize.png");
	img3 = loadImage("assets/hillresize.png");
	myFont = loadFont("Changa/Changa-Medium.ttf");

}


function setup() {

	mapLoc1 = new Map(75, 450, img);
	mapLoc2 = new Map(300, 450, img2);
	mapLoc3 = new Map(525, 450, img3);

	createCanvas(600, 600);
	background(255, 145, 145);




	//make a set of search terms stored in an array for easy switching
	searchTerms[0] = "donald trump";
	searchTerms[1] = "barack obama";
	searchTerms[2] = "hillary clinton";

	//construct the base of your URL
	baseUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";
	query = searchTerms[0];
	appID = "2f0ae0e69a724184b32c5970f6dc9176";

	url = baseUrl +"q=" +  query + "&api-key=" + appID;

	//cycles through after every 3000 milliseconds or every 3 seconds; keeps API from locking me out
	setInterval(queryData, 3000);

}



//dataResponse() is callback function
function dataResponse(tempData){
	data = tempData;

	//got info heirachy by looking at json
	headline = data.response.docs[i].headline.main;
	console.log(headline);
	console.log(query);
	fill(0,0,0);
	textSize(15);
	textAlign(CENTER);
	text(headline, 300, 275);



}

function queryData(){
	background(255, 145, 145);


	loadJSON(url, dataResponse);

	if(searchIndex < 2){
		searchIndex += 1;


	} else {
		searchIndex = 0;

		}

		if (searchIndex == 1){
			mapLoc1.interact();
			mapLoc2.reset();
			mapLoc3.reset();


		} else if (searchIndex == 2){
			mapLoc1.reset();
			mapLoc2.interact();
			mapLoc3.reset();

		} else if (searchIndex == 0){
			mapLoc1.reset();
			mapLoc2.reset();
			mapLoc3.interact();

		}

	query = searchTerms[searchIndex];

	url = baseUrl + "q=" +  query + "&api-key=" + appID;
}


function draw() {
	fill(0,0,0);
	textSize(36);
	textFont(myFont);
	textAlign(CENTER);
	text("NYTimes Article Search Results", 300, 100);


	// if (searchIndex == 0){
	// 	mapLoc1.interact();
	// 	mapLoc2.reset();
	// 	mapLoc3.reset();
  //
	// } else if (searchIndex == 1){
	// 	mapLoc1.reset();
	// 	mapLoc2.interact();
	// 	mapLoc3.reset();
  //
	// } else if (searchIndex == 2){
	// 	mapLoc1.reset();
	// 	mapLoc2.reset();
	// 	mapLoc3.interact();
  //
	// }
	mapLoc1.display();
	mapLoc2.display();
	mapLoc3.display();

}



function keyPressed(){
	//prevents error if user presses letter or double digit number
	if (key < 10){
		//shows next iteration of results
		i = key;
		fill(153, 0, 30);
		textSize(26);
		text("Now showing results for index #" + i, 300, 150);
	}


}




//class

function Map( x,  y, pic){
	this.x = x;
	this. y= y;
	this.size = 50;
	this.color= color(153, 0, 30);
	this.image = pic;

	this.display = function(){
		strokeWeight(3);
		fill(this.color);
		ellipse(this.x, this.y, this.size, this.size);
		imageMode(CENTER);
		image(this.image, this.x, this.y+100);
	}

	this.interact = function(){
		this.color= color (153, 0, 30);
		// var d = dist(mouseX, mouseY, this.x, this.y);
		// if (d < this.size/2){
		// 	this.color= color (244, 206, 66);
		// }
	}

	this.reset = function(){
		this.color= color(255, 255, 255);
	}
};



//tried for user interaction-- couldn't get to work with setInterval
// function mousePressed(){
	// var d = dist(mouseX, mouseY, mapLoc1.x, mapLoc1.y);
	// var e = dist(mouseX, mouseY, mapLoc2.x, mapLoc2.y);
	// var f = dist(mouseX, mouseY, mapLoc3.x, mapLoc3.y);

	// if (d < 25){
	// 	mapLoc1.interact();
	// 	mapLoc2.reset();
	// 	mapLoc3.reset();
  //
	// } else if (e < 25){
	// 	mapLoc1.reset();
	// 	mapLoc2.interact();
	// 	mapLoc3.reset();
  //
	// } else if (f < 25){
	// 	mapLoc1.reset();
	// 	mapLoc2.reset();
	// 	mapLoc3.interact();
  //
	// }


// }
