<template>
  <div class="app">
    <MyHeader title="tabbar案例" color="gold"></MyHeader>
    <component :is="componentName"></component>
    <MyFooter
      :list="tabList"
      @change-componentname="componentName = $event"
    ></MyFooter>
  </div>
</template>

<script>
import MyHeader from "cpns/MyHeader.vue";
import MyGoodsList from "./views/MyGoodsList.vue";
import MyGoodsSearch from "./views/MyGoodsSearch.vue";
import MyUserInfo from "./views/MyUserInfo.vue";
import MyFooter from "cpns/MyFooter.vue";
export default {
  components: {
    MyHeader,
    MyGoodsList,
    MyFooter,
    MyGoodsSearch,
    MyUserInfo,
  },
  data() {
    return {
      componentName: "MyGoodsList",
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
};
</script>

<style scoped>
.app {
  padding: 50px 0 50px;
}
</style>
