var dog, happyDog, database;
var foodS, foodStock;

function preload()
{
	  DogImg = loadImage("images/dogImg.png");
    HappyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(DogImg);
  dog.scale = 0.15;
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){

  if(x<=0){
    x-0;
  }
  else{
    x = x-1;
  }


  database.ref('/').update({
      Food:x
  })
}


function draw() {  
  background("green")
  
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(HappyDogImg);
}


  drawSprites();
  stroke("black"); 
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  


}



