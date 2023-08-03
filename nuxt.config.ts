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
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      websiteName: process.env.WEBSITE_NAME || '網站名稱',
      websiteDescription: process.env.WEBSITE_DESCRIPTION || '網站描述'
    }
  },

  typescript: {
    typeCheck: true
  },

  devtools: {
    enabled: true
  }
})
