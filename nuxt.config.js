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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/convite-cha-revelacao/favicon.ico' }],
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
      '/tia_nilda_%26_família',
      '/paula_nunes',
      '/bruno_diniz',
      '/henrique_diniz_%26_família',
      '/joão_vitor_%26_família',
      '/vovó_nicinha',
      '/neto_%26_dani',
      '/casal_chupa_manga',
      '/família_dellinghausen',
      '/patrícia_%26_sidney',
      '/bruna_%26_marco_túlio',
      'jessica_%26_rodney',
      'tia_veri_%26_família',
      'adriana_%26_múcio',
      'tio_caio_%26_família',
      'tia_aglair_%26_família',
      'lucilla_%26_família',
      'tia_mariinha_%26_tio_gilson',
      'tio_daniel_%26_tia_nilda',
      'tia_miriãm_%26_família',
      'tio_marcelo_%26_família',
      'tio_carlinhos_%26_família',
      'júnia',
      'fabrício_%26_raquel',
      'bruno_do_fiufiu_%26_família',
      'fefis',
      'nati_que_não_bebe',
      'carlos',
      'willian_%26_família',
      'daniel_almeida',
      'titia_chris',
      'titia_roberta',
      'júnior'
    ],
  },
}
