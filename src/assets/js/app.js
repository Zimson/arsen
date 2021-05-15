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

app.use(VCalendar, {});

app.component('app-alert', {
  // props: {
  //   'type': 'success'
  // },
  data() {
    return {
      // type: this.$props.type
    }
  },
  template: `
    <article class="alert" :class="'alert--'">
      <svg  class="icon" width="48" height="38">
        <use xlink:href="assets/img/symbol/sprite.svg#alert-success" />
      </svg>
      <span class="alert__text">Alert</span>
    </article>
  `
});

app.component('app-result-box', {
  // props: {
  //   'type': 'success'
  // },
  data() {
    return {
      // type: this.$props.type
    }
  },
  template: `
    <article class="result-box" >
      <dl class="result-box__main">
        <dt>Сайт</dt>
        <dd>inetvl.ru</dd>
        <dt>Идентификатор</dt>
        <dd>12345678</dd>
      </dl>
      <button type="button" class="result-box__btn">Удалить</button>
    </article>
  `
});

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
  data() {
    return {
      titleMap: {
        payments: 'Узнать о своем платеже',
        findCheck: 'Найти свой чек',
        deleteAutoPayment: 'Удалить автоплатеж',
        deleteSavedCard: 'Удалить сохраненную карту'
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('close', false);
    },
    submit(data) {
      console.log('submit', data);
    }
  },
  mounted(data) {
    // this.titleMap = {
    //   payments: 'Узнать о своем платеже',
    //   findCheck: 'Найти свой чек',
    //   deleteAutoPayment: 'Удалить автоплатеж',
    //   deleteSavedCard: 'Удалить сохраненную карту'
    // }
  },
  template: `
    <article class="modal">
      <div class="modal__body" id="deleteAutoPaymentForm">
        <button type="button" class="modal__close" @click="closeModal($event)">
<!--      {{{ icon name="cross" width="12" height="12" }}}-->
        </button>
        <h1 class="modal__title">{{titleMap[id]}}</h1>
        <div class="modal__scroll">
          <form action="" method="" @submit.prevent="submit($event)" class="form" >
            <div class="form__label">Введите номер карты</div>
            <div class="form__row">
              <div class="form__field">
                <div class="input">
                  <input type="text" class="input__field" v-model="v$.firstNumbers.$model" :class="{ error: v$.firstNumbers.$invalid && v$.firstNumbers.$dirty}" @blur="v$.firstNumbers.$touch" placeholder="Первые 6 цифр" />
                  <div class="input__error" v-if="v$.firstNumbers.required.$invalid && v$.firstNumbers.$dirty">{{ v$.firstNumbers.required.$message }}</div>
                  <div class="input__error" v-else-if="v$.firstNumbers.numeric.$invalid && v$.firstNumbers.$dirty">{{ v$.firstNumbers.numeric.$message }}</div>
                  <div class="input__error" v-else-if="v$.firstNumbers.minLength.$invalid && v$.firstNumbers.$dirty">{{ v$.firstNumbers.minLength.$message }}</div>
                </div>
              </div>
              <div class="form__field">
                <div class="input">
                  <input type="text" class="input__field" v-model="v$.lastNumbers.$model" :class="{ error: v$.lastNumbers.$invalid && v$.lastNumbers.$dirty}" @blur="v$.lastNumbers.$touch" placeholder="Последние 4 цифры"/>
                  <div class="input__error" v-if="v$.lastNumbers.required.$invalid && v$.lastNumbers.$dirty">{{ v$.lastNumbers.required.$message }}</div>
                  <div class="input__error" v-else-if="v$.lastNumbers.numeric.$invalid && v$.lastNumbers.$dirty">{{ v$.lastNumbers.numeric.$message }}</div>
                  <div class="input__error" v-else-if="v$.lastNumbers.minLength.$invalid && v$.lastNumbers.$dirty">{{ v$.lastNumbers.minLength.$message }}</div>
                </div>
              </div>
            </div>
            <div class="form__label">Введите сумму автоплатежа</div>
            <div class="form__row form__row--help">
              <div class="form__field">
                <div class="input input--sum">
                  <input type="text" class="input__field" v-model="v$.sum.$model" :class="{ error: v$.sum.$invalid && v$.sum.$dirty}" @blur="v$.sum.$touch" placeholder="Сумма"/>
                  <div class="input__error" v-if="v$.sum.required.$invalid && v$.sum.$dirty">{{ v$.sum.required.$message }}</div>
                  <div class="input__error" v-else-if="v$.sum.numeric.$invalid && v$.sum.$dirty">{{ v$.sum.numeric.$message }}</div>
                </div>
              </div>
              <button type="button" class="form__help">?</button>
            </div>
            <!--          <div class="form__field">-->
            <!--            <v-date-picker v-model="date">-->
            <!--              <template v-slot="{ inputValue, inputEvents }">-->
            <!--                <div class="input input&#45;&#45;date">-->
            <!--                  <input-->
            <!--                    class="input__field"-->
            <!--                    :value="inputValue"-->
            <!--                    v-on="inputEvents"-->
            <!--                  />-->
            <!--                </div>-->
            <!--              </template>-->
            <!--            </v-date-picker>-->
            <!--          </div>-->

            <button type="submit" class="form__submit">Найти автоплатеж</button>
            <div class="form__alert">
              <app-alert type="success"></app-alert>
            </div>
            <app-result-box></app-result-box>
            <app-result-box></app-result-box>
          </form>
        </div>
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

