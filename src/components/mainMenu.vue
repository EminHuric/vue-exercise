<script>

</script>

<template>
    <div class="mm">
        <div class="categoriesButton">
            <span class="bar"><i class="fa-solid fa-bars"></i></span>
            <span class="categ">CATEGORIES</span>
            <span class="downArrow"><i class="fa-duotone fa-solid fa-chevron-down"></i></span>
        </div>
        <div class="categories">
            <ul>
                <a href="">
                    <div class="category1"><i class="fas fa-microchip"></i> <span style="margin-left: 5px;">Gadgets</span> </div>
                </a>
                <a href="">
                    <div class="category"><i class="fa-solid fa-kitchen-set"></i> <span style="margin-left: 5px;">Kitchen</span></div>
                </a>
                <a href="">
                    <div class="category"><i class="fas fa-seedling"></i> <span style="margin-left: 5px;">Home and Garden</span></div>
                </a>
                <a href="">
                    <div class="category"><i class="fas fa-heartbeat"></i> <span style="margin-left: 5px;">Health & Beauty</span></div>
                </a>
                <a href="">
                    <div class="category"><i class="fas fa-tag"></i> <span style="margin-left: 5px;">Action</span></div>
                </a>
            </ul>
        </div>
    </div>
    <div class="main-menu ">
        <a href="index.html">HOME</a>
        <a href="#">SHOP</a>
        <a href="#">CONTACT</a>
        <a href="#">CATALOG</a>
        <a href="#" style="margin-left: 16%;">FAMILY CARD DISCOUNT</a>
    </div>
</template>

<style scoped>
.main-menu a {
    margin-left: 25px;
    font-size: 13px;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
}
.main-menu {
    margin-top: 150px;
    position: absolute;
    margin-left: 37.4%;
    width: 100%;
}
.categoriesButton:hover~.categories,
.categories:hover {
    display: block;
}

ul a {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    text-decoration: none;
    color: #000;
}

.category {
    border: 1px solid rgb(221, 221, 221);
    height: 13px;
    padding: 15px;
    font-size: 15px;
    margin-left: -40px;
}

.category1 {
    border: 1px solid rgb(221, 221, 221);
    height: 13px;
    margin-left: -40px;
    margin-top: -17px;
    padding: 15px;
    font-size: 15px;

}

.categories {
    border: 1px solid rgb(221, 221, 221);
    margin-left: 27%;
    width: 248px;
    height: 222px;
    display: none;
}

.downArrow {
    font-size: 15px;
    margin-left: 82px;
}

.categ {
    margin-top: -15px;
    font-size: 15px;
    margin-left: 10px;
}

.categoriesButton {
    border: 1px solid rgb(12, 173, 12);
    background-color: rgb(12, 173, 12);
    height: 15px;
    width: 220px;
    margin-left: 27%;
    padding: 14px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    position: absolute;
}

.bar {
    font-size: 15px;
    color: white;

}

.mm {
    border: 1px solid rgb(221, 221, 221);
    height: 45px;
    background-color: white;
    position: absolute;
    width: 100%;
    left: 0px;
    top: 145px;
    border-left: none;
    border-right: none;
}
</style>