exports.ids = [25,3,7,20];
exports.modules = {

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("79821b4e", content, true, context)
};

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d8467df_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d8467df_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d8467df_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d8467df_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d8467df_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-5d8467df],[data-v-5d8467df]:after,[data-v-5d8467df]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-5d8467df]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-5d8467df]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-5d8467df]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-5d8467df]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-5d8467df]{font-size:65%}}body[data-v-5d8467df]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-5d8467df]{padding:0}}[data-v-5d8467df]::-moz-selection{background-color:#249b48;color:#fff}[data-v-5d8467df]::selection{background-color:#249b48;color:#fff}[data-v-5d8467df]::-webkit-scrollbar{height:8px;width:8px}[data-v-5d8467df]::-webkit-scrollbar-track{background:transparent}[data-v-5d8467df]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-5d8467df]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-5d8467df]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-5d8467df{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-5d8467df{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-5d8467df{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-5d8467df{to{transform:rotate(1turn)}}.slide-in-left[data-v-5d8467df]{animation:slide-in-left-5d8467df .5s ease-out forwards}.button-primary[data-v-5d8467df]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-5d8467df]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-5d8467df]{opacity:.4}.floating-element[data-v-5d8467df]{animation:float-5d8467df 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-5d8467df]{height:100vh!important;overflow:hidden!important}.spinner[data-v-5d8467df]{animation:spin-5d8467df 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-5d8467df]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-5d8467df]{filter:blur(3px)}.landing[data-v-5d8467df]{overflow-x:hidden}.landing__top[data-v-5d8467df]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-5d8467df]{display:flex}}.landing__topleft[data-v-5d8467df]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-5d8467df]{display:block;width:100%}}.landing__topleft--auth[data-v-5d8467df]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-5d8467df]{padding:0;width:auto}}.landing__topright[data-v-5d8467df],.landing__topright--img[data-v-5d8467df]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-5d8467df]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-5d8467df]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-5d8467df]{display:none}}.landing__content[data-v-5d8467df]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-5d8467df]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-5d8467df]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-5d8467df]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-5d8467df]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.orders__header[data-v-5d8467df]{left:0;position:fixed;top:0;width:100vw;z-index:6}.orders__header.auth[data-v-5d8467df],.orders__header.unauth[data-v-5d8467df]{background:transparent}@media only screen and (max-width:56.25em){.orders__header.auth[data-v-5d8467df]{background:#fff}}.orders__content[data-v-5d8467df]{align-items:center;background:#fff;display:flex;flex-direction:column;min-height:100vh;padding-bottom:20rem;padding-top:4rem;position:relative}@media only screen and (max-width:37.5em){.orders__content[data-v-5d8467df]{display:block;padding:7rem 1rem 30rem}}.orders__content--body[data-v-5d8467df]{width:60rem}@media only screen and (max-width:56.25em){.orders__content--body[data-v-5d8467df]{width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/order/index.vue?vue&type=template&id=5d8467df&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "orders"
  }, [_vm._ssrNode("<div class=\"orders__content\" data-v-5d8467df>", "</div>", [_c('OrderDisplay', {
    attrs: {
      "order": _vm.order,
      "cart": _vm.cart
    }
  })], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/order/index.vue?vue&type=template&id=5d8467df&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/order/index.vue?vue&type=script&lang=js

/* harmony default export */ var ordervue_type_script_lang_js = ({
  data() {
    return {
      referenceId: null,
      order: {},
      cart: []
    };
  },
  methods: {
    async getOrdersByReference() {
      try {
        const {
          referenceId
        } = this;
        const response = await fetch(`${api["a" /* serverurl */]}/admin/orders/reference?referenceId=${referenceId}`, {
          method: 'GET',
          headers: {
            //Authorization: `Bearer ${validToken}`,
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
          order,
          cart
        } = data;
        this.order = order;
        this.cart = cart;
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    const referenceId = this.$route.query.reference;
    this.referenceId = referenceId;
    this.getOrdersByReference();
  }
});
// CONCATENATED MODULE: ./pages/admin/order/index.vue?vue&type=script&lang=js
 /* harmony default export */ var admin_ordervue_type_script_lang_js = (ordervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/order/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(153)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_ordervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5d8467df",
  "504679c0"
  
)

/* harmony default export */ var admin_order = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {OrderDisplay: __webpack_require__(76).default})


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
      excludedPaths: ['/aboutus', '/admin', '/authp']
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
var add = __webpack_require__(6).default
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
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("999273ec", content, true, context)
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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-4801e665],[data-v-4801e665]:after,[data-v-4801e665]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-4801e665]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-4801e665]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-4801e665]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-4801e665]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-4801e665]{font-size:65%}}body[data-v-4801e665]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-4801e665]{padding:0}}[data-v-4801e665]::-moz-selection{background-color:#249b48;color:#fff}[data-v-4801e665]::selection{background-color:#249b48;color:#fff}[data-v-4801e665]::-webkit-scrollbar{height:8px;width:8px}[data-v-4801e665]::-webkit-scrollbar-track{background:transparent}[data-v-4801e665]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-4801e665]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-4801e665]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-4801e665{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-4801e665{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-4801e665{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-4801e665{to{transform:rotate(1turn)}}.slide-in-left[data-v-4801e665]{animation:slide-in-left-4801e665 .5s ease-out forwards}.button-primary[data-v-4801e665]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-4801e665]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-4801e665]{opacity:.4}.floating-element[data-v-4801e665]{animation:float-4801e665 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-4801e665]{height:100vh!important;overflow:hidden!important}.spinner[data-v-4801e665]{animation:spin-4801e665 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-4801e665]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-4801e665]{filter:blur(3px)}.landing[data-v-4801e665]{overflow-x:hidden}.landing__top[data-v-4801e665]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-4801e665]{display:flex}}.landing__topleft[data-v-4801e665]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-4801e665]{display:block;width:100%}}.landing__topleft--auth[data-v-4801e665]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-4801e665]{padding:0;width:auto}}.landing__topright[data-v-4801e665],.landing__topright--img[data-v-4801e665]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-4801e665]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-4801e665]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-4801e665]{display:none}}.landing__content[data-v-4801e665]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-4801e665]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-4801e665]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-4801e665]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-4801e665]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.cartbtn[data-v-4801e665]{color:#000;position:relative}.cartbtn__icon[data-v-4801e665]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-4801e665]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-4801e665]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-4801e665],.cartbtn__icon--total[data-v-4801e665]{color:#fff;font-weight:600}.cartbtn svg[data-v-4801e665]{height:80%;width:80%;fill:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=template&id=4285e776&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chat-header"
  }, [_vm._ssrNode("<div class=\"chat-header__left\" data-v-4285e776>" + (_vm.name ? "<div class=\"chat-header__name\" data-v-4285e776><span class=\"svg\" data-v-4285e776><svg data-v-4285e776><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-4285e776></use></svg></span> <span class=\"label\" data-v-4285e776>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></div>" : "<!---->") + " " + (_vm.logovisible ? "<figure" + _vm._ssrClass("chat-header__left--logo", {
    green: _vm.green
  }) + " data-v-4285e776><img src=\"/imgs/logo.png\" data-v-4285e776></figure>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"chat-header__right\" data-v-4285e776>", "</div>", [_vm._ssrNode("<div class=\"chat-header__right--cart\" data-v-4285e776>", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" <div" + _vm._ssrClass("chat-header__burger", {
    unauth: !_vm.jwtToken,
    green: _vm.green
  }) + " data-v-4285e776><span data-v-4285e776></span><span data-v-4285e776></span><span data-v-4285e776></span></div>")], 2), _vm._ssrNode(" "), _vm.menuopen ? _vm._ssrNode("<div" + _vm._ssrClass("chat-header__menu", {
    auth: _vm.jwtToken
  }) + " data-v-4285e776>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menubody slide-in-left\" data-v-4285e776>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menuitems\" data-v-4285e776>", "</div>", [_vm._ssrNode("<figure class=\"chat-header__left--logo bottom-1rem\" data-v-4285e776>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/logo.png',
      expression: "'/imgs/logo.png'"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chat-header__menuitem\" data-v-4285e776><span class=\"svg\" data-v-4285e776></span> <span class=\"label\" data-v-4285e776>About us</span></div> " + (!_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-4285e776><span class=\"svg\" data-v-4285e776></span> <span class=\"label\" data-v-4285e776>Sign In/Sign Up</span></div>" : "<!---->") + " " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-4285e776><span class=\"svg\" data-v-4285e776></span> <span class=\"label\" data-v-4285e776>Orders</span></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"chat-header__menuitems\" data-v-4285e776><div class=\"chat-header__menuitem\" data-v-4285e776><span class=\"svg\" data-v-4285e776></span></div> " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-4285e776><span class=\"svg\" data-v-4285e776></span> <span class=\"label\" data-v-4285e776>Signout</span></div>" : "<!---->") + "</div>")], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=template&id=4285e776&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(9);

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
          user
        } = data;
        console.log(user, 'curent user here');
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
  "4285e776",
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
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_4285e776_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_4285e776_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_4285e776_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_4285e776_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_4285e776_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-4285e776],[data-v-4285e776]:after,[data-v-4285e776]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-4285e776]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-4285e776]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-4285e776]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-4285e776]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-4285e776]{font-size:65%}}body[data-v-4285e776]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-4285e776]{padding:0}}[data-v-4285e776]::-moz-selection{background-color:#249b48;color:#fff}[data-v-4285e776]::selection{background-color:#249b48;color:#fff}[data-v-4285e776]::-webkit-scrollbar{height:8px;width:8px}[data-v-4285e776]::-webkit-scrollbar-track{background:transparent}[data-v-4285e776]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-4285e776]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-4285e776]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-4285e776{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-4285e776{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-4285e776{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-4285e776{to{transform:rotate(1turn)}}.slide-in-left[data-v-4285e776]{animation:slide-in-left-4285e776 .5s ease-out forwards}.button-primary[data-v-4285e776]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-4285e776]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-4285e776]{opacity:.4}.floating-element[data-v-4285e776]{animation:float-4285e776 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-4285e776]{height:100vh!important;overflow:hidden!important}.spinner[data-v-4285e776]{animation:spin-4285e776 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-4285e776]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-4285e776]{filter:blur(3px)}.landing[data-v-4285e776]{overflow-x:hidden}.landing__top[data-v-4285e776]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-4285e776]{display:flex}}.landing__topleft[data-v-4285e776]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-4285e776]{display:block;width:100%}}.landing__topleft--auth[data-v-4285e776]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-4285e776]{padding:0;width:auto}}.landing__topright[data-v-4285e776],.landing__topright--img[data-v-4285e776]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-4285e776]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-4285e776]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-4285e776]{display:none}}.landing__content[data-v-4285e776]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-4285e776]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-4285e776]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-4285e776]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-4285e776]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-header[data-v-4285e776]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-4285e776]{padding:2rem}}.chat-header__name[data-v-4285e776],.chat-header__name span.svg[data-v-4285e776]{align-items:center;display:flex}.chat-header__name span.svg[data-v-4285e776]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-4285e776]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-4285e776]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-4285e776]{display:none}}.chat-header__left--logo[data-v-4285e776]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-4285e776]{margin-bottom:5rem}.chat-header__left--logo img[data-v-4285e776]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-4285e776]{height:3.5rem}.chat-header__burger[data-v-4285e776]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-4285e776]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-4285e776]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-4285e776]{background:#fff}.chat-header__burger.green span[data-v-4285e776]{background:#249b48}.chat-header__menu[data-v-4285e776]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-4285e776]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-4285e776],.chat-header__menu.auth[data-v-4285e776]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-4285e776]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-4285e776]{font-size:1.8rem}}.chat-header__menuitem span[data-v-4285e776]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-4285e776]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("539f8151", content, true, context)
};

