exports.ids = [12];
exports.modules = {

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6f0700e4", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-7dc10924],[data-v-7dc10924]:after,[data-v-7dc10924]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-7dc10924]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-7dc10924]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-7dc10924]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-7dc10924]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-7dc10924]{font-size:65%}}body[data-v-7dc10924]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-7dc10924]{padding:0}}[data-v-7dc10924]::-moz-selection{background-color:#249b48;color:#fff}[data-v-7dc10924]::selection{background-color:#249b48;color:#fff}[data-v-7dc10924]::-webkit-scrollbar{height:8px;width:8px}[data-v-7dc10924]::-webkit-scrollbar-track{background:transparent}[data-v-7dc10924]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-7dc10924]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-7dc10924]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-7dc10924{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-7dc10924{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-7dc10924{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-7dc10924]{animation:slide-in-left-7dc10924 .5s ease-out forwards}.button-primary[data-v-7dc10924]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-7dc10924]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-7dc10924]{opacity:.4}.floating-element[data-v-7dc10924]{animation:float-7dc10924 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-7dc10924]{height:100vh!important;overflow:hidden!important}.categories[data-v-7dc10924]{background:#249b48;padding:6rem 20rem 0}@media (min-width:2519px){.categories[data-v-7dc10924]{padding-top:6rem}}@media only screen and (max-width:75em){.categories[data-v-7dc10924]{padding:0 10rem}}@media only screen and (max-width:56.25em){.categories[data-v-7dc10924]{padding:1rem}}.categories__header[data-v-7dc10924]{color:#fff;font-size:5rem;font-weight:400;margin-bottom:6rem;text-align:center}@media only screen and (max-width:56.25em){.categories__header[data-v-7dc10924]{font-size:3rem;margin-bottom:6rem;margin-top:6rem}}.categories__grids[data-v-7dc10924]{background:#65d587;border-radius:1rem}@media only screen and (max-width:75em){.categories__grids[data-v-7dc10924]{margin-bottom:6rem}}.categories__grid[data-v-7dc10924]{display:grid;grid-template-columns:repeat(3,1fr);padding:4rem;grid-gap:9rem}@media only screen and (max-width:56.25em){.categories__grid[data-v-7dc10924]{display:grid;grid-template-columns:repeat(2,1fr);padding:2rem;grid-gap:1rem}}.categories__grid[data-v-7dc10924]:first-child{padding-bottom:1.5rem}.categories__griditem figure[data-v-7dc10924]{height:27rem;width:100%}@media only screen and (max-width:56.25em){.categories__griditem figure[data-v-7dc10924]{height:18rem}}.categories__griditem figure img[data-v-7dc10924]{border-radius:1rem;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.categories__griditem h4[data-v-7dc10924]{font-size:1.5rem;font-size:1.4rem;font-weight:300;margin-top:2rem;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingCategories.vue?vue&type=template&id=7dc10924&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div id=\"landing-categories\" class=\"categories\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<h2 class=\"categories__header\" data-v-7dc10924>\n      Shop for Food Ingredients and Groceries at the lowest possible prices\n    </h2> "), _vm._ssrNode("<div class=\"categories__grid\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<div class=\"categories__griditem\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<figure data-v-7dc10924>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/chicken_lap.png',
      expression: "'/imgs/chicken_lap.png'"
    }]
  }, [])]), _vm._ssrNode(" <h4 data-v-7dc10924>Meat and Frozen Food</h4>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"categories__griditem\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<figure data-v-7dc10924>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/chai_seed.jpeg',
      expression: "'/imgs/chai_seed.jpeg'"
    }]
  }, [])]), _vm._ssrNode(" <h4 data-v-7dc10924>Soups and Stews</h4>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"categories__griditem\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<figure data-v-7dc10924>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/bournvita.jpeg',
      expression: "'/imgs/bournvita.jpeg'"
    }]
  }, [])]), _vm._ssrNode(" <h4 data-v-7dc10924>Beverages</h4>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"categories__griditem\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<figure data-v-7dc10924>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/fruits.png',
      expression: "'/imgs/fruits.png'"
    }]
  }, [])]), _vm._ssrNode(" <h4 data-v-7dc10924>Fruits</h4>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"categories__griditem\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<figure data-v-7dc10924>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/fruit_basket.jpeg',
      expression: "'/imgs/fruit_basket.jpeg'"
    }]
  }, [])]), _vm._ssrNode(" <h4 data-v-7dc10924>Farmers market</h4>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"categories__griditem\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<figure data-v-7dc10924>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/pepper_container.png',
      expression: "'/imgs/pepper_container.png'"
    }]
  }, [])]), _vm._ssrNode(" <h4 data-v-7dc10924>Spices and packaged foods</h4>")], 2)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LandingCategories.vue?vue&type=template&id=7dc10924&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LandingCategories.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7dc10924",
  "0a9dc7f0"
  
)

/* harmony default export */ var LandingCategories = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=landing-categories.js.map