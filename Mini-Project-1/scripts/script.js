document.addEventListener('DOMContentLoaded', function () {
  const list = document.querySelectorAll('.list')

  function activeLink() {
    list.forEach((item) => item.classList.remove('active'))
    this.classList.add('active')
  }

  list.forEach((item) => item.addEventListener('mouseover', activeLink))
})

var swiper = new Swiper('.slide-content', {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
