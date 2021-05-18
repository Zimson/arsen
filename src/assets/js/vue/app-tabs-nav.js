export default  {
  props: {
    items: Array
  },
  data() {
    return {
      activeTab: 0
    }
  },
  methods: {
    setActiveTab(idx) {
      this.activeTab = idx;
      this.$emit('activeTab', idx);
    }
  },
  template: `
    <ul class="tabs-nav tabs-nav--sm">
      <li v-for="(item, idx) in items" class="tabs-nav__item" :class="{ active: activeTab === idx }"  @click="setActiveTab(idx)">{{item}}</li>
    </ul>
  `
}
