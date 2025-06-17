exports.ids = [21,3,7];
exports.modules = {

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['jwt'],
  data() {
    return {
      loading: false,
      validToken: null,
      excludedPaths: ['/aboutus', '/admin', '/authp', '/admin/checkout']
    };
  },
  methods: {
    async getValidToken() {
      try {
        this.validToken = localStorage.getItem('jwt');
        if (this.validToken) {
          return this.validToken;
        } else if (!this.excludedPaths.includes(this.$route.path)) {
          this.$router.push({
            path: '/',
            query: {
              ...this.$route.query
            }
          });
        }
      } catch (error) {
        this.loading = false;
        console.error('Network or server error during authentication:', error.message);
      }
    }
  }
});

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("06cdfc1e", content, true, context)
};

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("e52fad2c", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartButton.vue?vue&type=template&id=0803ca8a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cartbtn"
  }, [_vm._ssrNode((!_vm.showicon ? "<div class=\"cartbtn__icon--amount\" data-v-0803ca8a><p data-v-0803ca8a>" + _vm._ssrEscape("₦" + _vm._s(_vm.cartTotal)) + "</p></div>" : "<!---->") + " " + (_vm.showicon ? "<div" + _vm._ssrClass(null, {
    'disabled-btn': !_vm.cartLength || _vm.cartLength === 0
  }) + " data-v-0803ca8a><div class=\"cartbtn__icon\" data-v-0803ca8a>" + (_vm.isLoading ? "<div class=\"loader\" data-v-0803ca8a></div>" : (_vm.cartLength !== 0 ? "<div class=\"cartbtn__icon--total\" data-v-0803ca8a><span data-v-0803ca8a>" + _vm._ssrEscape(_vm._s(_vm.cartLength === 0 ? '' : _vm.cartLength)) + "</span></div>" : "<!---->") + " <svg data-v-0803ca8a><use xlink:href=\"/svg/symbol-defs.svg#icon-shopping-bag\" data-v-0803ca8a></use></svg>") + "</div></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CartButton.vue?vue&type=template&id=0803ca8a&scoped=true

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartButton.vue?vue&type=script&lang=js


/* harmony default export */ var CartButtonvue_type_script_lang_js = ({
  props: ['showicon'],
  data() {
    return {
      isLoading: false // Initialize loading state to false
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])("cart", {
      cartTotal: state => state.total,
      cartLength: state => state.totalItems.length
    })
  },
  methods: {
    async syncCartAndOpen() {
      this.isLoading = true; // Set loading to true when the function starts
      try {
        await this.$store.dispatch("cart/syncCartToServer");
        this.$router.push({
          path: '/cart',
          query: {
            ...this.$route.query
          }
        });
      } catch (error) {
        console.error("Error syncing cart:", error);
      } finally {
        this.isLoading = false;
      }
    },
    openCart() {
      if (this.cartLength === 0) {
        return;
      }
      this.syncCartAndOpen();
    }
  }
});
// CONCATENATED MODULE: ./components/CartButton.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CartButtonvue_type_script_lang_js = (CartButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CartButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CartButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0803ca8a",
  "0826af36"
  
)

/* harmony default export */ var CartButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0803ca8a],[data-v-0803ca8a]:after,[data-v-0803ca8a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0803ca8a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0803ca8a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0803ca8a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0803ca8a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0803ca8a]{font-size:65%}}body[data-v-0803ca8a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0803ca8a]{padding:0}}[data-v-0803ca8a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0803ca8a]::selection{background-color:#249b48;color:#fff}[data-v-0803ca8a]::-webkit-scrollbar{height:8px;width:8px}[data-v-0803ca8a]::-webkit-scrollbar-track{background:transparent}[data-v-0803ca8a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0803ca8a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0803ca8a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0803ca8a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0803ca8a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0803ca8a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-0803ca8a]{animation:slide-in-left-0803ca8a .5s ease-out forwards}.button-primary[data-v-0803ca8a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0803ca8a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0803ca8a]{opacity:.4}.floating-element[data-v-0803ca8a]{animation:float-0803ca8a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0803ca8a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0803ca8a]{animation:spin-0803ca8a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0803ca8a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0803ca8a]{filter:blur(3px)}.error-message[data-v-0803ca8a]{animation:slideFadeInUp-0803ca8a .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-0803ca8a]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-0803ca8a]{overflow-x:hidden}.landing__top[data-v-0803ca8a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0803ca8a]{display:flex}}.landing__topleft[data-v-0803ca8a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0803ca8a]{display:block;width:100%}}.landing__topleft--auth[data-v-0803ca8a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0803ca8a]{padding:0;width:auto}}.landing__topright[data-v-0803ca8a],.landing__topright--img[data-v-0803ca8a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0803ca8a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0803ca8a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0803ca8a]{display:none}}.landing__content[data-v-0803ca8a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0803ca8a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0803ca8a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0803ca8a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0803ca8a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.cartbtn[data-v-0803ca8a]{color:#000;position:relative}.cartbtn__icon[data-v-0803ca8a]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-0803ca8a]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-0803ca8a]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-0803ca8a],.cartbtn__icon--total[data-v-0803ca8a]{color:#fff;font-weight:600}.cartbtn svg[data-v-0803ca8a]{height:80%;width:80%;fill:#fff}.loader[data-v-0803ca8a]{animation:spin-0803ca8a 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}@keyframes spin-0803ca8a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=template&id=6beb1f5c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chat-header"
  }, [_vm._ssrNode("<div class=\"chat-header__left\" data-v-6beb1f5c>" + (_vm.name ? "<div class=\"chat-header__name\" data-v-6beb1f5c><span class=\"svg\" data-v-6beb1f5c><svg data-v-6beb1f5c><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-6beb1f5c></use></svg></span> <span class=\"label\" data-v-6beb1f5c>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></div>" : "<!---->") + " " + (_vm.logovisible ? "<figure" + _vm._ssrClass("chat-header__left--logo", {
    green: _vm.green
  }) + " data-v-6beb1f5c><img src=\"/imgs/logo.png\" data-v-6beb1f5c></figure>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"chat-header__right\" data-v-6beb1f5c>", "</div>", [_vm._ssrNode("<div class=\"chat-header__right--cart\" data-v-6beb1f5c>", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" <div" + _vm._ssrClass("chat-header__burger", {
    unauth: !_vm.jwtToken,
    green: _vm.green
  }) + " data-v-6beb1f5c><span data-v-6beb1f5c></span><span data-v-6beb1f5c></span><span data-v-6beb1f5c></span></div>")], 2), _vm._ssrNode(" "), _vm.menuopen ? _vm._ssrNode("<div" + _vm._ssrClass("chat-header__menu", {
    auth: _vm.jwtToken
  }) + " data-v-6beb1f5c>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menubody slide-in-left\" data-v-6beb1f5c>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menuitems\" data-v-6beb1f5c>", "</div>", [_vm._ssrNode("<figure class=\"chat-header__left--logo bottom-1rem\" data-v-6beb1f5c>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/logo.png',
      expression: "'/imgs/logo.png'"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chat-header__menuitem\" data-v-6beb1f5c><span class=\"svg\" data-v-6beb1f5c></span> <span class=\"label\" data-v-6beb1f5c>About us</span></div> " + (!_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-6beb1f5c><span class=\"svg\" data-v-6beb1f5c></span> <span class=\"label\" data-v-6beb1f5c>Sign In/Sign Up</span></div>" : "<!---->") + " " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-6beb1f5c><span class=\"svg\" data-v-6beb1f5c></span> <span class=\"label\" data-v-6beb1f5c>Orders</span></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"chat-header__menuitems\" data-v-6beb1f5c><div class=\"chat-header__menuitem\" data-v-6beb1f5c><span class=\"svg\" data-v-6beb1f5c></span></div> " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-6beb1f5c><span class=\"svg\" data-v-6beb1f5c></span> <span class=\"label\" data-v-6beb1f5c>Signout</span></div>" : "<!---->") + "</div>")], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=template&id=6beb1f5c&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(15);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(17);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(18);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(19);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(20);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(21);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(22);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(23);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(24);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(25);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(26);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(27);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(28);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(29);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(30);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(1);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=script&lang=js



















/* harmony default export */ var ChatHeadervue_type_script_lang_js = ({
  mixins: [jwt_mixin["a" /* default */]],
  props: ['logovisible', 'name', 'backRoute', 'green'],
  emits: ['update:authValue'],
  data() {
    return {
      menuopen: false,
      routeStack: ['/']
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])("user", {
      currentUser: state => state.currentUser,
      isLoading: state => state.loading,
      jwtToken: state => state.jwtToken
    })
  },
  async mounted() {
    const token = await this.getValidToken();
    if (token) {
      this.getValidUser(token);
    } else {
      this.redirectHome();
    }

    //this.$store.dispatch('cart/resetCart');

    this.$store.dispatch('cart/initializeCart');
    const routeStack = this.getRouteStack();
    const queryRouteStack = this.$route.query.routeStack;
    const MAX_ROUTE_STACK_SIZE = 4;
    const AUTH_ROUTE_PREFIX = '/auth';
    if (queryRouteStack === undefined || queryRouteStack === null) {
      const initialCandidates = ['/', this.$route.path];
      const filteredInitialCandidates = initialCandidates.filter(item => !item.startsWith(AUTH_ROUTE_PREFIX));
      this.routeStack = [...new Set(filteredInitialCandidates)].slice(-MAX_ROUTE_STACK_SIZE);
    } else {
      const existingPaths = queryRouteStack.split(',').map(item => item.trim()).filter(item => item !== '' && item !== ',');
      const combinedPaths = [...existingPaths, this.$route.path];
      const filteredCombinedPaths = combinedPaths.filter(item => !item.startsWith(AUTH_ROUTE_PREFIX));
      this.routeStack = [...new Set(filteredCombinedPaths)].slice(-MAX_ROUTE_STACK_SIZE);
    }
    this.$router.push({
      path: this.$route.path,
      query: {
        ...this.$route.query,
        routeStack: this.routeStack.join(',')
      }
    });
    this.$router.push({
      path: this.$route.path,
      query: {
        ...this.$route.query,
        routeStack: this.routeStack.join(',')
      }
    });
    this.$router.push({
      path: this.$route.path,
      query: {
        ...this.$route.query,
        routeStack: this.routeStack.join(',')
      }
    });

    // console.log(routeStack, 'routestack')

    this.menuopen = window.innerWidth > 900 && this.jwtToken;
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    getRouteStack() {
      return this.$route.query.routestack;
    },
    redirectHome() {
      if (!this.excludedPaths.includes(this.$route.path)) {
        this.$emit('update:authValue', null);
        this.$router.push({
          path: '/',
          query: {
            ...this.$route.query
          }
        });
      }
    },
    goToUserOrders() {
      this.$router.push({
        path: '/orders',
        query: {
          ...this.$route.query,
          prevpage: this.$route.path
        }
      });
    },
    async getValidUser(token) {
      try {
        const response = await fetch(`${api["b" /* serverurl */]}/shopper/auth/validuser?jwttoken=${token}`);
        if (response.status !== 200) {
          this.$store.dispatch('user/removeJwtToken');
          return this.redirectHome();
        }
        ;
        await Object(api["a" /* handleFetchError */])(response);
        const data = await response.json();
        const {
          user,
          message
        } = data;

        //console.log(user, 'curent user here', message, 'messahge left');

        this.$store.dispatch('user/setJwtToken', token);
        this.$store.dispatch('user/addCurrentUser', user);
      } catch (error) {
        console.log(error);
      }
    },
    toggleSideMenu() {
      this.menuopen = !this.menuopen;
    },
    goBack() {
      const currentRouteStackQuery = this.$route.query.routeStack;
      let routeStackArray = [];
      if (currentRouteStackQuery) {
        routeStackArray = currentRouteStackQuery.split(',').map(item => item.trim()).filter(item => item !== '');
      }
      let targetPath = '/';
      if (routeStackArray.length >= 2) {
        targetPath = routeStackArray[routeStackArray.length - 2];
      } else if (routeStackArray.length === 1) {
        targetPath = routeStackArray[0];
      }
      const newRouteStack = routeStackArray.slice(0, -1);
      this.$router.push({
        path: targetPath,
        query: {
          ...this.$route.query,
          routeStack: newRouteStack.join(',')
        }
      });
    },
    handleResize() {
      this.menuopen = window.innerWidth > 900;
    },
    async signOut() {
      try {
        this.$store.dispatch('user/setLoading', true);
        const token = await this.getValidToken();
        if (!token) {
          this.$emit('update:authValue', null);
          // Remove specific query params
          const {
            unwantedParam1,
            unwantedParam2,
            ...cleanQuery
          } = this.$route.query;
          this.$router.push({
            path: '/',
            query: cleanQuery
          });
          return;
        }
        const response = await fetch(`${api["b" /* serverurl */]}/shopper/auth/signout`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        await Object(api["a" /* handleFetchError */])(response);
        await response.json();
        this.$store.dispatch('user/removeJwtToken');
        this.$store.dispatch('user/removeCurrentUser');
        this.$emit('update:authValue', null);
        const {
          email,
          phoneNumber,
          name,
          ...cleanQuery
        } = this.$route.query;
        this.$router.push({
          path: '/',
          query: cleanQuery
        });
        this.$store.dispatch('user/setLoading', false);
      } catch (error) {
        console.error('Sign out failed:', error.message);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatHeadervue_type_script_lang_js = (ChatHeadervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ChatHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatHeadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6beb1f5c",
  "5f357078"
  
)

/* harmony default export */ var ChatHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartButton: __webpack_require__(47).default})


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_6beb1f5c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_6beb1f5c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_6beb1f5c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_6beb1f5c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_6beb1f5c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6beb1f5c],[data-v-6beb1f5c]:after,[data-v-6beb1f5c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-6beb1f5c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-6beb1f5c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-6beb1f5c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-6beb1f5c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-6beb1f5c]{font-size:65%}}body[data-v-6beb1f5c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-6beb1f5c]{padding:0}}[data-v-6beb1f5c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-6beb1f5c]::selection{background-color:#249b48;color:#fff}[data-v-6beb1f5c]::-webkit-scrollbar{height:8px;width:8px}[data-v-6beb1f5c]::-webkit-scrollbar-track{background:transparent}[data-v-6beb1f5c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-6beb1f5c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-6beb1f5c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-6beb1f5c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-6beb1f5c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-6beb1f5c{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-6beb1f5c{to{transform:rotate(1turn)}}.slide-in-left[data-v-6beb1f5c]{animation:slide-in-left-6beb1f5c .5s ease-out forwards}.button-primary[data-v-6beb1f5c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-6beb1f5c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-6beb1f5c]{opacity:.4}.floating-element[data-v-6beb1f5c]{animation:float-6beb1f5c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-6beb1f5c]{height:100vh!important;overflow:hidden!important}.spinner[data-v-6beb1f5c]{animation:spin-6beb1f5c 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-6beb1f5c]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-6beb1f5c]{filter:blur(3px)}.error-message[data-v-6beb1f5c]{animation:slideFadeInUp-6beb1f5c .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-6beb1f5c]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-6beb1f5c]{overflow-x:hidden}.landing__top[data-v-6beb1f5c]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-6beb1f5c]{display:flex}}.landing__topleft[data-v-6beb1f5c]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-6beb1f5c]{display:block;width:100%}}.landing__topleft--auth[data-v-6beb1f5c]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-6beb1f5c]{padding:0;width:auto}}.landing__topright[data-v-6beb1f5c],.landing__topright--img[data-v-6beb1f5c]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-6beb1f5c]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-6beb1f5c]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-6beb1f5c]{display:none}}.landing__content[data-v-6beb1f5c]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-6beb1f5c]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-6beb1f5c]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-6beb1f5c]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-6beb1f5c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-header[data-v-6beb1f5c]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-6beb1f5c]{padding:2rem}}.chat-header__name[data-v-6beb1f5c],.chat-header__name span.svg[data-v-6beb1f5c]{align-items:center;display:flex}.chat-header__name span.svg[data-v-6beb1f5c]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-6beb1f5c]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-6beb1f5c]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-6beb1f5c]{display:none}}.chat-header__left--logo[data-v-6beb1f5c]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-6beb1f5c]{margin-bottom:5rem}.chat-header__left--logo img[data-v-6beb1f5c]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-6beb1f5c]{height:3.5rem}.chat-header__burger[data-v-6beb1f5c]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-6beb1f5c]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-6beb1f5c]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-6beb1f5c]{background:#fff}.chat-header__burger.green span[data-v-6beb1f5c]{background:#249b48}.chat-header__menu[data-v-6beb1f5c]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-6beb1f5c]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-6beb1f5c],.chat-header__menu.auth[data-v-6beb1f5c]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-6beb1f5c]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-6beb1f5c]{font-size:1.8rem}}.chat-header__menuitem span[data-v-6beb1f5c]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-6beb1f5c]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("539f8151", content, true, context)
};

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderDisplay.vue?vue&type=template&id=e75d15ca&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.order && _vm.cart.length ? _c('div', {
    staticClass: "orderdetails"
  }, [_vm._ssrNode("<div class=\"orderdetails__content\" data-v-e75d15ca>", "</div>", [_vm._ssrNode("<div class=\"orderdetails__content--body\" data-v-e75d15ca>", "</div>", [_vm._ssrNode("<div class=\"orderdetails__summary\" data-v-e75d15ca><h2 class=\"orderdetails__title\" data-v-e75d15ca>" + _vm._ssrEscape("Order ID: " + _vm._s(_vm.order._id)) + "</h2> <p data-v-e75d15ca><strong data-v-e75d15ca>Address:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.order.checkout_id.delivery_address)) + "</p> " + (_vm.order.checkout_id.phone_number ? "<p data-v-e75d15ca><strong data-v-e75d15ca>Phone:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.order.checkout_id.phone_number)) + "</p>" : "<!---->") + " <p data-v-e75d15ca><strong data-v-e75d15ca>Delivery Date:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.formattedDate)) + "</p> <p data-v-e75d15ca><strong data-v-e75d15ca>Total:</strong>" + _vm._ssrEscape(" ₦" + _vm._s(_vm.order.checkout_id.total.toLocaleString())) + "</p></div> "), _vm._ssrNode("<div class=\"orderdetails__cart\" data-v-e75d15ca>", "</div>", [_vm._ssrNode("<h3 class=\"orderdetails__subtitle\" data-v-e75d15ca>Items</h3> "), _vm._l(_vm.cart, function (item) {
    var _item$product, _item$product2;
    return _vm._ssrNode("<div class=\"orderdetails__cart-item\" data-v-e75d15ca>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: item.image,
        expression: "item.image"
      }],
      staticClass: "orderdetails__cart-image",
      attrs: {
        "alt": "product image"
      }
    }, []), _vm._ssrNode(" <div class=\"orderdetails__cart-details\" data-v-e75d15ca><p data-v-e75d15ca><strong data-v-e75d15ca>Name:</strong>" + _vm._ssrEscape(" " + _vm._s(((_item$product = item.product) === null || _item$product === void 0 ? void 0 : _item$product.name) || 'Unnamed product')) + "</p> " + ((_item$product2 = item.product) !== null && _item$product2 !== void 0 && _item$product2.metadata ? "<p data-v-e75d15ca><strong data-v-e75d15ca>Tags:</strong>" + _vm._ssrEscape(" " + _vm._s(item.product.metadata)) + "</p>" : "<!---->") + " <p data-v-e75d15ca><strong data-v-e75d15ca>Unit:</strong>" + _vm._ssrEscape(" " + _vm._s(item.unit)) + "</p> <p data-v-e75d15ca><strong data-v-e75d15ca>Price:</strong>" + _vm._ssrEscape(" ₦" + _vm._s(item.price)) + "</p> <p data-v-e75d15ca><strong data-v-e75d15ca>Quantity:</strong>" + _vm._ssrEscape(" " + _vm._s(item.quantity)) + "</p> <p data-v-e75d15ca><strong data-v-e75d15ca>Total:</strong>" + _vm._ssrEscape(" ₦" + _vm._s(item.price * item.quantity)) + "</p></div>")], 2);
  })], 2), _vm._ssrNode(" <div class=\"orderdetails__actions\" data-v-e75d15ca>" + (_vm.showbacktoorders ? "<button class=\"button-primary transparent-button\" data-v-e75d15ca><span data-v-e75d15ca>Back to Orders</span></button>" : "<!---->") + "</div>")], 2)])]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OrderDisplay.vue?vue&type=template&id=e75d15ca&scoped=true

