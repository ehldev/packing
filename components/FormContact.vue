<template>
<div>
    <v-form ref="form" class="form border-0" @submit.prevent="validate">
        <v-text-field
            class="text-field"
            v-model.trim="nombre"
            :rules="[rules.required]"
            label="Nombre de contacto"
            autocomplete="off"
            required
            dark
        ></v-text-field>

        <v-text-field
            class="text-field"
            v-model.trim="telefono"
            :rules="[rules.required]"
            label="Teléfono / Celular"
            autocomplete="off"
            required
            dark
        ></v-text-field>

        <v-text-field
            class="text-field"
            v-model.trim="correo"
            :rules="[rules.required, rules.email]"
            label="Correo Electrónico"
            autocomplete="off"
            required
            dark
        ></v-text-field>

        <v-select
            name="distrito"
            :items="distritos"
            v-model="distrito"
            dark
            hide-details
            class="pt-0"
        ></v-select>

        <button type="submit" class="form__button text-danger font-weight-bold py-2 px-4" :disabled="loading ? true : false">{{ loading ? 'ENVIANDO...' : 'INGRESAR' }}</button>
    </v-form>
</div>
</template>

<script>
import tarifa from '@/data/tarifa.json'

export default {
    data() {
        return {
            nombre: "",
            telefono: "",
            correo: "",
            show_error: false,
            distrito: "Cercado de Lima",
            distritos: [],
            rules: {
                required: value => !!value || "Requerido.",
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || "Correo Inválido.";
                }
            },
            loading: false,
        }
    },
    mounted() {
        this.distritos = Object.keys(tarifa);
    },
    methods: {
        validate() {
            if(this.$refs.form.validate()) {

                // Datos ennviados a Vuex para ser utilizados posteriormente
                this.$store.commit("setUsuario", {
                    persona: this.persona,
                    nombre: this.nombre,
                    telefono: this.telefono,
                    correo: this.correo,
                    distrito: this.distrito
                });

                this.$emit('validate', 2)
                
                return;
            }

            this.show_error = true;
        }
    }
}
</script>

<style lang="scss">
.v-application .error--text {
    color: rgba(white, .7) !important;
}
</style>