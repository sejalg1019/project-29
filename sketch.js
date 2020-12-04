const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, polygon_img;

function preload() {
  polygon_img = loadImage("polygon.png");
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,390,1200,20);
  stand1 = new Ground(410,315,280,10);
  stand2 = new Ground(840,185,230,10);

  //level 1
  block1 = new Box(310,275,30,40);
  block2 = new Box(340,275,30,40);
  block3 = new Box(370,275,30,40);
  block4 = new Box(400,275,30,40);
  block5 = new Box(430,275,30,40);
  block6 = new Box(460,275,30,40);
  block7 = new Box(480,275,30,40);

  //level 2
  block8 = new Box(330,235,30,40);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(56,44,44);  
  Engine.update(engine);

  ground.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}



