import 'what-input';

//polyfills
import './utils/polyfill';

import Modal from './modules/Modal';
import MobileNav from './modules/MobileNav';
import './modules/Slider';
import CookiesAgreementNotifier from "./modules/CookiesAgreementNotifier";

function scrollToAnchor() {
  if (!window.location.hash) return;

  const anchor = document.querySelector(window.location.hash);

  if (anchor) {
    anchor.scrollIntoView({block: "start", behavior: "smooth"});
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const iframes = document.querySelectorAll('iframe');

  iframes.forEach((iframe) => {
    const src = iframe.dataset.src;
    iframe.src = src;
  });
  
  new CookiesAgreementNotifier();
  
  // setTimeout(() => {
  //   scrollToAnchor();
  // }, 0)
});

document.addEventListener('click', function(e) {

  const modalTrigger = e.target.closest('[data-modal]');
  const mobileNavTrigger = e.target.closest('[data-open-mobile]');

  if (modalTrigger) {
    const modalId = modalTrigger.dataset.modal;
    new Modal(document.getElementById(modalId));
  }

  if (mobileNavTrigger) {
    new MobileNav();
  }
});


import './vue/app';





// const deleteAutoPaymentForm = ({
//   data: () => ({
//     el: '#deleteAutoPaymentForm',
//     message: 'Hello Vue!',
//     placeholder: 'hhhhh'
//   })
// })

// Vue.createApp(deleteAutoPaymentForm).mount('#deleteAutoPaymentForm');

