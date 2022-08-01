const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
//creating required variables
var ground;
var rope;
var fruit;
var fruit_con;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  //creating object from the class
  ground = new Ground(200,680,600,20);
  rope= new Rope(6,{x:245,y:30})

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
  var fruit_options = {
    density:0.001
  }
  fruit= Bodies.circle(300,300,15,fruit_options)
  //attaching/linking the rope and fruit
  Matter.Composite.add(rope.body,fruit)

  fruit_con= new Link(rope,fruit)



}


function draw() 
{
  background(51);
  //displaying the ground and rope
  ground.show();
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,15,15)
  Engine.update(engine);
  

 
   
}
