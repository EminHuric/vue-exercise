<script setup>
import { ref, resolveDirective } from 'vue'
import Men from './components/menu.vue'
import Nav from './components/navBar.vue'
import gwPhoto from './components/gwPhoto.vue'




</script>

<template>
  <Men />
  <gwPhoto />
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

