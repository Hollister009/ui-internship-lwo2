'use strict';
/* global document */
(function() {
  // Background video playback
  const playBtn = document.querySelector('.btn-video');
  const bgVideo = document.querySelector('video');

  const playState = (evt) => {
    evt.preventDefault();
    if (playBtn.classList.contains('pause')) {
      bgVideo.play();
    } else {
      bgVideo.pause();
    }
    playBtn.classList.toggle('play');
    playBtn.classList.toggle('pause');
  };

  playBtn.addEventListener('click', playState);

  // Form validation
  const contactForm = document.querySelector('.contact__form');
  const submitBtn = contactForm.querySelector('[type="submit"]');
  // select inputs from form
  const inputsArr = [...contactForm.elements].filter((el) => {
    return el.type === 'text' || el.type === 'email' || el.type === 'password';
  });

  const checkUserInput = (input) => {
    const value = input.value;
    if (value.length !== 0) {
      const pattern = new RegExp(input.getAttribute('data-pattern'));
      const isValid = pattern.test(value);
      if (isValid) {
        input.classList.add('valid');
        input.classList.remove('invalid');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
      }
    } else {
      input.classList.remove('valid', 'invalid');
    }
  };

  const submitSwitch = (e) => {
    const input = e.target;
    checkUserInput(input);
    const subState = inputsArr.every((el) => {
      return el.classList.contains('valid');
    });
    if (subState) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  };

  contactForm.addEventListener('input', submitSwitch, true);
})();
