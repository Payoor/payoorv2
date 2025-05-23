exports.ids = [24,1,3,7];
exports.modules = {

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("608ebd02", content, true, context)
};

/***/ }),

/***/ 120:
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

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_2ad710b8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_2ad710b8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_2ad710b8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_2ad710b8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_2ad710b8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-2ad710b8],[data-v-2ad710b8]:after,[data-v-2ad710b8]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-2ad710b8]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-2ad710b8]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-2ad710b8]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-2ad710b8]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-2ad710b8]{font-size:65%}}body[data-v-2ad710b8]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-2ad710b8]{padding:0}}[data-v-2ad710b8]::-moz-selection{background-color:#249b48;color:#fff}[data-v-2ad710b8]::selection{background-color:#249b48;color:#fff}[data-v-2ad710b8]::-webkit-scrollbar{height:8px;width:8px}[data-v-2ad710b8]::-webkit-scrollbar-track{background:transparent}[data-v-2ad710b8]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-2ad710b8]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-2ad710b8]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-2ad710b8{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-2ad710b8{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-2ad710b8{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-2ad710b8]{animation:slide-in-left-2ad710b8 .5s ease-out forwards}.button-primary[data-v-2ad710b8]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-2ad710b8]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-2ad710b8]{opacity:.4}.floating-element[data-v-2ad710b8]{animation:float-2ad710b8 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-2ad710b8]{height:100vh!important;overflow:hidden!important}.spinner[data-v-2ad710b8]{animation:spin-2ad710b8 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-2ad710b8]{stroke:#249b48;stroke-linecap:round}.checkout__header[data-v-2ad710b8]{left:0;position:fixed;top:0;width:100vw;z-index:6}.checkout__header.auth[data-v-2ad710b8],.checkout__header.unauth[data-v-2ad710b8]{background:transparent}@media only screen and (max-width:56.25em){.checkout__header.auth[data-v-2ad710b8]{background:#fff}}.checkout__section[data-v-2ad710b8]{border:1px solid #249b48;border-radius:1rem;margin-bottom:2rem;padding:1rem 1.5rem}.checkout__section--header[data-v-2ad710b8]{align-items:center;display:flex;margin-bottom:.5rem}.checkout__section--header h2[data-v-2ad710b8]{font-size:1.3rem;margin-right:.5rem}.checkout__section--header h2[data-v-2ad710b8],.checkout__section--header span[data-v-2ad710b8]{align-items:center;display:flex}.checkout__section--header span.required[data-v-2ad710b8]{color:red}.checkout__section--value[data-v-2ad710b8]{font-size:1.5rem}.checkout__section--value.faint[data-v-2ad710b8]{color:rgba(0,0,0,.7)}.checkout__section--btn[data-v-2ad710b8]{margin-top:1rem}.checkout__section--btn button[data-v-2ad710b8]{border-radius:3rem;font-size:1.5rem;padding:.6rem 1.6rem}.checkout__deliverydates[data-v-2ad710b8]{display:flex;overflow:hidden;overflow-x:scroll;scrollbar-width:none;-ms-overflow-style:none}.checkout__deliverydates[data-v-2ad710b8]::-webkit-scrollbar{display:none;height:6px}.checkout__deliverydates[data-v-2ad710b8]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.checkout__deliverydates[data-v-2ad710b8]::-webkit-scrollbar-thumb:hover{background-color:transparent}.checkout__datecard[data-v-2ad710b8]{align-items:center;border:1px solid #249b48;border-radius:1rem;display:flex;flex-direction:column;flex-shrink:0;justify-content:space-between;margin-right:2rem;padding:1rem;width:7rem}.checkout__datecard.current-deliverydate[data-v-2ad710b8]{background:#249b48;color:#fff}.checkout__datecard.current-deliverydate span[data-v-2ad710b8]{font-weight:600}.checkout__datecard span.number[data-v-2ad710b8],.checkout__datecard.current-deliverydate span.number[data-v-2ad710b8]{font-size:1.7rem;font-weight:600}.checkout__inputs[data-v-2ad710b8]{background:rgba(0,0,0,.7);display:flex;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:6}.checkout__inputs--body[data-v-2ad710b8]{width:60rem}@media only screen and (max-width:56.25em){.checkout__inputs--body[data-v-2ad710b8]{width:100%}}.checkout__input[data-v-2ad710b8]{min-height:21rem;width:60rem}@media only screen and (max-width:56.25em){.checkout__input[data-v-2ad710b8]{width:100%}}.checkout__inputcontent[data-v-2ad710b8]{align-items:center;background:#fff;border-radius:2rem 2rem 0 0;bottom:0;display:flex;flex-direction:column;left:0;padding:2rem;position:fixed;width:100%}@media only screen and (max-width:56.25em){.checkout__inputcontent[data-v-2ad710b8]{display:block}}.checkout__inputcontent h2[data-v-2ad710b8]{color:rgba(0,0,0,.7);font-size:1.2rem;font-style:italic;font-weight:500;line-height:2rem;margin-bottom:1.5rem}.checkout__field[data-v-2ad710b8]{background:transparent;background:#333;border:none;border-radius:1rem;color:#fff;font-size:2.1rem;line-height:1.5;max-height:15rem;min-height:3rem;outline:none;overflow-y:auto;padding:1rem;resize:none;width:100%}.checkout__field[type=tel][data-v-2ad710b8]{height:auto;max-height:none;resize:none}.checkout__summary[data-v-2ad710b8]{width:60rem}@media only screen and (max-width:56.25em){.checkout__summary[data-v-2ad710b8]{width:auto}}.checkout__summaryitem[data-v-2ad710b8]{display:flex;justify-content:space-between;margin-bottom:1rem}.checkout__summaryitem span.subject[data-v-2ad710b8]{color:#249b48;font-size:1.4rem;font-weight:600}.checkout__summaryitem span.value[data-v-2ad710b8]{color:#000;font-size:1.4rem;font-weight:600}.checkout__bottom[data-v-2ad710b8]{background:#fff;bottom:0;display:flex;justify-content:center;left:0;padding:1rem 1rem 2rem;position:fixed;width:100vw;z-index:4}@media only screen and (max-width:56.25em){.checkout__bottom[data-v-2ad710b8]{display:block}}.checkout__bottom button[data-v-2ad710b8]{font-size:2rem;padding:2rem;width:60rem}@media only screen and (max-width:56.25em){.checkout__bottom button[data-v-2ad710b8]{width:100%}}.checkout__content[data-v-2ad710b8]{align-items:center;background:#fff;display:flex;flex-direction:column;padding-bottom:20rem;padding-top:4rem;position:relative}@media only screen and (max-width:37.5em){.checkout__content[data-v-2ad710b8]{display:block;padding:7rem 1rem 30rem}}.checkout__content--body[data-v-2ad710b8]{width:60rem}@media only screen and (max-width:56.25em){.checkout__content--body[data-v-2ad710b8]{width:100%}}.checkout__currentlocation--btn[data-v-2ad710b8]{background:transparent;border:1px solid #249b48;border-radius:12px;color:#249b48;display:inline-block;font-size:1.2rem;font-weight:500;margin-bottom:1rem;padding:1rem;position:relative}.checkout__currentlocation--btn .loader[data-v-2ad710b8]{animation:spin-2ad710b8 .8s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#249b48;display:inline-block;height:1.4rem;margin-right:.5rem;vertical-align:middle;width:1.4rem}@keyframes spin-2ad710b8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=template&id=2ad710b8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"checkout\" data-v-2ad710b8>", "</div>", [_vm._ssrNode("<div class=\"checkout__header\" data-v-2ad710b8>", "</div>", [_c('ChatHeader', {
    attrs: {
      "name": 'Checkout',
      "logovisible": false,
      "jwt": true,
      "backRoute": '/cart'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"checkout__content\" data-v-2ad710b8>", "</div>", [_vm._ssrNode("<div class=\"checkout__data checkout__content--body\" data-v-2ad710b8><div class=\"checkout__section\" data-v-2ad710b8><div class=\"checkout__section--header\" data-v-2ad710b8><h2 data-v-2ad710b8>Delivery Address</h2> <span class=\"required\" data-v-2ad710b8>*</span></div> <div" + _vm._ssrClass("checkout__section--value", {
    ..._vm.faint(_vm.delivery_address)
  }) + " data-v-2ad710b8><p data-v-2ad710b8>" + _vm._ssrEscape(_vm._s(_vm.delivery_address.length ? _vm.delivery_address : 'None Specified')) + "</p></div> <div class=\"checkout__section--btn\" data-v-2ad710b8><button class=\"button-primary\" data-v-2ad710b8>Change</button></div></div> <div class=\"checkout__section\" data-v-2ad710b8><div class=\"checkout__section--header\" data-v-2ad710b8><h2 data-v-2ad710b8>Phone Number</h2> <span class=\"required\" data-v-2ad710b8>*</span></div> <div" + _vm._ssrClass("checkout__section--value", {
    ..._vm.faint(_vm.phone_number)
  }) + " data-v-2ad710b8><p data-v-2ad710b8>" + _vm._ssrEscape(_vm._s(_vm.phone_number.length ? _vm.phone_number : 'None Specified')) + "</p></div> <div class=\"checkout__section--btn\" data-v-2ad710b8><button class=\"button-primary\" data-v-2ad710b8>\n                            Add Phone Number\n                        </button></div></div> <div class=\"checkout__section\" data-v-2ad710b8><div class=\"checkout__section--header\" data-v-2ad710b8><h2 data-v-2ad710b8>Delivery Date</h2> <span class=\"required\" data-v-2ad710b8>*</span></div> <div class=\"checkout__deliverydates\" data-v-2ad710b8>" + _vm._ssrList(_vm.getNext7Days, function (date_card, index) {
    return "<div" + _vm._ssrClass("checkout__datecard", {
      'current-deliverydate': _vm.delivery_date && _vm.delivery_date.id === index
    }) + " data-v-2ad710b8><span data-v-2ad710b8>" + _vm._ssrEscape(_vm._s(date_card.day)) + "</span> <span class=\"number\" data-v-2ad710b8>" + _vm._ssrEscape(_vm._s(date_card.date)) + "</span> <span data-v-2ad710b8>" + _vm._ssrEscape(_vm._s(date_card.month)) + "</span></div>";
  }) + "</div></div> <div class=\"checkout__section\" data-v-2ad710b8><div class=\"checkout__section--header\" data-v-2ad710b8><h2 data-v-2ad710b8>Delivery Instruction</h2> <span class=\"required\" data-v-2ad710b8></span></div> <div" + _vm._ssrClass("checkout__section--value", {
    ..._vm.faint(_vm.delivery_instruction)
  }) + " data-v-2ad710b8><p data-v-2ad710b8>" + _vm._ssrEscape(_vm._s(_vm.delivery_instruction.length ? _vm.delivery_instruction : 'None')) + "</p></div> <div class=\"checkout__section--btn\" data-v-2ad710b8><button class=\"button-primary\" data-v-2ad710b8>Specify</button></div></div> <div class=\"checkout__section\" data-v-2ad710b8><div class=\"checkout__section--header\" data-v-2ad710b8><h2 data-v-2ad710b8>Promo code</h2> <span class=\"required\" data-v-2ad710b8></span></div> <div" + _vm._ssrClass("checkout__section--value", {
    ..._vm.faint(_vm.promo_code)
  }) + " data-v-2ad710b8><p data-v-2ad710b8>" + _vm._ssrEscape(_vm._s(_vm.promo_code.length ? _vm.promo_code : 'None')) + "</p></div> <div class=\"checkout__section--btn\" data-v-2ad710b8><button class=\"button-primary\" data-v-2ad710b8>Use\n                            promo\n                            code</button></div></div></div> "), _vm.place_holder ? _vm._ssrNode("<div class=\"checkout__inputs\" data-v-2ad710b8>", "</div>", [_vm._ssrNode("<div class=\"checkout__inputs--body\" data-v-2ad710b8>", "</div>", [_vm._ssrNode("<div class=\"checkout__inputcontent slide-fade-in-up\" data-v-2ad710b8>", "</div>", [_vm._ssrNode("<h2 class=\"checkout__inputcontent--h2\" data-v-2ad710b8>" + _vm._ssrEscape(_vm._s(_vm.input_label)) + "</h2> "), _vm.input_label === 'Delivery address' ? _vm._ssrNode("<div data-v-2ad710b8>", "</div>", [_c('AddressList', {
    attrs: {
      "query": _vm.checkout_inputs[_vm.checkout_input],
      "selectAddressFromList": _vm.selectAddressFromList,
      "checkout_input": _vm.checkout_input
    }
  })], 1) : _vm._e(), _vm._ssrNode(" " + (_vm.input_label === 'Delivery address' ? "<div data-v-2ad710b8><div class=\"checkout__currentlocation\" data-v-2ad710b8><span class=\"checkout__currentlocation--btn\" data-v-2ad710b8>" + (!_vm.locationLoading ? "\n                                        📍 Use Your Current Location\n                                    " : "<span class=\"loader\" data-v-2ad710b8></span> Getting location...\n                                    ") + "</span></div></div>" : "<!---->") + " <div class=\"checkout__input\" data-v-2ad710b8><textarea" + _vm._ssrAttr("placeholder", _vm.place_holder) + " class=\"checkout__field\" data-v-2ad710b8>" + _vm._ssrEscape(_vm._s(_vm.checkout_inputs[_vm.checkout_input])) + "</textarea></div> <div class=\"checkout__bottom\" data-v-2ad710b8><button class=\"button-primary\" data-v-2ad710b8>Done</button></div>")], 2)])]) : _vm._e(), _vm._ssrNode(" <div class=\"checkout__summary\" data-v-2ad710b8><div class=\"checkout__summaryitem\" data-v-2ad710b8><span class=\"subject\" data-v-2ad710b8>Sub-total</span> <span class=\"value\" data-v-2ad710b8>" + _vm._ssrEscape("₦" + _vm._s(_vm.subtotal)) + "</span></div> <div class=\"checkout__summaryitem\" data-v-2ad710b8><span class=\"subject\" data-v-2ad710b8>Delivery Fee</span> <span class=\"value\" data-v-2ad710b8>" + _vm._ssrEscape("₦" + _vm._s(_vm.delivery_fee)) + "</span></div> <div class=\"checkout__summaryitem\" data-v-2ad710b8><span class=\"subject\" data-v-2ad710b8>Service Charge</span> <span class=\"value\" data-v-2ad710b8>" + _vm._ssrEscape("₦" + _vm._s(_vm.service_charge)) + "</span></div> <div class=\"checkout__summaryitem\" data-v-2ad710b8><span class=\"subject\" data-v-2ad710b8>Total</span> <span class=\"value\" data-v-2ad710b8>" + _vm._ssrEscape("₦" + _vm._s(_vm.total)) + "</span></div></div> <div class=\"checkout__bottom\" data-v-2ad710b8><div class=\"checkout__content--body\" data-v-2ad710b8>" + (!_vm.allowOrderCreation ? "<button class=\"button-primary disabled-btn\" data-v-2ad710b8>Confirm\n                        Order</button>" : "<!---->") + " " + (_vm.allowOrderCreation ? "<button" + _vm._ssrClass("button-primary", {
    'disabled-btn': _vm.loading
  }) + " data-v-2ad710b8>" + _vm._ssrEscape(_vm._s(_vm.loading ? 'Creating your order...' : `Confirm
                        Order`)) + "</button>" : "<!---->") + "</div></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=template&id=2ad710b8&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(41);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(42);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=script&lang=js



/* harmony default export */ var checkoutvue_type_script_lang_js = ({
  mixins: [jwt_mixin["a" /* default */]],
  data() {
    return {
      delivery_address: "",
      delivery_date: null,
      delivery_instruction: "",
      promo_code: "",
      subtotal: 0,
      delivery_fee: 0,
      service_charge: 0,
      total: 0,
      input_label: '',
      place_holder: false,
      phone_number: '',
      checkout_inputs: {},
      checkout_input: null,
      locationLoading: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])("cart", {
      //cartTotal: (state) => state.total,
      cartItems: state => state.items,
      cartTotalItems: state => state.totalItems
    }),
    allowOrderCreation() {
      const ready = this.delivery_address.trim().length > 0 && this.delivery_date !== null && this.subtotal > 0;

      //console.log('Allow Order Creation:', ready);
      return ready;
    },
    getNext7Days() {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const result = [];
      for (let i = 0; i < 7; i++) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + i);
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
          servicecharge
        } = data;
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
        console.log(newcheckout);
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
    }
  }
});
// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_checkoutvue_type_script_lang_js = (checkoutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/checkout.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(132)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_checkoutvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2ad710b8",
  "2b012367"
  
)

