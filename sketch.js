//declaring physics engine.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//local objects
var engine,world,ground; 
var ball;

function setup() {
  createCanvas(400,400);

 //adding their objects so we could use them in our program.
 engine = Engine.create();
 world = engine.world;
 
 //giving properties to ground object
 var ground_options={
   isStatic : true
 }

 //creating the ground object with Bodies. 
 ground = Bodies.rectangle(200,390,200,20,ground_options);


 //adding ground to World.
 World.add(world,ground);



//creating the ball object
   var ball_options={
       restitution: 1.0
   }  
   
   ball = Bodies.circle(200,100,20,ball_options);


   World.add(world,ball);


}

function draw() {
  background(0);  

  //updating the Engien with local object engine.
  Engine.update(engine);
 
  //display the ground
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);

  //display ball 
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);
 
 
  drawSprites();
}