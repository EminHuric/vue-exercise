<template>
  <div class="shopBg">
    <img alt="photo" src="/photo.avif" class="photo" />
    <h1 class="shopTitle">Contact</h1>
    <div class="map">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.154398305768!2d19.83316751559888!3d45.253724179099944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1039d55e0a3f%3A0x5f65e56e9a62a8e6!2sVr%C5%A1a%C4%8Dka%2013%2C%20Novi%20Sad%2021000!5e0!3m2!1sen!2srs!4v1690203364763!5m2!1sen!2srs"
  width="48%"
  height="300"
  style="border:0; margin-left: 27%; margin-top: -190px;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
</div>

<div class="contact">
<h2 class="contactTitle">Contact Us</h2>
<h3 class="thanks">Thank you for visiting Your Hotel City</h3>
<p class="paragraph">If you have questions, suggestions or want to know more about our products and services,
   feel free to contact us via email ehrx09@gmail.com or phone +381 65 22 00 62 69. 
   Our team will do its best to provide you with all the necessary information.</p>
   <p class="paragraph">If you want to become part of our team, write to us at ehrx09@gmail.com</p>
   <p class="paragraph">We are glad that you have visited our website and look forward to you getting to know our wide range of products.</p>
</div>
<form action="https://formsubmit.co/ehrx09@gmail.com" method="POST" id="contactForm">
  <div style="display: flex; gap: 60px;">
    <div>
      <label for="fullname" style="font-family: Arial, Helvetica, sans-serif;">Full Name:</label><br>
      <input type="text" id="fullname" name="Full Name" required>
    </div>
    <div>
      <label for="email" style="font-family: Arial, Helvetica, sans-serif; margin-left: 20px;" class="ea">Email Address:</label><br>
      <input type="email" id="email" name="Email" required>
    </div>
  </div><br>

  <div>
    <label for="message" style="font-family: Arial, Helvetica, sans-serif;">Message:</label><br>
    <textarea id="message" name="Message" rows="5" required></textarea>
  </div><br>

  <button type="submit" class="send">Send</button>
</form>

<MainFooter />
  </div>

</template>

<script setup>
import MainFooter from '../components/mainFooter.vue';
</script>

<style scoped>
@media (min-width: 1741px) and (max-width: 2200px) {
  .shopBg {   
  height: 190% !important;  
}
.shopTitle {
  top: -18% !important;
}
.paragraph {
  width: 30% !important;
}
#email {
  width: 110% !important;
  margin-left: -20px !important;
}
#fullname {
  width: 100% !important;
}
.ea {
  margin-left: -20px !important;
}
#contactForm {
  margin-top: -17% !important;
}
}
@media (min-width: 1025px) and (max-width: 1709px) {
  .map iframe {
  margin-left: 1% !important;
  width: 97% !important;
}
.thanks {
    width: 44% !important;
  }
  .paragraph {
    width: 44% !important;
  }
  #contactForm {
    margin-left: 50% !important;
    margin-top: -20% !important;
  }
  #fullname {
    width: 90% !important;
  }
  #email {
    width: 110% !important;
    margin-left: -35px !important;
  }
  #message {
    width: 92% !important;
  }
  .send {
    width: 30% !important;
  }
  .ea {
    margin-left: -30px !important;
  }
  .contact {
  margin-left: 2% !important;
  margin-top: 8% !important;
}
}
@media (min-width: 768px) and (max-width: 1024px) {

  .map iframe {
  margin-left: 1% !important;
  width: 97% !important;
}
.contact {
  margin-left: 2% !important;
}

  .shopBg {
    top: 8% !important;
    height: 200% !important;
  }
  .shopTitle {
    top: -20% !important;
  }
  .thanks {
    width: 44% !important;
  }
  .paragraph {
    width: 44% !important;
  }
  #contactForm {
    margin-left: 50% !important;
    margin-top: -32% !important;
  }
  #fullname {
    width: 90% !important;
  }
  #email {
    width: 110% !important;
    margin-left: -35px !important;
  }
  #message {
    width: 92% !important;
  }
  .send {
    width: 30% !important;
  }
  .ea {
    margin-left: -30px !important;
  }
}
@media (min-width: 421px) and (max-width: 767px) {

  .send {
    width: 30% !important;
    margin-left: 35%;
  }
  #message {
    width: 96% !important;
  }
.ea {
  margin-left: -20px !important;
}
#email{
  margin-left: -20px !important;
  height: 35px;
  margin-top: 1px;
  width: 108% !important;
}
#fullname {
  height: 35px;
  margin-top: 1px;
  width: 100% !important;
}
  #contactForm {
    margin-left: 2% !important;
    margin-top: 10%  !important;
    margin-right: 2% !important;
  }
  .paragraph {
    width: 96% !important;
  }
  .thanks {
    width: 97% !important;
  }
  .contact {
    margin-left: 2% !important;
    margin-top: 15% !important;
  }
  .map iframe {
  margin-left: 1% !important;
  width: 97% !important;
}
  .shopTitle {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100px;
  text-align: center;
  top: -10% !important; 
  position: relative; 
  z-index: 1;
  color: rgb(255, 255, 255); 
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

}
@media (max-width: 420px) {

  .send {
    width: 30% !important;
    margin-left: 35%;
  }
  #message {
    width: 96% !important;
  }
.ea {
  margin-left: -20px !important;
}
#email{
  margin-left: -20px !important;
  height: 35px;
  margin-top: 1px;
  width: 108% !important;
}
#fullname {
  height: 35px;
  margin-top: 1px;
  width: 100% !important;
}
  #contactForm {
    margin-left: 2% !important;
    margin-top: 10%  !important;
    margin-right: 2% !important;
  }
  .paragraph {
    width: 96% !important;
  }
  .thanks {
    width: 97% !important;
  }
  .contact {
    margin-left: 2% !important;
    margin-top: 15% !important;
  }
  .shopBg {
  position: absolute; 
  top: 6.5% !important;
  left: 0 !important;
  width: 100vw;    
  height: 280% !important;  
}
.photo {
  height: 10% !important;
}
.shopTitle {
  font-size: 80px !important;
  top: -9% !important; 
}
.map iframe {
  margin-left: 1% !important;
  width: 97% !important;
}
}

.send {
  height: 40px;
  width: 10%;
  border: none;
  background-color: rgb(29, 182, 29);
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
}
#message {
  margin-top: 10px;
  width: 46%;
  height: 150px;
  padding: 5px;
}
#email {
  height: 35px;
  margin-top: 10px;
  width: 130%;
  margin-left: 20px;
}
#fullname {
  height: 35px;
  margin-top: 10px;
  width: 130%;
}
#contactForm {
  margin-left: 53%;
  margin-top: -10%;
}
.paragraph {
  width: 33%;
}
.thanks {
  font-size: 20px;
}
.contactTitle {
  font-size: 30px;
}
.contact {
  margin-left: 27%;
  margin-top: 2%;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(95, 95, 95);
}
.shopTitle {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100px;
  text-align: center;
  top: -270px; 
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
  min-height: 210vh; 
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
