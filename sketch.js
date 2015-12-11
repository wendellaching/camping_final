//scene one
var backgroundoneImage;
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
var blimpB = 150;


function preload() {
	//scene one home
	backgroundoneImage = loadImage("images/backgroundone.jpg");
	blimponeImage = loadImage("images/blimpone.png");
	boyoneImage = loadImage("images/boyone.png");
	momImage = loadImage("images/mom.png");
	//scene two tent
	backgroundtwoImage = loadImage("images/backgroundthree.png");
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
	image(boyoneImage, 500, 250);
	// image(momImage, 200, 280);
	// image(blimponeImage, 290, 120);
	//animate blimpone
	// blimpA += -.8;
	// if (blimpA > 600) {
	// 	blimpA = -200;
	// }
	// image(blimponeImage, blimpA, 115);

	// change position
	blimpB = blimpB - .5;
	//contrain blimp
	if (blimpB > 650) {
		blimpB = 150;
	}
	image(blimponeImage, blimpB, 115);
}
