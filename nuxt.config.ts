// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/html-validator', 'nuxt-swiper', '@pinia/nuxt'],

  htmlValidator: {
    usePrettier: true
  },

  // pinia folder
  imports: {
    dirs: ['stores']
  },

  // 環境騙術
  runtimeConfig: {
    public: {
      baseUrl: '',
      websiteName: '',
      websiteDescription: ''
    }
  },

  devServer: {
    // https
    https: {
      key: './https/localhost+3-key.pem',
      cert: './https/localhost+3.pem'
    }
  },

  // CORS
  // vite: {
  //   server: {
  //     proxy: {
  //       '/Path': {
  //         target: 'https://Domain',
  //         changeOrigin: true
  //       }
  //     }
  //   }
  // },

  typescript: {
    typeCheck: true
  },

  devtools: {
    enabled: true
  }
})
