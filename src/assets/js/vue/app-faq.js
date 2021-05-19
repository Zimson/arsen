const tabsNameMap = {
  payment: 'Оплата',
  return: 'Возврат',
  delivery: 'Доставка',
  security: 'Безопасность',
  connection: 'Подключение',
  money: 'Деньги',
  kassa: 'Касса',
  integration: 'Интеграция',
  account: 'Личный кабинет'
}

export default  {
  props: {
    data: Object
  },
  data() {
    return {
      activeTab: 0,
      activeItem: null,
      tabsNameMap
    }
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    setActiveItem(data) {
      this.activeItem = data;
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
        <div class="faq__item" v-for="item in section.items" @click="setActiveItem(item)" :key="item">
          <b v-html="item.question"></b>
          <p v-if="activeItem === item" v-html="item.answer"></p>
          <svg  class="icon" width="48" height="38">
            <use xlink:href="assets/img/symbol/sprite.svg#caret" />
          </svg>
        </div>
      </div>
    </div>
  `
}
