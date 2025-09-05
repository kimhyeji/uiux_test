function SliderInit() {
    let sliderBoxIndex = 0;

setInterval(function() {
	$('.slider-box').attr('data-index', ++sliderBoxIndex % 3);
}, 3000);
}

function TabBoxInit() {
    $('.tab-head > ul > li').click(function() {
        let $this = $(this);
        let thisIndex = $this.index();

        let $tabBox = $this.closest('.tab-box');
        let $tabBody = $tabBox.find(' > .tab-body');

        $this.siblings('.active').removeClass('active');
        $this.addClass('active');

        $tabBody.find(' > ul > li.active').removeClass('active');
        $tabBody.find(' > ul > li').eq(thisIndex).addClass('active');
    })
}

TabBoxInit();

function PopupInit() {
    $('.tab-box > .tab-body > ul > li:first-child').click(function() {
        $('.popup').addClass('active');
        console.log("dd")
    });

    $('.popup, .popup-foot .close-btn').click(function() {
        $('.popup').removeClass('active');
    })
}

PopupInit();