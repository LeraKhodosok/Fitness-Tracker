import SwiperCore, {Pagination} from 'swiper';
SwiperCore.use([Pagination]);

const swiper = new SwiperCore('.about-slider', {
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
        },
        1450: {
            slidesPerView: 5,
        }
    }
});