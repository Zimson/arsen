import 'what-input';

//polyfill
import './utils/polyfill';

import Modal from './modules/Modal';

document.addEventListener('DOMContentLoaded', function() {
  const iframes = document.querySelectorAll('iframe');

  iframes.forEach((iframe) => {
    const src = iframe.dataset.src;
    iframe.src = src;
  });

});

document.addEventListener('click', function(e) {

  const modalTrigger = e.target.closest('[data-modal]');

  if (modalTrigger) {
    const modalId = modalTrigger.dataset.modal;
    new Modal(document.getElementById(modalId));
  }
});
