export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Payoor - Shopping Assistant',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Shop groceries easily with Payoor. Great prices. Fast delivery.'
      },

      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap'
      }
    ],
    script: [
      {
        src: 'https://accounts.google.com/gsi/client',
        async: true,
        defer: true
      },
      {
        src: '/scripts/index.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-lazyload.js'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  axios: {
    proxy: true
  },

  watchers: {
    webpack: {
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.nuxt/**',
        '**/dist/**',
        '**/coverage/**'
      ]
      // If file events are flaky in Docker, enable polling:
      // poll: 1000
    }
  },

  auth: {
    redirect: {
      login: '/', // where to go if not logged in
      logout: '/',
      callback: '/auth/callback', // callback page you’ll create
      home: '/'
    },
    strategies: {
      // We’ll use a custom scheme to do redirect OAuth (Google)
      google: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/v2/auth',
          token: '/api/shopper/auth/google/token',
          userInfo: '/api/shopper/auth/google/user',
          logout: false
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 60 * 60
        },
        user: {
          property: false, // ✅ user object is the whole response
          autoFetch: true
        },
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: '845190882138-9pr7hgfgeidb7f90qom56r810mf7vnes.apps.googleusercontent.com',
        scope: ['openid', 'profile', 'email'],
        codeChallengeMethod: 'S256'
      }
    }
  },

  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/mixins.scss',
      '~/assets/scss/main.scss',
      '~/assets/scss/animations.scss',
      '~/assets/scss/classes.scss',
      '~/assets/scss/landing.scss',
      '~/assets/scss/admintable.scss'
      //'~/assets/scss/index.scss',
    ],
    hoistUseStatements: true
  },

  build: {
    transpile: [({ isLegacy }) => isLegacy && 'axios']
  }
}
