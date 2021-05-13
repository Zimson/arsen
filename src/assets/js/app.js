import 'what-input';

//polyfill
import './utils/polyfill';
import {createApp} from 'vue/dist/vue.esm-bundler';
// import useVuelidate from '@vuelidate/core'
// import { required, email } from '@vuelidate/validators'

import Modal from './modules/Modal';
import MobileNav from './modules/MobileNav';
import './modules/Slider';

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

const app = createApp({
  data: () => ({
    activeTab: 1,
    activeInnerTab: 1,
    isModalOpen: true,
    modal: {
      id: '',

    }

  }),
  methods: {
    setActiveTab(pos) {
      this.activeTab = pos;
    },
    setActiveInnerTab(pos) {
      this.activeInnerTab = pos;
    },
    showModal(id) {
      this.modal.id = id;
      this.isModalOpen = true;
    },
    closeModal() {
      this.currentModal = '';
    }
  },
  computed: {

  }
});

app.component('modal', {
  props: {
    id: String,
    title: String,
    isOpen: Boolean,
  },
  data() {
    return {
      isOpen: true
    }
  },
  methods: {
    closeModal() {
      // this.isOpen = false;
    }
  },
  updated(data) {
    console.log('updated 22', this.isOpen)
  },
  template: `
    <article class="modal" v-if="isOpen">
      <div class="modal__body" id="deleteAutoPaymentForm">
        <button type="button" class="modal__close" @click="closeModal()">
<!--      {{{ icon name="cross" width="12" height="12" }}}-->
        </button>
        <h1 class="modal__title">{{title}}</h1>
        <form >
          <input type="text" :placeholder="placeholder" />
          <input type="text" placeholder="Введите последние 4 цифры"/>
          <button type="submit">Найти автоплатеж</button>
        </form>
      </div>
    </article>
  `
});

app.mount('#app');

console.log('app', app);
//
// const deleteAutoPaymentForm = ({
//   data: () => ({
//     el: '#deleteAutoPaymentForm',
//     message: 'Hello Vue!',
//     placeholder: 'hhhhh'
//   })
// })

// Vue.createApp(deleteAutoPaymentForm).mount('#deleteAutoPaymentForm');

