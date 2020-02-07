var keys = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39  
};

document.addEventListener("keydown", drawKeyboard);
var frame = document.getElementById("drawing_area");
var paper = frame.getContext("2d");
var x = 150;
var y = 150;

function drawLines(color, xinitial, yinitial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.lineWidth = 5;
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinitial, yinitial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function drawKeyboard(evento){
    var colour = "blue";
    var movement = 1;
    switch(evento.keyCode){
        case keys.DOWN:
            drawLines(colour, x, y, x, y+movement, paper);
            y= y+movement;
        break;
        case keys.UP:
            drawLines(colour, x, y, x, y-movement, paper);
            y = y-movement;
        break;
        case keys.LEFT:
            drawLines(colour, x, y, x-movement, y, paper);
            x = x-movement;
        break;
        case keys.RIGHT:
            drawLines(colour, x, y, x+movement, y, paper);
            x = x+movement;
        break;
        default:
            console.log("Other key");
        break;
    }
}