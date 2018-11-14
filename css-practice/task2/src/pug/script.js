
'use strict';

(function (d) {
  const menuBtn = d.getElementById('menu-btn');
  const navMenu = d.getElementById('menu');
  // navMenu State
  let menuShow = false;

  menuBtn.addEventListener('click', () => {
    if (!menuShow) {
      menuBtn.classList.add('close');
      navMenu.classList.add('show');
    } else {
      menuBtn.classList.remove('close');
      navMenu.classList.remove('show');
    }
    // change navMenu state
    menuShow = !menuShow;
  })
})(document);
