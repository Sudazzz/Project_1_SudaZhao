let option=1;//begin scene
let a=400;//used as a variable in the drop function 
let b=350;//the initial speed of the lightbeam
let c=15;//used as a variable in the drop function 
let d=15;//used as a variable to create light shadow in the drop function
let e=300;//used in ball2 function to varify the size of fog
let opacity=0;//used as opacity which will change with the flow of time
let dropSpeed=3;//the rate to speed up
let myPerson1;//the class I made
let peopleArray=[];//the array I made for my class
let o=0;

function setup() {
  createCanvas(800, 1000,P2D);//use 2D engine to make things faster
  print("press any key or hold for a second to see what happened");//explain what I want to show to others
  myPerson1 = new people (200, 600);//create class
	
  for (let i = 0; i < 4; i++) {
  peopleArray.push(new (people));
  }//put 5 people in peopleArray
}

function draw() {
  currentSecond = second(); //use time to change something on the screen
  
  frameRate(10);//the rate of the moving of light beam and the spot changing rate of humans
  background(20, 20, 100);//dark blue background invode people feelings
  for(o=0; o<100; o+=80){
    opacity+=o;//change the opacity with time
  }

  if (currentSecond % 10 == 0) {//change with the flow with time, unexpected things will happen
		if (option != 5){
			option = 5;
		}
	}
			
			 if (option == 5) {//people will dispear
    UFO();// call UFO
    moon();//three moons
    road();//highway
		//I do not want any car appear on the highway though I consider this option for a while, because I think it will make this scene too complicated and
		//it does not match what I want to convey
    drop();//the light beam from UFO
  }

  //other abnormal scene
  if (option == 1) {
		UFO();
    balls1();
    moon();
    road();
      for (let i = 0; i < peopleArray.length; i++) {
      peopleArray [i]. display ();
      peopleArray [i]. move ();
    }
    myPerson1.display();
    myPerson1.move();
    drop();//the light beam from UFO
  }

  if (option == 2) {
    UFO();// call UFO
    balls1();
    road();//highway
     for (let i = 0; i < peopleArray.length; i++) {
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
     for (let i = 0; i < peopleArray.length; i++) {
      peopleArray [i]. display ();
      peopleArray [i]. move ();
    }
    myPerson1.display();
    myPerson1.move();
    drop();//the light beam from UFO
  }

  if (option == 4) {
    UFO();// call UFO
    moon();//three moons
    road();//highway
    balls2();
      for (let i = 0; i < peopleArray.length; i++) {
      peopleArray [i]. display ();
      peopleArray [i]. move ();
    }
    myPerson1.display();
    myPerson1.move();
  }
}
//every option have something slightly different to invode audience thinking;
//what I want to do is using some changes to show something audience do not expected 
//so that this feelings audience feel when they this unexpected changes will make them think this project is misterious
//I do not know whether this idea is good or not, but I have asked my classmates about this idea I have, some of them agree with me,
//some of them not, but I still think this is what I want to do.
//I did not know how to use the array in the class, but I asked my classmate later and they helped me and taught my a lot;
//I still think I can maybe combine some of my code since I have call same functions a lot of time, but I am not sure how to do that.


function keyPressed() {
  option++;
  if (option > 4) {
    option = 1;
    //change to other pattern by pressing key
  }
}
