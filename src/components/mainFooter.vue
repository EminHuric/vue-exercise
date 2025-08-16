<script setup>
import { ref } from 'vue'

const showInfo = ref(false)
const showFollow = ref(false)
</script>

<template>
  <div class="page">
    <div class="content">
      
    </div>

    <footer>
      <div class="partners">
        <div class="container">
          <img alt="partner1" src="/public/partner1.webp" class="partner1" />
          <img alt="partner2" src="/public/partner2.png" class="partner2" />
          <img alt="partner3" src="/public/partner3.png" class="partner3" />
          <img alt="partner4" src="/public/partner4.png" class="partner4" />
        </div>
      </div>
      <div class="footer">
        <img alt="logo" src="/public/logo1.png" class="logo" />
        <p class="info">Company information YourHotel:</p>
        <p class="pib">PIB: 113945567</p>
        <p class="pib">MB: 219490000</p>
        <p class="loc"><i class="fas fa-map-marker-alt"></i> Vršačka br. 13, L1, 21000 Novi Sad</p>
        <p class="p1"><i class="fas fa-phone"></i> Information: +381 65 220 62 69</p>
        <p class="p2"><i class="fas fa-phone"></i> Customer support +381 69 100 99 32</p>
        <p class="email"><i class="fas fa-envelope"></i> ehrx09@gmail.com</p>

        <div class="aboutPhone">
          <p class="about" @click="showInfo = !showInfo" style="cursor: pointer; user-select: none;">
            ABOUT US
            <i class="fas fa-chevron-down" v-if="!showInfo"></i>
            <i class="fas fa-chevron-up" v-else></i>
          </p>
          <div v-if="showInfo" id="sh">
            <p class="contact">Contact</p>
            <p class="tou">Terms of use</p>
            <p class="rp">Return policy</p>
            <p class="pp">Privacy Policy</p>
          </div>
        </div>
         <div class="followPhone">
          <p class="followw" @click="showFollow = !showFollow" style="cursor: pointer; user-select: none;">
            FOLLOW US
            <i class="fas fa-chevron-down" v-if="!showFollow"></i>
            <i class="fas fa-chevron-up" v-else></i>
          </p>
          <div v-if="showFollow" id="sf">
           <a class="ig" href="https://www.instagram.com/raserv_org" target="_blank">
    <i class="fab fa-instagram"></i> Instagram
  </a><br />
  <a class="ig" href="https://www.facebook.com/raserv_org" target="_blank">
    <i class="fab fa-facebook"></i> Facebook
  </a>
          </div>
        </div>

        <div class="ab">
          <p class="about">ABOUT US</p>
          <p class="contact">Contact</p>
          <p class="tou">Terms of use</p>
          <p class="rp">Return policy</p>
          <p class="pp">Privacy Policy</p>
        </div>

        <div class="ab">
          <p class="follow">FOLLOW US</p>
          <div style="margin-top: 30px;">
            <a class="ig" href="https://www.instagram.com/raserv_org" target="_blank">Instagram</a><br />
          </div>
          <div style="margin-top: 10px;">
            <a class="ig" href="https://www.facebook.com/raserv_org" target="_blank">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<style scoped>
@media (min-width: 1741px) and (max-width: 2200px) {
  .footer {
    margin-left: 4% !important;
  }
  .email {
    margin-left: -57% !important;
  }
  .partner1 {
    margin-left: 18% !important;
  }

  .p2 {
    margin-left: -50.3% !important;
  }

  .p1 {
    margin-left: -52.3% !important;
  }

  .loc {
    margin-left: -51.2% !important;
  }

  .pib {
    margin-left: -57.2% !important;
  }

  .info {
    margin-left: -51.5% !important;
    margin-top: -50px;
  }

  .logo {
    margin-top: -5px !important;
    margin-left: -56% !important;
  }

  .ig {
    margin-left: 650px !important;
  }

  .follow {
    margin-left: 670px !important;
  }

  .pp {
    margin-left: 65px !important;
  }

  .rp {
    margin-left: 65px !important;
  }

  .tou {
    margin-top: 10px;
    margin-left: 65px !important;
  }

  .contact {
    margin-top: 30px;
    margin-left: 35px !important;
  }

  .about {
    margin-left: 60px !important;
  }

  .yea {
    margin-left: 35% !important;
    width: 25% !important;
  }

  .page {
    height: 93vh !important;
  }
}

