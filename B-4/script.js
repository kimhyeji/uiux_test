function HeaderMenuInit() {
    $('.menu-box > ul').hover(
        () => {
            $('.top-bar > .con').addClass('active');
        },
        () => {
            $('.top-bar > .con').removeClass('active');
        }
    )
}

HeaderMenuInit();

function SliderInit() {
    let sliderBoxIndex = 0;

setInterval(function() {
	$('.slider-box').attr('data-index', ++sliderBoxIndex % 3);
}, 3000);
}

function PopupInit() {
    $(".notice-content > ul > li:first-child").click(function () {
		$(".popup").addClass("active");
	});

	$(".popup, .close-btn").click(function () {
		$(".popup").removeClass("active");
	});

	$(".popup-content").click(function (e) {
		// e.stopPropagation();
		return false;
	});
}

PopupInit();