<template>
    <div class="shopBg">
        <img alt="photo" src="/photo.avif" class="photo" />
        <h1 class="shopTitle">My account</h1>

        <div v-if="signUp">
            <h2 class="sign">SIGN UP</h2>
            <label class="label">
                Username
                <span style="color: red;">
                    *
                </span>
            </label><br>
            <input type="username" class="username" required> <br>

            <label class="label1">
                Email
                <span style="color: red;">
                    *
                </span>
            </label><br>
            <input type="email" class="username" required> <br>
            <label class="label1">
                Password
                <span style="color: red;">
                    *
                </span>
            </label><br>
            <input type="password" class="username" required> <br>

            <p class="notification">Your personal data will be used to support your experience
                throughout this website, to manage access to your account,
                and for other purposes described in our <router-link to=""
                    style="text-decoration: none; font-weight: bold;">privacy policy</router-link>.
            </p>
            <button class="button">Sign Up</button>
            <div class="line">
                <h2 class="sign2">SIGN IN</h2>
                <p class="info">Enter your information to access your account.</p>
                <button class="sbutton" @click.prevent="signUp = false">Sign In</button>
            </div>
        </div>

        <div v-else>
            <h2 class="sign">SIGN IN</h2>
            <label class="label">
                Username or Email
                <span style="color: red;">
                    *
                </span>
            </label><br>

            <input type="email" class="username" required> <br>

            <label class="label1">
                Password
                <span style="color: red;">
                    *
                </span>
            </label><br>
            <input type="password" class="username" required> <br></br>

            <button class="button">Sign Up</button>

            <div class="container">
                <input type="checkbox" class="checkbox2">
                <label class="remember">Remember me</label>

                <router-link to="/forgot-password" class="forgot">You forgot your password.</router-link>

            </div>


            <div class="line2">
                <h2 class="sign3">SIGN UP</h2>
                <p class="info2">By registering for this page, you can access
                    your order status and history. Just fill in the fields below,
                    and we'll set you up with a new account in no time. We will
                    only ask you for the information necessary to make the purchase
                    process faster and easier.</p>
                <button class="sbutton" @click.prevent="signUp = true">Sign Up</button>
            </div>
        </div>

        <MainFooter />
    </div>
</template>

<script setup>
import MainFooter from '../components/mainFooter.vue'
import { ref } from "vue"
const signUp = ref(true)
</script>

<style scoped>
.checkbox2 {
    margin-left: 27%;
    margin-top: 20px;
}
.remember {
    margin-top: 18px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
}
.forgot {
    margin-top: 18px;
    margin-left: 280px;
    font-size: 15px;
}
.sbutton {
    margin-left: 200px;
    height: 35px;
    width: 120px;
    border: none;
    background-color: rgb(231, 231, 231);
}

.info {
    font-family: monospace;
    font-size: 16px;
    margin-left: 50px;
}
.info2 {
    font-family: monospace;
    font-size: 16px;
    margin-left: 70px;
    width: 40%;
}

.line {
    border: 1px solid black;
    height: 500px;
    border-top: none;
    border-bottom: none;
    border-right: none;
    margin-left: 55%;
    margin-top: -20%;
}

.line2 {
    border: 1px solid black;
    height: 400px;
    border-top: none;
    border-bottom: none;
    border-right: none;
    margin-left: 55%;
    margin-top: -16%;
}

.notification {
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(85, 85, 85);
    margin-left: 27.5%;
    width: 550px;
    margin-top: 1px;
}

.button {
    height: 45px;
    width: 560px;
    margin-left: 27%;
    border: none;
    background-color: rgb(98, 190, 6);
    color: white;
    font-size: 15px;
    font-weight: bold;
}

.username {
    margin-left: 27%;
    margin-top: 10px;
    height: 40px;
    width: 550px;
    margin-bottom: 20px;
}

.sign {
    margin-left: 27%;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: -5%;
}

.sign2 {
    margin-left: 210px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: -3%;

}

.sign3 {
    margin-left: 210px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 7%;

}

.label1,
.label {
    margin-left: 27%;
}


