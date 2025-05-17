import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3796093a = () => interopDefault(import('../pages/aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _2b63bfe1 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _730fd287 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _4d3d5234 = () => interopDefault(import('../pages/orders.vue' /* webpackChunkName: "pages/orders" */))
const _62f4b2d5 = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _06e04561 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutus",
    component: _3796093a,
    name: "aboutus"
  }, {
    path: "/cart",
    component: _2b63bfe1,
    name: "cart"
  }, {
    path: "/checkout",
    component: _730fd287,
    name: "checkout"
  }, {
    path: "/orders",
    component: _4d3d5234,
    name: "orders"
  }, {
    path: "/payment",
    component: _62f4b2d5,
    name: "payment"
  }, {
    path: "/",
    component: _06e04561,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