/***/ }),

/***/ 76:
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
var ChatHeader = __webpack_require__(53);

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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OrderDisplay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
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

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDisplay_vue_vue_type_style_index_0_id_e75d15ca_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDisplay_vue_vue_type_style_index_0_id_e75d15ca_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDisplay_vue_vue_type_style_index_0_id_e75d15ca_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDisplay_vue_vue_type_style_index_0_id_e75d15ca_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDisplay_vue_vue_type_style_index_0_id_e75d15ca_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-e75d15ca],[data-v-e75d15ca]:after,[data-v-e75d15ca]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-e75d15ca]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-e75d15ca]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-e75d15ca]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-e75d15ca]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-e75d15ca]{font-size:65%}}body[data-v-e75d15ca]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-e75d15ca]{padding:0}}[data-v-e75d15ca]::-moz-selection{background-color:#249b48;color:#fff}[data-v-e75d15ca]::selection{background-color:#249b48;color:#fff}[data-v-e75d15ca]::-webkit-scrollbar{height:8px;width:8px}[data-v-e75d15ca]::-webkit-scrollbar-track{background:transparent}[data-v-e75d15ca]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-e75d15ca]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-e75d15ca]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-e75d15ca{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-e75d15ca{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-e75d15ca{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-e75d15ca{to{transform:rotate(1turn)}}.slide-in-left[data-v-e75d15ca]{animation:slide-in-left-e75d15ca .5s ease-out forwards}.button-primary[data-v-e75d15ca]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-e75d15ca]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-e75d15ca]{opacity:.4}.floating-element[data-v-e75d15ca]{animation:float-e75d15ca 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-e75d15ca]{height:100vh!important;overflow:hidden!important}.spinner[data-v-e75d15ca]{animation:spin-e75d15ca 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-e75d15ca]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-e75d15ca]{filter:blur(3px)}.landing[data-v-e75d15ca]{overflow-x:hidden}.landing__top[data-v-e75d15ca]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-e75d15ca]{display:flex}}.landing__topleft[data-v-e75d15ca]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-e75d15ca]{display:block;width:100%}}.landing__topleft--auth[data-v-e75d15ca]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-e75d15ca]{padding:0;width:auto}}.landing__topright[data-v-e75d15ca],.landing__topright--img[data-v-e75d15ca]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-e75d15ca]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-e75d15ca]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-e75d15ca]{display:none}}.landing__content[data-v-e75d15ca]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-e75d15ca]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-e75d15ca]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-e75d15ca]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-e75d15ca]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.orderdetails__header[data-v-e75d15ca]{left:0;position:fixed;top:0;width:100vw;z-index:6}.orderdetails__header.auth[data-v-e75d15ca],.orderdetails__header.unauth[data-v-e75d15ca]{background:transparent}@media only screen and (max-width:56.25em){.orderdetails__header.auth[data-v-e75d15ca]{background:#fff}}.orderdetails__content[data-v-e75d15ca]{background:#fff;display:flex;justify-content:center;min-height:100vh;padding-bottom:20rem;padding-top:6rem;position:relative}@media only screen and (max-width:37.5em){.orderdetails__content[data-v-e75d15ca]{padding:7rem 1rem 30rem}}.orderdetails__content--body[data-v-e75d15ca]{width:60rem}@media only screen and (max-width:56.25em){.orderdetails__content--body[data-v-e75d15ca]{width:100%}}.orderdetails__title[data-v-e75d15ca]{font-size:2rem;margin-bottom:1rem}.orderdetails__summary[data-v-e75d15ca]{background:#f7f7f7;border-radius:1rem;font-size:1.3rem;margin-bottom:2rem;padding:1.5rem}.orderdetails__summary p[data-v-e75d15ca]{margin:.5rem 0}.orderdetails__subtitle[data-v-e75d15ca]{font-size:1.5rem;margin-bottom:1rem}.orderdetails__cart-item[data-v-e75d15ca]{align-items:center;background:#f1f1f1;border-radius:1rem;display:flex;font-size:1.4rem;margin-bottom:1rem;padding:1rem}.orderdetails__cart-image[data-v-e75d15ca]{border-radius:.8rem;height:100px;margin-right:1rem;-o-object-fit:cover;object-fit:cover;width:100px}.orderdetails__cart-details[data-v-e75d15ca]{display:flex;flex-direction:column}.orderdetails__cart-details p[data-v-e75d15ca]{line-height:1.5;margin:.3rem 0}.orderdetails__cart-details p[data-v-e75d15ca]:nth-child(2){color:#666;font-style:italic}.orderdetails__actions[data-v-e75d15ca]{margin-top:2rem}.orderdetails__actions .button-primary[data-v-e75d15ca]{font-size:1.4rem;padding:1rem;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map