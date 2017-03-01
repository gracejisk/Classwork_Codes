var invaderSpeed = 5;
var invaders = [
	{ x: 30,
	  y: 30,
	  w: 10,
	  h: 5
	},
	{ x: 25,
	  y: 45,
	  w: 9,
		h: 5
	},
];
var playerX = 200;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
	for (var i = 0; i < invaders.length; i += 1) {
		paintInvader(invaders[i]);
	}
	paintPlayer(playerX);
}
	
function paintInvader(invader) {
	rect(invader.x, invader.y, invader.w, invader.h);
}

function paintPlayer(position) {
	triangle(position-10, height-20,
					 position+10, height-20,
					 position, height-60);
