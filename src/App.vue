<script setup>
import { ref, resolveDirective } from 'vue'
import Men from './components/menu.vue'
import Nav from './components/navBar.vue'
import GwPhoto from './components/GwPhoto.vue'




</script>

<template>
  <Men />
  <GwPhoto />
  <router-view />
  <Nav />
</template>


<style scoped>
.cta{
  margin-top: 180px;
  width: 80%;
  height: 620px;
  margin-left: 210px;
}
</style>

