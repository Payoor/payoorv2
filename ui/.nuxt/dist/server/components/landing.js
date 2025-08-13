exports.ids = [19,20,21,22,23];
exports.modules = {

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0222fd2c", content, true, context)
};

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_06675f5a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_06675f5a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_06675f5a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_06675f5a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_06675f5a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-06675f5a],[data-v-06675f5a]:after,[data-v-06675f5a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-06675f5a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-06675f5a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-06675f5a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-06675f5a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-06675f5a]{font-size:65%}}body[data-v-06675f5a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-06675f5a]{padding:0}}[data-v-06675f5a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-06675f5a]::selection{background-color:#249b48;color:#fff}[data-v-06675f5a]::-webkit-scrollbar{height:8px;width:8px}[data-v-06675f5a]::-webkit-scrollbar-track{background:transparent}[data-v-06675f5a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-06675f5a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-06675f5a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-06675f5a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-06675f5a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-06675f5a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-06675f5a{to{transform:rotate(1turn)}}.slide-in-left[data-v-06675f5a]{animation:slide-in-left-06675f5a .5s ease-out forwards}.button-primary[data-v-06675f5a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-06675f5a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-06675f5a]{opacity:.4}.floating-element[data-v-06675f5a]{animation:float-06675f5a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-06675f5a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-06675f5a]{animation:spin-06675f5a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-06675f5a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-06675f5a]{filter:blur(3px)}.error-message[data-v-06675f5a]{animation:slideFadeInUp-06675f5a .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-06675f5a]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-06675f5a]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-06675f5a]{text-align:left}.landing__content[data-v-06675f5a]{margin-top:90rem}.admintable[data-v-06675f5a]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-06675f5a]{overflow:hidden}}.admintable__top[data-v-06675f5a]{align-items:center;display:flex;justify-content:space-between;margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-06675f5a]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-06675f5a]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-06675f5a]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-06675f5a]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-06675f5a]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-06675f5a]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-06675f5a]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-06675f5a]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-06675f5a]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-06675f5a]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-06675f5a]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-06675f5a]{padding:.6rem}}.admintable__searchinput svg[data-v-06675f5a]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-06675f5a]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-06675f5a]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-06675f5a]{font-size:1.2rem}}.admintable__content--link[data-v-06675f5a]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-06675f5a]{align-items:center;display:flex}.admintable__content--asset a[data-v-06675f5a]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-06675f5a]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-06675f5a]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-06675f5a]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-06675f5a]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-06675f5a]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-06675f5a]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-06675f5a]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-06675f5a]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-06675f5a]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-06675f5a]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-06675f5a]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-06675f5a]{background:#249b48}.admintable__headerarea--section button.logout[data-v-06675f5a]{background:transparent}.admintable__headerarea--section button.logout[data-v-06675f5a]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-06675f5a]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-06675f5a]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-06675f5a]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-06675f5a]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-06675f5a]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-06675f5a]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-06675f5a],.admintable__table th[data-v-06675f5a]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-06675f5a]:first-child,.admintable__table td[data-v-06675f5a]:nth-child(2),.admintable__table th[data-v-06675f5a]:first-child,.admintable__table th[data-v-06675f5a]:nth-child(2){text-align:left}.admintable__table td[data-v-06675f5a]{border-bottom:1px solid #fff}.admintable__table th[data-v-06675f5a]:first-child{width:4%}.admintable__table th[data-v-06675f5a]:nth-child(2){width:18%}.admintable__table th[data-v-06675f5a]:nth-child(3){width:2%}.admintable__table th[data-v-06675f5a]:nth-child(4){width:10%}.admintable__table th[data-v-06675f5a]:nth-child(5),.admintable__table th[data-v-06675f5a]:nth-child(6){width:12%}.admintable__table th[data-v-06675f5a]:nth-child(7),.admintable__table th[data-v-06675f5a]:nth-child(8),.admintable__table th[data-v-06675f5a]:nth-child(9){width:8%}.admintable__table th[data-v-06675f5a]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-06675f5a]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-06675f5a]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-06675f5a]{left:10px}.admintable__table td[data-v-06675f5a]:first-child,.admintable__table th[data-v-06675f5a]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-06675f5a]:nth-child(2),.admintable__table th[data-v-06675f5a]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-06675f5a]:nth-child(3),.admintable__table th[data-v-06675f5a]:nth-child(3){display:none;width:0}.admintable__table td[data-v-06675f5a]:nth-child(4),.admintable__table th[data-v-06675f5a]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-06675f5a]:nth-child(5),.admintable__table td[data-v-06675f5a]:nth-child(6),.admintable__table td[data-v-06675f5a]:nth-child(8),.admintable__table td[data-v-06675f5a]:nth-child(9),.admintable__table th[data-v-06675f5a]:nth-child(5),.admintable__table th[data-v-06675f5a]:nth-child(6),.admintable__table th[data-v-06675f5a]:nth-child(8),.admintable__table th[data-v-06675f5a]:nth-child(9){display:none;width:0}.admintable__table td[data-v-06675f5a]:nth-child(7),.admintable__table th[data-v-06675f5a]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-06675f5a]:nth-child(10),.admintable__table th[data-v-06675f5a]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-06675f5a]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-06675f5a]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-06675f5a],.admintable__editinputarea textarea[data-v-06675f5a]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-06675f5a]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-06675f5a]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-06675f5a]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-06675f5a]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-06675f5a]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-06675f5a]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-06675f5a]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-06675f5a]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-06675f5a]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-06675f5a],.admintable__pagination--total[data-v-06675f5a]{color:#fff;font-weight:600}.admintable__actions[data-v-06675f5a]{position:relative}.admintable__actions--dropdown-button[data-v-06675f5a]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-06675f5a]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-06675f5a]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-06675f5a]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-06675f5a]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-06675f5a]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-06675f5a]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-06675f5a]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-06675f5a]{color:#fff}.admintable__actions--savebtn.delete[data-v-06675f5a]{background:red;color:#fff}.landing[data-v-06675f5a]{overflow-x:hidden}.landing__top[data-v-06675f5a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-06675f5a]{display:flex}}.landing__topleft[data-v-06675f5a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-06675f5a]{display:block;width:100%}}.landing__topleft--auth[data-v-06675f5a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-06675f5a]{padding:0;width:auto}}.landing__topright[data-v-06675f5a],.landing__topright--img[data-v-06675f5a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-06675f5a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-06675f5a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-06675f5a]{display:none}}.landing__content[data-v-06675f5a]{background:#249b48;margin-top:100vh;position:relative}.landing__seemore[data-v-06675f5a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-06675f5a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-06675f5a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-06675f5a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Landing.vue?vue&type=template&id=06675f5a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "landing"
  }, [_vm._ssrNode("<div data-v-06675f5a>", "</div>", [_vm._ssrNode("<div class=\"landing__top\" data-v-06675f5a>", "</div>", [_vm._ssrNode("<div class=\"landing__topleft\" data-v-06675f5a>", "</div>", [_vm._ssrNode("<div class=\"landing__topleft--auth\" data-v-06675f5a>", "</div>", [_vm._t("top-left")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"landing__topright\" data-v-06675f5a>", "</div>", [_vm._ssrNode("<figure class=\"landing__topright--img\" data-v-06675f5a>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/bike-desktop.png',
      expression: "'/imgs/bike-desktop.png'"
    }]
  }, [])])])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"landing__content\" data-v-06675f5a>", "</div>", [_c('LandingCategories'), _vm._ssrNode(" "), _c('LandingCopy'), _vm._ssrNode(" "), _c('LandingFaq'), _vm._ssrNode(" "), _c('LandingFooter')], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Landing.vue?vue&type=template&id=06675f5a&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Landing.vue?vue&type=script&lang=js
/* harmony default export */ var Landingvue_type_script_lang_js = ({
  methods: {
    scrollDown(elementId, duration = 1000, offset = 0) {
      const targetElement = document.getElementById(elementId);
      if (!targetElement) {
        console.error(`Element with ID "${elementId}" not found`);
        return false;
      }
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeInOutQuad = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      requestAnimationFrame(animation);
      return true;
    }
  }
});
// CONCATENATED MODULE: ./components/Landing.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Landingvue_type_script_lang_js = (Landingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Landing.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(199)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Landingvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "06675f5a",
  "14e196b4"
  
)

/* harmony default export */ var Landing = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LandingCategories: __webpack_require__(97).default,LandingCopy: __webpack_require__(98).default,LandingFaq: __webpack_require__(94).default,LandingFooter: __webpack_require__(95).default})


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6f0700e4", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("26eb682f", content, true, context)
};

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3fa4235a", content, true, context)
};

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4ffd796d", content, true, context)
};

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-7dc10924],[data-v-7dc10924]:after,[data-v-7dc10924]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-7dc10924]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-7dc10924]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-7dc10924]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-7dc10924]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-7dc10924]{font-size:65%}}body[data-v-7dc10924]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-7dc10924]{padding:0}}[data-v-7dc10924]::-moz-selection{background-color:#249b48;color:#fff}[data-v-7dc10924]::selection{background-color:#249b48;color:#fff}[data-v-7dc10924]::-webkit-scrollbar{height:8px;width:8px}[data-v-7dc10924]::-webkit-scrollbar-track{background:transparent}[data-v-7dc10924]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-7dc10924]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-7dc10924]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-7dc10924{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-7dc10924{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-7dc10924{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-7dc10924{to{transform:rotate(1turn)}}.slide-in-left[data-v-7dc10924]{animation:slide-in-left-7dc10924 .5s ease-out forwards}.button-primary[data-v-7dc10924]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-7dc10924]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-7dc10924]{opacity:.4}.floating-element[data-v-7dc10924]{animation:float-7dc10924 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-7dc10924]{height:100vh!important;overflow:hidden!important}.spinner[data-v-7dc10924]{animation:spin-7dc10924 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-7dc10924]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-7dc10924]{filter:blur(3px)}.error-message[data-v-7dc10924]{animation:slideFadeInUp-7dc10924 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-7dc10924]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-7dc10924]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-7dc10924]{text-align:left}.landing[data-v-7dc10924]{overflow-x:hidden}.landing__top[data-v-7dc10924]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-7dc10924]{display:flex}}.landing__topleft[data-v-7dc10924]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-7dc10924]{display:block;width:100%}}.landing__topleft--auth[data-v-7dc10924]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-7dc10924]{padding:0;width:auto}}.landing__topright[data-v-7dc10924],.landing__topright--img[data-v-7dc10924]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-7dc10924]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-7dc10924]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-7dc10924]{display:none}}.landing__content[data-v-7dc10924]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-7dc10924]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-7dc10924]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-7dc10924]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-7dc10924]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable[data-v-7dc10924]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-7dc10924]{overflow:hidden}}.admintable__top[data-v-7dc10924]{align-items:center;display:flex;justify-content:space-between;margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-7dc10924]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-7dc10924]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-7dc10924]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-7dc10924]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-7dc10924]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-7dc10924]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-7dc10924]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-7dc10924]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-7dc10924]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-7dc10924]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-7dc10924]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-7dc10924]{padding:.6rem}}.admintable__searchinput svg[data-v-7dc10924]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-7dc10924]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-7dc10924]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-7dc10924]{font-size:1.2rem}}.admintable__content--link[data-v-7dc10924]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-7dc10924]{align-items:center;display:flex}.admintable__content--asset a[data-v-7dc10924]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-7dc10924]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-7dc10924]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-7dc10924]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-7dc10924]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-7dc10924]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-7dc10924]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-7dc10924]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-7dc10924]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-7dc10924]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-7dc10924]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-7dc10924]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-7dc10924]{background:#249b48}.admintable__headerarea--section button.logout[data-v-7dc10924]{background:transparent}.admintable__headerarea--section button.logout[data-v-7dc10924]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-7dc10924]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-7dc10924]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-7dc10924]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-7dc10924]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-7dc10924]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-7dc10924]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-7dc10924],.admintable__table th[data-v-7dc10924]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-7dc10924]:first-child,.admintable__table td[data-v-7dc10924]:nth-child(2),.admintable__table th[data-v-7dc10924]:first-child,.admintable__table th[data-v-7dc10924]:nth-child(2){text-align:left}.admintable__table td[data-v-7dc10924]{border-bottom:1px solid #fff}.admintable__table th[data-v-7dc10924]:first-child{width:4%}.admintable__table th[data-v-7dc10924]:nth-child(2){width:18%}.admintable__table th[data-v-7dc10924]:nth-child(3){width:2%}.admintable__table th[data-v-7dc10924]:nth-child(4){width:10%}.admintable__table th[data-v-7dc10924]:nth-child(5),.admintable__table th[data-v-7dc10924]:nth-child(6){width:12%}.admintable__table th[data-v-7dc10924]:nth-child(7),.admintable__table th[data-v-7dc10924]:nth-child(8),.admintable__table th[data-v-7dc10924]:nth-child(9){width:8%}.admintable__table th[data-v-7dc10924]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-7dc10924]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-7dc10924]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-7dc10924]{left:10px}.admintable__table td[data-v-7dc10924]:first-child,.admintable__table th[data-v-7dc10924]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-7dc10924]:nth-child(2),.admintable__table th[data-v-7dc10924]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-7dc10924]:nth-child(3),.admintable__table th[data-v-7dc10924]:nth-child(3){display:none;width:0}.admintable__table td[data-v-7dc10924]:nth-child(4),.admintable__table th[data-v-7dc10924]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-7dc10924]:nth-child(5),.admintable__table td[data-v-7dc10924]:nth-child(6),.admintable__table td[data-v-7dc10924]:nth-child(8),.admintable__table td[data-v-7dc10924]:nth-child(9),.admintable__table th[data-v-7dc10924]:nth-child(5),.admintable__table th[data-v-7dc10924]:nth-child(6),.admintable__table th[data-v-7dc10924]:nth-child(8),.admintable__table th[data-v-7dc10924]:nth-child(9){display:none;width:0}.admintable__table td[data-v-7dc10924]:nth-child(7),.admintable__table th[data-v-7dc10924]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-7dc10924]:nth-child(10),.admintable__table th[data-v-7dc10924]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-7dc10924]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-7dc10924]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-7dc10924],.admintable__editinputarea textarea[data-v-7dc10924]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-7dc10924]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-7dc10924]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-7dc10924]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-7dc10924]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-7dc10924]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-7dc10924]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-7dc10924]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-7dc10924]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-7dc10924]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-7dc10924],.admintable__pagination--total[data-v-7dc10924]{color:#fff;font-weight:600}.admintable__actions[data-v-7dc10924]{position:relative}.admintable__actions--dropdown-button[data-v-7dc10924]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-7dc10924]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-7dc10924]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-7dc10924]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-7dc10924]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-7dc10924]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-7dc10924]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-7dc10924]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-7dc10924]{color:#fff}.admintable__actions--savebtn.delete[data-v-7dc10924]{background:red;color:#fff}.categories[data-v-7dc10924]{background:#249b48;padding:6rem 20rem 0}@media (min-width:2519px){.categories[data-v-7dc10924]{padding-top:6rem}}@media only screen and (max-width:75em){.categories[data-v-7dc10924]{padding:0 10rem}}@media only screen and (max-width:56.25em){.categories[data-v-7dc10924]{padding:1rem}}.categories__header[data-v-7dc10924]{color:#fff;font-size:5rem;font-weight:400;margin-bottom:6rem;text-align:center}@media only screen and (max-width:56.25em){.categories__header[data-v-7dc10924]{font-size:3rem;margin-bottom:6rem;margin-top:6rem}}.categories__grids[data-v-7dc10924]{background:#65d587;border-radius:1rem}@media only screen and (max-width:75em){.categories__grids[data-v-7dc10924]{margin-bottom:6rem}}.categories__grid[data-v-7dc10924]{display:grid;grid-template-columns:repeat(3,1fr);padding:4rem;grid-gap:9rem}@media only screen and (max-width:56.25em){.categories__grid[data-v-7dc10924]{display:grid;grid-template-columns:repeat(2,1fr);padding:2rem;grid-gap:1rem}}.categories__grid[data-v-7dc10924]:first-child{padding-bottom:1.5rem}.categories__griditem figure[data-v-7dc10924]{height:27rem;width:100%}@media only screen and (max-width:56.25em){.categories__griditem figure[data-v-7dc10924]{height:18rem}}.categories__griditem figure img[data-v-7dc10924]{border-radius:1rem;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.categories__griditem h4[data-v-7dc10924]{font-size:1.5rem;font-size:1.4rem;font-weight:300;margin-top:2rem;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-c912de2a],[data-v-c912de2a]:after,[data-v-c912de2a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-c912de2a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-c912de2a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-c912de2a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-c912de2a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-c912de2a]{font-size:65%}}body[data-v-c912de2a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-c912de2a]{padding:0}}[data-v-c912de2a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-c912de2a]::selection{background-color:#249b48;color:#fff}[data-v-c912de2a]::-webkit-scrollbar{height:8px;width:8px}[data-v-c912de2a]::-webkit-scrollbar-track{background:transparent}[data-v-c912de2a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-c912de2a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-c912de2a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-c912de2a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-c912de2a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-c912de2a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-c912de2a{to{transform:rotate(1turn)}}.slide-in-left[data-v-c912de2a]{animation:slide-in-left-c912de2a .5s ease-out forwards}.button-primary[data-v-c912de2a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-c912de2a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-c912de2a]{opacity:.4}.floating-element[data-v-c912de2a]{animation:float-c912de2a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-c912de2a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-c912de2a]{animation:spin-c912de2a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-c912de2a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-c912de2a]{filter:blur(3px)}.error-message[data-v-c912de2a]{animation:slideFadeInUp-c912de2a .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-c912de2a]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-c912de2a]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-c912de2a]{text-align:left}.landing[data-v-c912de2a]{overflow-x:hidden}.landing__top[data-v-c912de2a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-c912de2a]{display:flex}}.landing__topleft[data-v-c912de2a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-c912de2a]{display:block;width:100%}}.landing__topleft--auth[data-v-c912de2a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-c912de2a]{padding:0;width:auto}}.landing__topright[data-v-c912de2a],.landing__topright--img[data-v-c912de2a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-c912de2a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-c912de2a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-c912de2a]{display:none}}.landing__content[data-v-c912de2a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-c912de2a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-c912de2a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-c912de2a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-c912de2a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable[data-v-c912de2a]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-c912de2a]{overflow:hidden}}.admintable__top[data-v-c912de2a]{align-items:center;display:flex;justify-content:space-between;margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-c912de2a]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-c912de2a]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-c912de2a]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-c912de2a]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-c912de2a]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-c912de2a]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-c912de2a]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-c912de2a]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-c912de2a]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-c912de2a]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-c912de2a]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-c912de2a]{padding:.6rem}}.admintable__searchinput svg[data-v-c912de2a]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-c912de2a]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-c912de2a]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-c912de2a]{font-size:1.2rem}}.admintable__content--link[data-v-c912de2a]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-c912de2a]{align-items:center;display:flex}.admintable__content--asset a[data-v-c912de2a]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-c912de2a]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-c912de2a]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-c912de2a]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-c912de2a]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-c912de2a]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-c912de2a]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-c912de2a]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-c912de2a]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-c912de2a]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-c912de2a]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-c912de2a]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-c912de2a]{background:#249b48}.admintable__headerarea--section button.logout[data-v-c912de2a]{background:transparent}.admintable__headerarea--section button.logout[data-v-c912de2a]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-c912de2a]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-c912de2a]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-c912de2a]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-c912de2a]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-c912de2a]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-c912de2a]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-c912de2a],.admintable__table th[data-v-c912de2a]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-c912de2a]:first-child,.admintable__table td[data-v-c912de2a]:nth-child(2),.admintable__table th[data-v-c912de2a]:first-child,.admintable__table th[data-v-c912de2a]:nth-child(2){text-align:left}.admintable__table td[data-v-c912de2a]{border-bottom:1px solid #fff}.admintable__table th[data-v-c912de2a]:first-child{width:4%}.admintable__table th[data-v-c912de2a]:nth-child(2){width:18%}.admintable__table th[data-v-c912de2a]:nth-child(3){width:2%}.admintable__table th[data-v-c912de2a]:nth-child(4){width:10%}.admintable__table th[data-v-c912de2a]:nth-child(5),.admintable__table th[data-v-c912de2a]:nth-child(6){width:12%}.admintable__table th[data-v-c912de2a]:nth-child(7),.admintable__table th[data-v-c912de2a]:nth-child(8),.admintable__table th[data-v-c912de2a]:nth-child(9){width:8%}.admintable__table th[data-v-c912de2a]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-c912de2a]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-c912de2a]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-c912de2a]{left:10px}.admintable__table td[data-v-c912de2a]:first-child,.admintable__table th[data-v-c912de2a]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-c912de2a]:nth-child(2),.admintable__table th[data-v-c912de2a]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-c912de2a]:nth-child(3),.admintable__table th[data-v-c912de2a]:nth-child(3){display:none;width:0}.admintable__table td[data-v-c912de2a]:nth-child(4),.admintable__table th[data-v-c912de2a]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-c912de2a]:nth-child(5),.admintable__table td[data-v-c912de2a]:nth-child(6),.admintable__table td[data-v-c912de2a]:nth-child(8),.admintable__table td[data-v-c912de2a]:nth-child(9),.admintable__table th[data-v-c912de2a]:nth-child(5),.admintable__table th[data-v-c912de2a]:nth-child(6),.admintable__table th[data-v-c912de2a]:nth-child(8),.admintable__table th[data-v-c912de2a]:nth-child(9){display:none;width:0}.admintable__table td[data-v-c912de2a]:nth-child(7),.admintable__table th[data-v-c912de2a]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-c912de2a]:nth-child(10),.admintable__table th[data-v-c912de2a]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-c912de2a]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-c912de2a]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-c912de2a],.admintable__editinputarea textarea[data-v-c912de2a]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-c912de2a]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-c912de2a]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-c912de2a]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-c912de2a]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-c912de2a]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-c912de2a]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-c912de2a]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-c912de2a]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-c912de2a]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-c912de2a],.admintable__pagination--total[data-v-c912de2a]{color:#fff;font-weight:600}.admintable__actions[data-v-c912de2a]{position:relative}.admintable__actions--dropdown-button[data-v-c912de2a]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-c912de2a]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-c912de2a]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-c912de2a]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-c912de2a]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-c912de2a]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-c912de2a]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-c912de2a]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-c912de2a]{color:#fff}.admintable__actions--savebtn.delete[data-v-c912de2a]{background:red;color:#fff}.landingcopy[data-v-c912de2a]{background:#249b48;padding:6rem 20rem 0}@media (min-width:2519px){.landingcopy[data-v-c912de2a]{padding-top:6rem}}@media only screen and (max-width:75em){.landingcopy[data-v-c912de2a]{padding:0 10rem}}@media only screen and (max-width:56.25em){.landingcopy[data-v-c912de2a]{padding:1rem}}.landingcopy__header[data-v-c912de2a]{color:#fff;font-size:5rem;font-weight:400;margin-bottom:6rem;text-align:center}@media only screen and (max-width:56.25em){.landingcopy__header[data-v-c912de2a]{font-size:3rem;margin-bottom:6rem;margin-top:6rem}}.landingcopy__mast[data-v-c912de2a]{display:flex;justify-content:center}.landingcopy__mast figure[data-v-c912de2a]{border-radius:1rem;height:48rem;margin-bottom:2rem;overflow:hidden}.landingcopy__mast figure img[data-v-c912de2a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.landingcopy__card[data-v-c912de2a]{background:blue;border-radius:1rem;display:flex;height:38rem;justify-content:space-between;margin-bottom:4rem;padding:5rem;position:relative}.landingcopy__card.sample-dish[data-v-c912de2a]{background:#a8d1f0}.landingcopy__card.paper-basket[data-v-c912de2a]{background:#f0e7a8}.landingcopy__card.paper-box[data-v-c912de2a]{background:#f0baa8}.landingcopy__card--left[data-v-c912de2a]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;z-index:4}.landingcopy__card--left h5[data-v-c912de2a]{font-size:3.5rem;font-weight:400;margin-bottom:2rem}.landingcopy__card--left p[data-v-c912de2a]{font-size:2.1rem;font-weight:300}.landingcopy__card--right[data-v-c912de2a]{position:relative;width:40%}@media only screen and (max-width:56.25em){.landingcopy__card--right[data-v-c912de2a]{height:76%;position:absolute;right:-4rem;top:5rem;width:43%;z-index:2}}.landingcopy__card--right figure[data-v-c912de2a]{height:40rem;position:absolute;right:0;top:0}.landingcopy__card--right figure img[data-v-c912de2a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@media only screen and (max-width:56.25em){.landingcopy__card--right figure img[data-v-c912de2a]{height:69%}}.landingcopy__card--right figure.sample-dish[data-v-c912de2a]{right:-7rem;top:-6rem}@media only screen and (max-width:56.25em){.landingcopy__card--right figure.sample-dish[data-v-c912de2a]{right:0;top:0}}.landingcopy__card--right figure.paper-basket[data-v-c912de2a]{right:-7rem;top:-6rem}@media only screen and (max-width:56.25em){.landingcopy__card--right figure.paper-basket[data-v-c912de2a]{right:0;top:0}}.landingcopy__card--right figure.paper-box[data-v-c912de2a]{right:-7rem;top:-6rem;transform:scale(1.1)}@media only screen and (max-width:56.25em){.landingcopy__card--right figure.paper-box[data-v-c912de2a]{right:0;top:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6fdbb52a],[data-v-6fdbb52a]:after,[data-v-6fdbb52a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-6fdbb52a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-6fdbb52a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-6fdbb52a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-6fdbb52a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-6fdbb52a]{font-size:65%}}body[data-v-6fdbb52a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-6fdbb52a]{padding:0}}[data-v-6fdbb52a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-6fdbb52a]::selection{background-color:#249b48;color:#fff}[data-v-6fdbb52a]::-webkit-scrollbar{height:8px;width:8px}[data-v-6fdbb52a]::-webkit-scrollbar-track{background:transparent}[data-v-6fdbb52a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-6fdbb52a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-6fdbb52a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-6fdbb52a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-6fdbb52a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-6fdbb52a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-6fdbb52a{to{transform:rotate(1turn)}}.slide-in-left[data-v-6fdbb52a]{animation:slide-in-left-6fdbb52a .5s ease-out forwards}.button-primary[data-v-6fdbb52a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-6fdbb52a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-6fdbb52a]{opacity:.4}.floating-element[data-v-6fdbb52a]{animation:float-6fdbb52a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-6fdbb52a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-6fdbb52a]{animation:spin-6fdbb52a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-6fdbb52a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-6fdbb52a]{filter:blur(3px)}.error-message[data-v-6fdbb52a]{animation:slideFadeInUp-6fdbb52a .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-6fdbb52a]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-6fdbb52a]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-6fdbb52a]{text-align:left}.landing[data-v-6fdbb52a]{overflow-x:hidden}.landing__top[data-v-6fdbb52a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-6fdbb52a]{display:flex}}.landing__topleft[data-v-6fdbb52a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-6fdbb52a]{display:block;width:100%}}.landing__topleft--auth[data-v-6fdbb52a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-6fdbb52a]{padding:0;width:auto}}.landing__topright[data-v-6fdbb52a],.landing__topright--img[data-v-6fdbb52a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-6fdbb52a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-6fdbb52a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-6fdbb52a]{display:none}}.landing__content[data-v-6fdbb52a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-6fdbb52a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-6fdbb52a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-6fdbb52a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-6fdbb52a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable[data-v-6fdbb52a]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-6fdbb52a]{overflow:hidden}}.admintable__top[data-v-6fdbb52a]{align-items:center;display:flex;justify-content:space-between;margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-6fdbb52a]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-6fdbb52a]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-6fdbb52a]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-6fdbb52a]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-6fdbb52a]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-6fdbb52a]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-6fdbb52a]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-6fdbb52a]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-6fdbb52a]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-6fdbb52a]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-6fdbb52a]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-6fdbb52a]{padding:.6rem}}.admintable__searchinput svg[data-v-6fdbb52a]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-6fdbb52a]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-6fdbb52a]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-6fdbb52a]{font-size:1.2rem}}.admintable__content--link[data-v-6fdbb52a]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-6fdbb52a]{align-items:center;display:flex}.admintable__content--asset a[data-v-6fdbb52a]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-6fdbb52a]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-6fdbb52a]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-6fdbb52a]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-6fdbb52a]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-6fdbb52a]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-6fdbb52a]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-6fdbb52a]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-6fdbb52a]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-6fdbb52a]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-6fdbb52a]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-6fdbb52a]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-6fdbb52a]{background:#249b48}.admintable__headerarea--section button.logout[data-v-6fdbb52a]{background:transparent}.admintable__headerarea--section button.logout[data-v-6fdbb52a]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-6fdbb52a]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-6fdbb52a]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-6fdbb52a]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-6fdbb52a]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-6fdbb52a]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-6fdbb52a]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-6fdbb52a],.admintable__table th[data-v-6fdbb52a]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-6fdbb52a]:first-child,.admintable__table td[data-v-6fdbb52a]:nth-child(2),.admintable__table th[data-v-6fdbb52a]:first-child,.admintable__table th[data-v-6fdbb52a]:nth-child(2){text-align:left}.admintable__table td[data-v-6fdbb52a]{border-bottom:1px solid #fff}.admintable__table th[data-v-6fdbb52a]:first-child{width:4%}.admintable__table th[data-v-6fdbb52a]:nth-child(2){width:18%}.admintable__table th[data-v-6fdbb52a]:nth-child(3){width:2%}.admintable__table th[data-v-6fdbb52a]:nth-child(4){width:10%}.admintable__table th[data-v-6fdbb52a]:nth-child(5),.admintable__table th[data-v-6fdbb52a]:nth-child(6){width:12%}.admintable__table th[data-v-6fdbb52a]:nth-child(7),.admintable__table th[data-v-6fdbb52a]:nth-child(8),.admintable__table th[data-v-6fdbb52a]:nth-child(9){width:8%}.admintable__table th[data-v-6fdbb52a]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-6fdbb52a]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-6fdbb52a]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-6fdbb52a]{left:10px}.admintable__table td[data-v-6fdbb52a]:first-child,.admintable__table th[data-v-6fdbb52a]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-6fdbb52a]:nth-child(2),.admintable__table th[data-v-6fdbb52a]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-6fdbb52a]:nth-child(3),.admintable__table th[data-v-6fdbb52a]:nth-child(3){display:none;width:0}.admintable__table td[data-v-6fdbb52a]:nth-child(4),.admintable__table th[data-v-6fdbb52a]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-6fdbb52a]:nth-child(5),.admintable__table td[data-v-6fdbb52a]:nth-child(6),.admintable__table td[data-v-6fdbb52a]:nth-child(8),.admintable__table td[data-v-6fdbb52a]:nth-child(9),.admintable__table th[data-v-6fdbb52a]:nth-child(5),.admintable__table th[data-v-6fdbb52a]:nth-child(6),.admintable__table th[data-v-6fdbb52a]:nth-child(8),.admintable__table th[data-v-6fdbb52a]:nth-child(9){display:none;width:0}.admintable__table td[data-v-6fdbb52a]:nth-child(7),.admintable__table th[data-v-6fdbb52a]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-6fdbb52a]:nth-child(10),.admintable__table th[data-v-6fdbb52a]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-6fdbb52a]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-6fdbb52a]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-6fdbb52a],.admintable__editinputarea textarea[data-v-6fdbb52a]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-6fdbb52a]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-6fdbb52a]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-6fdbb52a]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-6fdbb52a]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-6fdbb52a]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-6fdbb52a]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-6fdbb52a]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-6fdbb52a]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-6fdbb52a]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-6fdbb52a],.admintable__pagination--total[data-v-6fdbb52a]{color:#fff;font-weight:600}.admintable__actions[data-v-6fdbb52a]{position:relative}.admintable__actions--dropdown-button[data-v-6fdbb52a]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-6fdbb52a]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-6fdbb52a]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-6fdbb52a]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-6fdbb52a]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-6fdbb52a]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-6fdbb52a]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-6fdbb52a]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-6fdbb52a]{color:#fff}.admintable__actions--savebtn.delete[data-v-6fdbb52a]{background:red;color:#fff}.landingfaq[data-v-6fdbb52a]{background:#249b48;padding:0 20rem}@media (min-width:2519px){.landingfaq[data-v-6fdbb52a]{padding-top:6rem}}@media only screen and (max-width:75em){.landingfaq[data-v-6fdbb52a]{padding:0 10rem}}@media only screen and (max-width:56.25em){.landingfaq[data-v-6fdbb52a]{padding:1rem;padding:0}}.landingfaq__content[data-v-6fdbb52a]{background:#fff;border-radius:1rem;padding:3rem}.landingfaq__content h4[data-v-6fdbb52a]{font-size:4rem;font-weight:500;margin-top:4rem;text-align:center}.landingfaq__faqs[data-v-6fdbb52a]{margin-top:2rem}.landingfaq__faq[data-v-6fdbb52a]{border:1px solid #000;border-radius:1rem;margin-bottom:3rem;padding:2rem}.landingfaq__faq--header[data-v-6fdbb52a]{font-size:2rem;font-weight:500;margin-bottom:2rem}.landingfaq__faq--description[data-v-6fdbb52a]{font-size:1.5rem;font-weight:300;line-height:3rem}.landingfaq__faq--description.location[data-v-6fdbb52a]{color:#249b48;display:inline-block;font-weight:600;margin-right:.5rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6cc32934],[data-v-6cc32934]:after,[data-v-6cc32934]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-6cc32934]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-6cc32934]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-6cc32934]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-6cc32934]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-6cc32934]{font-size:65%}}body[data-v-6cc32934]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-6cc32934]{padding:0}}[data-v-6cc32934]::-moz-selection{background-color:#249b48;color:#fff}[data-v-6cc32934]::selection{background-color:#249b48;color:#fff}[data-v-6cc32934]::-webkit-scrollbar{height:8px;width:8px}[data-v-6cc32934]::-webkit-scrollbar-track{background:transparent}[data-v-6cc32934]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-6cc32934]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-6cc32934]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-6cc32934{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-6cc32934{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-6cc32934{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-6cc32934{to{transform:rotate(1turn)}}.slide-in-left[data-v-6cc32934]{animation:slide-in-left-6cc32934 .5s ease-out forwards}.button-primary[data-v-6cc32934]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-6cc32934]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-6cc32934]{opacity:.4}.floating-element[data-v-6cc32934]{animation:float-6cc32934 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-6cc32934]{height:100vh!important;overflow:hidden!important}.spinner[data-v-6cc32934]{animation:spin-6cc32934 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-6cc32934]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-6cc32934]{filter:blur(3px)}.error-message[data-v-6cc32934]{animation:slideFadeInUp-6cc32934 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-6cc32934]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-6cc32934]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-6cc32934]{text-align:left}.landing[data-v-6cc32934]{overflow-x:hidden}.landing__top[data-v-6cc32934]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-6cc32934]{display:flex}}.landing__topleft[data-v-6cc32934]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-6cc32934]{display:block;width:100%}}.landing__topleft--auth[data-v-6cc32934]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-6cc32934]{padding:0;width:auto}}.landing__topright[data-v-6cc32934],.landing__topright--img[data-v-6cc32934]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-6cc32934]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-6cc32934]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-6cc32934]{display:none}}.landing__content[data-v-6cc32934]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-6cc32934]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-6cc32934]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-6cc32934]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-6cc32934]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable[data-v-6cc32934]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-6cc32934]{overflow:hidden}}.admintable__top[data-v-6cc32934]{align-items:center;display:flex;justify-content:space-between;margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-6cc32934]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-6cc32934]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-6cc32934]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-6cc32934]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-6cc32934]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-6cc32934]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-6cc32934]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-6cc32934]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-6cc32934]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-6cc32934]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-6cc32934]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-6cc32934]{padding:.6rem}}.admintable__searchinput svg[data-v-6cc32934]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-6cc32934]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-6cc32934]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-6cc32934]{font-size:1.2rem}}.admintable__content--link[data-v-6cc32934]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-6cc32934]{align-items:center;display:flex}.admintable__content--asset a[data-v-6cc32934]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-6cc32934]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-6cc32934]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-6cc32934]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-6cc32934]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-6cc32934]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-6cc32934]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-6cc32934]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-6cc32934]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-6cc32934]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-6cc32934]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-6cc32934]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-6cc32934]{background:#249b48}.admintable__headerarea--section button.logout[data-v-6cc32934]{background:transparent}.admintable__headerarea--section button.logout[data-v-6cc32934]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-6cc32934]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-6cc32934]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-6cc32934]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-6cc32934]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-6cc32934]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-6cc32934]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-6cc32934],.admintable__table th[data-v-6cc32934]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-6cc32934]:first-child,.admintable__table td[data-v-6cc32934]:nth-child(2),.admintable__table th[data-v-6cc32934]:first-child,.admintable__table th[data-v-6cc32934]:nth-child(2){text-align:left}.admintable__table td[data-v-6cc32934]{border-bottom:1px solid #fff}.admintable__table th[data-v-6cc32934]:first-child{width:4%}.admintable__table th[data-v-6cc32934]:nth-child(2){width:18%}.admintable__table th[data-v-6cc32934]:nth-child(3){width:2%}.admintable__table th[data-v-6cc32934]:nth-child(4){width:10%}.admintable__table th[data-v-6cc32934]:nth-child(5),.admintable__table th[data-v-6cc32934]:nth-child(6){width:12%}.admintable__table th[data-v-6cc32934]:nth-child(7),.admintable__table th[data-v-6cc32934]:nth-child(8),.admintable__table th[data-v-6cc32934]:nth-child(9){width:8%}.admintable__table th[data-v-6cc32934]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-6cc32934]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-6cc32934]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-6cc32934]{left:10px}.admintable__table td[data-v-6cc32934]:first-child,.admintable__table th[data-v-6cc32934]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-6cc32934]:nth-child(2),.admintable__table th[data-v-6cc32934]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-6cc32934]:nth-child(3),.admintable__table th[data-v-6cc32934]:nth-child(3){display:none;width:0}.admintable__table td[data-v-6cc32934]:nth-child(4),.admintable__table th[data-v-6cc32934]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-6cc32934]:nth-child(5),.admintable__table td[data-v-6cc32934]:nth-child(6),.admintable__table td[data-v-6cc32934]:nth-child(8),.admintable__table td[data-v-6cc32934]:nth-child(9),.admintable__table th[data-v-6cc32934]:nth-child(5),.admintable__table th[data-v-6cc32934]:nth-child(6),.admintable__table th[data-v-6cc32934]:nth-child(8),.admintable__table th[data-v-6cc32934]:nth-child(9){display:none;width:0}.admintable__table td[data-v-6cc32934]:nth-child(7),.admintable__table th[data-v-6cc32934]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-6cc32934]:nth-child(10),.admintable__table th[data-v-6cc32934]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-6cc32934]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-6cc32934]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-6cc32934],.admintable__editinputarea textarea[data-v-6cc32934]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-6cc32934]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-6cc32934]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-6cc32934]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-6cc32934]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-6cc32934]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-6cc32934]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-6cc32934]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-6cc32934]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-6cc32934]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-6cc32934],.admintable__pagination--total[data-v-6cc32934]{color:#fff;font-weight:600}.admintable__actions[data-v-6cc32934]{position:relative}.admintable__actions--dropdown-button[data-v-6cc32934]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-6cc32934]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-6cc32934]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-6cc32934]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-6cc32934]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-6cc32934]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-6cc32934]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-6cc32934]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-6cc32934]{color:#fff}.admintable__actions--savebtn.delete[data-v-6cc32934]{background:red;color:#fff}.landingfooter[data-v-6cc32934]{align-items:center;background:#f4f4f4;display:flex;flex-direction:column;justify-content:center;margin-top:6rem;padding:2rem 0 10rem}.landingfooter__email[data-v-6cc32934]{color:#000;font-size:2rem;font-weight:300}.landingfooter__social[data-v-6cc32934]{align-items:center;display:flex;justify-content:center}.landingfooter__social figure[data-v-6cc32934]{cursor:pointer;display:inline-block;height:4rem;margin:1rem;transition:transform .2s ease;width:4rem}.landingfooter__social figure[data-v-6cc32934]:hover{transform:scale(1.1)}.landingfooter__social figure.xlogo[data-v-6cc32934]{padding:.6rem}.landingfooter__social figure img[data-v-6cc32934]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingFaq.vue?vue&type=template&id=6fdbb52a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"landingfaq\" data-v-6fdbb52a><div class=\"landingfaq__content\" data-v-6fdbb52a><h4 data-v-6fdbb52a>FAQ</h4> <div class=\"landingfaq__faqs\" data-v-6fdbb52a>" + _vm._ssrList(_vm.faqs, function (faq, index) {
    return "<div class=\"landingfaq__faq\" data-v-6fdbb52a><h5 class=\"landingfaq__faq--header\" data-v-6fdbb52a>" + _vm._ssrEscape(_vm._s(faq.title)) + "</h5> " + _vm._ssrList(faq.content, function (content, contentIndex) {
      return "<p class=\"landingfaq__faq--description\" data-v-6fdbb52a>" + _vm._ssrEscape("\n            " + _vm._s(content) + "\n          ") + "</p>";
    }) + " " + (faq.locations ? "<div data-v-6fdbb52a>" + _vm._ssrList(faq.locations, function (location, locationIndex) {
      return "<p class=\"landingfaq__faq--description location\" data-v-6fdbb52a>" + _vm._ssrEscape("\n              " + _vm._s(location) + _vm._s(locationIndex < faq.locations.length - 1 ? "," : "") + "\n            ") + "</p>";
    }) + "</div>" : "<!---->") + "</div>";
  }) + "</div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LandingFaq.vue?vue&type=template&id=6fdbb52a&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingFaq.vue?vue&type=script&lang=js
