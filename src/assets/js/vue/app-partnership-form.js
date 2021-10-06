import {reactive} from 'vue/dist/vue.esm-bundler';
import useVuelidate from '@vuelidate/core';
import {required, email, helpers} from '@vuelidate/validators';

export default  {
  setup () {
    const state = reactive({
      name: '',
      email: '',
      commentary: ''
    });
    const rules = {
      name: {
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
          () => `Укажите кореектный email`,
          email,
        )
      },
      commentary: {},
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
    <form action="" method="" @submit.prevent="submit($event)" class="form form--partnership" autocomplete="off" >
      <label for="name" class="form__label">Ваше имя</label>
      <div class="form__row">
        <div class="form__field form__field--full">
          <div class="input" :class="{ error: v$.name.$invalid && v$.name.$dirty}">
            <input id="name" type="text" class="input__field"  v-model="v$.name.$model" @blur="v$.name.$touch" placeholder="Введите выше имя" />
          </div>
        </div>
        <div class="form__message" v-if="v$.name.required.$invalid && v$.name.$dirty">{{ v$.name.required.$message }}</div>
      </div>
      <label for="email" class="form__label">Ваш email</label>
      <div class="form__row">
        <div class="form__field form__field--full">
          <div class="input" :class="{ error: v$.email.$invalid && v$.email.$dirty}">
            <input id="email" type="text" class="input__field"  v-model="v$.email.$model" @blur="v$.email.$touch" placeholder="Введите ваш email" />
          </div>
        </div>
        <div class="form__message" v-if="v$.email.required.$invalid && v$.email.$dirty">{{ v$.email.required.$message }}</div>
        <div class="form__message" v-else-if="v$.email.email.$invalid && v$.email.$dirty">{{ v$.email.email.$message }}</div>
      </div>
      <label for="question" class="form__label">Комментарий</label>
      <div class="form__row">
        <div class="form__field form__field--full">
          <div class="input">
            <textarea  id="commentary" class="input__field" v-model="v$.commentary.$model" placeholder="Введите комментарий" cols="30" rows="12"></textarea>
          </div>
        </div>
      </div>
      <button type="submit" class="form__submit">
        <svg v-if="formSubmitted" class="icon" width="48" height="38">
          <use xlink:href="assets/img/symbol/sprite.svg#loader--lg" />
        </svg>
        <span v-else>Отправить</span>
      </button>
    </form>
  `
}
