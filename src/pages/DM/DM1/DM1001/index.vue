<template>
  <div class="DM1001">
    <div class="DM1001-title" @click="add">点我请求接口</div>
    <div class="DM1001-body" @click="jump">点我跳转页面</div>
    <div class="DM1001-bottom">我只是显示数据 => {{ userInfo.age }}</div>
  </div>
</template>

<script>
import { rpc, pushWindow } from "@/utils/bridge";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    console.warn(this);
  },
  mounted() {
    console.warn("App===========", App);
    this.userInfo = this.$store.state.app.userInfo;
  },

  methods: {
    add() {
      rpc("SQ1004").then((res) => {
        console.warn("res:", res);
      });
    },
    jump() {
      pushWindow("/DM/DM1/DM1002", { a: 1, b: 2 });
    },
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>