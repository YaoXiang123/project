var swiper_auto = function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        //speed:3000,一张图片轮播的时间
        autoplay:4000,// 时间毫秒；
        effect:"cube",
        // autoplayDisableOnInteraction:false
    });
    var mySwiper = new Swiper ('.y_Right_Top', {
        direction: 'horizontal',
        loop: true,

        autoplay:3000,// 时间毫秒；
        effect:"fade",
        // autoplayDisableOnInteraction:false

    });
    var mySwiper = new Swiper ('.y_Right_Bottom', {
        direction: 'vertical',
        loop: true,
        //speed:3000,一张图片轮播的时间
        autoplay:3100,// 时间毫秒；
        effect:"flip",
        // slidesPerView : 3,
        spaceBetween : 20,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // autoplayDisableOnInteraction:false
    });
    console.log(1);
}