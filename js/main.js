 
// JavaScript Document

$('.main_visual').slick({
    fade:true,
    focusOnSelect:true,
    accessibility:false,
    adaptiveHeight:true,
    autoplay:true,
    autoplaySpeed:3000,
	speed:3000,
    dots:false,
    arrows:false,
});

$('.slide_styles').slick({
accessibility:true,
    fade:false,
    slidesToShow:3,
    slidesToScroll: 3,
    focusOnSelect:true,
    adaptiveHeight:true,
    infinite: true,
    dots:false,
    arrows:true,
});


$(function() {
    $('.swipebox').swipebox();
});

$(function() {
    $('.menu-btn').click(function() {
        $(this).toggleClass('active');
  
        if ($(this).hasClass('active')) {
            $('#sp_nav').addClass('active');
        } else {
            $('#sp_nav').removeClass('active');
        }
    });
});

new WOW().init();

