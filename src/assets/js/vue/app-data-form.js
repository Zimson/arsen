import {reactive} from 'vue/dist/vue.esm-bundler';
import useVuelidate from '@vuelidate/core';
import {required, minLength, maxLength, numeric, helpers} from '@vuelidate/validators';

const formDataMap = {
  payments: {
    title: 'Узнать о своем платеже',
      sumField: 'Введите сумму платежа',
      alert: {success: 'Ваш платёж найден', error: 'Ваш платёж не найден'},
    button: 'Найти платеж'
  },
  findCheck: {
    title: 'Найти свой чек',
      sumField: 'Введите сумму платежа',
      alert: {success: 'Ваш чек найден', error: 'Ваш чек не найден'},
    button: 'Найти чек'
  },
  deleteAutoPayment: {
    title: 'Удалить автоплатеж',
      sumField: 'Введите сумму автоплатежа',
      alert: {success: 'Автоплатёж найден', error: 'Автоплатёж не найден'},
    button: 'Найти автоплатеж'
  },
  deleteSavedCard: {
    title: 'Удалить сохраненную карту',
      sumField: 'Введите сумму последнего платежа',
      alert: {success: 'Сохранённая карта найдена', error: 'Сохранённая карта не найдена'},
    button: 'Найти сохраненную карту'
  }
};

const formResultMap = {
  payments: {
    data: [
      [{title: 'Дата платежа', text: '10.12.2020 23:55 (МСК)'}, {title: 'Статус платежа', text: 'Успешный платеж'}, {title: 'Сайт', text: 'inetvl.ru'}, {title: 'Сумма платежа', text: '1 500 ₽'}],
      [{title: 'Дата платежа', text: '10.12.2020 20:02 (МСК)'}, {title: 'Статус платежа', text: 'Неуспешный платеж'}, {title: 'Сайт', text: 'inetvl.ru'}, {title: 'Сумма платежа', text: '1 500 ₽'}],
      [{title: 'Дата платежа', text: '10.12.2020 14:02 (МСК)'}, {title: 'Статус платежа', text: 'Возврат платежа'}, {title: 'Сайт', text: 'inetvl.ru'}, {title: 'Сумма платежа', text: '1 500 ₽'}, {title: 'Сумма возврата', text: '1 500 ₽'}]
    ],
      error: 'Возможно данные введены неверно, проверьте данные и попробуйте еще раз.'
  },
  findCheck: {
    data: [
      [{title: 'Дата платежа', text: '10.12.2020 14:22'}, {title: 'Ссылка на чек', text: 'https://consumer.1-ofd.ru/#/ticket/5b340eee-d516-40dc-afef-9ebda75c9d82'}],
      [{title: 'Дата платежа', text: '10.12.2020 18:00'}, {title: 'Ссылка на чек', text: 'https://consumer.1-ofd.ru/#/ticket/5b340eee-d516-40dc-afef-9ebda75c9d82'}]
    ],
      error: 'Возможно данные введены неверно, проверьте данные и попробуйте еще раз.'
  },
  deleteAutoPayment: {
    data: [
      [{title: 'Сайт', text: 'inetvl.ru'}, {title: 'Идентификатор', text: '12345678'}],
      [{title: 'Сайт', text: 'inetvl.ru'}, {title: 'Идентификатор', text: '2223333'}]
    ],
      error: 'Возможно данные введены неверно, или этот автоплатёж уже удален.'
  },
  deleteSavedCard: {
    data: [
      [{title: 'Сайт', text: 'inetvl.ru'}, {title: 'Идентификатор', text: '12345678'}],
      [{title: 'Сайт', text: 'inetvl.ru'}, {title: 'Идентификатор', text: '2223333'}]
    ],
      error: 'Возможно данные введены неверно, или эта сохранённая карта уже удалена.'
  }
};

