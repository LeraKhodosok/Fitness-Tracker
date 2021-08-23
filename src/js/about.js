import SwiperCore, {Pagination} from 'swiper';
SwiperCore.use([Pagination]);

const swiper = new SwiperCore('.about-slider', {
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    }
});