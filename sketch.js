let ballX;
let ballY;
let ballSpeedX;
let ballSpeedY;
let ballRadius;
let paddleX;
let paddleY;
let paddleSpeed;
let paddleWidth;
let paddleHeight;

function setup() {
    createCanvas(600,400);
    ballX=width/2;
    ballY=height/2;
    ballSpeedX=5;
    ballSpeedY=-5;
    ballRadius=15;
    paddleX=width/2;
    paddleY=height-30;
    paddleSpeed=15;
    paddleWidth=150;
    paddleHeight=15;
}

function draw() {
    background(0);
    ballX=ballX+ballSpeedX;
    ballY=ballY+ballSpeedY;

    if (width<ballX+ballRadius) {
        ballSpeedX=-ballSpeedX;
    }

    if (ballX-ballRadius<0) {
        ballSpeedX=-ballSpeedX;
    }

    if (ballY-ballRadius<0) {
        ballSpeedY=-ballSpeedY;
    }

    if (ballY+ballRadius>height){
        ballSpeedX=0;
        ballSpeedY=0;
        fill("white");
        textAlign(CENTER);
        text("GAME OVER",width/2,height/2);
    }

    circle(ballX,ballY,ballRadius*2);
    rect(paddleX,paddleY,paddleWidth,paddleHeight);
}


