export default {
  props: {
    id: String,
    items: Array,
    errorText: String,
    type: String
  },
  template: `
    <article class="result-box" :class="{success: items && items.length, error:  errorText}">
      <dl class="result-box__main">
        <template v-if="items && items.length" v-for="item in items" :key="item">
          <dt>{{item.title}}</dt>
          <dd>{{item.text}}</dd>
        </template>
        <p v-if="!items && errorText" class="result-box__text">{{ errorText }}</p>
      </dl>
      <button type="button" class="result-box__btn" v-if="(items && items.length) && (id === 'deleteAutoPayment') || (items && items.length) && (id === 'deleteSavedCard')">Удалить</button>
    </article>
  `
}
