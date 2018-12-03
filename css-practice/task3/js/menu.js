'use strict';
/* global document window requestAnimationFrame */
(function(doc) {
  const header = doc.querySelector('.header');
  const headerNav = header.querySelector('.header__nav');
  const headerMenu = header.querySelector('.header__menu');
  const burgerBtn = header.querySelector('#menu-btn');
  const menuLinks = Array.from(headerMenu.querySelectorAll('.nav-item'));
  const sectionsObj = {
    0: '#banner',
    1: '#about',
    2: '#service',
    3: '#work',
    4: '#blog',
    5: '#footer',
  };
  const fixedMenuAfter = doc.querySelector('#banner').offsetHeight;

  // Fading menu after pageYOffset;
  const menuFade = () => {
    headerMenu.classList.remove('open');
    const offset = window.pageYOffset;
    if (offset >= (fixedMenuAfter - 5)) {
      headerNav.classList.add('fixed', 'animated', 'fadeInDown');
    } else {
      headerNav.classList.remove('fixed', 'animated', 'fadeInDown');
    }
  };

  /* !This isn't my code. Used only for smooth-scrolling effect! */
  const smoothScroll = (index, duration) => {
    const target = doc.querySelector(sectionsObj[index]);
    const targetPos = target.getBoundingClientRect().top;
    const startPos = window.pageYOffset;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPos, targetPos, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    /* http://www.gizma.com/easing/ */
    const ease = (t, b, c, d) => {
      return c * ( -Math.pow( 2, -10 * t / d ) + 1 ) + b;
    };
    requestAnimationFrame(animation);
  };

  // Change active link & start smooth-scroll effect;
  const menuClickHandler = (e) => {
    e.preventDefault();
    const link = e.target;
    const i = menuLinks.indexOf(link.parentNode);
    if (i !== -1) {
      menuLinks.forEach((li) => {
        li.classList.remove('active');
      });
      menuLinks[i].classList.add('active');
      smoothScroll(i, 2000);
    }
  };

  window.addEventListener('scroll', menuFade);
  headerMenu.addEventListener('click', menuClickHandler);
  burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    headerMenu.classList.toggle('open');
  });
})(document);
