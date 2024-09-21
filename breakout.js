const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width =448
canvas.height=400

const ballRadious = 4;
let x = canvas.width / 2;
let y = canvas.height -30;

let dx=2;
let dy=-2;

draw()

function draw()
{
    drawBall()
    drawPaddle()
    drawBricks()

    collissionDetection()
    ballMovement()
    paddleMovement()

    window.requestAnimationFrame(draw)
}

function drawBall() {
    ctx.beginPath()
    ctx.arc(x,y,ballRadious,0,Math.PI*2)
    ctx.fillStyle = '#fff'
    ctx.fill()
}

function drawPaddle() {

}

function drawBricks() {

}

function collissionDetection() {

}
function ballMovement() {

}
function paddleMovement() {

}
