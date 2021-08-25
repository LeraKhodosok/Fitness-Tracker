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
            centeredSlides: true,
        },
        480: {
            slidesPerView: 2,
            centeredSlides: true,
        },
        576: {
            slidesPerView: 3,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 3,
            centeredSlides: true,
        },
        992: {
            slidesPerView: 4,
            centeredSlides: true,
        },
        1200: {
            slidesPerView: 5,
            centeredSlides: true,
        }
    }
});