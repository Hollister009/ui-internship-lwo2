'use strict';
/* global document */
(function(doc) {
  const gallery = doc.querySelector('.work__pictures');

  // Create new modal window
  const createModal = (image) => {
    const modal = doc.createElement('DIV');
    const imageUrl = image.src;
    const modalTemplate = `
      <div class="modal__window fadeIn animated">
        <img src="${imageUrl}" alt=""/>
      </div>
      <div class="modal__overlay"></div>
    `;

    // Append to parent Element
    modal.classList.add('modal', 'center-item');
    modal.innerHTML = modalTemplate;
    gallery.append(modal);

    // Select modal__overlay & btn-close
    const modOverlay = modal.querySelector('.modal__overlay');

    gallery.removeEventListener('click', popupShow);
    modOverlay.addEventListener('click', removeModal.bind(null, modal));
  };

  // Remove modal window
  const removeModal = (modal, e) => {
    e.stopPropagation();
    gallery.removeChild(modal);
    gallery.addEventListener('click', popupShow);
  };

  const popupShow = (e) => {
    if (e.target.tagName.toLowerCase() === 'img') {
      createModal(e.target);
    }
    return false;
  };

  gallery.addEventListener('click', popupShow);
})(document);
