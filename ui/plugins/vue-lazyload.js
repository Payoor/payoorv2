import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/imgs/loading.jpg', 
  loading: '/imgs/loading.jpg', 
  attempt: 1
})
