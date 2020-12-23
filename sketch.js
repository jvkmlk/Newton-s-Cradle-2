const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;

const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob5,bob4,ground;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	
bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50);

  ground = new Roof(400,100,300,30);
  rope1= new Rope(bob1.body,ground.body,-50*2,0);
  rope2= new Rope(bob2.body,ground.body,-25*2,0);
  rope3= new Rope(bob3.body,ground.body,-0*2,0);
  rope4= new Rope(bob4.body,ground.body,25*2,0);
  rope5= new Rope(bob5.body,ground.body,50*2,0);
  
	Engine.run(engine);
  
}


function draw() {
  background("cyan");
  rectMode(CENTER);

  Engine.update(engine);
  

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  ground.display();
  textSize(30);
  fill ("red");
  text("Drag the first ball to serve",250,50);

 
  

 
  drawSprites ();
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}


