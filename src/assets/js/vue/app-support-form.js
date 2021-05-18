import {reactive} from 'vue/dist/vue.esm-bundler';
import useVuelidate from '@vuelidate/core';
import {required, minLength, numeric, email, helpers} from '@vuelidate/validators';

export default  {
  setup () {
    const state = reactive({
      email: '',
      question: ''
    });
    const rules = {
      email: {
        required: helpers.withMessage(
          () => `Поле обязательно для заполнения`,
          required,
        ),
        email: helpers.withMessage(
          () => `Укажите кореектный email`,
          email,
        )
      },
      question: {
        required: helpers.withMessage(
          () => `Поле обязательно для заполнения`,
          required,
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
      formIsValid: false,
      formSubmitted: false
    }
  },
  methods: {
    submit(data) {
      if (this.v$.$invalid) {
        this.formIsValid = false;
      } else if (!this.v$.$invalid) {
        this.formIsValid = true;
      }

      this.formSubmitted = true;

      setTimeout(() => {
        // this.formSubmitted = false;
      }, 1000);
    }
  },
  template: `
    <form action="" method="" @submit.prevent="submit($event)" class="form" autocomplete="off" >
      <label for="email" class="form__label">Ваш email</label>
      <div class="form__row">
        <div class="form__field form__field--full">
          <div class="input" :class="{ error: v$.email.$invalid && v$.email.$dirty}">
            <input id="email" type="text" class="input__field"  v-model="v$.email.$model" @blur="v$.email.$touch" placeholder="Введите Ваш email" />
          </div>
        </div>
        <div class="form__message" v-if="v$.email.required.$invalid && v$.email.$dirty">{{ v$.email.required.$message }}</div>
        <div class="form__message" v-else-if="v$.email.email.$invalid && v$.email.$dirty">{{ v$.email.email.$message }}</div>
      </div>
      <label for="question" class="form__label">Ваш вопрос</label>
      <div class="form__row">
        <div class="form__field form__field--full">
          <div class="input" :class="{ error: v$.question.$invalid && v$.question.$dirty}">
            <textarea  id="question" class="input__field" v-model="v$.question.$model" @blur="v$.question.$touch" placeholder="Введите вопрос" cols="30" rows="6"></textarea>
          </div>
        </div>
        <div class="form__message" v-if="v$.question.required.$invalid && v$.question.$dirty">{{ v$.question.required.$message }}</div>
      </div>
      <button type="submit" class="form__submit">
        <svg v-if="formSubmitted" class="icon" width="48" height="38">
          <use xlink:href="assets/img/symbol/sprite.svg#loader--lg" />
        </svg>
        <span v-else>Отправить</span>
      </button>
<!--      <div class="form__alert">-->
<!--        <app-alert v-if="formSubmitted && !formIsValid" type="error" :text="formDataMap[id].alert.error"></app-alert>-->
<!--        <app-alert v-if="formSubmitted && formIsValid && currentData" type="success" :text="formDataMap[id].alert.success"></app-alert>-->
<!--      </div>-->
    </form>
  `
}
