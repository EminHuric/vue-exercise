<script setup>
import Men from './components/menu.vue'
import Nav from './components/nav-bar.vue'
import GwPhoto from './components/gw-photo.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <Men />
  <GwPhoto />
  <p style="margin-top: 250px;">Ssssssss</p>
  <router-view />
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