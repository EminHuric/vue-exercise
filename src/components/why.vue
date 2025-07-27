<script setup>

</script>

<template>
    <div class="why">
        <h1 class="h1">Why shop at Your Hotel City</h1>
        <div class="container">
            <div id="frame" class="f1">
                <p class="ship"><i class="fa-solid fa-truck-fast"></i></p>
                <h2 class="subtitle">Delivery within 48 hours</h2>
                <p class="text">We understand how important it is for your products to arrive quickly and safely within
                    the desired
                    time frame.
                    Therefore, we have established an efficient delivery system that allows your order to be delivered
                    within 48 hours from the moment of purchase.
                </p>
            </div>
            <div id="frame" class="f2">
                <p class="ship"><i class="fa-solid fa-headset"></i></p>
                <h2 class="subtitle">24/7 support</h2>
                <p class="text">Our team of customer service experts are always here to help you with any questions or
                    concerns you may have.
                    We provide quick answers to all your questions and solve all your requests so that you have the best
                    shopping experience.
                </p>
            </div>
            <div id="frame" class="f3">
                <p class="ship"><i class="fas fa-credit-card fa"></i></p>
                <h2 class="subtitle">Payment</h2>
                <p class="text">Favorable prices: In addition to quality products, we also offer competitive prices.
                    Our aim is to give you value for money and ensure you get the best deal possible. We also offer you
                    the option of cash payment upon collection.
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
@media (min-width: 1741px) and (max-width: 2200px) {
    .f1 {
        margin-left: 17% !important;
        width: 100% !important;
    }
}
@media (max-width: 420px) {
    .f1 {
        width: 100% !important;
        width: 1000000% !important;
        margin-top: 10% !important;
        margin-right: 10% !important;
        margin-left: 5% !important;
    }
    .h1 {
        margin-top: 150% !important;
        font-size: 35px !important;
    }
   
    .f2 {
        margin-top: 80% !important;
        width: 1000000% !important;
        margin-left: -100% !important;
        margin-right: -20% !important;
    }
    .f3 {
        margin-top: 150% !important;
        width: 1000000% !important;
        margin-left: -70% !important;
        margin-right: 5% !important;
    }
    .why {
        margin-bottom: -75% !important;
    }
}
.subtitle {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}

.text {
    font-family: Arial, Helvetica, sans-serif;
    margin: 10px;
    color: rgb(121, 119, 119);
}

.ship {
    margin-top: 5%;
    font-size: 30px;
}

.f1 {
    margin-left: 27%;
}

.f2,
.f3 {
    margin-left: 2%;
}

#frame {
    border: 1px solid rgb(255, 255, 255);
    height: 400px;
    width: 350px;
    margin-top: 2%;
}

.h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
}

.why {
    text-align: center;
    margin-bottom: 0px;
    margin-top: 200px;
}
</style>