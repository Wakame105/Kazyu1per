// クエリを定義
const mediaQuery = window.matchMedia('(max-width: 768px)');

// Slick (メインイメージ)
$('.main-image').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    arrows: false,
    fade: true,
});

$(document).ready(function(){
$('.kankou-slider').slick({
    centerMode: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});
});