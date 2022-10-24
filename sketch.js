var space,Xello,Gem,Monster,Power
var spaceImg,XelloImg,GemImg,MonsterImg,PowerImg
var score=0, loopEnd=0;
var GemG,MonsterG,PowerG


var PLAY=1
var END=0
var gameState=1


function preload(){
spaceImg= loadImage("space.png")
XelloImg= loadImage("Xello.png")
GemImg= loadImage("Gem.png")
MonsterImg= loadImage("Monster.png")
PowerImg= loadImage("Power.png")
GameOver= loadImage("GameOver.png")
}







function setup() {
    createCanvas(windowWidth,windowHeight)

    space = createSprite(windowWidth,windowHeight)
   space.scale=9.4
    space.addImage(spaceImg)

space.velocityY=4

Xello = createSprite(100,750,30,20)
Xello.scale=0.4
Xello.addImage(XelloImg);


GemG=createGroup()
MonsterG=createGroup()
PowerG=createGroup()


}


function draw() {
 
    gameState= PLAY;
 if (gameState===PLAY){
    textSize(40)

    fill("red")
    text("Score: "+ score,width-500,30)
    
    edges= createEdgeSprites()
    Xello.collide(edges)
    
    Xello.x= World.mouseX
    
    if (space.y > height){
        space.y= width/2
    }
    MonsterRow()
    GemRow()
    PowerRow()
    
    if (GemG.isTouching(Xello)) {
        GemG.destroyEach()
        score=score + 10
    }
    else if (PowerG.isTouching(Xello)) {
        PowerG.destroyEach()
        // Power to be able to SHOOT any ENEMY
    }
    
    else if (MonsterG.isTouching(Xello)){
        gameState=END
        Xello.destroy()
        
        var gameOver= createSprite(600,300,30,30);
        gameOver.scale=1.0
        gameOver.addImage(GameOver)
        
       loopEnd =1;
        
    }
    
 }
   
 if(loopEnd == 1){
    GemG.destroyEach();
    PowerG.destroyEach();
    MonsterG.destroyEach();
    
    
    GemG.setVelocityYEach(0);
    PowerG.setVelocityYEach(0);
    MonsterG.setVelocityYEach(0);
 }


 drawSprites()
}

function MonsterRow(){
    if (World.frameCount % 220 == 0) {
        Monster=createSprite(Math.round(random(50, width-50),40, 10, 10));
        Monster.addImage(MonsterImg)
    Monster.scale=0.4;
    Monster.velocityY = 5;
    Monster.lifetime = 200;
    MonsterG.add(Monster);
    }

}

function GemRow(){
    if (World.frameCount % 410 == 0) {
        Gem=createSprite(Math.round(random(50, width-50),40, 10, 10));
        Gem.addImage(GemImg)
    Gem.scale=0.4;
    Gem.velocityY = 5;
    Gem.lifetime = 200;
    GemG.add(Gem);
    }

}

function PowerRow(){
    if (World.frameCount % 530 == 0) {
        Power=createSprite(Math.round(random(50, width-50),40, 10, 10));
        Power.addImage(PowerImg)
    Power.scale=0.4;
    Power.velocityY = 5;
    Power.lifetime = 200;
    PowerG.add(Power);
    }

}
