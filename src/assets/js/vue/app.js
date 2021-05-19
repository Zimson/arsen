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

// <a href="" class="link link--in-text">

const faqBuyerData = {
  payment: [
    {
      title: 'Частые вопросы по&nbsp;оплате',
      items: [
        {
          question: 'Я&nbsp;оплатил интернет (TV), но&nbsp;деньги не&nbsp;поступили на&nbsp;лицевой счёт, что делать?',
          answer: 'Воспользуйтесь функцией <a href="https://arsenalpay.ru/support.html#uznat-o-svoyom-platezhe" class="link link--in-text">&laquo;Узнать о&nbsp;своём платеже&raquo;.</a> Проверьте, был&nbsp;ли ваш платёж ' +
            'успешным и&nbsp;на&nbsp;какой лицевой счёт он&nbsp;поступил. Если платёж успешный и&nbsp;лицевой счёт верный, ' +
            'но&nbsp;платёж вам не&nbsp;поступил, <a href="https://arsenalpay.ru/support.html#questionModal" class="link link--in-text">напишите нам</a>, укажите на&nbsp;каком сайте оплачивали, дату оплаты, сумму и&nbsp;номер лицевого ' +
            'счёта, на&nbsp;который вы&nbsp;переводили деньги.'
        },
        {
          question: 'Мне не&nbsp;пришел чек об&nbsp;оплате, как его получить?',
          answer: 'Вы&nbsp;можете найти свой чек, воспользовавшись <a href="https://arsenalpay.ru/support.html#najti-svoj-chek" class="link link--in-text">нашим сервисом.</a> Если вы&nbsp;не&nbsp;смогли найти ' +
            'свой чек, <a href="https://arsenalpay.ru/support.html#questionModal" class="link link--in-text">напишите нам</a>, укажите сайт, на&nbsp;котором вы&nbsp;оплачивали, дату оплаты, сумму и&nbsp;последние ' +
            '4 цифры вашей карты.\n'
        },
        {
          question: 'Как понять, что я&nbsp;оплатил заказ?',
          answer: 'После оплаты появится страница с&nbsp;надписью &laquo;Платёж прошёл успешно&raquo;. На&nbsp;ваш email' +
            ' придёт чек платежа и&nbsp;уведомление от&nbsp;интернет-магазина об&nbsp;успешной оплате. Также вы&nbsp;можете ' +
            'воспользоваться функцией <a href="https://arsenalpay.ru/support.html#uznat-o-svoyom-platezhe" class="link link--in-text">&laquo;Узнать о&nbsp;своём платеже&raquo;</a> и&nbsp;проверить, был&nbsp;ли ваш платёж успешным. ' +
            'Если вам не&nbsp;удалось получить информацию о&nbsp;платеже, <a href="https://arsenalpay.ru/support.html#questionModal" class="link link--in-text">напишите нам</a>, укажите сайт, на&nbsp;котором вы&nbsp;оплачивали, ' +
            'дату оплаты, сумму и&nbsp;последние 4 цифры вашей карты.\n'
        },
        {
          question: 'Не&nbsp;получается оплатить заказ на&nbsp;сайте, что мне делать?',
          answer: 'Если вы&nbsp;не&nbsp;можете оплатить заказ на&nbsp;сайте, обратитесь в&nbsp;магазин и&nbsp;попросите ' +
            'выставить вам счет. Вам отправят ссылку на&nbsp;оплату счета. По&nbsp;этой ссылке вы&nbsp;сможете легко оплатить заказ.\n'
        },
        {
          question: 'Зависла форма оплаты, что делать?',
          answer: 'Воспользуйтесь функцией <a href="https://arsenalpay.ru/support.html#uznat-o-svoyom-platezhe" class="link link--in-text">&laquo;Узнать о&nbsp;своём платеже&raquo;</a> и&nbsp;проверьте, был&nbsp;ли ваш платеж успешным. ' +
            'При успешной оплате на&nbsp;ваш email должен прийти чек платежа. Если вы&nbsp;не&nbsp;получили чек, проверьте смс уведомления ' +
            'от&nbsp;вашего банка. Если вам не&nbsp;удалось получить информацию о&nbsp;платеже, <a href="https://arsenalpay.ru/support.html#questionModal" class="link link--in-text">напишите нам</a>, укажите сайт, на&nbsp;котором ' +
            'вы&nbsp;оплачивали, дату оплаты, суммы и&nbsp;последние 4 цифры вашей карты.'
        },
        {
          question: 'Какие способы оплаты доступны в&nbsp;интернет-магазине?',
          answer: 'В&nbsp;каждом магазине есть страница с&nbsp;названием &laquo;Способы оплаты&raquo;, на&nbsp;ней ' +
            'перечисленны все способы оплаты, которые принимает магазин. Самый распростаненный способ&nbsp;&mdash; ' +
            'оплата по&nbsp;карте Visa, MasterCard, Maestro, Мир.'
        },
        {
          question: 'Как оплачивать картой?',
          answer: 'Узнать подробно об&nbsp;оплате картой можно <a href="https://arsenalpay.ru/support.html#instrukciya-oplata-kartoj" class="link link--in-text">в&nbsp;этой инструкции.</a>'
        }
      ]
    },
    {
      title: 'Оплата из-за границы',
      items: [
        {
          question: 'Карты каких стран можно использовать при оплате?',
          answer: 'К&nbsp;оплате принимаются карты Visa, MasterCard, Maestro, Мир, выпущенные в&nbsp;любой стране мира.\n' },
        {
          question: 'Могу&nbsp;ли я&nbsp;сделать заказ находясь за&nbsp;границей?\n',
          answer: 'Да, вы&nbsp;можете делать заказ и&nbsp;оплачивать его, находясь за&nbsp;границей. Некоторые банки в&nbsp;целях ' +
            'безопасности могут блокировать оплату, если вы&nbsp;находитесь не&nbsp;в&nbsp;своей стране. Если такое произошло, свяжитесь ' +
            'с&nbsp;вашим банком.\n'
        }
      ]
    }
  ],
  return: [
    {
      title: 'Возврат средств на&nbsp;карту',
      items: [
        {
          question: 'Вернут&nbsp;ли мне деньги в&nbsp;случае отказа от&nbsp;покупки?',
          answer: 'Отменить оплаченный заказ можно, связавшись с&nbsp;интернет-магазином. Магазин выполнит возврат ' +
            'средств на&nbsp;вашу карту.\n'
        },
        {
          question: 'Каков срок возврата денег за&nbsp;товар?',
          answer: 'Срок возврата денег зависит от&nbsp;вашего банка. После того, как магазин совершит возврат может ' +
            'пройти от&nbsp;1 до&nbsp;3 банковских дней, когда деньги поступят на&nbsp;вашу карту. Если деньги ' +
            'не&nbsp;поступили в&nbsp;течение 3 рабочих дней, свяжитесь с&nbsp;вашим банком. Сделал&nbsp;ли магазин ' +
            'возврат вашей оплаты вы&nbsp;можете узнать <a href="https://arsenalpay.ru/support.html#uznat-o-svoyom-platezhe" class="link link--in-text">здесь.</a>'
        },
        {
          question: 'После возврата товара, деньги не&nbsp;пришли на&nbsp;карту, что делать?',
          answer: '<a href="https://arsenalpay.ru/support.html#questionModal" class="link link--in-text">Напишите нам</a>, укажите на&nbsp;каком сайте оплачивали, дату оплаты, сумму и&nbsp;последние 4 цифры ' +
            'вашей карты. Мы&nbsp;свяжемся с&nbsp;интернет-магазином и&nbsp;решим вопросы.\n'
        },
        {
          question: 'Как узнать сделал&nbsp;ли интернет-магазин возврат?',
          answer: 'Воспользуйтесь функцией <a href="https://arsenalpay.ru/support.html#uznat-o-svoyom-platezhe" class="link link--in-text">&laquo;Узнать о&nbsp;своём платеже&raquo;</a> , и&nbsp;проверьте выполнен&nbsp;ли ' +
            'возврат по&nbsp;вашей транзакции. Если возврат выполнен, деньги будут перечислены на&nbsp;вашу карту. ' +
            'Срок перечисления зависит от&nbsp;вашего банка и&nbsp;обычно составляет до&nbsp;3 рабочих дней. Если ' +
            'вы&nbsp;не&nbsp;смогли проверить выполнен&nbsp;ли возврат по&nbsp;вашему платежу, <a href="https://arsenalpay.ru/support.html#questionModal" class="link link--in-text">напишите нам</a>, укажите ' +
            'на&nbsp;каком сайте оплачивали, дату оплаты, сумму и&nbsp;последние 4 цифры вашей карты.'
        }
      ]
    },
    {
      title: 'Возврат товара',
      items: [
        {
          question: 'Можно&nbsp;ли вернуть купленный товар?',
          answer: 'Согласно постановлению правительства РФ&nbsp;&#8470;&nbsp;55 от&nbsp;19 января 1998&nbsp;г. в&nbsp;случае ' +
            'обнаружения недостатков товара, свойства которого не&nbsp;позволяют устранить их&nbsp;(продовольственные товары, ' +
            'парфюмерно-косметические изделия, товары бытовой химии и&nbsp;другие товары), покупатель вправе отказаться ' +
            'от&nbsp;приобретенного товара и&nbsp;потребовать возврата уплаченной за&nbsp;товар денежной суммы.'
        },
        {
          question: 'Кам можно отменить оплаченый заказ?',
          answer: 'Отменить оплаченный заказ можно, связавшись с&nbsp;интернет-магазином. Магазин выполнит возврат ' +
            'средств на&nbsp;вашу карту.'
        }
      ]
    }
  ],
  delivery: [
    {
      title: 'Доставка товара',
      items: [
        {
          question: 'Как происходит доставка товара?',
          answer: 'В&nbsp;каждом интернет-магазине должен быть раздел &laquo;Доставка&raquo;. В&nbsp;этом разделе ' +
            'описаны все способы доставки, которые осуществляет магазин. Если вы&nbsp;не&nbsp;нашли такой раздел, ' +
            'обратитесь в&nbsp;интернет-магазин за&nbsp;информацией.'
        },
        {
          question: 'Могу&nbsp;ли я&nbsp;быть уверен, что после оплаты картой, мне доставят товар?',
          answer: 'Магазин обязан отправить оплаченный заказ, в&nbsp;противном случае он&nbsp;может быть лишён возможности ' +
            'принимать онлайн-платежи и&nbsp;занесён в&nbsp;чёрный список. За&nbsp;не&nbsp;выполнение обязательств магазин ' +
            'так&nbsp;же будет нести ответственность перед законом РФ.\n'
        }
      ]
    }
  ],
  security: [
    {
      title: 'Безопасность платежей',
      items: [
        {
          question: 'Могу&nbsp;ли я&nbsp;быть уверен в&nbsp;безопасности платежей?',
          answer: 'Ваши данные защищаются по&nbsp;международному стандарту PCI DSS, который разработан платежными ' +
            'системами VISA и&nbsp;MasterCard. ArsenalPay является сертифицированным сервис-провайдером VISA International ' +
            'и&nbsp;MasterCard Worldwide, и&nbsp;выполняет все требования по&nbsp;безопасности платежей. Наш сертификат вы&nbsp;можете ' +
            'скачать <a href="https://arsenalpay.ru/%D0%A1%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82_PCI_DSS.pdf" class="link link--in-text">здесь.</a>\n'
        },
        {
          question: 'Как защищена платежная информация по&nbsp;картам?',
          answer: 'Предоставляемая вами персональная информация (имя, адрес, телефон, email, номер кредитной карты) ' +
            'является конфиденциальной и&nbsp;не&nbsp;подлежит разглашению. Данные вашей кредитной карты передаются ' +
            'только в&nbsp;зашифрованном виде и&nbsp;не&nbsp;сохраняются на&nbsp;нашем сервере. Данные защищаются ' +
            'по&nbsp;международному стандарту PCI DSS, который разработан платежными системами VISA и&nbsp;MasterCard. ' +
            'ArsenalPay является сертифицированным сервис-провайдером VISA International и&nbsp;MasterCard Worldwide, ' +
            'и&nbsp;выполняет все требования по&nbsp;безопасности платежей. Наш сертификат вы&nbsp;можете скачать <a href="https://arsenalpay.ru/%D0%A1%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82_PCI_DSS.pdf" class="link link--in-text">здесь.</a>\n'
        },
        {
          question: 'Безопасно&nbsp;ли запоминать карту для повторной оплаты на&nbsp;сайте?',
          answer: 'Да, это безопасно. Предоставляемая вами персональная информация (имя, адрес, телефон, email, номер карты) ' +
            'является конфиденциальной и&nbsp;не&nbsp;подлежит разглашению. Данные вашей карты передаются только ' +
            'в&nbsp;зашифрованном виде по&nbsp;международному стандарту PCI DSS и&nbsp;не&nbsp;сохраняются на&nbsp;сервере ArsenalPay. ' +
            'Вы&nbsp;можете удалить сохраненную карту в&nbsp;любой момент, воспользовавшись <a href="https://arsenalpay.ru/support.html#udalit-sohranyonnuyu-kartu" class="link link--in-text">этой функцией.</a>\n'
        },
        {
          question: 'Безопасно&nbsp;ли подключать автоплатежи?',
          answer: 'Да, безопасно. Предоставляемая вами персональная информация (имя, адрес, телефон, email, номер карты) ' +
            'является конфиденциальной и&nbsp;не&nbsp;подлежит разглашению. Данные вашей карты передаются только в&nbsp;зашифрованном ' +
            'виде по&nbsp;международному стандарту PCI DSS и&nbsp;не&nbsp;сохраняются на&nbsp;сервере ArsenalPay. ' +
            'Вы&nbsp;можете удалить автоплатёж в&nbsp;любое время, воспользовавшись <a href="" class="link link--in-text">этой инструкцией.</a>'
        }
      ]
    }
  ],
};

