const pkg = require('./package')
const path = require('path')

module.exports = {
  mode: 'spa',

  env: {
    sendgrid: {
      key: process.env.SENDGRID_KEY
    }
  },

  transition: {
    name: 'slide-up',
    mode: 'out-in'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~assets/styles/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~/plugins/localStorage.js', ssr: false }],

  router: {
    linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'router-link-exact-active'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
