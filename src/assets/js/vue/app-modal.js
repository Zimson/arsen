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
};

export default {
  props: {
    title: String,
    isOpen: Boolean,
    onClose: Function,
    classNameSuffix: String,
  },
  
  data() {
    return {
      modalTitleMap,
    }
  },
  
  
  template: `
    <article v-if="isOpen" :class="{'modal': true, ['modal--' + classNameSuffix]: !!classNameSuffix, 'modal--open': isOpen}">
      <div :class="{'modal__body': true, ['modal__body--' + classNameSuffix]: !!classNameSuffix}">
        <button type="button" class="modal__close" @click="onClose($event)">
          <svg  class="icon" width="12" height="12">
            <use xlink:href="assets/img/symbol/sprite.svg#cross" />
          </svg>
        </button>
        <h1 :class="{'modal__title': true, ['modal__title--' + classNameSuffix]: !!classNameSuffix}">{{title}}</h1>
        <slot></slot>
      </div>
    </article>
  `
}
