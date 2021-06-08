"use strict";

$document.ready(function () {

    //Swiper
    var url = window.location.href;
    var start = url.substr(url.indexOf("#") + 1)

    var informationSwiper = new Swiper('.swiper-banner', {
        loop: true,
        watchSlidesVisibility: true,
        speed: 5000,
        effect: 'fade',
        spaceBetween: 0,
        centeredSlides: true,
        initialSlide: -1,
        fadeEffect: {
            crossFade: true
        },
        speed: 2000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: false,
        },

        on: {
            init: function () {
                $('.swiper-slide-visible .animate-text').show();
                $('.swiper-slide-visible .animate-text').animate_Text();
            },
        },

    })

    informationSwiper.on("transitionStart", function () {
        $('.swiper-slide-visible .animate-text').show();
        $('.swiper-slide-visible .animate-text').animate_Text();
        new WOW().init();
    });

    informationSwiper.slideTo(getSlideIndex(start));

    function getSlideIndex(ID) {
        var index = 0;
        $.each($('.swiper-slide'), function (i, item) {
            if ($(item).attr("id") == ID) {
                index = i;
                return false;
            }
        });
        return index;
    }

    var clientsSwiper = new Swiper('.swiper-clients', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesVisibility: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 20,
            },
        },

        on: {
            init: function () {
                new WOW().init();
            },
        }
    })
})