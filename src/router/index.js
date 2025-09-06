import { createRouter, createWebHistory } from 'vue-router'

import Shop from '../views/Shop.vue'
import FamilyCard from '../views/FamilyCard.vue'
import Contact from '../views/Contact.vue'
import Catalog from '../views/Catalog.vue'
import Gw from '../views/Gw.vue'
import Favorite from '../views/Favorite.vue'
import Fp from '../views/forgotpassword.vue'
import Ac from '../views/createAcc.vue'
import ProductDetail from '../views/ProductDetail.vue'


const routes = [
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/family-card', name: 'FamilyCard', component: FamilyCard },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/catalog', name: 'Catalog', component: Catalog },
  { path: '/gw', name:'Gw', component: Gw},
  { path: '/forgot-password', name:'Fp', component: Fp},
  { path: '/create-acc', name:'Ac', component: Ac},
  { path: '/product/:id', component: ProductDetail },
  { path: '/favorite', name: 'Favorite', component: Favorite }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
