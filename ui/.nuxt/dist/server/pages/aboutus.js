exports.ids = [30,7,11];
exports.modules = {

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0397ddea", content, true, context)
};

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_0367d165_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_0367d165_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_0367d165_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_0367d165_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_0367d165_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0367d165],[data-v-0367d165]:after,[data-v-0367d165]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0367d165]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0367d165]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0367d165]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0367d165]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0367d165]{font-size:65%}}body[data-v-0367d165]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0367d165]{padding:0}}[data-v-0367d165]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0367d165]::selection{background-color:#249b48;color:#fff}[data-v-0367d165]::-webkit-scrollbar{height:8px;width:8px}[data-v-0367d165]::-webkit-scrollbar-track{background:transparent}[data-v-0367d165]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0367d165]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0367d165]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0367d165{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0367d165{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0367d165{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-0367d165{to{transform:rotate(1turn)}}.slide-in-left[data-v-0367d165]{animation:slide-in-left-0367d165 .5s ease-out forwards}.button-primary[data-v-0367d165]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0367d165]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0367d165]{opacity:.4}.floating-element[data-v-0367d165]{animation:float-0367d165 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0367d165]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0367d165]{animation:spin-0367d165 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0367d165]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0367d165]{filter:blur(3px)}.error-message[data-v-0367d165]{animation:slideFadeInUp-0367d165 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-0367d165]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-0367d165]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-0367d165]{text-align:left}.landing[data-v-0367d165]{overflow-x:hidden}.landing__top[data-v-0367d165]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0367d165]{display:flex}}.landing__topleft[data-v-0367d165]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0367d165]{display:block;width:100%}}.landing__topleft--auth[data-v-0367d165]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0367d165]{padding:0;width:auto}}.landing__topright[data-v-0367d165],.landing__topright--img[data-v-0367d165]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0367d165]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0367d165]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0367d165]{display:none}}.landing__content[data-v-0367d165]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0367d165]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0367d165]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0367d165]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0367d165]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable[data-v-0367d165]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-0367d165]{overflow:hidden}}.admintable__top[data-v-0367d165]{align-items:center;display:flex;justify-content:space-between;margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-0367d165]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-0367d165]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-0367d165]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-0367d165]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-0367d165]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-0367d165]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-0367d165]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-0367d165]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-0367d165]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-0367d165]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-0367d165]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-0367d165]{padding:.6rem}}.admintable__searchinput svg[data-v-0367d165]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-0367d165]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-0367d165]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-0367d165]{font-size:1.2rem}}.admintable__content--link[data-v-0367d165]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-0367d165]{align-items:center;display:flex}.admintable__content--asset a[data-v-0367d165]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-0367d165]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-0367d165]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-0367d165]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-0367d165]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-0367d165]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-0367d165]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-0367d165]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-0367d165]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-0367d165]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-0367d165]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-0367d165]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-0367d165]{background:#249b48}.admintable__headerarea--section button.logout[data-v-0367d165]{background:transparent}.admintable__headerarea--section button.logout[data-v-0367d165]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-0367d165]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-0367d165]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-0367d165]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-0367d165]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-0367d165]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-0367d165]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-0367d165],.admintable__table th[data-v-0367d165]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-0367d165]:first-child,.admintable__table td[data-v-0367d165]:nth-child(2),.admintable__table th[data-v-0367d165]:first-child,.admintable__table th[data-v-0367d165]:nth-child(2){text-align:left}.admintable__table td[data-v-0367d165]{border-bottom:1px solid #fff}.admintable__table th[data-v-0367d165]:first-child{width:4%}.admintable__table th[data-v-0367d165]:nth-child(2){width:18%}.admintable__table th[data-v-0367d165]:nth-child(3){width:2%}.admintable__table th[data-v-0367d165]:nth-child(4){width:10%}.admintable__table th[data-v-0367d165]:nth-child(5),.admintable__table th[data-v-0367d165]:nth-child(6){width:12%}.admintable__table th[data-v-0367d165]:nth-child(7),.admintable__table th[data-v-0367d165]:nth-child(8),.admintable__table th[data-v-0367d165]:nth-child(9){width:8%}.admintable__table th[data-v-0367d165]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-0367d165]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-0367d165]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-0367d165]{left:10px}.admintable__table td[data-v-0367d165]:first-child,.admintable__table th[data-v-0367d165]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-0367d165]:nth-child(2),.admintable__table th[data-v-0367d165]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-0367d165]:nth-child(3),.admintable__table th[data-v-0367d165]:nth-child(3){display:none;width:0}.admintable__table td[data-v-0367d165]:nth-child(4),.admintable__table th[data-v-0367d165]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-0367d165]:nth-child(5),.admintable__table td[data-v-0367d165]:nth-child(6),.admintable__table td[data-v-0367d165]:nth-child(8),.admintable__table td[data-v-0367d165]:nth-child(9),.admintable__table th[data-v-0367d165]:nth-child(5),.admintable__table th[data-v-0367d165]:nth-child(6),.admintable__table th[data-v-0367d165]:nth-child(8),.admintable__table th[data-v-0367d165]:nth-child(9){display:none;width:0}.admintable__table td[data-v-0367d165]:nth-child(7),.admintable__table th[data-v-0367d165]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-0367d165]:nth-child(10),.admintable__table th[data-v-0367d165]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-0367d165]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-0367d165]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-0367d165],.admintable__editinputarea textarea[data-v-0367d165]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-0367d165]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-0367d165]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-0367d165]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-0367d165]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-0367d165]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-0367d165]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-0367d165]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-0367d165]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-0367d165]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-0367d165],.admintable__pagination--total[data-v-0367d165]{color:#fff;font-weight:600}.admintable__actions[data-v-0367d165]{position:relative}.admintable__actions--dropdown-button[data-v-0367d165]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-0367d165]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-0367d165]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-0367d165]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-0367d165]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-0367d165]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-0367d165]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-0367d165]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-0367d165]{color:#fff}.admintable__actions--savebtn.delete[data-v-0367d165]{background:red;color:#fff}.aboutus[data-v-0367d165]{background:#fff;min-height:100vh}.aboutus__header[data-v-0367d165]{left:0;position:fixed;top:0;width:100vw;z-index:6}.aboutus__header.auth[data-v-0367d165],.aboutus__header.unauth[data-v-0367d165]{background:transparent}@media only screen and (max-width:56.25em){.aboutus__header.auth[data-v-0367d165]{background:#fff}}.aboutus__jumbotron[data-v-0367d165]{border-radius:3rem;height:30rem;margin-bottom:3rem;overflow:hidden;width:100%}.aboutus__jumbotron img[data-v-0367d165]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.aboutus__h1[data-v-0367d165]{font-size:3rem;font-weight:400;margin-bottom:4rem}.aboutus__h1 span[data-v-0367d165]{color:#249b48;display:inline-block;font-size:4rem;position:relative}.aboutus__h1 span.name-text[data-v-0367d165]{animation:moveInUp .5s ease forwards}.aboutus__h1 span.name[data-v-0367d165]:after{animation:growFromLeft .5s ease forwards;background:#249b48;border-radius:3rem;bottom:-7px;content:\"\";height:.3rem;left:0;position:absolute;width:0}.aboutus__content[data-v-0367d165]{margin:0 auto;padding:2rem;width:100rem}@media only screen and (max-width:56.25em){.aboutus__content[data-v-0367d165]{width:auto}}.aboutus__content--heading[data-v-0367d165]{font-size:3rem;font-weight:400;margin-bottom:2rem}.aboutus__content--section[data-v-0367d165]{display:block;font-size:1.5rem;margin-bottom:1rem}.aboutus__content--section.last[data-v-0367d165]{margin-bottom:3rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/aboutus.vue?vue&type=template&id=0367d165&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"aboutus\" data-v-0367d165>", "</div>", [_vm._ssrNode("<div class=\"aboutus__header\" data-v-0367d165>", "</div>", [_c('ChatHeader', {
    attrs: {
      "logovisible": true,
      "jwt": true,
      "backRoute": '/'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"aboutus__content\" data-v-0367d165>", "</div>", [_vm._ssrNode("<figure class=\"aboutus__jumbotron\" data-v-0367d165>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/copy-mast-img.png',
      expression: "'/imgs/copy-mast-img.png'"
    }]
  }, [])]), _vm._ssrNode(" <h1 class=\"aboutus__h1\" data-v-0367d165>\n        About <span class=\"name\" data-v-0367d165><span class=\"name-text\" data-v-0367d165>Payoor</span></span></h1> <p class=\"aboutus__content--heading\" data-v-0367d165>Our Story</p> <p class=\"aboutus__content--section\" data-v-0367d165>\n        On May 22nd, 2023, Payoor was born out of a simple but powerful truth, grocery\n        shopping can be stressful, and one of our founders &quot;does not like stress&quot;. After\n        one too many exhausting market runs, the thought became clear: There has to be a\n        faster, easier way to get fresh groceries for home-cooked meals.\n      </p> <p class=\"aboutus__content--section last\" data-v-0367d165>\n        That single frustration sparked a journey that took over a year of research,\n        development, and fine-tuning to create Payoor; a smart, seamless grocery\n        shopping experience designed for people who value their time but still want\n        quality, fresh ingredients.\n      </p> <p class=\"aboutus__content--heading\" data-v-0367d165>Our Mission</p> <p class=\"aboutus__content--section last\" data-v-0367d165>\n        To make grocery shopping fast, effortless, and stress-free by providing a smart,\n        clean, and convenient way to get fresh food straight to your kitchen. We believe\n        that every meal shouldn't a stressful and tragic backstory.\n      </p> <p class=\"aboutus__content--heading\" data-v-0367d165>Our Vision</p> <p class=\"aboutus__content--section\" data-v-0367d165>\n        To redefine how people shop for groceries by making convenience, freshness, and\n        simplicity the new standard one home-cooked meal at a time.\n      </p>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/aboutus.vue?vue&type=template&id=0367d165&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/aboutus.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(151)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0367d165",
  "45c71c5a"
  
)