const faqSellerData = {
  connection: [
    {
      title: 'Частые вопросы по подключению',
      items: [
        {
          question: 'Что необходимо сделать, чтобы подключить приём платежей через ArsenalPay?',
          answer: ''
        },
        {
          question: 'Какие документы нужны для подключения?',
          answer: ''
        },
        {
          question: 'Что необходимо для подготовки сайта?',
          answer: ''
        },
        {
          question: 'Отправил документы на подключение, какие дальнейшие шаги?',
          answer: ''
        },
        {
          question: 'Как быстро придёт оригинал договора?',
          answer: ''
        },
        {
          question: 'Когда я смогу принимать платежи?',
          answer: ''
        },
        {
          question: 'С какими банками вы работаете?',
          answer: ''
        },
        {
          question: 'Какова стоимость подключения к ArsenalPay?',
          answer: ''
        },
        {
          question: 'Какие страны я могу подключить для приёма платежей?',
          answer: ''
        }
      ]
    },
    {
      title: 'Кого подключаете?',
      items: [
        {
          question: 'Могу ли я подключить приём платежей, если я нерезидент?',
          answer: ''
        },
        {
          question: 'Работаете ли вы с самозанятыми?',
          answer: ''
        },
        {
          question: 'Можно ли подключить сайт с товарами 18+?',
          answer: ''
        },
        {
          question: 'С криптовалютой работаете?',
          answer: ''
        },
        {
          question: 'Сайты знакомств подключатете?',
          answer: ''
        }
      ]
    },
    {
      title: 'Реквизиты',
      items: [
        {
          question: 'Хочу поменять банковские реквизиты, что для этого необходимо?',
          answer: ''
        }
      ]
    }
  ],
  money: [
    {
      title: 'Расчётный счёт',
      items: [
        {
          question: 'Как быстро приходят деньги на расчётный счёт?',
          answer: ''
        },
        {
          question: 'Можно ли переводить деньги не на расчётный счёт, а на карту физлица?',
          answer: ''
        },
        {
          question: 'Как осуществляется перевод денежных средств на банковский расчётный счёт?',
          answer: ''
        },
        {
          question: 'Есть ли лимиты по платежам?',
          answer: ''
        },
        {
          question: 'В какой валюте можно получать выплаты на свой расчётный счёт?',
          answer: ''
        },
        {
          question: 'Как происходит списание комиссии?',
          answer: ''
        }
      ]
    },
    {
      title: 'Отчетность',
      items: [
        {
          question: 'Как получить акты для бухгалтерской отчётности?',
          answer: ''
        },
        {
          question: '',
          answer: 'Что делать, если цифры в актах не сходятся?'
        }
      ]
    },
    {
      title: 'Возвраты',
      items: [
        {
          question: 'При возврате средств клиенту куда возвращаются средства?',
          answer: ''
        },
        {
          question: 'Как вернуть деньги на банковскую карту плательщика?',
          answer: ''
        }
      ]
    },
    {
      title: 'Тарифы',
      items: [
        {
          question: 'Какие у вас тарифы?',
          answer: ''
        }
      ]
    }
  ],
  kassa: [
    {
      title: 'Частые вопросы по онлайн-кассе',
      items: [
        {
          question: 'Входит ли в тариф онлайн-касса?',
          answer: ''
        },
        {
          question: 'У меня есть своя касса, какой тариф будет в таком случае?',
          answer: ''
        },
        {
          question: 'Как я могу убедиться, что данные дошли до налоговой?',
          answer: ''
        },
        {
          question: 'Куда должен приходить чек об оплате?',
          answer: ''
        },
        {
          question: 'Почему не приходит чек об оплате?',
          answer: ''
        }
      ]
    }
  ],
  integration: [
    {
      title: 'Частые вопросы по технической интеграции',
      items: [
        {
          question: 'С какой CMS платформой вы интегрированы?',
          answer: ''
        },
        {
          question: 'Могу ли я протестировать платёжную систему ArsenalPay до заключения договора?',
          answer: ''
        },
        {
          question: 'Где я могу ознакомиться с технической документацией, необходимой для интеграции?',
          answer: ''
        },
        {
          question: 'Сколько времени занимает процесс технической интеграции?',
          answer: ''
        },
        {
          question: 'Как происходит интеграция платежного сервиса ArsenalPay с сайтом компании?',
          answer: ''
        },
        {
          question: 'Какие варианты интеграции существуют?',
          answer: ''
        },
        {
          question: 'Поддерживает ли ArsenalPay возможность оплаты без перехода на сайт платёжной системы?',
          answer: ''
        },
        {
          question: 'Как изменить цвет платёжной формы?',
          answer: ''
        }
      ]
    }
  ],
  payment: [
    {
      title: 'Частые вопросы по платежам',
      items: [
        {
          question: 'Ошибка проверки получателя при оплате на странице результата. Почему не проходит платёж?',
          answer: ''
        },
        {
          question: 'Смогут ли клиенты, находящиеся за пределами России, оплачивать покупки картами?',
          answer: ''
        }
      ]
    }
  ],
  security: [
    {
      title: 'Частые вопросы по безопасности',
      items: [
        {
          question: 'Насколько безопасно проводить платежи через платёжную систему ArsenalPay?',
          answer: ''
        },
        {
          question: 'Необходимо ли мне дополнительно приобретать SSL-сертификат для работы с платёжным виджетом ArsenalPay?',
          answer: ''
        }
      ]
    }
  ],
  account: [
    {
      title: 'Частые вопросы по личному кабинету',
      items: [
        {
          question: 'Не получается войти в личный кабинет.',
          answer: ''
        },
        {
          question: 'Пытаюсь поменять пароль от личного кабинета, но новый пароль не приходит.',
          answer: ''
        }
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
