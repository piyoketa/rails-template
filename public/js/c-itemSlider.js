
jQuery(document).ready(function($){

  if (!$('.bxSlider').length) {
    var slider2 = $('.bxSlider2').bxSlider({
      infiniteLoop: false,
      controls: false,
      pager: false,
      slideMargin: 10,
      maxSlides: 5,
      minSlides: 1,
      slideWidth: 183,
      moveSlide: 1,
      touchEnabled: true,
      oneToOneTouch: true
    });

    function sliderSetting(){
      var width = $(window).width();

      //SP時のみslideを行う
      if(width <= 967){
        slider2.reloadSlider();
      }
      else {
        slider2.destroySlider();
      }
    }
  }
  else if (!$('.bxSlider2').length) {
    var slider = $('.bxSlider').bxSlider({
      infiniteLoop: false,
      controls: false,
      pager: false,
      slideMargin: 10,
      maxSlides: 5,
      minSlides: 1,
      slideWidth: 183,
      moveSlide: 1,
      touchEnabled: true,
      oneToOneTouch: true
    });

    function sliderSetting(){
      var width = $(window).width();

      //SP時のみslideを行う
      if(width <= 967){
        slider.reloadSlider();
      }
      else {
        slider.destroySlider();
      }
    }
  }

  else {
    var slider = $('.bxSlider').bxSlider({
      infiniteLoop: false,
      controls: false,
      pager: false,
      slideMargin: 10,
      maxSlides: 5,
      minSlides: 1,
      slideWidth: 183,
      moveSlide: 1,
      touchEnabled: true,
      oneToOneTouch: true
    });
    var slider2 = $('.bxSlider2').bxSlider({
      infiniteLoop: false,
      controls: false,
      pager: false,
      slideMargin: 10,
      maxSlides: 5,
      minSlides: 1,
      slideWidth: 183,
      moveSlide: 1,
      touchEnabled: true,
      oneToOneTouch: true
    });

    function sliderSetting(){
      var width = $(window).width();

      //SP時のみslideを行う
      if(width <= 967){
        slider.reloadSlider();
        slider2.reloadSlider();
      }
      else {
        slider.destroySlider();
        slider2.destroySlider();
      }
    }
  }

  // 初期表示時の実行
  sliderSetting();

  // 画面リサイズ時の実行
  $(window).resize( function() {
    sliderSetting();
  });

});
