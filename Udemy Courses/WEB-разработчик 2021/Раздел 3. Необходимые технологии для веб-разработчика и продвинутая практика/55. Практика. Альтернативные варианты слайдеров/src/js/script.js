// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/chevron-left-solid.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/slider/chevron-right-solid.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', function() {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function() {
    slider.goTo('next');
});