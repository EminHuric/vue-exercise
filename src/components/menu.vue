<template>
  <Welcome />
  <nav class="menu">
    <div class="container">
      <img class="logo" src="/logo1.png" alt="logo">

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
import Welcome from './welcome.vue'
import Mm from './mainMenu.vue'

</script>

<style scoped>


@media (max-width: 1024px) {
  .container {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .logo {
    height: 70px;
    margin: 0 auto;
  }

  .search {
    width: 80%;
    margin: 10px auto;
  }

  #searchLogo {
    margin-left: -30px;
  }

  .category,
  .user,
  .sr,
  .favoriteLogo {
    margin-top: 5px;
    font-size: 14px;
  }

  .bag {
    margin-left: 25px;
    margin-top: -20px;
  }
}









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
