exports.ids = [24,3,7,9];
exports.modules = {

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("a82f4884", content, true, context)
};

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_24134a16_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_24134a16_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_24134a16_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_24134a16_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_24134a16_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-24134a16],[data-v-24134a16]:after,[data-v-24134a16]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-24134a16]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-24134a16]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-24134a16]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-24134a16]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-24134a16]{font-size:65%}}body[data-v-24134a16]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-24134a16]{padding:0}}[data-v-24134a16]::-moz-selection{background-color:#249b48;color:#fff}[data-v-24134a16]::selection{background-color:#249b48;color:#fff}[data-v-24134a16]::-webkit-scrollbar{height:8px;width:8px}[data-v-24134a16]::-webkit-scrollbar-track{background:transparent}[data-v-24134a16]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-24134a16]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-24134a16]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-24134a16{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-24134a16{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-24134a16{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-24134a16{to{transform:rotate(1turn)}}.slide-in-left[data-v-24134a16]{animation:slide-in-left-24134a16 .5s ease-out forwards}.button-primary[data-v-24134a16]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-24134a16]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-24134a16]{opacity:.4}.floating-element[data-v-24134a16]{animation:float-24134a16 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-24134a16]{height:100vh!important;overflow:hidden!important}.spinner[data-v-24134a16]{animation:spin-24134a16 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-24134a16]{stroke:#249b48;stroke-linecap:round}.chatcart__header[data-v-24134a16]{left:0;position:fixed;top:0;width:100vw;z-index:6}.chatcart__header.auth[data-v-24134a16],.chatcart__header.unauth[data-v-24134a16]{background:transparent}@media only screen and (max-width:56.25em){.chatcart__header.auth[data-v-24134a16]{background:#fff}}.chatcart__content[data-v-24134a16]{background:#fff;display:flex;justify-content:center;min-height:100vh;padding-bottom:20rem;padding-top:4rem;position:relative}@media only screen and (max-width:37.5em){.chatcart__content[data-v-24134a16]{padding:7rem 1rem 30rem}}.chatcart__content--body[data-v-24134a16]{width:60rem}@media only screen and (max-width:56.25em){.chatcart__content--body[data-v-24134a16]{width:100%}}.chatcart__bottom[data-v-24134a16]{background:#fff;bottom:0;display:flex;justify-content:center;left:0;padding:1rem 1rem 2rem;position:fixed;width:100%;z-index:4}.chatcart__bottom.column[data-v-24134a16]{flex-direction:column}@media only screen and (max-width:56.25em){.chatcart__bottom[data-v-24134a16]{display:block}}.chatcart__bottom button[data-v-24134a16]{font-size:2rem;padding:2rem;width:100%}.chatcart__bottom button.spacebetween[data-v-24134a16]{display:flex;justify-content:space-between}.chatcart__bottom button.transparent-button[data-v-24134a16]{margin-bottom:2rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=template&id=24134a16&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatcart"
  }, [_vm._ssrNode("<div class=\"chatcart__header\" data-v-24134a16>", "</div>", [_c('ChatHeader', {
    attrs: {
      "name": 'Your Cart',
      "logovisible": false,
      "jwt": true,
      "backRoute": '/'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"chatcart__content\" data-v-24134a16>", "</div>", [_vm._ssrNode("<div class=\"chatcart__content--body\" data-v-24134a16>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__options\" data-v-24134a16>", "</div>", _vm._l(_vm.cartTotalItems, function (mongooseid) {
    return _vm._ssrNode("<div data-v-24134a16>", "</div>", [_c('ChatOption', {
      attrs: {
        "mongooseid": mongooseid
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"chatcart__bottom\" data-v-24134a16>", "</div>", [_vm._ssrNode("<div class=\"chatcart__content--body\" data-v-24134a16>", "</div>", [_vm._ssrNode("<button class=\"button-primary transparent-button\" data-v-24134a16><span data-v-24134a16>Continue Shopping</span></button> "), _vm.cartTotal === 0 ? _vm._ssrNode("<button class=\"button-primary spacebetween disabled-btn\" data-v-24134a16>", "</button>", [_vm._ssrNode("<span data-v-24134a16>Proceed to Checkout</span> "), _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e(), _vm._ssrNode(" "), _vm.cartTotal > 0 ? _vm._ssrNode("<button class=\"button-primary spacebetween\" data-v-24134a16>", "</button>", [_vm._ssrNode("<span data-v-24134a16>Proceed to Checkout</span> "), _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e()], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/cart.vue?vue&type=template&id=24134a16&scoped=true

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
  
  var style0 = __webpack_require__(133)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cartvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "24134a16",
  "b93efe7e"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatHeader: __webpack_require__(49).default,ChatOption: __webpack_require__(57).default,CartButton: __webpack_require__(45).default})


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serverurl; });
const serverurl = (() => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname.includes('payoor')) {
      return 'https://api.payoor.store'; // production
    }
  }
  return 'http://localhost';
})();

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['jwt'],
  data() {
    return {
      loading: false,
      validToken: null,
      excludedPaths: ['/aboutus', '/admin']
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

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("07bc124a", content, true, context)
};

/***/ }),

/***/ 45:
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
  
  var style0 = __webpack_require__(47)
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

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("11cadb1b", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-4801e665],[data-v-4801e665]:after,[data-v-4801e665]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-4801e665]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-4801e665]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-4801e665]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-4801e665]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-4801e665]{font-size:65%}}body[data-v-4801e665]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-4801e665]{padding:0}}[data-v-4801e665]::-moz-selection{background-color:#249b48;color:#fff}[data-v-4801e665]::selection{background-color:#249b48;color:#fff}[data-v-4801e665]::-webkit-scrollbar{height:8px;width:8px}[data-v-4801e665]::-webkit-scrollbar-track{background:transparent}[data-v-4801e665]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-4801e665]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-4801e665]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-4801e665{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-4801e665{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-4801e665{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-4801e665{to{transform:rotate(1turn)}}.slide-in-left[data-v-4801e665]{animation:slide-in-left-4801e665 .5s ease-out forwards}.button-primary[data-v-4801e665]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-4801e665]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-4801e665]{opacity:.4}.floating-element[data-v-4801e665]{animation:float-4801e665 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-4801e665]{height:100vh!important;overflow:hidden!important}.spinner[data-v-4801e665]{animation:spin-4801e665 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-4801e665]{stroke:#249b48;stroke-linecap:round}.cartbtn[data-v-4801e665]{color:#000;position:relative}.cartbtn__icon[data-v-4801e665]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-4801e665]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-4801e665]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-4801e665],.cartbtn__icon--total[data-v-4801e665]{color:#fff;font-weight:600}.cartbtn svg[data-v-4801e665]{height:80%;width:80%;fill:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=template&id=39a75015&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chat-header"
  }, [_vm._ssrNode("<div class=\"chat-header__left\" data-v-39a75015>" + (_vm.name ? "<div class=\"chat-header__name\" data-v-39a75015><span class=\"svg\" data-v-39a75015><svg data-v-39a75015><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-39a75015></use></svg></span> <span class=\"label\" data-v-39a75015>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></div>" : "<!---->") + " " + (_vm.logovisible ? "<figure" + _vm._ssrClass("chat-header__left--logo", {
    green: _vm.green
  }) + " data-v-39a75015><img src=\"/imgs/logo.png\" data-v-39a75015></figure>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"chat-header__right\" data-v-39a75015>", "</div>", [_vm._ssrNode("<div class=\"chat-header__right--cart\" data-v-39a75015>", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" <div" + _vm._ssrClass("chat-header__burger", {
    unauth: !_vm.jwt,
    green: _vm.green
  }) + " data-v-39a75015><span data-v-39a75015></span><span data-v-39a75015></span><span data-v-39a75015></span></div>")], 2), _vm._ssrNode(" "), _vm.menuopen ? _vm._ssrNode("<div" + _vm._ssrClass("chat-header__menu", {
    auth: _vm.jwt
  }) + " data-v-39a75015>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menubody slide-in-left\" data-v-39a75015>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menuitems\" data-v-39a75015>", "</div>", [_vm._ssrNode("<figure class=\"chat-header__left--logo bottom-1rem\" data-v-39a75015>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/logo.png',
      expression: "'/imgs/logo.png'"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chat-header__menuitem\" data-v-39a75015><span class=\"svg\" data-v-39a75015></span> <span class=\"label\" data-v-39a75015>About us</span></div> " + (_vm.jwt ? "<div class=\"chat-header__menuitem\" data-v-39a75015><span class=\"svg\" data-v-39a75015></span> <span class=\"label\" data-v-39a75015>Orders</span></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"chat-header__menuitems\" data-v-39a75015><div class=\"chat-header__menuitem\" data-v-39a75015><span class=\"svg\" data-v-39a75015></span></div> " + (_vm.jwt ? "<div class=\"chat-header__menuitem\" data-v-39a75015><span class=\"svg\" data-v-39a75015></span> <span class=\"label\" data-v-39a75015>Signout</span></div>" : "<!---->") + "</div>")], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=template&id=39a75015&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(42);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(43);

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
  async mounted() {
    const token = await this.getValidToken();
    if (token) {
      this.getValidUser(token);
    } else {
      this.redirectHome();
    }
    this.$store.dispatch('cart/initializeCart');
    this.menuopen = window.innerWidth > 900 && this.jwt;
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
          localStorage.removeItem('jwt');
          return this.redirectHome();
        }
        ;
        await response.json();
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
        const token = await this.getValidToken();
        if (!token) {
          this.$emit('update:authValue', null);
          this.$router.push({
            path: '/',
            query: {
              ...this.$route.query
            }
          });
          return;
        }
        ;
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/auth/signout`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) throw new Error('Failed to sign out');
        await response.json();
        localStorage.removeItem('jwt');
        this.$emit('update:authValue', null);
        this.$router.push({
          path: '/',
          query: {
            ...this.$route.query
          }
        });
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
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatHeadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "39a75015",
  "5f357078"
  
)

/* harmony default export */ var ChatHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartButton: __webpack_require__(45).default})


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-39a75015],[data-v-39a75015]:after,[data-v-39a75015]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-39a75015]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-39a75015]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-39a75015]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-39a75015]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-39a75015]{font-size:65%}}body[data-v-39a75015]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-39a75015]{padding:0}}[data-v-39a75015]::-moz-selection{background-color:#249b48;color:#fff}[data-v-39a75015]::selection{background-color:#249b48;color:#fff}[data-v-39a75015]::-webkit-scrollbar{height:8px;width:8px}[data-v-39a75015]::-webkit-scrollbar-track{background:transparent}[data-v-39a75015]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-39a75015]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-39a75015]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-39a75015{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-39a75015{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-39a75015{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-39a75015{to{transform:rotate(1turn)}}.slide-in-left[data-v-39a75015]{animation:slide-in-left-39a75015 .5s ease-out forwards}.button-primary[data-v-39a75015]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-39a75015]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-39a75015]{opacity:.4}.floating-element[data-v-39a75015]{animation:float-39a75015 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-39a75015]{height:100vh!important;overflow:hidden!important}.spinner[data-v-39a75015]{animation:spin-39a75015 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-39a75015]{stroke:#249b48;stroke-linecap:round}.chat-header[data-v-39a75015]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-39a75015]{padding:2rem 1rem 1rem}}.chat-header__name[data-v-39a75015],.chat-header__name span.svg[data-v-39a75015]{align-items:center;display:flex}.chat-header__name span.svg[data-v-39a75015]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-39a75015]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-39a75015]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-39a75015]{display:none}}.chat-header__left--logo[data-v-39a75015]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-39a75015]{margin-bottom:5rem}.chat-header__left--logo img[data-v-39a75015]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-39a75015]{height:4.5rem}.chat-header__burger[data-v-39a75015]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-39a75015]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-39a75015]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-39a75015]{background:#fff}.chat-header__burger.green span[data-v-39a75015]{background:#249b48}.chat-header__menu[data-v-39a75015]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-39a75015]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-39a75015],.chat-header__menu.auth[data-v-39a75015]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-39a75015]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-39a75015]{font-size:1.8rem}}.chat-header__menuitem span[data-v-39a75015]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-39a75015]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("055c85f0", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_76d2fbc8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_76d2fbc8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_76d2fbc8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_76d2fbc8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_76d2fbc8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-76d2fbc8],[data-v-76d2fbc8]:after,[data-v-76d2fbc8]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-76d2fbc8]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-76d2fbc8]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-76d2fbc8]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-76d2fbc8]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-76d2fbc8]{font-size:65%}}body[data-v-76d2fbc8]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-76d2fbc8]{padding:0}}[data-v-76d2fbc8]::-moz-selection{background-color:#249b48;color:#fff}[data-v-76d2fbc8]::selection{background-color:#249b48;color:#fff}[data-v-76d2fbc8]::-webkit-scrollbar{height:8px;width:8px}[data-v-76d2fbc8]::-webkit-scrollbar-track{background:transparent}[data-v-76d2fbc8]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-76d2fbc8]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-76d2fbc8]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-76d2fbc8{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-76d2fbc8{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-76d2fbc8{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-76d2fbc8{to{transform:rotate(1turn)}}.slide-in-left[data-v-76d2fbc8]{animation:slide-in-left-76d2fbc8 .5s ease-out forwards}.button-primary[data-v-76d2fbc8]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-76d2fbc8]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-76d2fbc8]{opacity:.4}.floating-element[data-v-76d2fbc8]{animation:float-76d2fbc8 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-76d2fbc8]{height:100vh!important;overflow:hidden!important}.spinner[data-v-76d2fbc8]{animation:spin-76d2fbc8 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-76d2fbc8]{stroke:#249b48;stroke-linecap:round}.chatoption[data-v-76d2fbc8]{background-color:#fff;border:2px solid rgba(36,155,72,.5);border-radius:1rem;display:flex;justify-content:space-between;margin-bottom:2rem;padding:2rem 1.5rem}.chatoption__loader[data-v-76d2fbc8]{align-items:center;display:flex;height:12rem;justify-content:center}.chatoption__left[data-v-76d2fbc8]{display:flex}.chatoption__details--name[data-v-76d2fbc8]{font-size:1.7rem;font-weight:600;margin-bottom:1.2rem}.chatoption__details--price[data-v-76d2fbc8]{display:flex;font-size:1.6rem;font-weight:600}.chatoption__details--price span[data-v-76d2fbc8]{color:#249b48;font-size:600}.chatoption__right[data-v-76d2fbc8]{align-items:flex-end;display:flex;flex-direction:column;justify-content:space-between}.chatoption__img[data-v-76d2fbc8]{border-radius:1rem;height:10rem;margin-right:.5rem;overflow:hidden;width:10rem}.chatoption__img img[data-v-76d2fbc8]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption__quantity[data-v-76d2fbc8]{display:grid;grid-template-columns:repeat(3,1fr)}span[data-v-76d2fbc8]{align-items:center;display:flex;justify-content:center}span.quantity[data-v-76d2fbc8]{font-size:1.5rem;font-weight:600}span.svg[data-v-76d2fbc8]{border:1px solid rgba(36,155,72,.5);border-radius:.5rem;padding:.5rem}span.svg svg[data-v-76d2fbc8]{height:2rem;width:2rem;fill:rgba(0,0,0,.5)}span.svg svg.red[data-v-76d2fbc8]{fill:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOption.vue?vue&type=template&id=76d2fbc8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.loading && !_vm.option ? _vm._ssrNode("<div class=\"chatoption__loader\" data-v-76d2fbc8>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-76d2fbc8></div>")], 2) : _vm.option ? _vm._ssrNode("<div class=\"chatoption slide-fade-in-up\" data-v-76d2fbc8>", "</div>", [_vm._ssrNode("<div class=\"chatoption__left\" data-v-76d2fbc8>", "</div>", [_vm._ssrNode("<figure class=\"chatoption__img\" data-v-76d2fbc8>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.option.image.length ? _vm.option.image : _vm.option.productimg,
      expression: "option.image.length ? option.image : option.productimg"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chatoption__details\" data-v-76d2fbc8><p class=\"chatoption__details--name\" data-v-76d2fbc8>" + _vm._ssrEscape(_vm._s(_vm.option.unit)) + "</p> <p class=\"chatoption__details--price\" data-v-76d2fbc8>\n                    ₦\n                    <span data-v-76d2fbc8>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.option.price))) + "</span></p></div>")], 2), _vm._ssrNode(" <div class=\"chatoption__right\" data-v-76d2fbc8><div class=\"chatoption__delete\" data-v-76d2fbc8><span class=\"svg\" data-v-76d2fbc8><svg data-v-76d2fbc8><use xlink:href=\"/svg/symbol-defs.svg#icon-trash\" data-v-76d2fbc8></use></svg></span></div> <div class=\"chatoption__quantity\" data-v-76d2fbc8><span class=\"svg\" data-v-76d2fbc8><svg data-v-76d2fbc8><use xlink:href=\"/svg/symbol-defs.svg#icon-minus1\" data-v-76d2fbc8></use></svg></span> <span class=\"quantity\" data-v-76d2fbc8>" + _vm._ssrEscape(_vm._s(_vm.quantity)) + "</span> <span class=\"svg\" data-v-76d2fbc8><svg data-v-76d2fbc8><use xlink:href=\"/svg/symbol-defs.svg#icon-plus\" data-v-76d2fbc8></use></svg></span></div></div>")], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatOption.vue?vue&type=template&id=76d2fbc8&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(42);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(43);

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
    }
  },
  data() {
    return {
      quantity: 0,
      option: null,
      loading: false
    };
  },
  mounted() {
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
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatOptionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "76d2fbc8",
  "3b35e260"
  
)

/* harmony default export */ var ChatOption = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cart.js.map