exports.ids = [34,4,8];
exports.modules = {

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6215a184", content, true, context)
};

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_1100d8bd_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_1100d8bd_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_1100d8bd_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_1100d8bd_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_1100d8bd_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-1100d8bd],[data-v-1100d8bd]:after,[data-v-1100d8bd]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-1100d8bd]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-1100d8bd]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-1100d8bd]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-1100d8bd]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-1100d8bd]{font-size:65%}}body[data-v-1100d8bd]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-1100d8bd]{padding:0}}[data-v-1100d8bd]::-moz-selection{background-color:#249b48;color:#fff}[data-v-1100d8bd]::selection{background-color:#249b48;color:#fff}[data-v-1100d8bd]::-webkit-scrollbar{height:8px;width:8px}[data-v-1100d8bd]::-webkit-scrollbar-track{background:transparent}[data-v-1100d8bd]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-1100d8bd]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-1100d8bd]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-1100d8bd{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-1100d8bd{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-1100d8bd{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-1100d8bd]{animation:slide-in-left-1100d8bd .5s ease-out forwards}.button-primary[data-v-1100d8bd]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-1100d8bd]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-1100d8bd]{opacity:.4}.floating-element[data-v-1100d8bd]{animation:float-1100d8bd 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-1100d8bd]{height:100vh!important;overflow:hidden!important}.spinner[data-v-1100d8bd]{animation:spin-1100d8bd 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-1100d8bd]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-1100d8bd]{filter:blur(3px)}.error-message[data-v-1100d8bd]{animation:slideFadeInUp-1100d8bd .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-1100d8bd]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-1100d8bd]{overflow-x:hidden}.landing__top[data-v-1100d8bd]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-1100d8bd]{display:flex}}.landing__topleft[data-v-1100d8bd]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-1100d8bd]{display:block;width:100%}}.landing__topleft--auth[data-v-1100d8bd]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-1100d8bd]{padding:0;width:auto}}.landing__topright[data-v-1100d8bd],.landing__topright--img[data-v-1100d8bd]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-1100d8bd]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-1100d8bd]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-1100d8bd]{display:none}}.landing__content[data-v-1100d8bd]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-1100d8bd]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-1100d8bd]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-1100d8bd]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-1100d8bd]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.checkout__header[data-v-1100d8bd]{left:0;position:fixed;top:0;width:100vw;z-index:6}.checkout__header.auth[data-v-1100d8bd],.checkout__header.unauth[data-v-1100d8bd]{background:transparent}@media only screen and (max-width:56.25em){.checkout__header.auth[data-v-1100d8bd]{background:#fff}}.checkout__section[data-v-1100d8bd]{border:1px solid #249b48;border-radius:1rem;margin-bottom:2rem;padding:1rem 1.5rem}.checkout__section--header[data-v-1100d8bd]{align-items:center;display:flex;margin-bottom:.5rem}.checkout__section--header h2[data-v-1100d8bd]{font-size:1.3rem;margin-right:.5rem}.checkout__section--header h2[data-v-1100d8bd],.checkout__section--header span[data-v-1100d8bd]{align-items:center;display:flex}.checkout__section--header span.required[data-v-1100d8bd]{color:red}.checkout__section--value[data-v-1100d8bd]{font-size:1.5rem}.checkout__section--value.faint[data-v-1100d8bd]{color:rgba(0,0,0,.7)}.checkout__section--btn[data-v-1100d8bd]{margin-top:1rem}.checkout__section--btn button[data-v-1100d8bd]{border-radius:3rem;font-size:1.5rem;padding:.6rem 1.6rem}.checkout__deliverydates[data-v-1100d8bd]{display:flex;overflow:hidden;overflow-x:scroll;scrollbar-width:none;-ms-overflow-style:none}.checkout__deliverydates[data-v-1100d8bd]::-webkit-scrollbar{display:none;height:6px}.checkout__deliverydates[data-v-1100d8bd]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.checkout__deliverydates[data-v-1100d8bd]::-webkit-scrollbar-thumb:hover{background-color:transparent}.checkout__datecard[data-v-1100d8bd]{align-items:center;border:1px solid #249b48;border-radius:1rem;display:flex;flex-direction:column;flex-shrink:0;justify-content:space-between;margin-right:2rem;padding:1rem;width:7rem}.checkout__datecard.current-deliverydate[data-v-1100d8bd]{background:#249b48;color:#fff}.checkout__datecard.current-deliverydate span[data-v-1100d8bd]{font-weight:600}.checkout__datecard span.number[data-v-1100d8bd],.checkout__datecard.current-deliverydate span.number[data-v-1100d8bd]{font-size:1.7rem;font-weight:600}.checkout__inputs[data-v-1100d8bd]{background:rgba(0,0,0,.7);display:flex;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:6}.checkout__inputs--body[data-v-1100d8bd]{width:60rem}@media only screen and (max-width:56.25em){.checkout__inputs--body[data-v-1100d8bd]{width:100%}}.checkout__input[data-v-1100d8bd]{min-height:21rem;width:60rem}@media only screen and (max-width:56.25em){.checkout__input[data-v-1100d8bd]{width:100%}}.checkout__inputcontent[data-v-1100d8bd]{align-items:center;background:#fff;border-radius:2rem 2rem 0 0;bottom:0;display:flex;flex-direction:column;left:0;padding:2rem;position:fixed;width:100%}@media only screen and (max-width:56.25em){.checkout__inputcontent[data-v-1100d8bd]{display:block}}.checkout__inputcontent h2[data-v-1100d8bd]{color:rgba(0,0,0,.7);font-size:1.2rem;font-style:italic;font-weight:500;line-height:2rem;margin-bottom:1.5rem}.checkout__field[data-v-1100d8bd]{background:transparent;background:#333;border:none;border-radius:1rem;color:#fff;font-size:2.1rem;line-height:1.5;max-height:15rem;min-height:3rem;outline:none;overflow-y:auto;padding:1rem;resize:none;width:100%}.checkout__field[type=tel][data-v-1100d8bd]{height:auto;max-height:none;resize:none}.checkout__summary[data-v-1100d8bd]{width:60rem}@media only screen and (max-width:56.25em){.checkout__summary[data-v-1100d8bd]{width:auto}}.checkout__summaryitem[data-v-1100d8bd]{display:flex;justify-content:space-between;margin-bottom:1rem}.checkout__summaryitem span.subject[data-v-1100d8bd]{color:#249b48;font-size:1.4rem;font-weight:600}.checkout__summaryitem span.value[data-v-1100d8bd]{color:#000;font-size:1.4rem;font-weight:600}.checkout__bottom[data-v-1100d8bd]{background:#fff;bottom:0;display:flex;justify-content:center;left:0;padding:1rem 1rem 2rem;position:fixed;width:100vw;z-index:4}@media only screen and (max-width:56.25em){.checkout__bottom[data-v-1100d8bd]{display:block}}.checkout__bottom button[data-v-1100d8bd]{font-size:2rem;padding:2rem;width:60rem}@media only screen and (max-width:56.25em){.checkout__bottom button[data-v-1100d8bd]{width:100%}}.checkout__content[data-v-1100d8bd]{align-items:center;background:#fff;display:flex;flex-direction:column;padding-bottom:20rem;padding-top:4rem;position:relative}@media only screen and (max-width:37.5em){.checkout__content[data-v-1100d8bd]{display:block;padding:7rem 1rem 30rem}}.checkout__content--body[data-v-1100d8bd]{width:60rem}@media only screen and (max-width:56.25em){.checkout__content--body[data-v-1100d8bd]{width:100%}}.checkout__currentlocation--btn[data-v-1100d8bd]{background:transparent;border:1px solid #249b48;border-radius:12px;color:#249b48;display:inline-block;font-size:1.2rem;font-weight:500;margin-bottom:1rem;padding:1rem;position:relative}.checkout__currentlocation--btn .loader[data-v-1100d8bd]{animation:spin-1100d8bd .8s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#249b48;display:inline-block;height:1.4rem;margin-right:.5rem;vertical-align:middle;width:1.4rem}@keyframes spin-1100d8bd{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.checkout__error[data-v-1100d8bd]{color:red;display:flex;font-weight:500;margin-top:1rem;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=template&id=1100d8bd&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"checkout\" data-v-1100d8bd>", "</div>", [_vm._ssrNode("<div class=\"checkout__header\" data-v-1100d8bd>", "</div>", [_c('ChatHeader', {
    attrs: {
      "name": 'Checkout',
      "logovisible": false,
      "jwt": true,
      "backRoute": _vm.$route.query.prevpage
    }
  })], 1), _vm._ssrNode(" <div class=\"checkout__content\" data-v-1100d8bd><div class=\"checkout__data checkout__content--body\" data-v-1100d8bd><div class=\"checkout__section\" data-v-1100d8bd><div class=\"checkout__section--header\" data-v-1100d8bd><h2 data-v-1100d8bd>Delivery Address</h2> <span class=\"required\" data-v-1100d8bd>*</span></div> <div" + _vm._ssrClass("checkout__section--value", {
    ..._vm.faint(_vm.delivery_address)
  }) + " data-v-1100d8bd><p data-v-1100d8bd>" + _vm._ssrEscape(_vm._s(_vm.delivery_address.length ? _vm.delivery_address : 'None Specified')) + "</p></div> <div class=\"checkout__section--btn\" data-v-1100d8bd><button class=\"button-primary\" data-v-1100d8bd>Change</button></div></div> <div class=\"checkout__section\" data-v-1100d8bd><div class=\"checkout__section--header\" data-v-1100d8bd><h2 data-v-1100d8bd>Phone Number</h2> <span class=\"required\" data-v-1100d8bd>*</span></div> <div" + _vm._ssrClass("checkout__section--value", {
    ..._vm.faint(_vm.phone_number)
  }) + " data-v-1100d8bd><p data-v-1100d8bd>" + _vm._ssrEscape(_vm._s(_vm.phone_number.length ? _vm.phone_number : 'None Specified')) + "</p></div> <div class=\"checkout__section--btn\" data-v-1100d8bd><button class=\"button-primary\" data-v-1100d8bd>\n                                Add Phone Number\n                            </button></div></div> <div class=\"checkout__section\" data-v-1100d8bd><div class=\"checkout__section--header\" data-v-1100d8bd><h2 data-v-1100d8bd>Delivery Date</h2> <span class=\"required\" data-v-1100d8bd>*</span></div> <div class=\"checkout__deliverydates\" data-v-1100d8bd>" + _vm._ssrList(_vm.deliveryDates, function (date_card, index) {
    return "<div" + _vm._ssrClass("checkout__datecard", {
      'current-deliverydate': _vm.delivery_date && _vm.delivery_date.dateid === index
    }) + " data-v-1100d8bd><span data-v-1100d8bd>" + _vm._ssrEscape(_vm._s(date_card.day)) + "</span> <span class=\"number\" data-v-1100d8bd>" + _vm._ssrEscape(_vm._s(date_card.date)) + "</span> <span data-v-1100d8bd>" + _vm._ssrEscape(_vm._s(date_card.month)) + "</span></div>";
  }) + "</div></div> <div class=\"checkout__section\" data-v-1100d8bd><div class=\"checkout__section--header\" data-v-1100d8bd><h2 data-v-1100d8bd>Delivery Instruction</h2> <span class=\"required\" data-v-1100d8bd></span></div> <div" + _vm._ssrClass("checkout__section--value", {
    ..._vm.faint(_vm.delivery_instruction)
  }) + " data-v-1100d8bd><p data-v-1100d8bd>" + _vm._ssrEscape(_vm._s(_vm.delivery_instruction.length ? _vm.delivery_instruction : 'None')) + "</p></div> <div class=\"checkout__section--btn\" data-v-1100d8bd><button class=\"button-primary\" data-v-1100d8bd>Specify</button></div></div> <div class=\"checkout__section\" data-v-1100d8bd><div class=\"checkout__section--header\" data-v-1100d8bd><h2 data-v-1100d8bd>Promo code or Coupon</h2> <span class=\"required\" data-v-1100d8bd></span></div> <div" + _vm._ssrClass("checkout__section--value", {
    ..._vm.faint(_vm.promo_code)
  }) + " data-v-1100d8bd><p data-v-1100d8bd>" + _vm._ssrEscape(_vm._s(_vm.promo_code.length ? _vm.promo_code : 'None')) + "</p></div> <div class=\"checkout__section--btn\" data-v-1100d8bd><button class=\"button-primary\" data-v-1100d8bd>Use\n                                promo\n                                code</button></div> " + (_vm.coupon_error_message ? "<div class=\"checkout__error\" data-v-1100d8bd>" + _vm._ssrEscape("\n                            ⚠️ " + _vm._s(_vm.coupon_error_message) + "\n                        ") + "</div>" : "<!---->") + "</div></div> " + (_vm.place_holder && _vm.checkout_input !== 'delivery_address' ? "<div class=\"checkout__inputs\" data-v-1100d8bd><div class=\"checkout__inputs--body\" data-v-1100d8bd><div class=\"checkout__inputcontent slide-fade-in-up\" data-v-1100d8bd><h2 class=\"checkout__inputcontent--h2\" data-v-1100d8bd>" + _vm._ssrEscape(_vm._s(_vm.input_label)) + "</h2> <div class=\"checkout__input\" data-v-1100d8bd>" + (_vm.checkout_input === 'phone_number' ? "<input type=\"tel\" inputmode=\"numeric\" pattern=\"[0-9]*\"" + _vm._ssrAttr("placeholder", _vm.place_holder) + _vm._ssrAttr("value", _vm.checkout_inputs[_vm.checkout_input]) + " class=\"checkout__field\" data-v-1100d8bd>" : "<!---->") + " " + (_vm.checkout_input === 'delivery_address' ? "<textarea" + _vm._ssrAttr("placeholder", _vm.place_holder) + " class=\"checkout__field\" data-v-1100d8bd>" + _vm._ssrEscape(_vm._s(_vm.checkout_inputs[_vm.checkout_input])) + "</textarea>" : "<!---->") + " " + (_vm.checkout_input !== 'phone_number' && _vm.checkout_input !== 'delivery_address' ? "<textarea" + _vm._ssrAttr("placeholder", _vm.place_holder) + " class=\"checkout__field\" data-v-1100d8bd>" + _vm._ssrEscape(_vm._s(_vm.checkout_inputs[_vm.checkout_input])) + "</textarea>" : "<!---->") + "</div> <div class=\"checkout__bottom\" data-v-1100d8bd><button class=\"button-primary\" data-v-1100d8bd>Done</button></div></div></div></div>" : "<!---->") + " <div class=\"checkout__summary\" data-v-1100d8bd><div class=\"checkout__summaryitem\" data-v-1100d8bd><span class=\"subject\" data-v-1100d8bd>Sub-total</span> <span class=\"value\" data-v-1100d8bd>" + _vm._ssrEscape("₦" + _vm._s(_vm.subtotal)) + "</span></div> <div class=\"checkout__summaryitem\" data-v-1100d8bd><span class=\"subject\" data-v-1100d8bd>Delivery Fee</span> <span class=\"value\" data-v-1100d8bd>" + _vm._ssrEscape("₦" + _vm._s(_vm.delivery_fee)) + "</span></div> <div class=\"checkout__summaryitem\" data-v-1100d8bd><span class=\"subject\" data-v-1100d8bd>Service Charge</span> <span class=\"value\" data-v-1100d8bd>" + _vm._ssrEscape("₦" + _vm._s(_vm.service_charge)) + "</span></div> <div class=\"checkout__summaryitem\" data-v-1100d8bd><span class=\"subject\" data-v-1100d8bd>Final Total</span> <span class=\"value\" data-v-1100d8bd>" + _vm._ssrEscape("₦" + _vm._s(_vm.total)) + "</span></div></div> <div class=\"checkout__bottom\" data-v-1100d8bd><div class=\"checkout__content--body\" data-v-1100d8bd>" + (_vm.allowOrderCreation ? "<button" + _vm._ssrClass("button-primary", {
    'disabled-btn': _vm.loading
  }) + " data-v-1100d8bd>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.loading ? _vm.applyingCoupon ? 'Applying Coupon' : 'Creating your order...' : `Confirm Order`) + "\n                        ") + "</button>" : "<button class=\"button-primary disabled-btn\" data-v-1100d8bd>\n                            Add required details to confirm\n                        </button>") + "</div></div></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=template&id=1100d8bd&scoped=true

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
      coupon_discount: {},
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
      coupon_error_message: '',
      showProcessorChoice: false,
      deliveryDates: [],
      applyingCoupon: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])("cart", {
      cartItems: state => state.items,
      cartTotalItems: state => state.totalItems,
      checkoutData: state => state.checkout
    }),
    ...Object(external_vuex_["mapState"])("user", {
      currentUser: state => state.currentUser
    }),
    ...Object(external_vuex_["mapState"])("addresslist", {
      deliveryAddress: state => state.deliveryAddress,
      checkoutInput: state => state.checkoutInput
    }),
    allowOrderCreation() {
      const ready = this.delivery_address.trim().length > 0 && this.delivery_address.trim() !== 'add a valid address' && this.delivery_date !== null && this.subtotal > 0 && this.phone_number.trim().length > 0;
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
        this.coupon_discount = {};
        //showErrorMessage('invalid coupon code')
        //this.recalculateTotal();
      }
    }
  },
  methods: {
    async callAddressSearch(event) {
      // console.log(event.target.value)
      const value = event.target.value;
      this.checkout_inputs['delivery_address'] = value;
      this.delivery_address = value;
      this.autoResize();
    },
    async reverseGeocode({
      latitude,
      longitude
    }) {
      try {
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/google/use-current-location',
          queries: {
            lat: latitude,
            lng: longitude
          },
          method: 'GET'
        });
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
      if (!this.checkoutData) {
        if (this.$route.query.checkout_id) {
          await this.$store.dispatch('cart/getCheckOutData', this.$route.query.checkout_id);
        }
      }

      // console.log(this.checkoutData, 'const { } = this.checkoutData;')

      const {
        cart_items,
        created_at,
        delivery_address,
        delivery_date,
        delivery_fee,
        delivery_instruction,
        phone_number,
        promo_code,
        promo_code_type,
        service_charge,
        subtotal,
        total,
        deliveryDates,
        user_id,
        _id
      } = this.checkoutData || {};

      //  console.log(this.checkoutData, 'this.checkoutData')

      this.phone_number = phone_number || this.currentUser.phoneNumber;
      this.delivery_address = this.$route.query.deliveryAddress ? this.$route.query.deliveryAddress : delivery_address;
      this.subtotal = subtotal;
      this.delivery_fee = delivery_fee;
      this.service_charge = service_charge;
      this.total = total;
      this.deliveryDates = deliveryDates;
      this.setDeliveryDate({
        ...delivery_date
      });
    },
    selectAddressFromList(formatted_address, checkout_input) {
      this.checkout_inputs[checkout_input] = formatted_address;
      this.delivery_address = this.checkout_inputs[checkout_input];
      this.setPlaceholder(false, false, checkout_input);
    },
    setDeliveryDate(deliver_date) {
      this.delivery_date = deliver_date;

      // console.log(this.delivery_date)
    },
    openAddressList() {
      this.$router.push({
        path: '/addresslist',
        query: {
          ...this.$route.query,
          prevpage: this.$route.path
        }
      });
    },
    async createOrder() {
      try {
        const checkoutId = this.$route.query.checkout_id;
        const finalCheckout = {
          delivery_address: this.delivery_address.trim(),
          delivery_date: this.delivery_date,
          delivery_instruction: this.delivery_instruction.trim(),
          promo_code: this.promo_code.trim(),
          phone_number: this.phone_number.trim()
        };
        this.loading = true;
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/update/checkout',
          queries: {
            checkoutId: checkoutId
          },
          method: 'POST',
          body: {
            checkout: finalCheckout
          }
        });
        const {
          updatedCheckout
        } = data;
        this.loading = false;
        this.$router.push({
          path: '/payment',
          query: {
            checkout_id: updatedCheckout._id,
            ...this.$route.query,
            prevpage: this.$route.path
          }
        });
      } catch (error) {
        console.error('Error creating order:', error);
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
      textarea.style.height = `${textarea.scrollHeight}px`;
    },
    setPlaceholder(place_holder, input_label, checkout_input) {
      this.input_label = input_label;
      this.place_holder = place_holder;
      this.checkout_input = checkout_input;
      if (checkout_input === 'delivery_address') {
        this.delivery_address = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : (this.delivery_address, this.checkout_inputs[checkout_input] = this.delivery_address);
      }
      if (checkout_input === 'phone_number') {
        this.phone_number = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : (this.phone_number, this.checkout_inputs[checkout_input] = this.phone_number);
      }
      if (checkout_input === 'delivery_instruction') {
        this.delivery_instruction = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : (this.delivery_instruction, this.checkout_inputs[checkout_input] = this.delivery_instruction);
      }
      if (checkout_input === 'promo_code') {
        this.promo_code = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : (this.promo_code, this.checkout_inputs[checkout_input] = this.promo_code);

        //console.log(this.promo_code);
      }
    },
    async applyPromoCode(code) {
      try {
        this.loading = true;
        this.applyingCoupon = true;
        const checkout_id = this.$route.query.checkout_id;
        await this.$store.dispatch('cart/applyPromoCode', {
          code,
          checkout_id
        });
        await this.initCheckout();
        this.loading = false;
        this.applyingCoupon = false;
      } catch (error) {
        this.loading = false;
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
  
  var style0 = __webpack_require__(153)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_checkoutvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1100d8bd",
  "2b012367"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatHeader: __webpack_require__(52).default})


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
  add("67444d1d", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("c64b4228", content, true, context)
};

