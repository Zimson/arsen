import {createApp, reactive} from 'vue/dist/vue.esm-bundler';
import VCalendar from 'v-calendar';
import VueMask, { VueMaskDirective, VueMaskFilter } from 'v-mask';

import appAlert from './app-alert';
import appResultBox from './app-result-box';
import appModal from './app-modal';
import appDataForm from './app-data-form';
import appSupportForm from './app-support-form';
import appNumericItem from './app-numeric-item';

const app = createApp({
  data () {
    return {
      activeTab: 1,
      activeInnerTab: 1,
      modalContentType: '',
      modal: {
        id: '',
        isOpen: false
      }
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

app.use(VCalendar, {});
// app.use(VueMask);

app.mount('#app');

console.log('app', app);
