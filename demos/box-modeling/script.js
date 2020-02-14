window.onload = function() {
	var blocksWrapper = document.querySelector('#blocks'),
			divs = blocksWrapper.querySelectorAll('div'),
			randomizer = document.querySelector('#randomizer');

	randomizer.onclick = function() {
		divs.forEach(function(div) {
			var int = Math.floor(Math.random() * divs.length);
		  blocksWrapper.appendChild(divs[int]);
		});
	}
}