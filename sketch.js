// creating variables
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload()
  {
    // Loading Images
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
  }

function setup() 
  {
    // Creating canvas
    createCanvas(600, 200);
    
    // Creating Trex Sprite
    trex = createSprite(50,180,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    trex.x = 50

    // Creating Ground
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;

    //creating  invisible ground
    invisibleGround = createSprite(200,190,400,10);
    invisibleGround .visible=false;
    
  }

function draw() 
  {
    // Background Creating
    background(220);

    console.log(trex.y);
    
    // Adding velocity to ground
    ground.velocityX = -2 //console.log(ground.x)
    
    // If ground ends again adds the ground
    if (ground.x<0)
      {
        ground.x = ground.width/2;
      }
    
    // If Space key is Pressed Trex will jump
    if(keyDown("space") && (trex.y>=100)) 
      {
        trex.velocityY = -10;

      }
    
      // adding Gravity to Trex
    trex.velocityY = trex.velocityY + 0.8
    
    // Adding collision between ground and Trex
    trex.collide(invisibleGround);
    drawSprites();
  }