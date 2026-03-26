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
let ballSpin;
let gravity;
let paddleVelocity;
let paddleAcceleration;
let maxPaddleSpeed;
let lineX;
let lineY;
let lineWidth;
let lineHeight;
let score;
let text1;


function setup() {
    createCanvas(600,450);
    ballX=width/2;
    ballY=height/2;
    ballSpeedX=15;
    ballSpeedY=-15;
    ballRadius=15;
    paddleX=width/2;
    paddleY=height-30;
    paddleSpeed=15;
    paddleWidth=150;
    paddleHeight=15;
    ballSpin=0;
    gravity=0.3;
    paddleVelocity=0;
    paddleAcceleration=0.8;
    maxPaddleSpeed=25;
    lineX=0;
    lineY=46;
    lineWidth=width;
    lineHeight=8;
}

function draw() {
    background(0);

    if (lineX<ballX &&
        ballX<lineWidth+lineX&&
        lineY<ballY &&
        ballY<lineHeight+lineY){
            ballSpeedY=-ballSpeedY;
    }
    //重力効果を加える
    ballSpeedY=ballSpeedY+gravity;

    // スピンによるカーブ効果
    ballSpeedX=ballSpeedX+ballSpin*0.05;
    // スピンを徐々に減らす（空気抵抗）
    ballSpin=ballSpin*0.98;

    ballX=ballX+ballSpeedX;
    ballY=ballY+ballSpeedY;

    if (keyIsDown(LEFT_ARROW)){
        if(paddleVelocity>-maxPaddleSpeed){
            paddleVelocity=paddleVelocity-paddleAcceleration;
        }
    }else if (keyIsDown(RIGHT_ARROW)){
        if(paddleVelocity<maxPaddleSpeed){
            paddleVelocity=paddleVelocity+paddleAcceleration;
        }
    }else{
        // キーが押されていない場合は減速
        paddleVelocity=paddleVelocity*0.85;
    }
    
    paddleX=paddleX+paddleVelocity;
    
    // パドルが画面外に出ないようにする
    if(paddleX<0){
        paddleX=0;
    }
    if(paddleX+paddleWidth>width){
        paddleX=width-paddleWidth;
    }

    if(paddleX-ballRadius<ballX &&
        ballX<paddleX+paddleWidth+ballRadius &&
        paddleY-ballRadius<ballY &&
        ballY<paddleY+paddleHeight+ballRadius){
            ballSpeedY=-ballSpeedY;
            // パドルの位置によってスピンを付与
            let paddleCenter=paddleX+paddleWidth/2;
            ballSpin=(ballX-paddleCenter)/30;
        }

    if (width<ballX+ballRadius) {
        ballSpeedX=-ballSpeedX;
        ballSpin=ballSpin*-0.8;
    }

    if (ballX-ballRadius<0) {
        ballSpeedX=-ballSpeedX;
        ballSpin=ballSpin*-0.8;
    }

    if (ballY-ballRadius<0) {
        ballSpeedY=-ballSpeedY;
        ballSpin=ballSpin*0.9;
    }

    if (ballY+ballRadius>height){
        ballSpeedX=0;
        ballSpeedY=0;
        ballSpin=0;
        fill("white");
        textAlign(CENTER);
        text("GAME OVER",width/2,height/2);
    }

    circle(ballX,ballY,ballRadius*2);
    rect(paddleX,paddleY,paddleWidth,paddleHeight);
}




