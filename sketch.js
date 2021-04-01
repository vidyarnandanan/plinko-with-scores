const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var divi1=[]




function setup() {
  createCanvas(400,400);
  
	engine = Engine.create();
	world = engine.world;
  for(i=0;i<400;i+50){
    divi1.push(new division(i,200,200,10))
    
      }
  Engine.run(engine);
}

function draw() {
  background(0);  
for(k=0;k<divi1.length;k+50){
  divi1[k].display()
}
  drawSprites();
}