const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let box = 20;
let snake = [{x: 10 * box, y: 10 * box}];
let food = { x: Math.floor(Math.random()*20)*box, y: Math.floor(Math.random()*20)*box };
let d;

document.addEventListener("keydown", (e) => {
    if(e.keyCode == 37 && d != "RIGHT") d = "LEFT";
    else if(e.keyCode == 38 && d != "DOWN") d = "UP";
    else if(e.keyCode == 39 && d != "LEFT") d = "RIGHT";
    else if(e.keyCode == 40 && d != "UP") d = "DOWN";
});

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,400,400);
    for(let i=0; i<snake.length; i++){
        ctx.fillStyle = i==0 ? "blue" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    let sx = snake[0].x;
    let sy = snake[0].y;
    if(d=="LEFT") sx -= box;
    if(d=="UP") sy -= box;
    if(d=="RIGHT") sx += box;
    if(d=="DOWN") sy += box;

    if(sx == food.x && sy == food.y) {
        food = { x: Math.floor(Math.random()*20)*box, y: Math.floor(Math.random()*20)*box };
    } else {
        snake.pop();
    }

    let newHead = {x: sx, y: sy};
    if(sx<0 || sx>=400 || sy<0 || sy>=400) { location.reload(); }
    snake.unshift(newHead);
}
setInterval(draw, 100);