@media (min-width: 1281px) and (max-width: 1701px) {
  .partners {
    margin-left: -25% !important;
  }
  
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .email {
    margin-left: -72% !important;
  }
  .partners {
    margin-left: -37% !important;
  }
  .partner2 {
    margin-left: -3% !important;
  }
  .partner3 {
    margin-left: 1% !important;
  }
  .partner4 {
    height: 40px !important;
    margin-top: 2% !important;
  }
  .logo {
    margin-left: -75% !important;
    margin-top: -4% !important;
  }
  .info {
    margin-left: -67% !important;
  }
  .pib {
    margin-left: -75% !important;
  }
  .loc {
    margin-left: -63% !important;
  }
  .p1 {
    margin-left: -66% !important;
  }
  .p2 {
    margin-left: -61% !important;
  }
  .about {
    margin-left: 11% !important;
  }
  .contact {
    margin-left: 9% !important;
  }
  .tou {
    margin-left: 12% !important;
  }
  .rp {
    margin-left: 12.5% !important;
  }
  .pp {
    margin-left: 13% !important;
  }
  .follow {
    margin-left: 65% !important;
  }
  .ig {
    margin-left: 62% !important;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .email {
    margin-left: -72% !important;
  }
  .partners {
    margin-left: -40% !important;
  }
  .partner2 {
    margin-left: -3% !important;
  }
  .partner3 {
    margin-left: 1% !important;
  }
  .partner4 {
    height: 40px !important;
    margin-top: 2% !important;
  }
  .logo {
    margin-left: -75% !important;
    margin-top: -4% !important;
  }
  .info {
    margin-left: -67% !important;
  }
  .pib {
    margin-left: -75% !important;
  }
  .loc {
    margin-left: -63% !important;
  }
  .p1 {
    margin-left: -66% !important;
  }
  .p2 {
    margin-left: -61% !important;
  }
  .about {
    margin-left: 11% !important;
  }
  .contact {
    margin-left: 9% !important;
  }
  .tou {
    margin-left: 12% !important;
  }
  .rp {
    margin-left: 12.5% !important;
  }
  .pp {
    margin-left: 13% !important;
  }
  .follow {
    margin-left: 65% !important;
  }
  .ig {
    margin-left: 62% !important;
  }
}

@media (min-width: 601px) and (max-width: 767px) {
  .email {
    margin-left: -72% !important;
  }
  .page {
    height: 150vh !important;
  }
  .partners {
    margin-top: -250px !important;
  }
  #sf {
    margin-left: -180% !important;
    margin-top: 1% !important;
  }
  #sh {
    margin-left: -1221% !important;
    margin-top: 0% !important;
  }
  .about {
    margin-top: 0% !important;
    margin-left: 20% !important;
  }
  .p2 {
    margin-left: -57% !important;
  }
  .p1 {
    margin-left: -63% !important;
  }
  .follow {
    margin-left: 67% !important;
    margin-top: 17.5% !important;
  }
  .ig {
    margin-left: 62% !important;
  }
  .footer {
    height: 80vh !important;
  }
  .logo {
    margin-left: -75% !important;
  }
  .info {
    margin-left: -65% !important;
  }
  .pib {
    margin-left: -75% !important;
  }
  .loc {
    margin-left: -60% !important;
  }
  .ab {
    display: block;
    margin-top: -42% !important;
    margin-left: 5% !important;
  }
  .contact {
    margin-left: 16% !important;
  }
  .tou {
    margin-left: 21% !important;
  }
  .rp {
    margin-left: 22% !important;
  }
  .pp {
    margin-left: 23% !important;
  }
  .partner1 {
    margin-left: 2.5% !important;
    margin-top: -150px !important;
    height: 250px !important;
    width: 45% !important;
  }
  .partner2 {
    margin-left: -0% !important;
    width: 50% !important;
    margin-top: -100px !important;
  }
  .partner3 {
    margin-top: 2% !important;
    width: 35% !important;
    height: 87px !important;
    margin-left: -90% !important;
  }
  .partner4 {
    height: 45px !important;
    margin-top: 5% !important;
    width: 40% !important;
    margin-left: 11% !important;
  }
  .ne {
    margin-top: 70% !important;
  }
  .sub {
    font-size: 28px !important;
    margin-top: -45% !important;
  }
  .yea {
    width: 45% !important;
    margin-left: 20% !important;
    margin-top: 5% !important;
  }
  .join {
    width: 15% !important;
  }
  .notification {
    margin-top: 5% !important;
  }
}

