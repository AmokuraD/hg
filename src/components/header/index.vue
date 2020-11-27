<template functional>
  <div class="header-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="less" scoped>
@import "../../styles/mixin.less";
.header-container {
  height: 100%;
  .flex-center;
  > .center {
    flex: 1;
    flex-direction: row-reverse;
  }
  > *{
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
