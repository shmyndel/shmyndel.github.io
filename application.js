const body = document.body;
const blured = document.querySelectorAll('.blur');
const links = document.querySelectorAll('a');

/*body.addEventListener('mousemove',(e) => {
	var x = e.offsetX;
	var y = e.offsetY;
	body.style.background = `hsl(${x}, ${y}%, 80%)`;
});*/

links.forEach(link => link.addEventListener('mouseover',(e) => {
	blured.forEach(e => e.style.filter = 'blur(8px)');
	e.currentTarget.style.filter = 'blur(0px)';
}));

links.forEach(link => link.addEventListener('mouseout',(e) => {
	blured.forEach(e => e.style.filter = 'blur(0px)');
	e.currentTarget.style.filter = 'blur(0px)';
}));

var today = new Date();
var yyyy = today.getFullYear();

document.querySelector('.currentYear').innerText = yyyy;

//
document.addEventListener('scroll', () => {
		var content = document.getElementById('content');
		var video = document.getElementById('wow');
		var blo = document.documentElement.scrollTop/10;
		console.log(blo);
		video.style.filter = `blur(${blo}px)`;
});
