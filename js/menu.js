const subMenuSwiper = new Swiper('.sub-menu-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    slidesPerView: 'auto',
    spaceBetween: 31,

    // 질문:  이거 1440에서는 전체가 보이는데 뒤에 빈공간이 남아여

    breakpoints: {
        1440: {
            noSwiping: true,
            noSwipingClass: 'sub-menu-swiper',
            allowTouchMove: false,
        },
    },
});
