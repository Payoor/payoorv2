exports.ids = [2,12,22];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("a9bb2efe", content, true, context)
};

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OtpInput.vue?vue&type=template&id=cd089fce&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "otp-inputs"
  }, [_vm._ssrNode(_vm._ssrList(_vm.otpLength, function (digit, index) {
    return "<div class=\"otp-inputs__area\" data-v-cd089fce><input type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]*\" maxlength=\"1\"" + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("value", _vm.otpDigits[index]) + " class=\"otp-input\" data-v-cd089fce></div>";
  }))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OtpInput.vue?vue&type=template&id=cd089fce&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OtpInput.vue?vue&type=script&lang=js
/* harmony default export */ var OtpInputvue_type_script_lang_js = ({
  name: "OtpInputs",
  props: {
    otpLength: {
      type: Number,
      default: 6
    },
    modelValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$store.dispatch('user/setOtpMode', true);
  },
  beforeDestroy() {
    this.$store.dispatch('user/setOtpMode', false);
  },
  emits: ["update:modelValue"],
  data() {
    return {
      otpDigits: Array(this.otpLength).fill("")
    };
  },
  watch: {
    otpDigits: {
      handler(val) {
        this.$emit("update:modelValue", val.join(""));
      },
      deep: true
    }
  },
  methods: {
    onInput(index) {
      let val = this.otpDigits[index];
      val = val.replace(/\D/g, ""); // Remove non-digits
      this.otpDigits[index] = val.slice(0, 1); // Enforce one digit

      if (val && index < this.otpLength - 1) {
        var _this$$refs$;
        (_this$$refs$ = this.$refs[`otp${index + 1}`][0]) === null || _this$$refs$ === void 0 ? void 0 : _this$$refs$.focus();
      }
    },
    onKeydown(event, index) {
      if (event.key === "Backspace" && !this.otpDigits[index] && index > 0) {
        var _this$$refs$2;
        (_this$$refs$2 = this.$refs[`otp${index - 1}`][0]) === null || _this$$refs$2 === void 0 ? void 0 : _this$$refs$2.focus();
      }
    },
    onPaste(event) {
      event.preventDefault();
      const pastedData = (event.clipboardData || window.clipboardData).getData("text");
      const numericValue = pastedData.replace(/\D/g, "");
      const digits = [...this.otpDigits];
      for (let i = 0; i < this.otpDigits.length && i < numericValue.length; i++) {
        digits[i] = numericValue[i];
      }
      this.otpDigits = digits;
      const lastFilledIndex = Math.min(numericValue.length, this.otpDigits.length);
      const focusRef = `otp${lastFilledIndex}`;
      if (this.$refs[focusRef] && this.$refs[focusRef][0]) {
        this.$refs[focusRef][0].focus();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/OtpInput.vue?vue&type=script&lang=js
 /* harmony default export */ var components_OtpInputvue_type_script_lang_js = (OtpInputvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/OtpInput.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OtpInputvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cd089fce",
  "7d8a8992"
  
)

/* harmony default export */ var OtpInput = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_cbd46c96_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_cbd46c96_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_cbd46c96_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_cbd46c96_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_cbd46c96_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 118:
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

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("36c4e52a", content, true, context)
};

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
  
  var style0 = __webpack_require__(117)
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

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_322d114e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_322d114e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_322d114e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_322d114e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_322d114e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-322d114e],[data-v-322d114e]:after,[data-v-322d114e]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-322d114e]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-322d114e]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-322d114e]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-322d114e]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-322d114e]{font-size:65%}}body[data-v-322d114e]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-322d114e]{padding:0}}[data-v-322d114e]::-moz-selection{background-color:#249b48;color:#fff}[data-v-322d114e]::selection{background-color:#249b48;color:#fff}[data-v-322d114e]::-webkit-scrollbar{height:8px;width:8px}[data-v-322d114e]::-webkit-scrollbar-track{background:transparent}[data-v-322d114e]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-322d114e]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-322d114e]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-322d114e{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-322d114e{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-322d114e{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-322d114e{to{transform:rotate(1turn)}}.slide-in-left[data-v-322d114e]{animation:slide-in-left-322d114e .5s ease-out forwards}.button-primary[data-v-322d114e]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-322d114e]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-322d114e]{opacity:.4}.floating-element[data-v-322d114e]{animation:float-322d114e 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-322d114e]{height:100vh!important;overflow:hidden!important}.spinner[data-v-322d114e]{animation:spin-322d114e 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-322d114e]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-322d114e]{filter:blur(3px)}.error-message[data-v-322d114e]{animation:slideFadeInUp-322d114e .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-322d114e]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-322d114e]{overflow-x:hidden}.landing__top[data-v-322d114e]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-322d114e]{display:flex}}.landing__topleft[data-v-322d114e]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-322d114e]{display:block;width:100%}}.landing__topleft--auth[data-v-322d114e]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-322d114e]{padding:0;width:auto}}.landing__topright[data-v-322d114e],.landing__topright--img[data-v-322d114e]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-322d114e]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-322d114e]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-322d114e]{display:none}}.landing__content[data-v-322d114e]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-322d114e]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-322d114e]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-322d114e]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-322d114e]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@keyframes growWidth-322d114e{0%{width:0}to{width:13rem}}.auth[data-v-322d114e]{background:#b6edf2;display:flex;height:100vh;padding:1rem}.auth__logo[data-v-322d114e]{height:4rem;margin-bottom:1rem;width:auto}.auth__logo img[data-v-322d114e]{height:100%}.auth__formarea[data-v-322d114e]{padding:0 10rem;position:relative;width:100%;z-index:8}@media only screen and (max-width:56.25em){.auth__formarea[data-v-322d114e]{padding:0;transform:translateY(-4rem)}}.auth__form[data-v-322d114e]{background:#fff;border:1px solid #249b48;border-radius:1rem;margin:0 auto;min-height:3rem;padding:1rem;width:100%}.auth__form--google[data-v-322d114e]{background:transparent;background:hsla(0,0%,89%,.2);border:none;border-radius:1rem;color:#000;cursor:pointer;font-size:2rem;font-weight:600;margin-bottom:1rem;outline:none;padding:1.9rem 1rem;width:100%}.auth__form--google[data-v-322d114e],.auth__form--google span[data-v-322d114e]{align-items:center;display:flex;justify-content:center}.auth__form--google span[data-v-322d114e]:first-child{height:2rem;margin-right:.5rem;width:2rem}.auth__form--google span:first-child img[data-v-322d114e]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.auth__input[data-v-322d114e]{border-radius:1rem}.auth__input input[data-v-322d114e]{background:#fff;border:none;font-size:2rem;outline:none;padding:1rem;width:100%}.auth__method[data-v-322d114e]{padding:1rem}.auth__method button[data-v-322d114e]{background:transparent;border:none;color:#249b48;font-size:1.4rem;font-weight:600}.auth__content[data-v-322d114e]{align-items:center;background:#b6edf2;border-radius:1rem;flex-direction:column;height:65rem;margin-top:5rem;padding:3rem 1rem;position:relative}.auth__content[data-v-322d114e],.auth__or[data-v-322d114e]{display:flex;justify-content:center;width:100%}.auth__or[data-v-322d114e]{font-size:1.6rem;margin:2rem 0 1rem;text-align:center;text-transform:uppercase}.auth__button[data-v-322d114e]{margin-top:3rem}.auth__button button[data-v-322d114e]{border-radius:12px;font-size:1.8rem;font-weight:600;padding:1.8rem;width:100%}.auth__h1[data-v-322d114e]{flex-direction:column;font-size:3.7rem;font-weight:600;justify-content:center;line-height:5rem;margin-bottom:2rem;position:relative;text-align:center}.auth__h1[data-v-322d114e],.auth__h1--bottom[data-v-322d114e]{display:flex}.auth__h1--bottomp1 span[data-v-322d114e]{display:inline-block;margin-right:1rem}.auth__h1--bottomp1 span.line[data-v-322d114e]{bottom:-1.6rem;left:2rem;margin:0;position:absolute;width:13rem}.auth__h1--bottomp1 span.line img[data-v-322d114e]{height:100%;width:100%}.auth__h2[data-v-322d114e]{font-size:2rem;font-weight:500;text-align:center}.auth__htags[data-v-322d114e]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:3rem;margin-top:5rem;transform:translateY(9rem);width:100%}.auth__googlebtn[data-v-322d114e]{position:relative;z-index:4}@media only screen and (max-width:56.25em){.auth__googlebtn[data-v-322d114e]{transform:translateY(-6rem)}}.auth__cartongif[data-v-322d114e]{height:32rem;transform:translateY(5rem)}.auth__cartongif img[data-v-322d114e]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.auth__cloud[data-v-322d114e]{bottom:0;height:10rem;position:absolute;z-index:3}.auth__cloud img[data-v-322d114e]{height:100;-o-object-fit:cover;object-fit:cover;width:auto}.auth__otp--header[data-v-322d114e]{font-weight:600;margin-bottom:2rem}.auth__otp--header[data-v-322d114e],.auth__otp--resendbtn[data-v-322d114e]{color:#249b48;font-size:1.6rem;text-align:center}.auth__otp--resendbtn[data-v-322d114e]{cursor:pointer;font-weight:500;margin-top:1rem}.auth__otp--resendotp[data-v-322d114e]{-webkit-text-decoration:underline;text-decoration:underline}.auth__otp--counter[data-v-322d114e]{color:#000;font-size:1.1rem}.grow-bar[data-v-322d114e]{animation:growWidth-322d114e 1s ease-out forwards;width:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Authenticator.vue?vue&type=template&id=322d114e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "auth"
  }, [_vm._ssrNode("<div class=\"auth__content\" data-v-322d114e>", "</div>", [_vm._ssrNode("<div class=\"auth__header\" data-v-322d114e></div> <div class=\"auth__htags\" data-v-322d114e><h1 class=\"auth__h1\" data-v-322d114e><div data-v-322d114e>Your all in one</div> <div class=\"auth__h1--bottom\" data-v-322d114e><p class=\"auth__h1--bottomp1\" data-v-322d114e><span data-v-322d114e>grocery</span> <span class=\"line grow-bar\" data-v-322d114e><img src=\"/imgs/9b0498221204fb302eeee0e4809573e18a95723b.png\" data-v-322d114e></span></p> assistant\n                </div></h1> <h2 class=\"auth__h2\" data-v-322d114e>Make a list and leave the rest to us</h2></div> <figure class=\"auth__cartongif\" data-v-322d114e></figure> "), _vm._ssrNode("<div class=\"auth__formarea\" data-v-322d114e>", "</div>", [_vm._ssrNode("<div class=\"auth__form slide-fade-in-up\" data-v-322d114e>", "</div>", [_vm._ssrNode((!_vm.otp_view ? "<div class=\"auth__input\" data-v-322d114e>" + (_vm.auth_method === 'checkbox' ? "<input placeholder=\"Enter your email\" type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.value) ? _vm._i(_vm.value, null) > -1 : _vm.value) + " data-v-322d114e>" : _vm.auth_method === 'radio' ? "<input placeholder=\"Enter your email\" type=\"radio\"" + _vm._ssrAttr("checked", _vm._q(_vm.value, null)) + " data-v-322d114e>" : "<input placeholder=\"Enter your email\"" + _vm._ssrAttr("type", _vm.auth_method) + _vm._ssrAttr("value", _vm.value) + " data-v-322d114e>") + "</div>" : "<!---->") + " "), _vm.otp_view ? _vm._ssrNode("<div class=\"auth__otp\" data-v-322d114e>", "</div>", [_vm._ssrNode("<p class=\"auth__otp--header\" data-v-322d114e>We just sent you an otp</p> "), _c('OtpInput', {
    attrs: {
      "disabled": _vm.loading,
      "otpLength": 6
    },
    on: {
      "update:modelValue": _vm.handleOtpChange
    }
  }), _vm._ssrNode(" <p class=\"auth__otp--resendbtn\" data-v-322d114e>" + (_vm.allowResendOtp ? "<span class=\"auth__otp--resendotp\" data-v-322d114e>Resend\n                            OTP</span>" : "<!---->") + " " + (!_vm.allowResendOtp ? "<span class=\"auth__otp--resendotp disabled-btn\" data-v-322d114e>Resend OTP</span>" : "<!---->") + " <span class=\"auth__otp--counter\" data-v-322d114e>" + _vm._ssrEscape(_vm._s(_vm.allowResendOtpCounter)) + "</span></p>")], 2) : _vm._e(), _vm._ssrNode(" " + (!_vm.otp_view ? "<div class=\"auth__button\" data-v-322d114e>" + (_vm.allowSubmit ? "<button" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"button-primary slide-fade-in-up\" data-v-322d114e>" + (_vm.loading ? "<span data-v-322d114e><svg viewBox=\"0 0 50 50\" class=\"spinner\" data-v-322d114e><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\" class=\"path\" data-v-322d114e></circle></svg>\n                            Please wait...\n                        </span>" : "<span data-v-322d114e>Start shopping</span>") + "</button>" : "<!---->") + " " + (!_vm.allowSubmit ? "<button class=\"button-primary slide-fade-in-up disabled-btn\" data-v-322d114e>" + _vm._ssrEscape(_vm._s(_vm.loading ? `Please
                        wait...` : 'Start shopping')) + "</button>" : "<!---->") + "</div>" : "<!---->"))], 2)]), _vm._ssrNode(" <div class=\"auth__or\" data-v-322d114e><span data-v-322d114e></span></div> "), _vm._ssrNode("<div class=\"auth__googlebtn\" data-v-322d114e>", "</div>", [_c('GoogleBtn', {
    on: {
      "update:authValue": _vm.handleAuthChange
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Authenticator.vue?vue&type=template&id=322d114e&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Authenticator.vue?vue&type=script&lang=js

/* harmony default export */ var Authenticatorvue_type_script_lang_js = ({
  data() {
    return {
      value: "",
      auth_method: 'email',
      loading: false,
      user_otp: "",
      otp_view: false,
      allowResendOtpCounter: 50
      //allowResendOtp: false
    };
  },
  emits: ["update:authValue"],
  computed: {
    allowSubmit() {
      if (this.loading) {
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.value || !emailRegex.test(this.value)) {
        return false;
      }
      return true;
    },
    allowResendOtp() {
      if (this.allowResendOtpCounter >= 1 || !this.otp_view) {
        return false;
      }
      if (this.otp_view && this.allowResendOtpCounter === 0) {
        return true;
      }
    }
  },
  watch: {
    otp_view(val) {
      if (val) {
        document.body.classList.add('no-scroll');
        const landingTop = document.querySelector('.landing__top');
        if (landingTop) {
          landingTop.style.zIndex = '5';
          landingTop.style.position = 'fixed';
        }
      } else {
        document.body.classList.remove('no-scroll');
        const landingTop = document.querySelector('.landing__top');
        if (landingTop) {
          landingTop.style.zIndex = '';
          landingTop.style.position = '';
        }
      }
    }
  },
  methods: {
    startResendOtpCounter() {
      const countdown = setInterval(() => {
        if (this.allowResendOtpCounter > 0) {
          this.allowResendOtpCounter--;
        } else {
          clearInterval(countdown);
        }
      }, 2000);
    },
    resendOtp() {
      this.allowResendOtpCounter = 50;
      this.startResendOtpCounter();
      this.getOtp();
    },
    handleOtpChange(value) {
      this.user_otp = value;
      if (this.user_otp.length === 6) {
        this.submitOtp();
      }
    },
    handleAuthChange(token) {
      this.$emit("update:authValue", token);
    },
    submit() {
      this.getOtp();
    },
    submitOtp() {
      this.verifyOtp();
    },
    async getOtp() {
      const {
        value
      } = this;
      this.loading = true;
      try {
        const response = await fetch(`${api["b" /* serverurl */]}/shopper/auth/mail`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Origin': window.location.origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
          },
          body: JSON.stringify({
            identifier: value
          })
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Authentication error:', errorData);
          return;
        }
        const status = response.status;

        /*const data = await response.json();
        console.log('Authentication success:', data);
        this.loading = false;*/

        if (status === 200) {
          const data = await response.json();
          // console.log('Success:', data);
          this.otp_view = true;
          this.loading = false;
          this.startResendOtpCounter();
        }
      } catch (error) {
        this.loading = false;
        console.error('Network or server error during authentication:', error.message);
      }
    },
    async verifyOtp() {
      try {
        const {
          user_otp
        } = this;
        const response = await fetch(`${api["b" /* serverurl */]}/shopper/auth/verifyotp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Origin': window.location.origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
          },
          body: JSON.stringify({
            submittedOtp: user_otp
          })
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Authentication error:', errorData);
          return;
        }
        const status = response.status;
        if (status === 200) {
          const data = await response.json();
          //console.log('Success:', data);
          this.otp_view = true;
          this.loading = false;
          const {
            user
          } = data;
          document.body.classList.remove('no-scroll');
          const landingTop = document.querySelector('.landing__top');
          if (landingTop) {
            landingTop.style.zIndex = '';
            landingTop.style.position = '';
          }

          //console.log(user.token)
          this.$emit("update:authValue", user.token);
        }
      } catch (error) {
        this.loading = false;
        console.error('Network or server error during authentication:', error.message);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Authenticator.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Authenticatorvue_type_script_lang_js = (Authenticatorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Authenticator.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(172)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Authenticatorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "322d114e",
  "26f3e760"
  
)

/* harmony default export */ var Authenticator = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {OtpInput: __webpack_require__(105).default,GoogleBtn: __webpack_require__(141).default})


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("e8fcc39c", content, true, context)
};

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_cd089fce_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_cd089fce_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_cd089fce_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_cd089fce_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_cd089fce_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-cd089fce],[data-v-cd089fce]:after,[data-v-cd089fce]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-cd089fce]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-cd089fce]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-cd089fce]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-cd089fce]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-cd089fce]{font-size:65%}}body[data-v-cd089fce]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-cd089fce]{padding:0}}[data-v-cd089fce]::-moz-selection{background-color:#249b48;color:#fff}[data-v-cd089fce]::selection{background-color:#249b48;color:#fff}[data-v-cd089fce]::-webkit-scrollbar{height:8px;width:8px}[data-v-cd089fce]::-webkit-scrollbar-track{background:transparent}[data-v-cd089fce]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-cd089fce]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-cd089fce]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-cd089fce{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-cd089fce{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-cd089fce{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-cd089fce{to{transform:rotate(1turn)}}.slide-in-left[data-v-cd089fce]{animation:slide-in-left-cd089fce .5s ease-out forwards}.button-primary[data-v-cd089fce]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-cd089fce]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-cd089fce]{opacity:.4}.floating-element[data-v-cd089fce]{animation:float-cd089fce 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-cd089fce]{height:100vh!important;overflow:hidden!important}.spinner[data-v-cd089fce]{animation:spin-cd089fce 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-cd089fce]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-cd089fce]{filter:blur(3px)}.error-message[data-v-cd089fce]{animation:slideFadeInUp-cd089fce .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-cd089fce]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-cd089fce]{overflow-x:hidden}.landing__top[data-v-cd089fce]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-cd089fce]{display:flex}}.landing__topleft[data-v-cd089fce]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-cd089fce]{display:block;width:100%}}.landing__topleft--auth[data-v-cd089fce]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-cd089fce]{padding:0;width:auto}}.landing__topright[data-v-cd089fce],.landing__topright--img[data-v-cd089fce]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-cd089fce]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-cd089fce]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-cd089fce]{display:none}}.landing__content[data-v-cd089fce]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-cd089fce]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-cd089fce]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-cd089fce]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-cd089fce]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.otp-inputs[data-v-cd089fce]{display:grid;grid-template-columns:repeat(6,1fr);grid-gap:1rem;gap:1rem;width:100%}.otp-input[data-v-cd089fce]:disabled{background-color:#f5f5f5;color:#aaa;cursor:not-allowed}.otp-inputs__area[data-v-cd089fce]{height:5rem;width:100%}.otp-input[data-v-cd089fce]{border:1px solid rgba(36,155,72,.2);border-radius:4px;font-size:1.5rem;height:100%;outline:none;text-align:center;transition:border .2s ease;width:100%}.otp-input[data-v-cd089fce]:focus{border-color:rgba(36,155,72,.8)}.otp-input.filled[data-v-cd089fce]{border-color:rgba(36,155,72,.7)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=authenticator.js.map