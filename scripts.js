document.addEventListener("DOMContentLoaded", function() {

	var hash = window.location.hash;
	if(hash) {
		openTab(hash);
		setTimeout(function() {
			window.scrollTo(0, 0);
		},1);
	}

	var tabs = document.querySelectorAll(".tab");
	tabs.forEach(function(tab) {
		tab.onclick = function(e) {
			var hash = this.getAttribute("href");
			openTab(hash);
			return false;
		}
	});

});

var openTab = function(hash) {
	var section = document.querySelector(hash),
			tab = document.querySelector(".tab[href='"+hash+"']"),
			openSection = document.querySelector("section.open"),
			openTab = document.querySelector(".tab.open");
	openTab ? openTab.classList.remove("open") : null;
	openSection ? openSection.classList.remove("open") : null;
	section ? section.classList.add("open") : null;
	tab ? tab.classList.add("open") : null;
	history.pushState(null, null, hash);

}