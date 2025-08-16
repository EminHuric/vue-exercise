<template>
    <p class="no">
        <i class="fa-sharp fa-solid fa-circle-xmark"></i>
    </p>
  <h2 class="not">
    This page is currently not working, we are trying to get it up and running as soon as possible
  </h2>
  
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  alert(
    "This page is currently not working, we are trying to get it up and running as soon as possible\n\nYou can order your card at ehrx09@gmail.com"
  );
});
</script>

<style scoped>
.no {
    margin-top: 20%;
    text-align: center;
    font-size: 200px;
    color: rgb(160, 159, 159);
}
.not:nth-of-type(n+2) {
  display: none;
}
.no:nth-of-type(n+2) {
  display: none;
}
.not {
  text-align: center;
  font-size: 60px;
  color: #333333;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: -5%;
  margin-left: 2%;
  margin-right: 2%;
}
</style>
