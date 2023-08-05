const config = {
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

  // dev CORS
  // vite: {
  //   server: {
  //     proxy: {}
  //   }
  // },

  typescript: {
    typeCheck: true
  },

  devtools: {
    enabled: true
  }
}

// if (process.env.NODE_ENV === 'development') {
//   // dev CORS
//   config.vite.server.proxy = {
//     '/Path': {
//       target: 'Domain',
//       changeOrigin: true
//     }
//   }
// }

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(config)
