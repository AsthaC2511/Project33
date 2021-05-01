const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var PLAY=1;
var END=2;
var gameState=1;
var divisions=[];
var particles = [];
var plinkos = [];
var particle;
var turn=0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, 270));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(27)
 text("Score : "+score,20,30);
 text(500,20,550);
 text(500,100,550);
 text(500,180,550);
 text(500,260,550);
 text(100,340,550);
 text(100,420,550);
 text(100,500,550);
 text(200,580,550);
 text(200,660,550);
 text(200,740,550);
  Engine.update(engine);
 ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
    
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();

     if(particle.body.position.y>760){
       if(particle.body.position.x<300 && particle.body.position.x>20){
         score=score+500;
         particle=null;
        if(turn>=5){
           gameState=END;
         }
       }
         }
         if(particle!=null){
          particle.display();
         if(particle.body.position.y>760){
        if(particle.body.position.x>300 && particle.body.position.x<580){
          score=score+100;
          particle=null;
         if(turn>=5){
            gameState=END;
          }
        }
          }
        }
        if(particle!=null){
          particle.display();
          if(particle.body.position.y>760){
            if(particle.body.position.x>580 && particle.body.position.x<800){
              score=score+200;
              particle=null;
             if(turn>=5){
                gameState=END;
              }
            }
              }
            }
      
     }

     if(gameState===2){
       turn=0;
       particle=null;
       textSize(80);
       text("GAME OVER",200,300);

     }
      
   
  
}

function mousePressed(){

  
    
    turn++;
    if(turn>=5){
      gamestate=END;
    }
    particle=new Particle(mouseX,10,10,10); 
  

}