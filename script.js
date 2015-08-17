var body = document.querySelector("body");
document.body.style.height = "1000px";



for (var i = 0; i <= 40; i++){

		var box = document.createElement("div");

		box.style.width = "11.1%";
		box.style.height = "11.1%";
		box.style.float = "left";
		box.style.backgroundColor = randomColors();

		// box.style.backgroundColor = "black";
		// if (i % 2 === 0){
		// 	box.style.backgroundColor = "red";
		// }

		body.appendChild(box);

}

function randomColors(){
	var red = Math.round(Math.random() * 255);
	var green = Math.round(Math.random() * 255);
	var blue = Math.round(Math.random() * 255);
	return "rgb("+red+","+green+","+blue+")";

}


