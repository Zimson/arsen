import 'what-input';

//polyfill
import './utils/polyfill';
import {createApp, reactive} from 'vue/dist/vue.esm-bundler';
import useVuelidate from '@vuelidate/core';
import {required, minLength, maxLength, numeric} from '@vuelidate/validators';
import VCalendar from 'v-calendar';

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
  data () {
   return {
     activeTab: 1,
     activeInnerTab: 1,
     modal: {
       id: 'DS',
       isOpen: false
     }
   }
  },
  methods: {
    setActiveTab(pos) {
      this.activeTab = pos;
    },
    setActiveInnerTab(pos) {
      this.activeInnerTab = pos;
    },
    showModal(id) {
      this.modal = Object.assign(this.modal, {
        id: id,
        isOpen: true
      })

      console.log('modal', this.modal);
    },
    closeModal(data) {
      this.modal.id = '';
      this.modal.isOpen = data;
    }
  },
  computed: {

  }
});

app.use(VCalendar, {})

app.component('app-modal', {
  setup () {
    const state = reactive({
      firstNumbers: '',
      lastNumbers: '',
      sum: ''
    });
    const rules = {
      firstNumbers: {
        required,
        numeric,
        minLength: minLength(6)
      },
      lastNumbers: {
        required,
        numeric,
        minLength: minLength(4)
      },
      sum: {
        required,
        numeric
      }
    }

    const v$ = useVuelidate(rules, state)

    return {name , v$ }
  },
  props: {
    id: String,
    isOpen: Boolean,
  },
  // data() {
  //   return {
  //     isOpen: true
  //   }
  // },
  methods: {
    closeModal() {
      this.$emit('close', false);
    },
    submit(data) {
      console.log('submit', data);
    }
  },
  mounted(data) {


  },
  template: `
    <article class="modal">
      <div class="modal__body" id="deleteAutoPaymentForm">
        <button type="button" class="modal__close" @click="closeModal($event)">
<!--      {{{ icon name="cross" width="12" height="12" }}}-->
        </button>
        <h1 class="modal__title">{{id}}</h1>
        <form action="" method="" @submit.prevent="submit($event)" >
          <input type="text" v-model="v$.firstNumbers.$model" :class="{ error: v$.firstNumbers.$invalid && v$.firstNumbers.$dirty}" @blur="v$.firstNumbers.$touch" placeholder="Первые 6 цифр" />
          <div class="input-errors" v-if="v$.firstNumbers.required.$invalid && v$.firstNumbers.$dirty">
            <div class="error-msg">{{ v$.firstNumbers.required.$message }}</div>
          </div>
          <div class="input-errors" v-else-if="v$.firstNumbers.numeric.$invalid && v$.firstNumbers.$dirty">
            <div class="error-msg">{{ v$.firstNumbers.numeric.$message }}</div>
          </div>
          <div class="input-errors" v-else-if="v$.firstNumbers.minLength.$invalid && v$.firstNumbers.$dirty">
            <div class="error-msg">{{ v$.firstNumbers.minLength.$message }}</div>
          </div>
          <input type="text" v-model="v$.lastNumbers.$model" :class="{ error: v$.lastNumbers.$invalid && v$.lastNumbers.$dirty}" @blur="v$.lastNumbers.$touch" placeholder="Последние 4 цифры"/>
          <div class="input-errors" v-if="v$.lastNumbers.required.$invalid && v$.lastNumbers.$dirty">
            <div class="error-msg">{{ v$.lastNumbers.required.$message }}</div>
          </div>
          <div class="input-errors" v-else-if="v$.lastNumbers.numeric.$invalid && v$.lastNumbers.$dirty">
            <div class="error-msg">{{ v$.lastNumbers.numeric.$message }}</div>
          </div>
          <div class="input-errors" v-else-if="v$.lastNumbers.minLength.$invalid && v$.lastNumbers.$dirty">
            <div class="error-msg">{{ v$.lastNumbers.minLength.$message }}</div>
          </div>
          <input type="text" v-model="v$.sum.$model" :class="{ error: v$.sum.$invalid && v$.sum.$dirty}" @blur="v$.sum.$touch" placeholder="Сумма"/>
          <div class="input-errors" v-if="v$.sum.required.$invalid && v$.sum.$dirty">
            <div class="error-msg">{{ v$.sum.required.$message }}</div>
          </div>
          <div class="input-errors" v-else-if="v$.sum.numeric.$invalid && v$.sum.$dirty">
            <div class="error-msg">{{ v$.sum.numeric.$message }}</div>
          </div>
          <v-date-picker v-model="date">
            <template v-slot="{ inputValue, inputEvents }">
              <input
                class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
                :value="inputValue"
                v-on="inputEvents"
              />
            </template>
          </v-date-picker>  
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