/***/ }),

/***/ 49:
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
  "0e337d1b",
  "0826af36"
  
)

/* harmony default export */ var CartButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0e337d1b],[data-v-0e337d1b]:after,[data-v-0e337d1b]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0e337d1b]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0e337d1b]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0e337d1b]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0e337d1b]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0e337d1b]{font-size:65%}}body[data-v-0e337d1b]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0e337d1b]{padding:0}}[data-v-0e337d1b]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0e337d1b]::selection{background-color:#249b48;color:#fff}[data-v-0e337d1b]::-webkit-scrollbar{height:8px;width:8px}[data-v-0e337d1b]::-webkit-scrollbar-track{background:transparent}[data-v-0e337d1b]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0e337d1b]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0e337d1b]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0e337d1b{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0e337d1b{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0e337d1b{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-0e337d1b]{animation:slide-in-left-0e337d1b .5s ease-out forwards}.button-primary[data-v-0e337d1b]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0e337d1b]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0e337d1b]{opacity:.4}.floating-element[data-v-0e337d1b]{animation:float-0e337d1b 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0e337d1b]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0e337d1b]{animation:spin-0e337d1b 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0e337d1b]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0e337d1b]{filter:blur(3px)}.error-message[data-v-0e337d1b]{animation:slideFadeInUp-0e337d1b .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-0e337d1b]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-0e337d1b]{overflow-x:hidden}.landing__top[data-v-0e337d1b]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0e337d1b]{display:flex}}.landing__topleft[data-v-0e337d1b]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0e337d1b]{display:block;width:100%}}.landing__topleft--auth[data-v-0e337d1b]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0e337d1b]{padding:0;width:auto}}.landing__topright[data-v-0e337d1b],.landing__topright--img[data-v-0e337d1b]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0e337d1b]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0e337d1b]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0e337d1b]{display:none}}.landing__content[data-v-0e337d1b]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0e337d1b]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0e337d1b]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0e337d1b]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0e337d1b]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.cartbtn[data-v-0e337d1b]{color:#000;position:relative}.cartbtn__icon[data-v-0e337d1b]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-0e337d1b]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-0e337d1b]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-0e337d1b],.cartbtn__icon--total[data-v-0e337d1b]{color:#fff;font-weight:600}.cartbtn svg[data-v-0e337d1b]{height:80%;width:80%;fill:#fff}.loader[data-v-0e337d1b]{animation:spin-0e337d1b 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}@keyframes spin-0e337d1b{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 52:
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
var jwt_mixin = __webpack_require__(45);

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
  
  var style0 = __webpack_require__(53)
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
installComponents(component, {CartButton: __webpack_require__(49).default})


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-7f082eaa],[data-v-7f082eaa]:after,[data-v-7f082eaa]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-7f082eaa]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-7f082eaa]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-7f082eaa]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-7f082eaa]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-7f082eaa]{font-size:65%}}body[data-v-7f082eaa]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-7f082eaa]{padding:0}}[data-v-7f082eaa]::-moz-selection{background-color:#249b48;color:#fff}[data-v-7f082eaa]::selection{background-color:#249b48;color:#fff}[data-v-7f082eaa]::-webkit-scrollbar{height:8px;width:8px}[data-v-7f082eaa]::-webkit-scrollbar-track{background:transparent}[data-v-7f082eaa]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-7f082eaa]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-7f082eaa]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-7f082eaa{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-7f082eaa{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-7f082eaa{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-7f082eaa{to{transform:rotate(1turn)}}.slide-in-left[data-v-7f082eaa]{animation:slide-in-left-7f082eaa .5s ease-out forwards}.button-primary[data-v-7f082eaa]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-7f082eaa]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-7f082eaa]{opacity:.4}.floating-element[data-v-7f082eaa]{animation:float-7f082eaa 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-7f082eaa]{height:100vh!important;overflow:hidden!important}.spinner[data-v-7f082eaa]{animation:spin-7f082eaa 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-7f082eaa]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-7f082eaa]{filter:blur(3px)}.error-message[data-v-7f082eaa]{animation:slideFadeInUp-7f082eaa .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-7f082eaa]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-7f082eaa]{overflow-x:hidden}.landing__top[data-v-7f082eaa]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-7f082eaa]{display:flex}}.landing__topleft[data-v-7f082eaa]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-7f082eaa]{display:block;width:100%}}.landing__topleft--auth[data-v-7f082eaa]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-7f082eaa]{padding:0;width:auto}}.landing__topright[data-v-7f082eaa],.landing__topright--img[data-v-7f082eaa]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-7f082eaa]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-7f082eaa]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-7f082eaa]{display:none}}.landing__content[data-v-7f082eaa]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-7f082eaa]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-7f082eaa]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-7f082eaa]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-7f082eaa]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-header[data-v-7f082eaa]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-7f082eaa]{padding:2rem}}.chat-header__name[data-v-7f082eaa],.chat-header__name span.svg[data-v-7f082eaa]{align-items:center;display:flex}.chat-header__name span.svg[data-v-7f082eaa]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-7f082eaa]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-7f082eaa]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-7f082eaa]{display:none}}.chat-header__left--logo[data-v-7f082eaa]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-7f082eaa]{margin-bottom:5rem}.chat-header__left--logo img[data-v-7f082eaa]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-7f082eaa]{height:3.5rem}.chat-header__burger[data-v-7f082eaa]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-7f082eaa]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-7f082eaa]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-7f082eaa]{background:#fff}.chat-header__burger.green span[data-v-7f082eaa]{background:#249b48}.chat-header__menu[data-v-7f082eaa]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-7f082eaa]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-7f082eaa],.chat-header__menu.auth[data-v-7f082eaa]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-7f082eaa]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-7f082eaa]{font-size:1.8rem}}.chat-header__menuitem span[data-v-7f082eaa]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-7f082eaa]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=checkout.js.map