<template>
  <div id="app">
    <header-top></header-top>
    <router-view></router-view>
  </div>
</template>

<script>

import header from "./components/header.vue";

export default {
  name: 'App',
  components: {
      'header-top': header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
