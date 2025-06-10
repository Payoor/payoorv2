exports.ids = [30,1,3,7,19];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("269e9b54", content, true, context)
};

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressList_vue_vue_type_style_index_0_id_6b4ddad7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressList_vue_vue_type_style_index_0_id_6b4ddad7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressList_vue_vue_type_style_index_0_id_6b4ddad7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressList_vue_vue_type_style_index_0_id_6b4ddad7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressList_vue_vue_type_style_index_0_id_6b4ddad7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6b4ddad7],[data-v-6b4ddad7]:after,[data-v-6b4ddad7]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-6b4ddad7]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-6b4ddad7]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-6b4ddad7]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-6b4ddad7]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-6b4ddad7]{font-size:65%}}body[data-v-6b4ddad7]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-6b4ddad7]{padding:0}}[data-v-6b4ddad7]::-moz-selection{background-color:#249b48;color:#fff}[data-v-6b4ddad7]::selection{background-color:#249b48;color:#fff}[data-v-6b4ddad7]::-webkit-scrollbar{height:8px;width:8px}[data-v-6b4ddad7]::-webkit-scrollbar-track{background:transparent}[data-v-6b4ddad7]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-6b4ddad7]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-6b4ddad7]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-6b4ddad7{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-6b4ddad7{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-6b4ddad7{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-6b4ddad7]{animation:slide-in-left-6b4ddad7 .5s ease-out forwards}.button-primary[data-v-6b4ddad7]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-6b4ddad7]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-6b4ddad7]{opacity:.4}.floating-element[data-v-6b4ddad7]{animation:float-6b4ddad7 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-6b4ddad7]{height:100vh!important;overflow:hidden!important}.spinner[data-v-6b4ddad7]{animation:spin-6b4ddad7 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-6b4ddad7]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-6b4ddad7]{filter:blur(3px)}.error-message[data-v-6b4ddad7]{animation:slideFadeInUp-6b4ddad7 .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-6b4ddad7]{overflow-x:hidden}.landing__top[data-v-6b4ddad7]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-6b4ddad7]{display:flex}}.landing__topleft[data-v-6b4ddad7]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-6b4ddad7]{display:block;width:100%}}.landing__topleft--auth[data-v-6b4ddad7]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-6b4ddad7]{padding:0;width:auto}}.landing__topright[data-v-6b4ddad7],.landing__topright--img[data-v-6b4ddad7]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-6b4ddad7]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-6b4ddad7]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-6b4ddad7]{display:none}}.landing__content[data-v-6b4ddad7]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-6b4ddad7]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-6b4ddad7]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-6b4ddad7]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-6b4ddad7]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.addresslist__content[data-v-6b4ddad7]{background:#f7f7f7;border-radius:1rem;display:flex;flex-direction:column;height:58rem;margin:0 auto;max-width:60rem;overflow-y:scroll;padding:1rem}.addresslist__loading[data-v-6b4ddad7]{align-items:center;color:#249b48;display:flex;font-size:1.4rem;justify-content:center;margin:2rem 0;text-align:center}.addresslist__loading .spinner[data-v-6b4ddad7]{animation:spin-6b4ddad7 .8s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#249b48;height:2rem;margin-right:1rem;width:2rem}@keyframes spin-6b4ddad7{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.addresslist__item[data-v-6b4ddad7]{align-items:center;background:#fff;border:1px solid #ddd;border-radius:1rem;display:flex;margin-bottom:1rem;padding:1rem;transition:background .2s ease}.addresslist__item[data-v-6b4ddad7]:hover{background:#f0f0f0}.addresslist__icon[data-v-6b4ddad7]{height:1.3rem;margin-right:1.5rem;width:1.3rem}.addresslist__icon img[data-v-6b4ddad7]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}.addresslist__text[data-v-6b4ddad7]{color:#333;font-size:1.4rem;line-height:1.5;word-break:break-word}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3d2055ca", content, true, context)
};

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddressList.vue?vue&type=template&id=6b4ddad7&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "addresslist"
  }, [_vm._ssrNode("<div class=\"addresslist__content\" data-v-6b4ddad7>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"addresslist__loading\" data-v-6b4ddad7>", "</div>", [_c('LoadingAnimation'), _vm._ssrNode(" Searching for places...\n        ")], 2) : _vm._e(), _vm._ssrNode(" " + _vm._ssrList(_vm.addressesList, function ({
    formatted_address,
    icon
  }) {
    return "<div class=\"addresslist__item\" data-v-6b4ddad7><figure class=\"addresslist__icon\" data-v-6b4ddad7><img" + _vm._ssrAttr("src", icon) + " alt=\"Location Icon\" data-v-6b4ddad7></figure> <span class=\"addresslist__text\" data-v-6b4ddad7>" + _vm._ssrEscape(_vm._s(formatted_address)) + "</span></div>";
  }))], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AddressList.vue?vue&type=template&id=6b4ddad7&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(43);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddressList.vue?vue&type=script&lang=js


