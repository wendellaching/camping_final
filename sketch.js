var blimpone;
var blimptwo;
var boyone;
var fishalive;
var fishdead;
var list;

var arm;
var backgroundtwo;
var backgroundthree;
var backgroundfour;
// var x = backgroundfourImage;
var currentScene = "campA"
	// var currentSceneC = "campC"
	// var currentSceneD = "campD"
	// var currentSceneB = "campB"
	// var blimpA
var blimpA = 400;
//var blimpB
var blimpB = 650;
var appleA = 130
var fishA = 500;
var fishB = 500;
var appleY = 100;



function preload() {
	//scene two tent
	backgroundtwoImage = loadImage("images/backgroundtwo.jpg");
	boyoneImage = loadImage("images/boyone.png");
	listImage = loadImage("images/list.png");
	blimptwoImage = loadImage("images/blimptwo.png");
	//scene three berries
	backgroundthreeImage = loadImage("images/backgroundthree.jpg");
	//scene four fish
	backgroundfourImage = loadImage("images/backgroundfour.jpg");
	fishaliveImage = loadImage("images/fishalive.png");
	fishdeadImage = loadImage("images/fishdead.png");
	appleImage = loadImage("images/apple.png");
	armImage = loadImage("images/arm.png");
	backgroundfiveImage = loadImage("images/backgroundfive.png");
}

function setup() {
	// create a place to draw
	createCanvas(800, 600);
}

function draw() {
	if (currentScene === "campA") {
		drawCampA();
	} else if (currentScene === "campB") {
		drawCampB();
	} else if (currentScene === "campC") {
		drawCampC();
	} else if (currentScene === "campE") {
		drawCampE();
	} else if (currentScene === "campF") {
		drawCampF();
	}
}


function drawCampE() {
	image(backgroundfiveImage, 0, 0);

}

function drawCampA() {
	image(backgroundtwoImage, 0, 0);
	image(boyoneImage, 100, 250);
	//animate blimp two
	blimpB = blimpB - .5;
	//contrain blimp
	if (blimpB < 0) {
		blimpB = 650;
	}
	image(blimptwoImage, blimpB, 70);
	//list
	if (mouseX > 500) {
		if (mouseX < 800) {
			if (mouseY > 250) {
				if (mouseY < 600) {
					image(listImage, 0, 0);
				}
			}
		}
	}
}
//apple
function drawCampB() {
	image(backgroundthreeImage, 0, 0);


	//applefalls
	image(appleImage, 200, 100);


	//user becomes cursor
	image(armImage, mouseX, mouseY);

	//to fourth scene
	if (mouseIsPressed &&
		mouseX > 100 &&
		mouseX < 300 &&
		mouseY > 100 &&
		mouseY < 300) {
		image(backgroundfourImage, 0, 0);

	}
}

//fish scene
function drawCampC() {
	image(backgroundfourImage, 0, 0);

	//	animate fish
	fishA = fishA - 4;
	//contrain blimp
	if (fishA < 0) {
		fishA = 500;
	}
	image(fishaliveImage, fishA, 300);
	// image(fishdeadImage, 300, 300);
	//animate arm	image
	image(armImage, mouseX, mouseY);

}
//dfish dead
function drawCampE() {
	image(backgroundfourImage, 0, 0);
	image(fishdeadImage, 300, 300);
	image(armImage, mouseX, mouseY);

}
//done
function drawCampF() {
	image(backgroundfiveImage, 0, 0);
}

function mouseReleased() {
	if (currentScene === "campA") {
		currentScene = "campB";
	} else if (currentScene === "campB") {
		currentScene = "campC";
	} else if (currentScene === "campC") {
		currentScene = "campE";
	} else if (currentScene === "campE") {
		currentScene = "campF";
	}

}