/* harmony default export */ var LandingFaqvue_type_script_lang_js = ({
  data() {
    return {
      faqs: [{
        title: "What is Payoor?",
        content: ["Payoor is an online grocery assistant that helps you with your all your grocery and market needs."]
      }, {
        title: "How long do deliveries take?",
        content: ["Deliveries take 48hours from checkout and you can set future delivery day."]
      }, {
        title: "Which locations do we currently service?",
        content: ["Currently, we only deliver to some parts of Lagos, although we expanding rapidly across Nigeria,"],
        locations: ["Magodo", "Ikeja", "Victoria Island", "Ogudu", "Ikate", "Lekki (Phase 1)", "Lagos Island", "Maryland", "Mushin", "Ogba", "Oshodi", "Opebi/Allen", "Oshodi-Isolo", "Omole", "Shomolu", "Surulere", "Victoria Island", "Yaba", "Berger", "Ojota", "Ketu"]
      }, {
        title: "What is Service charge?",
        content: ["The service fee is a consumer fee that appears on the price breakdown at checkout on the payoor app. Unlike other consumer fees, the service fee depends on your order's subtotal, that is, a very small percentage of your bill excluding the delivery fee. It also does not apply to all restaurants on our platform."]
      }, {
        title: "What is Shop by Recipe?",
        content: ["The service fee is a consumer fee that appears on the price breakdown at checkout on the payoor app. Unlike other consumer fees, the service fee depends on your order's subtotal, that is, a very small percentage of your bill excluding the delivery fee. It also does not apply to all restaurants on our platform."]
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/LandingFaq.vue?vue&type=script&lang=js
 /* harmony default export */ var components_LandingFaqvue_type_script_lang_js = (LandingFaqvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LandingFaq.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LandingFaqvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6fdbb52a",
  "6d1e9e1c"
  
)

/* harmony default export */ var LandingFaq = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingFooter.vue?vue&type=template&id=6cc32934&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"landingfooter\" data-v-6cc32934>", "</div>", [_vm._ssrNode("<div class=\"landingfooter__email\" data-v-6cc32934><p data-v-6cc32934>Get in touch at contact@payoor.store</p></div> "), _vm._ssrNode("<div class=\"landingfooter__social\" data-v-6cc32934>", "</div>", [_vm._ssrNode("<figure class=\"xlogo\" data-v-6cc32934>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/xlogo.png',
      expression: "'/imgs/xlogo.png'"
    }]
  }, [])]), _vm._ssrNode(" "), _vm._ssrNode("<figure data-v-6cc32934>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/instagramlogo.png',
      expression: "'/imgs/instagramlogo.png'"
    }]
  }, [])])], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LandingFooter.vue?vue&type=template&id=6cc32934&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingFooter.vue?vue&type=script&lang=js
