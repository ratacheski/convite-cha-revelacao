export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Convite Chá Revelação',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      {
        property: 'og:image',
        itemprop: 'image',
        content: '/convite-cha-revelacao/convite.jpeg',
      },
      {
        property: 'og:site_name',
        content: 'Convite Chá Revelação',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Alice ou Miguel?' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/convite-cha-revelacao/favicon.ico',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    base: '/convite-cha-revelacao/',
  },

  generate: {
    routes: [
      '/vovó_rosario',
      '/vovó_neusa',
      '/titio_lucas',
      '/titia_bárbara',
      '/titio_renato',
      '/titia_laís',
      '/titia_fernanda',
      '/joana',
      '/tia_lasinha',
      '/tia_nilda_&_família',
      '/paula_nunes',
      '/bruno_diniz',
      '/henrique_diniz_&_família',
      '/joão_vitor_&_família',
      '/vovó_nicinha',
      '/neto_&_dani',
      '/casal_chupa_manga',
      '/família_dellinghausen',
      '/patrícia_&_sidney',
      '/bruna_&_marco_túlio',
      'jessica_&_rodney',
      'tia_veri_&_família',
      'adriana_&_múcio',
      'tio_caio_&_família',
      'tia_aglair_&_família',
      'lucilla_&_família',
      'tia_mariinha_&_tio_gilson',
      'tio_daniel_&_tia_nilda',
      'tia_miriãm_&_família',
      'tio_marcelo_&_família',
      'tio_carlinhos_&_família',
      'júnia',
      'fabrício_&_raquel',
      'bruno_do_fiufiu_&_família',
      'fefis',
      'nati_que_não_bebe',
      'carlos',
      'willian_&_família',
      'daniel_almeida',
      'titia_chris',
      'titia_roberta',
      'júnior',
    ],
  },
}