/* harmony default export */ var AddressListvue_type_script_lang_js = ({
  props: ['query', 'selectAddressFromList', 'checkout_input'],
  data() {
    return {
      addressesList: [],
      debouncedQueryAddressList: null,
      loading: false
    };
  },
  watch: {
    query(newQuery) {
      this.debouncedQueryAddressList(newQuery);
    }
  },
  created() {
    // Create a debounced version of the fetch method
    this.debouncedQueryAddressList = debounce_default()(this.queryAddressList, 500);
  },
  methods: {
    async queryAddressList(query) {
      if (!query || !query.length) return;
      this.loading = true;
      try {
        const validToken = localStorage.getItem('jwt');
        if (!validToken) return;
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/google/search-places?query=${encodeURIComponent(query)}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${validToken}`,
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
        this.addressesList = data.data.placesResponse || [];
      } catch (error) {
        console.error('Autocomplete error:', error);
      } finally {
        this.loading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/AddressList.vue?vue&type=script&lang=js
 /* harmony default export */ var components_AddressListvue_type_script_lang_js = (AddressListvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/AddressList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(111)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AddressListvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6b4ddad7",
  "69d01962"
  
)

/* harmony default export */ var AddressList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(52).default})


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_f0d34f08_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_f0d34f08_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_f0d34f08_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_f0d34f08_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_f0d34f08_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-f0d34f08],[data-v-f0d34f08]:after,[data-v-f0d34f08]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-f0d34f08]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-f0d34f08]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-f0d34f08]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-f0d34f08]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-f0d34f08]{font-size:65%}}body[data-v-f0d34f08]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-f0d34f08]{padding:0}}[data-v-f0d34f08]::-moz-selection{background-color:#249b48;color:#fff}[data-v-f0d34f08]::selection{background-color:#249b48;color:#fff}[data-v-f0d34f08]::-webkit-scrollbar{height:8px;width:8px}[data-v-f0d34f08]::-webkit-scrollbar-track{background:transparent}[data-v-f0d34f08]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-f0d34f08]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-f0d34f08]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-f0d34f08{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-f0d34f08{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-f0d34f08{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-f0d34f08]{animation:slide-in-left-f0d34f08 .5s ease-out forwards}.button-primary[data-v-f0d34f08]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-f0d34f08]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-f0d34f08]{opacity:.4}.floating-element[data-v-f0d34f08]{animation:float-f0d34f08 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-f0d34f08]{height:100vh!important;overflow:hidden!important}.spinner[data-v-f0d34f08]{animation:spin-f0d34f08 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-f0d34f08]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-f0d34f08]{filter:blur(3px)}.error-message[data-v-f0d34f08]{animation:slideFadeInUp-f0d34f08 .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-f0d34f08]{overflow-x:hidden}.landing__top[data-v-f0d34f08]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-f0d34f08]{display:flex}}.landing__topleft[data-v-f0d34f08]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-f0d34f08]{display:block;width:100%}}.landing__topleft--auth[data-v-f0d34f08]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-f0d34f08]{padding:0;width:auto}}.landing__topright[data-v-f0d34f08],.landing__topright--img[data-v-f0d34f08]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-f0d34f08]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-f0d34f08]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-f0d34f08]{display:none}}.landing__content[data-v-f0d34f08]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-f0d34f08]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-f0d34f08]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-f0d34f08]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-f0d34f08]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.checkout__header[data-v-f0d34f08]{left:0;position:fixed;top:0;width:100vw;z-index:6}.checkout__header.auth[data-v-f0d34f08],.checkout__header.unauth[data-v-f0d34f08]{background:transparent}@media only screen and (max-width:56.25em){.checkout__header.auth[data-v-f0d34f08]{background:#fff}}.checkout__section[data-v-f0d34f08]{border:1px solid #249b48;border-radius:1rem;margin-bottom:2rem;padding:1rem 1.5rem}.checkout__section--header[data-v-f0d34f08]{align-items:center;display:flex;margin-bottom:.5rem}.checkout__section--header h2[data-v-f0d34f08]{font-size:1.3rem;margin-right:.5rem}.checkout__section--header h2[data-v-f0d34f08],.checkout__section--header span[data-v-f0d34f08]{align-items:center;display:flex}.checkout__section--header span.required[data-v-f0d34f08]{color:red}.checkout__section--value[data-v-f0d34f08]{font-size:1.5rem}.checkout__section--value.faint[data-v-f0d34f08]{color:rgba(0,0,0,.7)}.checkout__section--btn[data-v-f0d34f08]{margin-top:1rem}.checkout__section--btn button[data-v-f0d34f08]{border-radius:3rem;font-size:1.5rem;padding:.6rem 1.6rem}.checkout__deliverydates[data-v-f0d34f08]{display:flex;overflow:hidden;overflow-x:scroll;scrollbar-width:none;-ms-overflow-style:none}.checkout__deliverydates[data-v-f0d34f08]::-webkit-scrollbar{display:none;height:6px}.checkout__deliverydates[data-v-f0d34f08]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.checkout__deliverydates[data-v-f0d34f08]::-webkit-scrollbar-thumb:hover{background-color:transparent}.checkout__datecard[data-v-f0d34f08]{align-items:center;border:1px solid #249b48;border-radius:1rem;display:flex;flex-direction:column;flex-shrink:0;justify-content:space-between;margin-right:2rem;padding:1rem;width:7rem}.checkout__datecard.current-deliverydate[data-v-f0d34f08]{background:#249b48;color:#fff}.checkout__datecard.current-deliverydate span[data-v-f0d34f08]{font-weight:600}.checkout__datecard span.number[data-v-f0d34f08],.checkout__datecard.current-deliverydate span.number[data-v-f0d34f08]{font-size:1.7rem;font-weight:600}.checkout__inputs[data-v-f0d34f08]{background:rgba(0,0,0,.7);display:flex;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:6}.checkout__inputs--body[data-v-f0d34f08]{width:60rem}@media only screen and (max-width:56.25em){.checkout__inputs--body[data-v-f0d34f08]{width:100%}}.checkout__input[data-v-f0d34f08]{min-height:21rem;width:60rem}@media only screen and (max-width:56.25em){.checkout__input[data-v-f0d34f08]{width:100%}}.checkout__inputcontent[data-v-f0d34f08]{align-items:center;background:#fff;border-radius:2rem 2rem 0 0;bottom:0;display:flex;flex-direction:column;left:0;padding:2rem;position:fixed;width:100%}@media only screen and (max-width:56.25em){.checkout__inputcontent[data-v-f0d34f08]{display:block}}.checkout__inputcontent h2[data-v-f0d34f08]{color:rgba(0,0,0,.7);font-size:1.2rem;font-style:italic;font-weight:500;line-height:2rem;margin-bottom:1.5rem}.checkout__field[data-v-f0d34f08]{background:transparent;background:#333;border:none;border-radius:1rem;color:#fff;font-size:2.1rem;line-height:1.5;max-height:15rem;min-height:3rem;outline:none;overflow-y:auto;padding:1rem;resize:none;width:100%}.checkout__field[type=tel][data-v-f0d34f08]{height:auto;max-height:none;resize:none}.checkout__summary[data-v-f0d34f08]{width:60rem}@media only screen and (max-width:56.25em){.checkout__summary[data-v-f0d34f08]{width:auto}}.checkout__summaryitem[data-v-f0d34f08]{display:flex;justify-content:space-between;margin-bottom:1rem}.checkout__summaryitem span.subject[data-v-f0d34f08]{color:#249b48;font-size:1.4rem;font-weight:600}.checkout__summaryitem span.value[data-v-f0d34f08]{color:#000;font-size:1.4rem;font-weight:600}.checkout__bottom[data-v-f0d34f08]{background:#fff;bottom:0;display:flex;justify-content:center;left:0;padding:1rem 1rem 2rem;position:fixed;width:100vw;z-index:4}@media only screen and (max-width:56.25em){.checkout__bottom[data-v-f0d34f08]{display:block}}.checkout__bottom button[data-v-f0d34f08]{font-size:2rem;padding:2rem;width:60rem}@media only screen and (max-width:56.25em){.checkout__bottom button[data-v-f0d34f08]{width:100%}}.checkout__content[data-v-f0d34f08]{align-items:center;background:#fff;display:flex;flex-direction:column;padding-bottom:20rem;padding-top:4rem;position:relative}@media only screen and (max-width:37.5em){.checkout__content[data-v-f0d34f08]{display:block;padding:7rem 1rem 30rem}}.checkout__content--body[data-v-f0d34f08]{width:60rem}@media only screen and (max-width:56.25em){.checkout__content--body[data-v-f0d34f08]{width:100%}}.checkout__currentlocation--btn[data-v-f0d34f08]{background:transparent;border:1px solid #249b48;border-radius:12px;color:#249b48;display:inline-block;font-size:1.2rem;font-weight:500;margin-bottom:1rem;padding:1rem;position:relative}.checkout__currentlocation--btn .loader[data-v-f0d34f08]{animation:spin-f0d34f08 .8s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#249b48;display:inline-block;height:1.4rem;margin-right:.5rem;vertical-align:middle;width:1.4rem}@keyframes spin-f0d34f08{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.checkout__error[data-v-f0d34f08]{color:red;display:flex;font-weight:500;margin-top:1rem;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=template&id=f0d34f08&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"checkout\" data-v-f0d34f08>", "</div>", [_vm._ssrNode("<div class=\"checkout__header\" data-v-f0d34f08>", "</div>", [_c('ChatHeader', {
    attrs: {
      "name": 'Checkout',
      "logovisible": false,
      "jwt": true,
      "backRoute": _vm.$route.query.prevpage
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"checkout__content\" data-v-f0d34f08>", "</div>", [_vm._ssrNode("<div class=\"checkout__data checkout__content--body\" data-v-f0d34f08><div class=\"checkout__section\" data-v-f0d34f08><div class=\"checkout__section--header\" data-v-f0d34f08><h2 data-v-f0d34f08>Delivery Address</h2> <span class=\"required\" data-v-f0d34f08>*</span></div> <div" + _vm._ssrClass("checkout__section--value", {
    ..._vm.faint(_vm.delivery_address)
  }) + " data-v-f0d34f08><p data-v-f0d34f08>" + _vm._ssrEscape(_vm._s(_vm.delivery_address.length ? _vm.delivery_address : 'None Specified')) + "</p></div> <div class=\"checkout__section--btn\" data-v-f0d34f08><button class=\"button-primary\" data-v-f0d34f08>Change</button></div></div> <div class=\"checkout__section\" data-v-f0d34f08><div class=\"checkout__section--header\" data-v-f0d34f08><h2 data-v-f0d34f08>Phone Number</h2> <span class=\"required\" data-v-f0d34f08>*</span></div> <div" + _vm._ssrClass("checkout__section--value", {
    ..._vm.faint(_vm.phone_number)
  }) + " data-v-f0d34f08><p data-v-f0d34f08>" + _vm._ssrEscape(_vm._s(_vm.phone_number.length ? _vm.phone_number : 'None Specified')) + "</p></div> <div class=\"checkout__section--btn\" data-v-f0d34f08><button class=\"button-primary\" data-v-f0d34f08>\n                            Add Phone Number\n                        </button></div></div> <div class=\"checkout__section\" data-v-f0d34f08><div class=\"checkout__section--header\" data-v-f0d34f08><h2 data-v-f0d34f08>Delivery Date</h2> <span class=\"required\" data-v-f0d34f08>*</span></div> <div class=\"checkout__deliverydates\" data-v-f0d34f08>" + _vm._ssrList(_vm.getNext7Days, function (date_card, index) {
    return "<div" + _vm._ssrClass("checkout__datecard", {
      'current-deliverydate': _vm.delivery_date && _vm.delivery_date.id === index
    }) + " data-v-f0d34f08><span data-v-f0d34f08>" + _vm._ssrEscape(_vm._s(date_card.day)) + "</span> <span class=\"number\" data-v-f0d34f08>" + _vm._ssrEscape(_vm._s(date_card.date)) + "</span> <span data-v-f0d34f08>" + _vm._ssrEscape(_vm._s(date_card.month)) + "</span></div>";
  }) + "</div></div> <div class=\"checkout__section\" data-v-f0d34f08><div class=\"checkout__section--header\" data-v-f0d34f08><h2 data-v-f0d34f08>Delivery Instruction</h2> <span class=\"required\" data-v-f0d34f08></span></div> <div" + _vm._ssrClass("checkout__section--value", {
    ..._vm.faint(_vm.delivery_instruction)
  }) + " data-v-f0d34f08><p data-v-f0d34f08>" + _vm._ssrEscape(_vm._s(_vm.delivery_instruction.length ? _vm.delivery_instruction : 'None')) + "</p></div> <div class=\"checkout__section--btn\" data-v-f0d34f08><button class=\"button-primary\" data-v-f0d34f08>Specify</button></div></div> <div class=\"checkout__section\" data-v-f0d34f08><div class=\"checkout__section--header\" data-v-f0d34f08><h2 data-v-f0d34f08>Promo code</h2> <span class=\"required\" data-v-f0d34f08></span></div> <div" + _vm._ssrClass("checkout__section--value", {
    ..._vm.faint(_vm.promo_code)
  }) + " data-v-f0d34f08><p data-v-f0d34f08>" + _vm._ssrEscape(_vm._s(_vm.promo_code.length ? _vm.promo_code : 'None')) + "</p></div> <div class=\"checkout__section--btn\" data-v-f0d34f08><button class=\"button-primary\" data-v-f0d34f08>Use\n                            promo\n                            code</button></div> " + (_vm.coupon_error_message ? "<div class=\"checkout__error\" data-v-f0d34f08>" + _vm._ssrEscape("\n                        ⚠️ " + _vm._s(_vm.coupon_error_message) + "\n                    ") + "</div>" : "<!---->") + "</div></div> "), _vm.place_holder ? _vm._ssrNode("<div class=\"checkout__inputs\" data-v-f0d34f08>", "</div>", [_vm._ssrNode("<div class=\"checkout__inputs--body\" data-v-f0d34f08>", "</div>", [_vm._ssrNode("<div class=\"checkout__inputcontent slide-fade-in-up\" data-v-f0d34f08>", "</div>", [_vm._ssrNode("<h2 class=\"checkout__inputcontent--h2\" data-v-f0d34f08>" + _vm._ssrEscape(_vm._s(_vm.input_label)) + "</h2> "), _vm.input_label === 'Delivery address' ? _vm._ssrNode("<div data-v-f0d34f08>", "</div>", [_c('AddressList', {
    attrs: {
      "query": _vm.checkout_inputs[_vm.checkout_input],
      "selectAddressFromList": _vm.selectAddressFromList,
      "checkout_input": _vm.checkout_input
    }
  })], 1) : _vm._e(), _vm._ssrNode(" " + (_vm.input_label === 'Delivery address' ? "<div data-v-f0d34f08><div class=\"checkout__currentlocation\" data-v-f0d34f08><span class=\"checkout__currentlocation--btn\" data-v-f0d34f08>" + (!_vm.locationLoading ? "\n                                        📍 Use Your Current Location\n                                    " : "<span class=\"loader\" data-v-f0d34f08></span> Getting location...\n                                    ") + "</span></div></div>" : "<!---->") + " <div class=\"checkout__input\" data-v-f0d34f08>" + (_vm.checkout_input === 'phone_number' ? "<input type=\"tel\" inputmode=\"numeric\" pattern=\"[0-9]*\"" + _vm._ssrAttr("placeholder", _vm.place_holder) + _vm._ssrAttr("value", _vm.checkout_inputs[_vm.checkout_input]) + " class=\"checkout__field\" data-v-f0d34f08>" : "<textarea" + _vm._ssrAttr("placeholder", _vm.place_holder) + " class=\"checkout__field\" data-v-f0d34f08>" + _vm._ssrEscape(_vm._s(_vm.checkout_inputs[_vm.checkout_input])) + "</textarea>") + "</div> <div class=\"checkout__bottom\" data-v-f0d34f08><button class=\"button-primary\" data-v-f0d34f08>Done</button></div>")], 2)])]) : _vm._e(), _vm._ssrNode(" <div class=\"checkout__summary\" data-v-f0d34f08><div class=\"checkout__summaryitem\" data-v-f0d34f08><span class=\"subject\" data-v-f0d34f08>Sub-total</span> <span class=\"value\" data-v-f0d34f08>" + _vm._ssrEscape("₦" + _vm._s(_vm.subtotal)) + "</span></div> <div class=\"checkout__summaryitem\" data-v-f0d34f08><span class=\"subject\" data-v-f0d34f08>Delivery Fee</span> <span class=\"value\" data-v-f0d34f08>" + _vm._ssrEscape("₦" + _vm._s(_vm.delivery_fee)) + "</span></div> <div class=\"checkout__summaryitem\" data-v-f0d34f08><span class=\"subject\" data-v-f0d34f08>Service Charge</span> <span class=\"value\" data-v-f0d34f08>" + _vm._ssrEscape("₦" + _vm._s(_vm.service_charge)) + "</span></div> <div class=\"checkout__summaryitem\" data-v-f0d34f08><span class=\"subject\" data-v-f0d34f08>Total</span> <span class=\"value\" data-v-f0d34f08>" + _vm._ssrEscape("₦" + _vm._s(_vm.total)) + "</span></div></div> <div class=\"checkout__bottom\" data-v-f0d34f08><div class=\"checkout__content--body\" data-v-f0d34f08>" + (_vm.allowOrderCreation ? "<button" + _vm._ssrClass("button-primary", {
    'disabled-btn': _vm.loading
  }) + " data-v-f0d34f08>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.loading ? 'Creating your order...' : `Confirm Order`) + "\n                    ") + "</button>" : "<button class=\"button-primary disabled-btn\" data-v-f0d34f08>\n                        Add required details to confirm\n                    </button>") + "</div></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=template&id=f0d34f08&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=script&lang=js



/* harmony default export */ var checkoutvue_type_script_lang_js = ({
  mixins: [jwt_mixin["a" /* default */]],
  data() {
    return {
      delivery_address: "",
      delivery_date: null,
      delivery_instruction: "",
      promo_code: "",
      coupon_code_length: 10,
      coupon_discount: 0,
      subtotal: 0,
      delivery_fee: 0,
      service_charge: 0,
      total: 0,
      input_label: '',
      place_holder: false,
      phone_number: '',
      checkout_inputs: {},
      checkout_input: null,
      locationLoading: false,
      coupon_error_message: ''
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])("cart", {
      cartItems: state => state.items,
      cartTotalItems: state => state.totalItems
    }),
    ...Object(external_vuex_["mapState"])("user", {
      currentUser: state => state.currentUser
    }),
    allowOrderCreation() {
      const ready = this.delivery_address.trim().length > 0 && this.delivery_date !== null && this.subtotal > 0 && this.phone_number.trim().length > 0;
      return ready;
    },
    getNext7Days() {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const result = [];
      const now = new Date();

      // Determine start offset
      const startOffset = now.getHours() >= 17 ? 1 : 0;
      for (let i = startOffset; i < startOffset + 7; i++) {
        const currentDate = new Date();
        currentDate.setDate(now.getDate() + i);
        result.push({
          day: daysOfWeek[currentDate.getDay()],
          date: currentDate.getDate(),
          month: monthsOfYear[currentDate.getMonth()]
        });
      }
      return result;
    }
  },
  mounted() {
    this.initCheckout();
  },
  watch: {
    promo_code(newVal) {
      if (newVal.length === this.coupon_code_length) {
        this.applyPromoCode(newVal.trim());
      } else {
        this.coupon_discount = 0;
        //this.recalculateTotal();
      }
    }
  },
  methods: {
    async reverseGeocode({
      latitude,
      longitude
    }) {
      try {
        const token = localStorage.getItem('jwt');
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/google/use-current-location?lat=${latitude}&lng=${longitude}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (!response.ok || !data.success) {
          throw new Error((data === null || data === void 0 ? void 0 : data.message) || 'Reverse geocode failed');
        }
        const {
          address,
          filteredResults
        } = data.data;
        this.selectAddressFromList(address, 'delivery_address');
        return data.data;
      } catch (err) {
        console.error('Reverse geocode error:', err);
        return null;
      }
    },
    getCurrentLocation() {
      if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        return;
      }
      this.locationLoading = true;
      navigator.geolocation.getCurrentPosition(async position => {
        const {
          latitude,
          longitude
        } = position.coords;
        await this.reverseGeocode({
          latitude,
          longitude
        });
        this.locationLoading = false;
      }, error => {
        console.error('Geolocation error:', error);
        alert('Unable to retrieve your location');
        this.locationLoading = false;
      });
    },
    async initCheckout() {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
      const cartTotal = JSON.parse(localStorage.getItem('cartTotal') || '0');
      if (!cartItems) {
        return;
      }
      const validToken = await this.getValidToken();
      if (validToken) {
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/init/checkout?jwt=${this.validToken}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${validToken}`,
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
          fee,
          servicecharge,
          phone_number = '',
          delivery_address = ''
        } = data;
        this.phone_number = phone_number || this.currentUser.phoneNumber;
        this.delivery_address = delivery_address;
        this.subtotal = cartTotal;
        this.delivery_fee = fee;
        const service_charge = servicecharge / 100 * cartTotal;
        this.service_charge = service_charge;
        this.total = this.service_charge + this.delivery_fee + this.subtotal;

        // console.log(data)
      }
    },
    selectAddressFromList(formatted_address, checkout_input) {
      this.checkout_inputs[checkout_input] = formatted_address;
      this.delivery_address = this.checkout_inputs[checkout_input];
    },
    setDeliveryDate(deliver_date) {
      this.delivery_date = deliver_date;
      console.log(this.delivery_date);
    },
    async createOrder() {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const checkout = {
        delivery_address: this.delivery_address.trim(),
        delivery_date: this.delivery_date,
        delivery_instruction: this.delivery_instruction.trim(),
        promo_code: this.promo_code.trim(),
        cart_items: cartItems,
        phone_number: this.phone_number.trim(),
        subtotal: this.subtotal,
        delivery_fee: this.delivery_fee,
        service_charge: this.service_charge,
        total: this.total
      };
      try {
        this.loading = true;
        const validToken = await this.getValidToken();
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/create/checkout?jwt=${this.validToken}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${validToken}`,
            'Content-Type': 'application/json',
            'Origin': window.location.origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
          },
          body: JSON.stringify({
            checkout
          })
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error performing autocomplete:', errorData);
          return;
        }
        const data = await response.json();
        const {
          newcheckout
        } = data;

        // console.log(newcheckout)

        this.loading = false;
        this.$router.push({
          path: '/payment',
          query: {
            checkout_id: newcheckout._id
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    faint(value) {
      return {
        'faint': !value || !value.length
      };
    },
    autoResize() {
      const textarea = this.$refs.textarea;
      textarea.style.height = "auto"; // reset
      textarea.style.height = `${textarea.scrollHeight}px`; // set to content height
    },
    setPlaceholder(place_holder, input_label, checkout_input) {
      this.input_label = input_label;
      this.place_holder = place_holder;
      this.checkout_input = checkout_input;
      if (checkout_input === 'delivery_address') {
        this.delivery_address = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : '';
      }
      if (checkout_input === 'phone_number') {
        this.phone_number = this.checkout_inputs[checkout_input] || '';
      }
      if (checkout_input === 'delivery_instruction') {
        this.delivery_instruction = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : '';
      }
      if (checkout_input === 'promo_code') {
        this.promo_code = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : '';
      }
    },
    async applyPromoCode(code) {
      try {
        const token = localStorage.getItem('jwt');
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/apply-coupon`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            coupon_code: code
          })
        });
        const data = await response.json();
        if (response.ok && data.success) {
          const discount = data.discount || {};
          let total = this.subtotal;
          let delivery_fee = this.delivery_fee;
          let service_charge = this.service_charge;
          if (discount.freeDelivery) {
            delivery_fee = 0;
          }
          if (discount.percentage) {
            total -= discount.percentage / 100 * total;
          }
          if (discount.flat) {
            total -= discount.flat;
          }
          if (total < 0) total = 0;
          this.delivery_fee = delivery_fee;
          this.total = Math.round(total + delivery_fee + service_charge);
          this.promo_code = code;
          this.coupon_discount = discount;
          this.coupon_error_message = ''; // clear previous error
        } else {
          this.coupon_discount = 0;
          this.promo_code = '';
          this.total = this.subtotal + this.delivery_fee + this.service_charge;
          this.coupon_error_message = data.message || 'Failed to apply coupon.';
        }
      } catch (error) {
        console.error('Coupon apply error:', error);
        this.coupon_discount = 0;
        this.promo_code = '';
        this.total = this.subtotal + this.delivery_fee + this.service_charge;
        this.coupon_error_message = 'Network or server error while applying coupon.';
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_checkoutvue_type_script_lang_js = (checkoutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/checkout.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(146)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_checkoutvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f0d34f08",
  "2b012367"
  
)

/* harmony default export */ var pages_checkout = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatHeader: __webpack_require__(53).default,AddressList: __webpack_require__(134).default})


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
  add("06cdfc1e", content, true, context)
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
  add("14a2e196", content, true, context)
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
  "0803ca8a",
  "0826af36"
  
)

