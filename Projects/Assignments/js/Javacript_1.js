


function Hello_World_Function(){
var A = document.getElementsByClassName("Click");
A[0].innerHTML = "This is the new text";
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 300, 0);
grd.addColorStop(0, "darkorange");
grd.addColorStop(1, "black");

ctx.fillStyle = grd;
ctx.fillRect(-1, 0, 400, 400);