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
        <figure>
          <img src="${imageUrl}" alt=""/>
        </figure>
        <span class="btn-close" aria-role="button" tabindex="0">&times;</span>
      </div>
      <div class="modal__overlay"></div>
    `;

    // Append to parent Element
    modal.classList.add('modal');
    modal.innerHTML = modalTemplate;
    gallery.append(modal);

    // Select modal__overlay & btn-close
    const modOverlay = modal.querySelector('.modal__overlay');
    const btnClose = modal.querySelector('.btn-close');
    // Event Listeners in modal-view
    gallery.removeEventListener('click', popupShow);
    modOverlay.addEventListener('click', removeModal.bind(null, modal));
    btnClose.addEventListener('click', removeModal.bind(null, modal));
    btnClose.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) removeModal(modal, e);
    });
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
