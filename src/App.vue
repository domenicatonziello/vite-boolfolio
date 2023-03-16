<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: { AppHeader },
}
</script>


<template>
  <!-- header -->
  <app-header></app-header>
  <!-- main -->
  <router-view></router-view>
</template>


<style></style>