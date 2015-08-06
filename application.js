var canvas = document.getElementById("board");
var drawing = canvas.getContext("2d");
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight -20;

// this is our ball
var pos = {x: 10, y: 10, vx: 10, vy: 10, sx: 10, sy:10};
var pad = {x: canvas.width * 0.85, y: (canvas.height / 4.5) , sx: 20, sy:canvas.height / 5};
var interval;
var dist = canvas.height / 5;




drawing.fillRect(pos.x, pos.y, pos.sx, pos.sy);

function loop(){
    drawing.clearRect(0,0,canvas.width, canvas.height);

    //Adjust our position by velocity of x
    pos.x = pos.x + pos.vx;
    pos.y = pos.y + pos.vy;
    
    //change direction if it hits our paddle
    if(pos.x > pad.x && pos.y > pad.y){
        if(pos.x < (pad.x + pad.sx) && pos.y < (pad.y + pad.sy)) {
            pos.vx = pos.vx * -1;
            
            
        } 
        
    }
    
    
    
    //change direction if it hits a wall
    if(pos.x >= canvas.width -20) { pos.vx = pos.vx * -1; }
    if(pos.y >= canvas.height -20) { pos.vy = pos.vy * -1; }
    if(pos.x <= 0) { pos.vx = pos.vx * -1; }
    if(pos.y <= 0) { pos.vy = pos.vy * -1; }

    //draw paddle
        drawing.fillRect(pad.x, pad.y, pad.sx, pad.sy);
    //draw ball
        drawing.fillRect(pos.x, pos.y, pos.sx, pos.sy);
    
} 
document.onkeydown = function(e){
        if(e.keyCode == 38){
            if(pad.y <= 0) {
            return false;
            }
            pad.y = pad.y - dist;
            return false;
        }  else if (e.keyCode == 40){
            if((pad.y + pad.sy) >=canvas.height) {
            return false;
            }
            pad.y = pad.y + dist;
            return false;
        }
}

interval = setInterval(loop, 5);
 