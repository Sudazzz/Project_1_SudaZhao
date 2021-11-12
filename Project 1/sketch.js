vvar option=1;
var a=400;
var b=350;
var c=15;
var d=15;
var opacity=0;
var dropSpeed=3;
var myPerson1;
var peopleArray=[];

function setup() {
  createCanvas(800, 1000,P2D);//use 2D engine to make things faster
  print("press any key to see what happened");
  myPerson1 = new people (200, 600);
  for (var i = 0; i < 4; i++) {
  peopleArray.push(new (people));
  }
}

function draw() {
  currentSecond = second(); 
  
  frameRate(10);//the rate of the moving of light beam and the spot changing rate of humans
  background(20, 20, 100);
  for(o=0; o<100; o+=80){
    opacity+=o;
  }

  if (currentSecond % 10 == 0) {//the original normal scene
    UFO();// call UFO
    moon();//three moons
    road();//highway
    for (var i = 0; i < peopleArray.length; i++) {
      peopleArray [i]. display ();
      peopleArray [i]. move ();
    }
    myPerson1.display();
    myPerson1.move();
    drop();//the light beam from UFO
  }

  //other abnormal scene
  if (currentSecond % 5 == 0) {
    balls1();
    moon();//three moons
    road();//highway
      for (var i = 0; i < peopleArray.length; i++) {
      peopleArray [i]. display ();
      peopleArray [i]. move ();
    }
    myPerson1.display();
    myPerson1.move();
    drop();//the light beam from UFO
  }

  if (option == 1) {
    UFO();// call UFO
    balls2();
    road();//highway
     for (var i = 0; i < peopleArray.length; i++) {
      peopleArray [i]. display ();
      peopleArray [i]. move ();
    }
    myPerson1.display();
    myPerson1.move();
    drop();//the light beam from UFO
  }

  if (option == 2) {
    UFO();// call UFO
    moon();//three moons
    balls3();
    road();//highway
     for (var i = 0; i < peopleArray.length; i++) {
      peopleArray [i]. display ();
      peopleArray [i]. move ();
    }
    myPerson1.display();
    myPerson1.move();
    drop();//the light beam from UFO
  }

  if (option == 3) {
    UFO();// call UFO
    moon();//three moons
    road();//highway
    balls4();
      for (var i = 0; i < peopleArray.length; i++) {
      peopleArray [i]. display ();
      peopleArray [i]. move ();
    }
    myPerson1.display();
    myPerson1.move();
  }
}

function UFO() {
  fill(0);
  noStroke();
  ellipse(400, 300, 250, 300);
  //the UFO outline
  fill(20, 20, 100);
  rect(150, 350, 650, 250);//cover unnecessary part of UFO
  fill(0);
  ellipse(400, 350, 500, 150);//the disk of UFO
  fill(255);
  fill(map(mouseX, 0, width, 0, 255), map(mouseY, 0, 900, 0, 255), map(mouseX, 0, 200, 0, 255));//Change inside light in the UFO
  rect(380, 200, 50, 70);//the window of UFO
}

function drop() {
  fill(255);
  ellipse(400, 350, 120, 40);
  noStroke();
  fill(255, 190);//make opcity of light beam
  beginShape();
  vertex(400, 350);
  vertex(a-c/2, b);
  vertex(a+c/2, b);
  endShape();//bright light beam
  fill(255);
  ellipse(a, b, c, d);//light reflection circle
  c+=3;
  d+=1;
  b=b+dropSpeed;//changable spot of light beam
  if (b>=600) {
    b=350;
    c=10;
    d=15;
  }
}//make light beam move forward and backforard

function road() {
  fill(0);
  stroke(100, 100);
  strokeWeight(5);
  rect(0, 500, 1000, 200);//the road outline
  for (x=0; x<1000; x+=150) {
    fill(70);
    rect(x, 590, 100, 20);//the road stripes
  }
}

