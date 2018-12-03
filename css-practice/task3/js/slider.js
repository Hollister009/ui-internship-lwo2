'use strict';
/* global document */
(function(doc) {
  const slidersArr = Array.from(doc.querySelectorAll('.slider'));

  const sliderControl = (slider) => {
    let currSlide = 1;
    const allSlides = Array.from(slider.querySelectorAll('.slide-quote'));
    const slidesLen = allSlides.length;

    const nextSlide = () => {
      allSlides[currSlide].classList.remove('current');
      allSlides[currSlide].classList.add('prev');
      currSlide++;
      allSlides[currSlide].classList.remove('next');
      allSlides[currSlide].classList.add('current');
    };

    const prevSlide = () => {
      allSlides[currSlide].classList.remove('current');
      allSlides[currSlide].classList.add('next');
      currSlide--;
      allSlides[currSlide].classList.remove('prev');
      allSlides[currSlide].classList.add('current');
    };

    const slideHandler = (e) => {
      e.preventDefault();
      if (e.target.classList.contains('btn-slide')) {
        const btnOfSlide = e.target;
        if (btnOfSlide.classList.contains('next')) {
          if (currSlide < slidesLen - 1) {
            nextSlide();
          } else {
            prevSlide();
            prevSlide();
          }
        }

        if (btnOfSlide.classList.contains('prev')) {
          if (currSlide > 0) {
            prevSlide();
          } else {
            nextSlide();
            nextSlide();
          }
        }
      }
    };

    slider.addEventListener('click', slideHandler);
  };

  slidersArr.forEach((slider) => {
    sliderControl(slider);
  });
})(document);
