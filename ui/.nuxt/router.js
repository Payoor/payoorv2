import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0b411c9a = () => interopDefault(import('../pages/aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _367d9dda = () => interopDefault(import('../pages/addresslist.vue' /* webpackChunkName: "pages/addresslist" */))
const _dd64b54c = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _57c1bc10 = () => interopDefault(import('../pages/authp.vue' /* webpackChunkName: "pages/authp" */))
const _32c2dd76 = () => interopDefault(import('../pages/banipay.vue' /* webpackChunkName: "pages/banipay" */))
const _b50a5bf0 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _0973792e = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _6d3c63e6 = () => interopDefault(import('../pages/options.vue' /* webpackChunkName: "pages/options" */))
const _29fc7b4d = () => interopDefault(import('../pages/orders.vue' /* webpackChunkName: "pages/orders" */))
const _25be1b4e = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _585909c8 = () => interopDefault(import('../pages/paystack.vue' /* webpackChunkName: "pages/paystack" */))
const _f8d677a6 = () => interopDefault(import('../pages/admin/categorycards.vue' /* webpackChunkName: "pages/admin/categorycards" */))
const _612343ee = () => interopDefault(import('../pages/admin/checkout.vue' /* webpackChunkName: "pages/admin/checkout" */))
const _0ce7be1c = () => interopDefault(import('../pages/admin/dashboard.vue' /* webpackChunkName: "pages/admin/dashboard" */))
const _4c8a984e = () => interopDefault(import('../pages/admin/order/index.vue' /* webpackChunkName: "pages/admin/order/index" */))
const _d51f82e6 = () => interopDefault(import('../pages/auth/googlecallback.vue' /* webpackChunkName: "pages/auth/googlecallback" */))
const _60a90fcc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _8e720484 = () => interopDefault(import('../pages/userorder/_orderid.vue' /* webpackChunkName: "pages/userorder/_orderid" */))

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
    component: _0b411c9a,
    name: "aboutus"
  }, {
    path: "/addresslist",
    component: _367d9dda,
    name: "addresslist"
  }, {
    path: "/admin",
    component: _dd64b54c,
    name: "admin"
  }, {
    path: "/authp",
    component: _57c1bc10,
    name: "authp"
  }, {
    path: "/banipay",
    component: _32c2dd76,
    name: "banipay"
  }, {
    path: "/cart",
    component: _b50a5bf0,
    name: "cart"
  }, {
    path: "/checkout",
    component: _0973792e,
    name: "checkout"
  }, {
    path: "/options",
    component: _6d3c63e6,
    name: "options"
  }, {
    path: "/orders",
    component: _29fc7b4d,
    name: "orders"
  }, {
    path: "/payment",
    component: _25be1b4e,
    name: "payment"
  }, {
    path: "/paystack",
    component: _585909c8,
    name: "paystack"
  }, {
    path: "/admin/categorycards",
    component: _f8d677a6,
    name: "admin-categorycards"
  }, {
    path: "/admin/checkout",
    component: _612343ee,
    name: "admin-checkout"
  }, {
    path: "/admin/dashboard",
    component: _0ce7be1c,
    name: "admin-dashboard"
  }, {
    path: "/admin/order",
    component: _4c8a984e,
    name: "admin-order"
  }, {
    path: "/auth/googlecallback",
    component: _d51f82e6,
    name: "auth-googlecallback"
  }, {
    path: "/",
    component: _60a90fcc,
    name: "index"
  }, {
    path: "/userorder/:orderid?",
    component: _8e720484,
    name: "userorder-orderid"
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
