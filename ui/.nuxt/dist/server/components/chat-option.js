exports.ids = [9,17];
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

/***/ 46:
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
  add("cd9fc042", content, true, context)
};

/***/ }),

/***/ 51:
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
  
  var style0 = __webpack_require__(53)
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-3b87158c],[data-v-3b87158c]:after,[data-v-3b87158c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-3b87158c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-3b87158c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-3b87158c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-3b87158c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-3b87158c]{font-size:65%}}body[data-v-3b87158c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-3b87158c]{padding:0}}[data-v-3b87158c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::-webkit-scrollbar{height:8px;width:8px}[data-v-3b87158c]::-webkit-scrollbar-track{background:transparent}[data-v-3b87158c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-3b87158c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-3b87158c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-3b87158c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-3b87158c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes spin-3b87158c{to{transform:rotate(1turn)}}.slide-in-left[data-v-3b87158c]{animation:slide-in-left-3b87158c .5s ease-out forwards}.button-primary[data-v-3b87158c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-3b87158c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-3b87158c]{opacity:.4}.floating-element[data-v-3b87158c]{animation:float-3b87158c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-3b87158c]{height:100vh!important;overflow:hidden!important}.spinner[data-v-3b87158c]{animation:spin-3b87158c 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-3b87158c]{stroke:#249b48;stroke-linecap:round}.loading-animation[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.loading-animation figure[data-v-3b87158c]{animation:float-3b87158c 1.5s ease-in-out infinite alternate;border-radius:100%;height:3rem;overflow:hidden;width:3rem}.loading-animation figure img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@keyframes float-3b87158c{0%{transform:translateY(0)}to{transform:translateY(-10px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6697f822", content, true, context)
};

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_b63ff930_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_b63ff930_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_b63ff930_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_b63ff930_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_b63ff930_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-b63ff930],[data-v-b63ff930]:after,[data-v-b63ff930]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-b63ff930]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-b63ff930]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-b63ff930]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-b63ff930]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-b63ff930]{font-size:65%}}body[data-v-b63ff930]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-b63ff930]{padding:0}}[data-v-b63ff930]::-moz-selection{background-color:#249b48;color:#fff}[data-v-b63ff930]::selection{background-color:#249b48;color:#fff}[data-v-b63ff930]::-webkit-scrollbar{height:8px;width:8px}[data-v-b63ff930]::-webkit-scrollbar-track{background:transparent}[data-v-b63ff930]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-b63ff930]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-b63ff930]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-b63ff930{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-b63ff930{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-b63ff930{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-b63ff930{to{transform:rotate(1turn)}}.slide-in-left[data-v-b63ff930]{animation:slide-in-left-b63ff930 .5s ease-out forwards}.button-primary[data-v-b63ff930]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-b63ff930]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-b63ff930]{opacity:.4}.floating-element[data-v-b63ff930]{animation:float-b63ff930 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-b63ff930]{height:100vh!important;overflow:hidden!important}.spinner[data-v-b63ff930]{animation:spin-b63ff930 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-b63ff930]{stroke:#249b48;stroke-linecap:round}.chatoption[data-v-b63ff930]{background-color:#fff;border:2px solid rgba(36,155,72,.5);border-radius:1rem;display:flex;justify-content:space-between;margin-bottom:2rem;padding:2rem 1.5rem}.chatoption__loader[data-v-b63ff930]{align-items:center;display:flex;height:12rem;justify-content:center}.chatoption__left[data-v-b63ff930]{display:flex}.chatoption__details--name[data-v-b63ff930]{font-size:1.7rem;font-weight:600;margin-bottom:1.2rem}.chatoption__details--price[data-v-b63ff930]{display:flex;font-size:1.6rem;font-weight:600}.chatoption__details--price span[data-v-b63ff930]{color:#249b48;font-size:600}.chatoption__right[data-v-b63ff930]{align-items:flex-end;display:flex;flex-direction:column;justify-content:space-between}.chatoption__img[data-v-b63ff930]{border-radius:1rem;height:10rem;margin-right:.5rem;overflow:hidden;width:10rem}.chatoption__img img[data-v-b63ff930]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption__quantity[data-v-b63ff930]{display:grid;grid-template-columns:repeat(3,1fr)}span[data-v-b63ff930]{align-items:center;display:flex;justify-content:center}span.quantity[data-v-b63ff930]{font-size:1.5rem;font-weight:600}span.svg[data-v-b63ff930]{border:1px solid rgba(36,155,72,.5);border-radius:.5rem;padding:.5rem}span.svg svg[data-v-b63ff930]{height:2rem;width:2rem;fill:rgba(0,0,0,.5)}span.svg svg.red[data-v-b63ff930]{fill:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOption.vue?vue&type=template&id=b63ff930&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.loading && !_vm.option ? _vm._ssrNode("<div class=\"chatoption__loader\" data-v-b63ff930>", "</div>", [_c('LoadingAnimation')], 1) : _vm.option ? _vm._ssrNode("<div class=\"chatoption slide-fade-in-up\" data-v-b63ff930>", "</div>", [_vm._ssrNode("<div class=\"chatoption__left\" data-v-b63ff930>", "</div>", [_vm._ssrNode("<figure class=\"chatoption__img\" data-v-b63ff930>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.option.image.length ? _vm.option.image : _vm.option.productimg,
      expression: "option.image.length ? option.image : option.productimg"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chatoption__details\" data-v-b63ff930><p class=\"chatoption__details--name\" data-v-b63ff930>" + _vm._ssrEscape(_vm._s(_vm.option.unit)) + "</p> <p class=\"chatoption__details--price\" data-v-b63ff930>\n                    ₦\n                    <span data-v-b63ff930>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.option.price))) + "</span></p></div>")], 2), _vm._ssrNode(" <div class=\"chatoption__right\" data-v-b63ff930><div class=\"chatoption__delete\" data-v-b63ff930><span class=\"svg\" data-v-b63ff930><svg data-v-b63ff930><use xlink:href=\"/svg/symbol-defs.svg#icon-trash\" data-v-b63ff930></use></svg></span></div> <div class=\"chatoption__quantity\" data-v-b63ff930><span class=\"svg\" data-v-b63ff930><svg data-v-b63ff930><use xlink:href=\"/svg/symbol-defs.svg#icon-minus1\" data-v-b63ff930></use></svg></span> <span class=\"quantity\" data-v-b63ff930>" + _vm._ssrEscape(_vm._s(_vm.quantity)) + "</span> <span class=\"svg\" data-v-b63ff930><svg data-v-b63ff930><use xlink:href=\"/svg/symbol-defs.svg#icon-plus\" data-v-b63ff930></use></svg></span></div></div>")], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatOption.vue?vue&type=template&id=b63ff930&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(9);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(44);

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
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatOptionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b63ff930",
  "3b35e260"
  
)

/* harmony default export */ var ChatOption = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(51).default})


/***/ })

};;
//# sourceMappingURL=chat-option.js.map