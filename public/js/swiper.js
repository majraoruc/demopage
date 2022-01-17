var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        610: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    }
})