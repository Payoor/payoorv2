exports.ids = [14,7,13,25];
exports.modules = {

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("28da9d7c", content, true, context)
};

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_2b97cdaf_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_2b97cdaf_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_2b97cdaf_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_2b97cdaf_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_2b97cdaf_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-2b97cdaf],[data-v-2b97cdaf]:after,[data-v-2b97cdaf]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-2b97cdaf]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-2b97cdaf]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-2b97cdaf]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-2b97cdaf]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-2b97cdaf]{font-size:65%}}body[data-v-2b97cdaf]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-2b97cdaf]{padding:0}}[data-v-2b97cdaf]::-moz-selection{background-color:#249b48;color:#fff}[data-v-2b97cdaf]::selection{background-color:#249b48;color:#fff}[data-v-2b97cdaf]::-webkit-scrollbar{height:8px;width:8px}[data-v-2b97cdaf]::-webkit-scrollbar-track{background:transparent}[data-v-2b97cdaf]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-2b97cdaf]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-2b97cdaf]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-2b97cdaf{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-2b97cdaf{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-2b97cdaf{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-2b97cdaf]{animation:slide-in-left-2b97cdaf .5s ease-out forwards}.button-primary[data-v-2b97cdaf]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-2b97cdaf]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-2b97cdaf]{opacity:.4}.floating-element[data-v-2b97cdaf]{animation:float-2b97cdaf 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-2b97cdaf]{height:100vh!important;overflow:hidden!important}.spinner[data-v-2b97cdaf]{animation:spin-2b97cdaf 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-2b97cdaf]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-2b97cdaf]{filter:blur(3px)}.error-message[data-v-2b97cdaf]{animation:slideFadeInUp-2b97cdaf .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-2b97cdaf]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-2b97cdaf]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-2b97cdaf]{text-align:left}.landing[data-v-2b97cdaf]{overflow-x:hidden}.landing__top[data-v-2b97cdaf]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-2b97cdaf]{display:flex}}.landing__topleft[data-v-2b97cdaf]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-2b97cdaf]{display:block;width:100%}}.landing__topleft--auth[data-v-2b97cdaf]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-2b97cdaf]{padding:0;width:auto}}.landing__topright[data-v-2b97cdaf],.landing__topright--img[data-v-2b97cdaf]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-2b97cdaf]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-2b97cdaf]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-2b97cdaf]{display:none}}.landing__content[data-v-2b97cdaf]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-2b97cdaf]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-2b97cdaf]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-2b97cdaf]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-2b97cdaf]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable[data-v-2b97cdaf]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-2b97cdaf]{overflow:hidden}}.admintable__top[data-v-2b97cdaf]{align-items:center;display:flex;justify-content:space-between;margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-2b97cdaf]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-2b97cdaf]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-2b97cdaf]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-2b97cdaf]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-2b97cdaf]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-2b97cdaf]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-2b97cdaf]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-2b97cdaf]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-2b97cdaf]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-2b97cdaf]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-2b97cdaf]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-2b97cdaf]{padding:.6rem}}.admintable__searchinput svg[data-v-2b97cdaf]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-2b97cdaf]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-2b97cdaf]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-2b97cdaf]{font-size:1.2rem}}.admintable__content--link[data-v-2b97cdaf]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-2b97cdaf]{align-items:center;display:flex}.admintable__content--asset a[data-v-2b97cdaf]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-2b97cdaf]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-2b97cdaf]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-2b97cdaf]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-2b97cdaf]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-2b97cdaf]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-2b97cdaf]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-2b97cdaf]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-2b97cdaf]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-2b97cdaf]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-2b97cdaf]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-2b97cdaf]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-2b97cdaf]{background:#249b48}.admintable__headerarea--section button.logout[data-v-2b97cdaf]{background:transparent}.admintable__headerarea--section button.logout[data-v-2b97cdaf]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-2b97cdaf]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-2b97cdaf]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-2b97cdaf]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-2b97cdaf]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-2b97cdaf]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-2b97cdaf]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-2b97cdaf],.admintable__table th[data-v-2b97cdaf]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-2b97cdaf]:first-child,.admintable__table td[data-v-2b97cdaf]:nth-child(2),.admintable__table th[data-v-2b97cdaf]:first-child,.admintable__table th[data-v-2b97cdaf]:nth-child(2){text-align:left}.admintable__table td[data-v-2b97cdaf]{border-bottom:1px solid #fff}.admintable__table th[data-v-2b97cdaf]:first-child{width:4%}.admintable__table th[data-v-2b97cdaf]:nth-child(2){width:18%}.admintable__table th[data-v-2b97cdaf]:nth-child(3){width:2%}.admintable__table th[data-v-2b97cdaf]:nth-child(4){width:10%}.admintable__table th[data-v-2b97cdaf]:nth-child(5),.admintable__table th[data-v-2b97cdaf]:nth-child(6){width:12%}.admintable__table th[data-v-2b97cdaf]:nth-child(7),.admintable__table th[data-v-2b97cdaf]:nth-child(8),.admintable__table th[data-v-2b97cdaf]:nth-child(9){width:8%}.admintable__table th[data-v-2b97cdaf]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-2b97cdaf]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-2b97cdaf]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-2b97cdaf]{left:10px}.admintable__table td[data-v-2b97cdaf]:first-child,.admintable__table th[data-v-2b97cdaf]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-2b97cdaf]:nth-child(2),.admintable__table th[data-v-2b97cdaf]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-2b97cdaf]:nth-child(3),.admintable__table th[data-v-2b97cdaf]:nth-child(3){display:none;width:0}.admintable__table td[data-v-2b97cdaf]:nth-child(4),.admintable__table th[data-v-2b97cdaf]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-2b97cdaf]:nth-child(5),.admintable__table td[data-v-2b97cdaf]:nth-child(6),.admintable__table td[data-v-2b97cdaf]:nth-child(8),.admintable__table td[data-v-2b97cdaf]:nth-child(9),.admintable__table th[data-v-2b97cdaf]:nth-child(5),.admintable__table th[data-v-2b97cdaf]:nth-child(6),.admintable__table th[data-v-2b97cdaf]:nth-child(8),.admintable__table th[data-v-2b97cdaf]:nth-child(9){display:none;width:0}.admintable__table td[data-v-2b97cdaf]:nth-child(7),.admintable__table th[data-v-2b97cdaf]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-2b97cdaf]:nth-child(10),.admintable__table th[data-v-2b97cdaf]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-2b97cdaf]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-2b97cdaf]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-2b97cdaf],.admintable__editinputarea textarea[data-v-2b97cdaf]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-2b97cdaf]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-2b97cdaf]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-2b97cdaf]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-2b97cdaf]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-2b97cdaf]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-2b97cdaf]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-2b97cdaf]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-2b97cdaf]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-2b97cdaf]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-2b97cdaf],.admintable__pagination--total[data-v-2b97cdaf]{color:#fff;font-weight:600}.admintable__actions[data-v-2b97cdaf]{position:relative}.admintable__actions--dropdown-button[data-v-2b97cdaf]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-2b97cdaf]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-2b97cdaf]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-2b97cdaf]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-2b97cdaf]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-2b97cdaf]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-2b97cdaf]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-2b97cdaf]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-2b97cdaf]{color:#fff}.admintable__actions--savebtn.delete[data-v-2b97cdaf]{background:red;color:#fff}.chatoptions[data-v-2b97cdaf]{height:100vh;overflow:hidden;overflow-y:scroll;padding:4rem 2rem 19rem;width:100vw;z-index:10}.chatoptions[data-v-2b97cdaf],.chatoptions__header[data-v-2b97cdaf]{background:#fff;left:0;position:fixed;top:0}.chatoptions__header[data-v-2b97cdaf]{align-items:center;color:#000;display:flex;font-size:1.8rem;padding:2rem 1rem;text-transform:capitalize;width:100%;z-index:3}.chatoptions__header span[data-v-2b97cdaf]{cursor:pointer}.chatoptions__header span.svg[data-v-2b97cdaf]{align-items:center;display:flex;margin-right:.5rem}.chatoptions__header span.svg svg[data-v-2b97cdaf]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chatoptions__options[data-v-2b97cdaf]{margin-top:3rem}.chatoptions__description[data-v-2b97cdaf]{border-top:1px solid #eee;margin-top:2rem;padding:1rem 0}.chatoptions__description .description__title[data-v-2b97cdaf]{color:#000;font-size:1.6rem;font-weight:700;margin-bottom:1rem}.chatoptions__description .description__text[data-v-2b97cdaf]{color:#555;font-size:1.4rem;line-height:1.6}.chatoptions__content[data-v-2b97cdaf]{display:flex;justify-content:center}.chatoptions__content--body[data-v-2b97cdaf]{width:60rem}@media only screen and (max-width:56.25em){.chatoptions__content--body[data-v-2b97cdaf]{width:100%}}.chatoptions__loading[data-v-2b97cdaf]{align-items:center;display:flex;justify-content:center;padding:5rem 0}.chatoptions__bottom[data-v-2b97cdaf]{background:#fff;bottom:0;display:flex;justify-content:center;left:0;padding:1rem 1rem 2rem;position:fixed;width:100%;z-index:4}.chatoptions__bottom.column[data-v-2b97cdaf]{flex-direction:column}@media only screen and (max-width:56.25em){.chatoptions__bottom[data-v-2b97cdaf]{display:block}}.chatoptions__bottom button[data-v-2b97cdaf]{font-size:2rem;padding:2rem;width:100%}.chatoptions__bottom button.spacebetween[data-v-2b97cdaf]{display:flex;justify-content:space-between}.chatoptions__bottom button.transparent-button[data-v-2b97cdaf]{margin-bottom:2rem}.chatoptions__bottom .button-primary[data-v-2b97cdaf]{align-items:center;display:flex;gap:.5rem;justify-content:center}.loader[data-v-2b97cdaf]{animation:spin-2b97cdaf 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}.ml-1[data-v-2b97cdaf]{margin-left:.5rem}@keyframes spin-2b97cdaf{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.button-primary[disabled][data-v-2b97cdaf]{cursor:not-allowed;opacity:.7}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOptions.vue?vue&type=template&id=2b97cdaf&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatoptions"
  }, [_vm._ssrNode("<div class=\"chatoptions__content\" data-v-2b97cdaf><div class=\"chatoptions__content--body\" data-v-2b97cdaf><h1 class=\"chatoptions__header\" data-v-2b97cdaf><span class=\"svg\" data-v-2b97cdaf><svg data-v-2b97cdaf><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-2b97cdaf></use></svg></span> <span data-v-2b97cdaf>" + _vm._ssrEscape(_vm._s(_vm.productname)) + "</span></h1></div></div> "), _vm._ssrNode("<div class=\"chatoptions__content\" data-v-2b97cdaf>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__content--body\" data-v-2b97cdaf>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__options\" data-v-2b97cdaf>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"chatoptions__loading\" data-v-2b97cdaf>", "</div>", [_c('LoadingAnimation')], 1) : _vm._ssrNode("<div data-v-2b97cdaf>", "</div>", _vm._l(_vm.variants, function (variant) {
    return _vm._ssrNode("<div data-v-2b97cdaf>", "</div>", [_c('ChatOption', {
      attrs: {
        "data": {
          ...variant,
          productimg: _vm.productimg
        }
      }
    })], 1);
  }), 0), _vm._ssrNode(" <div class=\"chatoptions__description\" data-v-2b97cdaf><div class=\"chatoptions__content--body\" data-v-2b97cdaf><h2 class=\"description__title\" data-v-2b97cdaf>Product Description</h2> <p class=\"description__text\" data-v-2b97cdaf>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.productDescription || `This product comes in multiple variants. Select the one that
                            best fits your needs. Each
                            variant is carefully crafted to ensure the best quality and customer satisfaction.`) + "\n                        ") + "</p></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"chatoptions__bottom\" data-v-2b97cdaf>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__content--body\" data-v-2b97cdaf>", "</div>", [_vm._ssrNode("<button class=\"button-primary transparent-button\" data-v-2b97cdaf><span data-v-2b97cdaf>Continue Shopping</span></button> "), _vm.cartTotal === 0 ? _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.checkoutLoading) + " class=\"button-primary spacebetween disabled-btn\" data-v-2b97cdaf>", "</button>", [_vm._ssrNode("<span data-v-2b97cdaf>Proceed to Checkout</span> "), _vm.checkoutLoading ? _vm._ssrNode("<span class=\"loader ml-1\" data-v-2b97cdaf>", "</span>") : _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e(), _vm._ssrNode(" "), _vm.cartTotal > 0 ? _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.checkoutLoading) + " class=\"button-primary spacebetween\" data-v-2b97cdaf>", "</button>", [_vm._ssrNode("<span data-v-2b97cdaf>Proceed to Checkout</span> "), _vm.checkoutLoading ? _vm._ssrNode("<span class=\"loader ml-1\" data-v-2b97cdaf>", "</span>") : _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e()], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatOptions.vue?vue&type=template&id=2b97cdaf&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOptions.vue?vue&type=script&lang=js



/* harmony default export */ var ChatOptionsvue_type_script_lang_js = ({
  props: ['toggleViewOptions', 'mongooseid', 'productname', 'productimg', 'productDescription'],
  mixins: [jwt_mixin["a" /* default */]],
  data() {
    return {
      variants: [],
      backRoute: '/',
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
      try {
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/getoptions',
          queries: {
            mongooseid: this.mongooseid
          },
          method: 'GET'
        });
        this.variants = data.variants;
      } catch (error) {
        console.error(error);
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
        this.$router.push({
          path: '/checkout',
          query: {
            ...this.$route.query,
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
// CONCATENATED MODULE: ./components/ChatOptions.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatOptionsvue_type_script_lang_js = (ChatOptionsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ChatOptions.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(200)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatOptionsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2b97cdaf",
  "2f320ac3"
  
)

/* harmony default export */ var ChatOptions = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(56).default,ChatOption: __webpack_require__(74).default,CartButton: __webpack_require__(50).default})


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

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
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

/***/ 56:
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
  
  var style0 = __webpack_require__(57)
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

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-3b87158c],[data-v-3b87158c]:after,[data-v-3b87158c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-3b87158c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-3b87158c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-3b87158c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-3b87158c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-3b87158c]{font-size:65%}}body[data-v-3b87158c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-3b87158c]{padding:0}}[data-v-3b87158c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::-webkit-scrollbar{height:8px;width:8px}[data-v-3b87158c]::-webkit-scrollbar-track{background:transparent}[data-v-3b87158c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-3b87158c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-3b87158c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-3b87158c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-3b87158c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes spin-3b87158c{to{transform:rotate(1turn)}}.slide-in-left[data-v-3b87158c]{animation:slide-in-left-3b87158c .5s ease-out forwards}.button-primary[data-v-3b87158c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-3b87158c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-3b87158c]{opacity:.4}.floating-element[data-v-3b87158c]{animation:float-3b87158c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-3b87158c]{height:100vh!important;overflow:hidden!important}.spinner[data-v-3b87158c]{animation:spin-3b87158c 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-3b87158c]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-3b87158c]{filter:blur(3px)}.error-message[data-v-3b87158c]{animation:slideFadeInUp-3b87158c .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-3b87158c]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-3b87158c]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-3b87158c]{text-align:left}.landing[data-v-3b87158c]{overflow-x:hidden}.landing__top[data-v-3b87158c]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-3b87158c]{display:flex}}.landing__topleft[data-v-3b87158c]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-3b87158c]{display:block;width:100%}}.landing__topleft--auth[data-v-3b87158c]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-3b87158c]{padding:0;width:auto}}.landing__topright[data-v-3b87158c],.landing__topright--img[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-3b87158c]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-3b87158c]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-3b87158c]{display:none}}.landing__content[data-v-3b87158c]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-3b87158c]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-3b87158c]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-3b87158c]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable[data-v-3b87158c]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-3b87158c]{overflow:hidden}}.admintable__top[data-v-3b87158c]{align-items:center;display:flex;justify-content:space-between;margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-3b87158c]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-3b87158c]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-3b87158c]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-3b87158c]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-3b87158c]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-3b87158c]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-3b87158c]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-3b87158c]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-3b87158c]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-3b87158c]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-3b87158c]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-3b87158c]{padding:.6rem}}.admintable__searchinput svg[data-v-3b87158c]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-3b87158c]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-3b87158c]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-3b87158c]{font-size:1.2rem}}.admintable__content--link[data-v-3b87158c]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-3b87158c]{align-items:center;display:flex}.admintable__content--asset a[data-v-3b87158c]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-3b87158c]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-3b87158c]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-3b87158c]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-3b87158c]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-3b87158c]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-3b87158c]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-3b87158c]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-3b87158c]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-3b87158c]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-3b87158c]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-3b87158c]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-3b87158c]{background:#249b48}.admintable__headerarea--section button.logout[data-v-3b87158c]{background:transparent}.admintable__headerarea--section button.logout[data-v-3b87158c]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-3b87158c]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-3b87158c]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-3b87158c]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-3b87158c]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-3b87158c]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-3b87158c]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-3b87158c],.admintable__table th[data-v-3b87158c]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-3b87158c]:first-child,.admintable__table td[data-v-3b87158c]:nth-child(2),.admintable__table th[data-v-3b87158c]:first-child,.admintable__table th[data-v-3b87158c]:nth-child(2){text-align:left}.admintable__table td[data-v-3b87158c]{border-bottom:1px solid #fff}.admintable__table th[data-v-3b87158c]:first-child{width:4%}.admintable__table th[data-v-3b87158c]:nth-child(2){width:18%}.admintable__table th[data-v-3b87158c]:nth-child(3){width:2%}.admintable__table th[data-v-3b87158c]:nth-child(4){width:10%}.admintable__table th[data-v-3b87158c]:nth-child(5),.admintable__table th[data-v-3b87158c]:nth-child(6){width:12%}.admintable__table th[data-v-3b87158c]:nth-child(7),.admintable__table th[data-v-3b87158c]:nth-child(8),.admintable__table th[data-v-3b87158c]:nth-child(9){width:8%}.admintable__table th[data-v-3b87158c]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-3b87158c]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-3b87158c]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-3b87158c]{left:10px}.admintable__table td[data-v-3b87158c]:first-child,.admintable__table th[data-v-3b87158c]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-3b87158c]:nth-child(2),.admintable__table th[data-v-3b87158c]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-3b87158c]:nth-child(3),.admintable__table th[data-v-3b87158c]:nth-child(3){display:none;width:0}.admintable__table td[data-v-3b87158c]:nth-child(4),.admintable__table th[data-v-3b87158c]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-3b87158c]:nth-child(5),.admintable__table td[data-v-3b87158c]:nth-child(6),.admintable__table td[data-v-3b87158c]:nth-child(8),.admintable__table td[data-v-3b87158c]:nth-child(9),.admintable__table th[data-v-3b87158c]:nth-child(5),.admintable__table th[data-v-3b87158c]:nth-child(6),.admintable__table th[data-v-3b87158c]:nth-child(8),.admintable__table th[data-v-3b87158c]:nth-child(9){display:none;width:0}.admintable__table td[data-v-3b87158c]:nth-child(7),.admintable__table th[data-v-3b87158c]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-3b87158c]:nth-child(10),.admintable__table th[data-v-3b87158c]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-3b87158c]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-3b87158c]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-3b87158c],.admintable__editinputarea textarea[data-v-3b87158c]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-3b87158c]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-3b87158c]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-3b87158c]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-3b87158c]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-3b87158c]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-3b87158c]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-3b87158c]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-3b87158c]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-3b87158c]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-3b87158c],.admintable__pagination--total[data-v-3b87158c]{color:#fff;font-weight:600}.admintable__actions[data-v-3b87158c]{position:relative}.admintable__actions--dropdown-button[data-v-3b87158c]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-3b87158c]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-3b87158c]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-3b87158c]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-3b87158c]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-3b87158c]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-3b87158c]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-3b87158c]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-3b87158c]{color:#fff}.admintable__actions--savebtn.delete[data-v-3b87158c]{background:red;color:#fff}.loading-animation[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.loading-animation figure[data-v-3b87158c]{animation:float-3b87158c 1.5s ease-in-out infinite alternate;border-radius:100%;height:3rem;overflow:hidden;width:3rem}.loading-animation figure img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@keyframes float-3b87158c{0%{transform:translateY(0)}to{transform:translateY(-10px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("c6d1a5c6", content, true, context)
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_d447c218_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_d447c218_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_d447c218_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_d447c218_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_d447c218_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-d447c218],[data-v-d447c218]:after,[data-v-d447c218]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-d447c218]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-d447c218]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-d447c218]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-d447c218]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-d447c218]{font-size:65%}}body[data-v-d447c218]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-d447c218]{padding:0}}[data-v-d447c218]::-moz-selection{background-color:#249b48;color:#fff}[data-v-d447c218]::selection{background-color:#249b48;color:#fff}[data-v-d447c218]::-webkit-scrollbar{height:8px;width:8px}[data-v-d447c218]::-webkit-scrollbar-track{background:transparent}[data-v-d447c218]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-d447c218]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-d447c218]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-d447c218{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-d447c218{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-d447c218{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-d447c218{to{transform:rotate(1turn)}}.slide-in-left[data-v-d447c218]{animation:slide-in-left-d447c218 .5s ease-out forwards}.button-primary[data-v-d447c218]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-d447c218]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-d447c218]{opacity:.4}.floating-element[data-v-d447c218]{animation:float-d447c218 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-d447c218]{height:100vh!important;overflow:hidden!important}.spinner[data-v-d447c218]{animation:spin-d447c218 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-d447c218]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-d447c218]{filter:blur(3px)}.error-message[data-v-d447c218]{animation:slideFadeInUp-d447c218 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-d447c218]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-d447c218]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-d447c218]{text-align:left}.landing[data-v-d447c218]{overflow-x:hidden}.landing__top[data-v-d447c218]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-d447c218]{display:flex}}.landing__topleft[data-v-d447c218]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-d447c218]{display:block;width:100%}}.landing__topleft--auth[data-v-d447c218]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-d447c218]{padding:0;width:auto}}.landing__topright[data-v-d447c218],.landing__topright--img[data-v-d447c218]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-d447c218]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-d447c218]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-d447c218]{display:none}}.landing__content[data-v-d447c218]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-d447c218]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-d447c218]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-d447c218]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-d447c218]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable[data-v-d447c218]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-d447c218]{overflow:hidden}}.admintable__top[data-v-d447c218]{align-items:center;display:flex;justify-content:space-between;margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-d447c218]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-d447c218]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-d447c218]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-d447c218]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-d447c218]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-d447c218]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-d447c218]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-d447c218]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-d447c218]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-d447c218]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-d447c218]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-d447c218]{padding:.6rem}}.admintable__searchinput svg[data-v-d447c218]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-d447c218]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-d447c218]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-d447c218]{font-size:1.2rem}}.admintable__content--link[data-v-d447c218]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-d447c218]{align-items:center;display:flex}.admintable__content--asset a[data-v-d447c218]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-d447c218]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-d447c218]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-d447c218]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-d447c218]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-d447c218]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-d447c218]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-d447c218]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-d447c218]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-d447c218]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-d447c218]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-d447c218]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-d447c218]{background:#249b48}.admintable__headerarea--section button.logout[data-v-d447c218]{background:transparent}.admintable__headerarea--section button.logout[data-v-d447c218]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-d447c218]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-d447c218]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-d447c218]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-d447c218]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-d447c218]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-d447c218]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-d447c218],.admintable__table th[data-v-d447c218]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-d447c218]:first-child,.admintable__table td[data-v-d447c218]:nth-child(2),.admintable__table th[data-v-d447c218]:first-child,.admintable__table th[data-v-d447c218]:nth-child(2){text-align:left}.admintable__table td[data-v-d447c218]{border-bottom:1px solid #fff}.admintable__table th[data-v-d447c218]:first-child{width:4%}.admintable__table th[data-v-d447c218]:nth-child(2){width:18%}.admintable__table th[data-v-d447c218]:nth-child(3){width:2%}.admintable__table th[data-v-d447c218]:nth-child(4){width:10%}.admintable__table th[data-v-d447c218]:nth-child(5),.admintable__table th[data-v-d447c218]:nth-child(6){width:12%}.admintable__table th[data-v-d447c218]:nth-child(7),.admintable__table th[data-v-d447c218]:nth-child(8),.admintable__table th[data-v-d447c218]:nth-child(9){width:8%}.admintable__table th[data-v-d447c218]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-d447c218]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-d447c218]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-d447c218]{left:10px}.admintable__table td[data-v-d447c218]:first-child,.admintable__table th[data-v-d447c218]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-d447c218]:nth-child(2),.admintable__table th[data-v-d447c218]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-d447c218]:nth-child(3),.admintable__table th[data-v-d447c218]:nth-child(3){display:none;width:0}.admintable__table td[data-v-d447c218]:nth-child(4),.admintable__table th[data-v-d447c218]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-d447c218]:nth-child(5),.admintable__table td[data-v-d447c218]:nth-child(6),.admintable__table td[data-v-d447c218]:nth-child(8),.admintable__table td[data-v-d447c218]:nth-child(9),.admintable__table th[data-v-d447c218]:nth-child(5),.admintable__table th[data-v-d447c218]:nth-child(6),.admintable__table th[data-v-d447c218]:nth-child(8),.admintable__table th[data-v-d447c218]:nth-child(9){display:none;width:0}.admintable__table td[data-v-d447c218]:nth-child(7),.admintable__table th[data-v-d447c218]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-d447c218]:nth-child(10),.admintable__table th[data-v-d447c218]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-d447c218]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-d447c218]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-d447c218],.admintable__editinputarea textarea[data-v-d447c218]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-d447c218]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-d447c218]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-d447c218]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-d447c218]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-d447c218]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-d447c218]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-d447c218]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-d447c218]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-d447c218]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-d447c218],.admintable__pagination--total[data-v-d447c218]{color:#fff;font-weight:600}.admintable__actions[data-v-d447c218]{position:relative}.admintable__actions--dropdown-button[data-v-d447c218]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-d447c218]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-d447c218]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-d447c218]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-d447c218]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-d447c218]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-d447c218]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-d447c218]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-d447c218]{color:#fff}.admintable__actions--savebtn.delete[data-v-d447c218]{background:red;color:#fff}.chatoption[data-v-d447c218]{background-color:#fff;border:2px solid rgba(36,155,72,.5);border-radius:1rem;display:flex;justify-content:space-between;margin-bottom:2rem;padding:2rem 1.5rem}.chatoption__loader[data-v-d447c218]{align-items:center;display:flex;height:12rem;justify-content:center}.chatoption__left[data-v-d447c218]{display:flex}.chatoption__details--productname[data-v-d447c218]{font-size:1.2rem;font-weight:500}.chatoption__details--name[data-v-d447c218]{font-size:1.5rem;font-weight:600;margin-bottom:1rem}.chatoption__details--price[data-v-d447c218]{display:flex;font-size:1.6rem;font-weight:600}.chatoption__details--price span[data-v-d447c218]{color:#249b48;font-size:600}.chatoption__details--productquantity[data-v-d447c218]{align-items:center;display:flex;margin-top:1rem}.chatoption__details--productquantity span[data-v-d447c218]{align-items:center;display:flex;font-size:1.2rem;font-weight:500;margin-right:.5rem}.chatoption__details--producttotal[data-v-d447c218]{align-items:center;display:flex}.chatoption__details--producttotal span[data-v-d447c218]{align-items:center;display:flex;font-size:1.2rem;font-weight:500;margin-right:.5rem}.chatoption__right[data-v-d447c218]{align-items:flex-end;display:flex;flex-direction:column;justify-content:space-between}.chatoption__img[data-v-d447c218]{border-radius:1rem;height:10rem;margin-right:.5rem;overflow:hidden;width:10rem}.chatoption__img img[data-v-d447c218]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption__quantity[data-v-d447c218]{display:grid;grid-template-columns:repeat(3,1fr)}span[data-v-d447c218]{align-items:center;display:flex;justify-content:center}span.quantity[data-v-d447c218]{font-size:1.5rem;font-weight:600}span.svg[data-v-d447c218]{border:1px solid rgba(36,155,72,.5);border-radius:.5rem;padding:.5rem}span.svg svg[data-v-d447c218]{height:2rem;width:2rem;fill:rgba(0,0,0,.5)}span.svg svg.red[data-v-d447c218]{fill:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 74:
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
var jwt_mixin = __webpack_require__(46);

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
  
  var style0 = __webpack_require__(69)
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
installComponents(component, {LoadingAnimation: __webpack_require__(56).default})


/***/ })

};;
//# sourceMappingURL=chat-options.js.map