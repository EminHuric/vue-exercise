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
    <div class="main-menu ">
        <a href="index.html">
            <span class="menu-item">HOME</span>
        </a>
        <a href="#">
            <span class="menu-item">SHOP</span>
        </a>
        <a href="#">
            <span class="menu-item">CONTACT</span>
        </a>
        <a href="#">
            <span class="menu-item">CATALOG</span>
        </a>
        <a href="#">
            <span class="fcd">FAMILY CARD DISCOUNT</span>
        </a>
    </div>
</template>

<style >
@media (min-width: 1921px) and (max-width: 3025px) {
  .categoriesButton {
    transform: translateX(20px) !important;
  }
  .main-menu {
    transform: translateX(60px) !important;
  }
}

@media (min-width: 1024px) and (max-width: 1920px) {
    .categoriesButton {
        margin-left: 310px !important;
    }

    .main-menu {
        margin-left: -70px !important;
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
    margin-top: 4px;
    position: absolute;
    display: flex;
    left: 37.4%;
    width: 1000%;
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