const swiper = new Swiper('.fav .swiper', {
  loop: true,  
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const featured = new Swiper('.featured .swiper', {
  loop: false,  
  slidesPerView: 1,
  spaceBetween: 10,
  grid: {
    rows: 2,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const freq = new Swiper('.freq .swiper', {
  loop: false,  
  slidesPerView: 1,
  spaceBetween: 10,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    enabled:true
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 0
    }
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const header = new Swiper('.header .swiper', {
  loop: false,  
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const logos = new Swiper('.logos .swiper', {
  loop: false,  
  slidesPerView: 1,
  spaceBetween: 10,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragClass:"swiper-scrollbar-drag",
    enabled:true
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const review = new Swiper('.review .swiper', {
  loop: true,  
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  navigation: {
    nextEl: '.review-button-next',
    prevEl: '.review-button-prev',
  },
});