<template>
<section id="cotizar" class="form bg-danger text-white py-5">
    <div class="container py-5">
        <div class="text-center">
            <h2 class="font-weight-bold mb-0 cotizar__titulo mb-4">¡COTIZA ONLINE EN SEGUNDOS!</h2>
            <h3 class="mt-1 identificate" v-if="currentSlide === 1">Identifícate</h3>
        </div>

        <div class="row">
            <div class="col-lg-2 d-flex justify-content-center align-items-end mb-3 mb-md-0" v-if="currentSlide != 3">
                <img src="/contacto/certificado-fsc.webp" alt="Certificado Fsc" class="form__image image-pulse d-none d-md-block">
            </div>

            <div class="text-center overflow-hidden" :class="currentSlide != 3 ? 'col-lg-8' : 'col-lg-12'">

            <form-contact key="1" @validate="next($event)" v-if="currentSlide === 1"></form-contact>

            <catalogo @select="mostrarCotizador($event)" v-if="currentSlide === 2"></catalogo>

            <cotizador @back="next($event)" v-if="currentSlide === 3"></cotizador>

            <div class="text-center d-flex flex-column justify-content-center mt-5">
                <p class="form__text align-self-center">
                Nota: Los datos proporcionados son confidenciales y
                para uso exclusivo de Publi Express.
                </p>

                <p>Packing Perú tiene el respaldo del grupo Ando Marketing</p>
            </div>

            </div>

            <div class="col-lg-2 d-flex justify-content-center align-items-end mt-3 mt-md-0" v-if="currentSlide != 3">
                <img src="/contacto/recicla.webp" alt="Reciclaje" class="form__image image-pulse">
            </div>
        </div>
    </div>
</section>
</template>

<script>
import FormContact from '@/components/FormContact'
import Catalogo from '@/components/Catalogo'
import Cotizador from '@/components/Cotizador'

export default {
    data() {
        return {
            currentSlide: 1
        }
    },
    components: {
        FormContact,
        Catalogo,
        Cotizador
    },
    methods: {
        next(value) {
            let item = document.getElementById('cotizar')

            this.$smoothScroll({
                scrollTo: item,
                offset: -50,
                updateHistory: false
            })

            setTimeout(() => {
                this.currentSlide = parseInt(value)
            }, 500)
        },
        mostrarCotizador(data) {
            let productId = data.productId

            // Se guarda el id en vuex para ser recuperado en el cotizador
            this.$store.commit('setProductId', productId)

            this.next(data.slide)
        }
    }
}
</script>

<style lang="scss">
.cotizar {
    &__titulo {
        font-size: 1.7em;
    }
}
</style>