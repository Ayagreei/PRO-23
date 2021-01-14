var helicopterIMG,helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1,wall2,floor;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1=createSprite(460,630,10,80)
	wall1.shapeColor=color("red")
	wall2=createSprite(340,630,10,80)
	wall2.shapeColor=color("red")

	floor=createSprite(width/2, height-35, 110,10);
	floor.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 
	 floor = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, floor);

	Engine.run(engine);
  
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	//walls = new Bath_tub_wall(475,550,50,10);

}


function draw() {
  rectMode(CENTER);
  background("white");
  if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic( packageBody, false);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
    
  }
  drawSprites();
 
}