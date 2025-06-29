exports.ids = [23];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OtpInput.vue?vue&type=template&id=66f05475&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "otp-inputs"
  }, [_vm._ssrNode(_vm._ssrList(_vm.otpLength, function (digit, index) {
    return "<div class=\"otp-inputs__area\" data-v-66f05475><input type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]*\" maxlength=\"1\"" + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("value", _vm.otpDigits[index]) + " class=\"otp-input\" data-v-66f05475></div>";
  }))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OtpInput.vue?vue&type=template&id=66f05475&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

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
    },
    setIsLoading: {
      type: Function
    }
  },
  computed: {
    ...Object(external_vuex_["mapState"])("user", {
      currentUser: state => state.currentUser
    })
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
        if (this.otpDigits.join("").length === 6) {
          this.verifyOtp();
        }
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
    },
    async verifyOtp() {
      try {
        this.$store.dispatch('user/setLoading', true);
        const otpDigits = this.otpDigits.join("");
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/auth/verifyotp',
          method: 'POST',
          body: {
            submittedOtp: otpDigits
          },
          auth: true
        });
        const {
          user
        } = data;
        const {
          token
        } = user;
        this.$store.dispatch('user/setJwtToken', token);
        this.$store.dispatch('user/addCurrentUser', user);
        if (token && this.currentUser.name && this.currentUser.phoneNumber) {
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
        }
      } catch (error) {
        this.otpDigits = Array(this.otpLength).fill("");
        this.loading = false;
        console.error('Error during OTP verification:', error.message);
        throw error;
      } finally {
        this.$store.dispatch('user/setLoading', false);
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
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OtpInputvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "66f05475",
  "7d8a8992"
  
)

/* harmony default export */ var OtpInput = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f11509ba", content, true, context)
};

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_66f05475_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_66f05475_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_66f05475_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_66f05475_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_66f05475_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-66f05475],[data-v-66f05475]:after,[data-v-66f05475]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-66f05475]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-66f05475]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-66f05475]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-66f05475]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-66f05475]{font-size:65%}}body[data-v-66f05475]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-66f05475]{padding:0}}[data-v-66f05475]::-moz-selection{background-color:#249b48;color:#fff}[data-v-66f05475]::selection{background-color:#249b48;color:#fff}[data-v-66f05475]::-webkit-scrollbar{height:8px;width:8px}[data-v-66f05475]::-webkit-scrollbar-track{background:transparent}[data-v-66f05475]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-66f05475]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-66f05475]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-66f05475{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-66f05475{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-66f05475{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-66f05475{to{transform:rotate(1turn)}}.slide-in-left[data-v-66f05475]{animation:slide-in-left-66f05475 .5s ease-out forwards}.button-primary[data-v-66f05475]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-66f05475]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-66f05475]{opacity:.4}.floating-element[data-v-66f05475]{animation:float-66f05475 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-66f05475]{height:100vh!important;overflow:hidden!important}.spinner[data-v-66f05475]{animation:spin-66f05475 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-66f05475]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-66f05475]{filter:blur(3px)}.error-message[data-v-66f05475]{animation:slideFadeInUp-66f05475 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-66f05475]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-66f05475]{overflow-x:hidden}.landing__top[data-v-66f05475]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-66f05475]{display:flex}}.landing__topleft[data-v-66f05475]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-66f05475]{display:block;width:100%}}.landing__topleft--auth[data-v-66f05475]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-66f05475]{padding:0;width:auto}}.landing__topright[data-v-66f05475],.landing__topright--img[data-v-66f05475]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-66f05475]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-66f05475]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-66f05475]{display:none}}.landing__content[data-v-66f05475]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-66f05475]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-66f05475]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-66f05475]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-66f05475]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.otp-inputs[data-v-66f05475]{display:grid;grid-template-columns:repeat(6,1fr);grid-gap:1rem;gap:1rem;width:100%}.otp-input[data-v-66f05475]:disabled{background-color:#f5f5f5;color:#aaa;cursor:not-allowed}.otp-inputs__area[data-v-66f05475]{height:5rem;width:100%}.otp-input[data-v-66f05475]{border:1px solid rgba(36,155,72,.2);border-radius:4px;font-size:1.5rem;height:100%;outline:none;text-align:center;transition:border .2s ease;width:100%}.otp-input[data-v-66f05475]:focus{border-color:rgba(36,155,72,.8)}.otp-input.filled[data-v-66f05475]{border-color:rgba(36,155,72,.7)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=otp-input.js.map