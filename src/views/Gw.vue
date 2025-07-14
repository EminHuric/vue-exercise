<script setup>
</script>

<template>
  <div class="s">
    <h1 class="gwh">🎁 PRIZE GAME 🎁</h1>
    <p class="notification">To participate in the prize game, your order total must exceed €100.
      After completing your purchase, your participation becomes valid only
      after you fill out a short <a href="#survey">SURVEY</a> located at the bottom of this page.
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
    <img alt="photo" src="/cta.png" class="gwPhoto">
    <img alt="photo" src="/pp.jpg" class="gwPhoto2">
    <p class="notification">
      Visit our <router-link to="/shop">STORE</router-link> and place your order as soon as possible because we want YOU
      to win amazing prizes!
      Every purchase over €100 automatically enters you into the prize draw and gives you a 10% discount
      on your next purchase. Don’t miss the chance to win valuable prizes and enjoy extra benefits. Join now and get one
      step closer to winning! Good luck!
    </p>
    <div id="survey">
      <h1 class="h1">SURVEY</h1>
      <form class="surveyFrame" action="https://formsubmit.co/ehrx09@gmail.com" method="POST"
        enctype="multipart/form-data">
        <input type="text" name="Full name" placeholder="Full name" class="name" required />
        <input type="email" name="Email" placeholder="Email" class="email" required />

        <select id="countryCode" v-model="countryCode">
          <option value="+381">+381</option>
          <option value="+382">+382</option>
          <option value="+386">+386</option>
          <option value="+385">+385</option>
          <option value="+387">+387</option>
        </select>

        <input id="phoneNumber" type="tel" inputmode="numeric" pattern="[0-9]*" placeholder="Phone number"
          @input="phoneNumber = phoneNumber.replace(/\D/g, '')" required />
          <div class="container">
            <div>
        <p class="label">Order ID</p>
        <input type="text" name="Order ID" placeholder="#1..." class="id" required />
        </div>
        <div>
        <p class="label1">Date of purchase</p>
        <input type="date" id="purchaseDate" name="purchaseDate" class="date" required />
        </div>
        </div>
        <input type="hidden" name="_next" value="https://google.com" />
        <div class="sendButton">
          <button class="send">SEND</button>
        </div>
      </form>
    </div>
    <div style="margin-top: 500px;">
      ggg
    </div>
  </div>
</template>


<style scoped>
@media (max-width: 420px) {
  .name, .email {
    width: 85% !important;
    margin-left: 5% !important;
  }
  .surveyFrame {
    width: 96% !important;
    margin: 2% !important;
  }
  #countryCode {
    margin-left: 5% !important;
    width: 20% !important;
    height: 8.6% !important;
  }
  #phoneNumber {
    width: 65% !important;
    height: 7.5% !important;
    margin-left: -2px !important;
  }
  .label {
    margin-left: 10% !important;
    margin-top: 15px !important;
  }
  .date {
    width: 80% !important;
    margin-left: 1% !important;

  }
  .label1 {
    margin-top: 15px !important;
    width: 100% !important;
    margin-left: 2% !important;
  }
  .id {
    margin-left: 10% !important;
    width: 60% !important;
    height: 51px !important;
    margin-top: -2px !important;
  }
}
.label1 {
  margin-top: 15px;
  margin-left: 240%;
  width: 100%;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
}

.label {
  margin-top: 15px;
  margin-left: 100px;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
}

.date {
  margin-top: -4px;
  margin-left: 240%;
  height: 54px;
  width: 90%;
  padding-left: 10px;
  font-size: 20px;
}

#phoneNumber {
  margin-top: 20px;
  margin-left: 0px;
  height: 45px;
  width: 68%;
  padding-left: 10px;
  padding-left: 10px;
  font-size: 20px;
}

#countryCode {
  margin-top: 20px;
  border-right: none;
  margin-left: 100px;
  height: 50px;
  width: 10%;
  padding-left: 10px;
  font-size: 20px;
}

.send {
  height: 50px;
  width: 35%;
  border: none;
  background-color: green;
  color: white;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.sendButton {
  margin-top: 100px;
  text-align: center;
}

.bill {
  margin-left: 300px;
  width: 300px;
  height: 250px;
  margin-top: -40px;
}


.acc {
  margin-left: 10.5%;
  margin-top: 50px;
  height: 50px;
}

.o {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  margin-left: 10px;
}

.id {
  margin-top: 0px;
  margin-left: 39.5%;
  height: 50px;
  width: 60%;
  padding-left: 10px;
  font-size: 20px;
}

.email {
  margin-top: 20px;
  margin-left: 100px;
  height: 50px;
  width: 78%;
  padding-left: 10px;
  font-size: 20px;
}

.name {
  margin-top: 50px;
  margin-left: 100px;
  height: 50px;
  width: 78%;
  padding-left: 10px;
  font-size: 20px;
}

.surveyFrame {
  border: 1px solid rgb(172, 172, 172);
  width: 41%;
  height: 600px;
  margin-left: 30%;
  border-radius: 12px;

}

.h1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 100px;
}

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

.notification {
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
