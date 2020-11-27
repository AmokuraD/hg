<template>
  <div class="tabs-wrapper">
    <div class="tabs-header" @mousedown="handleMousedown">
      <draggable v-model="tabs">
        <template v-for="tab in tabs">
          <Tab
            :key="tab.title"
            :tab="tab"
            :currentKey="currentKey"
            @closeTag="handleCloseTag"
          ></Tab>
        </template>
      </draggable>
    </div>
    <div class="tabs-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Tab from "./tab";
import draggable from "vuedraggable";
export default Vue.extend({
  name: "Tabs",
  components: {
    Tab,
    draggable,
  },
  props: {
    tabsData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tabs: this.tabsData.slice(),
      currentKey: "tab2",
    };
  },
  methods: {
    handleMousedown(e) {
      const type = e.target.className;
      if (type == "tab-title") {
        this.currentKey = e.target.innerText;
      }
    },
    handleCloseTag(title, isActive) {
      const index = this.tabs.findIndex((item) => item.title == title);
      if (this.tabs.length != 1) {
        if (this.currentKey == title && isActive) {
          this.currentKey =
            index == this.tabs.length - 1
              ? this.tabs[index - 1].title
              : this.tabs[index + 1].title;
        }
        this.tabs.splice(index, 1);
      }
    },
  },
});
</script>

<style lang="less" scoped>
.tabs-wrapper {
  height: 100%;
  width: 100%;
  .tabs-header {
    > * {
      padding: 0px 16px;
      display: flex;
      background: #fff;
      > .tab {
        flex: 1;
      }
    }
  }
}
</style>
