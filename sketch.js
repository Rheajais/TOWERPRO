const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block20,block11,block12,block13,block14,block15,block16,block17,
block18,block19,block20,block21,block22,block23,block24,block25,ground,stand1,stand2,polygon;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,1400);
    engine = Engine.create();
    world = engine.world;
    stand1=new Ground(900,290,170,20);
    stand1.shapeColor="brown";
    stand2=new Ground(640,500,210,20);
    stand2.shapeColor="brown";

    block8=new BlueBlock(300,300,30,40);
    //block8.shapeColor="blue";
    block1=new BlueBlock(550,470,30,40);
    //block1.shapeColor="blue";
    block2=new BlueBlock(580,470,30,40);
    //block1.shapeColor="blue";
    block3=new BlueBlock(610,470,30,40);
   // block1.shapeColor="blue";
    block4=new BlueBlock(640,470,30,40);
  //  block1.shapeColor="blue";
    block5=new BlueBlock(670,470,30,40);
//    block1.shapeColor="blue";
    block6=new BlueBlock(700,470,30,40);
  //  block1.shapeColor="blue";
    block7=new BlueBlock(730,470,30,40);
    //block1.shapeColor="blue";
    block9=new PinkBlock(590,430,30,40);
    block9.shapeColor="pink";

    block10=new PinkBlock(620,430,30,40);

    block11=new PinkBlock(560,430,30,40);

    block12=new PinkBlock(650,430,30,40);

    block13=new PinkBlock(680,430,30,40);

    block14=new PinkBlock(710,430,30,40);

    block15=new YellowBlock(740,310,30,40);
}

function draw(){
    Engine.update(engine);
background(0);
stand1.display();
block8.display();
block9.display();
block7.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
//block16.display();
//block17.display();
//block18.display();
//block19.display();
//block20.display();
//block21.display();
//block22.display();
//block23.display();
//block25.display();
stand2.display();

    drawSprites();
}
