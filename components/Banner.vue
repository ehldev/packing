<template>
<main class="banner bg-info position-relative animated fadeIn">
  <div class="container d-flex flex-column">
    <div class="row justify-content-center mt-5">
      <div class="col-md-5 d-flex flex-column justify-content-center text-left">

        <div class="logo d-flex justify-content-center align-items-center">
          <img src="/logo-packing-peru.png" alt="Logo Packing Perú" class="logo__image mt-4 mt-md-0">
        </div>

        <h2 class="text-danger font-weight-bold pre-title">
          DESDE 50
          <span class="d-inline-block ml-3">UND</span>
        </h2>
        <h1 class="text-primary font-weight-bold title">BOLSAS DE PAPEL</h1>
        <h2 class="bg-primary text-white align-self-start d-inline-block py-1 px-2 post-title">CON ASA Y SIN ASA</h2>

        <whatsapp-button class="ml-2 mt-3" message="Bolsas de Papel"></whatsapp-button>
      </div>

      <div class="col-md-6 second-column mt-5 mt-md-0">
        <img src="/productos/bolsa-slide.webp" alt="BOLSAS DE PAPEL" class="img-fluid banner__image">
      </div>
    </div>

    <!-- Carousel -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
    >
      <div class="w-100 mt-3 mt-md-5 mt-lg-3" v-if="loadCarousel">
      <!-- Mobile -->
      <swiper class="swiper px-4 d-lg-none" :options="swiperOptionMobile">
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-knn.webp" alt="Cliente Knn" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-azucar.webp" alt="Cliente Azucar" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-aduma.webp" alt="Cliente Aduma" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-chakrabox.webp" alt="Cliente Chakrabox" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-adriana-rosas.webp" alt="Cliente Adriana Rosas" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-leoni.webp" alt="Cliente Leoni" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-mora-fashion.webp" alt="Cliente Mora Fashion" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-rumbero.webp" alt="Cliente Rumbero" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-mobbe.webp" alt="Cliente Mobbe" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-baqat.webp" alt="Cliente Bagat" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-cata-mia.webp" alt="Cliente Cata Mia" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-efimera.webp" alt="Cliente Efimera" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-fresa-morena.webp" alt="Cliente Fresa Morena" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-kaita.webp" alt="Cliente Kaita" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-kascanueces.webp" alt="Cliente Kascanueces" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-la-casona-angamos.webp" alt="Cliente La casona Angamos" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-lalana.webp" alt="Cliente Lalana" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-lentes-del-peru.webp" alt="Cliente Lentes del Perú" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-reine-de-pomes.webp" alt="Cliente Reine de pomes" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-rosue.webp" alt="Cliente Rosue" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-work-out.webp" alt="Cliente Work out" class="img-fluid client-logo">
          </div>
        </swiper-slide>

      </swiper>

      <!-- Desktop -->
      <swiper class="swiper d-none d-lg-block" :options="swiperOption">
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-knn.webp" alt="Cliente Knn" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-azucar.webp" alt="Cliente Azucar" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-aduma.webp" alt="Cliente Aduma" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-chakrabox.webp" alt="Cliente Chakrabox" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-adriana-rosas.webp" alt="Cliente Adriana Rosas" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-leoni.webp" alt="Cliente Leoni" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-mora-fashion.webp" alt="Cliente Mora Fashion" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-rumbero.webp" alt="Cliente Rumbero" class="img-fluid client-logo">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-mobbe.webp" alt="Cliente Mobbe" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-baqat.webp" alt="Cliente Bagat" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-cata-mia.webp" alt="Cliente Cata Mia" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-efimera.webp" alt="Cliente Efimera" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-fresa-morena.webp" alt="Cliente Fresa Morena" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-kaita.webp" alt="Cliente Kaita" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-kascanueces.webp" alt="Cliente Kascanueces" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-la-casona-angamos.webp" alt="Cliente La casona Angamos" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-lalana.webp" alt="Cliente Lalana" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-lentes-del-peru.webp" alt="Cliente Lentes del Perú" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-reine-de-pomes.webp" alt="Cliente Reine de pomes" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-rosue.webp" alt="Cliente Rosue" class="img-fluid client-logo">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="d-flex justify-content-center align-items-center client-logo-container">
            <img src="/logo-clientes/cliente-work-out.webp" alt="Cliente Work out" class="img-fluid client-logo">
          </div>
        </swiper-slide>

      </swiper>
    </div>
    </transition>
  </div>

  <div class="cotizador bg-primary" @click="toContact()">
    <h2 class="text-white font-weight-bold py-1 px-4">COTIZADOR ONLINE</h2>
  </div>
