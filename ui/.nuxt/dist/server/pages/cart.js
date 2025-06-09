exports.ids = [29,3,7,9,19];
exports.modules = {

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(145);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("a8fdf6fc", content, true, context)
};

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_572d8619_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_572d8619_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_572d8619_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_572d8619_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_572d8619_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-572d8619],[data-v-572d8619]:after,[data-v-572d8619]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-572d8619]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-572d8619]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-572d8619]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-572d8619]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-572d8619]{font-size:65%}}body[data-v-572d8619]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-572d8619]{padding:0}}[data-v-572d8619]::-moz-selection{background-color:#249b48;color:#fff}[data-v-572d8619]::selection{background-color:#249b48;color:#fff}[data-v-572d8619]::-webkit-scrollbar{height:8px;width:8px}[data-v-572d8619]::-webkit-scrollbar-track{background:transparent}[data-v-572d8619]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-572d8619]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-572d8619]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-572d8619{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-572d8619{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-572d8619{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-572d8619{to{transform:rotate(1turn)}}.slide-in-left[data-v-572d8619]{animation:slide-in-left-572d8619 .5s ease-out forwards}.button-primary[data-v-572d8619]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-572d8619]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-572d8619]{opacity:.4}.floating-element[data-v-572d8619]{animation:float-572d8619 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-572d8619]{height:100vh!important;overflow:hidden!important}.spinner[data-v-572d8619]{animation:spin-572d8619 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-572d8619]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-572d8619]{filter:blur(3px)}.landing[data-v-572d8619]{overflow-x:hidden}.landing__top[data-v-572d8619]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-572d8619]{display:flex}}.landing__topleft[data-v-572d8619]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-572d8619]{display:block;width:100%}}.landing__topleft--auth[data-v-572d8619]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-572d8619]{padding:0;width:auto}}.landing__topright[data-v-572d8619],.landing__topright--img[data-v-572d8619]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-572d8619]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-572d8619]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-572d8619]{display:none}}.landing__content[data-v-572d8619]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-572d8619]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-572d8619]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-572d8619]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-572d8619]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatcart__header[data-v-572d8619]{left:0;position:fixed;top:0;width:100vw;z-index:6}.chatcart__header.auth[data-v-572d8619],.chatcart__header.unauth[data-v-572d8619]{background:transparent}@media only screen and (max-width:56.25em){.chatcart__header.auth[data-v-572d8619]{background:#fff}}.chatcart__content[data-v-572d8619]{background:#fff;display:flex;justify-content:center;min-height:100vh;padding-bottom:20rem;padding-top:4rem;position:relative}@media only screen and (max-width:37.5em){.chatcart__content[data-v-572d8619]{padding:7rem 1rem 30rem}}.chatcart__content--body[data-v-572d8619]{width:60rem}@media only screen and (max-width:56.25em){.chatcart__content--body[data-v-572d8619]{width:100%}}.chatcart__bottom[data-v-572d8619]{background:#fff;bottom:0;display:flex;justify-content:center;left:0;padding:1rem 1rem 2rem;position:fixed;width:100%;z-index:4}.chatcart__bottom.column[data-v-572d8619]{flex-direction:column}@media only screen and (max-width:56.25em){.chatcart__bottom[data-v-572d8619]{display:block}}.chatcart__bottom button[data-v-572d8619]{font-size:2rem;padding:2rem;width:100%}.chatcart__bottom button.spacebetween[data-v-572d8619]{display:flex;justify-content:space-between}.chatcart__bottom button.transparent-button[data-v-572d8619]{margin-bottom:2rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=template&id=572d8619&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatcart"
  }, [_vm._ssrNode("<div class=\"chatcart__header\" data-v-572d8619>", "</div>", [_c('ChatHeader', {
    attrs: {
      "name": 'Your Cart',
      "logovisible": false,
      "jwt": true,
      "backRoute": '/'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"chatcart__content\" data-v-572d8619>", "</div>", [_vm._ssrNode("<div class=\"chatcart__content--body\" data-v-572d8619>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__options\" data-v-572d8619>", "</div>", _vm._l(_vm.cartTotalItems, function (mongooseid) {
    return _vm._ssrNode("<div data-v-572d8619>", "</div>", [_c('ChatOption', {
      attrs: {
        "mongooseid": mongooseid
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"chatcart__bottom\" data-v-572d8619>", "</div>", [_vm._ssrNode("<div class=\"chatcart__content--body\" data-v-572d8619>", "</div>", [_vm._ssrNode("<button class=\"button-primary transparent-button\" data-v-572d8619><span data-v-572d8619>Continue Shopping</span></button> "), _vm.cartTotal === 0 ? _vm._ssrNode("<button class=\"button-primary spacebetween disabled-btn\" data-v-572d8619>", "</button>", [_vm._ssrNode("<span data-v-572d8619>Proceed to Checkout</span> "), _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e(), _vm._ssrNode(" "), _vm.cartTotal > 0 ? _vm._ssrNode("<button class=\"button-primary spacebetween\" data-v-572d8619>", "</button>", [_vm._ssrNode("<span data-v-572d8619>Proceed to Checkout</span> "), _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e()], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/cart.vue?vue&type=template&id=572d8619&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=script&lang=js

/* harmony default export */ var cartvue_type_script_lang_js = ({
  data() {
    return {
      variants: []
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])("cart", {
      cartTotal: state => state.total,
      cartItems: state => state.items,
      cartTotalItems: state => state.totalItems
    })
  },
  mounted() {
    //we call sync cart here
    console.log('calling sync cart');
    this.$store.dispatch("cart/syncCartToServer");
  },
  methods: {
    continueShopping() {
      this.$router.push({
        path: '/',
        query: {
          ...this.$route.query
        }
      });
    },
    goToCheckout() {
      const {
        cartItems,
        cartTotal
      } = this;
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
      this.$router.push({
        path: '/checkout',
        query: {
          ...this.$route.query
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/cart.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_cartvue_type_script_lang_js = (cartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/cart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(144)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cartvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "572d8619",
  "b93efe7e"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatHeader: __webpack_require__(53).default,ChatOption: __webpack_require__(62).default,CartButton: __webpack_require__(49).default})


/***/ }),

/***/ 45:
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

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("07bc124a", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6a10295c", content, true, context)
};

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("cd9fc042", content, true, context)
};

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartButton.vue?vue&type=template&id=4801e665&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cartbtn"
  }, [_vm._ssrNode((!_vm.showicon ? "<div class=\"cartbtn__icon--amount\" data-v-4801e665><p data-v-4801e665>" + _vm._ssrEscape("₦" + _vm._s(_vm.cartTotal)) + "</p></div>" : "<!---->") + " " + (_vm.showicon ? "<div" + _vm._ssrClass(null, {
    'disabled-btn': !_vm.cartLength || _vm.cartLength === 0
  }) + " data-v-4801e665><div class=\"cartbtn__icon\" data-v-4801e665>" + (_vm.cartLength !== 0 ? "<div class=\"cartbtn__icon--total\" data-v-4801e665><span data-v-4801e665>" + _vm._ssrEscape(_vm._s(_vm.cartLength === 0 ? '' : _vm.cartLength)) + "</span></div>" : "<!---->") + " <svg data-v-4801e665><use xlink:href=\"/svg/symbol-defs.svg#icon-shopping-bag\" data-v-4801e665></use></svg></div></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CartButton.vue?vue&type=template&id=4801e665&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartButton.vue?vue&type=script&lang=js

/* harmony default export */ var CartButtonvue_type_script_lang_js = ({
  props: ['showicon'],
  computed: {
    ...Object(external_vuex_["mapState"])("cart", {
      cartTotal: state => state.total,
      cartLength: state => state.totalItems.length
    })
  },
  methods: {
    openCart() {
      if (this.cartLength === 0) {
        return;
      }
      this.$router.push({
        path: '/cart',
        query: {
          ...this.$route.query
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./components/CartButton.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CartButtonvue_type_script_lang_js = (CartButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CartButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CartButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4801e665",
  "0826af36"
  
)

/* harmony default export */ var CartButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-4801e665],[data-v-4801e665]:after,[data-v-4801e665]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-4801e665]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-4801e665]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-4801e665]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-4801e665]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-4801e665]{font-size:65%}}body[data-v-4801e665]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-4801e665]{padding:0}}[data-v-4801e665]::-moz-selection{background-color:#249b48;color:#fff}[data-v-4801e665]::selection{background-color:#249b48;color:#fff}[data-v-4801e665]::-webkit-scrollbar{height:8px;width:8px}[data-v-4801e665]::-webkit-scrollbar-track{background:transparent}[data-v-4801e665]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-4801e665]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-4801e665]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-4801e665{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-4801e665{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-4801e665{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-4801e665{to{transform:rotate(1turn)}}.slide-in-left[data-v-4801e665]{animation:slide-in-left-4801e665 .5s ease-out forwards}.button-primary[data-v-4801e665]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-4801e665]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-4801e665]{opacity:.4}.floating-element[data-v-4801e665]{animation:float-4801e665 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-4801e665]{height:100vh!important;overflow:hidden!important}.spinner[data-v-4801e665]{animation:spin-4801e665 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-4801e665]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-4801e665]{filter:blur(3px)}.landing[data-v-4801e665]{overflow-x:hidden}.landing__top[data-v-4801e665]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-4801e665]{display:flex}}.landing__topleft[data-v-4801e665]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-4801e665]{display:block;width:100%}}.landing__topleft--auth[data-v-4801e665]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-4801e665]{padding:0;width:auto}}.landing__topright[data-v-4801e665],.landing__topright--img[data-v-4801e665]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-4801e665]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-4801e665]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-4801e665]{display:none}}.landing__content[data-v-4801e665]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-4801e665]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-4801e665]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-4801e665]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-4801e665]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.cartbtn[data-v-4801e665]{color:#000;position:relative}.cartbtn__icon[data-v-4801e665]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-4801e665]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-4801e665]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-4801e665],.cartbtn__icon--total[data-v-4801e665]{color:#fff;font-weight:600}.cartbtn svg[data-v-4801e665]{height:80%;width:80%;fill:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoadingAnimation.vue?vue&type=template&id=3b87158c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "loading-animation"
  }, [_vm._ssrNode("<figure data-v-3b87158c><img src=\"/imgs/cartlogo.png\" data-v-3b87158c></figure>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LoadingAnimation.vue?vue&type=template&id=3b87158c&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoadingAnimation.vue?vue&type=script&lang=js
/* harmony default export */ var LoadingAnimationvue_type_script_lang_js = ({});
// CONCATENATED MODULE: ./components/LoadingAnimation.vue?vue&type=script&lang=js
 /* harmony default export */ var components_LoadingAnimationvue_type_script_lang_js = (LoadingAnimationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LoadingAnimation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LoadingAnimationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3b87158c",
  "8873174a"
  
)

/* harmony default export */ var LoadingAnimation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=template&id=aadd7122&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chat-header"
  }, [_vm._ssrNode("<div class=\"chat-header__left\" data-v-aadd7122>" + (_vm.name ? "<div class=\"chat-header__name\" data-v-aadd7122><span class=\"svg\" data-v-aadd7122><svg data-v-aadd7122><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-aadd7122></use></svg></span> <span class=\"label\" data-v-aadd7122>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></div>" : "<!---->") + " " + (_vm.logovisible ? "<figure" + _vm._ssrClass("chat-header__left--logo", {
    green: _vm.green
  }) + " data-v-aadd7122><img src=\"/imgs/logo.png\" data-v-aadd7122></figure>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"chat-header__right\" data-v-aadd7122>", "</div>", [_vm._ssrNode("<div class=\"chat-header__right--cart\" data-v-aadd7122>", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" <div" + _vm._ssrClass("chat-header__burger", {
    unauth: !_vm.jwtToken,
    green: _vm.green
  }) + " data-v-aadd7122><span data-v-aadd7122></span><span data-v-aadd7122></span><span data-v-aadd7122></span></div>")], 2), _vm._ssrNode(" "), _vm.menuopen ? _vm._ssrNode("<div" + _vm._ssrClass("chat-header__menu", {
    auth: _vm.jwtToken
  }) + " data-v-aadd7122>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menubody slide-in-left\" data-v-aadd7122>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menuitems\" data-v-aadd7122>", "</div>", [_vm._ssrNode("<figure class=\"chat-header__left--logo bottom-1rem\" data-v-aadd7122>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/logo.png',
      expression: "'/imgs/logo.png'"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chat-header__menuitem\" data-v-aadd7122><span class=\"svg\" data-v-aadd7122></span> <span class=\"label\" data-v-aadd7122>About us</span></div> " + (!_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-aadd7122><span class=\"svg\" data-v-aadd7122></span> <span class=\"label\" data-v-aadd7122>Sign In/Sign Up</span></div>" : "<!---->") + " " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-aadd7122><span class=\"svg\" data-v-aadd7122></span> <span class=\"label\" data-v-aadd7122>Orders</span></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"chat-header__menuitems\" data-v-aadd7122><div class=\"chat-header__menuitem\" data-v-aadd7122><span class=\"svg\" data-v-aadd7122></span></div> " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-aadd7122><span class=\"svg\" data-v-aadd7122></span> <span class=\"label\" data-v-aadd7122>Signout</span></div>" : "<!---->") + "</div>")], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=template&id=aadd7122&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(4);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=script&lang=js



/* harmony default export */ var ChatHeadervue_type_script_lang_js = ({
  mixins: [jwt_mixin["a" /* default */]],
  props: ['logovisible', 'name', 'backRoute', 'green'],
  emits: ['update:authValue'],
  data() {
    return {
      menuopen: false
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
    this.menuopen = window.innerWidth > 900 && this.jwtToken;
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
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
          ...this.$route.query
        }
      });
    },
    async getValidUser(token) {
      try {
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/auth/validuser?jwttoken=${token}`);
        if (response.status !== 200) {
          this.$store.dispatch('user/removeJwtToken');
          return this.redirectHome();
        }
        ;
        const data = await response.json();
        const {
          user,
          message
        } = data;
        console.log(user, 'curent user here', message, 'messahge left');
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
      this.$router.push({
        path: this.backRoute,
        query: {
          ...this.$route.query
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
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/auth/signout`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) throw new Error('Failed to sign out');
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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ChatHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatHeadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "aadd7122",
  "5f357078"
  
)

/* harmony default export */ var ChatHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartButton: __webpack_require__(49).default})


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_aadd7122_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_aadd7122_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_aadd7122_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_aadd7122_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_aadd7122_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-aadd7122],[data-v-aadd7122]:after,[data-v-aadd7122]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-aadd7122]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-aadd7122]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-aadd7122]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-aadd7122]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-aadd7122]{font-size:65%}}body[data-v-aadd7122]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-aadd7122]{padding:0}}[data-v-aadd7122]::-moz-selection{background-color:#249b48;color:#fff}[data-v-aadd7122]::selection{background-color:#249b48;color:#fff}[data-v-aadd7122]::-webkit-scrollbar{height:8px;width:8px}[data-v-aadd7122]::-webkit-scrollbar-track{background:transparent}[data-v-aadd7122]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-aadd7122]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-aadd7122]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-aadd7122{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-aadd7122{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-aadd7122{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-aadd7122{to{transform:rotate(1turn)}}.slide-in-left[data-v-aadd7122]{animation:slide-in-left-aadd7122 .5s ease-out forwards}.button-primary[data-v-aadd7122]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-aadd7122]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-aadd7122]{opacity:.4}.floating-element[data-v-aadd7122]{animation:float-aadd7122 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-aadd7122]{height:100vh!important;overflow:hidden!important}.spinner[data-v-aadd7122]{animation:spin-aadd7122 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-aadd7122]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-aadd7122]{filter:blur(3px)}.landing[data-v-aadd7122]{overflow-x:hidden}.landing__top[data-v-aadd7122]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-aadd7122]{display:flex}}.landing__topleft[data-v-aadd7122]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-aadd7122]{display:block;width:100%}}.landing__topleft--auth[data-v-aadd7122]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-aadd7122]{padding:0;width:auto}}.landing__topright[data-v-aadd7122],.landing__topright--img[data-v-aadd7122]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-aadd7122]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-aadd7122]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-aadd7122]{display:none}}.landing__content[data-v-aadd7122]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-aadd7122]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-aadd7122]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-aadd7122]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-aadd7122]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-header[data-v-aadd7122]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-aadd7122]{padding:2rem}}.chat-header__name[data-v-aadd7122],.chat-header__name span.svg[data-v-aadd7122]{align-items:center;display:flex}.chat-header__name span.svg[data-v-aadd7122]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-aadd7122]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-aadd7122]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-aadd7122]{display:none}}.chat-header__left--logo[data-v-aadd7122]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-aadd7122]{margin-bottom:5rem}.chat-header__left--logo img[data-v-aadd7122]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-aadd7122]{height:3.5rem}.chat-header__burger[data-v-aadd7122]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-aadd7122]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-aadd7122]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-aadd7122]{background:#fff}.chat-header__burger.green span[data-v-aadd7122]{background:#249b48}.chat-header__menu[data-v-aadd7122]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-aadd7122]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-aadd7122],.chat-header__menu.auth[data-v-aadd7122]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-aadd7122]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-aadd7122]{font-size:1.8rem}}.chat-header__menuitem span[data-v-aadd7122]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-aadd7122]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-3b87158c],[data-v-3b87158c]:after,[data-v-3b87158c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-3b87158c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-3b87158c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-3b87158c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-3b87158c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-3b87158c]{font-size:65%}}body[data-v-3b87158c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-3b87158c]{padding:0}}[data-v-3b87158c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::-webkit-scrollbar{height:8px;width:8px}[data-v-3b87158c]::-webkit-scrollbar-track{background:transparent}[data-v-3b87158c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-3b87158c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-3b87158c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-3b87158c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-3b87158c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes spin-3b87158c{to{transform:rotate(1turn)}}.slide-in-left[data-v-3b87158c]{animation:slide-in-left-3b87158c .5s ease-out forwards}.button-primary[data-v-3b87158c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-3b87158c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-3b87158c]{opacity:.4}.floating-element[data-v-3b87158c]{animation:float-3b87158c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-3b87158c]{height:100vh!important;overflow:hidden!important}.spinner[data-v-3b87158c]{animation:spin-3b87158c 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-3b87158c]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-3b87158c]{filter:blur(3px)}.landing[data-v-3b87158c]{overflow-x:hidden}.landing__top[data-v-3b87158c]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-3b87158c]{display:flex}}.landing__topleft[data-v-3b87158c]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-3b87158c]{display:block;width:100%}}.landing__topleft--auth[data-v-3b87158c]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-3b87158c]{padding:0;width:auto}}.landing__topright[data-v-3b87158c],.landing__topright--img[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-3b87158c]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-3b87158c]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-3b87158c]{display:none}}.landing__content[data-v-3b87158c]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-3b87158c]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-3b87158c]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-3b87158c]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.loading-animation[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.loading-animation figure[data-v-3b87158c]{animation:float-3b87158c 1.5s ease-in-out infinite alternate;border-radius:100%;height:3rem;overflow:hidden;width:3rem}.loading-animation figure img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@keyframes float-3b87158c{0%{transform:translateY(0)}to{transform:translateY(-10px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("56281829", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_4912c19b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_4912c19b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_4912c19b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_4912c19b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_4912c19b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-4912c19b],[data-v-4912c19b]:after,[data-v-4912c19b]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-4912c19b]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-4912c19b]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-4912c19b]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-4912c19b]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-4912c19b]{font-size:65%}}body[data-v-4912c19b]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-4912c19b]{padding:0}}[data-v-4912c19b]::-moz-selection{background-color:#249b48;color:#fff}[data-v-4912c19b]::selection{background-color:#249b48;color:#fff}[data-v-4912c19b]::-webkit-scrollbar{height:8px;width:8px}[data-v-4912c19b]::-webkit-scrollbar-track{background:transparent}[data-v-4912c19b]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-4912c19b]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-4912c19b]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-4912c19b{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-4912c19b{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-4912c19b{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-4912c19b{to{transform:rotate(1turn)}}.slide-in-left[data-v-4912c19b]{animation:slide-in-left-4912c19b .5s ease-out forwards}.button-primary[data-v-4912c19b]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-4912c19b]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-4912c19b]{opacity:.4}.floating-element[data-v-4912c19b]{animation:float-4912c19b 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-4912c19b]{height:100vh!important;overflow:hidden!important}.spinner[data-v-4912c19b]{animation:spin-4912c19b 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-4912c19b]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-4912c19b]{filter:blur(3px)}.landing[data-v-4912c19b]{overflow-x:hidden}.landing__top[data-v-4912c19b]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-4912c19b]{display:flex}}.landing__topleft[data-v-4912c19b]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-4912c19b]{display:block;width:100%}}.landing__topleft--auth[data-v-4912c19b]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-4912c19b]{padding:0;width:auto}}.landing__topright[data-v-4912c19b],.landing__topright--img[data-v-4912c19b]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-4912c19b]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-4912c19b]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-4912c19b]{display:none}}.landing__content[data-v-4912c19b]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-4912c19b]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-4912c19b]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-4912c19b]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-4912c19b]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption[data-v-4912c19b]{background-color:#fff;border:2px solid rgba(36,155,72,.5);border-radius:1rem;display:flex;justify-content:space-between;margin-bottom:2rem;padding:2rem 1.5rem}.chatoption__loader[data-v-4912c19b]{align-items:center;display:flex;height:12rem;justify-content:center}.chatoption__left[data-v-4912c19b]{display:flex}.chatoption__details--productname[data-v-4912c19b]{font-size:1.2rem;font-weight:500}.chatoption__details--name[data-v-4912c19b]{font-size:1.5rem;font-weight:600;margin-bottom:1rem}.chatoption__details--price[data-v-4912c19b]{display:flex;font-size:1.6rem;font-weight:600}.chatoption__details--price span[data-v-4912c19b]{color:#249b48;font-size:600}.chatoption__details--productquantity[data-v-4912c19b]{align-items:center;display:flex;margin-top:1rem}.chatoption__details--productquantity span[data-v-4912c19b]{align-items:center;display:flex;font-size:1.2rem;font-weight:500;margin-right:.5rem}.chatoption__details--producttotal[data-v-4912c19b]{align-items:center;display:flex}.chatoption__details--producttotal span[data-v-4912c19b]{align-items:center;display:flex;font-size:1.2rem;font-weight:500;margin-right:.5rem}.chatoption__right[data-v-4912c19b]{align-items:flex-end;display:flex;flex-direction:column;justify-content:space-between}.chatoption__img[data-v-4912c19b]{border-radius:1rem;height:10rem;margin-right:.5rem;overflow:hidden;width:10rem}.chatoption__img img[data-v-4912c19b]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption__quantity[data-v-4912c19b]{display:grid;grid-template-columns:repeat(3,1fr)}span[data-v-4912c19b]{align-items:center;display:flex;justify-content:center}span.quantity[data-v-4912c19b]{font-size:1.5rem;font-weight:600}span.svg[data-v-4912c19b]{border:1px solid rgba(36,155,72,.5);border-radius:.5rem;padding:.5rem}span.svg svg[data-v-4912c19b]{height:2rem;width:2rem;fill:rgba(0,0,0,.5)}span.svg svg.red[data-v-4912c19b]{fill:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOption.vue?vue&type=template&id=4912c19b&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.loading && !_vm.option ? _vm._ssrNode("<div class=\"chatoption__loader\" data-v-4912c19b>", "</div>", [_c('LoadingAnimation')], 1) : _vm.option ? _vm._ssrNode("<div class=\"chatoption slide-fade-in-up\" data-v-4912c19b>", "</div>", [_vm._ssrNode("<div class=\"chatoption__left\" data-v-4912c19b>", "</div>", [_vm._ssrNode("<figure class=\"chatoption__img\" data-v-4912c19b>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.option.image.length ? _vm.option.image : _vm.option.productimg,
      expression: "option.image.length ? option.image : option.productimg"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chatoption__details\" data-v-4912c19b><p class=\"chatoption__details--productname\" data-v-4912c19b>" + _vm._ssrEscape(_vm._s(_vm.product_name)) + "</p> <p class=\"chatoption__details--name\" data-v-4912c19b>" + _vm._ssrEscape(_vm._s(_vm.option.unit)) + "</p> <p class=\"chatoption__details--price\" data-v-4912c19b>\n                    ₦\n                    <span data-v-4912c19b>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.option.price))) + "</span></p> " + (_vm.admin ? "<p class=\"chatoption__details--productquantity\" data-v-4912c19b><span data-v-4912c19b>Amount:</span> <span data-v-4912c19b>" + _vm._ssrEscape(_vm._s(_vm.product_quantity)) + "</span></p>" : "<!---->") + " " + (_vm.admin ? "<p class=\"chatoption__details--producttotal\" data-v-4912c19b><span data-v-4912c19b>Total:</span> <span data-v-4912c19b>" + _vm._ssrEscape(_vm._s(_vm.product_quantity * _vm.option.price)) + "</span></p>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" " + (!_vm.admin ? "<div class=\"chatoption__right\" data-v-4912c19b><div class=\"chatoption__delete\" data-v-4912c19b><span class=\"svg\" data-v-4912c19b><svg data-v-4912c19b><use xlink:href=\"/svg/symbol-defs.svg#icon-trash\" data-v-4912c19b></use></svg></span></div> <div class=\"chatoption__quantity\" data-v-4912c19b><span class=\"svg\" data-v-4912c19b><svg data-v-4912c19b><use xlink:href=\"/svg/symbol-defs.svg#icon-minus1\" data-v-4912c19b></use></svg></span> <span class=\"quantity\" data-v-4912c19b>" + _vm._ssrEscape(_vm._s(_vm.quantity)) + "</span> <span class=\"svg\" data-v-4912c19b><svg data-v-4912c19b><use xlink:href=\"/svg/symbol-defs.svg#icon-plus\" data-v-4912c19b></use></svg></span></div></div>" : "<!---->"))], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatOption.vue?vue&type=template&id=4912c19b&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(4);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOption.vue?vue&type=script&lang=js



/* harmony default export */ var ChatOptionvue_type_script_lang_js = ({
  mixins: [jwt_mixin["a" /* default */]],
  props: {
    data: {
      type: Object
    },
    mongooseid: {
      type: String
    },
    admin: {
      type: Boolean
    },
    product_quantity: {
      type: Number
    }
  },
  data() {
    return {
      quantity: 0,
      option: null,
      loading: false,
      product_name: ""
    };
  },
  mounted() {
    if (this.admin) {
      this.getOptionForAdmin();
      return;
    }
    if (this.data) {
      this.option = this.data;
    } else {
      this.getOption();
    }
    if (this.mongooseid) {
      this.quantity = this.cartItems[this.mongooseid] ? this.cartItems[this.mongooseid] : 0;
    } else {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
      this.quantity = cartItems[this.data._id] ? cartItems[this.data._id] : 0;
    }
  },
  computed: {
    ...Object(external_vuex_["mapState"])("cart", {
      cartTotal: state => state.total,
      cartItems: state => state.items,
      cartLength: state => state.totalItems.length
    })
  },
  /*
      stump
  watch: {
      cartItems: {
          handler(newItems) {
              console.log('this just ran', newItems)
               const safeCartItems = newItems || {};
              const safeCartLength = Object.keys(safeCartItems).length;
              const total = this.cartTotal;
               localStorage.setItem('cartItems', JSON.stringify(safeCartItems));
              localStorage.setItem('cartTotal', JSON.stringify(total));
              localStorage.setItem('cartLength', JSON.stringify(safeCartLength));
          },
          deep: true,
          immediate: true
      }
  },*/
  methods: {
    syncCartToLocalStorage(newItems = this.cartItems) {
      //  console.log('syncCartToLocalStorage ran', newItems);

      const safeCartItems = newItems || {};
      const safeCartLength = Object.keys(safeCartItems).length;
      const total = this.cartTotal;
      try {
        localStorage.setItem('cartItems', JSON.stringify(safeCartItems));
        localStorage.setItem('cartTotal', JSON.stringify(total));
        localStorage.setItem('cartLength', JSON.stringify(safeCartLength));
      } catch (err) {
        console.error('Failed to sync cart to localStorage:', err);
      }
    },
    async getOption() {
      this.loading = true;
      const token = await this.getValidToken();
      try {
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/getoption?mongooseid=${this.mongooseid}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Origin': window.location.origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
          }
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error performing autocomplete:', errorData);
          return;
        }
        const data = await response.json();
        const {
          variant
        } = data;
        this.option = variant;
        this.product_name = variant.productId.name;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async getOptionForAdmin() {
      this.loading = true;
      try {
        const response = await fetch(`${api["a" /* serverurl */]}/admin/getoption?mongooseid=${this.mongooseid}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Origin': window.location.origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
          }
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error performing autocomplete:', errorData);
          return;
        }
        const data = await response.json();
        const {
          variant
        } = data;
        this.option = variant;
        this.product_name = variant.productId.name;
        console.log(this.option, 'option shown here');
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    formatPrice(price) {
      return price ? price.toLocaleString() : 0;
    },
    incrementQuantity() {
      this.quantity++;

      //  console.log(typeof this.option.price, 'this.price')

      this.$store.dispatch("cart/addItem", {
        id: this.option._id,
        quantity: this.quantity,
        price: this.option.price
      });
      this.syncCartToLocalStorage();
    },
    decrementQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
        this.$store.dispatch("cart/removeItem", {
          id: this.option._id,
          quantity: this.quantity,
          price: this.option.price
        });
      }
      this.syncCartToLocalStorage();
    },
    removeItem() {
      if (this.quantity > 0) {
        this.quantity = 0;
        this.$store.dispatch("cart/removeItem", {
          id: this.option._id,
          quantity: this.quantity,
          price: this.option.price
        });
      }
      this.syncCartToLocalStorage();
    }
  }
});
// CONCATENATED MODULE: ./components/ChatOption.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatOptionvue_type_script_lang_js = (ChatOptionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ChatOption.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatOptionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4912c19b",
  "3b35e260"
  
)

/* harmony default export */ var ChatOption = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(52).default})


/***/ })

};;
//# sourceMappingURL=cart.js.map