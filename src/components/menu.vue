<template>
  <Welcome />
  <nav class="menu">
    <div class="menuS">
      <button class="menuBar" @click="showMenu"><i class="fa-solid fa-bars"></i></button>
      <div v-if="menu2" class="overlay" @click="menu2 = false">
        <div class="menu2" @click.stop>
          <div class="search-bar">
            <input type="text" placeholder="Search product" />
            <button class="searchButton"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div class="mc">
            <div class="m">MENU</div>
            <div class="b">CATEGORIES</div>
          </div>
          <ul class="menuItem">
            <li><a href="index.html" class="m1">HOME</a></li><br>
            <li><router-link to="/shop" class="m2">SHOP</router-link></li>
            <li><router-link to="/family-card" class="m3">FAMILY CARD</router-link></li>
            <li><router-link to="/contact" class="m4">CONTACT</router-link></li>
            <li><router-link to="/catalog" class="m5">CATALOG</router-link></li>
            <li><router-link to="/favorite" class="m5">FAVORITE</router-link></li>
            <li><router-link to="/login" class="m6">LOG IN / SIGN UP</router-link></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container">
      <img class="logo" src="/logo1.png" alt="logo" />

      <div class="bagT"><i class="fa-solid fa-bag-shopping"></i></div>

      <input placeholder="Search products" class="search" />
      <button id="searchLogo"><i class="fa-solid fa-magnifying-glass"></i></button>
      <div class="category">
        <p>CATEGORY <i class="fa-duotone fa-solid fa-chevron-down"></i></p>
      </div>
      <p class="user"><i class="fa-regular fa-user"></i></p>
      <p class="sr">SIGN IN / REGISTER</p>
      <div class="favoriteLogo">
        <span class="fv"><i class="far fa-heart"></i></span>
        <div class="bag"><i class="fa-solid fa-bag-shopping"></i></div>
      </div>
    </div>
  </nav>
  <Mm />
  

  <button class="menuT" style="margin-top: -95px; position: absolute; display: none;" @click="showMenu"><i class="fa-solid fa-bars"></i></button>
  <div v-if="menu2" class="overlay" @click="menu2 = false">
        <div class="menu2" @click.stop>
          <div class="search-bar">
            <input type="text" placeholder="Search product" />
            <button class="searchButton"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div class="mc">
            <div class="m">MENU</div>
            <div class="b">CATEGORIES</div>
          </div>
          <ul class="menuItem">
            <li><a href="index.html" class="m1">HOME</a></li><br>
            <li><router-link to="/shop" class="m2">SHOP</router-link></li>
            <li><router-link to="/family-card" class="m3">FAMILY CARD</router-link></li>
            <li><router-link to="/contact" class="m4">CONTACT</router-link></li>
            <li><router-link to="/catalog" class="m5">CATALOG</router-link></li>
            <li><router-link to="/favorite" class="m5">FAVORITE</router-link></li>
            <li><router-link to="/login" class="m6">LOG IN / SIGN UP</router-link></li>
          </ul>
        </div>
      </div>
</template>

<script setup>
import { ref } from 'vue'
import Welcome from './welcome.vue'
import Mm from './mainMenu.vue'

const menu2 = ref(false)
function showMenu() {
  menu2.value = !menu2.value
}
</script>

<style scoped>
@media (min-width: 1921px) and (max-width: 3025px) {

}
@media (min-width: 1024px) and (max-width: 1920px) {
  .logo {
    margin-left: 295px !important;
  }
}
@media (min-width: 1024px) and (max-width: 1709px) {
  .logo {
    margin-left: 5px !important;
  }
  .user {
    margin-left: 50px !important;
  }
  .sr {
    font-size: 13px !important;
    margin-top: 45px !important;
  }
  .favoriteLogo {
    margin-top: 38px !important;
    font-size: 22px !important;
    margin-left: 15px !important;
  }
  .bag {
    margin-left: 35px !important;
  }
  .search {
    margin-left: -10px !important;
  }
}
@media (min-width: 1029px) and (max-width: 1709px) {
  .logo {
    margin-left: -5px !important;
  }
  .user {
    margin-left: 80px !important;
  }
  .search {
    width: 48% !important;
    margin-left: 10px  !important;
  }

}
@media (max-width: 420px) {
  .search,
  .category,
  #searchLogo,
  .user,
  .sr,
  .fv {
    display: none;
  }
  .logo {
    margin-left: 30% !important;
    height: 125px !important;
    width: 150px !important;
  }
  .menu {
    height: 50px !important;
  }
  .bag {
    margin-left: 60px !important;
  }
  .menuT {
    display:  block !important;
    background: none;
    border: none;
    font-size: 20px;
  }
  .menu2 {
    width: 79% !important;
  }
}


