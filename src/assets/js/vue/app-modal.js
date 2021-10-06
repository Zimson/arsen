const modalTitleMap = {
  payments: 'Узнать о своем платеже',
  findCheck: 'Найти свой чек',
  deleteAutoPayment: 'Удалить автоплатеж',
  deleteSavedCard: 'Удалить сохраненную карту',
  support: 'Свяжитесь с нами',
  cardPay: 'Оплата картой',
  savedCardPay: 'Оплата сохранённой картой',
  phonePay: 'Оплата с баланса телефона',
  walletPay: 'Оплата с QIWI кошелька',
  addAutoPay: 'Подключить автоплатёж',
  deleteAutoPay: 'Удалить автоплатёж',
  partnership: 'Станьте агентом',
};

export default {
  props: {
    id: String,
    isOpen: Boolean,
  },
  
  data() {
    return {
      modalTitleMap
    }
  },
  
  methods: {
    closeModal() {
      this.$emit('close', false);
    }
  },
  
  
  
  template: `
    <article v-if="isOpen" :class="{'modal': true, ['modal--' + id]: id === 'partnership', 'modal--open': isOpen}">
      <div :class="{'modal__body': true, ['modal__body--' + id]: !!id}">
        <button type="button" class="modal__close" @click="closeModal($event)">
          <svg  class="icon" width="12" height="12">
            <use xlink:href="assets/img/symbol/sprite.svg#cross" />
          </svg>
        </button>
        <h1 :class="{'modal__title': true, ['modal__title--' + id]: id === 'partnership'}">{{modalTitleMap[id]}}</h1>
        <slot></slot>
      </div>
    </article>
  `
}
