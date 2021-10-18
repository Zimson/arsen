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

const modalIds = {
  partnership: 'partnership',
};

const modalHashes = {
  agentModal: 'agentModal'
};

const hashToModal = {
  [modalHashes.agentModal]: modalIds.partnership,
};

const modalToHash = {
  [modalIds.partnership]: modalHashes.agentModal,
};

const AppModal = {
  props: {
    id: String,
    title: String,
    onClose: Function,
    isOpen: Boolean,
  },
  
  data() {
    return {
      modalTitleMap,
    }
  },
  
  mounted() {
    if (this.$refs.modal) {
      this.$refs.modal.focus();
    }
  },
  
  template: `
    <article tabindex="0" :class="{'modal': true, ['modal--' + id]: !!id, 'modal--open': !!isOpen}" @keyup.esc="onClose($event)" ref="modal">
    <div :class="{'modal__body': true, ['modal__body--' + id]: !!id}">
      <button type="button" class="modal__close" @click="onClose($event)">
        <svg class="icon" width="12" height="12">
          <use xlink:href="assets/img/symbol/sprite.svg#cross"/>
        </svg>
      </button>
      <h1 :class="{'modal__title': true, ['modal__title--' + id]: !!id}">{{ title }}</h1>
      <slot></slot>
    </div>
    </article>
  `
};

AppModal.modalIds = modalIds;
AppModal.modalToHash = modalToHash;
AppModal.modalHashes = modalHashes;
AppModal.hashToModal = hashToModal;

export default AppModal;
