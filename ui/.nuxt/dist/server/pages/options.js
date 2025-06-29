exports.ids = [36,4,8,10,21];
exports.modules = {

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(156);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2332e160", content, true, context)
};

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_0740f22c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_0740f22c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_0740f22c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_0740f22c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options_vue_vue_type_style_index_0_id_0740f22c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0740f22c],[data-v-0740f22c]:after,[data-v-0740f22c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0740f22c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0740f22c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0740f22c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0740f22c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0740f22c]{font-size:65%}}body[data-v-0740f22c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0740f22c]{padding:0}}[data-v-0740f22c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0740f22c]::selection{background-color:#249b48;color:#fff}[data-v-0740f22c]::-webkit-scrollbar{height:8px;width:8px}[data-v-0740f22c]::-webkit-scrollbar-track{background:transparent}[data-v-0740f22c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0740f22c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0740f22c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0740f22c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0740f22c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0740f22c{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-0740f22c]{animation:slide-in-left-0740f22c .5s ease-out forwards}.button-primary[data-v-0740f22c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0740f22c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0740f22c]{opacity:.4}.floating-element[data-v-0740f22c]{animation:float-0740f22c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0740f22c]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0740f22c]{animation:spin-0740f22c 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0740f22c]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0740f22c]{filter:blur(3px)}.error-message[data-v-0740f22c]{animation:slideFadeInUp-0740f22c .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-0740f22c]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-0740f22c]{overflow-x:hidden}.landing__top[data-v-0740f22c]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0740f22c]{display:flex}}.landing__topleft[data-v-0740f22c]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0740f22c]{display:block;width:100%}}.landing__topleft--auth[data-v-0740f22c]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0740f22c]{padding:0;width:auto}}.landing__topright[data-v-0740f22c],.landing__topright--img[data-v-0740f22c]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0740f22c]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0740f22c]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0740f22c]{display:none}}.landing__content[data-v-0740f22c]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0740f22c]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0740f22c]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0740f22c]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0740f22c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoptions[data-v-0740f22c]{height:100vh;overflow:hidden;overflow-y:scroll;padding:4rem 2rem 19rem;z-index:10}.chatoptions[data-v-0740f22c],.chatoptions__header[data-v-0740f22c]{background:#fff;left:0;position:fixed;top:0;width:100vw}.chatoptions__header[data-v-0740f22c]{z-index:6}.chatoptions__header.auth[data-v-0740f22c],.chatoptions__header.unauth[data-v-0740f22c]{background:transparent}@media only screen and (max-width:56.25em){.chatoptions__header.auth[data-v-0740f22c]{background:#fff}}.chatoptions__options[data-v-0740f22c]{margin-top:3rem}.chatoptions__description[data-v-0740f22c]{border-top:1px solid #eee;margin-top:2rem;padding:1rem 0}.chatoptions__description .description__title[data-v-0740f22c]{color:#000;font-size:1.6rem;font-weight:700;margin-bottom:1rem}.chatoptions__description .description__text[data-v-0740f22c]{color:#555;font-size:1.4rem;line-height:1.6}.chatoptions__content[data-v-0740f22c]{display:flex;justify-content:center}.chatoptions__content--body[data-v-0740f22c]{width:60rem}@media only screen and (max-width:56.25em){.chatoptions__content--body[data-v-0740f22c]{width:100%}}.chatoptions__loading[data-v-0740f22c]{align-items:center;display:flex;justify-content:center;padding:5rem 0}.chatoptions__tags[data-v-0740f22c]{border-bottom:1px solid #fff;border-top:1px solid #fff;display:flex;flex-wrap:wrap;gap:.8rem;margin-top:2rem;padding:1rem 0}.chatoptions__tag-pill[data-v-0740f22c]{align-items:center;background-color:rgba(36,155,72,.1);border-radius:20px;color:#249b48;display:inline-flex;font-size:1.3rem;font-weight:500;justify-content:center;padding:.6rem 1.2rem;text-transform:capitalize;white-space:nowrap}.chatoptions__bottom[data-v-0740f22c]{background:#fff;bottom:0;display:flex;justify-content:center;left:0;padding:1rem 1rem 2rem;position:fixed;width:100%;z-index:4}.chatoptions__bottom.column[data-v-0740f22c]{flex-direction:column}@media only screen and (max-width:56.25em){.chatoptions__bottom[data-v-0740f22c]{display:block}}.chatoptions__bottom button[data-v-0740f22c]{font-size:2rem;padding:2rem;width:100%}.chatoptions__bottom button.spacebetween[data-v-0740f22c]{display:flex;justify-content:space-between}.chatoptions__bottom button.transparent-button[data-v-0740f22c]{margin-bottom:2rem}.chatoptions__bottom .button-primary[data-v-0740f22c]{align-items:center;display:flex;gap:.5rem;justify-content:center}.loader[data-v-0740f22c]{animation:spin-0740f22c 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}.ml-1[data-v-0740f22c]{margin-left:.5rem}@keyframes spin-0740f22c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.button-primary[disabled][data-v-0740f22c]{cursor:not-allowed;opacity:.7}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/options.vue?vue&type=template&id=0740f22c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatoptions"
  }, [_vm._ssrNode("<div class=\"chatoptions__content\" data-v-0740f22c>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__content--body\" data-v-0740f22c>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__header\" data-v-0740f22c>", "</div>", [_c('ChatHeader', {
    attrs: {
      "name": _vm.product.productname,
      "logovisible": false,
      "jwt": true,
      "backRoute": _vm.backRoute
    }
  })], 1)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"chatoptions__content\" data-v-0740f22c>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__content--body\" data-v-0740f22c>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__options\" data-v-0740f22c>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"chatoptions__loading\" data-v-0740f22c>", "</div>", [_c('LoadingAnimation')], 1) : _vm._ssrNode("<div data-v-0740f22c>", "</div>", _vm._l(_vm.variants, function (variant) {
    return _vm._ssrNode("<div data-v-0740f22c>", "</div>", [_c('ChatOption', {
      attrs: {
        "data": {
          ...variant,
          productimg: _vm.product.productimg
        }
      }
    })], 1);
  }), 0), _vm._ssrNode(" " + (_vm.productTags && _vm.productTags.length > 0 ? "<div class=\"chatoptions__tags\" data-v-0740f22c>" + _vm._ssrList(_vm.productTags, function (tag, index) {
    return "<span class=\"chatoptions__tag-pill\" data-v-0740f22c>" + _vm._ssrEscape("\n                        " + _vm._s(tag) + "\n                    ") + "</span>";
  }) + "</div>" : "<!---->") + " <div class=\"chatoptions__description\" data-v-0740f22c><div class=\"chatoptions__content--body\" data-v-0740f22c><h2 class=\"description__title\" data-v-0740f22c>Product Description</h2> <p class=\"description__text\" data-v-0740f22c>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.product.productDescription || `This product comes in multiple variants. Select the
                            one that
                            best fits your needs. Each
                            variant is carefully crafted to ensure the best quality and customer satisfaction.`) + "\n                        ") + "</p></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"chatoptions__bottom\" data-v-0740f22c>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__content--body\" data-v-0740f22c>", "</div>", [_vm._ssrNode("<button class=\"button-primary transparent-button\" data-v-0740f22c><span data-v-0740f22c>Continue Shopping</span></button> "), _vm.cartTotal === 0 ? _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.checkoutLoading) + " class=\"button-primary spacebetween disabled-btn\" data-v-0740f22c>", "</button>", [_vm._ssrNode("<span data-v-0740f22c>Proceed to Checkout</span> "), _vm.checkoutLoading ? _vm._ssrNode("<span class=\"loader ml-1\" data-v-0740f22c>", "</span>") : _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e(), _vm._ssrNode(" "), _vm.cartTotal > 0 ? _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.checkoutLoading) + " class=\"button-primary spacebetween\" data-v-0740f22c>", "</button>", [_vm._ssrNode("<span data-v-0740f22c>Proceed to Checkout</span> "), _vm.checkoutLoading ? _vm._ssrNode("<span class=\"loader ml-1\" data-v-0740f22c>", "</span>") : _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e()], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/options.vue?vue&type=template&id=0740f22c&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/options.vue?vue&type=script&lang=js



/* harmony default export */ var optionsvue_type_script_lang_js = ({
  mixins: [jwt_mixin["a" /* default */]],
  data() {
    return {
      variants: [],
      product: {},
      backRoute: '/',
      loading: false,
      checkoutLoading: false
    };
  },
  mounted() {
    this.getOptions();
    this.getProduct();
  },
  computed: {
    ...Object(external_vuex_["mapState"])("cart", {
      cartTotal: state => state.total,
      cartItems: state => state.items,
      cartTotalItems: state => state.totalItems,
      checkoutData: state => state.checkout
    }),
    productTags() {
      return this.convertMetadataStringToArray(this.product.metadata);
    }
  },
  methods: {
    convertMetadataStringToArray(metadataString) {
      if (typeof metadataString !== 'string' || metadataString.trim() === '') {
        return [];
      }
      return metadataString.split(',').map(item => item.trim()).filter(item => item !== '');
    },
    async getProduct() {
      this.loading = true;
      try {
        const productId = `${this.$route.query.currentproduct}`.trim().toLowerCase();
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/getproduct',
          queries: {
            mongooseid: productId
          },
          method: 'GET'
        });
        const {
          product
        } = data;
        this.product = product;
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        this.loading = false;
      }
    },
    async getOptions() {
      this.loading = true;
      try {
        const optionsId = `${this.$route.query.currentproduct}`.trim().toLowerCase();
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/getoptions',
          queries: {
            mongooseid: optionsId
          },
          method: 'GET'
        });
        this.variants = data.variants;
      } catch (error) {
        console.error('Error fetching options:', error);
      } finally {
        this.loading = false;
      }
    },
    continueShopping() {
      this.$router.push({
        path: '/',
        query: {
          ...this.$route.query
        }
      });
    },
    async goToCheckout() {
      this.checkoutLoading = true;
      try {
        await this.$store.dispatch("cart/syncCartToServer");
        await this.$store.dispatch('cart/createCheckout');
        this.$router.push({
          path: '/checkout',
          query: {
            ...this.$route.query,
            checkout_id: this.checkoutData._id,
            prevpage: this.$route.path
          }
        });
      } catch (error) {
        console.error("Error syncing cart to server:", error);
      } finally {
        this.checkoutLoading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/options.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_optionsvue_type_script_lang_js = (optionsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/options.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(155)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_optionsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0740f22c",
  "8eb7e2e6"
  
)

/* harmony default export */ var options = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatHeader: __webpack_require__(52).default,LoadingAnimation: __webpack_require__(55).default,ChatOption: __webpack_require__(72).default,CartButton: __webpack_require__(49).default})


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

        //  console.log(this.validToken, 'this.validToken')

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
  add("67444d1d", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("c64b4228", content, true, context)
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartButton.vue?vue&type=template&id=0e337d1b&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cartbtn"
  }, [_vm._ssrNode((!_vm.showicon ? "<div class=\"cartbtn__icon--amount\" data-v-0e337d1b><p data-v-0e337d1b>" + _vm._ssrEscape("₦" + _vm._s(_vm.cartTotal)) + "</p></div>" : "<!---->") + " " + (_vm.showicon ? "<div" + _vm._ssrClass(null, {
    'disabled-btn': !_vm.cartLength || _vm.cartLength === 0
  }) + " data-v-0e337d1b><div class=\"cartbtn__icon\" data-v-0e337d1b>" + (_vm.isLoading ? "<div class=\"loader\" data-v-0e337d1b></div>" : (_vm.cartLength !== 0 ? "<div class=\"cartbtn__icon--total\" data-v-0e337d1b><span data-v-0e337d1b>" + _vm._ssrEscape(_vm._s(_vm.cartLength === 0 ? '' : _vm.cartLength)) + "</span></div>" : "<!---->") + " <svg data-v-0e337d1b><use xlink:href=\"/svg/symbol-defs.svg#icon-shopping-bag\" data-v-0e337d1b></use></svg>") + "</div></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CartButton.vue?vue&type=template&id=0e337d1b&scoped=true

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
        //await this.$store.dispatch("cart/syncCartToServer");

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
  "0e337d1b",
  "0826af36"
  
)

/* harmony default export */ var CartButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0e337d1b],[data-v-0e337d1b]:after,[data-v-0e337d1b]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0e337d1b]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0e337d1b]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0e337d1b]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0e337d1b]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0e337d1b]{font-size:65%}}body[data-v-0e337d1b]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0e337d1b]{padding:0}}[data-v-0e337d1b]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0e337d1b]::selection{background-color:#249b48;color:#fff}[data-v-0e337d1b]::-webkit-scrollbar{height:8px;width:8px}[data-v-0e337d1b]::-webkit-scrollbar-track{background:transparent}[data-v-0e337d1b]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0e337d1b]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0e337d1b]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0e337d1b{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0e337d1b{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0e337d1b{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-0e337d1b]{animation:slide-in-left-0e337d1b .5s ease-out forwards}.button-primary[data-v-0e337d1b]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0e337d1b]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0e337d1b]{opacity:.4}.floating-element[data-v-0e337d1b]{animation:float-0e337d1b 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0e337d1b]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0e337d1b]{animation:spin-0e337d1b 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0e337d1b]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0e337d1b]{filter:blur(3px)}.error-message[data-v-0e337d1b]{animation:slideFadeInUp-0e337d1b .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-0e337d1b]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-0e337d1b]{overflow-x:hidden}.landing__top[data-v-0e337d1b]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0e337d1b]{display:flex}}.landing__topleft[data-v-0e337d1b]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0e337d1b]{display:block;width:100%}}.landing__topleft--auth[data-v-0e337d1b]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0e337d1b]{padding:0;width:auto}}.landing__topright[data-v-0e337d1b],.landing__topright--img[data-v-0e337d1b]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0e337d1b]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0e337d1b]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0e337d1b]{display:none}}.landing__content[data-v-0e337d1b]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0e337d1b]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0e337d1b]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0e337d1b]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0e337d1b]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.cartbtn[data-v-0e337d1b]{color:#000;position:relative}.cartbtn__icon[data-v-0e337d1b]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-0e337d1b]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-0e337d1b]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-0e337d1b],.cartbtn__icon--total[data-v-0e337d1b]{color:#fff;font-weight:600}.cartbtn svg[data-v-0e337d1b]{height:80%;width:80%;fill:#fff}.loader[data-v-0e337d1b]{animation:spin-0e337d1b 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}@keyframes spin-0e337d1b{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=template&id=7f082eaa&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chat-header"
  }, [_vm._ssrNode("<div class=\"chat-header__left\" data-v-7f082eaa>" + (_vm.name ? "<div class=\"chat-header__name\" data-v-7f082eaa><span class=\"svg\" data-v-7f082eaa><svg data-v-7f082eaa><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-7f082eaa></use></svg></span> <span class=\"label\" data-v-7f082eaa>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></div>" : "<!---->") + " " + (_vm.logovisible ? "<figure" + _vm._ssrClass("chat-header__left--logo", {
    green: _vm.green
  }) + " data-v-7f082eaa><img src=\"/imgs/logo.png\" data-v-7f082eaa></figure>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"chat-header__right\" data-v-7f082eaa>", "</div>", [_vm._ssrNode("<div class=\"chat-header__right--cart\" data-v-7f082eaa>", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" <div" + _vm._ssrClass("chat-header__burger", {
    unauth: !_vm.jwtToken,
    green: _vm.green
  }) + " data-v-7f082eaa><span data-v-7f082eaa></span><span data-v-7f082eaa></span><span data-v-7f082eaa></span></div>")], 2), _vm._ssrNode(" "), _vm.menuopen ? _vm._ssrNode("<div" + _vm._ssrClass("chat-header__menu", {
    auth: _vm.jwtToken
  }) + " data-v-7f082eaa>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menubody slide-in-left\" data-v-7f082eaa>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menuitems\" data-v-7f082eaa>", "</div>", [_vm._ssrNode("<figure class=\"chat-header__left--logo bottom-1rem\" data-v-7f082eaa>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/logo.png',
      expression: "'/imgs/logo.png'"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chat-header__menuitem\" data-v-7f082eaa><span class=\"svg\" data-v-7f082eaa></span> " + (!_vm.jwtToken ? "<span class=\"label\" data-v-7f082eaa>About us</span>" : "<!---->") + "</div> " + (!_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-7f082eaa><span class=\"svg\" data-v-7f082eaa></span> <span class=\"label\" data-v-7f082eaa>Sign In/Sign Up</span></div>" : "<!---->") + " " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-7f082eaa><span class=\"svg\" data-v-7f082eaa></span> <span class=\"label\" data-v-7f082eaa>Orders</span></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"chat-header__menuitems\" data-v-7f082eaa><div class=\"chat-header__menuitem\" data-v-7f082eaa><span class=\"svg\" data-v-7f082eaa></span></div> " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-7f082eaa><span class=\"svg\" data-v-7f082eaa></span> <span class=\"label\" data-v-7f082eaa>Signout</span></div>" : "<!---->") + "</div>")], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=template&id=7f082eaa&scoped=true

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
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

// CONCATENATED MODULE: ./mixins/navigation_mixin.js
/* harmony default export */ var navigation_mixin = ({
  data() {
    return {
      routeStack: ['/']
    };
  },
  methods: {
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
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=script&lang=js




















/* harmony default export */ var ChatHeadervue_type_script_lang_js = ({
  mixins: [jwt_mixin["a" /* default */], navigation_mixin],
  props: ['logovisible', 'name', 'backRoute', 'green'],
  emits: ['update:authValue'],
  data() {
    return {
      menuopen: false
      //routeStack: ['/']
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

    //console.log(token, 'foolishness')

    if (token) {
      this.getValidUser();
    } else {
      this.redirectHome();
    }

    //this.$store.dispatch('cart/resetCart');

    await this.$store.dispatch('cart/loadCartFromIndexedDB');

    //this.$store.dispatch('cart/clearAllCartItems');

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
    async getValidUser() {
      try {
        const token = localStorage.getItem('jwt');
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/auth/validuser',
          queries: {
            jwttoken: token
          },
          method: 'GET'
        });
        const {
          user
        } = data;

        // console.log(user)

        this.$store.dispatch('user/setJwtToken', token);
        this.$store.dispatch('user/addCurrentUser', user);
      } catch (error) {
        console.error('Error fetching valid user:', error);
        //this.$store.dispatch('user/removeJwtToken');
        return this.redirectHome();
      }
    },
    toggleSideMenu() {
      this.menuopen = !this.menuopen;
    },
    /* goBack() {
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
     },*/
    handleResize() {
      this.menuopen = window.innerWidth > 900;
    },
    async signOut() {
      try {
        this.$store.dispatch('user/setLoading', true);
        await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/auth/signout',
          method: 'POST'
        });
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
      } catch (error) {
        console.error('Sign out failed:', error.message);
      } finally {
        this.$store.dispatch('user/setLoading', false);
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
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatHeadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7f082eaa",
  "5f357078"
  
)

/* harmony default export */ var ChatHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartButton: __webpack_require__(49).default})


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-7f082eaa],[data-v-7f082eaa]:after,[data-v-7f082eaa]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-7f082eaa]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-7f082eaa]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-7f082eaa]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-7f082eaa]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-7f082eaa]{font-size:65%}}body[data-v-7f082eaa]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-7f082eaa]{padding:0}}[data-v-7f082eaa]::-moz-selection{background-color:#249b48;color:#fff}[data-v-7f082eaa]::selection{background-color:#249b48;color:#fff}[data-v-7f082eaa]::-webkit-scrollbar{height:8px;width:8px}[data-v-7f082eaa]::-webkit-scrollbar-track{background:transparent}[data-v-7f082eaa]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-7f082eaa]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-7f082eaa]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-7f082eaa{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-7f082eaa{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-7f082eaa{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-7f082eaa{to{transform:rotate(1turn)}}.slide-in-left[data-v-7f082eaa]{animation:slide-in-left-7f082eaa .5s ease-out forwards}.button-primary[data-v-7f082eaa]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-7f082eaa]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-7f082eaa]{opacity:.4}.floating-element[data-v-7f082eaa]{animation:float-7f082eaa 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-7f082eaa]{height:100vh!important;overflow:hidden!important}.spinner[data-v-7f082eaa]{animation:spin-7f082eaa 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-7f082eaa]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-7f082eaa]{filter:blur(3px)}.error-message[data-v-7f082eaa]{animation:slideFadeInUp-7f082eaa .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-7f082eaa]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-7f082eaa]{overflow-x:hidden}.landing__top[data-v-7f082eaa]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-7f082eaa]{display:flex}}.landing__topleft[data-v-7f082eaa]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-7f082eaa]{display:block;width:100%}}.landing__topleft--auth[data-v-7f082eaa]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-7f082eaa]{padding:0;width:auto}}.landing__topright[data-v-7f082eaa],.landing__topright--img[data-v-7f082eaa]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-7f082eaa]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-7f082eaa]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-7f082eaa]{display:none}}.landing__content[data-v-7f082eaa]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-7f082eaa]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-7f082eaa]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-7f082eaa]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-7f082eaa]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-header[data-v-7f082eaa]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-7f082eaa]{padding:2rem}}.chat-header__name[data-v-7f082eaa],.chat-header__name span.svg[data-v-7f082eaa]{align-items:center;display:flex}.chat-header__name span.svg[data-v-7f082eaa]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-7f082eaa]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-7f082eaa]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-7f082eaa]{display:none}}.chat-header__left--logo[data-v-7f082eaa]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-7f082eaa]{margin-bottom:5rem}.chat-header__left--logo img[data-v-7f082eaa]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-7f082eaa]{height:3.5rem}.chat-header__burger[data-v-7f082eaa]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-7f082eaa]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-7f082eaa]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-7f082eaa]{background:#fff}.chat-header__burger.green span[data-v-7f082eaa]{background:#249b48}.chat-header__menu[data-v-7f082eaa]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-7f082eaa]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-7f082eaa],.chat-header__menu.auth[data-v-7f082eaa]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-7f082eaa]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-7f082eaa]{font-size:1.8rem}}.chat-header__menuitem span[data-v-7f082eaa]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-7f082eaa]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 55:
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
var componentNormalizer = __webpack_require__(3);

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
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-3b87158c],[data-v-3b87158c]:after,[data-v-3b87158c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-3b87158c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-3b87158c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-3b87158c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-3b87158c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-3b87158c]{font-size:65%}}body[data-v-3b87158c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-3b87158c]{padding:0}}[data-v-3b87158c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::-webkit-scrollbar{height:8px;width:8px}[data-v-3b87158c]::-webkit-scrollbar-track{background:transparent}[data-v-3b87158c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-3b87158c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-3b87158c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-3b87158c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-3b87158c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes spin-3b87158c{to{transform:rotate(1turn)}}.slide-in-left[data-v-3b87158c]{animation:slide-in-left-3b87158c .5s ease-out forwards}.button-primary[data-v-3b87158c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-3b87158c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-3b87158c]{opacity:.4}.floating-element[data-v-3b87158c]{animation:float-3b87158c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-3b87158c]{height:100vh!important;overflow:hidden!important}.spinner[data-v-3b87158c]{animation:spin-3b87158c 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-3b87158c]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-3b87158c]{filter:blur(3px)}.error-message[data-v-3b87158c]{animation:slideFadeInUp-3b87158c .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-3b87158c]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-3b87158c]{overflow-x:hidden}.landing__top[data-v-3b87158c]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-3b87158c]{display:flex}}.landing__topleft[data-v-3b87158c]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-3b87158c]{display:block;width:100%}}.landing__topleft--auth[data-v-3b87158c]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-3b87158c]{padding:0;width:auto}}.landing__topright[data-v-3b87158c],.landing__topright--img[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-3b87158c]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-3b87158c]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-3b87158c]{display:none}}.landing__content[data-v-3b87158c]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-3b87158c]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-3b87158c]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-3b87158c]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.loading-animation[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.loading-animation figure[data-v-3b87158c]{animation:float-3b87158c 1.5s ease-in-out infinite alternate;border-radius:100%;height:3rem;overflow:hidden;width:3rem}.loading-animation figure img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@keyframes float-3b87158c{0%{transform:translateY(0)}to{transform:translateY(-10px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("c6d1a5c6", content, true, context)
};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_d447c218_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_d447c218_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_d447c218_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_d447c218_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_d447c218_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-d447c218],[data-v-d447c218]:after,[data-v-d447c218]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-d447c218]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-d447c218]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-d447c218]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-d447c218]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-d447c218]{font-size:65%}}body[data-v-d447c218]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-d447c218]{padding:0}}[data-v-d447c218]::-moz-selection{background-color:#249b48;color:#fff}[data-v-d447c218]::selection{background-color:#249b48;color:#fff}[data-v-d447c218]::-webkit-scrollbar{height:8px;width:8px}[data-v-d447c218]::-webkit-scrollbar-track{background:transparent}[data-v-d447c218]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-d447c218]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-d447c218]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-d447c218{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-d447c218{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-d447c218{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-d447c218{to{transform:rotate(1turn)}}.slide-in-left[data-v-d447c218]{animation:slide-in-left-d447c218 .5s ease-out forwards}.button-primary[data-v-d447c218]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-d447c218]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-d447c218]{opacity:.4}.floating-element[data-v-d447c218]{animation:float-d447c218 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-d447c218]{height:100vh!important;overflow:hidden!important}.spinner[data-v-d447c218]{animation:spin-d447c218 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-d447c218]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-d447c218]{filter:blur(3px)}.error-message[data-v-d447c218]{animation:slideFadeInUp-d447c218 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-d447c218]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-d447c218]{overflow-x:hidden}.landing__top[data-v-d447c218]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-d447c218]{display:flex}}.landing__topleft[data-v-d447c218]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-d447c218]{display:block;width:100%}}.landing__topleft--auth[data-v-d447c218]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-d447c218]{padding:0;width:auto}}.landing__topright[data-v-d447c218],.landing__topright--img[data-v-d447c218]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-d447c218]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-d447c218]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-d447c218]{display:none}}.landing__content[data-v-d447c218]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-d447c218]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-d447c218]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-d447c218]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-d447c218]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption[data-v-d447c218]{background-color:#fff;border:2px solid rgba(36,155,72,.5);border-radius:1rem;display:flex;justify-content:space-between;margin-bottom:2rem;padding:2rem 1.5rem}.chatoption__loader[data-v-d447c218]{align-items:center;display:flex;height:12rem;justify-content:center}.chatoption__left[data-v-d447c218]{display:flex}.chatoption__details--productname[data-v-d447c218]{font-size:1.2rem;font-weight:500}.chatoption__details--name[data-v-d447c218]{font-size:1.5rem;font-weight:600;margin-bottom:1rem}.chatoption__details--price[data-v-d447c218]{display:flex;font-size:1.6rem;font-weight:600}.chatoption__details--price span[data-v-d447c218]{color:#249b48;font-size:600}.chatoption__details--productquantity[data-v-d447c218]{align-items:center;display:flex;margin-top:1rem}.chatoption__details--productquantity span[data-v-d447c218]{align-items:center;display:flex;font-size:1.2rem;font-weight:500;margin-right:.5rem}.chatoption__details--producttotal[data-v-d447c218]{align-items:center;display:flex}.chatoption__details--producttotal span[data-v-d447c218]{align-items:center;display:flex;font-size:1.2rem;font-weight:500;margin-right:.5rem}.chatoption__right[data-v-d447c218]{align-items:flex-end;display:flex;flex-direction:column;justify-content:space-between}.chatoption__img[data-v-d447c218]{border-radius:1rem;height:10rem;margin-right:.5rem;overflow:hidden;width:10rem}.chatoption__img img[data-v-d447c218]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption__quantity[data-v-d447c218]{display:grid;grid-template-columns:repeat(3,1fr)}span[data-v-d447c218]{align-items:center;display:flex;justify-content:center}span.quantity[data-v-d447c218]{font-size:1.5rem;font-weight:600}span.svg[data-v-d447c218]{border:1px solid rgba(36,155,72,.5);border-radius:.5rem;padding:.5rem}span.svg svg[data-v-d447c218]{height:2rem;width:2rem;fill:rgba(0,0,0,.5)}span.svg svg.red[data-v-d447c218]{fill:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOption.vue?vue&type=template&id=d447c218&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.loading && !_vm.option ? _vm._ssrNode("<div class=\"chatoption__loader\" data-v-d447c218>", "</div>", [_c('LoadingAnimation')], 1) : _vm.option ? _vm._ssrNode("<div class=\"chatoption slide-fade-in-up\" data-v-d447c218>", "</div>", [_vm._ssrNode("<div class=\"chatoption__left\" data-v-d447c218>", "</div>", [_vm._ssrNode("<figure class=\"chatoption__img\" data-v-d447c218>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.option.image.length ? _vm.option.image : _vm.option.productimg,
      expression: "option.image.length ? option.image : option.productimg"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chatoption__details\" data-v-d447c218><p class=\"chatoption__details--productname\" data-v-d447c218>" + _vm._ssrEscape(_vm._s(_vm.product_name)) + "</p> <p class=\"chatoption__details--name\" data-v-d447c218>" + _vm._ssrEscape(_vm._s(_vm.option.unit)) + "</p> <p class=\"chatoption__details--price\" data-v-d447c218>\n                    ₦\n                    <span data-v-d447c218>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.option.price))) + "</span></p> " + (_vm.admin ? "<p class=\"chatoption__details--productquantity\" data-v-d447c218><span data-v-d447c218>Amount:</span> <span data-v-d447c218>" + _vm._ssrEscape(_vm._s(_vm.product_quantity)) + "</span></p>" : "<!---->") + " " + (_vm.admin ? "<p class=\"chatoption__details--producttotal\" data-v-d447c218><span data-v-d447c218>Total:</span> <span data-v-d447c218>" + _vm._ssrEscape(_vm._s(_vm.product_quantity * _vm.option.price)) + "</span></p>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" " + (!_vm.admin ? "<div class=\"chatoption__right\" data-v-d447c218><div class=\"chatoption__delete\" data-v-d447c218><span class=\"svg\" data-v-d447c218><svg data-v-d447c218><use xlink:href=\"/svg/symbol-defs.svg#icon-trash\" data-v-d447c218></use></svg></span></div> <div class=\"chatoption__quantity\" data-v-d447c218><span class=\"svg\" data-v-d447c218><svg data-v-d447c218><use xlink:href=\"/svg/symbol-defs.svg#icon-minus1\" data-v-d447c218></use></svg></span> <span class=\"quantity\" data-v-d447c218>" + _vm._ssrEscape(_vm._s(_vm.quantity)) + "</span> <span class=\"svg\" data-v-d447c218><svg data-v-d447c218><use xlink:href=\"/svg/symbol-defs.svg#icon-plus\" data-v-d447c218></use></svg></span></div></div>" : "<!---->"))], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatOption.vue?vue&type=template&id=d447c218&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

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
      //const cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');

      this.quantity = this.cartItems[this.data._id] ? this.cartItems[this.data._id] : 0;
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
      console.log(total, 'check the total here');
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
      try {
        const optionId = `${this.mongooseid}`.trim().toLowerCase();
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/getoption',
          queries: {
            mongooseid: optionId
          },
          method: 'GET'
        });
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
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'admin/getoption',
          queries: {
            mongooseid: this.mongooseid
          },
          method: 'GET'
        });
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

      this.$store.dispatch("cart/addItemAndPersist", {
        id: this.option._id,
        quantity: this.quantity,
        price: this.option.price
      });

      //this.syncCartToLocalStorage()
    },
    decrementQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
        this.$store.dispatch("cart/removeItemAndPersist", {
          id: this.option._id,
          quantity: this.quantity,
          price: this.option.price
        });
      }

      //this.syncCartToLocalStorage()
    },
    removeItem() {
      if (this.quantity > 0) {
        this.quantity = 0;
        this.$store.dispatch("cart/removeItemAndPersist", {
          id: this.option._id,
          quantity: this.quantity,
          price: this.option.price
        });
      }

      //this.syncCartToLocalStorage()
    }
  }
});
// CONCATENATED MODULE: ./components/ChatOption.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatOptionvue_type_script_lang_js = (ChatOptionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ChatOption.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatOptionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d447c218",
  "3b35e260"
  
)

/* harmony default export */ var ChatOption = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(55).default})


/***/ })

};;
//# sourceMappingURL=options.js.map