/* harmony default export */ var CartButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0803ca8a],[data-v-0803ca8a]:after,[data-v-0803ca8a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0803ca8a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0803ca8a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0803ca8a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0803ca8a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0803ca8a]{font-size:65%}}body[data-v-0803ca8a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0803ca8a]{padding:0}}[data-v-0803ca8a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0803ca8a]::selection{background-color:#249b48;color:#fff}[data-v-0803ca8a]::-webkit-scrollbar{height:8px;width:8px}[data-v-0803ca8a]::-webkit-scrollbar-track{background:transparent}[data-v-0803ca8a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0803ca8a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0803ca8a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0803ca8a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0803ca8a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0803ca8a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-0803ca8a]{animation:slide-in-left-0803ca8a .5s ease-out forwards}.button-primary[data-v-0803ca8a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0803ca8a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0803ca8a]{opacity:.4}.floating-element[data-v-0803ca8a]{animation:float-0803ca8a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0803ca8a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0803ca8a]{animation:spin-0803ca8a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0803ca8a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0803ca8a]{filter:blur(3px)}.error-message[data-v-0803ca8a]{animation:slideFadeInUp-0803ca8a .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-0803ca8a]{overflow-x:hidden}.landing__top[data-v-0803ca8a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0803ca8a]{display:flex}}.landing__topleft[data-v-0803ca8a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0803ca8a]{display:block;width:100%}}.landing__topleft--auth[data-v-0803ca8a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0803ca8a]{padding:0;width:auto}}.landing__topright[data-v-0803ca8a],.landing__topright--img[data-v-0803ca8a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0803ca8a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0803ca8a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0803ca8a]{display:none}}.landing__content[data-v-0803ca8a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0803ca8a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0803ca8a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0803ca8a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0803ca8a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.cartbtn[data-v-0803ca8a]{color:#000;position:relative}.cartbtn__icon[data-v-0803ca8a]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-0803ca8a]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-0803ca8a]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-0803ca8a],.cartbtn__icon--total[data-v-0803ca8a]{color:#fff;font-weight:600}.cartbtn svg[data-v-0803ca8a]{height:80%;width:80%;fill:#fff}.loader[data-v-0803ca8a]{animation:spin-0803ca8a 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}@keyframes spin-0803ca8a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=template&id=010227a9&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chat-header"
  }, [_vm._ssrNode("<div class=\"chat-header__left\" data-v-010227a9>" + (_vm.name ? "<div class=\"chat-header__name\" data-v-010227a9><span class=\"svg\" data-v-010227a9><svg data-v-010227a9><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-010227a9></use></svg></span> <span class=\"label\" data-v-010227a9>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></div>" : "<!---->") + " " + (_vm.logovisible ? "<figure" + _vm._ssrClass("chat-header__left--logo", {
    green: _vm.green
  }) + " data-v-010227a9><img src=\"/imgs/logo.png\" data-v-010227a9></figure>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"chat-header__right\" data-v-010227a9>", "</div>", [_vm._ssrNode("<div class=\"chat-header__right--cart\" data-v-010227a9>", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" <div" + _vm._ssrClass("chat-header__burger", {
    unauth: !_vm.jwtToken,
    green: _vm.green
  }) + " data-v-010227a9><span data-v-010227a9></span><span data-v-010227a9></span><span data-v-010227a9></span></div>")], 2), _vm._ssrNode(" "), _vm.menuopen ? _vm._ssrNode("<div" + _vm._ssrClass("chat-header__menu", {
    auth: _vm.jwtToken
  }) + " data-v-010227a9>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menubody slide-in-left\" data-v-010227a9>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menuitems\" data-v-010227a9>", "</div>", [_vm._ssrNode("<figure class=\"chat-header__left--logo bottom-1rem\" data-v-010227a9>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/logo.png',
      expression: "'/imgs/logo.png'"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chat-header__menuitem\" data-v-010227a9><span class=\"svg\" data-v-010227a9></span> <span class=\"label\" data-v-010227a9>About us</span></div> " + (!_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-010227a9><span class=\"svg\" data-v-010227a9></span> <span class=\"label\" data-v-010227a9>Sign In/Sign Up</span></div>" : "<!---->") + " " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-010227a9><span class=\"svg\" data-v-010227a9></span> <span class=\"label\" data-v-010227a9>Orders</span></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"chat-header__menuitems\" data-v-010227a9><div class=\"chat-header__menuitem\" data-v-010227a9><span class=\"svg\" data-v-010227a9></span></div> " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-010227a9><span class=\"svg\" data-v-010227a9></span> <span class=\"label\" data-v-010227a9>Signout</span></div>" : "<!---->") + "</div>")], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=template&id=010227a9&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

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
      jwtToken: state => state.jwtToken,
      currentRoute: state => state.currentRoute,
      previousRoute: state => state.previousRoute
    }),
    currentRoute() {
      return this.$route.name;
    }
  },
  async mounted() {
    const token = await this.getValidToken();
    if (token) {
      this.getValidUser(token);
    } else {
      this.redirectHome();
    }
    console.log(this.currentRoute, 'this is a test');

    //this.$store.dispatch('cart/resetCart');

    this.$store.dispatch('user/trackRouteChange', this.currentRoute);
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
          ...this.$route.query,
          prevpage: this.$route.path
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
var componentNormalizer = __webpack_require__(3);

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
  "010227a9",
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
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_010227a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_010227a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_010227a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_010227a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_010227a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-010227a9],[data-v-010227a9]:after,[data-v-010227a9]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-010227a9]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-010227a9]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-010227a9]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-010227a9]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-010227a9]{font-size:65%}}body[data-v-010227a9]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-010227a9]{padding:0}}[data-v-010227a9]::-moz-selection{background-color:#249b48;color:#fff}[data-v-010227a9]::selection{background-color:#249b48;color:#fff}[data-v-010227a9]::-webkit-scrollbar{height:8px;width:8px}[data-v-010227a9]::-webkit-scrollbar-track{background:transparent}[data-v-010227a9]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-010227a9]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-010227a9]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-010227a9{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-010227a9{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-010227a9{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-010227a9{to{transform:rotate(1turn)}}.slide-in-left[data-v-010227a9]{animation:slide-in-left-010227a9 .5s ease-out forwards}.button-primary[data-v-010227a9]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-010227a9]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-010227a9]{opacity:.4}.floating-element[data-v-010227a9]{animation:float-010227a9 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-010227a9]{height:100vh!important;overflow:hidden!important}.spinner[data-v-010227a9]{animation:spin-010227a9 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-010227a9]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-010227a9]{filter:blur(3px)}.error-message[data-v-010227a9]{animation:slideFadeInUp-010227a9 .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-010227a9]{overflow-x:hidden}.landing__top[data-v-010227a9]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-010227a9]{display:flex}}.landing__topleft[data-v-010227a9]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-010227a9]{display:block;width:100%}}.landing__topleft--auth[data-v-010227a9]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-010227a9]{padding:0;width:auto}}.landing__topright[data-v-010227a9],.landing__topright--img[data-v-010227a9]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-010227a9]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-010227a9]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-010227a9]{display:none}}.landing__content[data-v-010227a9]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-010227a9]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-010227a9]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-010227a9]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-010227a9]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-header[data-v-010227a9]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-010227a9]{padding:2rem}}.chat-header__name[data-v-010227a9],.chat-header__name span.svg[data-v-010227a9]{align-items:center;display:flex}.chat-header__name span.svg[data-v-010227a9]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-010227a9]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-010227a9]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-010227a9]{display:none}}.chat-header__left--logo[data-v-010227a9]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-010227a9]{margin-bottom:5rem}.chat-header__left--logo img[data-v-010227a9]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-010227a9]{height:3.5rem}.chat-header__burger[data-v-010227a9]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-010227a9]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-010227a9]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-010227a9]{background:#fff}.chat-header__burger.green span[data-v-010227a9]{background:#249b48}.chat-header__menu[data-v-010227a9]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-010227a9]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-010227a9],.chat-header__menu.auth[data-v-010227a9]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-010227a9]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-010227a9]{font-size:1.8rem}}.chat-header__menuitem span[data-v-010227a9]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-010227a9]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
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
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-3b87158c],[data-v-3b87158c]:after,[data-v-3b87158c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-3b87158c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-3b87158c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-3b87158c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-3b87158c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-3b87158c]{font-size:65%}}body[data-v-3b87158c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-3b87158c]{padding:0}}[data-v-3b87158c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::-webkit-scrollbar{height:8px;width:8px}[data-v-3b87158c]::-webkit-scrollbar-track{background:transparent}[data-v-3b87158c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-3b87158c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-3b87158c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-3b87158c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-3b87158c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes spin-3b87158c{to{transform:rotate(1turn)}}.slide-in-left[data-v-3b87158c]{animation:slide-in-left-3b87158c .5s ease-out forwards}.button-primary[data-v-3b87158c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-3b87158c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-3b87158c]{opacity:.4}.floating-element[data-v-3b87158c]{animation:float-3b87158c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-3b87158c]{height:100vh!important;overflow:hidden!important}.spinner[data-v-3b87158c]{animation:spin-3b87158c 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-3b87158c]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-3b87158c]{filter:blur(3px)}.error-message[data-v-3b87158c]{animation:slideFadeInUp-3b87158c .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-3b87158c]{overflow-x:hidden}.landing__top[data-v-3b87158c]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-3b87158c]{display:flex}}.landing__topleft[data-v-3b87158c]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-3b87158c]{display:block;width:100%}}.landing__topleft--auth[data-v-3b87158c]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-3b87158c]{padding:0;width:auto}}.landing__topright[data-v-3b87158c],.landing__topright--img[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-3b87158c]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-3b87158c]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-3b87158c]{display:none}}.landing__content[data-v-3b87158c]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-3b87158c]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-3b87158c]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-3b87158c]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.loading-animation[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.loading-animation figure[data-v-3b87158c]{animation:float-3b87158c 1.5s ease-in-out infinite alternate;border-radius:100%;height:3rem;overflow:hidden;width:3rem}.loading-animation figure img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@keyframes float-3b87158c{0%{transform:translateY(0)}to{transform:translateY(-10px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=checkout.js.map