// EXTERNAL MODULE: ./components/ChatHeader.vue + 4 modules
var ChatHeader = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderDisplay.vue?vue&type=script&lang=js

/* harmony default export */ var OrderDisplayvue_type_script_lang_js = ({
  name: 'OrderDisplay',
  components: {
    ChatHeader: ChatHeader["default"]
  },
  props: {
    order: Object,
    cart: Array,
    showbacktoorders: Boolean
  },
  computed: {
    formattedDate() {
      const {
        day,
        date,
        month
      } = this.order.checkout_id.delivery_date;
      return `${day}, ${month} ${date}`;
    }
  },
  methods: {
    backToOrders() {
      this.$router.push({
        path: '/orders',
        query: {
          ...this.$route.query
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./components/OrderDisplay.vue?vue&type=script&lang=js
 /* harmony default export */ var components_OrderDisplayvue_type_script_lang_js = (OrderDisplayvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/OrderDisplay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OrderDisplayvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e75d15ca",
  "1d40dbc7"
  
)

/* harmony default export */ var OrderDisplay = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDisplay_vue_vue_type_style_index_0_id_e75d15ca_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDisplay_vue_vue_type_style_index_0_id_e75d15ca_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDisplay_vue_vue_type_style_index_0_id_e75d15ca_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDisplay_vue_vue_type_style_index_0_id_e75d15ca_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDisplay_vue_vue_type_style_index_0_id_e75d15ca_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-e75d15ca],[data-v-e75d15ca]:after,[data-v-e75d15ca]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-e75d15ca]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-e75d15ca]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-e75d15ca]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-e75d15ca]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-e75d15ca]{font-size:65%}}body[data-v-e75d15ca]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-e75d15ca]{padding:0}}[data-v-e75d15ca]::-moz-selection{background-color:#249b48;color:#fff}[data-v-e75d15ca]::selection{background-color:#249b48;color:#fff}[data-v-e75d15ca]::-webkit-scrollbar{height:8px;width:8px}[data-v-e75d15ca]::-webkit-scrollbar-track{background:transparent}[data-v-e75d15ca]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-e75d15ca]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-e75d15ca]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-e75d15ca{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-e75d15ca{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-e75d15ca{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-e75d15ca{to{transform:rotate(1turn)}}.slide-in-left[data-v-e75d15ca]{animation:slide-in-left-e75d15ca .5s ease-out forwards}.button-primary[data-v-e75d15ca]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-e75d15ca]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-e75d15ca]{opacity:.4}.floating-element[data-v-e75d15ca]{animation:float-e75d15ca 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-e75d15ca]{height:100vh!important;overflow:hidden!important}.spinner[data-v-e75d15ca]{animation:spin-e75d15ca 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-e75d15ca]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-e75d15ca]{filter:blur(3px)}.error-message[data-v-e75d15ca]{animation:slideFadeInUp-e75d15ca .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-e75d15ca]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-e75d15ca]{overflow-x:hidden}.landing__top[data-v-e75d15ca]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-e75d15ca]{display:flex}}.landing__topleft[data-v-e75d15ca]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-e75d15ca]{display:block;width:100%}}.landing__topleft--auth[data-v-e75d15ca]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-e75d15ca]{padding:0;width:auto}}.landing__topright[data-v-e75d15ca],.landing__topright--img[data-v-e75d15ca]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-e75d15ca]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-e75d15ca]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-e75d15ca]{display:none}}.landing__content[data-v-e75d15ca]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-e75d15ca]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-e75d15ca]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-e75d15ca]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-e75d15ca]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.orderdetails__header[data-v-e75d15ca]{left:0;position:fixed;top:0;width:100vw;z-index:6}.orderdetails__header.auth[data-v-e75d15ca],.orderdetails__header.unauth[data-v-e75d15ca]{background:transparent}@media only screen and (max-width:56.25em){.orderdetails__header.auth[data-v-e75d15ca]{background:#fff}}.orderdetails__content[data-v-e75d15ca]{background:#fff;display:flex;justify-content:center;min-height:100vh;padding-bottom:20rem;padding-top:6rem;position:relative}@media only screen and (max-width:37.5em){.orderdetails__content[data-v-e75d15ca]{padding:7rem 1rem 30rem}}.orderdetails__content--body[data-v-e75d15ca]{width:60rem}@media only screen and (max-width:56.25em){.orderdetails__content--body[data-v-e75d15ca]{width:100%}}.orderdetails__title[data-v-e75d15ca]{font-size:2rem;margin-bottom:1rem}.orderdetails__summary[data-v-e75d15ca]{background:#f7f7f7;border-radius:1rem;font-size:1.3rem;margin-bottom:2rem;padding:1.5rem}.orderdetails__summary p[data-v-e75d15ca]{margin:.5rem 0}.orderdetails__subtitle[data-v-e75d15ca]{font-size:1.5rem;margin-bottom:1rem}.orderdetails__cart-item[data-v-e75d15ca]{align-items:center;background:#f1f1f1;border-radius:1rem;display:flex;font-size:1.4rem;margin-bottom:1rem;padding:1rem}.orderdetails__cart-image[data-v-e75d15ca]{border-radius:.8rem;height:100px;margin-right:1rem;-o-object-fit:cover;object-fit:cover;width:100px}.orderdetails__cart-details[data-v-e75d15ca]{display:flex;flex-direction:column}.orderdetails__cart-details p[data-v-e75d15ca]{line-height:1.5;margin:.3rem 0}.orderdetails__cart-details p[data-v-e75d15ca]:nth-child(2){color:#666;font-style:italic}.orderdetails__actions[data-v-e75d15ca]{margin-top:2rem}.orderdetails__actions .button-primary[data-v-e75d15ca]{font-size:1.4rem;padding:1rem;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=order-display.js.map