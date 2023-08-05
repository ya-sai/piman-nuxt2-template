// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/html-validator', 'nuxt-swiper', '@pinia/nuxt'],

  htmlValidator: {
    usePrettier: true
  },

  imports: {
    dirs: ['stores']
  },

  runtimeConfig: {
    public: {
      baseUrl: '',
      websiteName: '',
      websiteDescription: ''
    }
  },

  typescript: {
    typeCheck: true
  },

  devtools: {
    enabled: true
  }
})
