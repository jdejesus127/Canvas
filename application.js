var canvas;

canvas = document.getElementById("board");
var drawing = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawing.fillRect(100, 100, 1000, 1001);