function moon() {
  fill(255, 255, 224);//moon color
  noStroke();
  ellipse(400, 70, 100, 100);
  ellipse(120, 180, 120, 120);
  ellipse(680, 180, 120, 120);//three moons' outline

  fill(255, 228, 181);
  stroke(255, 218, 185);
  strokeWeight(1);//Lunar crater color

  ellipse(370, 65, 20, 20);
  ellipse(360, 80, 10, 10);
  ellipse(390, 90, 30, 30);
  ellipse(400, 50, 4, 4);
  ellipse(430, 40, 10, 10);
  ellipse(420, 70, 20, 20);
  // first moom's lunar craters
  ellipse(130, 165, 20, 20);
  ellipse(160, 180, 10, 10);
  ellipse(90, 190, 40, 40);
  ellipse(140, 150, 4, 4);
  ellipse(100, 140, 20, 20);
  ellipse(150, 200, 20, 20);
  // second moom's lunar craters
  ellipse(670, 165, 20, 20);
  ellipse(640, 180, 10, 10);
  ellipse(710, 190, 40, 40);
  ellipse(660, 150, 4, 4);
  ellipse(700, 140, 20, 20);
  ellipse(650, 200, 20, 20);
  // third moom's lunar craters
}

function balls1() {//the second scene movement, 5 red bolloons
  fill(180, 20, 30);
  ellipse(150, 350, 50, 60);
  ellipse(270, 240, 50, 60);
  ellipse(400, 170, 50, 60);
  ellipse(650, 350, 50, 60);
  ellipse(530, 240, 50, 60);
}

function balls2() {// the third scene movement, move with the beam light
  fill(180, 20, 30);
  ellipse(a-100, 100, 50, 60);
  ellipse(a-50, 150, 50, 60);
  ellipse(a, 200, 50, 60);
  ellipse(a-50, 250, 50, 60);
  ellipse(a-100, 300, 50, 60);//the right >

  ellipse(a-300, 100, 50, 60);
  ellipse(a-250, 150, 50, 60);
  ellipse(a-200, 200, 50, 60);
  ellipse(a-250, 250, 50, 60);
  ellipse(a-300, 300, 50, 60);//the left >
  a=a+20;
  if (a>750) {//repetitive
    a=0;
  }
}

function balls3() {//the fourth scene movement, two line for two bubbles
  fill(180, 20, 30);
  ellipse(200, 900, 50, 60);
  ellipse(200, 800, 50, 60);
  ellipse(600, 900, 50, 60);
  ellipse(600, 800, 50, 60);
}

function balls4() {//the fifth scene movement,bubbles
  noStroke();
  fill(180, 20, 30, 40);
  ellipse(400+random(-30, 30), b+200, b-50, b-50);
  ellipse(400+random(-30, 30), b+250, b-100, b-100);
  ellipse(400+random(-30, 30), b+300, b-150, b-150);
  ellipse(400+random(-30, 30), b+100, b-200, b-200);
  ellipse(400+random(-30, 30), b+150, b-250, b-250);//the middle line

  ellipse(350+random(-30, 30), b+200, b-50, b-50);
  ellipse(300+random(-30, 30), b+250, b-100, b-100);
  ellipse(250+random(-30, 30), b+300, b-150, b-150);
  ellipse(200+random(-30, 30), b+100, b-200, b-200);
  ellipse(150+random(-30, 30), b+150, b-250, b-250);//the left oblique line

  ellipse(450+random(-30, 30), b+200, b-50, b-50);
  ellipse(500+random(-30, 30), b+250, b-100, b-100);
  ellipse(550+random(-30, 30), b+300, b-150, b-150);
  ellipse(600+random(-30, 30), b+100, b-200, b-200);
  ellipse(650+random(-30, 30), b+150, b-250, b-250);//the right oblique line

  b=b+10;
  if (b>300) {
    b=100;//repetitive
  }
}

function keyPressed() {
  option++;
  if (option > 3) {
    option = 1;
    //always change to other pattern by pressing key
  }
}

class people {
  constructor (x, y) {
    this.x = random(100,600);
    this.y = random(600,1000);    
  }
  
  display () {
    stroke(0);
    strokeWeight(3);
    fill(random(0, 255), random(0, 255), random(0, 255), d);//changable color
    quad(this.x-10, this.y+40, this.x-30, this.y+100, this.x+30, this.y+100, this.x+10, this.y+40);//body 1
    ellipse(this.x, this.y, 10, 13);
    ellipse(this.x, this.y, 40, 40);//head 1
    fill(0);
    ellipse(this.x, this.y, 15, 15);//eye 1
  }
  
  move () {
    this.x += random (-5, 5);
    this.y += random (-5, 5);
    
  }
}
