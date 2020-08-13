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

//blured scroll
var video = document.getElementById('container');

document.addEventListener('scroll', () => {
		var content = document.getElementById('content');
		var blur = document.documentElement.scrollTop/70 || document.body.scrollTop/70;
		video.style.filter = `blur(${blur}px)`;
});

video.className += 'fade-out';

window.onload = function() {
	video.classList.remove('fade-out');
}

//scroll on click
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
