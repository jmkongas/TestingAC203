// alert("It's working!");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.moveTo(0,0); //move pen to coordinate 0,0
ctx.lineTo(150,150); //draw a line to this position
ctx.stroke(); //asking the pen to actually draw

//drawing on Canvas 2
var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

ctx2.fillStyle="rgb(128,128,128)";  //this has to be a string
ctx2.fillRect(100,100,100,100);
ctx2.strokeRect(80,80,140,140)
ctx2.clearRect(120,120,60,60)