/* harmony default export */ var aboutus = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatHeader: __webpack_require__(53).default})


/***/ }),

/***/ 46:
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

/***/ 47:
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
  add("67444d1d", content, true, context)
};

/***/ }),

/***/ 48:
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
  add("c64b4228", content, true, context)
};

/***/ }),

/***/ 50:
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
  "0e337d1b",
  "0826af36"
  
)

/* harmony default export */ var CartButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0e337d1b],[data-v-0e337d1b]:after,[data-v-0e337d1b]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0e337d1b]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0e337d1b]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0e337d1b]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0e337d1b]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0e337d1b]{font-size:65%}}body[data-v-0e337d1b]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0e337d1b]{padding:0}}[data-v-0e337d1b]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0e337d1b]::selection{background-color:#249b48;color:#fff}[data-v-0e337d1b]::-webkit-scrollbar{height:8px;width:8px}[data-v-0e337d1b]::-webkit-scrollbar-track{background:transparent}[data-v-0e337d1b]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0e337d1b]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0e337d1b]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0e337d1b{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0e337d1b{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0e337d1b{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-0e337d1b]{animation:slide-in-left-0e337d1b .5s ease-out forwards}.button-primary[data-v-0e337d1b]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0e337d1b]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0e337d1b]{opacity:.4}.floating-element[data-v-0e337d1b]{animation:float-0e337d1b 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0e337d1b]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0e337d1b]{animation:spin-0e337d1b 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0e337d1b]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0e337d1b]{filter:blur(3px)}.error-message[data-v-0e337d1b]{animation:slideFadeInUp-0e337d1b .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-0e337d1b]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-0e337d1b]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-0e337d1b]{text-align:left}.landing[data-v-0e337d1b]{overflow-x:hidden}.landing__top[data-v-0e337d1b]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0e337d1b]{display:flex}}.landing__topleft[data-v-0e337d1b]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0e337d1b]{display:block;width:100%}}.landing__topleft--auth[data-v-0e337d1b]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0e337d1b]{padding:0;width:auto}}.landing__topright[data-v-0e337d1b],.landing__topright--img[data-v-0e337d1b]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0e337d1b]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0e337d1b]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0e337d1b]{display:none}}.landing__content[data-v-0e337d1b]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0e337d1b]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0e337d1b]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0e337d1b]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0e337d1b]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable[data-v-0e337d1b]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-0e337d1b]{overflow:hidden}}.admintable__top[data-v-0e337d1b]{align-items:center;display:flex;justify-content:space-between;margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-0e337d1b]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-0e337d1b]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-0e337d1b]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-0e337d1b]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-0e337d1b]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-0e337d1b]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-0e337d1b]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-0e337d1b]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-0e337d1b]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-0e337d1b]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-0e337d1b]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-0e337d1b]{padding:.6rem}}.admintable__searchinput svg[data-v-0e337d1b]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-0e337d1b]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-0e337d1b]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-0e337d1b]{font-size:1.2rem}}.admintable__content--link[data-v-0e337d1b]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-0e337d1b]{align-items:center;display:flex}.admintable__content--asset a[data-v-0e337d1b]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-0e337d1b]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-0e337d1b]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-0e337d1b]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-0e337d1b]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-0e337d1b]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-0e337d1b]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-0e337d1b]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-0e337d1b]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-0e337d1b]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-0e337d1b]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-0e337d1b]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-0e337d1b]{background:#249b48}.admintable__headerarea--section button.logout[data-v-0e337d1b]{background:transparent}.admintable__headerarea--section button.logout[data-v-0e337d1b]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-0e337d1b]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-0e337d1b]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-0e337d1b]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-0e337d1b]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-0e337d1b]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-0e337d1b]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-0e337d1b],.admintable__table th[data-v-0e337d1b]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-0e337d1b]:first-child,.admintable__table td[data-v-0e337d1b]:nth-child(2),.admintable__table th[data-v-0e337d1b]:first-child,.admintable__table th[data-v-0e337d1b]:nth-child(2){text-align:left}.admintable__table td[data-v-0e337d1b]{border-bottom:1px solid #fff}.admintable__table th[data-v-0e337d1b]:first-child{width:4%}.admintable__table th[data-v-0e337d1b]:nth-child(2){width:18%}.admintable__table th[data-v-0e337d1b]:nth-child(3){width:2%}.admintable__table th[data-v-0e337d1b]:nth-child(4){width:10%}.admintable__table th[data-v-0e337d1b]:nth-child(5),.admintable__table th[data-v-0e337d1b]:nth-child(6){width:12%}.admintable__table th[data-v-0e337d1b]:nth-child(7),.admintable__table th[data-v-0e337d1b]:nth-child(8),.admintable__table th[data-v-0e337d1b]:nth-child(9){width:8%}.admintable__table th[data-v-0e337d1b]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-0e337d1b]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-0e337d1b]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-0e337d1b]{left:10px}.admintable__table td[data-v-0e337d1b]:first-child,.admintable__table th[data-v-0e337d1b]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-0e337d1b]:nth-child(2),.admintable__table th[data-v-0e337d1b]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-0e337d1b]:nth-child(3),.admintable__table th[data-v-0e337d1b]:nth-child(3){display:none;width:0}.admintable__table td[data-v-0e337d1b]:nth-child(4),.admintable__table th[data-v-0e337d1b]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-0e337d1b]:nth-child(5),.admintable__table td[data-v-0e337d1b]:nth-child(6),.admintable__table td[data-v-0e337d1b]:nth-child(8),.admintable__table td[data-v-0e337d1b]:nth-child(9),.admintable__table th[data-v-0e337d1b]:nth-child(5),.admintable__table th[data-v-0e337d1b]:nth-child(6),.admintable__table th[data-v-0e337d1b]:nth-child(8),.admintable__table th[data-v-0e337d1b]:nth-child(9){display:none;width:0}.admintable__table td[data-v-0e337d1b]:nth-child(7),.admintable__table th[data-v-0e337d1b]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-0e337d1b]:nth-child(10),.admintable__table th[data-v-0e337d1b]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-0e337d1b]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-0e337d1b]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-0e337d1b],.admintable__editinputarea textarea[data-v-0e337d1b]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-0e337d1b]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-0e337d1b]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-0e337d1b]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-0e337d1b]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-0e337d1b]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-0e337d1b]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-0e337d1b]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-0e337d1b]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-0e337d1b]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-0e337d1b],.admintable__pagination--total[data-v-0e337d1b]{color:#fff;font-weight:600}.admintable__actions[data-v-0e337d1b]{position:relative}.admintable__actions--dropdown-button[data-v-0e337d1b]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-0e337d1b]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-0e337d1b]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-0e337d1b]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-0e337d1b]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-0e337d1b]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-0e337d1b]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-0e337d1b]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-0e337d1b]{color:#fff}.admintable__actions--savebtn.delete[data-v-0e337d1b]{background:red;color:#fff}.cartbtn[data-v-0e337d1b]{color:#000;position:relative}.cartbtn__icon[data-v-0e337d1b]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-0e337d1b]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-0e337d1b]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-0e337d1b],.cartbtn__icon--total[data-v-0e337d1b]{color:#fff;font-weight:600}.cartbtn svg[data-v-0e337d1b]{height:80%;width:80%;fill:#fff}.loader[data-v-0e337d1b]{animation:spin-0e337d1b 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}@keyframes spin-0e337d1b{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 53:
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
var jwt_mixin = __webpack_require__(46);

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
  "7f082eaa",
  "5f357078"
  
)

