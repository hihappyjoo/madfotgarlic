const promotionSlider = new Swiper(".promotion-slider", {
    loop: true,
    autoplay: true,
    speed: 1000,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
});

const lunchSetSlider = new Swiper(".lunch-set-slider", {
    // Optional parameters
    loop: true,
    // slidesPerView: "auto" /* wrapper 가로길이 / 내가 설정한 slide길이 갯수만큼 보임 */,

    // slidesPerView: auto 주면 transform: scale() 했을때 밀림
    // => slidesPerView: 4 수정 -> .lunch-set-slider 전체 크기를 디자인과 맞춤 width: 1988px; /* (467+40 * 4)-40 */
    slidesPerView: 1.2,
    spaceBetween: 20,

    // 반응형 분기점
    breakpoints: {
        430: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1100: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        1440: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: ".btn-next",
    },
});

const followSlider = new Swiper(".follow-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 1.7,
    spaceBetween: 19,

    // 반응형 분기점
    breakpoints: {
        820: {
            slidesPerView: 2.8,
            spaceBetween: 19,
        },
        1440: {
            slidesPerView: 6,
            spaceBetween: 19,
        },
    },

    centeredSlides: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },
});
