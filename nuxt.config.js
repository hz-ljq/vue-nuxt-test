module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-nuxt-test',
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#3B8070'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/})
      }
    },
    vendor: ['axios'] // 配置后，我们可以在任何页面里面引入 axios 而不用担心它会被重复打包。
  },
  css: [ // 全局样式
    '~assets/css/main.css', 'swiper/dist/css/swiper.css'
  ],
  plugins: [
    {
      src: '~/plugins/vue-awesome-swiper.js',
      ssr: false
    }
  ]
  // plugins: ['~/plugins/vue-awesome-swiper']
}
