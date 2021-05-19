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
      title: 'Частые вопросы по&nbsp;подключению',
      items: [
        {
          question: 'Что необходимо сделать, чтобы подключить приём платежей через ArsenalPay?',
          answer: [
            'Для подключения приёма платежей на&nbsp;сайте необходимо зарегистрироваться на&nbsp;нашем сайте. ' +
            'Вы&nbsp;попадете в&nbsp;личный кабинет, где описаны все шаги по&nbsp;подключению. После регистрации ' +
            'вы&nbsp;сразу сможете установить виджет оплаты на&nbsp;свой сайт и&nbsp;проводить тестовые платежи. ' +
            'С&nbsp;полной информацией по&nbsp;подключению можно ознакомиться <a href="https://arsenalpay.ru/documentation/index.html#nachat-priem-platezhej" class="link link--in-text">в&nbsp;документации.</a>',
            'Для подключения платежей в&nbsp;Instagram или без сайта необходимо зарегистрироваться на&nbsp;нашем сайте. ' +
            'Вы&nbsp;попадете в&nbsp;личный кабинет, где описаны все шаги по&nbsp;подключению. После регистрации вы&nbsp;сразу ' +
            'сможете настроить свою страницу оплаты. С&nbsp;полной информацией по&nbsp;подключению можно ознакомиться <a href="https://arsenalpay.ru/priem-platezhej-v-instagram.html" class="link link--in-text">здесь.</a>'
          ]
        },
        {
          question: 'Какие документы нужны для подключения?',
          answer: 'Ознакомиться с&nbsp;полным списком документов можно ' +
            '<a href="https://arsenalpay.ru/documentation/index.html#dokumenty-dlya-dogovora" class="link link--in-text">в&nbsp;документации.</a>'
        },
        {
          question: 'Что необходимо для подготовки сайта?',
          answer: 'Сайт необходимо подготовить согласно требованиям международных платежных систем. ' +
            'С требованиями можете ознакомиться <a href="https://arsenalpay.ru/documentation/index.html#podgotovka-sajta" class="link link--in-text">в документации.</a>'
        },
        {
          question: 'Отправил документы на&nbsp;подключение, какие дальнейшие шаги?',
          answer: 'Документы и&nbsp;сайт вашей компании будут проверены. В&nbsp;случае соответствия всем требованиям ' +
            'переходим к&nbsp;приёму платежей.'
        },
        {
          question: 'Как быстро придёт оригинал договора?',
          answer: 'Отправка документов происходит из&nbsp;Москвы. Как быстро к&nbsp;вам придут документы, зависит от&nbsp;вашего региона.'
        },
        {
          question: 'Когда я&nbsp;смогу принимать платежи?',
          answer: 'Срок подключения зависит от&nbsp;того, как быстро вы&nbsp;пришлете полный <a href="https://arsenalpay.ru/documentation/index.html#dokumenty-dlya-dogovora" class="link link--in-text">список документов</a> и&nbsp;подготовите ' +
            'свой сайт согласно <a href="https://arsenalpay.ru/documentation/index.html#podgotovka-sajta" class="link link--in-text">требованиям</a>. Обычно после этого вы&nbsp;сможете начать приём платежей в&nbsp;течение 5 рабочих дней.'
        },
        {
          question: 'С&nbsp;какими банками вы&nbsp;работаете?',
          answer: 'Мы&nbsp;работаем со&nbsp;всеми банками России. Деньги переводятся на&nbsp;расчетный счет вашей ' +
            'компании, открытый в&nbsp;любом банке России. Открывать новый расчетный счет в&nbsp;каком-то конкретном банке не&nbsp;требуется.'
        },
        {
          question: 'Какова стоимость подключения к&nbsp;ArsenalPay?',
          answer: 'Подключение бесплатно. Вы&nbsp;платите только комиссию за&nbsp;успешный платеж и&nbsp;фискальный чек. ' +
            'Комиссия прописывается в&nbsp;договоре. Ничего, кроме этой комиссии, вы&nbsp;не&nbsp;платите.'
        },
        {
          question: 'Какие страны я&nbsp;могу подключить для приёма платежей?',
          answer: 'К&nbsp;подключению доступны все страны мира, но&nbsp;в&nbsp;некоторых случаях список стран, доступный ' +
            'для приема платежей, будет зависеть от&nbsp;вашего вида деятельности и&nbsp;степени риска.'
        }
      ]
    },
    {
      title: 'Кого подключаете?',
      items: [
        {
          question: 'Могу&nbsp;ли я&nbsp;подключить приём платежей, если я&nbsp;нерезидент?',
          answer: 'Мы&nbsp;работаем с&nbsp;компаниями и&nbsp;индивидуальными предпринимателями, зарегистрированными в&nbsp;России.'
        },
        {
          question: 'Работаете&nbsp;ли вы&nbsp;с&nbsp;самозанятыми?',
          answer: 'Да, с самозанятыми работаем, просто  <a href="https://arsenalpay.ru/dashboard/registration-type" class="link link--in-text">подключитесь</a> к нашему сервису и выполните инструкции в личном кабинете.'
        },
        {
          question: 'Можно&nbsp;ли подключить сайт с&nbsp;товарами 18+?',
          answer: 'Рассмотрение происходит в&nbsp;индивидуальном порядке. Не&nbsp;принимаются сайты с&nbsp;видео, фото ' +
            'контентом, а&nbsp;также эскорт услуги и&nbsp;сайты знакомств.'
        },
        {
          question: 'С&nbsp;криптовалютой работаете?',
          answer: 'Мы&nbsp;не&nbsp;работаем с&nbsp;криптовалютой.'
        },
        {
          question: 'Сайты знакомств подключатете?',
          answer: 'Мы&nbsp;не&nbsp;подключаем сайты знакомств.'
        }
      ]
    },
    {
      title: 'Реквизиты',
      items: [
        {
          question: 'Хочу поменять банковские реквизиты, что для этого необходимо?',
          answer: 'Для изменения реквизитов необходимо заполнить заявление и&nbsp;выслать подписанный скан на&nbsp;pay@arsenalpay.ru. ' +
            'Форму заявления запросите у&nbsp;личного менеджера.\n'
        }
      ]
    }
  ],
  money: [
    {
      title: 'Расчётный счёт',
      items: [
        {
          question: 'Как быстро приходят деньги на&nbsp;расчётный счёт?',
          answer: 'Деньги на&nbsp;расчётный счёт поступают каждый рабочий день.'
        },
        {
          question: 'Можно&nbsp;ли переводить деньги не&nbsp;на&nbsp;расчётный счёт, а&nbsp;на&nbsp;карту физлица?',
          answer: 'Средства перечисляются только на&nbsp;расчетный счёт компании. На&nbsp;карты физических лиц деньги не&nbsp;перечисляются.'
        },
        {
          question: 'Как осуществляется перевод денежных средств на&nbsp;банковский расчётный счёт?',
          answer: 'Деньги переводятся на&nbsp;ваш расчётный счёт обычным банковским переводом.'
        },
        {
          question: 'Есть&nbsp;ли лимиты по&nbsp;платежам?',
          answer: 'Ограничений на&nbsp;количество и&nbsp;сумму платежей для интернет-магазинов нет.'
        },
        {
          question: 'В&nbsp;какой валюте можно получать выплаты на&nbsp;свой расчётный счёт?',
          answer: 'Перечисление на&nbsp;расчётный счёт компании происходит в&nbsp;рублях. ' +
            'Для валютных карт сумма операции будет конвертирована в&nbsp;рубли банком-эмитентом карты по&nbsp;курсу этого банка.'
        },
        {
          question: 'Как происходит списание комиссии?',
          answer: 'Принятые платежи перечисляются банком на&nbsp;расчётный счёт вашей компании за&nbsp;минусом комиссии.'
        }
      ]
    },
    {
      title: 'Отчетность',
      items: [
        {
          question: 'Как получить акты для бухгалтерской отчётности?',
          answer: 'Отчетность предоставляет банк-партнер по&nbsp;запросу. Для этого необходимо заполнить заявление ' +
            'и&nbsp;выслать подписанный скан на&nbsp;pay@arsenalpay.ru. Форму заявления запросите у&nbsp;личного менеджера.'
        },
        {
          question: 'Что делать, если цифры в&nbsp;актах не&nbsp;сходятся?',
          answer: 'Напишите на&nbsp;pay@arsenalpay.ru, мы&nbsp;обязательно разберёмся.'
        }
      ]
    },
    {
      title: 'Возвраты',
      items: [
        {
          question: 'При возврате средств клиенту куда возвращаются средства?',
          answer: 'Возврат денежных средств происходит строго ну&nbsp;ту&nbsp;карту, с&nbsp;которой был произведен платеж.'
        },
        {
          question: 'Как вернуть деньги на&nbsp;банковскую карту плательщика?',
          answer: 'В&nbsp;личном кабинете найдите транзакцию, нажмите кнопку &laquo;Возврат&raquo; и&nbsp;введите сумму возврата. После этого деньги будут возвращены на&nbsp;карту клиента.'
        }
      ]
    },
    {
      title: 'Тарифы',
      items: [
        {
          question: 'Какие у&nbsp;вас тарифы?',
          answer: 'С&nbsp;тарифами можно ознакомиться <a href="https://arsenalpay.ru/tariffs.html" class="link link--in-text">здесь</a>. ' +
            'Тарифы указаны полностью, никакой абонентской платы, скрытых комиссий и&nbsp;дополнительных расходов.'
        }
      ]
    }
  ],
  kassa: [
    {
      title: 'Частые вопросы по&nbsp;онлайн-кассе',
      items: [
        {
          question: 'Входит&nbsp;ли в&nbsp;тариф онлайн-касса?',
          answer: 'Да, входит. Вы&nbsp;платите комиссию за&nbsp;каждый успешный платеж и&nbsp;за&nbsp;чек платежа, ' +
            'больше не&nbsp;платите ничего. <a href="https://arsenalpay.ru/tariffs.html" class="link link--in-text">Информация о&nbsp;тарифах.</a>'
        },
        {
          question: 'У&nbsp;меня есть своя касса, какой тариф будет в&nbsp;таком случае?',
          answer: 'В&nbsp;этом случае вы&nbsp;оплачиваете только комиссию за&nbsp;успешный платеж. <a href="https://arsenalpay.ru/tariffs.html" class="link link--in-text">Информация о&nbsp;тарифах.</a>'
        },
        {
          question: 'Как я&nbsp;могу убедиться, что данные дошли до&nbsp;налоговой?',
          answer: 'Каждый платёж фискализирован, вы&nbsp;можете проверить чек на&nbsp;сайте ОФД. Если он&nbsp;есть ' +
            'на&nbsp;сайте ОФД, значит он&nbsp;дошёл до&nbsp;ФНС.'
        },
        {
          question: 'Куда должен приходить чек об&nbsp;оплате?',
          answer: 'Фискальный чек приходит на&nbsp;email вашего клиента. Информация о&nbsp;платеже поступает через ОФД в&nbsp;налоговую.' +
            ' Все чеки сохраняются в&nbsp;вашем личном кабинете, вы&nbsp;сможете найти и&nbsp;посмотреть любой чек.'
        },
        {
          question: 'Почему не&nbsp;приходит чек об&nbsp;оплате?',
          answer: 'Чек может не&nbsp;прийти по&nbsp;нескольким причинам: чек может попасть в&nbsp;спам, email для чека мог быть указан неверно, ' +
            'чек может прийти не&nbsp;сразу, а&nbsp;спустя какое-то время. Чеки по&nbsp;всем платежам сохраняются в&nbsp;вашем <a href="https://arsenalpay.ru/dashboard/login" class="link link--in-text">личном кабинете</a>, ' +
            'вы&nbsp;можете найти и&nbsp;отправить чек клиенту. Также ваш клиент может сам воспользоваться функцией <a href="https://arsenalpay.ru/support.html#najti-svoj-chek" class="link link--in-text">поиска чека</a>.'
        }
      ]
    }
  ],
  integration: [
    {
      title: 'Частые вопросы по&nbsp;технической интеграции',
      items: [
        {
          question: 'С&nbsp;какой CMS платформой вы&nbsp;интегрированы?',
          answer: 'Список всех платформ можно посмотреть в&nbsp;разделе для <a href="https://arsenalpay.ru/developers.html#gotovye-cms-plaginy" class="link link--in-text">разработчиков</a>. Если вы&nbsp;не&nbsp;нашли ' +
            'своей платформы, напишите нам и&nbsp;мы&nbsp;интегрируемся с&nbsp;ней.'
        },
        {
          question: 'Могу&nbsp;ли я&nbsp;протестировать платёжную систему ArsenalPay до&nbsp;заключения договора?',
          answer: 'Да, можете. Для этого необходимо зарегистрироваться <a href="https://arsenalpay.ru/dashboard/registration-type" class="link link--in-text">в&nbsp;личном кабинете</a>. После регистрации, ' +
            'вы&nbsp;сможете разместить платежный виджет на&nbsp;ваш сайт, проводить тестовые транзакции, получать тестовые чеки.'
        },
        {
          question: 'Где я&nbsp;могу ознакомиться с&nbsp;технической документацией, необходимой для интеграции?',
          answer: 'Подробная информация по&nbsp;интеграции собрана в&nbsp;разделе <a href="" class="link link--in-text">&laquo;Документация&raquo;</a>.'
        },
        {
          question: 'Сколько времени занимает процесс технической интеграции?',
          answer: 'Если ваш сайт создан на&nbsp;одной из&nbsp;популярных <a href="https://arsenalpay.ru/developers.html#gotovye-cms-plaginy" class="link link--in-text">CMS платформ</a>, процесс интеграции (настройки готового модуля) ' +
            'займет не&nbsp;больше 5&nbsp;минут. Для остальных сайтов необходимо <a href="https://arsenalpay.ru/documentation/index.html#scenarii-integracii" class="link link--in-text">разместить код виджета</a> на&nbsp;сайте, это занимает ' +
            'не&nbsp;больше 15&nbsp;минут. Для <a href="https://arsenalpay.ru/priem-platezhej-v-instagram.html" class="link link--in-text">приема платежей в&nbsp;Instagram</a> или без сайта интеграция не&nbsp;требуется.'
        },
        {
          question: 'Как происходит интеграция платежного сервиса ArsenalPay с&nbsp;сайтом компании?',
          answer: 'При регистрации в&nbsp;личном кабинете вы&nbsp;получаете код виджета оплаты и&nbsp;все необходимые ' +
            'данные для настройки. Если ваш сайт создан на&nbsp;одной из&nbsp;популярных <a href="https://arsenalpay.ru/developers.html#gotovye-cms-plaginy" class="link link--in-text">CMS платформ</a>, вам необходимо скачать ' +
            'модуль ArsenalPay для вашей платформы и&nbsp;настроить его, используя данные из&nbsp;личного кабинета. ' +
            'Настройка занимает не&nbsp;более 5&nbsp;минут. Для остальных сайтов необходимо <a href="https://arsenalpay.ru/documentation/index.html#scenarii-integracii" class="link link--in-text">разместить на&nbsp;сайте</a> код виджета, ' +
            'полученный в&nbsp;личном кабинете и&nbsp;настроить передачу параметров для приема платежей и&nbsp;онлайн-кассы. ' +
            'Подробно, все способы интеграции описаны в&nbsp;разделе <a href="https://arsenalpay.ru/developers.html" class="link link--in-text">&laquo;Разработчикам&raquo;.</a>'
        },
        {
          question: 'Какие варианты интеграции существуют?',
          answer: 'Подробно, все варианты интеграции описаны в&nbsp;разделе <a href="https://arsenalpay.ru/developers.html" class="link link--in-text">&laquo;Разработчикам&raquo;</a>.'
        },
        {
          question: 'Поддерживает&nbsp;ли ArsenalPay возможность оплаты без перехода на&nbsp;сайт платёжной системы?',
          answer: 'Да, поддерживает. Вы&nbsp;можете встроить виджет оплаты в&nbsp;любое место на&nbsp;сайте и&nbsp;реализовать ' +
            'любую логику появления виджета. Например, отображать виджет на&nbsp;странице корзины, или показывать его ' +
            'во&nbsp;всплывающем окне вашего сайта.'
        },
        {
          question: 'Как изменить цвет платёжной формы?',
          answer: 'Вы&nbsp;можете настроить платежный виджет под цвет вашего сайта в&nbsp;личном кабинете, ' +
            'в&nbsp;разделе &laquo;Виджет оплаты&raquo;. Если изменения не&nbsp;применились, <a href="https://arsenalpay.ru/support.html#questionModal" class="link link--in-text">пришлите нам</a> цвета виджета ' +
            'и&nbsp;мы&nbsp;их&nbsp;применим.'
        }
      ]
    }
  ],
  payment: [
    {
      title: 'Частые вопросы по&nbsp;платежам',
      items: [
        {
          question: 'Ошибка проверки получателя при оплате на&nbsp;странице результата. Почему не&nbsp;проходит платёж?',
          answer: 'Ошибка может происходить по&nbsp;нескольким причинам. Возможно, на&nbsp;вашем сайте не&nbsp;проходит ' +
            'проверка заказа (указывается неверный идентификатор пользователя, сумма или&nbsp;другие параметры заказа). ' +
            'Возможно ваш сайт некорректно отвечает на&nbsp;колбэк check. Проверьте эти варианты ошибок, <a href="https://arsenalpay.ru/support.html#questionModal" class="link link--in-text">напишите нам</a>, ' +
            'если не&nbsp;сможете решить проблему.'
        },
        {
          question: 'Смогут&nbsp;ли клиенты, находящиеся за&nbsp;пределами России, оплачивать покупки картами?',
          answer: 'Да, клиенты с&nbsp;международными картами Visa, MasterCard, Maestro, Мир могут оплачивать покупки ' +
            'через ArsenalPay, находясь в&nbsp;любой точке мира.'
        }
      ]
    }
  ],
  security: [
    {
      title: 'Частые вопросы по&nbsp;безопасности',
      items: [
        {
          question: 'Насколько безопасно проводить платежи через платёжную систему ArsenalPay?',
          answer: 'Ваши данные защищаются по&nbsp;международному стандарту PCI DSS, который разработан платежными системами ' +
            'VISA и&nbsp;MasterCard. ArsenalPay является сертифицированным сервис-провайдером VISA International ' +
            'и&nbsp;MasterCard Worldwide, и&nbsp;выполняет все требования по&nbsp;безопасности платежей. ' +
            'Наш сертификат вы&nbsp;можете скачать <a href="https://arsenalpay.ru/%D0%A1%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82_PCI_DSS.pdf" class="link link--in-text">здесь</a>.'
        },
        {
          question: 'Необходимо&nbsp;ли мне дополнительно приобретать SSL-сертификат для работы с&nbsp;платёжным виджетом ArsenalPay?',
          answer: 'Сайт должен поддерживать защищенное HTTPS соединение по&nbsp;протоколу TLS версии не&nbsp;ниже 1.2 ' +
            'и&nbsp;типом сертификата не&nbsp;ниже SSL123 с&nbsp;действительным сроком действия. Бесплатный SSL сертификат ' +
            'можно получить на&nbsp;сайте letsencrypt.org.'
        }
      ]
    }
  ],
  account: [
    {
      title: 'Частые вопросы по&nbsp;личному кабинету',
      items: [
        {
          question: 'Не&nbsp;получается войти в&nbsp;личный кабинет.',
          answer: 'Возможно вы&nbsp;неверно вводите ваш email или пароль. Убедитесь, что вы&nbsp;зарегистрировали личный ' +
            'кабинет именно на&nbsp;тот email, который вводите. При подключении на&nbsp;этот email вам приходило письмо с&nbsp;паролем. ' +
            'Если вы&nbsp;забыли пароль, нажмите на&nbsp;кнопку &laquo;Забыли пароль?&raquo;. Введите email, который вы&nbsp;использовали ' +
            'при регистрации. На&nbsp;ваш email придет новый пароль. Если пароль не&nbsp;пришел, проверьте в&nbsp;почте папку &laquo;Спам&raquo;. ' +
            'Если вы&nbsp;не&nbsp;можете получить письмо с&nbsp;новым паролем, <a href="https://arsenalpay.ru/support.html#questionModal" class="link link--in-text">напишите нам</a>, укажите ваше имя и&nbsp;ваш сайт.'
        },
        {
          question: 'Пытаюсь поменять пароль от&nbsp;личного кабинета, но&nbsp;новый пароль не&nbsp;приходит.',
          answer: 'Если вы&nbsp;хотите поменять пароль, нажмите на&nbsp;кнопку &laquo;Забыли пароль?&raquo;. ' +
            'Введите email, который вы&nbsp;использовали при регистрации в&nbsp;личном кабинете, письмо с&nbsp;новым ' +
            'паролем придет только на&nbsp;этот email. Убедитесь, что вы&nbsp;вводите верный email. Если пароль не&nbsp;пришел, ' +
            'проверьте в&nbsp;почте папку &laquo;Спам&raquo;. Если вы&nbsp;не&nbsp;можете получить письмо с&nbsp;новым паролем, ' +
            '<a href="https://arsenalpay.ru/support.html#questionModal" class="link link--in-text">напишите нам</a>, укажите ваше имя и&nbsp;сайт.'
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
