<template>
  <a-layout style="height:100%">
    <a-layout-header>
      <Header>
        <Menu
          :menuData="menuData"
          slot="center"
          mode="horizontal"
          theme="dark"
          :selectable="selectable"
        ></Menu>
      </Header>
    </a-layout-header>
    <a-layout>
      <a-layout-sider> </a-layout-sider>
      <a-layout-content>
        <Tabs :tabsData="tabsData"></Tabs>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
const menuData = [
  { name: "jg", meta: { title: "数据联网监管" } },
  { name: "hw", meta: { title: "货物分类监管" } },
];
const tabsData = [
  { title: "tab1啊啊啊啊啊啊啊啊啊啊" },
  { title: "tab2啊啊啊啊啊啊啊啊啊啊啊啊" },
  { title: "tab3啊啊啊啊啊啊啊啊啊啊啊啊" },
  { title: "tab4" },
  { title: "tab5" },
  { title: "tab6" },
  { title: "tab7" },
  { title: "tab8" },
  { title: "tab9" },
  { title: "tab10" },
  { title: "tab11" },
  { title: "tab12" },
];
import Vue from "vue";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Tabs from "@/components/tabs";
export default Vue.extend({
  components: {
    Header,
    Menu,
    Tabs,
  },
  data() {
    return {
      menuData,
      tabsData,
      selectable: false,
    };
  },
});
</script>

<style></style>
