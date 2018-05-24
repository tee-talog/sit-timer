module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'sit-timer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'element-ui',
      'vue-social-sharing'
    ],
    postcss: [
      require('postcss-cssnext')()
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~plugins/element-ui',
    '~plugins/vue-social-sharing'
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  router: {
    base: '/sit-timer/'
  }
}
