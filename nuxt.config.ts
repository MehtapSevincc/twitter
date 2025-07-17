
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  
  modules: ['@pinia/nuxt'],
  css: ['vuetify/styles', '~/assets/styles.scss'],
  build: {
    transpile: ['vuetify'],
  },
 plugins: ['~/plugins/vuetify.ts'],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
        },
      ],
    },
  },
})

