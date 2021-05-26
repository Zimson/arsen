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
  computed: {
    caret() {
      return `assets/img/symbol/sprite.svg#caret-${this.activeItem ? 'up' : 'down'}`;
    }
  },
  template: `
    <app-tabs-nav :items="setTabsName(Object.keys(data))" v-on:activeTab="setActiveTab($event)"></app-tabs-nav>
    <div v-for="(tab, key, idx) in data" class="faq" :key="key" :style="{display: idx === activeTab ? 'block' : 'none'}">
      <div class="faq__section" v-for="section in tab">
        <h3 class="faq__title" v-html="section.title"></h3>
        <div class="faq__item" v-for="item in section.items" :class="{'faq__item--active': activeItem === item}" @click="setActiveItem(item)" :key="item">
          <div class="faq__item-header">
            <b v-html="item.question"></b>
<!--            <svg  class="icon" width="48" height="38">-->
<!--              <use :xlink:href="caret" />-->
<!--            </svg>-->
          </div>
          <template v-if="Array.isArray(item.answer)">
            <p v-for="text in item.answer" v-if="activeItem === item" v-html="text" :key="text"></p>
          </template>
          <template v-else>
            <p v-if="activeItem === item" v-html="item.answer"></p> 
          </template>
        </div>
      </div>
    </div>
  `
}
