<script setup>

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
                    <div class="category1"><i class="fas fa-microchip"></i> <span
                            style="margin-left: 5px;">Gadgets</span> </div>
                </a>
                <a href="">
                    <div class="category"><i class="fa-solid fa-kitchen-set"></i> <span
                            style="margin-left: 5px;">Kitchen</span></div>
                </a>
                <a href="">
                    <div class="category"><i class="fas fa-seedling"></i> <span style="margin-left: 5px;">Home and
                            Garden</span></div>
                </a>
                <a href="">
                    <div class="category"><i class="fas fa-heartbeat"></i> <span style="margin-left: 5px;">Health &
                            Beauty</span></div>
                </a>
                <a href="">
                    <div class="category"><i class="fas fa-tag"></i> <span style="margin-left: 5px;">Action</span></div>
                </a>
            </ul>
        </div>
    </div>
    <div class="main-menu">
        <router-link to="/">
            <span class="menu-item">HOME</span>
        </router-link>

        <router-link to="/shop">
            <span class="menu-item">SHOP</span>
        </router-link>

        <router-link to="/contact">
            <span class="menu-item">CONTACT</span>
        </router-link>

        <router-link to="/catalog">
            <span class="menu-item">CATALOG</span>
        </router-link>

        <router-link to="/family-card">
            <span class="fcd">FAMILY CARD DISCOUNT</span>
        </router-link>
    </div>

</template>

<style>
@media (min-width: 2412px) and (max-width: 3025px) {
    .main-menu {
        transform: translateX(-150px) !important;
    }

    .categoriesButton {
        transform: translateX(20px);
    }
}

@media (min-width: 2201px) and (max-width: 3025px) {
    .main-menu {
        transform: translateX(-120px);
    }
}

@media (min-width: 1921px) and (max-width: 3025px) {
    .categoriesButton {
        margin-left: 620px !important;
    }

    .fcd {
        margin-left: 400px !important;
    }

    .main-menu {
        margin-left: 120px !important;
    }
}

@media (min-width: 1025px) and (max-width: 1108px) {
  .main-menu {
    left: 180px !important; /* pomeraš sa 130px na 150px */
  }
}

@media (min-width: 1024px) and (max-width: 1920px) {
    .categoriesButton {
        margin-left: 310px !important;
    }

    .main-menu {
        margin-left: 0px !important;
    }

    .menu-item,
    .fcd {
        margin-left: 0;
    }
    .categories {
        margin-left: 310px !important;
    }
}

@media (min-width: 1029px) and (max-width: 1702px) {
    .categoriesButton {
        transform: translateX(-5px) !important;
    }

    .categories {
        transform: translateX(-5px) !important;
    }

    .fcd {
        transform: translateX(0px) !important;
    }
}

@media (min-width: 1029px) and (max-width: 1709px) {
    .categoriesButton {
        transform: translateX(240px);
    }

    .categories {
        transform: translateX(240px);
    }

    .fcd {
        transform: translateX(210px);
        display: block;
    }

}

@media (min-width: 1024px) and (max-width: 1709px) {
    .categoriesButton {
        margin-left: 20px !important;
    }

    .categories {
        margin-left: 20px !important;
    }

    .fcd {
        margin-left: 290px !important;
    }

    .main-menu {
        transform: translateX(-60px) !important;
    }

    .fcd {
        margin-left: 290px !important;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .mm {
        display: none;
    }

    .main-menu a {
        display: none;
    }
}
@media (min-width: 421px) and (max-width: 767px) {
    .mm {
        display: none;
    }
    .main-menu a {
        display: none;
    }
}
@media (max-width: 420px) {
    .mm {
        display: none;
    }

    .main-menu a {
        display: none;
    }
}

.fcd {
    margin-left: 390px;
    font-size: 13px;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
}

.menu-item {
    margin-left: 25px;
    font-size: 13px;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
}

.main-menu a {
    text-decoration: none;
}

.main-menu {
    position: absolute;
    top: 147px;
    left: 130px;
    right: 0;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    margin: 0;
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
    background-color: white;
    margin-left: 27%;
    width: 248px;
    height: 222px;
    display: none;
    margin-top: 45px;
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
    height: 14px;
    width: 220px;
    margin-left: 27%;
    padding: 15px;
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