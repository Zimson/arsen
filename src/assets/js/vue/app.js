import {createApp, reactive} from 'vue/dist/vue.esm-bundler';
import VCalendar from 'v-calendar';
import VueMask, { VueMaskDirective, VueMaskFilter } from 'v-mask';

import appAlert from './app-alert';
import appResultBox from './app-result-box';
import appModal from './app-modal';
import appDataForm from './app-data-form';
import appSupportForm from './app-support-form';
import appNumericItem from './app-numeric-item';
import appTabsNav from './app-tabs-nav';
import appFaq from './app-faq';


const faqBuyerData = {
  payment: [
    {
      title: 'Частые вопросы по оплате',
      items: [
        { question: 'Я оплатил интернет (TV), но деньги не поступили на лицевой счёт, что делать?', answer: '' },
        { question: 'Мне не пришел чек об оплате, как его получить?', answer: '' },
        { question: 'Как понять, что я оплатил заказ?', answer: '' },
        { question: 'Не получается оплатить заказ на сайте, что мне делать?', answer: 'Если вы не можете оплатить заказ на сайте, обратитесь в магазин и попросите выставить вам счет. Вам отправят ссылку на оплату счета. По этой ссылке вы сможете легко оплатить заказ.' },
        { question: 'Зависла форма оплаты, что делать?', answer: '' },
        { question: 'Какие способы оплаты доступны в интернет-магазине?', answer: '' },
        { question: 'Как оплачивать картой?', answer: '' }
      ]
    },
    {
      title: 'Оплата из-за границы',
      items: [
        { question: 'Карты каких стран можно использовать при оплате?', answer: '' },
        { question: 'Могу ли я сделать заказ находясь за границей?', answer: '' },
        { question: '', answer: '' },
        { question: '', answer: '' },
        { question: '', answer: '' }
      ]
    }
  ],
  return: [
    {
      title: 'Возврат средств на карту',
      items: [
        { question: 'Вернут ли мне деньги в случае отказа от покупки?', answer: '' },
        { question: 'Каков срок возврата денег за товар?', answer: '' },
        { question: 'После возврата товара, деньги не пришли на карту, что делать?', answer: '' },
        { question: 'Как узнать сделал ли интернет-магазин возврат?', answer: '' }
      ]
    },
    {
      title: 'Возврат товара',
      items: [
        { question: 'Можно ли вернуть купленный товар?', answer: '' },
        { question: 'Кам можно отменить оплаченый заказ?', answer: '' }
      ]
    }
  ],
  delivery: [
    {
      title: 'Доставка товара',
      items: [
        { question: 'Как происходит доставка товара?', answer: '' },
        { question: 'Могу ли я быть уверен, что после оплаты картой, мне доставят товар?', answer: '' }
      ]
    }
  ],
  security: [
    {
      title: 'Безопасность платежей',
      items: [
        { question: 'Могу ли я быть уверен в безопасности платежей?', answer: '' },
        { question: 'Как защищена платежная информация по картам?', answer: '' },
        { question: 'Безопасно ли запоминать карту для повторной оплаты на сайте?', answer: '' },
        { question: 'Безопасно ли подключать автоплатежи?', answer: '' }
      ]
    }
  ],
}

const app = createApp({
  data () {
    return {
      activeTab: 1,
      activeInnerTab: 1,
      modalContentType: '',
      modal: {
        id: '',
        isOpen: false
      },
      faqBuyerData: faqBuyerData
    }
  },
  methods: {
    setActiveTab(pos) {
      this.activeTab = pos;
    },
    setActiveInnerTab(pos) {
      this.activeInnerTab = pos;
    },
    showModal(id, contentType) {
      this.modal = Object.assign(this.modal, {
        id: id,
        isOpen: true
      });
      this.modalContentType = contentType;
    },
    closeModal(data) {
      this.modal.id = '';
      this.modal.isOpen = data;
    }
  },
  computed: {

  }
});

app.component('app-alert', appAlert);
app.component('app-result-box', appResultBox);
app.component('app-modal', appModal);
app.component('app-data-form', appDataForm);
app.component('app-support-form', appSupportForm);
app.component('app-numeric-item', appNumericItem);
app.component('app-tabs-nav', appTabsNav);
app.component('app-faq', appFaq);

app.use(VCalendar, {});
// app.use(VueMask);

app.mount('#app');

console.log('app', app);
