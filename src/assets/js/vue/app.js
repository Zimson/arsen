import {createApp, reactive} from 'vue/dist/vue.esm-bundler';
import VCalendar from 'v-calendar';
// import VueMask, { VueMaskDirective, VueMaskFilter } from 'v-mask';

import appAlert from './app-alert';
import appResultBox from './app-result-box';
import appModal from './app-modal';
import appDataForm from './app-data-form';
import appSupportForm from './app-support-form';
import appPartnershipForm from './app-partnership-form';
import appNumericItem from './app-numeric-item';
import appTabsNav from './app-tabs-nav';
import appFaq from './app-faq';
import {faqBuyerData, faqSellerData} from "../../../data/faq";

const app = createApp({
  data () {
    return {
      activeTab: 1,
      activeInnerTab: 1,
      modalContentType: '',
      modalId: '',
      isModalOpen: false,
      faqBuyerData,
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
      this.modalId = id;
      this.isModalOpen = true;
      this.modalContentType = contentType;
    },
    
    closeModal(data) {
      this.modalId = '';
      this.isModalOpen = data;
    }
  },
  
  computed: {}
});

app.component('app-alert', appAlert);
app.component('app-result-box', appResultBox);
app.component('app-modal', appModal);
app.component('app-data-form', appDataForm);
app.component('app-support-form', appSupportForm);
app.component('app-partnership-form', appPartnershipForm);
app.component('app-numeric-item', appNumericItem);
app.component('app-tabs-nav', appTabsNav);
app.component('app-faq', appFaq);

app.use(VCalendar, {});
// app.use(VueMask);

app.mount('#app');
