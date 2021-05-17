import {createApp, reactive} from 'vue/dist/vue.esm-bundler';
import VCalendar from 'v-calendar';
import VueMask, { VueMaskDirective, VueMaskFilter } from 'v-mask';

import appAlert from './app-alert';
import appResultBox from './app-result-box';
import appModal from './app-modal';

const app = createApp({
  data () {
    return {
      activeTab: 1,
      activeInnerTab: 1,
      modal: {
        id: 'DS',
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
    showModal(id) {
      this.modal = Object.assign(this.modal, {
        id: id,
        isOpen: true
      })
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

app.use(VCalendar, {});
// app.use(VueMask);

app.mount('#app');

console.log('app', app);