</main>
</template>

<script>
  import WhatsappButton from '@/components/WhatsappButton'

  export default {
    data() {
      return {
        swiperOptionMobile: {
          slidesPerView: 4,
          spaceBetween: 0,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          }
        },
        swiperOption: {
          slidesPerView: 9,
          spaceBetween: 0,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          }
        },
        loadCarousel: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.loadCarousel = true
      }, 1500)
    },
    components: {
      WhatsappButton
    },
    methods: {
      toContact() {
        let item = document.getElementById('cotizar')

        this.$smoothScroll({
          scrollTo: item,
          offset: -50,
          updateHistory: false
        })
      }
    }
  }
</script>

<style lang="scss">
  .banner {
    width: 100%;
    min-height: 98vh;

    border: 25px solid white;

    overflow: hidden;

    @media (min-width: 768px) {
      min-height: 70vh;
    }

    @media (min-width: 1024px) {
      min-height: 50vh;
    }

    @media (min-width: 1200px) {
      min-height: 90vh;
    }

    &__image {
      max-width: 90%;

      @media (min-width: 768px) {
        margin-top: 8rem;
      }

      @media (min-width: 1200px) {
        margin-top: 0;
      }

      animation: jump_low-data 2s infinite;
    }

    .client-logo-container {
      width: 20vw;
      height: 20vw;

      @media (min-width: 768px) {
        height: 7vw;
      }

      @media (min-width: 1200px) {
        width: 10vw;
      }
    }

    .client-logo {
      max-width: 70%;
      max-height: 5vw;

      @media (min-width: 768px) {
        max-width: 50%;
        max-height: 5vw;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      opacity: 1;
      &::after {
        content: '';
      }
    }

    .pre-title {

      font-size: 1.4em;

      @media (min-width: 400px) {
        font-size: 1.6em;
      }

      margin-top: 5rem;

      @media (min-width: 768px) {
        margin-top: 10rem;
      }

      @media (min-width: 992px) {
        font-size: 2em;
        margin-top: 0;
      }
    }

    .title {
      font-size: 1.6em;

      @media (min-width: 400px) {
        font-size: 1.8em;
      }

      @media (min-width: 768px) {
        font-size: 2em;
        line-height: 2rem;
      }

      @media (min-width: 992px) {
        font-size: 2.5em;
        line-height: 2rem;
      }
    }

    .post-title {
      font-size: 1.4em;

      @media (min-width: 400px) {
        font-size: 1.6em;
      }

      @media (min-width: 992px) {
        font-size: 2em;
      }
    }
  }

  .logo {
    background-image: url("/fondo-logo.png");
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    width: 45vw;
    min-height: 150px;

    position: absolute;
    top: -22vw;
    left: 1rem;

    @media (min-width: 768px) {
      width: 25vw;
      top: -10vw;
      left: 0;
    }

    @media (min-width: 1024px) {
      width: 20vw;
      top: -7vw;
      left: 0;
    }

    @media (min-width: 1200px) {
      width: 15vw;
      top: -6vw;
      left: 0;
    }

    @media (min-width: 1400px) {
      width: 15vw;
      top: -3vw;
      left: 0;
    }

    &__image {
      max-width: 60%;
    }
  }

  .cotizador {
    font-size: 1em;

    height: max-content;

    margin: auto;

    position: absolute;
    right: -35vw;
    top: 0;
    bottom: 0;

    transform: rotate(270deg) scale(0.98);

    transition: transform .1s;

    cursor: pointer;

    &:hover {
      transform: rotate(270deg) scale(0.97);
    }

    @media (min-width: 400px) {
      right: -30vw;
    }

    @media (min-width: 768px) {
      right: -16.5vw;
    }

    @media (min-width: 1024px) {
      right: -12vw;
    }

    @media (min-width: 1200px) {
      right: -9.5vw;
    }

    @media (min-width: 1400px) {
      right: -8vw;
    }

    @media (min-width: 1600px) {
      right: -7vw;
    }

    @media (min-width: 1800px) {
      right: -6vw;
    }

    h2 {
      font-size: 1.5em;
    }
  }
</style>