/* harmony default export */ var pages_checkout = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatHeader: __webpack_require__(48).default,AddressList: __webpack_require__(120).default})


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

/***/ 42:
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

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("07bc124a", content, true, context)
};

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartButton.vue?vue&type=template&id=4801e665&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cartbtn"
  }, [_vm._ssrNode((!_vm.showicon ? "<div class=\"cartbtn__icon--amount\" data-v-4801e665><p data-v-4801e665>" + _vm._ssrEscape("₦" + _vm._s(_vm.cartTotal)) + "</p></div>" : "<!---->") + " " + (_vm.showicon ? "<div" + _vm._ssrClass(null, {
    'disabled-btn': !_vm.cartLength || _vm.cartLength === 0
  }) + " data-v-4801e665><div class=\"cartbtn__icon\" data-v-4801e665>" + (_vm.cartLength !== 0 ? "<div class=\"cartbtn__icon--total\" data-v-4801e665><span data-v-4801e665>" + _vm._ssrEscape(_vm._s(_vm.cartLength === 0 ? '' : _vm.cartLength)) + "</span></div>" : "<!---->") + " <svg data-v-4801e665><use xlink:href=\"/svg/symbol-defs.svg#icon-shopping-bag\" data-v-4801e665></use></svg></div></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CartButton.vue?vue&type=template&id=4801e665&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartButton.vue?vue&type=script&lang=js

/* harmony default export */ var CartButtonvue_type_script_lang_js = ({
  props: ['showicon'],
  computed: {
    ...Object(external_vuex_["mapState"])("cart", {
      cartTotal: state => state.total,
      cartLength: state => state.totalItems.length
    })
  },
  methods: {
    openCart() {
      if (this.cartLength === 0) {
        return;
      }
      this.$router.push({
        path: '/cart',
        query: {
          ...this.$route.query
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./components/CartButton.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CartButtonvue_type_script_lang_js = (CartButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CartButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CartButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4801e665",
  "0826af36"
  
)

/* harmony default export */ var CartButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("11cadb1b", content, true, context)
};

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-4801e665],[data-v-4801e665]:after,[data-v-4801e665]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-4801e665]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-4801e665]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-4801e665]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-4801e665]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-4801e665]{font-size:65%}}body[data-v-4801e665]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-4801e665]{padding:0}}[data-v-4801e665]::-moz-selection{background-color:#249b48;color:#fff}[data-v-4801e665]::selection{background-color:#249b48;color:#fff}[data-v-4801e665]::-webkit-scrollbar{height:8px;width:8px}[data-v-4801e665]::-webkit-scrollbar-track{background:transparent}[data-v-4801e665]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-4801e665]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-4801e665]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-4801e665{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-4801e665{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-4801e665{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-4801e665{to{transform:rotate(1turn)}}.slide-in-left[data-v-4801e665]{animation:slide-in-left-4801e665 .5s ease-out forwards}.button-primary[data-v-4801e665]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-4801e665]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-4801e665]{opacity:.4}.floating-element[data-v-4801e665]{animation:float-4801e665 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-4801e665]{height:100vh!important;overflow:hidden!important}.spinner[data-v-4801e665]{animation:spin-4801e665 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-4801e665]{stroke:#249b48;stroke-linecap:round}.cartbtn[data-v-4801e665]{color:#000;position:relative}.cartbtn__icon[data-v-4801e665]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-4801e665]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-4801e665]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-4801e665],.cartbtn__icon--total[data-v-4801e665]{color:#fff;font-weight:600}.cartbtn svg[data-v-4801e665]{height:80%;width:80%;fill:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=template&id=39a75015&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chat-header"
  }, [_vm._ssrNode("<div class=\"chat-header__left\" data-v-39a75015>" + (_vm.name ? "<div class=\"chat-header__name\" data-v-39a75015><span class=\"svg\" data-v-39a75015><svg data-v-39a75015><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-39a75015></use></svg></span> <span class=\"label\" data-v-39a75015>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></div>" : "<!---->") + " " + (_vm.logovisible ? "<figure" + _vm._ssrClass("chat-header__left--logo", {
    green: _vm.green
  }) + " data-v-39a75015><img src=\"/imgs/logo.png\" data-v-39a75015></figure>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"chat-header__right\" data-v-39a75015>", "</div>", [_vm._ssrNode("<div class=\"chat-header__right--cart\" data-v-39a75015>", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" <div" + _vm._ssrClass("chat-header__burger", {
    unauth: !_vm.jwt,
    green: _vm.green
  }) + " data-v-39a75015><span data-v-39a75015></span><span data-v-39a75015></span><span data-v-39a75015></span></div>")], 2), _vm._ssrNode(" "), _vm.menuopen ? _vm._ssrNode("<div" + _vm._ssrClass("chat-header__menu", {
    auth: _vm.jwt
  }) + " data-v-39a75015>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menubody slide-in-left\" data-v-39a75015>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menuitems\" data-v-39a75015>", "</div>", [_vm._ssrNode("<figure class=\"chat-header__left--logo bottom-1rem\" data-v-39a75015>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/logo.png',
      expression: "'/imgs/logo.png'"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chat-header__menuitem\" data-v-39a75015><span class=\"svg\" data-v-39a75015></span> <span class=\"label\" data-v-39a75015>About us</span></div> " + (_vm.jwt ? "<div class=\"chat-header__menuitem\" data-v-39a75015><span class=\"svg\" data-v-39a75015></span> <span class=\"label\" data-v-39a75015>Orders</span></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"chat-header__menuitems\" data-v-39a75015><div class=\"chat-header__menuitem\" data-v-39a75015><span class=\"svg\" data-v-39a75015></span></div> " + (_vm.jwt ? "<div class=\"chat-header__menuitem\" data-v-39a75015><span class=\"svg\" data-v-39a75015></span> <span class=\"label\" data-v-39a75015>Signout</span></div>" : "<!---->") + "</div>")], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=template&id=39a75015&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(41);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(42);

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
  async mounted() {
    const token = await this.getValidToken();
    if (token) {
      this.getValidUser(token);
    } else {
      this.redirectHome();
    }
    this.$store.dispatch('cart/initializeCart');
    this.menuopen = window.innerWidth > 900 && this.jwt;
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
          ...this.$route.query
        }
      });
    },
    async getValidUser(token) {
      try {
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/auth/validuser?jwttoken=${token}`);
        if (response.status !== 200) {
          localStorage.removeItem('jwt');
          return this.redirectHome();
        }
        ;
        await response.json();
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
        const token = await this.getValidToken();
        if (!token) {
          this.$emit('update:authValue', null);
          this.$router.push({
            path: '/',
            query: {
              ...this.$route.query
            }
          });
          return;
        }
        ;
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/auth/signout`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) throw new Error('Failed to sign out');
        await response.json();
        localStorage.removeItem('jwt');
        this.$emit('update:authValue', null);
        this.$router.push({
          path: '/',
          query: {
            ...this.$route.query
          }
        });
      } catch (error) {
        console.error('Sign out failed:', error.message);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatHeadervue_type_script_lang_js = (ChatHeadervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ChatHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatHeadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "39a75015",
  "5f357078"
  
)

/* harmony default export */ var ChatHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartButton: __webpack_require__(44).default})


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-39a75015],[data-v-39a75015]:after,[data-v-39a75015]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-39a75015]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-39a75015]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-39a75015]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-39a75015]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-39a75015]{font-size:65%}}body[data-v-39a75015]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-39a75015]{padding:0}}[data-v-39a75015]::-moz-selection{background-color:#249b48;color:#fff}[data-v-39a75015]::selection{background-color:#249b48;color:#fff}[data-v-39a75015]::-webkit-scrollbar{height:8px;width:8px}[data-v-39a75015]::-webkit-scrollbar-track{background:transparent}[data-v-39a75015]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-39a75015]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-39a75015]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-39a75015{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-39a75015{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-39a75015{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-39a75015{to{transform:rotate(1turn)}}.slide-in-left[data-v-39a75015]{animation:slide-in-left-39a75015 .5s ease-out forwards}.button-primary[data-v-39a75015]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-39a75015]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-39a75015]{opacity:.4}.floating-element[data-v-39a75015]{animation:float-39a75015 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-39a75015]{height:100vh!important;overflow:hidden!important}.spinner[data-v-39a75015]{animation:spin-39a75015 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-39a75015]{stroke:#249b48;stroke-linecap:round}.chat-header[data-v-39a75015]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-39a75015]{padding:2rem 1rem 1rem}}.chat-header__name[data-v-39a75015],.chat-header__name span.svg[data-v-39a75015]{align-items:center;display:flex}.chat-header__name span.svg[data-v-39a75015]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-39a75015]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-39a75015]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-39a75015]{display:none}}.chat-header__left--logo[data-v-39a75015]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-39a75015]{margin-bottom:5rem}.chat-header__left--logo img[data-v-39a75015]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-39a75015]{height:4.5rem}.chat-header__burger[data-v-39a75015]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-39a75015]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-39a75015]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-39a75015]{background:#fff}.chat-header__burger.green span[data-v-39a75015]{background:#249b48}.chat-header__menu[data-v-39a75015]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-39a75015]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-39a75015],.chat-header__menu.auth[data-v-39a75015]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-39a75015]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-39a75015]{font-size:1.8rem}}.chat-header__menuitem span[data-v-39a75015]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-39a75015]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 71:
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
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressList_vue_vue_type_style_index_0_id_0acfb111_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
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
//# sourceMappingURL=checkout.js.map