/* harmony default export */ var LandingFootervue_type_script_lang_js = ({
  methods: {
    openInNewTab(url) {
      const newWindow = window.open(url, "_blank");
      newWindow.focus();
    }
  }
});
// CONCATENATED MODULE: ./components/LandingFooter.vue?vue&type=script&lang=js
 /* harmony default export */ var components_LandingFootervue_type_script_lang_js = (LandingFootervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LandingFooter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LandingFootervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6cc32934",
  "76ab5def"
  
)

/* harmony default export */ var LandingFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
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
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LandingCategories.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
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

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingCopy.vue?vue&type=template&id=c912de2a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "landingcopy"
  }, [_vm._ssrNode("<div class=\"landingcopy__content\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<div class=\"landingcopy__mast\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<figure data-v-c912de2a>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/copy-mast-img.png',
      expression: "'/imgs/copy-mast-img.png'"
    }]
  }, [])])]), _vm._ssrNode(" <h4 class=\"landingcopy__header\" data-v-c912de2a>\n      Psst... here is why we are your best buddy for fresh food stuff and quality\n      grocery\n    </h4> "), _vm._ssrNode("<div class=\"landingcopy__cards\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<div class=\"landingcopy__card sample-dish\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<div class=\"landingcopy__card--left\" data-v-c912de2a><h5 class=\"landingcopy__card--h5\" data-v-c912de2a>Every meal deserves a great story</h5> <p class=\"landingcopy__card--p\" data-v-c912de2a>\n            We deliver all you need for home-cooked meals, saving you market the hassle\n            and stress\n          </p></div> "), _vm._ssrNode("<div class=\"landingcopy__card--right\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<figure class=\"sample-dish\" data-v-c912de2a>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/sample_dish.png',
      expression: "'/imgs/sample_dish.png'"
    }]
  }, [])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"landingcopy__card paper-basket\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<div class=\"landingcopy__card--left\" data-v-c912de2a><h5 class=\"landingcopy__card--h5\" data-v-c912de2a>Best prices, best quality</h5> <p class=\"landingcopy__card--p\" data-v-c912de2a>\n            We offer unbeatable prices and the best quality you can find anywhere\n          </p></div> "), _vm._ssrNode("<div class=\"landingcopy__card--right\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<figure class=\"paper-basket\" data-v-c912de2a>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/paper_basket.png',
      expression: "'/imgs/paper_basket.png'"
    }]
  }, [])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"landingcopy__card paper-box\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<div class=\"landingcopy__card--left\" data-v-c912de2a><h5 class=\"landingcopy__card--h5\" data-v-c912de2a>Packaged with love and care</h5> <p class=\"landingcopy__card--p\" data-v-c912de2a>\n            We deliver your order in pristine condition, ensuring it's clean and ready\n            to use straight out of the box\n          </p></div> "), _vm._ssrNode("<div class=\"landingcopy__card--right\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<figure class=\"paper-box\" data-v-c912de2a>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/paper_box.png',
      expression: "'/imgs/paper_box.png'"
    }]
  }, [])])])], 2)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LandingCopy.vue?vue&type=template&id=c912de2a&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LandingCopy.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(84)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c912de2a",
  "13e479c9"
  
)

/* harmony default export */ var LandingCopy = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=landing.js.map