$(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > $(window).height()) {
      $('.scrolltotop').show();
    } else {
      $('.scrolltotop').hide();
    }
  });
  $('.scrolltotop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 700);
    return false;
  });

  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();

  $(function () {
    $('.link').click(function () {
      $('.popup').fadeIn(400); //показываем всплывающее окно
    });
    $('.popup__closed').click(function () {
      $('.popup').fadeOut(400); //скрываем всплывающее окно
    });
  });

});

$(function () {
  $('.slider-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });



});

