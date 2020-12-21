const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//creating variables
var engine, world;
var ball, polygonImg, slingshot;
var platform1, platform2, platform3;
var gameState = "onSling";
var text;

//First Tower Blocks:

//level one
var block1, block2, block3, block4, block5, block6;

//level two
var block7, block8, block9, block10, block11;

//level three
var block12, block13, block14, block15;

//level four
var block16, block17, block18;

//level five
var block19, block20;

//level six
var block21;


//Second Tower Blocks:

//level one
var block22, block23, block24, block25, block26, block27;

//level two
var block28, block29, block30, block31, block32;

//level three
var block33, block34, block35, block36;

//level four
var block37, block38, block39;

//level five
var block40, block41;

//level six
var block42;


//Third Tower Blocks:

//level one
var block43, block44, block45, block46, block47, block48;

//level two
var block49, block50, block51, block52, block53;

//level three
var block54, block55, block56, block57;

//level four
var block58, block59, block60;

//level five
var block61, block62;

//level six
var block63;

function preload(){
  polygonImg = loadImage("polygon.png");
}


function setup() {
  createCanvas(1600, 820);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  platform1 = new Ground(705, 470, 300, 20);
  platform2 = new Ground(1165, 300, 300, 20);
  platform3 = new Ground(1165, 750, 300, 20);

  //polygon = new Polygon(100, 200, 20);

  //Blocks For Tower 1:
  block1 = new Block1(615, 450, 40, 40);
  block2 = new Block1(645, 450, 40, 40);
  block3 = new Block1(685, 450, 40, 40);
  block4 = new Block1(725, 450, 40, 40);
  block5 = new Block1(765, 450, 40, 40);
  block6 = new Block1(805, 450, 40, 40);

  block7 = new Block2(625, 425, 40, 40);
  block8 = new Block2(665, 425, 40, 40);
  block9 = new Block2(705, 425, 40, 40);
  block10 = new Block2(745, 425, 40, 40);
  block11 = new Block2(785, 425, 40, 40);

  block12 = new Block3(645, 380, 40, 40);
  block13 = new Block3(685, 380, 40, 40);
  block14 = new Block3(725, 380, 40, 40);
  block15 = new Block3(765, 380, 40, 40);

  block16 = new Block4(665, 345, 40, 40);
  block17 = new Block4(705, 345, 40, 40);
  block18 = new Block4(745, 345, 40, 40);

  block19 = new Block5(685, 305, 40, 40);
  block20 = new Block5(725, 305, 40, 40);

  block21 = new Block6(705, 270, 40, 40);


  //Second Tower

  block22 = new Block1(1185, 280, 40, 40);
  block23 = new Block1(1145, 280, 40, 40);
  block24 = new Block1(1225, 280, 40, 40);
  block25 = new Block1(1105, 280, 40, 40);
  block26 = new Block1(1265, 280, 40, 40);
  block27 = new Block1(1075, 280, 40, 40);

  block28 = new Block2(1165, 250, 40, 40);
  block29 = new Block2(1205, 250, 40, 40);
  block30 = new Block2(1125, 250, 40, 40);
  block31 = new Block2(1235, 250, 40, 40);
  block32 = new Block2(1085, 250, 40, 40);

  block33 = new Block3(1185, 210, 40, 40);
  block34 = new Block3(1145, 210, 40, 40);
  block35 = new Block3(1225, 210, 40, 40);
  block36 = new Block3(1105, 210, 40, 40);

  block37 = new Block4(1165, 175, 40, 40);
  block38 = new Block4(1205, 175, 40, 40);
  block39 = new Block4(1125, 175, 40, 40);

  block40 = new Block5(1185, 135, 40, 40);
  block41 = new Block5(1145, 135, 40, 40);

  block42 = new Block6(1165, 100, 40, 40);


  //Third Tower

  block43 = new Block1(1185, 730, 40, 40);
  block44 = new Block1(1145, 730, 40, 40);
  block45 = new Block1(1225, 730, 40, 40);
  block46 = new Block1(1105, 730, 40, 40);
  block47 = new Block1(1265, 730, 40, 40);
  block48 = new Block1(1075, 730, 40, 40);

  block49 = new Block2(1165, 700, 40, 40);
  block50 = new Block2(1205, 700, 40, 40);
  block51 = new Block2(1125, 700, 40, 40);
  block52 = new Block2(1235, 700, 40, 40);
  block53 = new Block2(1085, 700, 40, 40);

  block54 = new Block3(1185, 660, 40, 40);
  block55 = new Block3(1145, 660, 40, 40);
  block56 = new Block3(1225, 660, 40, 40);
  block57 = new Block3(1105, 660, 40, 40);

  block58 = new Block4(1165, 625, 40, 40);
  block59 = new Block4(1205, 625, 40, 40);
  block60 = new Block4(1125, 625, 40, 40);

  block61 = new Block5(1185, 585, 40, 40);
  block62 = new Block5(1145, 585, 40, 40);

  block63 = new Block6(1165, 550, 40, 40);


  ball = Bodies.circle(100, 200, 20);
  World.add(world, ball);

  slingshot = new SlingShot(this.ball, {x: 100, y: 350});
}



function draw() {
  background(0);  
  //Engine.update(engine);

  fill("white");
  textSize(20);
  text("Click and drag the polygon and launch it to knock down the towers!", 20, 60);
  text("Press the SPACEBAR to try again!", 20, 90);

 
	platform1.display();
	platform2.display();
  platform3.display();
  
  //polygon.display();
  
  //First Tower:
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();

	block7.display();
	block8.display();
	block9.display();
	block10.display();
	block11.display();

	block12.display();
	block13.display();
	block14.display();
	block15.display();

	block16.display();
	block17.display();
	block18.display();

	block19.display();
	block20.display();

  block21.display();
  

  //Second Tower:
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();

  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();

  block33.display();
  block34.display();
  block35.display();
  block36.display();

  block37.display();
  block38.display();
  block39.display();

  block40.display();
  block41.display();

  block42.display();


  //Third Tower:
  block43.display();
  block44.display();
  block45.display();
  block46.display();
  block47.display();
  block48.display();

  block49.display();
  block50.display();
  block51.display();
  block52.display();
  block53.display();

  block54.display();
  block55.display();
  block56.display();
  block57.display();

  block58.display();
  block59.display();
  block60.display();

  block61.display();
  block62.display();

  block63.display();

  //console.log(block60);
  imageMode(CENTER);
  image(polygonImg, ball.position.x, ball.position.y, 40, 40);
  slingshot.display();
	drawSprites();
	
}


function mouseDragged(){
  if (gameState!== "launched"){
    Matter.Body.setPosition(this.ball, {x: mouseX, y: mouseY});
  }
}

function mouseReleased(){
  if (gameState === "onSling"){
    slingshot.fly();
    gameState = "launched";
  }
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(this.ball, {x: 100, y: 350});
    slingshot.attach(this.ball);
    gameState = "onSling";
  }
}