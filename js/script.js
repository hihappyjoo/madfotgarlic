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
    slidesPerView: 3,

    // Navigation arrows
    navigation: {
        nextEl: ".btn-next",
    },
});

const followSlider = new Swiper(".follow-slider", {
    // Optional parameters

    slidesPerView: 5,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },
});