@media (min-width: 1741px) and (max-width: 2200px) {
    .notification {
        margin-left: 400px;
        width: 29% !important;
        margin-top: -2px !important;
    }

    .label1 {
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 400px;
    }

    .label {
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 400px;
    }

    .username {
        margin-left: 400px;
        margin-top: 20px;
        height: 40px;
        width: 500px;
        margin-bottom: 20px;

    }
    .button {
        margin-left: 400px !important;
        width: 500px;
    }

    .sign {
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 400px;
        font-size: 30px;
        margin-top: -150px;

    }

    .shopBg {
        height: 190% !important;
    }

    .shopTitle {
        top: -18% !important;
    }
}
@media (min-width: 1025px) and (max-width: 1709px) {
    .username {
        margin-left: 3% !important;
        width: 45% !important;
    }
    .sign {
        margin-top: -12% !important;
        margin-left: 3% !important;
    }
    .label, .label1 {
        margin-left: 3% !important;
    }
    .line {
        margin-top: -450px !important;
    }
    .line2 {
        margin-top: -350px !important;
    }   
    .sign2, .sign3 {
        margin-left: 120px !important;
    }
    .sbutton {
        margin-left: 110px !important;
    }
    .notification {
        margin-left: 3% !important;
        width: 45% !important;
        font-size: 14px !important;
    }
    .button {
        margin-left: 3% !important;
        width: 46% !important;
    }
    .info {
        margin-left: 10px !important;
        margin-right: 10px !important;
        text-align: center;
    }
    .info2 {
        margin-left: 20px !important;
        width: 92% !important;
    }
    .checkbox2 {
        margin-left: 3% !important ;
    }
    .forgot {
        margin-left: 100px !important;
    }
}
@media (min-width: 768px) and (max-width: 1024px) {
    .shopBg {
        top: 8% !important;
    }
    .username {
        margin-left: 3% !important;
        width: 45% !important;
    }
    .sign {
        margin-top: -20% !important;
        margin-left: 3% !important;
    }
    .label, .label1 {
        margin-left: 3% !important;
    }
    .line {
        margin-top: -450px !important;
    }
    .line2 {
        margin-top: -350px !important;
    }   
    .sign2, .sign3 {
        margin-left: 120px !important;
    }
    .sbutton {
        margin-left: 110px !important;
    }
    .notification {
        margin-left: 3% !important;
        width: 45% !important;
        font-size: 14px !important;
    }
    .button {
        margin-left: 3% !important;
        width: 46% !important;
    }
    .info {
        margin-left: 10px !important;
        margin-right: 10px !important;
        text-align: center;
    }
    .info2 {
        margin-left: 20px !important;
        width: 92% !important;
    }
    .checkbox2 {
        margin-left: 3% !important ;
    }
    .forgot {
        margin-left: 100px !important;
    }
}

@media (min-width: 421px) and (max-width: 767px) {
    .shopTitle {
        top: -10% !important;
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
    .info {
        text-align: center !important;
        margin-left: 10px !important;
    }
    .sbutton {
        margin-left: 120px !important;
        margin-top: 20px !important;
    }
    .shopTitle {
        font-size: 80px !important;
    }
    .notification, .info2 {
        margin-left: 4% !important;
        width: 94% !important;
        font-size: 15px !important;
    }
    .sign2, .sign3 {
        margin-left: 130px !important;
        margin-top: 10% !important  ;
        font-size: 30px !important;
    }
    .sign {
        margin-left: 30px !important;
        margin-top: -22% !important  ;
        font-size: 30px !important;
        margin-bottom: 5% !important;
    }
    .checkbox2 {
        margin-left: 4% !important;
        margin-top: 18px !important;
    }
    .remember {
        margin-left: 5px !important;
        font-size: 14px !important;
    }
    .forgot {
        margin-left: 90px !important;
    }
     .button {
        margin-left: 4% !important;
        width: 92% !important;
     }
    .username {
        margin-left: 4% !important;
        width: 90% !important;
    }
    .label, .label1 {
    margin-left: 4% !important;
    }
    .line, .line2 {
        border: 1px solid black !important;
        margin-left: 4% !important;
        width: 92% !important;
        margin-top: 15% !important;
        border-bottom: none !important;
        border-right: none !important;
        border-left: none !important;
    }

}

@media (max-width: 420px) {
    .info {
        text-align: center !important;
        margin-left: 10px !important;
    }
    .sbutton {
        margin-left: 120px !important;
        margin-top: 20px !important;
    }
    .shopTitle {
        font-size: 60px !important;
    }
    .notification, .info2 {
        margin-left: 4% !important;
        width: 94% !important;
        font-size: 15px !important;
    }
    .sign2, .sign3 {
        margin-left: 130px !important;
        margin-top: 10% !important  ;
        font-size: 30px !important;
    }
    .sign {
        margin-left: 20px !important;
        margin-top: -50% !important  ;
        font-size: 30px !important;
        margin-bottom: 10% !important;
    }
    .checkbox2 {
        margin-left: 4% !important;
        margin-top: 18px !important;
    }
    .remember {
        margin-left: 5px !important;
        font-size: 14px !important;
    }
    .forgot {
        margin-left: 90px !important;
    }
     .button {
        margin-left: 4% !important;
        width: 92% !important;
     }
    .username {
        margin-left: 4% !important;
        width: 90% !important;
    }
    .label, .label1 {
    margin-left: 4% !important;
    }
    .line, .line2 {
        border: 1px solid black !important;
        margin-left: 4% !important;
        width: 92% !important;
        margin-top: 15% !important;
        border-bottom: none !important;
        border-right: none !important;
        border-left: none !important;
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
        top: -10% !important;
    }
}

.shopTitle {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 100px;
    text-align: center;
    top: -250px;
    position: relative;
    z-index: 1;
    color: rgb(255, 255, 255);
}

html,
body,
#app {
    margin: 0;
    padding: 0;
    height: 100%;
}

.shopBg {
    position: absolute;
    top: 16.5%;
    left: 0;
    width: 100vw;
    min-height: 100vh;
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
