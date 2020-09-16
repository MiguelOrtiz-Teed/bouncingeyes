var angle = 0;
var eye = {
  x: 300,
  y: 300,
  xspeed: 4,
  yspeed: -3
}
var eye2 = {
  x: 300,
  y: 300,
  xspeed: 5,
  yspeed: -2
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  push();
  move();
  bounce();
  display();
  pop();

  push();
  move2();
  bounce2();
  display2();
  pop();

  push();
  //move3();
  //bounce3();
  //display3();
  pop();
}





function move() {
  eye.x = eye.x + eye.xspeed;
  eye.y = eye.y + eye.yspeed;
}

function move2() {
  eye2.x = eye2.x + eye2.xspeed;
  eye2.y = eye2.y + eye2.yspeed;
}


function bounce() {
  if (eye.x > width || eye.x < 0) {
    eye.xspeed = eye.xspeed * -1;
  }
  if (eye.y > height || eye.y < 0) {
    eye.yspeed = eye.yspeed * -1;
  }

}

function bounce2() {
  if (eye2.x > width || eye2.x < 0) {
    eye2.xspeed = eye2.xspeed * -1;
  }
  if (eye2.y > height || eye2.y < 0) {
    eye2.yspeed = eye2.yspeed * -1;
  }

}

function display() {
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(eye.x, eye.y, 24, 24);
  //rotate(angle);

  noStroke();
  //firefly body
  fill(0)
  fill(25, 75, 75);
  fill(135)
  noStroke();
  ellipse(eye.x, eye.y, 100, 25);
  circle(eye.x, eye.y, 26);
  //head
  fill(255, 75, 75);
  circle(eye.x, eye.y, 55);
  //background eye
  stroke(1);
  fill(255);
  circle(eye.x, eye.y, 28);
  //eye
  fill(255);
  circle(eye.x, eye.y, 28);
  //pupil
  fill(0);
  circle(eye.x, eye.y, 10);
  fill(0);
  circle(eye.x, eye.y, 10);

  //rotate(45);
  fill(135)
  noStroke();
  //ellipse(eye.x, eye.y, 100, 25);

  //angle += .05

  //pop()
}

function display2() {
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(eye2.x, eye2.y, 24, 24);
  noStroke();
  //firefly body
  fill(0)
  fill(25, 75, 75);
  fill(135)
  noStroke();
  ellipse(eye2.x, eye2.y, 100, 25);
  circle(eye2.x, eye2.y, 26);
  //head
  fill(255, 75, 75);
  circle(eye2.x, eye2.y, 55);
  //background eye
  stroke(1);
  fill(255);
  circle(eye2.x, eye2.y, 28);
  //eye
  fill(255);
  circle(eye2.x, eye2.y, 28);
  //pupil
  fill(0);
  circle(eye2.x, eye2.y, 10);
  fill(0);
  circle(eye2.x, eye2.y, 10);

  //rotate(45);
  fill(135)
  noStroke();
  //ellipse(eye2.x, eye2.y, 100, 25);

  //angle += .05

  //pop()
}
