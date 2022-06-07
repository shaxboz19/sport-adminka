export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sport2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/icons/fontawesome/css/all.css',
    '~/assets/raleway-prezi/stylesheet.css',
    '~/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    {src: '@/plugins/vue-calendar', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  i18n: {
    langDir: '~/locales/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.js', name: 'Russian' }
    ],
    lazy: true,
    defaultLocale: 'en',
    // strategy: 'prefix_except_default',
    strategy: 'no_prefix',
    vueI18nLoader: true,
    detectBrowserLanguage: false,
    vueI18n: {
      silentTranslationWarn: true,
      silentFallbackWarn: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
