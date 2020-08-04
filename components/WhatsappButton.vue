<template>
  <div>
    <a href="" class="whatsapp-button font-weight-bold py-0 pl-5 pr-4 position-relative" @click.prevent="toContact()">
      <img src="/logo-whatsapp.png" alt="Logo Whatsapp Packing Perú" class="whatsapp-logo">
      COTIZAR
    </a>
  </div>
</template>

<script>
  import {appConfig} from "../env";

  export default {
    props: ['message'],
    methods: {
      toContact() {
        let message = `
          Buen día quiero mas información de *${this.message}*.
        `

        let number = appConfig.whatsapp
        window.open(`https://api.whatsapp.com/send?phone=${number}&text=${message}`)
      }
    }
  }
</script>

<style lang="scss">
.whatsapp-button {
  background-color: #25d366;

  font-size: 1.5em;

  color: white;

  display: inline-block;
  border-radius: 1.5rem;

  transform: scale(0.98);

  transition: transform .5s;

  &:hover {
    text-decoration: none;
    color: white;

    transform: scale(0.95);
  }
}

  .whatsapp-logo {
    position: absolute;
    top: -.5rem;
    left: -1rem;
    width: 30%;
  }
</style>
