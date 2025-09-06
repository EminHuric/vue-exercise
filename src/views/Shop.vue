    <template>
      <div class="shopBg">
        <img alt="photo" src="/photo.avif" class="photo" />
        <h1 class="shopTitle">Shop</h1>

        <div class="products">
          <router-link v-for="product in products" :key="product.id" :to="`/product/${product.id}`" class="product">
            <button class="favorite"><i class="fa-regular fa-heart"></i></button>
            <button class="discount">{{ product.discount }}</button>
            <p class="mark">{{ product.mark }}</p>
            <p class="comment">{{ product.comment }}</p>
            <img v-if="product.image" :src="product.image" alt="Product Image" class="product1"
              :style="{ height: product.imageHeight + 'px' }" />

            <h3 class="productName"> {{ product.name }} </h3>
            <p style="margin-top: -10px;"><span class="oldPRice">{{ product.oldprice }}€</span> <span class="price">{{ product.price }}€</span></p>
            <button class="star"><i class="fa-regular fa-star"></i></button>
            <button class="readMore"><i class="fa-solid fa-cart-shopping outlined"></i></button>

          </router-link>
        </div>

        <MainFooter />
      </div>
    </template>

  <script setup>
  import MainFooter from '../components/mainFooter.vue'
  const product1 = '/product1.webp'
  const product2 = '/product2.avif'
  const product3 = '/product3.webp'
  const product4 = '/product4.jpg'
  const product5 = '/product5.jpg'
  const product6 = '/product6.webp'
  const product7 = '/product7.jpg'
  const product8 = '/product8.png'
  const product9 = '/product9.jpg'
  const product10 = '/product10.jpg'
  const product11 = '/product11.jpg'
  const product12 = '/product12.jpg'
  const product13 = '/product13.jpg'
  const product14 = '/product14.jpg'
  const product15 = '/product15.jpg'
  const product16 = '/product16.jpg'
  const product17 = '/product17.jpg'
  const product18 = '/product18.jpg'
  const product19 = '/product19.jpg'
  const product20 = '/product20.jpg'

  class Product {
    constructor(id, name, price, oldprice, image, category, discount, mark, comment) {
      this.id = id
      this.name = name
      this.price = price
      this.oldprice = oldprice
      this.image = image
      this.category = category
      this.discount = discount
      this.mark = mark
      this.comment = comment
    }
  }

  const products = [
    new Product(1, "SAMSUNG Galaxy s25ultra", 1299.99, 1499.99, product1, "Gadgedts", "13%", "TOP"),
    new Product(2, "Samsung Watch8", 367.29, 459.89, product2, "Gadgedts", "20%"),
    new Product(3, "Water boiler", 69.39, 1499.99, product3, "Kitchem", "42%", "TOP"),
  new Product(4, "BOSCH MAF671B1", 149.99, 175.99,  product4, "Gadgedts", "15%"),
    new Product(5, "METALAC Plitka serpa 2.8l", 16.99,  32.99, product5, "Gadgedts", "49%", "", "Lowered"),
    new Product(6, "Rowenta Pegla za kosu", 19.59, 29.24, product6, "Gadgedts", "33%",),
    new Product(7, "Toster za sendvice MAX", 59.69, 89.19, product7, "Gadgedts", "33%"),
    new Product(8, "Trimer", 13.75, 24.99, product8, "Beauty", "55%", "", "Lowered"),
    new Product(9, "SET LUX PESKIRA 4u1", 19.99, 24.38, product9, "Gadgedts", "18%",),
    new Product(10, "xGranit slavina Classy", 74.99, 120.19, product10, "Metalac", "37%", "TOP"),
    new Product(11, "Magicno crevo 15m", 22.55, 40.29, product11, "Gadgedts", "44%", "NEW"),
    new Product(12, "Deciji Skuter", 89.99, 129.99, product12, "Gadgedts", "30%"),
    new Product(13, "ROWENTA QV5040", 199.99, 249.99, product13, "Gadgedts", "20%", "", "special"),
    new Product(14, "Uvelicavajuci ekran", 9.99, 21.99, product14, "Gadgedts", "58%"),
    new Product(15, "Elektronski digitalni metar", 50.99, 59.99, product15, "Gadgedts", "15%", "NEW"),
    new Product(16, "KLASIČNI JASTUK 50X70", 11.99, 27.99, product16, "Gadgedts", "57%", "", "SOLD"),
    new Product(17, "ROSTILJ NA UGALJ 43CM", 99.99, 139.99, product17, "Gadgedts", "28%", "TOP"),
    new Product(18, "SET nozeva 5+1 GRATIS", 15.29, 23.91, product18, "Gadgedts", "26%"),
    new Product(19, "Fen za kosu MAX", 35.71, 52.31, product19, "Gadgedts", "31%"),
    new Product(20, "Dekorativni jatuk 40X40", 20.99, 22.50, product20, "Gadgedts", "14%", "", "special"),
  ]

  </script>

  <style scoped>
  .star {
    border: none;
    background: none;
    position: absolute;
    margin-top: -35px;
    margin-left: 215px;
    font-size: 16px;
  }
  .readMore:hover {
    height: 23px;
  }
  .readMore {
    border: none;
    background-color: rgb(24, 184, 24);
    color: white;
    width: 100%;
    height: 22px;
  }
  .favorite {
    position: absolute;
    margin-left: 215px;
    margin-top: 10px;
    background: none;
    border: none;
    font-size: 18px;
  }
  .comment {
    position: absolute;
    margin-top: 40px;
    margin-left: 10px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: red;
  }
  .mark {
    position: absolute;
    margin-top: 40px;
    margin-left: 11px;
    color: rgb(4, 0, 255);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
  .oldPRice {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    text-decoration: line-through;
    color: #949494;
    font-weight: 550;
    margin-left: 10px;
  }
  .discount {
    background-color: rgb(24, 167, 24);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    width: 40px;
    height: 20px;
    margin-left: 10px;
    margin-top: 10px;
    position: absolute;
  }

  .price {
    margin-left: 0px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    color: green;
    font-weight: bold;
  }

  .productName {
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
    margin-left: 5px;
    font-size: 18px;
  }

  .product1 {
    width: 80%;
    height: 195px;
    object-fit: cover;
    border-radius: 10px;
    display: block;
    margin: 0 auto;
    margin-top: 5px;
  }

  .product {
    border: 1px solid rgb(122, 122, 122);
    height: 304px;
    width: 250px;
    text-decoration: none;
    justify-content: center;
  }

  .product:hover {
    height: 305px;
    width: 254px;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(4, 250px);
    grid-auto-rows: 300px;
    gap: 30px;
    justify-content: center;
    margin-top: -5%;
  }

@media (min-width: 1741px) and (max-width: 2200px) {
  .product1 {
    height: 220px !important;
  }

  .shopBg {
    height: 190% !important;
  }

  .shopTitle {
    top: -18% !important;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .shopBg {
    top: 8% !important;
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

  .products {
    grid-template-columns: repeat(2, 250px);
  }

}

@media (max-width: 420px) {
  .product {
    width: 150px !important;
    height: 220px !important;
  }

  .product1 {
    height: 60% !important;
  }

  .products {
    grid-template-columns: repeat(2, 1fr);
    margin-top: -15% !important;
    margin-left: 2% !important;
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
