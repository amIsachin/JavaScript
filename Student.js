var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
        delay: 2500,
        disableOnInteration:false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });