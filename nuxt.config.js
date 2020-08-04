
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css' }
    ],
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-173473721-1', async: true}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: './scss/app.scss', lang: 'scss' }
  ],
  loading: { color: '#Eb4056' },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/carousel.js', mode: 'client'},
    { src: "~/plugins/scroll.js", mode: 'client' },
    { src: "~/plugins/gtag.js", mode: 'client' },
    { src: "~/plugins/animated.js", mode: 'client' },
    { src: "~/plugins/googleTag.js", mode: 'client' },
    { src: "~/plugins/aos.js", mode: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    'nuxt-facebook-pixel-module'
  ],
  bootstrapVue : {
    bootstrapCSS : false , // false para que no importe los archivos por defecto
    bootstrapVueCSS : false
  },
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '290505995492823',
    disabled: false
  },
  styleResources: {
    scss: [
      './scss/_variables.scss'
    ]
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
