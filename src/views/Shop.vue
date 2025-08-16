<template>
  <div class="shopBg">
    <img alt="photo" src="/photo.avif" class="photo" />
    <h1 class="shopTitle">Shop</h1>
    <MainFooter />
  </div>
</template>

<script setup>
import MainFooter from '../components/mainFooter.vue'
</script>

<style scoped>
@media (min-width: 1741px) and (max-width: 2200px) {
  .shopBg {   
  height: 190% !important;  
}
.shopTitle {
  top: -18% !important;
}
}
@media (min-width: 768px) and (max-width: 1024px) {
  .shopBg {
    top: 8% !important;
  }
}
@media (min-width: 421px) and (max-width: 767px) {
  .shopTitle {
  top: -10% !important; 
}
.shopBg {
  position: absolute; 
  top: 6.5% !important;
  left: 0 !important;
  width: 100vw;    
  height: 300% !important;  
}
.photo {
  height: 10% !important;
}

}
@media (max-width: 420px) {
  .shopBg {
  position: absolute; 
  top: 6.5% !important;
  left: 0 !important;
  width: 100vw;    
  height: 300% !important;  
}
.photo {
  height: 10% !important;
}
.shopTitle {
  top: -10% !important; 
}
}
.shopTitle {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100px;
  text-align: center;
  top: -250px; 
  position: relative; 
  z-index: 1;
  color: rgb(255, 255, 255); 
}
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}

.shopBg {
  position: absolute; 
  top: 16.5%;
  left: 0;
  width: 100vw;    
  min-height: 100vh; 
  overflow: hidden; 
  border: 1px solid rgb(255, 255, 255); 
  background-color: white;
}

.photo {
  width: 100%;
  height: 300px;
  margin-top: 0%;
  object-fit: cover; 
  display: block;
  filter: brightness(35%)
}
</style>
