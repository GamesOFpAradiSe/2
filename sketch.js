
var player, pname,animals
var lifeShow, bg
var gameState = 0
var tm = -10
var cofl = 10
var iv = 255
var bm = 530
function preload(){
 
  weapon = loadImage("img/weapon.png")
  ibg = loadImage("img/ibg.png")
  pb = loadImage("img/play.png")
  ib = loadImage("img/iboard.png")
  licon = loadImage("img/life.png")
}
function setup(){
  createCanvas(1165,530)

animals = new Group();
}

function draw(){
  if(bg)
    background(bg)
    tint(255,iv)
  image(ibg,0,0,width,height)
  iv = iv-5
  if(iv<=0){
    if(tm<=150){
      tm +=5
    }
    if(bm>=height/2-50){
      bm -=5
    }
  }
  if(gameState===0){
    bg = loadImage("img/bg.png")
  
    inp = createInput('').attribute("placeholder", "Enter Your Name");
    inp.position(width/2-50,bm);
    inp.size(100);
    inp.input(pn);
    play =createSprite(width/2,height/2)
    play.addImage(pb)
    play.scale = 0.2
      textFont('Bold')
      textSize(50)
      fill("yellow")
      stroke("red")
      text("Man vs Wild",width/2-150,tm)

      
    
 
if(mousePressedOver(play)||keyIsDown(ENTER)){
  gameState=1
}
     }
  
 if(gameState===1){
  bg = loadImage("img/bg.png")
  /*play.visible=false
  board.visible=false
 inp.hide()*/
  textFont('italic')
  textSize(20)
  fill("yellow")
  stroke("red")
  text(pname,120,25)
  animalcome()
  weaponShow = createSprite(55,55)
weaponShow.addImage(weapon)
weaponShow.scale=0.1
for(var i=120;i<=500;i=i+20){
life = createSprite(i,55)
life.addImage(licon)
life.scale=0.02
}
player = createSprite(width/2-400,height/2)
if(animals.isTouching(player)){
  cofl-=1
}
}if(gameState===2){
animals.destroyEach()
player.visible = false
weapon.visible=false
textFont('italic')
textSize(100)
fill("yellow")
stroke("red")
text("THE END",width/2,height/2)
}
    drawSprites();
}

function animalcome() {
  if(frameCount % 60 === 0) {
    var animal = createSprite(width+50,random(height/2-50,height/2+50),20,30);
    animal.setCollider('circle',0,0,45)
    // obstacle.debug = true
  animal.shapeColor="white"
   animal.velocityX = -5
    
    //generate random obstacles
  /*  var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      default: break;
    }*/
    
    //assign scale and lifetime to the obstacle           
   
    animal.lifetime = 300;
   animal.depth = player.depth;
    
    //add each obstacle to the group
   animals.add(animal);
    
  }
}
function pn(){
 pname =  this.value()
}

