<template>
    <div class="shopBg">
        <div v-if="product">
            <h1>{{ product.name }}</h1>
            <img :src="product.image" :alt="product.name" />
            <p>Price: ${{ product.price }}</p>
            <p>{{ product.description }}</p>
        </div>
        <div v-else>
            <p>Product not found.</p>
        </div>
        <MainFooter />
    </div>
</template>

<script setup>
import MainFooter from '../components/mainFooter.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = Number(route.params.id)

const products = [
    { id: 1, name: "T-Shirt", price: 19.99, image: "https://via.placeholder.com/150", description: "Comfortable cotton t-shirt." },
    { id: 2, name: "Sneakers", price: 491.99, image: "https://via.placeholder.com/150", description: "Stylishd and comfy sneakers." },
    { id: 3, name: "Hat", price: 9.99, image: "https://via.placeholder.com/150", description: "Classic hat for all seasons." },
]

const product = products.find(p => p.id === productId)
</script>

<style scoped>
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
</style>
