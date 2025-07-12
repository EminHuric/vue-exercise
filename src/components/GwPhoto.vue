<script setup>

</script>

<template>
  <router-link to="/gw">
    <div class="gwFrame">
  <img alt="cta" src="/public/cta.png" class="cta">
  <img alt="cta" src="/public/ctaP.png" class="cta2">
  </div>
  </router-link>
</template>


<style scoped>
@media (max-width: 420px) {
  .gwFrame {
    margin-top: 15px !important;
  }
  .cta {
    display: none !important;
  }
  .cta2 {
    display: block !important;
    width: 100% !important;
    margin-top: 0px !important;
  }
  .gwFrame {
    height: 20% !important;
  }
}
@media (min-width: 1026px) and (max-width: 1280px) {
  .cta {
    margin-left: 1.8% !important;
    width: 97% !important;
    height: 95% !important;
    
  }
  .gwFrame {
    height: 42% !important;
    width: 100% !important;
  }
}
.gwFrame {
    border: 1px solid rgb(221, 221, 221);
    background-color: rgba(230, 230, 230, 0.5);
    border-bottom: none;
    height: 620px;
    margin-top: 182px;
    width: 100%;
    position: absolute;
    left: 0;
}
.cta2 {
  display: none;
}
.cta{
  width: 80%;
  height: 620px;
  margin-left: 210px;
}
</style>
