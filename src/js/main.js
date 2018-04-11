window.onload = function() {
	 wheel = document.getElementById("circle");
     button = document.getElementById("button");
     win = document.getElementById("win");
	
}
var my_timer = function () {
  	win.style.display = "block";
  }
var rando = 1260;


var spin_wheel = function () {

  wheel.style.webkitTransform = "rotate(" + rando + "deg)";
  wheel.style.mozTransform = "rotate(" + rando + "deg)";
  wheel.style.msTransform = "rotate(" + rando + "deg)";
  wheel.style.transform = "rotate(" + rando + "deg)";
  
  setTimeout (my_timer, 10000);  
}
