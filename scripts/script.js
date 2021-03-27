var enabledDiscs = [];
var enabledThrows = [];

function roll() {
  // Animation
  document.getElementById("scaler").className = "scale";
  document.getElementById("spinner").className = "spin";
  setTimeout(() => { document.getElementById("scaler").classList.remove("scale"); }, 500);
  setTimeout(() => { document.getElementById("spinner").classList.remove("spin"); }, 500);

  // Randomly select types
  document.getElementById("disc").innerHTML = "Disc: " + enabledDiscs[Math.floor(Math.random() * enabledDiscs.length)];
  document.getElementById("throw").innerHTML = "Throw: " + enabledThrows[Math.floor(Math.random() * enabledThrows.length)];
}

function play() {

	document.getElementById("discForm").style.display = "none";
	document.getElementById("dice").style.display = "block";

	document.getElementById("enabledDiscs").innerHTML = "Enabled Discs:";
	document.getElementById("enabledThrows").innerHTML = "Enabled Throws:";

	var discs = document.getElementsByClassName("disc");
	for(i = 0; i < discs.length; ++i) {
		if(discs[i].checked) {
			enabledDiscs.push(discs[i].value);
			document.getElementById("enabledDiscs").innerHTML += " " + discs[i].value;
		}
	}

	var types = document.getElementsByClassName("type");
	for(i = 0; i < types.length; ++i) {
		if(types[i].checked) {
			enabledThrows.push(types[i].value);
			document.getElementById("enabledThrows").innerHTML += " " + types[i].value;
		}
	}
}	

	
	