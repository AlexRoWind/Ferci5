var bgStart, bgroomImg;
var gameState = START;
var player;

function preload() {

  bgStart = loadImage("./assets/inicioSolito.png");
  bgroomImg = loadImage("./assets/fondoFerci.png");

  niño_running = loadImage("./assets/Niño.png", "./assets/Niño1.png", "./assets/Niño2.png", "./assets/Niño3.png",
    "./assets/Niño4.png", "./assets/Niño5.png", "./assets/Niño6.png", "./assets/Niño7.png");

  niño_running = loadAnimation("./assets/Niño.png", "./assets/Niño1.png", "./assets/Niño2.png",
    "./assets/Niño3.png", "./assets/Niño4.png", "./assets/Niño5.png", "./assets/Niño6.png", "./assets/Niño7.png");
  niño_collided = loadAnimation("./assets/gameOverFerci.png");

  groundImage = loadImage("./assets/inicioLargo.png");

  points = loadImage("./assets/puntos1.png");
  points = loadImage("./assets/puntos2.png");
  points = loadImage("./assets/puntos3.png");
  points = loadImage("./assets/puntos4.png");

  obstacle = loadImage("./assets/obstaculo.png");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //el inicio

}

function draw() {
  background(bgStart);
  if (gameState === START) {

    start = new Start();
    start.display();
    if (handleMousedPresedOver) {
      gameState = PLAY
    }
  } else if (gameState === PLAY) {
    niño = createSprite(50, 180, 20, 50);
    niño.addAnimation("running", niño_running);
    niño.addAnimation("collided", niño_collided);
    niño.scale = 0.5;
  }
  drawSprites();
}

