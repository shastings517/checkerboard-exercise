var body = document.querySelector("body");
// var divContainer = document.createElement("div");
document.body.style.height = "1000px";
var box = document.getElementsByTagName("div");
// divContainer.style.height = "1000px";
// divContainer.style.width = "100%";
// divContainer.style.position = "absolute";
// divContainer.style.top = "0";
// divContainer.style.left = "0";
// divContainer.style.zIndex = "100";

// divContainer.style.background = "linear-gradient(to bottom, rgba(162, 237, 255, 1), rgba(186, 162, 255, 0.5)";
// body.appendChild(divContainer);

function newBox(){

	for (var i = 0; i <= 40; i++){

		var box = document.createElement("div");
		box.style.width = "11.1%";
		box.style.height = "11.1%";
		box.style.float = "left";
		box.style.background = randomColors();
		// box.style.position = "relative";
		// box.style.zIndex = "0";
		
		// box.style.backgroundColor = "black";
		// if (i % 2 === 0){
		// 	box.style.backgroundColor = "red";
		// }

		body.appendChild(box);
	}
}
newBox();

function randomColors(){
	var red = Math.round(Math.random() * 255);
	var green = Math.round(Math.random() * 255);
	var blue = Math.round(Math.random() * 255);
	return "rgb("+red+","+green+","+blue+")";

}


function flashColors(){
	for(var i = 0; i < box.length; i++){
		box[i].style.background = randomColors();
	}
}

var flash = setInterval(flashColors, 500);



