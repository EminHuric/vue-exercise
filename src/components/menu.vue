<template>
  <Welcome />
  <nav class="menu">
    <div class="menuS">
      <button class="menuBar" @click="showMenu"><i class="fa-solid fa-bars"></i></button>
      <div v-if="menu2" class="overlay" @click.self="menu2 = false">
        <div class="menu2">
          <ul>
            <a href="#">home</a><br>
            <a href="#">home</a><br>
            <a href="#">home</a><br>
            <a href="#">home</a>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">


      <img class="logo" src="/logo1.png" alt="logo">

      <div class="bagT"><i class="fa-solid fa-bag-shopping"></i></div>

      <input placeholder="Search products" class="search">
      <button id="searchLogo"><i class="fa-solid fa-magnifying-glass"></i></button>
      <div class="category">
        <p>CATEGORY <i class="fa-duotone fa-solid fa-chevron-down"></i></p>
      </div>
      <p class="user"><i class="fa-regular fa-user"></i></p>
      <p class="sr">SIGN IN / REGISTER</p>
      <div class="favoriteLogo"><i class="far fa-heart"></i>
        <div class="bag"><i class="fa-solid fa-bag-shopping"></i></div>
      </div>
    </div>
  </nav>
  <Mm />
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

@media (min-width: 481px) and (max-width: 767px) {}

@media (max-width: 480px) {}







.bag {
  margin-top: -27px;
  margin-left: 40px;
}

.favoriteLogo {
  color: rgb(0, 0, 0);
  font-size: 20px;
  margin-top: 38px;
  margin-left: 40px;
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
  margin-top: 11px;
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
  height: 41px;
  width: 150px;
  margin-top: 29px;
  margin-left: -185px;
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
  margin-left: 26%;
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
