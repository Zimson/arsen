import {createApp, reactive} from 'vue/dist/vue.esm-bundler';
import VCalendar from 'v-calendar';
// import VueMask, { VueMaskDirective, VueMaskFilter } from 'v-mask';

import AppModal from './app-modal';
import appAlert from './app-alert';
import appResultBox from './app-result-box';
import appDataForm from './app-data-form';
import appSupportForm from './app-support-form';
import appPartnershipModal from './app-partnership-modal';
import appNumericItem from './app-numeric-item';
import appTabsNav from './app-tabs-nav';
import appFaq from './app-faq';
import {faqBuyerData, faqSellerData} from "../../../data/faq";
import HistoryService from "../services/HistoryService";

let prevHash;

const app = createApp({
  data() {
    return {
      activeTab: 1,
      activeInnerTab: 1,
      modalId: '',
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
    
    showModal(id) {
      if (!id) {
        return;
      }
      
      this.modalId = id;
      
      const {hash, pathname} = HistoryService.location;
      
      if (!hash || !Object.values(AppModal.modalHashes).find(mHash => mHash === hash.replace('#', ''))) {
        prevHash = AppModal.modalToHash[id];
        HistoryService.push(pathname + '#' + AppModal.modalToHash[id]);
      }
    },
    
    closeModal() {
      this.modalId = '';
      
      prevHash = undefined;
      HistoryService.replace({pathname: HistoryService.location.pathname, hash: undefined});
    },
  },
  
  computed: {
    modalIds() {
      return AppModal.modalIds;
    },
  },
  
  mounted() {
    const {hash} = HistoryService.location;
 
    if (hash) {
      const curHash = hash.replace('#', '');
      
      if (!!Object.values(AppModal.modalHashes).find(mHash => mHash === curHash)) {
        prevHash = curHash;
        this.showModal(AppModal.hashToModal[curHash]);
      }
    }
    
    this.unlistenHistory = HistoryService.listen(({location}) => {
      const {hash} = location;
      const curHash = hash ? hash.replace('#', '') : undefined;
      const hashes = Object.values(AppModal.modalHashes);
      const isModalPrevHash = !!hashes.find(hash => hash === prevHash);
      
      if (isModalPrevHash && this.modalId && !curHash) {
        this.closeModal();
      } else if (curHash && !isModalPrevHash && !this.modalId) {
        this.showModal(AppModal.hashToModal[curHash]);
      }
    });
  },
  
  unmounted() {
    this.unlistenHistory();
  },
  
});

app.component('app-alert', appAlert);
app.component('app-result-box', appResultBox);
app.component('app-data-form', appDataForm);
app.component('app-support-form', appSupportForm);
app.component('app-partnership-modal', appPartnershipModal);
app.component('app-numeric-item', appNumericItem);
app.component('app-tabs-nav', appTabsNav);
app.component('app-faq', appFaq);

app.use(VCalendar, {});

app.mount('#app');
