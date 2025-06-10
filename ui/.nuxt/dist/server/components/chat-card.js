exports.ids = [5,3,9,10,19];
exports.modules = {

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
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("06cdfc1e", content, true, context)
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
var external_vuex_ = __webpack_require__(3);

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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CartButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(51)
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

/***/ 50:
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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0803ca8a],[data-v-0803ca8a]:after,[data-v-0803ca8a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0803ca8a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0803ca8a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0803ca8a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0803ca8a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0803ca8a]{font-size:65%}}body[data-v-0803ca8a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0803ca8a]{padding:0}}[data-v-0803ca8a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0803ca8a]::selection{background-color:#249b48;color:#fff}[data-v-0803ca8a]::-webkit-scrollbar{height:8px;width:8px}[data-v-0803ca8a]::-webkit-scrollbar-track{background:transparent}[data-v-0803ca8a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0803ca8a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0803ca8a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0803ca8a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0803ca8a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0803ca8a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-0803ca8a]{animation:slide-in-left-0803ca8a .5s ease-out forwards}.button-primary[data-v-0803ca8a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0803ca8a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0803ca8a]{opacity:.4}.floating-element[data-v-0803ca8a]{animation:float-0803ca8a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0803ca8a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0803ca8a]{animation:spin-0803ca8a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0803ca8a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0803ca8a]{filter:blur(3px)}.landing[data-v-0803ca8a]{overflow-x:hidden}.landing__top[data-v-0803ca8a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0803ca8a]{display:flex}}.landing__topleft[data-v-0803ca8a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0803ca8a]{display:block;width:100%}}.landing__topleft--auth[data-v-0803ca8a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0803ca8a]{padding:0;width:auto}}.landing__topright[data-v-0803ca8a],.landing__topright--img[data-v-0803ca8a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0803ca8a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0803ca8a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0803ca8a]{display:none}}.landing__content[data-v-0803ca8a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0803ca8a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0803ca8a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0803ca8a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0803ca8a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.cartbtn[data-v-0803ca8a]{color:#000;position:relative}.cartbtn__icon[data-v-0803ca8a]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-0803ca8a]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-0803ca8a]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-0803ca8a],.cartbtn__icon--total[data-v-0803ca8a]{color:#fff;font-weight:600}.cartbtn svg[data-v-0803ca8a]{height:80%;width:80%;fill:#fff}.loader[data-v-0803ca8a]{animation:spin-0803ca8a 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}@keyframes spin-0803ca8a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
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
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7847330c", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOption.vue?vue&type=template&id=9248ea0c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.loading && !_vm.option ? _vm._ssrNode("<div class=\"chatoption__loader\" data-v-9248ea0c>", "</div>", [_c('LoadingAnimation')], 1) : _vm.option ? _vm._ssrNode("<div class=\"chatoption slide-fade-in-up\" data-v-9248ea0c>", "</div>", [_vm._ssrNode("<div class=\"chatoption__left\" data-v-9248ea0c>", "</div>", [_vm._ssrNode("<figure class=\"chatoption__img\" data-v-9248ea0c>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.option.image.length ? _vm.option.image : _vm.option.productimg,
      expression: "option.image.length ? option.image : option.productimg"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chatoption__details\" data-v-9248ea0c><p class=\"chatoption__details--productname\" data-v-9248ea0c>" + _vm._ssrEscape(_vm._s(_vm.product_name)) + "</p> <p class=\"chatoption__details--name\" data-v-9248ea0c>" + _vm._ssrEscape(_vm._s(_vm.option.unit)) + "</p> <p class=\"chatoption__details--price\" data-v-9248ea0c>\n                    ₦\n                    <span data-v-9248ea0c>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.option.price))) + "</span></p> " + (_vm.admin ? "<p class=\"chatoption__details--productquantity\" data-v-9248ea0c><span data-v-9248ea0c>Amount:</span> <span data-v-9248ea0c>" + _vm._ssrEscape(_vm._s(_vm.product_quantity)) + "</span></p>" : "<!---->") + " " + (_vm.admin ? "<p class=\"chatoption__details--producttotal\" data-v-9248ea0c><span data-v-9248ea0c>Total:</span> <span data-v-9248ea0c>" + _vm._ssrEscape(_vm._s(_vm.product_quantity * _vm.option.price)) + "</span></p>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" " + (!_vm.admin ? "<div class=\"chatoption__right\" data-v-9248ea0c><div class=\"chatoption__delete\" data-v-9248ea0c><span class=\"svg\" data-v-9248ea0c><svg data-v-9248ea0c><use xlink:href=\"/svg/symbol-defs.svg#icon-trash\" data-v-9248ea0c></use></svg></span></div> <div class=\"chatoption__quantity\" data-v-9248ea0c><span class=\"svg\" data-v-9248ea0c><svg data-v-9248ea0c><use xlink:href=\"/svg/symbol-defs.svg#icon-minus1\" data-v-9248ea0c></use></svg></span> <span class=\"quantity\" data-v-9248ea0c>" + _vm._ssrEscape(_vm._s(_vm.quantity)) + "</span> <span class=\"svg\" data-v-9248ea0c><svg data-v-9248ea0c><use xlink:href=\"/svg/symbol-defs.svg#icon-plus\" data-v-9248ea0c></use></svg></span></div></div>" : "<!---->"))], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatOption.vue?vue&type=template&id=9248ea0c&scoped=true

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
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatOptionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9248ea0c",
  "3b35e260"
  
)

/* harmony default export */ var ChatOption = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(50).default})


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-9248ea0c],[data-v-9248ea0c]:after,[data-v-9248ea0c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-9248ea0c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-9248ea0c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-9248ea0c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-9248ea0c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-9248ea0c]{font-size:65%}}body[data-v-9248ea0c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-9248ea0c]{padding:0}}[data-v-9248ea0c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-9248ea0c]::selection{background-color:#249b48;color:#fff}[data-v-9248ea0c]::-webkit-scrollbar{height:8px;width:8px}[data-v-9248ea0c]::-webkit-scrollbar-track{background:transparent}[data-v-9248ea0c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-9248ea0c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-9248ea0c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-9248ea0c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-9248ea0c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-9248ea0c{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-9248ea0c{to{transform:rotate(1turn)}}.slide-in-left[data-v-9248ea0c]{animation:slide-in-left-9248ea0c .5s ease-out forwards}.button-primary[data-v-9248ea0c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-9248ea0c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-9248ea0c]{opacity:.4}.floating-element[data-v-9248ea0c]{animation:float-9248ea0c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-9248ea0c]{height:100vh!important;overflow:hidden!important}.spinner[data-v-9248ea0c]{animation:spin-9248ea0c 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-9248ea0c]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-9248ea0c]{filter:blur(3px)}.landing[data-v-9248ea0c]{overflow-x:hidden}.landing__top[data-v-9248ea0c]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-9248ea0c]{display:flex}}.landing__topleft[data-v-9248ea0c]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-9248ea0c]{display:block;width:100%}}.landing__topleft--auth[data-v-9248ea0c]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-9248ea0c]{padding:0;width:auto}}.landing__topright[data-v-9248ea0c],.landing__topright--img[data-v-9248ea0c]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-9248ea0c]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-9248ea0c]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-9248ea0c]{display:none}}.landing__content[data-v-9248ea0c]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-9248ea0c]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-9248ea0c]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-9248ea0c]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-9248ea0c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption[data-v-9248ea0c]{background-color:#fff;border:2px solid rgba(36,155,72,.5);border-radius:1rem;display:flex;justify-content:space-between;margin-bottom:2rem;padding:2rem 1.5rem}.chatoption__loader[data-v-9248ea0c]{align-items:center;display:flex;height:12rem;justify-content:center}.chatoption__left[data-v-9248ea0c]{display:flex}.chatoption__details--productname[data-v-9248ea0c]{font-size:1.2rem;font-weight:500}.chatoption__details--name[data-v-9248ea0c]{font-size:1.5rem;font-weight:600;margin-bottom:1rem}.chatoption__details--price[data-v-9248ea0c]{display:flex;font-size:1.6rem;font-weight:600}.chatoption__details--price span[data-v-9248ea0c]{color:#249b48;font-size:600}.chatoption__details--productquantity[data-v-9248ea0c]{align-items:center;display:flex;margin-top:1rem}.chatoption__details--productquantity span[data-v-9248ea0c]{align-items:center;display:flex;font-size:1.2rem;font-weight:500;margin-right:.5rem}.chatoption__details--producttotal[data-v-9248ea0c]{align-items:center;display:flex}.chatoption__details--producttotal span[data-v-9248ea0c]{align-items:center;display:flex;font-size:1.2rem;font-weight:500;margin-right:.5rem}.chatoption__right[data-v-9248ea0c]{align-items:flex-end;display:flex;flex-direction:column;justify-content:space-between}.chatoption__img[data-v-9248ea0c]{border-radius:1rem;height:10rem;margin-right:.5rem;overflow:hidden;width:10rem}.chatoption__img img[data-v-9248ea0c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption__quantity[data-v-9248ea0c]{display:grid;grid-template-columns:repeat(3,1fr)}span[data-v-9248ea0c]{align-items:center;display:flex;justify-content:center}span.quantity[data-v-9248ea0c]{font-size:1.5rem;font-weight:600}span.svg[data-v-9248ea0c]{border:1px solid rgba(36,155,72,.5);border-radius:.5rem;padding:.5rem}span.svg svg[data-v-9248ea0c]{height:2rem;width:2rem;fill:rgba(0,0,0,.5)}span.svg svg.red[data-v-9248ea0c]{fill:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("38ae1818", content, true, context)
};

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("01f3fc66", content, true, context)
};

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_3235fa5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_3235fa5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_3235fa5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_3235fa5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_3235fa5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-3235fa5e],[data-v-3235fa5e]:after,[data-v-3235fa5e]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-3235fa5e]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-3235fa5e]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-3235fa5e]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-3235fa5e]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-3235fa5e]{font-size:65%}}body[data-v-3235fa5e]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-3235fa5e]{padding:0}}[data-v-3235fa5e]::-moz-selection{background-color:#249b48;color:#fff}[data-v-3235fa5e]::selection{background-color:#249b48;color:#fff}[data-v-3235fa5e]::-webkit-scrollbar{height:8px;width:8px}[data-v-3235fa5e]::-webkit-scrollbar-track{background:transparent}[data-v-3235fa5e]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-3235fa5e]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-3235fa5e]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-3235fa5e{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-3235fa5e{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-3235fa5e{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-3235fa5e]{animation:slide-in-left-3235fa5e .5s ease-out forwards}.button-primary[data-v-3235fa5e]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-3235fa5e]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-3235fa5e]{opacity:.4}.floating-element[data-v-3235fa5e]{animation:float-3235fa5e 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-3235fa5e]{height:100vh!important;overflow:hidden!important}.spinner[data-v-3235fa5e]{animation:spin-3235fa5e 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-3235fa5e]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-3235fa5e]{filter:blur(3px)}.landing[data-v-3235fa5e]{overflow-x:hidden}.landing__top[data-v-3235fa5e]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-3235fa5e]{display:flex}}.landing__topleft[data-v-3235fa5e]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-3235fa5e]{display:block;width:100%}}.landing__topleft--auth[data-v-3235fa5e]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-3235fa5e]{padding:0;width:auto}}.landing__topright[data-v-3235fa5e],.landing__topright--img[data-v-3235fa5e]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-3235fa5e]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-3235fa5e]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-3235fa5e]{display:none}}.landing__content[data-v-3235fa5e]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-3235fa5e]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-3235fa5e]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-3235fa5e]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-3235fa5e]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoptions[data-v-3235fa5e]{height:100vh;overflow:hidden;overflow-y:scroll;padding:4rem 2rem 19rem;width:100vw;z-index:10}.chatoptions[data-v-3235fa5e],.chatoptions__header[data-v-3235fa5e]{background:#fff;left:0;position:fixed;top:0}.chatoptions__header[data-v-3235fa5e]{align-items:center;color:#000;display:flex;font-size:1.8rem;padding:2rem 1rem;text-transform:capitalize;width:100%;z-index:3}.chatoptions__header span[data-v-3235fa5e]{cursor:pointer}.chatoptions__header span.svg[data-v-3235fa5e]{align-items:center;display:flex;margin-right:.5rem}.chatoptions__header span.svg svg[data-v-3235fa5e]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chatoptions__options[data-v-3235fa5e]{margin-top:3rem}.chatoptions__description[data-v-3235fa5e]{border-top:1px solid #eee;margin-top:2rem;padding:1rem 0}.chatoptions__description .description__title[data-v-3235fa5e]{color:#000;font-size:1.6rem;font-weight:700;margin-bottom:1rem}.chatoptions__description .description__text[data-v-3235fa5e]{color:#555;font-size:1.4rem;line-height:1.6}.chatoptions__content[data-v-3235fa5e]{display:flex;justify-content:center}.chatoptions__content--body[data-v-3235fa5e]{width:60rem}@media only screen and (max-width:56.25em){.chatoptions__content--body[data-v-3235fa5e]{width:100%}}.chatoptions__loading[data-v-3235fa5e]{align-items:center;display:flex;justify-content:center;padding:5rem 0}.chatoptions__bottom[data-v-3235fa5e]{background:#fff;bottom:0;display:flex;justify-content:center;left:0;padding:1rem 1rem 2rem;position:fixed;width:100%;z-index:4}.chatoptions__bottom.column[data-v-3235fa5e]{flex-direction:column}@media only screen and (max-width:56.25em){.chatoptions__bottom[data-v-3235fa5e]{display:block}}.chatoptions__bottom button[data-v-3235fa5e]{font-size:2rem;padding:2rem;width:100%}.chatoptions__bottom button.spacebetween[data-v-3235fa5e]{display:flex;justify-content:space-between}.chatoptions__bottom button.transparent-button[data-v-3235fa5e]{margin-bottom:2rem}.chatoptions__bottom .button-primary[data-v-3235fa5e]{align-items:center;display:flex;gap:.5rem;justify-content:center}.loader[data-v-3235fa5e]{animation:spin-3235fa5e 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}.ml-1[data-v-3235fa5e]{margin-left:.5rem}@keyframes spin-3235fa5e{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.button-primary[disabled][data-v-3235fa5e]{cursor:not-allowed;opacity:.7}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOptions.vue?vue&type=template&id=3235fa5e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatoptions"
  }, [_vm._ssrNode("<div class=\"chatoptions__content\" data-v-3235fa5e><div class=\"chatoptions__content--body\" data-v-3235fa5e><h1 class=\"chatoptions__header\" data-v-3235fa5e><span class=\"svg\" data-v-3235fa5e><svg data-v-3235fa5e><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-3235fa5e></use></svg></span> <span data-v-3235fa5e>" + _vm._ssrEscape(_vm._s(_vm.productname)) + "</span></h1></div></div> "), _vm._ssrNode("<div class=\"chatoptions__content\" data-v-3235fa5e>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__content--body\" data-v-3235fa5e>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__options\" data-v-3235fa5e>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"chatoptions__loading\" data-v-3235fa5e>", "</div>", [_c('LoadingAnimation')], 1) : _vm._ssrNode("<div data-v-3235fa5e>", "</div>", _vm._l(_vm.variants, function (variant) {
    return _vm._ssrNode("<div data-v-3235fa5e>", "</div>", [_c('ChatOption', {
      attrs: {
        "data": {
          ...variant,
          productimg: _vm.productimg
        }
      }
    })], 1);
  }), 0), _vm._ssrNode(" <div class=\"chatoptions__description\" data-v-3235fa5e><div class=\"chatoptions__content--body\" data-v-3235fa5e><h2 class=\"description__title\" data-v-3235fa5e>Product Description</h2> <p class=\"description__text\" data-v-3235fa5e>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.productDescription || `This product comes in multiple variants. Select the one that
                            best fits your needs. Each
                            variant is carefully crafted to ensure the best quality and customer satisfaction.`) + "\n                        ") + "</p></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"chatoptions__bottom\" data-v-3235fa5e>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__content--body\" data-v-3235fa5e>", "</div>", [_vm._ssrNode("<button class=\"button-primary transparent-button\" data-v-3235fa5e><span data-v-3235fa5e>Continue Shopping</span></button> "), _vm.cartTotal === 0 ? _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.checkoutLoading) + " class=\"button-primary spacebetween disabled-btn\" data-v-3235fa5e>", "</button>", [_vm._ssrNode("<span data-v-3235fa5e>Proceed to Checkout</span> "), _vm.checkoutLoading ? _vm._ssrNode("<span class=\"loader ml-1\" data-v-3235fa5e>", "</span>") : _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e(), _vm._ssrNode(" "), _vm.cartTotal > 0 ? _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.checkoutLoading) + " class=\"button-primary spacebetween\" data-v-3235fa5e>", "</button>", [_vm._ssrNode("<span data-v-3235fa5e>Proceed to Checkout</span> "), _vm.checkoutLoading ? _vm._ssrNode("<span class=\"loader ml-1\" data-v-3235fa5e>", "</span>") : _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e()], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatOptions.vue?vue&type=template&id=3235fa5e&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(4);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

// EXTERNAL MODULE: ./components/LoadingAnimation.vue + 4 modules
var LoadingAnimation = __webpack_require__(50);

// EXTERNAL MODULE: ./components/CartButton.vue + 4 modules
var CartButton = __webpack_require__(47);

// EXTERNAL MODULE: ./components/ChatOption.vue + 4 modules
var ChatOption = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOptions.vue?vue&type=script&lang=js



 // Assuming you have this component
 // Assuming you have this component
 // Assuming you have this component

/* harmony default export */ var ChatOptionsvue_type_script_lang_js = ({
  props: ['toggleViewOptions', 'mongooseid', 'productname', 'productimg', 'productDescription'],
  mixins: [jwt_mixin["a" /* default */]],
  components: {
    LoadingAnimation: LoadingAnimation["default"],
    // Register the component
    CartButton: CartButton["default"],
    ChatOption: ChatOption["default"]
  },
  data() {
    return {
      variants: [],
      loading: false,
      checkoutLoading: false // New data property to manage checkout button loading state
    };
  },
  mounted() {
    this.getOptions();
  },
  computed: {
    ...Object(external_vuex_["mapState"])("cart", {
      cartTotal: state => state.total,
      cartItems: state => state.items,
      cartTotalItems: state => state.totalItems
    })
  },
  methods: {
    async getOptions() {
      this.loading = true;
      const token = await this.getValidToken();
      try {
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/getoptions?mongooseid=${this.mongooseid}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
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
        this.variants = data.variants;
      } catch (error) {
        console.log(error);
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
      this.checkoutLoading = true; // Start loading
      try {
        await this.$store.dispatch("cart/syncCartToServer");
        this.$router.push({
          path: '/checkout',
          query: {
            ...this.$route.query
          }
        });
      } catch (error) {
        console.error("Error syncing cart to server:", error);
        // Optionally handle the error, e.g., show a toast message
      } finally {
        this.checkoutLoading = false; // Stop loading regardless of success or failure
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ChatOptions.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatOptionsvue_type_script_lang_js = (ChatOptionsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ChatOptions.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatOptionsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3235fa5e",
  "2f320ac3"
  
)

/* harmony default export */ var ChatOptions = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(50).default,ChatOption: __webpack_require__(59).default,CartButton: __webpack_require__(47).default})


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_1723e096_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_1723e096_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_1723e096_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_1723e096_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_1723e096_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-1723e096],[data-v-1723e096]:after,[data-v-1723e096]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-1723e096]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-1723e096]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-1723e096]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-1723e096]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-1723e096]{font-size:65%}}body[data-v-1723e096]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-1723e096]{padding:0}}[data-v-1723e096]::-moz-selection{background-color:#249b48;color:#fff}[data-v-1723e096]::selection{background-color:#249b48;color:#fff}[data-v-1723e096]::-webkit-scrollbar{height:8px;width:8px}[data-v-1723e096]::-webkit-scrollbar-track{background:transparent}[data-v-1723e096]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-1723e096]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-1723e096]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-1723e096{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-1723e096{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-1723e096{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-1723e096]{animation:slide-in-left-1723e096 .5s ease-out forwards}.button-primary[data-v-1723e096]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-1723e096]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-1723e096]{opacity:.4}.floating-element[data-v-1723e096]{animation:float-1723e096 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-1723e096]{height:100vh!important;overflow:hidden!important}.spinner[data-v-1723e096]{border:4px solid rgba(36,155,72,.3);border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-1723e096]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-1723e096]{filter:blur(3px)}.landing[data-v-1723e096]{overflow-x:hidden}.landing__top[data-v-1723e096]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-1723e096]{display:flex}}.landing__topleft[data-v-1723e096]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-1723e096]{display:block;width:100%}}.landing__topleft--auth[data-v-1723e096]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-1723e096]{padding:0;width:auto}}.landing__topright[data-v-1723e096],.landing__topright--img[data-v-1723e096]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-1723e096]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-1723e096]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-1723e096]{display:none}}.landing__content[data-v-1723e096]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-1723e096]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-1723e096]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-1723e096]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-1723e096]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatcard[data-v-1723e096]{background:rgba(168,209,240,.6);border-radius:1rem;overflow:hidden;position:relative}.chatcard__contents[data-v-1723e096]{padding:1rem}.chatcard__name[data-v-1723e096]{font-size:1.5rem;font-weight:600;margin:1rem 0}.chatcard__viewmore--flex[data-v-1723e096]{align-items:center;display:flex}.chatcard__viewmore--flex span[data-v-1723e096]{flex-shrink:0}.chatcard__viewmore--flex span[data-v-1723e096]:first-child{margin-right:.4rem}.chatcard__viewmore button[data-v-1723e096]{align-items:center;background:#249b48;border:none;border-radius:3rem;color:#fff;cursor:pointer;display:flex;font-size:1.4rem;font-weight:500;justify-content:center;outline:none;padding:1rem}.chatcard__viewmore button[data-v-1723e096]:disabled{cursor:not-allowed;opacity:.7}.chatcard__img[data-v-1723e096]{height:14rem}.chatcard__img img[data-v-1723e096]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatcard__tags[data-v-1723e096]{display:flex;flex-wrap:wrap;margin-top:1rem}.chatcard__tags span[data-v-1723e096]{background:rgba(36,155,72,.4);border:1px solid rgba(36,155,72,.4);border-radius:3rem;display:inline-block;font-weight:500;margin-right:.5rem;padding:.5rem 1.4rem}.spinner[data-v-1723e096]{animation:spin-1723e096 1s linear infinite;border:.4rem solid hsla(0,0%,100%,.3);border-radius:50%;border-top-color:#fff;height:1rem;width:1rem}@keyframes spin-1723e096{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatCard.vue?vue&type=template&id=1723e096&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatcard"
  }, [_vm._ssrNode("<figure class=\"chatcard__img\" data-v-1723e096>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.imageUrl,
      expression: "imageUrl"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chatcard__contents\" data-v-1723e096><div class=\"chatcard__name\" data-v-1723e096><p data-v-1723e096>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</p></div> <div class=\"chatcard__viewmore\" data-v-1723e096><button" + _vm._ssrAttr("disabled", _vm.loading) + " data-v-1723e096><div class=\"chatcard__viewmore--flex\" data-v-1723e096><span data-v-1723e096>" + _vm._ssrEscape("View " + _vm._s(_vm.options) + " options") + "</span> " + (_vm.loading ? "<span class=\"spinner\" data-v-1723e096></span>" : "<!---->") + "</div></button></div> <div class=\"chatcard__tags\" data-v-1723e096>" + _vm._ssrList(_vm.tags, function (tag, index) {
    return "<span data-v-1723e096>" + _vm._ssrEscape(_vm._s(_vm.formatTag(tag))) + "</span>";
  }) + "</div></div> "), _vm.view_options ? _vm._ssrNode("<div data-v-1723e096>", "</div>", [_c('ChatOptions', {
    attrs: {
      "options": _vm.options,
      "toggleViewOptions": _vm.toggleViewOptions,
      "productname": _vm.name,
      "productimg": _vm.imageUrl,
      "mongooseid": _vm.product._mongooseid,
      "productDescription": _vm.productDescription
    }
  })], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatCard.vue?vue&type=template&id=1723e096&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatCard.vue?vue&type=script&lang=js
/* harmony default export */ var ChatCardvue_type_script_lang_js = ({
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data() {
    return {
      view_options: false,
      loading: false // Introduce a loading state
    };
  },
  computed: {
    name() {
      return this.product.name || '';
    },
    imageUrl() {
      return this.product.image || 'https://payoorimages.s3.ap-southeast-2.amazonaws.com/products/1739230188359-4hi1261thmy.webp';
    },
    options() {
      return this.product.variantCount || 0;
    },
    tags() {
      return typeof this.product.metadata === 'string' ? this.product.metadata.split(' ').map(item => item.trim()).slice(0, 2) : Array.isArray(this.product.metadata) ? this.product.metadata.slice(0, 3) : [];
    },
    productDescription() {
      return this.product.generatedDescription;
    }
  },
  methods: {
    async toggleViewOptions() {
      this.loading = true; // Set loading to true when the async operation starts
      try {
        await this.$store.dispatch("cart/syncCartToServer");
      } catch (error) {
        console.error("Error syncing cart to server:", error);
        // Optionally handle the error, e.g., show a toast notification
      } finally {
        this.loading = false; // Set loading to false when the async operation completes (success or failure)
      }
      this.view_options = !this.view_options;
    },
    formatTag(tag) {
      if (tag.length > 6) {
        //return tag.substring(0, 9) + '...';
      }
      return tag;
    }
  }
});
// CONCATENATED MODULE: ./components/ChatCard.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatCardvue_type_script_lang_js = (ChatCardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ChatCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(92)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatCardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1723e096",
  "2b5f683b"
  
)

/* harmony default export */ var ChatCard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatOptions: __webpack_require__(77).default})


/***/ })

};;
//# sourceMappingURL=chat-card.js.map