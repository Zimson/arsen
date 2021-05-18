export default  {
  props: {
    title: String,
    text: String,
    order: String
  },
  computed: {
    icon() {
      return `assets/img/symbol/sprite.svg#number-${this.order}`;
    }
  },
  template: `
    <article class="numeric-item">
      <svg  class="icon icon--purple" width="37" height="37">
        <use :xlink:href="icon"  />
      </svg>
      <b class="numeric-item__title">{{ title }}</b>
      <p v-if="text" class="numeric-item__text" v-html="text"></p>
    </article>
  `
}
