import { createRouter, createWebHistory } from 'vue-router'

import Shop from '../views/Shop.vue'
import FamilyCard from '../views/FamilyCard.vue'
import Contact from '../views/Contact.vue'
import Catalog from '../views/Catalog.vue'
import Gw from '../views/Gw.vue'

const routes = [
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/family-card', name: 'FamilyCard', component: FamilyCard },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/catalog', name: 'Catalog', component: Catalog },
  { path: '/gw', name:'Gw', component: Gw}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
