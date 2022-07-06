<template>
  <v-app fluid>
    <v-app-bar fluid app color="primary" dark>
      <img
        fluid
        src="./assets/generic-ariline-logo.png"
        class="rounded-circle logo mx-4"
      />
      <h2 class="h2">Nacional Airlines</h2>
    </v-app-bar>

    <v-main fluid>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>
.logo {
  width: 100%;
  max-width: 60px;
}
.full-width {
  width: 100%;
}
</style>
