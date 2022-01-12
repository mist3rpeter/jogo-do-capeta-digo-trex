 
var trex ,trex_running;                    
var edges;
var solo,solo_ground;
var solo2
var claudia
var c1, c2, c3, c4, c5, c6
var estadoRJ = 'JOGAR'
var simvem
var cirila
var x3
var nome
var pdg
var jesus
var pascoa
var p =0
var forro
var rock
var samb4
var pdc= 0
function preload(){ // funç~;ao que carregar todas as imagens e animações
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
solo_ground = loadImage('ground2.png')
claudia= loadImage('cloud.png')
c1= loadImage('obstacle1.png')
c2= loadImage('obstacle2.png')
c3= loadImage('obstacle3.png')
c4= loadImage('obstacle4.png')
c5= loadImage('obstacle5.png')
c6= loadImage('obstacle6.png')
x3= loadAnimation('trex_collided.png')
pdg= loadImage('gameOver.png')
pascoa= loadImage('restart.png')
forro= loadSound('jump.mp3')
rock= loadSound('die.mp3')
samb4= loadSound('checkPoint.mp3')

}


function setup(){ // todas as configuraçoes dos objetos
  createCanvas(windowWidth,windowHeigth)
  
  simvem= new Group()
  cirila= new Group()

  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.addAnimation("died",x3)
  trex.scale = 0.5;  

  edges = createEdgeSprites();  
 
  solo = createSprite(300,190,600,20);
  solo.addImage(solo_ground)

  solo2 = createSprite(300, 200 , 600, 10 )
  solo2.visible=false

  nome= createSprite(width/2,60,10,10)
  nome.addImage(pdg)
  nome.visible=false

  jesus= createSprite(width/2,120,10,10)
  jesus.addImage(pascoa)
  jesus.visible=false
}

function draw(){

  background("white");

text('pontuação= ' + p,width-100, 20 )

if(estadoRJ=== 'JOGAR'){

  claudio();
plural();

p= p+ Math.round(frameCount/ 300)

if(p% 100=== 0 &&p>0){
samb4.play()
pdc++

}
  solo.velocityX = -(5 +pdc)
if(solo.x < 0){
  solo.x = 300
}
  if (touches.length > 0 || keyDown("space") && trex.y > 160.5){
    trex.velocityY = -12;
   forro.play()
   touches= []
  }
  trex.velocityY = trex.velocityY + 0.5; // gravidade

  if (trex.isTouching(cirila)){
estadoRJ= 'encerrar'
rock.play()
  }
}
else if(estadoRJ=== 'encerrar'){
  solo.velocityX = 0
 cirila.setVelocityXEach(0)
 simvem.setVelocityXEach(0)
cirila.setLifetimeEach(-1)
simvem.setLifetimeEach(-1)
trex.velocityY= 0
trex.changeAnimation("died",x3)
nome.visible=true
jesus.visible=true
// reset universal MADE IN HEAVEN
if(mousePressedOver(jesus)){
estadoRJ ='JOGAR'
cirila.destroyEach()
simvem.destroyEach()
nome.visible=false
jesus.visible=false
trex.changeAnimation("running",trex_running)
p=0
frameCount=0
pdc=0  
}


}
   

  trex.collide(solo2)


  drawSprites();

}

function claudio(){
  if(frameCount%60 === 0){
    var naovem= createSprite(width,40,100,20)
naovem.velocityX= -6
naovem.addImage(claudia)
naovem.y= Math.round(random(30,150))
naovem.depth= trex.depth
trex.depth= trex.depth+1
simvem.add(naovem) 
  }
}

function plural(){
  if(frameCount%60 === 0){
var cirilo= createSprite(width,173,20,38)
cirilo.velocityX= -(5+ pdc)
cirilo.scale=0.7
cirila.add(cirilo)
var mexico= Math.round(random(1,6))
switch(mexico){
case 1: cirilo.addImage(c1)
break;

case 2: cirilo.addImage(c2)
break;

case 3: cirilo.addImage(c3)
break;

case 4: cirilo.addImage(c5)
break;

case 5: cirilo.addImage(c4)
break;

case 6: cirilo.addImage(c6)
break;

}
  }

}