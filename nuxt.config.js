export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Résidence Hôtel krinjabo RHK',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Le plaisir d'un séjour princier",
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'keywords',
        content:
          'Krinjabo Hôtel,RHK,Yamoussoukro Hôtel,Krinjabo Yamoussoukro,Résidence Hôtel Krinjabo,Hôtel millionnaire Yamoussoukro,millionnaire Krinjabo Hôtel,Krinjabo',
      },
      { name: 'author', content: 'Segoor' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/css/superfish.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/css/bootstrap-datepicker.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/css/cs-select.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/css/cs-skin-border.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/css/themify-icons.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/css/flaticon.css',
      },
      { rel: 'stylesheet', type: 'text/css', href: '/css/icomoon.css' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/css/flexslider.css',
      },
      { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' },
    ],
    script: [
      { src: '/js/modernizr-2.6.2.min.js' },
      { src: '/js/jquery-2.1.4.min.js', body: true },
      { src: '/js/hoverIntent.js', body: true },
      { src: '/js/superfish.js', body: true },
      { src: '/js/bootstrap.min.js', body: true },
      { src: '/js/jquery.waypoints.min.js', body: true },
      { src: '/js/jquery.countTo.js', body: true },
      { src: '/js/jquery.stellar.min.js', body: true },
      { src: '/js/bootstrap-datepicker.min.js', body: true },
      { src: '/js/classie.js', body: true },
      { src: '/js/selectFx.js', body: true },
      { src: '/js/jquery.flexslider-min.js', body: true },
      { src: '/js/custom.js', body: true },
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
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