/* harmony default export */ var ChatHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartButton: __webpack_require__(50).default})


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-7f082eaa],[data-v-7f082eaa]:after,[data-v-7f082eaa]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-7f082eaa]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-7f082eaa]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-7f082eaa]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-7f082eaa]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-7f082eaa]{font-size:65%}}body[data-v-7f082eaa]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-7f082eaa]{padding:0}}[data-v-7f082eaa]::-moz-selection{background-color:#249b48;color:#fff}[data-v-7f082eaa]::selection{background-color:#249b48;color:#fff}[data-v-7f082eaa]::-webkit-scrollbar{height:8px;width:8px}[data-v-7f082eaa]::-webkit-scrollbar-track{background:transparent}[data-v-7f082eaa]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-7f082eaa]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-7f082eaa]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-7f082eaa{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-7f082eaa{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-7f082eaa{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-7f082eaa{to{transform:rotate(1turn)}}.slide-in-left[data-v-7f082eaa]{animation:slide-in-left-7f082eaa .5s ease-out forwards}.button-primary[data-v-7f082eaa]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-7f082eaa]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-7f082eaa]{opacity:.4}.floating-element[data-v-7f082eaa]{animation:float-7f082eaa 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-7f082eaa]{height:100vh!important;overflow:hidden!important}.spinner[data-v-7f082eaa]{animation:spin-7f082eaa 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-7f082eaa]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-7f082eaa]{filter:blur(3px)}.error-message[data-v-7f082eaa]{animation:slideFadeInUp-7f082eaa .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-7f082eaa]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-7f082eaa]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-7f082eaa]{text-align:left}.landing[data-v-7f082eaa]{overflow-x:hidden}.landing__top[data-v-7f082eaa]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-7f082eaa]{display:flex}}.landing__topleft[data-v-7f082eaa]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-7f082eaa]{display:block;width:100%}}.landing__topleft--auth[data-v-7f082eaa]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-7f082eaa]{padding:0;width:auto}}.landing__topright[data-v-7f082eaa],.landing__topright--img[data-v-7f082eaa]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-7f082eaa]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-7f082eaa]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-7f082eaa]{display:none}}.landing__content[data-v-7f082eaa]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-7f082eaa]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-7f082eaa]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-7f082eaa]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-7f082eaa]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable[data-v-7f082eaa]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-7f082eaa]{overflow:hidden}}.admintable__top[data-v-7f082eaa]{align-items:center;display:flex;justify-content:space-between;margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-7f082eaa]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-7f082eaa]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-7f082eaa]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-7f082eaa]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-7f082eaa]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-7f082eaa]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-7f082eaa]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-7f082eaa]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-7f082eaa]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-7f082eaa]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-7f082eaa]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-7f082eaa]{padding:.6rem}}.admintable__searchinput svg[data-v-7f082eaa]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-7f082eaa]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-7f082eaa]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-7f082eaa]{font-size:1.2rem}}.admintable__content--link[data-v-7f082eaa]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-7f082eaa]{align-items:center;display:flex}.admintable__content--asset a[data-v-7f082eaa]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-7f082eaa]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-7f082eaa]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-7f082eaa]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-7f082eaa]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-7f082eaa]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-7f082eaa]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-7f082eaa]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-7f082eaa]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-7f082eaa]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-7f082eaa]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-7f082eaa]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-7f082eaa]{background:#249b48}.admintable__headerarea--section button.logout[data-v-7f082eaa]{background:transparent}.admintable__headerarea--section button.logout[data-v-7f082eaa]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-7f082eaa]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-7f082eaa]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-7f082eaa]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-7f082eaa]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-7f082eaa]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-7f082eaa]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-7f082eaa],.admintable__table th[data-v-7f082eaa]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-7f082eaa]:first-child,.admintable__table td[data-v-7f082eaa]:nth-child(2),.admintable__table th[data-v-7f082eaa]:first-child,.admintable__table th[data-v-7f082eaa]:nth-child(2){text-align:left}.admintable__table td[data-v-7f082eaa]{border-bottom:1px solid #fff}.admintable__table th[data-v-7f082eaa]:first-child{width:4%}.admintable__table th[data-v-7f082eaa]:nth-child(2){width:18%}.admintable__table th[data-v-7f082eaa]:nth-child(3){width:2%}.admintable__table th[data-v-7f082eaa]:nth-child(4){width:10%}.admintable__table th[data-v-7f082eaa]:nth-child(5),.admintable__table th[data-v-7f082eaa]:nth-child(6){width:12%}.admintable__table th[data-v-7f082eaa]:nth-child(7),.admintable__table th[data-v-7f082eaa]:nth-child(8),.admintable__table th[data-v-7f082eaa]:nth-child(9){width:8%}.admintable__table th[data-v-7f082eaa]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-7f082eaa]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-7f082eaa]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-7f082eaa]{left:10px}.admintable__table td[data-v-7f082eaa]:first-child,.admintable__table th[data-v-7f082eaa]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-7f082eaa]:nth-child(2),.admintable__table th[data-v-7f082eaa]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-7f082eaa]:nth-child(3),.admintable__table th[data-v-7f082eaa]:nth-child(3){display:none;width:0}.admintable__table td[data-v-7f082eaa]:nth-child(4),.admintable__table th[data-v-7f082eaa]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-7f082eaa]:nth-child(5),.admintable__table td[data-v-7f082eaa]:nth-child(6),.admintable__table td[data-v-7f082eaa]:nth-child(8),.admintable__table td[data-v-7f082eaa]:nth-child(9),.admintable__table th[data-v-7f082eaa]:nth-child(5),.admintable__table th[data-v-7f082eaa]:nth-child(6),.admintable__table th[data-v-7f082eaa]:nth-child(8),.admintable__table th[data-v-7f082eaa]:nth-child(9){display:none;width:0}.admintable__table td[data-v-7f082eaa]:nth-child(7),.admintable__table th[data-v-7f082eaa]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-7f082eaa]:nth-child(10),.admintable__table th[data-v-7f082eaa]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-7f082eaa]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-7f082eaa]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-7f082eaa],.admintable__editinputarea textarea[data-v-7f082eaa]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-7f082eaa]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-7f082eaa]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-7f082eaa]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-7f082eaa]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-7f082eaa]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-7f082eaa]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-7f082eaa]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-7f082eaa]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-7f082eaa]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-7f082eaa],.admintable__pagination--total[data-v-7f082eaa]{color:#fff;font-weight:600}.admintable__actions[data-v-7f082eaa]{position:relative}.admintable__actions--dropdown-button[data-v-7f082eaa]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-7f082eaa]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-7f082eaa]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-7f082eaa]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-7f082eaa]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-7f082eaa]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-7f082eaa]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-7f082eaa]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-7f082eaa]{color:#fff}.admintable__actions--savebtn.delete[data-v-7f082eaa]{background:red;color:#fff}.chat-header[data-v-7f082eaa]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-7f082eaa]{padding:2rem}}.chat-header__name[data-v-7f082eaa],.chat-header__name span.svg[data-v-7f082eaa]{align-items:center;display:flex}.chat-header__name span.svg[data-v-7f082eaa]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-7f082eaa]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-7f082eaa]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-7f082eaa]{display:none}}.chat-header__left--logo[data-v-7f082eaa]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-7f082eaa]{margin-bottom:5rem}.chat-header__left--logo img[data-v-7f082eaa]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-7f082eaa]{height:3.5rem}.chat-header__burger[data-v-7f082eaa]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-7f082eaa]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-7f082eaa]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-7f082eaa]{background:#fff}.chat-header__burger.green span[data-v-7f082eaa]{background:#249b48}.chat-header__menu[data-v-7f082eaa]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-7f082eaa]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-7f082eaa],.chat-header__menu.auth[data-v-7f082eaa]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-7f082eaa]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-7f082eaa]{font-size:1.8rem}}.chat-header__menuitem span[data-v-7f082eaa]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-7f082eaa]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=aboutus.js.map