export default  {
  setup () {
    const state = reactive({
      firstNumbers: '',
      lastNumbers: '',
      sum: ''
    });
    const rules = {
      firstNumbers: {
        required: helpers.withMessage(
          () => `Поле обязательно для заполнения`,
          required,
        ),
        numeric: helpers.withMessage(
          () => `Ввести можно только цифры`,
          numeric,
        ),
        minLength: helpers.withMessage(
          ({
             $params
           }) => `Должно быть введено ${$params.min} цифры`,
          minLength(6),
        )
      },
      lastNumbers: {
        required: helpers.withMessage(
          () => `Поле обязательно для заполнения`,
          required,
        ),
        numeric: helpers.withMessage(
          () => `Ввести можно только цифры`,
          numeric,
        ),
        minLength: helpers.withMessage(
          ({
             $params
           }) => `Должно быть введено ${$params.min} цифры`,
          minLength(4),
        )
      },
      sum: {
        required: helpers.withMessage(
          () => `Поле обязательно для заполнения`,
          required,
        ),
        numeric: helpers.withMessage(
          () => `Ввести можно только цифры`,
          numeric,
        )
      }
    }

    const v$ = useVuelidate(rules, state)

    return {name , v$ }
  },
  props: {
    id: String,
    type: String,
    text: String
  },
  data() {
    return {
      formDataMap,
      formResultMap,
      currentData: '',
      formIsValid: false,
      formSubmitted: false,
      formHelpId: ''
    }
  },
  methods: {
    showHelpMessage(id, event) {
      if (this.formHelpId === id) {
        this.formHelpId = '';
        event.target.classList.remove('active');
      } else {
        this.formHelpId = id;
        event.target.classList.add('active');
      }
    },
    submit(data) {
      if (this.v$.$invalid) {
        this.formIsValid = false;
      } else if (!this.v$.$invalid) {
        this.formIsValid = true;
      }

      this.currentData = this.formResultMap[this.id];
      this.formSubmitted = true;

      setTimeout(() => {
        // this.formSubmitted = false;
      }, 1000);

      // setTimeout(() => { this.formSubmitted = false }, 500);
    }
  },
  template: `
    <form action="" method="" @submit.prevent="submit($event)" class="form" >
      <div class="form__label">Введите номер карты</div>
      <div class="form__row">
        <div class="form__field">
          <div class="input" :class="{ error: v$.firstNumbers.$invalid && v$.firstNumbers.$dirty}">
            <input type="text" class="input__field"  v-model="v$.firstNumbers.$model" @blur="v$.firstNumbers.$touch" placeholder="Первые 6 цифр" />
          </div>
        </div>
        <div class="form__field">
          <div class="input" :class="{ error: v$.lastNumbers.$invalid && v$.lastNumbers.$dirty}">
            <input type="text" class="input__field" v-model="v$.lastNumbers.$model" @blur="v$.lastNumbers.$touch" placeholder="Последние 4 цифры"/>
          </div>
        </div>
        <div class="form__message" v-if="v$.firstNumbers.required.$invalid && v$.firstNumbers.$dirty">{{ v$.firstNumbers.required.$message }}</div>
        <div class="form__message" v-else-if="v$.firstNumbers.numeric.$invalid && v$.firstNumbers.$dirty">{{ v$.firstNumbers.numeric.$message }}</div>
        <div class="form__message" v-else-if="v$.firstNumbers.minLength.$invalid && v$.firstNumbers.$dirty">{{ v$.firstNumbers.minLength.$message }}</div>
        <div class="form__message" v-if="v$.lastNumbers.required.$invalid && v$.lastNumbers.$dirty">{{ v$.lastNumbers.required.$message }}</div>
        <div class="form__message" v-else-if="v$.lastNumbers.numeric.$invalid && v$.lastNumbers.$dirty">{{ v$.lastNumbers.numeric.$message }}</div>
        <div class="form__message" v-else-if="v$.lastNumbers.minLength.$invalid && v$.lastNumbers.$dirty">{{ v$.lastNumbers.minLength.$message }}</div>
      </div>
      <div class="form__label">Введите сумму автоплатежа</div>
      <div class="form__row form__row--help">
        <div class="form__field">
          <div class="input input--sum" :class="{ error: v$.sum.$invalid && v$.sum.$dirty}">
            <input type="text" class="input__field" v-model="v$.sum.$model" @blur="v$.sum.$touch" placeholder="Сумма"/>
          </div>
        </div>
        <button type="button" class="form__help" @click="showHelpMessage('sumHelp', $event)">?</button>
        <div class="form__message" v-if="v$.sum.required.$invalid && v$.sum.$dirty">{{ v$.sum.required.$message }}</div>
        <div class="form__message" v-else-if="v$.sum.numeric.$invalid && v$.sum.$dirty">{{ v$.sum.numeric.$message }}</div>
        <div class="form__message" v-if="formHelpId === 'sumHelp'">Даные о платеже можно взять из мобильного приложения вашего банка или из смс от банка.</div>
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

      <button type="submit" class="form__submit">
        <svg v-if="formSubmitted" class="icon" width="48" height="38">
          <use xlink:href="assets/img/symbol/sprite.svg#loader--lg" />
        </svg>
        <span v-else>{{formDataMap[id].button}}</span>
      </button>
      <div class="form__alert">
        <app-alert v-if="formSubmitted && !formIsValid" type="error" :text="formDataMap[id].alert.error"></app-alert>
        <app-alert v-if="formSubmitted && formIsValid && currentData" type="success" :text="formDataMap[id].alert.success"></app-alert>
      </div>
      <app-result-box :id="id"  v-if="formSubmitted && formIsValid" v-for="items in currentData.data" :items="items" type="success"></app-result-box>
      <app-result-box  v-if="formSubmitted && !formIsValid" :id="id" :errorText="currentData.error"  type="error"></app-result-box>
    </form>
  `
}
