<script setup>

</script>

<template>
  <div class="s">
    <h1 class="gwh">🎁 PRIZE GAME 🎁</h1>
    <p class="notification">To participate in the prize game, your order total must exceed €100.
      After completing your purchase, your participation becomes valid only
      after you fill out a short survey located at the bottom of this page.
      Once the survey is submitted, your purchase is automatically registered
      as an official entry in the prize draw. The higher the value of your order,
      the greater your chances of winning and the better the prize you could receive.
      Each customer can participate multiple times, but each entry must be backed by a
      separate receipt meaning every new order over €100 qualifies as a new and valid entry.
      Submitting the same purchase more than once is not allowed. Every month, several prizes will be drawn,
      and the selected winners will be notified via the contact details provided in the survey, along with all
      the necessary information on how to claim their prize. Shop, fill out the survey, and get a chance to win amazing
      rewards!
    </p>
    <img alt="photo" src="/public/cta.png" class="gwPhoto">
    <img alt="photo" src="/public/pp.jpg" class="gwPhoto2">
  </div>
</template>


<style scoped>
@media (max-width: 420px) {
  .gwPhoto {
    display: none !important;
  }
  .gwPhoto2 {
    display: block !important;
    width: 100% !important;
    margin-top: 20px !important;
  }
  .gwh {
    font-size: 38px !important;
    margin-top: 20px !important;
  }
  .notification {
    margin-left: 2% !important;
    margin-right: 2% !important;
    font-size: 14px !important;
    text-align: justify !important;
  }
  .s {
    top: 11.5% !important;
  }
}
@media (min-width: 1026px) and (max-width: 1280px) {
  .s {
    position: absolute;
    top: 18.9% !important;
  }
  .notification {
    margin-left: 2% !important;
    margin-right: 2% !important;
    font-size: 17.5px !important;
  }
  .gwPhoto {
    margin-left: 2% !important;
    width: 96% !important;
    margin-top: 20px !important;
  }
  .gwh {
    font-size: 40px !important;
    margin-top: 30px !important;
  }
}
@media (min-width: 1280px) and (max-width: 1920px) {
  .s {
    margin-top: 3.15%;
  }
  .notification {
    margin-left: 18% !important;
    margin-right: 18% !important;
    font-size: 17px !important;
  }
  .gwPhoto {
    margin-left: 18% !important;
    width: 65%;
  }
}
.gwPhoto2 {
  display: none;
}
.gwPhoto {
  margin-left: 27%;
  margin-top: 50px;
  height: 400px;
}
.notification{
  margin-left: 27%;
  margin-right: 26%;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: #000000;
}
.gwh {
  text-align: center;
  margin-top: 50px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
}

.s {
  border: 1px solid black;
  height: 100vh;
  width: 100%;
  background-color: rgb(255, 255, 255);
  position: absolute;
  left: 0;
  top: 16.7%;
  border: none;
}
</style>
