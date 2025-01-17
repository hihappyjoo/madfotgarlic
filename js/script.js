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
    slidesPerView: "auto" /* wrapper 가로길이 / 내가 설정한 slide길이 갯수만큼 보임 */,
    spaceBetween: 40,

    // Navigation arrows
    navigation: {
        nextEl: ".btn-next",
    },
});

const followSlider = new Swiper(".follow-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    spaceBetween: 19,

    centeredSlides: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },
});
