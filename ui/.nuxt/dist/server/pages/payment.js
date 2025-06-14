exports.ids = [34];
exports.modules = {

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("42fd2b6e", content, true, context)
};

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_c07828c6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_c07828c6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_c07828c6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_c07828c6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_c07828c6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-c07828c6],[data-v-c07828c6]:after,[data-v-c07828c6]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-c07828c6]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-c07828c6]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-c07828c6]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-c07828c6]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-c07828c6]{font-size:65%}}body[data-v-c07828c6]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-c07828c6]{padding:0}}[data-v-c07828c6]::-moz-selection{background-color:#249b48;color:#fff}[data-v-c07828c6]::selection{background-color:#249b48;color:#fff}[data-v-c07828c6]::-webkit-scrollbar{height:8px;width:8px}[data-v-c07828c6]::-webkit-scrollbar-track{background:transparent}[data-v-c07828c6]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-c07828c6]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-c07828c6]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-c07828c6{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-c07828c6{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-c07828c6{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-c07828c6{to{transform:rotate(1turn)}}.slide-in-left[data-v-c07828c6]{animation:slide-in-left-c07828c6 .5s ease-out forwards}.button-primary[data-v-c07828c6]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-c07828c6]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-c07828c6]{opacity:.4}.floating-element[data-v-c07828c6]{animation:float-c07828c6 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-c07828c6]{height:100vh!important;overflow:hidden!important}.spinner[data-v-c07828c6]{animation:spin-c07828c6 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-c07828c6]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-c07828c6]{filter:blur(3px)}.error-message[data-v-c07828c6]{animation:slideFadeInUp-c07828c6 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-c07828c6]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-c07828c6]{overflow-x:hidden}.landing__top[data-v-c07828c6]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-c07828c6]{display:flex}}.landing__topleft[data-v-c07828c6]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-c07828c6]{display:block;width:100%}}.landing__topleft--auth[data-v-c07828c6]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-c07828c6]{padding:0;width:auto}}.landing__topright[data-v-c07828c6],.landing__topright--img[data-v-c07828c6]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-c07828c6]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-c07828c6]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-c07828c6]{display:none}}.landing__content[data-v-c07828c6]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-c07828c6]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-c07828c6]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-c07828c6]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-c07828c6]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.payment[data-v-c07828c6]{background-color:#f9f9f9;min-height:100vh}.payment[data-v-c07828c6],.payment__content[data-v-c07828c6]{display:flex;justify-content:center}.payment__content[data-v-c07828c6]{max-width:500px;width:100%}.payment__iframe-box[data-v-c07828c6]{background-color:#fff;border-radius:1rem;box-shadow:0 4px 20px rgba(0,0,0,.1);height:650px;overflow:hidden;width:100%}.payment__iframe[data-v-c07828c6]{border:none;height:100%;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/payment.vue?vue&type=template&id=c07828c6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "payment"
  }, [_vm._ssrNode("<div class=\"payment__content\" data-v-c07828c6>" + (_vm.authorizationUrl ? "<div class=\"payment__iframe-box\" data-v-c07828c6><iframe" + _vm._ssrAttr("src", _vm.authorizationUrl) + " frameborder=\"0\" allowpaymentrequest class=\"payment__iframe\" data-v-c07828c6></iframe></div>" : "<!---->") + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/payment.vue?vue&type=template&id=c07828c6&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/payment.vue?vue&type=script&lang=js



/* harmony default export */ var paymentvue_type_script_lang_js = ({
  data() {
    return {
      authorizationUrl: null
    };
  },
  mixins: [jwt_mixin["a" /* default */]],
  mounted() {
    this.generatePaymentLink();
  },
  methods: {
    async generatePaymentLink() {
      try {
        const validToken = await this.getValidToken();
        const checkout_id = this.$route.query.checkout_id;
        const response = await fetch(`${api["b" /* serverurl */]}/shopper/paystack/generate-paystack-link?checkout_id=${checkout_id}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${validToken}`,
            'Content-Type': 'application/json'
          }
        });
        await Object(api["a" /* handleFetchError */])(response);
        const data = await response.json();
        const paystackdata = data.data;
        const {
          authorizationUrl,
          reference,
          accessCode
        } = paystackdata;
        this.authorizationUrl = authorizationUrl;
        console.log('Paystack link generated:', authorizationUrl, reference, accessCode);
        // maybe redirect or show the link?
      } catch (error) {
        console.error('Network or server error:', error);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/payment.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_paymentvue_type_script_lang_js = (paymentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/payment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(149)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_paymentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c07828c6",
  "7125c5f5"
  
)

/* harmony default export */ var payment = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
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

/***/ })

};;
//# sourceMappingURL=payment.js.map