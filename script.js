$(function() {

  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });


    $('.slider').slick({
      slidesToShow: 4,
      responsive: [{
        breakpoint: 750,  //ブレイクポイントを指定
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '25%',
          autoplay:false,
          waitForAnimate: false,
          prevArrow: '<button class="slide-arrow prev-arrow"></button>',
          nextArrow: '<button class="slide-arrow next-arrow"></button>'
    }
  }]
  });
});
