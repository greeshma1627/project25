
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbinObj = new dustbin(1000,550,150,120);
paperObj =  new paper(700,500,70);
groundObject=new ground(width/2,670,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  
  //drawSprites();
  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}


function KeyPressed(){
	if (KeyCode === Up_Arrow){

	   Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
	}
 }
