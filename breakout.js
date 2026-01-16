const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width =448
canvas.height=400

const ballRadious = 4;
let x = canvas.width / 2;
let y = canvas.height -30;

let dx=2;
let dy=-2;

const paddleHeight =10;
const paddleWidth =50;

let paddlex = (canvas.width-paddleWidth) /2;
let paddley = canvas.height - paddleHeight - 10; 

let rightPressed =false;
let leftPressed =false;

let paddlesensivility = 10;

initEvents()
draw()

function draw()
{
    cleanCanvas()
    drawBall()
    drawPaddle()
    drawBricks()

    collissionDetection()
    ballMovement()
    paddleMovement()

    window.requestAnimationFrame(draw)
}

function cleanCanvas()
{
    ctx.clearRect(0,0,canvas.width, canvas.height)
}

function drawBall() {
    ctx.beginPath()
    ctx.arc(x,y,ballRadious,0,Math.PI*2)
    ctx.fillStyle = '#fff'
    ctx.fill()
}

function drawPaddle() {
    ctx.fillStyle ='#09F';
    ctx.fillRect(paddlex,paddley,paddleWidth,paddleHeight);
}

function drawBricks() {

}

function collissionDetection() {
    if(x>canvas.width || x < 0 ) {
        dx=dx*-1;
    }
 if(y>canvas.height || y < 0) {
        dy=dy*-1;
    }

   

}


function initEvents()
{
    document.addEventListener('keydown',KeyDownHandler)
    document.addEventListener('keyup',keyUpHandler)



    function KeyDownHandler (event)
    {
        const {key} = event
        if(key === 'Right' || key === 'ArrowRight')
        {
            rightPressed = true;
        }

        if (key === 'Left' || key === 'ArrowLeft')
        {
            leftPressed = true;
        }



    }

    function keyUpHandler (event)
    {
        const {key} = event
        if(key === 'Right' || key === 'ArrowRight')
        {
            rightPressed = false;
        }

        if (key === 'Left' || key === 'ArrowLeft')
        {
            leftPressed = false;
        }
    }

}


function ballMovement() {
    x+=dx;
    y+=dy;
}


function paddleMovement() {
    if (rightPressed && paddlex < canvas.width-paddleWidth){
        paddlex += paddlesensivility
    }

    else if (leftPressed && paddlex > 0){
        paddlex -= paddlesensivility
    }


}
