<script setup>
import Men from './components/menu.vue'
import Nav from './components/nav-bar.vue'
import GwPhoto from './components/gw-photo.vue'
</script>

<template>
  <Men />
  <GwPhoto />
  <router-view />
  <Nav />
</template>


<style scoped>
.cta {
  margin-top: 180px;
  width: 80%;
  height: 620px;
  margin-left: 210px;
}
</style>
