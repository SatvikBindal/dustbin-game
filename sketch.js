
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ball2,ball3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundSprite=createSprite(width/2, height-35, width,50);
	groundSprite.shapeColor=color(255)
	
   ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);


	ball1= new Ball(325,320,20,200);
    ball2= new Ball(580,500,20,200);
	ball3= new Ball(475,560,250,20); 
	
	paper=new Paper(100,300,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Matter.Bodies.circle()

ball1.display();
ball2.display();
ball3.display();
paper.display();
  
  drawSprites();
 
}

function keyPressed(){

	if (keyCode===UP_ARROW ){
		Matter.Body.applyForce(paper,paper,{x:475,y:560})
	}
}


