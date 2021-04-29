var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  //grasses where player rest
  for(var i ;i<6;i++)
 {
   var bottomGrass1= createSprite(683,height-50-(i*400),width,grassHeight)
   if (1%2===0)//adding road
   {
     var road=createSprite(683,height-50-(i*400)-grassHeight,width,300,)
     road.shapeColor="black";
    }
    bottomGrass1.shapeColor="green";
 }
 //to create cars 
 for(var i=0;i<40;i++){
   cars = new Cars(2)
   carGroup1.add(cars.spt);
 }  

 //create logs
 for(var i=0;i<40;i++){
  log= new log(-2)
  logGroup1.add(log.spt);
}  

}

function draw() {
  background("skyblue");
 
 //making the car re-appear
 for(i-1;i<carGroup1.length;1++){
   if(carGroup1[i].x>width){
     carGroup1[i].x=0;
   }
   if(carGroup1[i].x<0){
     carGroup1[i].x=width;
   }
 }

 //making log re-appear
 for(i-1;i<logGroup1.length;1++){
 if(logGroup1[i].x<0){
    logGroup1[i].x=width;
  }
}
  drawSprites();
}

