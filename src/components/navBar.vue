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
    .navLogo3 {
        position: absolute;
        top: 10px;
        left: 655px;
        font-size: 20px;
        color: #2e2c2c;
    }

    .navName3 {
        position: absolute;
        top: 35px;
        left: 635px;
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
        color: #2e2c2c;

    }
    .acc {
        margin-left: 500px;
    }
    .bag {
        margin-left: 500px;
    }
    .navLogo2 {
        position: absolute;
        top: 10px;
        left: 479px;
        font-size: 20px;
        color: #2e2c2c;
    }

    .navName2 {
        position: absolute;
        top: 35px;
        left: 460px;
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
        color: #2e2c2c;

    }
    .navLogo1 {
        position: absolute;
        top: 10px;
        left: 286px;
        font-size: 20px;
        color: #272626;
    }

    .navName1 {
        position: absolute;
        top: 35px;
        left: 270px;
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
        color: #2e2c2c;
    }

    .navLogo {
        position: absolute;
        top: 10px;
        left: 87px;
        font-size: 20px;
        color: #2e2c2c;
    }

    .navName {
        position: absolute;
        top: 35px;
        left: 80px;
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