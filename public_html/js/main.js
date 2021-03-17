$(document).ready(function () {

    function FixedHeader() {
        let userScroll = $(window).scrollTop();
        if (userScroll > 100) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    }

    FixedHeader();
    $(window).scroll(function () {
        FixedHeader();


    });

//hero
    if ($('.hero-slider').length > 0) {
        $('.hero-slider').owlCarousel({
            margin: 0,
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            items: 1
        });
    }

//testimonials

    if ($('.testimonials-slider').length > 0) {
        $('.testimonials-slider').owlCarousel({
            margin: 0,
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            items: 1
        });
    }

//client

    if ($('.client-slider').length > 0) {
        $('.client-slider').owlCarousel({
            margin: 0,
            responsive: {
                0: {
                    items: 2,
                    margin: 30

                },
                576: {
                    items: 3,
                    margin: 30
                },
                768: {
                    items: 4,
                    margin: 40
                },
                992: {
                    items: 6,
                    margin: 40

                }
            }
        });
    }
//animation

    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });
    }



    animation();
    $(window).scroll(function () {
        animation();
    });




});