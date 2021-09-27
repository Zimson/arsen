import * as Stickyfill from 'stickyfilljs';

const STORAGE_KEY = 'cookiesAgreement';
const STORAGE_TOKEN = 'ok';
const STORAGE_ERROR = 'LocalStorage does not available';

const HIDING_CLASS = 'js-hide';

export default class CookiesAgreementNotifier {
  constructor() {
    this.$el = document.getElementById('cookies-agreement');
    this.$storage = window.localStorage;
    
    this._init();
    this._showIfNeeded();
  }
  
  _init() {
    Stickyfill.add(this.$el);
    this.$el.addEventListener('click', this._applyAgreement.bind(this));
  }

  _showIfNeeded() {
    let cookiesAgreement;
    
    try {
      cookiesAgreement = this.$storage.getItem(STORAGE_KEY);
    } catch (error) {
      console.error(STORAGE_ERROR);
      console.error(error);
    }
    
    if (STORAGE_TOKEN !== cookiesAgreement) {
      this.$el.classList.remove(HIDING_CLASS);
    }
  }
  
  _hide() {
    this.$el.classList.add(HIDING_CLASS);
  }
  
  _applyAgreement(event) {
    if ('agreement-btn' === event.target.id) {
      try {
        this.$storage.setItem(STORAGE_KEY, STORAGE_TOKEN);
      } catch (error) {
        console.error(STORAGE_ERROR);
        console.error(error);
        
        return;
      }
      
      this._hide();
    }
  }
}
