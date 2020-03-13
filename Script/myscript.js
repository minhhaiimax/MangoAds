$(document).ready(function(){ 
    // alert("Looking forward to working together");
    $(".readmore").click(function(){
        alert("Updating");
    });

    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed: 3000,
        dots: false,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                },
            },
        ],
    });
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 30) {
        $('.header-menu').addClass('fixed');
    } else {
        $('.header-menu').removeClass('fixed');
    }
});