const modalTitleMap = {
  payments: 'Узнать о своем платеже',
  findCheck: 'Найти свой чек',
  deleteAutoPayment: 'Удалить автоплатеж',
  deleteSavedCard: 'Удалить сохраненную карту'
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
    <article class="modal">
      <div class="modal__body" id="deleteAutoPaymentForm">
        <button type="button" class="modal__close" @click="closeModal($event)">
          <svg  class="icon" width="12" height="12">
            <use xlink:href="assets/img/symbol/sprite.svg#cross" />
          </svg>
        </button>
        <h1 class="modal__title">{{modalTitleMap[id]}}</h1>
        <div class="modal__scroll">
         <slot></slot>
        </div>
      </div>
    </article>
  `
}
