<template functional>
  <a-card hoverable style="width:200px">
    <slot slot="cover">
      <slot name="cover"></slot>
    </slot>
    <a-card-meta title="title"></a-card-meta>
  </a-card>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="less" scoped></style>
