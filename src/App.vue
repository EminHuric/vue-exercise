<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import Men from './components/menu.vue'
import Nav from './components/nav-bar.vue'
import GwPhoto from './components/gw-photo.vue'
import Footer from './components/footer.vue'
import Why from './components/why.vue'

const route = useRoute()

const minimalRoutes = [
  '/shop',
  '/contact',
  '/favorite',
  '/family-card',
  '/katalog',
  '/gw',
  '/forgot-password',
  '/create-acc'
]

const isMinimal = computed(() => minimalRoutes.includes(route.path))
</script>

<template>
  <div id="app">
    <Men />

    <div class="page">
      <template v-if="isMinimal">
        <router-view />
      </template>

      <template v-else>
        <GwPhoto />
        <router-view />
        <Why />
      </template>
    </div>

    <Footer v-if="!isMinimal" />
    <Nav />
  </div>
</template>

<style>
#app {
  min-height: 100vh;          /* okvir: barem visina ekrana */
  display: flex;
  flex-direction: column;
}

.page {
  flex: 1;                    /* stranica popunjava prostor između Men/Nav/Footer */
  display: flex;
  flex-direction: column;
}
</style>
