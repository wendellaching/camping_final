//scene one
var backgroundoneImage;
var tree1_1;
var tree1_2;
var tree1_3;
var tree1_4;
var blimponeImage;
var boyoneImage;
var momImage;
//scene two
var backgroundtwoImage;
var redImage;
var tentImage;
var woodImage;
var yellowImage;
//scene three berries
var backgroundthreeImage;
//scene four fish
var backgroundfourImage;
var fishaliveImage;
var fishdeadImage;
// house scene
var currentScene = "homeA"
	// var blimpA = +200;
var blimpB = 300;


function preload() {
	//scene one home
	backgroundoneImage = loadImage("images/backgroundone.jpg");
	tree1_1Image = loadImage("images/tree1_1.png");
	tree1_2Image = loadImage("images/tree1_2.png");
	tree1_3Image = loadImage("images/tree1_3.png");
	tree1_4Image = loadImage("images/tree1_4.png");
	blimponeImage = loadImage("images/blimpone.png");
	boyoneImage = loadImage("images/boyone.png");
	momImage = loadImage("images/mom.png");
	//scene two tent
	backgroundtwoImage = loadImage("images/backgroundtwo.jpg");
	redImage = loadImage("images/red.png");
	tentImage = loadImage("images/tent.png");
	woodImage = loadImages("images/wood.png");
	yellowImage = loadImages("images/yellow.png");
	//scene three berries
	backgroundthreeImage = loadImage("images/backgroundthree.png");
	//scene four fish
	backgroundfourImage = loadImage("images/backgroundfour.jpg");
	fishaliveImage = loadImage("images/fishalive.png");
	fishdeadImage = loadImage("images/fishdead.png");
}

function setup() {
	// create a place to draw
	createCanvas(800, 600);
}

function draw() {
	//home scene	if (currentScene === "nightA")
	if (currentScene === "homeA") {
		drawHomeA();
	} else if (currentScene === "campA") {
		drawCampA();
	}
}

function drawHomeA() {
	image(backgroundoneImage, 0, 0);
	image(tree1_3Image, 340, 170);
	image(tree1_2Image, 240, 170);
	image(tree1_1Image, 190, 210);
	image(boyoneImage, 500, 250);
	//animate blimp
	// change position
	blimpB = blimpB - .5;
	//contrain blimp
	if (blimpB < 170) {
		blimpB = 300;
	}
	image(blimponeImage, blimpB, 120);
}

function drawCampA() {
	image(backgroundtwoImage, 0, 0);
}

function mouseReleased() {
	if (currentScene === "homeA") {
		currentScene = "campA";
	} else {
		currentScene = "homeA";
	}
}
