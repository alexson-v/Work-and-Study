$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});