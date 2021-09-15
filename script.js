class Ball {
  constructor(x, y, w, h) {
    this.x = x; 
    this.y = y;
    this.w = w;
    this.h = h;
    
  }
  drawBall() {
    rect(this.x, this.y, this.w, this.h);


    }
  }
function setup(){
  createCanvas(500, 400);
  ball1 = new Ball(40,30,30,30);
  ball2 = new Ball(100,340,50,50);
  ball3 = new Ball(240,20,70,70);
  ball4 = new Ball(420,60,60,60);
}





 var [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

 function draw() {
 	background(225);
  ball1.drawBall();
  ball2.drawBall(); 
  ball3.drawBall();
  ball4.drawBall();
	
 	fill(0);
 	text("Use the arrow keys (or WASD) to move the square around", 25, 25);
	
 	fill(0, 255, 0);
 	rect(xpos, ypos, 50, 50);
   rect(80, 100, 50, 50);
	
 	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
 	if(ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;

   if (ypos >= 10 && ypos <= 90) {
     if (xpos >= 220 && xpos <= 310) {
       fill("red");
   }
   }
 }

function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = -2;
			break;
		case 39:
		case 68:
			xspeed = 2;
			break;
		case 38:
		case 87:
			yspeed = -2;
			break;
		case 40:
		case 83:
			yspeed = 2;
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = 0;
			break;
		case 39:
		case 68:
			xspeed = 0;
			break;
		case 38:
		case 87:
			yspeed = 0;
			break;
		case 40:
		case 83:
			yspeed = 0;
			break;
	}
}