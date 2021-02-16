export default class MobileNav {

  constructor() {
    this.$el = document.querySelector('.mobile-nav');
    this.$el.addEventListener('click', this._close.bind(this));

    this._open();
  }

  _open() {
    document.documentElement.classList.add('page--mobile-nav-open');
  }

  _close(e) {
    if (e.target.hasAttribute(['data-mobile-close'])) {
      document.documentElement.classList.remove('page--mobile-nav-open');
    }
  }
}
