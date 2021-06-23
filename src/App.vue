<template>
  <div id="app">
    <keep-alive>
      <transition name="v">
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </transition>
    </keep-alive>
    <transition name="v">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="less">
@import "@/styles/index.less";
</style>
