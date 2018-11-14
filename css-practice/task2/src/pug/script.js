
'use strict';

(function (d) {
  const menuBtn = d.getElementById('menu-btn');
  const navMenu = d.getElementById('menu');
  // navMenu State
  let menuShow = false;

  menuBtn.addEventListener('click', () => {
    if (!menuShow) {
      navMenu.classList.add('show');
    } else {
      navMenu.classList.remove('show');
    }
    // change navMenu state
    menuShow = !menuShow;
  });
})(document);
