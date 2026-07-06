const industrySwiper = new Swiper(".industrySwiper", {

    loop: true,

    speed: 700,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },

    spaceBetween: 25,

    centeredSlides: false,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },

        480: {
            slidesPerView: 1.2,
            spaceBetween: 15
        },

        576: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 25
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: 25
        }

    }

});