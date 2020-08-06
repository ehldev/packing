<template>
<div class="container animated fadeInRight">
    <div class="filter mt-3">
      <button
        class="button"
        :class="{' button--active': tipo ==='con-asa'}"
        @click="changeType('con-asa')"
      >Con Asa</button>
      <button
        class="button"
        :class="{' button--active': tipo === 'sin-asa'}"
        @click="changeType('sin-asa')"
      >Sin Asa</button>
    </div>

    <section class="catalogo mt-3">
      <div class="row">
          <div class="col-md-6" v-for="(producto, idx) in productos_filtrados" :key="idx">
            <section
              class="producto border-0 animated fadeIn"
              @click="seleccionar(producto.id)"
              v-show="showProduct"
            >
              <div class="producto__descripcion">
                <span class="producto__id">{{producto.id}}</span>
                <span
                    class="producto__medidas"
                >{{`${producto.ancho} x ${producto.base} x ${producto.alto}`}}</span>
              </div>

              <div class="producto__img">
                <img :src="`http://publiexpress.pe/cotizaciones/${producto.id}.jpeg`" :alt="producto.id" />
              </div>
            </section>
          </div>
      </div>
    </section>

</div>
</template>

<script>
import productos_sin_asa from "@/data/productos_sin_asa.json";
import productos_con_asa from "@/data/productos_con_asa.json";

export default {
    data: () => ({
        tipo: "con-asa",
        showProduct: false
    }),
    mounted() {
      setTimeout(() => {
        this.showProduct = true
      }, 200)
    },
    computed: {
        productos_filtrados() {
            return this.tipo === "con-asa" ? productos_con_asa : productos_sin_asa;
        }
    },
    methods: {
        seleccionar(id) {
            // Emite un evento con el id del producto y el slide al que debe cambiar
            let data = {
                productId: id,
                slide: 3
            }

            this.$emit('select', data)
        },
        changeType(type) {
          this.tipo = type

          this.showProduct = false

          setTimeout(() => {
            this.showProduct = true
          }, 50)
        }
    }
}
</script>

<style lang="scss">
.button {
  margin: 0 4px;
  padding: 8px 48px;
  background: transparent;
  color: #fff;
  border-radius: 20px;
  font-size: 0.85rem;
  transition: background-color 0.3s;
  outline: 0 !important;

  &--active {
    background: $primary;
    // border-bottom: 4px solid $color-secondary;
  }
}

.catalogo {
  max-width: 90%;
  min-height: 500px;
  margin: 0 auto;
}

.producto {
  overflow: hidden;
  margin: 10px;
  color: #fff;
  border-radius: 8px;
  transition: transform 0.3s;
  cursor: pointer;
  display: flex;
  transform: scale(.98);

  &:hover {
    transform: scale(1);
  }

  &__descripcion {
    flex-grow: 1;
    padding: 20px;
    background: $primary;
    // background: #1c2a2a;
    // border-left: 4px solid $color-secondary;
    font-size: 0.85rem;
    text-align: center;
    font-weight: bold;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__medidas {
    margin-top: 10px;
    font-size: 0.75rem;
  }
  &__img {
    img {
      max-height: 150px;
    }
  }
}
</style>
