// クエリを定義
const mediaQuery = window.matchMedia('(max-width: 768px)');

// Smooth Scroll
$(function () {
    $('a[href^="#"]').click(function () {
        const speed = 500;
        let adjust = 0;
        if (mediaQuery.matches) {
            // レスポンシブ時の調整値
            adjust = -84;
        } else {
            // PC表示時の調整値
            adjust = -120;
        }
        const href = $(this).attr('href');
        const target = $(href == '#' || href == '' ? 'html' : href);
        const position = target.offset().top + adjust;
        $('html, body').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

// Slick (メインイメージ)
$('.main-image').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    arrows: false,
    fade: true,
});

$(document).ready(function() {
$('.slider').slick({
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
$('.kankou-slider').slick({
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