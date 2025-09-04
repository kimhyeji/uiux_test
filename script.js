let sliderBoxIndex = 0;

setInterval(function() {
	$('.slider-box').attr('data-index', ++sliderBoxIndex % 3);
	console.log( ++sliderBoxIndex % 3)
}, 3000);