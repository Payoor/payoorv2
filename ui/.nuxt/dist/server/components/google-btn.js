exports.ids = [13];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("a9bb2efe", content, true, context)
};

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_cbd46c96_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_cbd46c96_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_cbd46c96_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_cbd46c96_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_cbd46c96_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-cbd46c96],[data-v-cbd46c96]:after,[data-v-cbd46c96]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-cbd46c96]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-cbd46c96]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-cbd46c96]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-cbd46c96]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-cbd46c96]{font-size:65%}}body[data-v-cbd46c96]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-cbd46c96]{padding:0}}[data-v-cbd46c96]::-moz-selection{background-color:#249b48;color:#fff}[data-v-cbd46c96]::selection{background-color:#249b48;color:#fff}[data-v-cbd46c96]::-webkit-scrollbar{height:8px;width:8px}[data-v-cbd46c96]::-webkit-scrollbar-track{background:transparent}[data-v-cbd46c96]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-cbd46c96]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-cbd46c96]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-cbd46c96{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-cbd46c96{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-cbd46c96{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-cbd46c96{to{transform:rotate(1turn)}}.slide-in-left[data-v-cbd46c96]{animation:slide-in-left-cbd46c96 .5s ease-out forwards}.button-primary[data-v-cbd46c96]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-cbd46c96]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-cbd46c96]{opacity:.4}.floating-element[data-v-cbd46c96]{animation:float-cbd46c96 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-cbd46c96]{height:100vh!important;overflow:hidden!important}.spinner[data-v-cbd46c96]{animation:spin-cbd46c96 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-cbd46c96]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-cbd46c96]{filter:blur(3px)}.error-message[data-v-cbd46c96]{animation:slideFadeInUp-cbd46c96 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-cbd46c96]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-cbd46c96]{overflow-x:hidden}.landing__top[data-v-cbd46c96]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-cbd46c96]{display:flex}}.landing__topleft[data-v-cbd46c96]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-cbd46c96]{display:block;width:100%}}.landing__topleft--auth[data-v-cbd46c96]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-cbd46c96]{padding:0;width:auto}}.landing__topright[data-v-cbd46c96],.landing__topright--img[data-v-cbd46c96]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-cbd46c96]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-cbd46c96]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-cbd46c96]{display:none}}.landing__content[data-v-cbd46c96]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-cbd46c96]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-cbd46c96]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-cbd46c96]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-cbd46c96]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.google-btn[data-v-cbd46c96]{display:flex;justify-content:center}@media screen and (max-width:720px){.google-btn[data-v-cbd46c96]{margin-bottom:16px}}.google-login-btn[data-v-cbd46c96]{align-items:center;background-color:#fff;border:1px solid #dadce0;border-radius:4px;box-shadow:0 1px 2px rgba(0,0,0,.05);color:#3c4043;cursor:pointer;display:flex;font-size:16px;font-weight:500;gap:10px;padding:12px 24px;transition:box-shadow .2s}.google-login-btn[data-v-cbd46c96]:hover{box-shadow:0 2px 4px rgba(0,0,0,.1)}.google-login-btn[data-v-cbd46c96]:before{background:url(https://developers.google.com/identity/images/g-logo.png) no-repeat 50%;background-size:contain;content:\"\";display:inline-block;height:18px;width:18px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GoogleBtn.vue?vue&type=template&id=cbd46c96&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "google-btn"
  }, [_vm._ssrNode("<button id=\"login-with-google\" class=\"google-login-btn\" data-v-cbd46c96>\n        Continue with Google\n    </button>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GoogleBtn.vue?vue&type=template&id=cbd46c96&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GoogleBtn.vue?vue&type=script&lang=js
/* harmony default export */ var GoogleBtnvue_type_script_lang_js = ({
  name: "GoogleLoginButton"
});
// CONCATENATED MODULE: ./components/GoogleBtn.vue?vue&type=script&lang=js
 /* harmony default export */ var components_GoogleBtnvue_type_script_lang_js = (GoogleBtnvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/GoogleBtn.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(114)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GoogleBtnvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cbd46c96",
  "7f3e5ac0"
  
)

/* harmony default export */ var GoogleBtn = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=google-btn.js.map