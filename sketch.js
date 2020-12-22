
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1;


function setup() {
	createCanvas(1600,800);
	engine = Engine.create();
	world = engine.world;

	bobObject1 = new bob(100,500);
  bobObject2 = new bob(150,500);
  bobObject3 = new bob(200,500);
  bobObject4 = new bob(250,500);
  bobObject5 = new bob(300,500);
  
  roof = new Roof (200,150,400,50);
  rope1 = new Rope(bobObject1.body,roof.body);
  rope2 = new Rope(bobObject2.body,roof.body);
  rope3 = new Rope(bobObject3.body,roof.body);
  rope4 = new Rope(bobObject4.body,roof.body);
  rope5 = new Rope(bobObject5.body,roof.body);
	Engine.run(engine);
                                                               
}


function draw() {
  
  background(255);
  Engine.update(engine);
  strokeWeight(4);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

}
function keyPressed() {

  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:100});

  }
 
  }


 



