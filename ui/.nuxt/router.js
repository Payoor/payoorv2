import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3796093a = () => interopDefault(import('../pages/aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _3fff19e1 = () => interopDefault(import('../pages/addresslist.vue' /* webpackChunkName: "pages/addresslist" */))
const _ca61bd3e = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _2fb0e516 = () => interopDefault(import('../pages/adminui/index.vue' /* webpackChunkName: "pages/adminui/index" */))
const _e212ed52 = () => interopDefault(import('../pages/authp.vue' /* webpackChunkName: "pages/authp" */))
const _6ff974fd = () => interopDefault(import('../pages/banipay.vue' /* webpackChunkName: "pages/banipay" */))
const _2b63bfe1 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _730fd287 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _ab1a0926 = () => interopDefault(import('../pages/options.vue' /* webpackChunkName: "pages/options" */))
const _4d3d5234 = () => interopDefault(import('../pages/orders.vue' /* webpackChunkName: "pages/orders" */))
const _62f4b2d5 = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _7c1539be = () => interopDefault(import('../pages/paystack.vue' /* webpackChunkName: "pages/paystack" */))
const _a08d6d98 = () => interopDefault(import('../pages/admin/categorycards.vue' /* webpackChunkName: "pages/admin/categorycards" */))
const _d73912f2 = () => interopDefault(import('../pages/admin/checkout.vue' /* webpackChunkName: "pages/admin/checkout" */))
const _41addea3 = () => interopDefault(import('../pages/admin/dashboard.vue' /* webpackChunkName: "pages/admin/dashboard" */))
const _150a62c0 = () => interopDefault(import('../pages/admin/order/index.vue' /* webpackChunkName: "pages/admin/order/index" */))
const _31e962ee = () => interopDefault(import('../pages/adminui/categories.vue' /* webpackChunkName: "pages/adminui/categories" */))
const _59193520 = () => interopDefault(import('../pages/adminui/coupons.vue' /* webpackChunkName: "pages/adminui/coupons" */))
const _21031152 = () => interopDefault(import('../pages/adminui/orders.vue' /* webpackChunkName: "pages/adminui/orders" */))
const _7cd678d8 = () => interopDefault(import('../pages/auth/googlecallback.vue' /* webpackChunkName: "pages/auth/googlecallback" */))
const _06e04561 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _150a3bd7 = () => interopDefault(import('../pages/userorder/_orderid.vue' /* webpackChunkName: "pages/userorder/_orderid" */))

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
    path: "/addresslist",
    component: _3fff19e1,
    name: "addresslist"
  }, {
    path: "/admin",
    component: _ca61bd3e,
    name: "admin"
  }, {
    path: "/adminui",
    component: _2fb0e516,
    name: "adminui"
  }, {
    path: "/authp",
    component: _e212ed52,
    name: "authp"
  }, {
    path: "/banipay",
    component: _6ff974fd,
    name: "banipay"
  }, {
    path: "/cart",
    component: _2b63bfe1,
    name: "cart"
  }, {
    path: "/checkout",
    component: _730fd287,
    name: "checkout"
  }, {
    path: "/options",
    component: _ab1a0926,
    name: "options"
  }, {
    path: "/orders",
    component: _4d3d5234,
    name: "orders"
  }, {
    path: "/payment",
    component: _62f4b2d5,
    name: "payment"
  }, {
    path: "/paystack",
    component: _7c1539be,
    name: "paystack"
  }, {
    path: "/admin/categorycards",
    component: _a08d6d98,
    name: "admin-categorycards"
  }, {
    path: "/admin/checkout",
    component: _d73912f2,
    name: "admin-checkout"
  }, {
    path: "/admin/dashboard",
    component: _41addea3,
    name: "admin-dashboard"
  }, {
    path: "/admin/order",
    component: _150a62c0,
    name: "admin-order"
  }, {
    path: "/adminui/categories",
    component: _31e962ee,
    name: "adminui-categories"
  }, {
    path: "/adminui/coupons",
    component: _59193520,
    name: "adminui-coupons"
  }, {
    path: "/adminui/orders",
    component: _21031152,
    name: "adminui-orders"
  }, {
    path: "/auth/googlecallback",
    component: _7cd678d8,
    name: "auth-googlecallback"
  }, {
    path: "/",
    component: _06e04561,
    name: "index"
  }, {
    path: "/userorder/:orderid?",
    component: _150a3bd7,
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