.m6 {
  display: inline-block;
  border: 1px solid #dad8d8;
  padding: 16px 30px;
  color: #333;
  border-top: none;
  padding-right: 57.5%;
  border-right: none;
  margin-left: -50px;
  font-family: Arial, Helvetica, sans-serif;
  border-left: none;
}
.m5 {
  display: inline-block;
  border: 1px solid #dad8d8;
  padding: 16px 30px;
  color: #333;
  border-top: none;
  padding-right: 79.5%;
  border-right: none;
  margin-left: -50px;
  font-family: Arial, Helvetica, sans-serif;
  border-left: none;
}
.m4 {
  display: inline-block;
  border: 1px solid #dad8d8;
  padding: 16px 30px;
  color: #333;
  margin-top: -5px;
  padding-right: 79%;
  border-right: none;
  margin-left: -50px;
  font-family: Arial, Helvetica, sans-serif;
  border-left: none;
}
.m3 {
  display: inline-block;
  border: 1px solid #dad8d8;
  padding: 18px 30px;
  color: #333;
  margin-top: -5px;
  border-bottom: none;
  border-right: none;
  margin-left: -50px;
  font-family: Arial, Helvetica, sans-serif;
  border-left: none;
  border-top: none;
}
.m2 {
  display: inline-block;
  border: 1px solid #dad8d8;
  padding: 15px 30px;
  color: #333;
  margin-top: -5px;
  padding-right: 90.5%;
  border-right: none;
  margin-left: -50px;
  font-family: Arial, Helvetica, sans-serif;
  border-left: none;
  border-top: none;
}

.m1 {
  border: 1px solid #dad8d8;
  padding: 15px 30px;
  padding-right: 89.5%;
  margin-left: -50px;
  color: #333;
  border-right: none;
  border-left: none;
  border-top: none;
}

.menuItem a {
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
}

.m,
.b {
  border: 1px solid #d4d3d3;
  background-color: rgb(243, 241, 241);
  width: 152.7px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 22px;
  text-align: center;
  border-top: none;
  border-right: none;
}

.mc {
  border: 1px solid #dad8d8;
  height: 60px;
  margin-top: 70px;
  display: flex;
  width: 307px;
  margin-left: 0px;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom: none;
}

.search-bar input::placeholder {
  font-weight: bold;
  color: #999;
}

.searchButton {
  margin-left: 15px;
  background: none;
  border: none;
  font-size: 20px;
  color: #818181;
}

.menuItem {
  margin-top: 15px;
  list-style: none;
}

.search-bar input {
  width: 230px;
  height: 50px;
  color: #818181;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  padding-left: 20px;
  font-size: 15px;
  outline: none;
  border: none;
  box-shadow: none;
}

.search-bar {
  position: absolute;
  left: 0;
  top: 10px;
  display: flex;
}

.bagT {
  display: none;
}

.menu2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: rgba(255, 255, 255);
  z-index: 1000;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;

}

.menuS {
  display: none;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .bagT {
    display: block;
    font-size: 20px;
    margin-top: -25px;
    position: absolute;
    right: 15px;
  }

  .menuBar {
    margin-top: 15px;
    margin-left: 10px;
    font-size: 20px;
    background: none;
    border: none;
  }

  nav.menu {
    border: 1px solid rgb(221, 221, 221);
    height: 55px;
    background-color: white;
    position: absolute;
    width: 100%;
    left: 0;
    top: 45px;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  nav.menu .logo {
    height: 130px;
    width: 121px;
    margin-top: -75px;
    margin-left: 42%;
  }

  .search,
  #searchLogo,
  .category,
  .user,
  .sr,
  .favoriteLogo,
  .bag {
    display: none;
  }

  .logo {
    text-align: center;
  }

  .menuS {
    display: block;
  }
}

.bag {
  margin-top: -27px;
  margin-left: 30px;
}

.favoriteLogo {
  color: rgb(0, 0, 0);
  font-size: 20px;
  margin-top: 38px;
  margin-left: 30px;
}

.sr {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 42px;
  margin-left: 10px;
}

.user {
  margin-left: 90px;
  color: black;
  font-size: 24px;
  margin-top: 38px;
}

.category p i {
  margin-left: 26px;
}

.category p {
  margin-top: -2px;
  margin-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
  color: #818181;
  font-size: 15px;
}

.category {
  border: 1px solid rgb(221, 221, 221);
  background-color: white;
  border-top: none;
  border-bottom: none;
  height: 10px;
  width: 150px;
  margin-top: 29px;
  margin-left: -215px;
}

#searchLogo {
  font-size: 22px;
  margin-top: 30px;
  margin-left: -35px;
  background-color: white;
  color: #9c9c9c;
  height: 40px;
  border: none;
}

.search {
  height: 40px;
  width: 545px;
  margin-top: 28px;
  margin-left: 5px;
  outline: none;
  border-top: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #c5c5c5;
  border-left: 1px solid #c5c5c5;
  border-color: #c5c5c5;
  padding-left: 10px;
}

.logo {
  height: 180px;
  width: 210px;
  margin-top: -37px;
  margin-left: 600px;
}

.menu {
  border: 1px solid rgb(221, 221, 221);
  height: 100px;
  background-color: white;
  position: absolute;
  width: 100%;
  left: 0px;
  top: 45px;
  border-top: none;
  border-left: none;
  border-right: none;
}
</style>