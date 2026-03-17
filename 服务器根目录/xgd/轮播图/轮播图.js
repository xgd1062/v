let swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    // 如果需要分页器
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,      // 图片多时，小圆点少一点
        clickable: true,      //小圆点点击切换
    },
    // 如果需要前进后退按钮
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

    // 自动轮播
    autoplay: true,
    // 无限循环
    loop: true,
});
