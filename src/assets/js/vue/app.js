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
};

const faqSellerData = {
  connection: [
    {
      title: 'Частые вопросы по подключению',
      items: [
        { question: 'Что необходимо сделать, чтобы подключить приём платежей через ArsenalPay?', answer: '' },
        { question: 'Какие документы нужны для подключения?', answer: '' },
        { question: 'Что необходимо для подготовки сайта?', answer: '' },
        { question: 'Отправил документы на подключение, какие дальнейшие шаги?', answer: '' },
        { question: 'Как быстро придёт оригинал договора?', answer: '' },
        { question: 'Когда я смогу принимать платежи?', answer: '' },
        { question: 'С какими банками вы работаете?', answer: '' },
        { question: 'Какова стоимость подключения к ArsenalPay?', answer: '' },
        { question: 'Какие страны я могу подключить для приёма платежей?', answer: '' }
      ]
    },
    {
      title: 'Кого подключаете?',
      items: [
        { question: 'Могу ли я подключить приём платежей, если я нерезидент?', answer: '' },
        { question: 'Работаете ли вы с самозанятыми?', answer: '' },
        { question: 'Можно ли подключить сайт с товарами 18+?', answer: '' },
        { question: 'С криптовалютой работаете?', answer: '' },
        { question: 'Сайты знакомств подключатете?', answer: '' }
      ]
    },
    {
      title: 'Реквизиты',
      items: [
        { question: 'Хочу поменять банковские реквизиты, что для этого необходимо?', answer: '' }
      ]
    }
  ],
  money: [
    {
      title: 'Расчётный счёт',
      items: [
        { question: 'Как быстро приходят деньги на расчётный счёт?', answer: '' },
        { question: 'Можно ли переводить деньги не на расчётный счёт, а на карту физлица?', answer: '' },
        { question: 'Как осуществляется перевод денежных средств на банковский расчётный счёт?', answer: '' },
        { question: 'Есть ли лимиты по платежам?', answer: '' },
        { question: 'В какой валюте можно получать выплаты на свой расчётный счёт?', answer: '' },
        { question: 'Как происходит списание комиссии?', answer: '' }
      ]
    },
    {
      title: 'Отчетность',
      items: [
        { question: 'Как получить акты для бухгалтерской отчётности?', answer: '' },
        { question: '', answer: 'Что делать, если цифры в актах не сходятся?' }
      ]
    },
    {
      title: 'Возвраты',
      items: [
        { question: 'При возврате средств клиенту куда возвращаются средства?', answer: '' },
        { question: 'Как вернуть деньги на банковскую карту плательщика?', answer: '' }
      ]
    },
    {
      title: 'Тарифы',
      items: [
        { question: 'Какие у вас тарифы?', answer: '' }
      ]
    }
  ],
  kassa: [
    {
      title: 'Частые вопросы по онлайн-кассе',
      items: [
        { question: 'Входит ли в тариф онлайн-касса?', answer: '' },
        { question: 'У меня есть своя касса, какой тариф будет в таком случае?', answer: '' },
        { question: 'Как я могу убедиться, что данные дошли до налоговой?', answer: '' },
        { question: 'Куда должен приходить чек об оплате?', answer: '' },
        { question: 'Почему не приходит чек об оплате?', answer: '' }
      ]
    }
  ],
  integration: [
    {
      title: 'Частые вопросы по технической интеграции',
      items: [
        { question: 'С какой CMS платформой вы интегрированы?', answer: '' },
        { question: 'Могу ли я протестировать платёжную систему ArsenalPay до заключения договора?', answer: '' },
        { question: 'Где я могу ознакомиться с технической документацией, необходимой для интеграции?', answer: '' },
        { question: 'Сколько времени занимает процесс технической интеграции?', answer: '' },
        { question: 'Как происходит интеграция платежного сервиса ArsenalPay с сайтом компании?', answer: '' },
        { question: 'Какие варианты интеграции существуют?', answer: '' },
        { question: 'Поддерживает ли ArsenalPay возможность оплаты без перехода на сайт платёжной системы?', answer: '' },
        { question: 'Как изменить цвет платёжной формы?', answer: '' }
      ]
    }
  ],
  payment: [
    {
      title: 'Частые вопросы по платежам',
      items: [
        { question: 'Ошибка проверки получателя при оплате на странице результата. Почему не проходит платёж?', answer: '' },
        { question: 'Смогут ли клиенты, находящиеся за пределами России, оплачивать покупки картами?', answer: '' }
      ]
    }
  ],
  security: [
    {
      title: 'Частые вопросы по безопасности',
      items: [
        { question: 'Насколько безопасно проводить платежи через платёжную систему ArsenalPay?', answer: '' },
        { question: 'Необходимо ли мне дополнительно приобретать SSL-сертификат для работы с платёжным виджетом ArsenalPay?', answer: '' }
      ]
    }
  ],
  account: [
    {
      title: 'Частые вопросы по личному кабинету',
      items: [
        { question: 'Не получается войти в личный кабинет.', answer: '' },
        { question: 'Пытаюсь поменять пароль от личного кабинета, но новый пароль не приходит.', answer: '' }
      ]
    }
  ]
};

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
      faqBuyerData: faqBuyerData,
      faqSellerData
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
