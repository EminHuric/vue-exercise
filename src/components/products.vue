<template>
    <div class="container">

        <div class="line">
            <img class="product" src="https://monetizead.com/assets/media/ecom1.png" alt="product1">
            <p class="m6">M6 Smart Watch</p>
            <p class="desc">Wireless Charging Case</p>
        </div>

        <div class="line">
            <img class="product2" src="https://monetizead.com/assets/media/ecom2.png" alt="product2">
            <p class="m6">Thermos Bottle</p>
            <p class="desc">Thermos Bottle with display panel</p>
        </div>

        <div class="line">
            <img class="product3" src="https://monetizead.com/assets/media/ecom3.png" alt="product3">
            <p class="m6">Drone</p>
            <p class="desc">Drone + two batteries</p>
        </div>

        <div class="line" @click="setPage(page)">
            <img class="product4" src="https://img.kwcdn.com/product/fancy/698cadfc-17aa-4c3c-acc8-2b24b5337f56.jpg?imageView2/2/w/800/q/70/format/webp" alt="product4">
            <p class="m6">Headphones</p>
            <p class="desc">Wireless headphones for Android</p>
        </div>

    </div>
</template>

<script setup>
</script>

<style scoped>
.desc {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    text-align: center;
    margin-top: -12px;
}

.line {
    border: 1px solid rgb(168, 167, 167);
    height: 555px;
    width: 500px;
    margin-left: 50px;
    flex-shrink: 0;
    border-radius: 14px;
}

.container {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 10px;
    max-width: 100%;
    box-sizing: border-box;

}

.container::-webkit-scrollbar {
    height: 10px;
}

.container::-webkit-scrollbar-track {
    background: transparent;
}

.container::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.product {
    width: 250px;
    margin: 36px 135px 10px 113px;
}

.product2 {
    width: 210px;
    margin: 4px 155px 40px 155px;
}

.product3 {
    width: 290px;
    margin: 50px 105px 105px 105px;
}

.product4 {
    width: 290px;
    margin: 30px 105px 95px 105px;
}

.m6 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    color: rgb(31, 143, 31);
    font-weight: bold;
    text-align: center;
}
</style>