@media (min-width: 421px) and (max-width: 600px) {
  .page {
    height: 170vh !important;
  }
  .partners {
    margin-top: -250px !important;
  }
  #sf {
    margin-left: -180% !important;
    margin-top: 1% !important;
  }
  #sh {
    margin-left: -91% !important;
    margin-top: 0% !important;
  }
  .about {
    margin-top: 8% !important;
    margin-left: -65% !important;
  }
  .p2 {
    margin-left: -27% !important;
  }
  .p1 {
    margin-left: -37% !important;
  }
  .footer {
    height: 80vh !important;
  }
  .logo {
    margin-left: -55% !important;
  }
  .pib {
    margin-left: -59% !important;
  }
  .ab {
    display: none;
  }
  .aboutPhone,
  .followPhone {
    display: block !important;
  }
  .partner1 {
    margin-left: -8.5% !important;
    margin-top: -150px !important;
    height: 250px !important;
    width: 60% !important;
  }
  .partner2 {
    margin-left: -10% !important;
    width: 65% !important;
    margin-top: -100px !important;
  }
  .partner3 {
    margin-top: 2% !important;
    width: 45% !important;
    height: 87px !important;
    margin-left: -107% !important;
  }
  .partner4 {
    height: 45px !important;
    margin-top: 8% !important;
    width: 48% !important;
    margin-left: 5% !important;
  }
  .ne {
    margin-top: 70% !important;
  }
  .sub {
    font-size: 28px !important;
  }
  .yea {
    width: 65% !important;
    margin-left: 3% !important;
    margin-top: 5% !important;
  }
  .join {
    width: 23% !important;
  }
  .notification {
    margin-top: 5% !important;
  }
}

@media (max-width: 420px) {
  .page {
    height: 170vh !important;
  }
  .partners {
    margin-top: -250px !important;
  }
  #sh {
    margin-left: -120% !important;
    margin-top: -3% !important;
  }
  .about {
    margin-top: 3% !important;
    margin-left: -68% !important;
  }
  .email {
    margin-left: -60% !important;
    margin-bottom: 7% !important;
  }
  .p2 {
    margin-left: -32% !important;
  }
  .p1 {
    margin-left: -41% !important;
  }
  .footer {
    height: 80vh !important;
  }
  .logo {
    margin-left: -60% !important;
  }
  .pib {
    margin-left: -59% !important;
  }
  .ab {
    display: none;
  }
  .aboutPhone,
  .followPhone {
    display: block !important;
  }
  .partner1 {
    margin-left: -8.5% !important;
    margin-top: -150px !important;
    height: 250px !important;
    width: 60% !important;
  }
  .partner2 {
    margin-left: -10% !important;
    width: 65% !important;
    margin-top: -100px !important;
  }
  .partner3 {
    margin-top: 2% !important;
    width: 45% !important;
    height: 87px !important;
    margin-left: -107% !important;
  }
  .partner4 {
    height: 45px !important;
    margin-top: 8% !important;
    width: 48% !important;
    margin-left: 5% !important;
  }
  .ne {
    margin-top: 70% !important;
  }
  .sub {
    font-size: 28px !important;
  }
  .yea {
    width: 65% !important;
    margin-left: 3% !important;
    margin-top: 5% !important;
  }
  .join {
    width: 23% !important;
  }
  .notification {
    margin-top: 5% !important;
  }
}

#sf {
  margin-left: -71%;
  margin-top: -3%;
}

.followw {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-top: 0px;
  margin-left: -62%;
}

.aboutPhone,
.followPhone {
  display: none;
}

.privacy {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.yea {
  height: 30px;
  margin-left: 40%;
  padding: 5px;
  width: 15%;
}

.ig {
  margin-left: 880px;
  font-family: Arial, Helvetica, sans-serif;
  color: #868686;
  text-decoration: none;
}

.follow {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-top: -170px;
  margin-left: 900px;
}

.pp {
  margin-left: 210px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
  color: #868686;
}

.rp {
  margin-left: 205px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
  color: #868686;
}

.tou {
  margin-left: 200px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
  color: #868686;
}

.contact {
  margin-left: 170px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 30px;
  color: #868686;
}

.about {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-top: -270px;
  margin-left: 190px;
}

.email {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: -35.2%;
  margin-top: 0px;
  color: #868686;
}

.p2 {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: -30.5%;
  margin-top: 0px;
  color: #868686;
}

.p1 {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: -32.3%;
  margin-top: 0px;
  color: #868686;
}

.loc {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: -31.5%;
  margin-top: 0px;
  color: #868686;
}

.pib {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: -37.2%;
  margin-top: 0px;
  color: #868686;
}

.info {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: -33%;
  margin-top: -50px;
  color: #868686;
}

.logo {
  height: 180px;
  margin-left: -36%;
}

.partner4 {
  margin-top: 15px;
  width: 250px;
  height: 55px;
  margin-left: 3%;
}

.partner3 {
  margin-top: 3px;
  width: 250px;
  height: 80px;
  margin-left: 3%;
}

.partner2 {
  margin-top: -30px;
  width: 250px;
  height: 150px;
  margin-left: 2%;
}

.partner1 {
  margin-top: -65px;
  width: 220px;
  margin-left: 27%;
}

.page {
  display: flex;
  flex-direction: column;
  min-height: 70vh;
}

.content {
  flex: 1;
}

.partners {
  height: 90px;
  padding: 10px;
}

.footer {
  background-color: #ffffff;
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
  height: 350px;
  border-top: 1px solid #ffffff;
}

</style>