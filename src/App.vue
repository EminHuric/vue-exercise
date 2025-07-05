<script setup>
import { ref, resolveDirective } from 'vue'
import Men from './components/menu.vue'

import products from './components/products.vue'
import Nav from './components/navBar.vue'
const activePage = ref('home')



</script>

<template>
  <Men />  
    <div class="card">
      <h2 style="font-size: 70px; text-align: center; ">Products</h2>
      <products />
    </div>
    <Nav />
</template>

<style scoped>
.offers{
  text-align: center;
  padding: 10px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(190, 247, 176);
  width: 794px;
  height: 30px;
  margin-left: 23.24%;
  margin-top: -20px;
}

.card {
  border: 1px solid rgb(255, 255, 255);
  height: 100vh;
  margin-top: 155px;
  max-width: 100%;
}
.more {
  height: 50px;
  width: 100px;
  background-color: green;
  border: none;
  color: white;
  font-size: 24px;
  margin-top: 3%;
  margin-left: 47.5%;
}
</style>

