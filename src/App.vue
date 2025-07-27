<script setup>
import Men from './components/menu.vue'
import Nav from './components/nav-bar.vue'
import GwPhoto from './components/gw-photo.vue'
import Footer from './components/footer.vue'
import Why from './components/why.vue'
</script>

<template>
  <Men />
  <GwPhoto />
  <router-view />
  <Why />
  <Footer />
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