$(document).ready(function(){
    'use strict';
    new WOW().init();
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1500
    });
    $('.nav-link').click(function(){
        $(this).parent().addClass('active');
    });

    $(window).scroll(function () {
        if($(this).scrollTop() >= 200){
            $('.navbar').addClass('fixed-top');
            $('.navbar .navbar-brand img').css('width','45%');
        }
        else{
            $('.navbar').removeClass('fixed-top');
            $('.navbar-nav .nav-item').removeClass('active');
            $('.navbar .navbar-brand img').css('width','unset');
        }
        if($(this).scrollTop() >= $('header').height()){
            $('.navbar-nav .nav-item').removeClass('active');
            $('.nav-item a[href="#about-us"]').parent().addClass('active');
        }
        if($(this).scrollTop() >= ($('header').height() + $('#about-us').height())){
            $('.navbar-nav .nav-item').removeClass('active');
            $('.nav-item a[href="#our-services"]').parent().addClass('active');
        }
        if($(this).scrollTop() >= ($('header').height() + $('#about-us').height() + $('#our-services').height())){
            $('.navbar-nav .nav-item').removeClass('active');
            $('.nav-item a[href="#our-branches"]').parent().addClass('active');
        }
        if($(this).scrollTop() >= ($('header').height() + $('#about-us').height() + $('#our-services').height() + $('#our-branches').height())){
            $('.navbar-nav .nav-item').removeClass('active');
            $('.nav-item a[href="#our-offers"]').parent().addClass('active');
        }
    });

});