const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 69000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    noSwiping: true,                    // active le mode no-swiping
    noSwipingClass: 'swiper-no-swiping' // la classe à ignorer
});