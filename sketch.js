var catimg,mouseimg,cat,mouse;
var bg,cat1,mouse1,bg1;

function preload() {
    //load the images here
    catimg = loadImage("cat1.png");
    cat2 = loadImage("cat2.png");
    mouseimg = loadImage("mouse1.png");
    mouse2 = loadImage("mouse2.png")
    bg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(500,500);
    cat.addImage(cat);

    mouse=createSprite(300,200);
    mouse.addImage(mouse);
    
    bg1=createSprite(200,200);
    bg1.addImage(bg);
}

function draw() {

    background(bg1);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x < (cat.width-mouse.width)/2)

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keycode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouse2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
  }
  if(keycode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouse2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
  }
}
