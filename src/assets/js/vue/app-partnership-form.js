import {reactive} from 'vue/dist/vue.esm-bundler';
import useVuelidate from '@vuelidate/core';
import {required, email, helpers} from '@vuelidate/validators';

import ApiService from "../services/ApiService";

export default {
  setup() {
    const state = reactive({
      contact: '',
      email: '',
      commentary: ''
    });
    const rules = {
      contact: {
        required: helpers.withMessage(
          () => `Поле обязательно для заполнения`,
          required,
        ),
      },
      email: {
        required: helpers.withMessage(
          () => `Поле обязательно для заполнения`,
          required,
        ),
        email: helpers.withMessage(
          () => `Укажите корректный email`,
          email,
        )
      },
      commentary: {},
    }
    
    const v8n = useVuelidate(rules, state)
    
    return {name, v8n}
  },
  
  props: {
    id: String,
    type: String,
    text: String
  },
  
  data() {
    return {
      formSubmitted: false,
      resultMessage: '',
    }
  },
  
  methods: {
    submit() {
      const {v8n, ip} = this;
      const {$invalid, contact, email, commentary} = v8n;
      
      v8n.$touch();
      
      if ($invalid) {
        return;
      }
      
      this.formSubmitted = true;
      
      const body = {
        ip,
        email: email.$model,
        contact: contact.$model,
        comment: commentary.$model,
        action: 2,
      };
      
      ApiService.sendPartnershipRequest({body})
        .then(resultMessage => {
          if (resultMessage.toLowerCase().includes('ваше сообщение отправлено')) {
            this.resultMessage = 'Ваша заявка успешно отправлена.\nМы свяжемся с вами для заключения договора в ближайшее время.'
  
  
            if (window.yaCounter28148454) {
              window.yaCounter28148454.reachGoal("AgentSendRequest");
            }
            
            if (window.ga) {
              window.ga("send", "event", "form", "agent", "AgentSendRequest");
            }
            
            return;
          }
          
          throw new Error(resultMessage.toString());
        })
        .catch(error => {
          this.resultMessage = 'Что-то пошло не так.\nПопробуйте отправить заявку ещё раз.'
          console.error(error);
        });
    }
  },
  
  mounted() {
    ApiService.getIp()
      .then(ip => {this.ip = ip;})
      .catch(error => console.error(error));
    
    if (window.yaCounter28148454) {
      window.yaCounter28148454.reachGoal('AgentButtonFillRequest');
    }
  
    if (window.ga) {
      window.ga('send', 'event', 'button', 'agent', 'AgentButtonFillRequest');
    }
  },
  
  template: `
      <div v-if="!!resultMessage.length" class="form__result-message">{{resultMessage}}</div>
      <form v-else method="" @submit.prevent="submit($event)" class="form form--partnership" autocomplete="off">
        <label for="contact" class="form__label">Ваше имя</label>
        <div class="form__row">
          <div class="form__field form__field--full">
            <div class="input">
              <input id="contact" name="contact" type="text" class="input__field" v-model="v8n.contact.$model"
                     @blur="v8n.contact.$touch" placeholder="Введите выше имя" :disabled="formSubmitted"/>
            </div>
          </div>
          <div class="form__message" v-if="v8n.contact.required.$invalid && v8n.contact.$dirty">
            {{ v8n.contact.required.$message }}
          </div>
        </div>
        <label for="email" class="form__label">Ваш email</label>
        <div class="form__row">
          <div class="form__field form__field--full">
            <div class="input">
              <input id="email" name="email" type="text" class="input__field" v-model="v8n.email.$model"
                     @blur="v8n.email.$touch" placeholder="Введите ваш email" :disabled="formSubmitted"/>
            </div>
          </div>
          <div class="form__message" v-if="v8n.email.required.$invalid && v8n.email.$dirty" :disabled="formSubmitted">
            {{ v8n.email.required.$message }}
          </div>
          <div class="form__message" v-else-if="v8n.email.email.$invalid && v8n.email.$dirty">
            {{ v8n.email.email.$message }}
          </div>
        </div>
        <label for="commentary" class="form__label">Комментарий</label>
        <div class="form__row">
          <div class="form__field form__field--full">
            <div class="input">
              <textarea id="commentary" name="commentary" class="input__field" v-model="v8n.commentary.$model"
                        placeholder="Введите комментарий" cols="30" rows="12" :disabled="formSubmitted"></textarea>
            </div>
          </div>
        </div>
        <button type="submit"
                :class="{'form__submit': true, 'form__submit--partnership': true, 'form__submit--with-loader': !!formSubmitted}"
                :disabled="formSubmitted">
          <img v-if="formSubmitted" src="assets/img/svg/loader--lg.svg" class="icon form__submit__loader" width="48" height="36" />
          <span v-else>Отправить</span>
        </button>
      </form>
  `
}
