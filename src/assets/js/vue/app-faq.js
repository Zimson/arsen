const tabsNameMap = {
  payment: 'Оплата',
  return: 'Возврат',
  delivery: 'Доставка',
  security: 'Безопасность'
}

export default  {
  props: {
    data: Object
  },
  data() {
    return {
      activeTab: 0,
      tabsNameMap
    }
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    setTabsName(data) {
      return data.map((item) => {
        return tabsNameMap[item];
      })
    }
  },
  template: `
    <app-tabs-nav :items="setTabsName(Object.keys(data))" v-on:activeTab="setActiveTab($event)"></app-tabs-nav>
    <div v-for="(tab, key, idx) in data" class="faq" :key="key" :style="{display: idx === activeTab ? 'block' : 'none'}">
      <div class="faq__section" v-for="section in tab">
        <h3 class="faq__title">{{section.title}}</h3>
        <div class="faq__item" v-for="item in section.items">
          <b>{{item.question}}</b>
          <p>{{item.answer}}</p>
          <svg  class="icon" width="48" height="38">
            <use xlink:href="assets/img/symbol/sprite.svg#caret" />
          </svg>
        </div>
      </div>
    </div>
  `
}
