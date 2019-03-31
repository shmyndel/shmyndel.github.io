const body = document.body;
body.style.transitionTimingFunction = "linear";
		
body.addEventListener('mousemove',(e) => {
	var x = e.offsetX;
	var y = e.offsetY;
	body.style.background = `hsl(${x}, ${y}%, 80%)`;
});
