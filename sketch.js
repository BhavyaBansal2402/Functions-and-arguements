var fixedRect, movingRect;
var edges;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
edges=createEdgeSprites();
movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges);

  bounceOff(movingRect, fixedRect);

  drawSprites();
}

