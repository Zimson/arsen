export default class Modal {

  constructor(el) {
    this.$el = el;
    this.$el.addEventListener('click', this._close.bind(this));

    this._open();
  }

  _open() {
    this.$el.classList.add('modal--open');
    document.documentElement.classList.add('page--modal-open');
  }

  _close(e) {
    if (e.target.closest('[data-close]')) {
      this.$el.classList.remove('modal--open');
      document.documentElement.classList.remove('page--modal-open');
    }
  }
}
