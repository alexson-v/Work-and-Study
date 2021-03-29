var btn = document.getElementById('btn');

btn.onclick = function () {
    var text = document.querySelector('p.intro');
    text.classList.add('red');
    var img = document.querySelector ('.desktop');
    img.style.display = 'none';
    document.querySelector('.skill-change').style.marginLeft = "50px";
}

$(function () {
    $(window).scroll(function() {
        $('#learn .section-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.skill-free').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInUp");
            }
        });
    });
});