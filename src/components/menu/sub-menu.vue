<template>
  <a-sub-menu :key="menuInfo.name">
    <span slot="title">
      <a-icon v-if="get(menuInfo, 'meta.icon')" :type="menuInfo.meta.icon" />
      <span>
        {{ get(menuInfo, "meta.title") }}
      </span>
    </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.name">
        <a-icon v-if="get(item, 'meta.icon')" :type="item.meta.icon" />
        <span>{{ get(item, "meta.title") }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.name" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
import Vue from "vue";
import { Menu } from "ant-design-vue";
import { GET_MIXIN } from "@/mixins/get";
export default Vue.extend({
  name: "SubMenu",
  mixins: [GET_MIXIN],
  props: {
    ...Menu.SubMenu.props,
    menuInfo: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style></style>
