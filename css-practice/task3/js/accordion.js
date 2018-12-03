'use strict';
/* global document */
(function() {
  const accordion = document.getElementById('accordion');
  const panelsArr = Array.from(accordion.children);
  const iconsArr = Array.from(accordion.querySelectorAll('.right'));
  const imagesArr = Array.from(document.querySelectorAll('.accordion-pic'));

  const switchHandler = (e) => {
    e.preventDefault();
    const actionBtn = e.target;
    const iconChev = actionBtn.children[1];
    const activePanel = actionBtn.parentNode.parentNode.parentNode;
    const openState = activePanel.classList.contains('open') ? true : false;
    displayPanelImage(activePanel);
    closeAllPanels();
    togglePanel(activePanel, openState, iconChev);
  };

  const displayPanelImage = (active) => {
    const currIndex = panelsArr.indexOf(active);
    if (!imagesArr[currIndex].classList.contains('in')) {
      imagesArr.forEach((image) => {
        image.classList.remove('in');
      });
      if (currIndex !== -1) {
        imagesArr[currIndex].classList.add('in');
      }
    }
  };

  const closeAllPanels = () => {
    panelsArr.forEach((panel) => {
      panel.classList.remove('open');
      panel.classList.add('close');
    });
    iconsArr.forEach((icon) => {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
    });
  };

  const togglePanel = (panel, state, icon) => {
    if (!state) {
      panel.classList.remove('close');
      panel.classList.add('open');
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
    } else {
      panel.classList.add('close');
      panel.classList.remove('open');
    }
  };

  panelsArr.forEach((el) => {
    el.addEventListener('click', switchHandler);
  });
})();
