window.onload = function() {
	var divs = document.querySelectorAll(".inline-svg");
	divs.forEach(function(div) {
		var src = div.dataset.src,
				xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				div.innerHTML = xhttp.responseText;
			}
		};
		xhttp.open("GET", src, true);
		xhttp.send();
	});
}