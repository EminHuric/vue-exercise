<template>
  <div class="shopBg">
    <img alt="photo" src="/photo.avif" class="photo" />
    <h1 class="shopTitle">Favorite</h1>
    <p class="mainHeart">
      <i class="fa-regular fa-heart"></i>
    </p>
    <p class="subtitle">Favorites are empty.</p>
    <p class="description">You do not have any products in your favorites yet. On our "Shop" page you will find many interesting products.</p>
    <router-link to="/shop">
      <button class="store">Store</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Favorite",
};
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
@media (min-width: 1025px) and (max-width: 1701px) {
  .store {
  width: 30% !important;
  margin-left: 35% !important;
}
.description {
  margin-left: 2% !important;
  margin-right: 2% !important;
}
.subtitle {
  margin-top: -12% !important;
}
.mainHeart {
  margin-top: -12% !important;
}
}
@media (min-width: 768px) and (max-width: 1024px) {
  .shopBg {
    top: 8% !important;
  }
  .shopTitle {
    top: -22% !important;
  }
  .store {
  width: 30% !important;
  margin-left: 35% !important;
}
.description {
  margin-left: 2% !important;
  margin-right: 2% !important;
}
.subtitle {
  margin-top: -20% !important;
}
.mainHeart {
  margin-top: -25% !important;
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
.store {
  width: 30% !important;
  margin-left: 35% !important;
}
.description {
  margin-left: 2% !important;
  margin-right: 2% !important;
}
.subtitle {
  margin-top: -30% !important;
}
.mainHeart {
  margin-top: -30% !important;
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
.store {
  width: 30% !important;
  margin-left: 35% !important;
}
.description {
  margin-left: 2% !important;
  margin-right: 2% !important;
}
.subtitle {
  margin-top: -35% !important;
}
.mainHeart {
  margin-top: -35% !important;
}
}


.store {
  text-align: center;
  border: none;
  background-color: rgb(30, 177, 30);
  height: 40px;
  width: 5%;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  font-weight: bold;
  margin-left: 47%;
  margin-top: 2%;
}
.description {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
.subtitle {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin-top: -7%;
}
.mainHeart {
  text-align: center;
  font-size: 200px;
  color: #a7a6a6;
  margin-top: -5%;
}
.shopTitle {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100px;
  text-align: center;
  top: -20%; 
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
  height: 140%;  
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
