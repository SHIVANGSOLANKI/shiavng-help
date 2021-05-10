const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var myengine;
function setup()
{
 createCanvas(400,400)
myengine = Engine.create();
myworld = myengine.world;

var bodyoption= {
  restitution:1.5
}

mybody = Bodies.rectangle(200,200,50,50,bodyoption); //create
World.add(myworld,mybody);

var groundoptions= {
  isStatic: true
}

ground= Bodies.rectangle(200,380,400,20,groundoptions)
World.add(myworld,ground);
//console.log(ground)
}
function draw()
{
  background(0);
  Engine.update(myengine);
  rectMode(CENTER)
  rect(mybody.position.x,mybody.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,20)
}
