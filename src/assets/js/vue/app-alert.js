export default  {
  props: {
    type: String,
    text: String
  },
  template: `
    <article class="alert" :class="type">
      <svg  class="icon" width="48" height="38">
        <use xlink:href="assets/img/symbol/sprite.svg#alert-success" />
      </svg>
      <span class="alert__text">{{ text }}</span>
    </article>
  `
}
