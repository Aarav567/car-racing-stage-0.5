const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var player1, player2, player3, player4, player5, player6, player7, player8;

function setup(){
    createCanvas(1000,400);

    engine = Engine.create();
    world = engine.world;


    player1 = new Player(100,100,30,20);
    player2 = new Player(100,140,30,20);
    player3 = new Player(100,180,30,20);
    player4 = new Player(100,220,30,20);
    player5 = new Player(100,260,30,20);
    player6 = new Player(100,300,30,20);
    player7 = new Player(100,340,30,20);
    player8 = new Player(100,380,30,20);




}
function draw(){
    background("white");

    
    Engine.update(engine)

   


    fill ("red");




    player1.display();
 /*   player2.display();
    player3.display();
    player4.display();
    player5.display();
    player6.display();
    player7.display();
    player8.display();*/
}

function keyPressed(){
    if(keyCode==DOWN_ARROW)
    {
       Matter.Body.setPosition(player1.body,{x:0,y:4});
    }
}