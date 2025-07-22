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
@media (min-width: 1501px) and (max-width: 1920px) {
  .cta {
    width: 100% !important;
    margin-left: 0 !important;
    margin-top: 2% !important;
  }
}
@media (min-width: 1280px) and (max-width: 1500px) {
  .cta {
    margin-left: 1.1% !important;
    margin-top: 2% !important;
    width: 97% !important;
    height: 85% !important;
    
  }
  .gwFrame {
    height: 52% !important;
    width: 100% !important;
    margin-top: 14.9% !important;
  }
}
@media (min-width: 1025px) and (max-width: 1280px) {
  .cta {
    margin-left: 1.8% !important;
    width: 97% !important;
    height: 80% !important;
    margin-top: 30px !important;
    
  }
  .gwFrame {
    margin-top: 18.7% !important;
    height: 50% !important;
    width: 100% !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .cta {
    margin-left: 2% !important;
    width: 96% !important;
    height: 75% !important;
    margin-top: 5% !important;
  }
  .gwFrame {
    margin-top: 100px !important;
    height: 45% !important;
  }
}
@media (min-width: 420px) and (max-width: 768px) {
  .cta {
    margin-left: 2% !important;
    width: 96% !important;
    height: 80% !important;
    position: absolute;
    top: 5%;
    
  }
   .gwFrame {
    margin-top: 3% !important;
    height: 40% !important;
  }
}
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

.gwFrame {
    border: 1px solid rgb(221, 221, 221);
    background-color: rgba(230, 230, 230, 0.5);
    border-bottom: none;
    height: 620px;
    margin-top: 182px;
    width: 100%;
    position: relative;
    left: 0;
    z-index: -11111111;
}
.cta2 {
  display: none;
}
.cta{
  width: 80%;
  height: 620px;
  margin-left: 210px;
  position: relative;
}
</style>
