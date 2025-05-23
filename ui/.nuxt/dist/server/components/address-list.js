exports.ids = [1];
exports.modules = {

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddressList.vue?vue&type=template&id=0acfb111&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "addresslist"
  }, [_vm._ssrNode("<div class=\"addresslist__content\" data-v-0acfb111>" + (_vm.loading ? "<div class=\"addresslist__loading\" data-v-0acfb111><span class=\"spinner\" data-v-0acfb111></span> Searching for places...\n        </div>" : "<!---->") + " " + _vm._ssrList(_vm.addressesList, function ({
    formatted_address,
    icon
  }) {
    return "<div class=\"addresslist__item\" data-v-0acfb111><figure class=\"addresslist__icon\" data-v-0acfb111><img" + _vm._ssrAttr("src", icon) + " alt=\"Location Icon\" data-v-0acfb111></figure> <span class=\"addresslist__text\" data-v-0acfb111>" + _vm._ssrEscape(_vm._s(formatted_address)) + "</span></div>";
  }) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AddressList.vue?vue&type=template&id=0acfb111&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(41);

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(40);
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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AddressList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(98)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AddressListvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0acfb111",
  "69d01962"
  
)

/* harmony default export */ var AddressList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 41:
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

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2ba54f6b", content, true, context)
};

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressList_vue_vue_type_style_index_0_id_0acfb111_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressList_vue_vue_type_style_index_0_id_0acfb111_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressList_vue_vue_type_style_index_0_id_0acfb111_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressList_vue_vue_type_style_index_0_id_0acfb111_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressList_vue_vue_type_style_index_0_id_0acfb111_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0acfb111],[data-v-0acfb111]:after,[data-v-0acfb111]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0acfb111]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0acfb111]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0acfb111]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0acfb111]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0acfb111]{font-size:65%}}body[data-v-0acfb111]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0acfb111]{padding:0}}[data-v-0acfb111]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0acfb111]::selection{background-color:#249b48;color:#fff}[data-v-0acfb111]::-webkit-scrollbar{height:8px;width:8px}[data-v-0acfb111]::-webkit-scrollbar-track{background:transparent}[data-v-0acfb111]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0acfb111]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0acfb111]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0acfb111{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0acfb111{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0acfb111{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-0acfb111]{animation:slide-in-left-0acfb111 .5s ease-out forwards}.button-primary[data-v-0acfb111]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0acfb111]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0acfb111]{opacity:.4}.floating-element[data-v-0acfb111]{animation:float-0acfb111 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0acfb111]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0acfb111]{animation:spin-0acfb111 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0acfb111]{stroke:#249b48;stroke-linecap:round}.addresslist__content[data-v-0acfb111]{background:#f7f7f7;border-radius:1rem;display:flex;flex-direction:column;height:58rem;margin:0 auto;max-width:60rem;overflow-y:scroll;padding:1rem}.addresslist__loading[data-v-0acfb111]{align-items:center;color:#249b48;display:flex;font-size:1.4rem;justify-content:center;margin:2rem 0;text-align:center}.addresslist__loading .spinner[data-v-0acfb111]{animation:spin-0acfb111 .8s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#249b48;height:2rem;margin-right:1rem;width:2rem}@keyframes spin-0acfb111{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.addresslist__item[data-v-0acfb111]{align-items:center;background:#fff;border:1px solid #ddd;border-radius:1rem;display:flex;margin-bottom:1rem;padding:1rem;transition:background .2s ease}.addresslist__item[data-v-0acfb111]:hover{background:#f0f0f0}.addresslist__icon[data-v-0acfb111]{height:1.3rem;margin-right:1.5rem;width:1.3rem}.addresslist__icon img[data-v-0acfb111]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}.addresslist__text[data-v-0acfb111]{color:#333;font-size:1.4rem;line-height:1.5;word-break:break-word}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=address-list.js.map