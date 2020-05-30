<template>
  <div id="app">
    <router-view class="margin"></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>

<style lang="scss">

@import "../node_modules/bootstrap/scss/bootstrap.scss";

#app {
  font-family: 'VT323', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #B23A48;
  min-height: 100vh !important;
}
</style>
