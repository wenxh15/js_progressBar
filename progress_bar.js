function barProgress() {
	let element = document.getElementById("progress");
	let width = 0;
	let progress = setInterval(frame, 10);
	function frame() {
		if (width >= 100) {
			clearInterval(progress);
		} else {
			width++;
			element.style.width = width + '%';
			element.innerHTML = width + '%';
		}
	}
}