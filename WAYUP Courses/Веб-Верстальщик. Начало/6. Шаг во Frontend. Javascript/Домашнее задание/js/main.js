$(function () {
    $(window).scroll(function() {
        $('#next .section-title').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__backInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.pros').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__backInRight");
            }
        });
    });
    $(window).scroll(function() {
        $('#ticket .section-title').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__jackInTheBox");
            }
        });
    });
});