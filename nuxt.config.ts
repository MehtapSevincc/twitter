
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

   ssr: false, 

   app:{
    baseURL:'/twitter/',
    buildAssetsDir:'assets',
     head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
        },
      ],
    },
   },

  modules: ['@pinia/nuxt'],
  css: ['vuetify/styles', '~/assets/styles.scss'],
 plugins: ['~/plugins/vuetify.ts'],

  build: {
    transpile: ['vuetify'],
  },


  vite: {
    define: {
      'process.env.DEBUG': false,
    },

  },

 nitro: {
    output: {
      publicDir: './docs', 
    },
  },

  routeRules: {
    '/**': { static: true }, 
  },
       
   
   
})


