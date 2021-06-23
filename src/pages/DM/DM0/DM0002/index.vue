<template>
  <div class="DM0002">
    <img alt="Vue logo" src="@/assets/logo.png" @click="back" />
  </div>
</template>

<script>
import { popWindow } from "@/utils/bridge";
export default {
  created() {
    console.warn(this);
  },
  mounted() {
    const params = App.params;
    console.warn("params===========", params);
  },
  methods: {
    back() {
      popWindow();
    },
  },
};
</script>

<style lang="less">
@import "./index.less";
</style>