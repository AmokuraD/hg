<template>
  <a-menu v-bind="$attrs">
    <template v-for="item in menuData">
      <a-menu-item v-if="!item.children" :key="item.name">
        <a-icon v-if="get(item, 'meta.icon')" :type="item.meta.icon"></a-icon>
        <span>{{ get(item, "meta.title") }}</span>
      </a-menu-item>
      <SubMenu v-else :key="item.name" :menu-info="item"></SubMenu>
    </template>
  </a-menu>
</template>

<script>
import Vue from "vue";
import SubMenu from "./sub-menu";
import { GET_MIXIN } from "@/mixins/get";
export default Vue.extend({
  name: "Menu",
  mixins: [GET_MIXIN],
  components: {
    SubMenu,
  },
  props: {
    menuData: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style></style>
