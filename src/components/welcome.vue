<script setup>

</script>

<template>
    <div class="vrd">
        <p class="wP">Welcome to our official store, quality comes first</p>
        <div class="email"></div>
        <p class="t">ehrx09@gmail.com</p>
        <p class="tt">tel:+381652206269</p>
    </div>
</template>

<style scoped>
@media (min-width: 2758px) and (max-width: 3025px) {
    .wP {
        transform: translateX(270px) !important; 
    }
     .t {
        transform: translateX(200px) !important;
    }
    .tt {
        transform: translateX(200px) !important;
    }
}
@media (min-width: 1024px) and (max-width: 1920px) {
    .wP {
        margin-left: 315px !important;
    }
    .t {
        margin-left: -80px !important;
    }
}
@media (min-width: 1029px) and (max-width: 1702px) {
    .wP {
       transform: translateX(12px) !important;
    }
    .t {
        transform: translateX(30px) !important;
    }
    .tt {
        transform: translateX(0px) !important;
    }
  }
@media (min-width: 1024px) and (max-width: 1708px) {
  .wP {
    transform: translateX(260px);
  }
  .t {
    transform: translateX(250px);
  }
  .tt {
    transform: translateX(220px);
  }
}
@media (min-width: 1025px) and (max-width: 1709px) {
    .wP {
        margin-left: -240px !important;
    }
    .t {
        margin-left: 60px !important;
    }
    .tt {
        margin-left: 40px !important;
    }
}
@media (min-width: 1029px) and (max-width: 1709px) {
    .wP {
        margin-left:  0px !important;
    }
    .t {
        margin-left: 40px !important;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .email,
    .t,
    .tt {
        display: none;
    }
    .wP {
        margin-left: 28% !important;
    }
}
@media (min-width: 421px) and (max-width: 767px) {
    .wP {
        margin-left: 20px !important;
        font-size: 14px !important;
        position: absolute;
        left: 13%;
    }
    .tt, .t {
        display: none;
    }
}
@media (max-width: 420px) {
  .wP {
    margin-left: 9% !important;
    margin-right: -100% !important;
    font-size: 15px !important;
    text-align: center;
  }
  .t,
  .tt,
  .email {
    display: none;
  }
  .menuS {
    height: 15px !important;
  }
}


.tt {
    margin-left: 10px;
    margin-top: 13px;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    padding-right: 10px;
    color: #ffffff;
}

.t {
    margin-left: -275px;
    border: 1px solid rgb(255, 255, 255);
    height: 20px;
    border-top: none;
    border-bottom: none;
    border-left: none;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    padding-right: 10px;
    color: #ffffff;
    margin-top: 13px;

}

.email {
    border: 1px solid rgb(12, 173, 12);
    margin-left: 33%;

}

.wP {
    margin-top: 12px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 15px;
    margin-left: 620px;

}

.vrd {
    border: 1px solid rgb(12, 173, 12);
    height: 40px;
    background-color: rgb(12, 173, 12);
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    font-size: 15px;
    display: flex;

}
</style>