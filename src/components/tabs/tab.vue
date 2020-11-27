<template>
  <div class="tab" :class="[isActive ? 'active-tab' : 'deactive-tab']">
    <span class="tab-title">{{ tab.title }}</span>
    <span class="tab-icon" @click="handleClose">
      <a-icon type="close"></a-icon>
    </span>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Tab",
  props: {
    tab: {
      type: Object,
      required: true,
    },
    currentKey: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.tab.title == this.currentKey;
    },
  },
  methods: {
    handleClose() {
      this.$emit("closeTag", this.tab.title, this.isActive);
    },
  },
});
</script>

<style lang="less" scoped>
@height: 48px;
@padding: 0px 12px;
.tab {
  height: @height;
  padding: @padding;
  display: flex;
  align-items: center;
  max-width: 240px;
  background: #fff;

  > .tab-title {
    height: @height;
    line-height: @height;
    flex: 1;
    cursor: pointer;
    transition: all 100ms;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  > .tab-icon {
    padding: 2px;
    border-radius: 2px;
    display: flex;
  }
  > .tab-icon:hover {
    background: rgb(233, 233, 233);
  }
}
.deactive-tab {
  transition: all 200ms;
  > .tab-icon {
    display: none;
  }
}
.deactive-tab:hover {
  color: #1890ff;
  > .tab-icon {
    display: flex;
  }
}
.active-tab {
  color: #1890ff;
  font-weight: 600;
  border-bottom: 2px #1890ff solid;
  border-radius: 6px 6px 0px 0px;
  z-index: 101;
}
</style>
