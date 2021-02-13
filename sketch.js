
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var backgroundImg;
var girl;
var tracker;

var bg = "unnamed.jpg";


function preload() {
    getBackgroundImg();
  
}

function setup(){

    var canvas = createCanvas(1800,900);
    engine = Engine.create();
    world = engine.world;
tracker= createSprite(90,350,50,50)
   girl=new Girl(200,50)

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    tracker.x = mouseX;
    tracker.y = mouseY;
    girl.velocityX=4;
    Engine.update(engine);
  girl.display();
  tracker.display();

}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "unnamed.jpg";
    }
    else{
        bg = "26f13628aa34089cae577046023ae3cf.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
    }
    function keyPressed() {
        if (keyCode === LEFT_ARROW) {
          Matter.Body.applyForce(girl.body, girl.body.position,{x:-150,y:0});
         }
         if (keyCode === RIGHT_ARROW) {
            Matter.Body.applyForce(girl.body, girl.body.position,{x:100,y:0});
           }
           if (keyCode === UP_ARROW) {
            Matter.Body.applyForce(girl.body, girl.body.position,{x:0,y:-100});
           }
           if (keyCode === LEFT_ARROW) {
            Matter.Body.applyForce(girl.body, girl.body.position,{x:0,y:100});
           }
       }
