<script setup>

</script>

<template>
    <nav class="navBar">
        <div class="container">
            <router-link to="/shop">
                <span class="navLogo"><i class="fa-solid fa-store"></i></span><br>
                <span class="navName">Shop</span>
            </router-link>
            <router-link to="/favorite">
                <span class="navLogo1"><i class="far fa-heart"></i></span><br>
                <span class="navName1">Favorite</span>
            </router-link>
            <a href="#" class="bag">
                <span class="navLogo2"><i class="fa-solid fa-bag-shopping bagIcon"></i></span><br>
                <span class="navName2">Favorite</span>
            </a>
            <a href="#" class="acc">
                <span class="navLogo3"><i class="fa-regular fa-user"></i></span><br>
                <span class="navName3">Account</span>
            </a>
        </div>
    </nav>
</template>

<style scoped>
.navBar {
    display: none;
}

@media (min-width: 768px) and (max-width: 1024px) {
    .navBar {
        justify-content: center;
        text-align: center;
        justify-self:center;
    }
    .navLogo3 {
        position: absolute;
        top: 10px;
        left: 81.8%;
        font-size: 20px;
        color: #2e2c2c;
    }

    .navName3 {
        position: absolute;
        top: 35px;
        left: 79.7%;
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
        color: #2e2c2c;

    }
    .acc {
        margin-left: 9900px;
    }
    .bag {
        margin-left: 500px;
    }
    .navLogo2 {
        position: absolute;
        top: 10px;
        left: 57.3%;
        font-size: 20px;
        color: #2e2c2c;
    }

    .navName2 {
        position: absolute;
        top: 35px;
        left: 55%;
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
        color: #2e2c2c;

    }
    .navLogo1 {
        position: absolute;
        top: 10px;
        left: 35%;
        font-size: 20px;
        color: #272626;
    }

    .navName1 {
        position: absolute;
        top: 35px;
        left: 33%;
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
        color: #2e2c2c;
    }

    .navLogo {
        position: absolute;
        top: 10px;
        left: 11.7%;
        font-size: 20px;
        color: #2e2c2c;
    }

    .navName {
        position: absolute;
        top: 35px;
        left: 11%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        color: #2e2c2c;
    }

    .navBar {
        border: 1px solid rgb(255, 255, 255);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
        height: 60px;
        width: 100%;
        background: rgb(255, 255, 255);
        position: fixed;
        left: 0;
        bottom: 0;
        padding-left: 30px;
        display: block;
    }
}
</style>