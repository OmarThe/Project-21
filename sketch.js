var canvas;
var music;
var ground1, ground2, ground3, ground4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,800);

    //create 4 different surfaces'
    ground1 = createSprite(200,750,175,50)
    ground1.shapeColor= "purple"

    ground2 = createSprite(400,750,175,50)
    ground2.shapeColor= "magenta"

    ground3 = createSprite(600,750,175,50)
    ground3.shapeColor= "cyan"

    ground4 = createSprite(800,750,175,50)
    ground4.shapeColor= "blue"
    
    //create box sprite and give velocity
    box =  createSprite(random(20,750),700,70,70)
    box.shapeColor = "white"
    box.velocityX = 5

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites

    //add condition to check if box touching surface and make it box
    if (ground1.isTouching(box)){
        box.shapeColor = "purple"
    }
    if (ground2.isTouching(box)){
        box.shapeColor = "magenta"
    }
    if (ground3.isTouching(box)){
        box.shapeColor = "cyan"
    }
    if (ground4.isTouching(box)){
        box.shapeColor = "blue"
    }
   
    drawSprites();
}
