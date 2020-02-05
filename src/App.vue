<template>
  <div id="app">
    <navbar></navbar>
    <principal></principal>
  </div>
</template>

<script>
  import navbar from './components/navbar.vue';
  import principal from './components/principal.vue';

  export default {
    name: 'app',
    components:{
      navbar,
      principal 
    }
  }
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
