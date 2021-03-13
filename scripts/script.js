function roll() {
  // Animation
  document.getElementById("scaler").className = "scale";
  document.getElementById("spinner").className = "spin";
  setTimeout(() => { document.getElementById("scaler").classList.remove("scale"); }, 500);
  setTimeout(() => { document.getElementById("spinner").classList.remove("spin"); }, 500);
	
  // Disc- and throw type
  var discType = [
		"overstable",
		"stable",
		"understable",
		"putter",
		"mid-range",
		"fairway driver",
		"distance driver",
		"thrower's choice",
    "opponent's choice"
  ];
	var throwType = [
		"hyzer",
		"roller",
		"anhyzer",
		"tomahawk",
		"forehand",
		"thrower's choice",
    "opponent's choice"
  ];

  // Randomly select types
	document.getElementById("disc").innerHTML = "Disc: " + discType[Math.floor(Math.random() * discType.length)];
	document.getElementById("throw").innerHTML = "Throw: " + throwType[Math.floor(Math.random() * throwType.length)];
}