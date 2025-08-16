<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import Men from './components/menu.vue'
import Nav from './components/nav-bar.vue'
import GwPhoto from './components/gw-photo.vue'
import Footer from './components/footer.vue'
import Why from './components/why.vue'

const route = useRoute()

const minimalRoutes = ['/shop', '/contact', '/favorite', '/family-card', '/katalog', '/gw',
  '/forgot-password',
  '/create-acc'

]

const isMinimal = computed(() => minimalRoutes.includes(route.path))
</script>

<template>
  <template v-if="isMinimal">
    <Men />
    <router-view />
    <Nav />
  </template>

  <template v-else>
    <Men />
    <GwPhoto />
    <router-view />
    <Why />
    <Footer />
    <Nav />
  </template>
</template>
