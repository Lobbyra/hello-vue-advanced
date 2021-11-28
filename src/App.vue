<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App',
  created () {
      this.$vuetify.theme.dark = true;
      var dark = this.$vuetify.theme.themes.dark;
      dark.primary = "#EDED37"
  },
};
</script>
