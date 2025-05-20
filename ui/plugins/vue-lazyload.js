import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/imgs/farmfresh.png', 
  loading: '/imgs/farmfresh.png', 
  attempt: 1
})
