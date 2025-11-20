document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.02}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	});
	// Усиленный параллакс только для pic1
	const pic1 = document.querySelector('.pic1');
	if (pic1) {
		const x = (e.clientX - window.innerWidth / 2) * -0.08; // коэффициент больше!
		const y = (e.clientY - window.innerHeight / 2) * 0.04;
		pic1.style.setProperty('--pic1-move-x', `${x}deg`);
		pic1.style.setProperty('--pic1-move-y', `${y}deg`);
	}
});
