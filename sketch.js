
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Tree = new tree(800,650,40,40);
	ground = new Ground(width/2, 675, width, 10 , {isStatic:true});
	stone = new Stone(400,500,60,20);
	mango1 = new Mango(300,400,40,300);
	mango2 = new Mango(300,400,40,300);
	mango3 = new Mango(300,400,40,300);
	mango4 = new Mango(300,400,40,300);
	mango5 = new Mango(300,400,40,300);
	World.add(world, ground);
	
	constrain = new Constrain(boy.body,stone.body,-35*2,320)
                                                                                                                    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  image(boy,100,440,200,300);

  Tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  constrain.display();
  drawSprites();
 
}



