$('.c-slider').slick({
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    dots: true,
    dotsClass: 'slide-dots',
    swipe: true,
    centerMode: true,
    centerPadding: '17%',
    variableWidth: true,
    arrows: true,
    prevArrow: '<div class="slide-arrow prev-arrow"><img src="../images/icon/leftArrow.svg"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"><img src="../images/icon/rightArrow.svg"></div>',
});