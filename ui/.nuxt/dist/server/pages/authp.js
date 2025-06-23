exports.ids = [29,3,6,7,8,20,22];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OtpInput.vue?vue&type=template&id=f6e81e22&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "otp-inputs"
  }, [_vm._ssrNode(_vm._ssrList(_vm.otpLength, function (digit, index) {
    return "<div class=\"otp-inputs__area\" data-v-f6e81e22><input type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]*\" maxlength=\"1\"" + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("value", _vm.otpDigits[index]) + " class=\"otp-input\" data-v-f6e81e22></div>";
  }))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OtpInput.vue?vue&type=template&id=f6e81e22&scoped=true

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
          }
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
  "f6e81e22",
  "7d8a8992"
  
)

/* harmony default export */ var OtpInput = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4054b73d", content, true, context)
};

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_authp_vue_vue_type_style_index_0_id_0044fa95_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_authp_vue_vue_type_style_index_0_id_0044fa95_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_authp_vue_vue_type_style_index_0_id_0044fa95_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_authp_vue_vue_type_style_index_0_id_0044fa95_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_authp_vue_vue_type_style_index_0_id_0044fa95_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0044fa95],[data-v-0044fa95]:after,[data-v-0044fa95]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0044fa95]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0044fa95]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0044fa95]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0044fa95]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0044fa95]{font-size:65%}}body[data-v-0044fa95]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0044fa95]{padding:0}}[data-v-0044fa95]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0044fa95]::selection{background-color:#249b48;color:#fff}[data-v-0044fa95]::-webkit-scrollbar{height:8px;width:8px}[data-v-0044fa95]::-webkit-scrollbar-track{background:transparent}[data-v-0044fa95]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0044fa95]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0044fa95]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0044fa95{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0044fa95{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0044fa95{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-0044fa95{to{transform:rotate(1turn)}}.slide-in-left[data-v-0044fa95]{animation:slide-in-left-0044fa95 .5s ease-out forwards}.button-primary[data-v-0044fa95]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0044fa95]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0044fa95]{opacity:.4}.floating-element[data-v-0044fa95]{animation:float-0044fa95 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0044fa95]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0044fa95]{animation:spin-0044fa95 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0044fa95]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0044fa95]{filter:blur(3px)}.error-message[data-v-0044fa95]{animation:slideFadeInUp-0044fa95 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-0044fa95]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-0044fa95]{overflow-x:hidden}.landing__top[data-v-0044fa95]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0044fa95]{display:flex}}.landing__topleft[data-v-0044fa95]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0044fa95]{display:block;width:100%}}.landing__topleft--auth[data-v-0044fa95]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0044fa95]{padding:0;width:auto}}.landing__topright[data-v-0044fa95],.landing__topright--img[data-v-0044fa95]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0044fa95]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0044fa95]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0044fa95]{display:none}}.landing__content[data-v-0044fa95]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0044fa95]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0044fa95]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0044fa95]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0044fa95]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.auth-page[data-v-0044fa95]{background:#b6edf2;min-height:100vh;overflow:hidden;position:relative}.auth-page__header[data-v-0044fa95]{left:0;position:fixed;top:0;width:100vw;z-index:6}.auth-page__header.auth[data-v-0044fa95],.auth-page__header.unauth[data-v-0044fa95]{background:transparent}@media only screen and (max-width:56.25em){.auth-page__header.auth[data-v-0044fa95]{background:#fff}}.auth-page__content[data-v-0044fa95]{overflow:hidden;position:relative}.auth-page__formarea[data-v-0044fa95]{align-items:center;display:flex;height:100vh;left:0;padding:3rem;position:fixed;top:0;width:100vw}.auth-page__formquest[data-v-0044fa95]{transform:translateY(-9rem)}.auth-page__h1[data-v-0044fa95]{animation:fadeInUp-0044fa95 1s ease-out forwards;font-size:2.8rem;font-weight:300}.auth-page__h1--email[data-v-0044fa95]{color:#249b48;font-size:2.5rem;font-weight:500}@keyframes fadeInUp-0044fa95{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.auth-page__bottom[data-v-0044fa95]{background:#b6edf2;bottom:0;display:flex;justify-content:center;left:0;padding:3rem 3rem .4rem;position:fixed;width:100vw;z-index:5}.auth-page__bottom--cart[data-v-0044fa95]{display:none}@media only screen and (max-width:56.25em){.auth-page__bottom--cart[data-v-0044fa95]{display:block}.auth-page__bottom[data-v-0044fa95]{display:block;padding:0}}.auth-page__otp[data-v-0044fa95]{margin-top:3rem}.auth-page__otp--header[data-v-0044fa95]{color:#249b48;font-size:1.6rem;font-weight:600;margin-bottom:2rem;text-align:center}.auth-page__otp--resendbtn[data-v-0044fa95]{color:#249b48;cursor:pointer;font-size:1.6rem;font-weight:500;margin-top:1rem;text-align:center}.auth-page__otp--resendotp[data-v-0044fa95]{-webkit-text-decoration:underline;text-decoration:underline}.auth-page__otp--counter[data-v-0044fa95]{color:#000;font-size:1.1rem}.auth-page__loading[data-v-0044fa95]{align-items:center;display:flex;height:100vh;justify-content:center;position:fixed;top:0;width:100vw}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/authp.vue?vue&type=template&id=0044fa95&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"auth-page\" data-v-0044fa95>", "</div>", [_vm._ssrNode("<div class=\"auth-page__content\" data-v-0044fa95>", "</div>", [_vm._ssrNode("<div class=\"auth-page__header unauth\" data-v-0044fa95>", "</div>", [_c('ChatHeader', {
    attrs: {
      "logovisible": true,
      "green": true
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"auth-page__formarea\" data-v-0044fa95>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("auth-page__formquest", {
    'blur-effect': _vm.isLoading
  }) + " data-v-0044fa95>", "</div>", [_vm._ssrNode((!_vm.currentUser.email ? "<h1 class=\"auth-page__h1\" data-v-0044fa95><span data-v-0044fa95>What's your email Address</span> <span data-v-0044fa95>We'll send an otp to</span> <span data-v-0044fa95>authenticate it.</span></h1>" : "<!---->") + " " + (_vm.currentUser.email && _vm.currentUser.otpMode ? "<h1 class=\"auth-page__h1\" data-v-0044fa95><span data-v-0044fa95>We just sent <span class=\"auth-page__h1--email\" data-v-0044fa95>" + _vm._ssrEscape(_vm._s(_vm.$route.query.email) + " ") + "</span>an\n                            otp. </span> <span data-v-0044fa95>kindly provide it to confirm email</span> <span data-v-0044fa95>(Please check spam if it doesn’t</span> <span data-v-0044fa95>appear in your inbox).</span></h1>" : "<!---->") + " " + (_vm.currentUser.email && !_vm.currentUser.otpMode && !_vm.currentUser.phoneNumber ? "<h1 class=\"auth-page__h1\" data-v-0044fa95><span data-v-0044fa95>Kindly provide a valid phone</span> <span data-v-0044fa95>number</span></h1>" : "<!---->") + " " + (_vm.currentUser.email && !_vm.currentUser.otpMode && _vm.currentUser.phoneNumber && !_vm.currentUser.name ? "<h1 class=\"auth-page__h1\" data-v-0044fa95><span data-v-0044fa95>Lastly, let us know your Name.</span></h1>" : "<!---->") + " "), _vm.currentUser.email && _vm.currentUser.otpMode ? _vm._ssrNode("<div class=\"auth-page__otp\" data-v-0044fa95>", "</div>", [_c('OtpInput', {
    attrs: {
      "disabled": _vm.isLoading,
      "setIsLoading": _vm.setIsLoading,
      "otpLength": 6
    }
  })], 1) : _vm._e(), _vm._ssrNode(" " + (_vm.currentUser.email && _vm.currentUser.otpMode ? "<div data-v-0044fa95><p class=\"auth-page__otp--resendbtn\" data-v-0044fa95>" + (_vm.allowResendOtp ? "<span class=\"auth-page__otp--resendotp\" data-v-0044fa95>Resend\n                                OTP</span>" : "<!---->") + " " + (!_vm.allowResendOtp ? "<span class=\"auth-page__otp--resendotp disabled-btn\" data-v-0044fa95>Resend\n                                OTP</span>" : "<!---->") + " <span class=\"auth-page__otp--counter\" data-v-0044fa95>" + _vm._ssrEscape(_vm._s(_vm.allowResendOtpCounter)) + "</span></p></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm.isLoading ? _vm._ssrNode("<div class=\"auth-page__loading\" data-v-0044fa95>", "</div>", [_c('LoadingAnimation')], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"auth-page__bottom\" data-v-0044fa95>", "</div>", [_vm._ssrNode("<div data-v-0044fa95>", "</div>", [_vm._ssrNode("<div class=\"blur-effect\" data-v-0044fa95>", "</div>", [_c('ChatCategories', {
    attrs: {
      "jwt": _vm.jwt,
      "prevent_click": true
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass(null, {
    'blur-effect': _vm.isLoading || _vm.currentUser.otpMode
  }) + " data-v-0044fa95>", "</div>", [_c('ChatInput', {
    attrs: {
      "jwt": _vm.jwt,
      "getOtp": _vm.getOtp
    }
  })], 1)], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/authp.vue?vue&type=template&id=0044fa95&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/authp.vue?vue&type=script&lang=js


/* harmony default export */ var authpvue_type_script_lang_js = ({
  data() {
    return {
      user_identifier: "",
      allowResendOtpCounter: 50
    };
  },
  mounted() {
    //this.loginWithGoogle();
  },
  computed: {
    ...Object(external_vuex_["mapState"])("user", {
      currentUser: state => state.currentUser,
      isLoading: state => state.loading
    }),
    isEmailMode() {
      return !this.currentUser.email;
    },
    isPhoneMode() {
      return !this.currentUser.phoneNumber;
    },
    isNameMode() {
      return !this.currentUser.name && this.currentUser.phoneNumber;
    },
    allowResendOtp() {
      if (this.allowResendOtpCounter >= 1 && this.currentUser.otpMode) {
        return false;
      }
      if (this.currentUser.otpMode && this.allowResendOtpCounter === 0) {
        return true;
      }
    }
  },
  methods: {
    setIsLoading() {
      this.isLoading = !this.isLoading;
    },
    async loginWithGoogle() {
      const domain = 'https://us-east-1umg3xqcyz.auth.us-east-1.amazoncognito.com'; // Your Cognito domain
      const clientId = '1tvnri1ecaqanirjd5t7u5kc17';
      const redirectUri = 'https://shop.payoor.store/';
      const scopes = ['openid', 'email', 'phone'].join('+'); // Optional: add 'profile' if you want name, picture, etc.

      const loginUrl = `${domain}/oauth2/authorize` + `?response_type=code` +
      // Using Authorization Code Flow
      `&client_id=${clientId}` + `&redirect_uri=${encodeURIComponent(redirectUri)}` + `&identity_provider=Google` +
      // Redirect directly to Google
      `&scope=${scopes}`;
      window.location.href = loginUrl;
    },
    async getOtp(value) {
      this.user_identifier = value;
      this.$store.dispatch('user/setLoading', true);
      try {
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/auth/mail',
          method: 'POST',
          body: {
            identifier: value
          }
        });
        console.log(data, 'otp sent');
        this.startResendOtpCounter();
      } catch (error) {
        console.error('Error sending OTP request:', error.message);
        throw error;
      } finally {
        this.$store.dispatch('user/setLoading', false);
      }
    },
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
      this.getOtp(this.user_identifier);
    }
    /*handleOtpChange(value) {
        this.user_otp = value;
         if (this.user_otp.length === 6) {
            this.submitOtp();
        }
    },
    submitOtp() {
        this.verifyOtp();
    }*/
  }
});
// CONCATENATED MODULE: ./pages/authp.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_authpvue_type_script_lang_js = (authpvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/authp.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(145)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_authpvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0044fa95",
  "1691e477"
  
)

/* harmony default export */ var authp = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatHeader: __webpack_require__(51).default,OtpInput: __webpack_require__(105).default,LoadingAnimation: __webpack_require__(54).default,ChatCategories: __webpack_require__(89).default,ChatInput: __webpack_require__(90).default})


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
        console.log(this.validToken, 'this.validToken');
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

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("06cdfc1e", content, true, context)
};

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5173410e", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartButton.vue?vue&type=template&id=0803ca8a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cartbtn"
  }, [_vm._ssrNode((!_vm.showicon ? "<div class=\"cartbtn__icon--amount\" data-v-0803ca8a><p data-v-0803ca8a>" + _vm._ssrEscape("₦" + _vm._s(_vm.cartTotal)) + "</p></div>" : "<!---->") + " " + (_vm.showicon ? "<div" + _vm._ssrClass(null, {
    'disabled-btn': !_vm.cartLength || _vm.cartLength === 0
  }) + " data-v-0803ca8a><div class=\"cartbtn__icon\" data-v-0803ca8a>" + (_vm.isLoading ? "<div class=\"loader\" data-v-0803ca8a></div>" : (_vm.cartLength !== 0 ? "<div class=\"cartbtn__icon--total\" data-v-0803ca8a><span data-v-0803ca8a>" + _vm._ssrEscape(_vm._s(_vm.cartLength === 0 ? '' : _vm.cartLength)) + "</span></div>" : "<!---->") + " <svg data-v-0803ca8a><use xlink:href=\"/svg/symbol-defs.svg#icon-shopping-bag\" data-v-0803ca8a></use></svg>") + "</div></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CartButton.vue?vue&type=template&id=0803ca8a&scoped=true

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
        await this.$store.dispatch("cart/syncCartToServer");
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
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CartButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0803ca8a",
  "0826af36"
  
)

/* harmony default export */ var CartButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("cd9fc042", content, true, context)
};

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0803ca8a],[data-v-0803ca8a]:after,[data-v-0803ca8a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0803ca8a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0803ca8a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0803ca8a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0803ca8a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0803ca8a]{font-size:65%}}body[data-v-0803ca8a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0803ca8a]{padding:0}}[data-v-0803ca8a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0803ca8a]::selection{background-color:#249b48;color:#fff}[data-v-0803ca8a]::-webkit-scrollbar{height:8px;width:8px}[data-v-0803ca8a]::-webkit-scrollbar-track{background:transparent}[data-v-0803ca8a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0803ca8a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0803ca8a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0803ca8a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0803ca8a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0803ca8a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-0803ca8a]{animation:slide-in-left-0803ca8a .5s ease-out forwards}.button-primary[data-v-0803ca8a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0803ca8a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0803ca8a]{opacity:.4}.floating-element[data-v-0803ca8a]{animation:float-0803ca8a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0803ca8a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0803ca8a]{animation:spin-0803ca8a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0803ca8a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0803ca8a]{filter:blur(3px)}.error-message[data-v-0803ca8a]{animation:slideFadeInUp-0803ca8a .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-0803ca8a]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-0803ca8a]{overflow-x:hidden}.landing__top[data-v-0803ca8a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0803ca8a]{display:flex}}.landing__topleft[data-v-0803ca8a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0803ca8a]{display:block;width:100%}}.landing__topleft--auth[data-v-0803ca8a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0803ca8a]{padding:0;width:auto}}.landing__topright[data-v-0803ca8a],.landing__topright--img[data-v-0803ca8a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0803ca8a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0803ca8a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0803ca8a]{display:none}}.landing__content[data-v-0803ca8a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0803ca8a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0803ca8a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0803ca8a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0803ca8a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.cartbtn[data-v-0803ca8a]{color:#000;position:relative}.cartbtn__icon[data-v-0803ca8a]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-0803ca8a]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-0803ca8a]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-0803ca8a],.cartbtn__icon--total[data-v-0803ca8a]{color:#fff;font-weight:600}.cartbtn svg[data-v-0803ca8a]{height:80%;width:80%;fill:#fff}.loader[data-v-0803ca8a]{animation:spin-0803ca8a 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}@keyframes spin-0803ca8a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=template&id=7f1117c6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chat-header"
  }, [_vm._ssrNode("<div class=\"chat-header__left\" data-v-7f1117c6>" + (_vm.name ? "<div class=\"chat-header__name\" data-v-7f1117c6><span class=\"svg\" data-v-7f1117c6><svg data-v-7f1117c6><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-7f1117c6></use></svg></span> <span class=\"label\" data-v-7f1117c6>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></div>" : "<!---->") + " " + (_vm.logovisible ? "<figure" + _vm._ssrClass("chat-header__left--logo", {
    green: _vm.green
  }) + " data-v-7f1117c6><img src=\"/imgs/logo.png\" data-v-7f1117c6></figure>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"chat-header__right\" data-v-7f1117c6>", "</div>", [_vm._ssrNode("<div class=\"chat-header__right--cart\" data-v-7f1117c6>", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" <div" + _vm._ssrClass("chat-header__burger", {
    unauth: !_vm.jwtToken,
    green: _vm.green
  }) + " data-v-7f1117c6><span data-v-7f1117c6></span><span data-v-7f1117c6></span><span data-v-7f1117c6></span></div>")], 2), _vm._ssrNode(" "), _vm.menuopen ? _vm._ssrNode("<div" + _vm._ssrClass("chat-header__menu", {
    auth: _vm.jwtToken
  }) + " data-v-7f1117c6>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menubody slide-in-left\" data-v-7f1117c6>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menuitems\" data-v-7f1117c6>", "</div>", [_vm._ssrNode("<figure class=\"chat-header__left--logo bottom-1rem\" data-v-7f1117c6>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/logo.png',
      expression: "'/imgs/logo.png'"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chat-header__menuitem\" data-v-7f1117c6><span class=\"svg\" data-v-7f1117c6></span> " + (!_vm.jwtToken ? "<span class=\"label\" data-v-7f1117c6>About us</span>" : "<!---->") + "</div> " + (!_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-7f1117c6><span class=\"svg\" data-v-7f1117c6></span> <span class=\"label\" data-v-7f1117c6>Sign In/Sign Up</span></div>" : "<!---->") + " " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-7f1117c6><span class=\"svg\" data-v-7f1117c6></span> <span class=\"label\" data-v-7f1117c6>Orders</span></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"chat-header__menuitems\" data-v-7f1117c6><div class=\"chat-header__menuitem\" data-v-7f1117c6><span class=\"svg\" data-v-7f1117c6></span></div> " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-7f1117c6><span class=\"svg\" data-v-7f1117c6></span> <span class=\"label\" data-v-7f1117c6>Signout</span></div>" : "<!---->") + "</div>")], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=template&id=7f1117c6&scoped=true

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
var jwt_mixin = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=script&lang=js



















/* harmony default export */ var ChatHeadervue_type_script_lang_js = ({
  mixins: [jwt_mixin["a" /* default */]],
  props: ['logovisible', 'name', 'backRoute', 'green'],
  emits: ['update:authValue'],
  data() {
    return {
      menuopen: false,
      routeStack: ['/']
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
    this.$store.dispatch('cart/resetCart');
    this.$store.dispatch('cart/initializeCart');
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

    // console.log(routeStack, 'routestack')

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
        console.log(user);
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
    },
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
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatHeadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7f1117c6",
  "5f357078"
  
)

/* harmony default export */ var ChatHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartButton: __webpack_require__(47).default})


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f1117c6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f1117c6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f1117c6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f1117c6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f1117c6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-7f1117c6],[data-v-7f1117c6]:after,[data-v-7f1117c6]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-7f1117c6]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-7f1117c6]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-7f1117c6]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-7f1117c6]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-7f1117c6]{font-size:65%}}body[data-v-7f1117c6]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-7f1117c6]{padding:0}}[data-v-7f1117c6]::-moz-selection{background-color:#249b48;color:#fff}[data-v-7f1117c6]::selection{background-color:#249b48;color:#fff}[data-v-7f1117c6]::-webkit-scrollbar{height:8px;width:8px}[data-v-7f1117c6]::-webkit-scrollbar-track{background:transparent}[data-v-7f1117c6]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-7f1117c6]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-7f1117c6]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-7f1117c6{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-7f1117c6{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-7f1117c6{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-7f1117c6{to{transform:rotate(1turn)}}.slide-in-left[data-v-7f1117c6]{animation:slide-in-left-7f1117c6 .5s ease-out forwards}.button-primary[data-v-7f1117c6]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-7f1117c6]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-7f1117c6]{opacity:.4}.floating-element[data-v-7f1117c6]{animation:float-7f1117c6 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-7f1117c6]{height:100vh!important;overflow:hidden!important}.spinner[data-v-7f1117c6]{animation:spin-7f1117c6 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-7f1117c6]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-7f1117c6]{filter:blur(3px)}.error-message[data-v-7f1117c6]{animation:slideFadeInUp-7f1117c6 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-7f1117c6]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-7f1117c6]{overflow-x:hidden}.landing__top[data-v-7f1117c6]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-7f1117c6]{display:flex}}.landing__topleft[data-v-7f1117c6]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-7f1117c6]{display:block;width:100%}}.landing__topleft--auth[data-v-7f1117c6]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-7f1117c6]{padding:0;width:auto}}.landing__topright[data-v-7f1117c6],.landing__topright--img[data-v-7f1117c6]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-7f1117c6]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-7f1117c6]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-7f1117c6]{display:none}}.landing__content[data-v-7f1117c6]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-7f1117c6]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-7f1117c6]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-7f1117c6]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-7f1117c6]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-header[data-v-7f1117c6]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-7f1117c6]{padding:2rem}}.chat-header__name[data-v-7f1117c6],.chat-header__name span.svg[data-v-7f1117c6]{align-items:center;display:flex}.chat-header__name span.svg[data-v-7f1117c6]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-7f1117c6]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-7f1117c6]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-7f1117c6]{display:none}}.chat-header__left--logo[data-v-7f1117c6]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-7f1117c6]{margin-bottom:5rem}.chat-header__left--logo img[data-v-7f1117c6]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-7f1117c6]{height:3.5rem}.chat-header__burger[data-v-7f1117c6]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-7f1117c6]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-7f1117c6]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-7f1117c6]{background:#fff}.chat-header__burger.green span[data-v-7f1117c6]{background:#249b48}.chat-header__menu[data-v-7f1117c6]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-7f1117c6]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-7f1117c6],.chat-header__menu.auth[data-v-7f1117c6]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-7f1117c6]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-7f1117c6]{font-size:1.8rem}}.chat-header__menuitem span[data-v-7f1117c6]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-7f1117c6]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 54:
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
  
  var style0 = __webpack_require__(55)
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

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-3b87158c],[data-v-3b87158c]:after,[data-v-3b87158c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-3b87158c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-3b87158c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-3b87158c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-3b87158c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-3b87158c]{font-size:65%}}body[data-v-3b87158c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-3b87158c]{padding:0}}[data-v-3b87158c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::-webkit-scrollbar{height:8px;width:8px}[data-v-3b87158c]::-webkit-scrollbar-track{background:transparent}[data-v-3b87158c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-3b87158c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-3b87158c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-3b87158c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-3b87158c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes spin-3b87158c{to{transform:rotate(1turn)}}.slide-in-left[data-v-3b87158c]{animation:slide-in-left-3b87158c .5s ease-out forwards}.button-primary[data-v-3b87158c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-3b87158c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-3b87158c]{opacity:.4}.floating-element[data-v-3b87158c]{animation:float-3b87158c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-3b87158c]{height:100vh!important;overflow:hidden!important}.spinner[data-v-3b87158c]{animation:spin-3b87158c 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-3b87158c]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-3b87158c]{filter:blur(3px)}.error-message[data-v-3b87158c]{animation:slideFadeInUp-3b87158c .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-3b87158c]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-3b87158c]{overflow-x:hidden}.landing__top[data-v-3b87158c]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-3b87158c]{display:flex}}.landing__topleft[data-v-3b87158c]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-3b87158c]{display:block;width:100%}}.landing__topleft--auth[data-v-3b87158c]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-3b87158c]{padding:0;width:auto}}.landing__topright[data-v-3b87158c],.landing__topright--img[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-3b87158c]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-3b87158c]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-3b87158c]{display:none}}.landing__content[data-v-3b87158c]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-3b87158c]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-3b87158c]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-3b87158c]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.loading-animation[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.loading-animation figure[data-v-3b87158c]{animation:float-3b87158c 1.5s ease-in-out infinite alternate;border-radius:100%;height:3rem;overflow:hidden;width:3rem}.loading-animation figure img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@keyframes float-3b87158c{0%{transform:translateY(0)}to{transform:translateY(-10px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    setLoading: Function
  },
  data() {
    return {
      products: []
    };
  },
  emits: ['update:products', 'update:replyuser'],
  methods: {
    async postMessageFromQuery(message) {
      if (this.setLoading) this.setLoading(true);
      try {
        const data = await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* handleFetch */ "a"])({
          apiroute: 'shopper/message',
          method: 'POST',
          body: {
            message
          }
        });
        const {
          products
        } = data;
        this.$emit('update:products', [...this.products, ...products]);
      } catch (error) {
        console.error('Error posting message:', error);
      } finally {
        if (this.setLoading) this.setLoading(false);
      }
    }
  }
});

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f2a5bc74", content, true, context)
};

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("29c09f18", content, true, context)
};

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
  add("0c4f1a13", content, true, context)
};

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_0809aa41_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_0809aa41_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_0809aa41_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_0809aa41_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_0809aa41_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0809aa41],[data-v-0809aa41]:after,[data-v-0809aa41]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0809aa41]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0809aa41]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0809aa41]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0809aa41]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0809aa41]{font-size:65%}}body[data-v-0809aa41]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0809aa41]{padding:0}}[data-v-0809aa41]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0809aa41]::selection{background-color:#249b48;color:#fff}[data-v-0809aa41]::-webkit-scrollbar{height:8px;width:8px}[data-v-0809aa41]::-webkit-scrollbar-track{background:transparent}[data-v-0809aa41]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0809aa41]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0809aa41]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0809aa41{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0809aa41{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0809aa41{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-0809aa41{to{transform:rotate(1turn)}}.slide-in-left[data-v-0809aa41]{animation:slide-in-left-0809aa41 .5s ease-out forwards}.button-primary[data-v-0809aa41]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0809aa41]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0809aa41]{opacity:.4}.floating-element[data-v-0809aa41]{animation:float-0809aa41 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0809aa41]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0809aa41]{animation:spin-0809aa41 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0809aa41]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0809aa41]{filter:blur(3px)}.error-message[data-v-0809aa41]{animation:slideFadeInUp-0809aa41 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-0809aa41]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-0809aa41]{overflow-x:hidden}.landing__top[data-v-0809aa41]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0809aa41]{display:flex}}.landing__topleft[data-v-0809aa41]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0809aa41]{display:block;width:100%}}.landing__topleft--auth[data-v-0809aa41]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0809aa41]{padding:0;width:auto}}.landing__topright[data-v-0809aa41],.landing__topright--img[data-v-0809aa41]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0809aa41]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0809aa41]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0809aa41]{display:none}}.landing__content[data-v-0809aa41]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0809aa41]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0809aa41]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0809aa41]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0809aa41]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-categories__header[data-v-0809aa41]{font-size:1.5rem;font-weight:500;padding:2rem 1rem 0}.chat-categories__categories[data-v-0809aa41]{background:#b6edf2;display:flex;justify-content:flex-start;overflow-x:scroll;overflow-y:hidden;padding:1rem;scrollbar-width:none;width:100%;-ms-overflow-style:none}.chat-categories__categories[data-v-0809aa41]::-webkit-scrollbar{display:none;height:6px}.chat-categories__categories[data-v-0809aa41]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.chat-categories__categories[data-v-0809aa41]::-webkit-scrollbar-thumb:hover{background-color:transparent}.chat-categories__categories.home-white[data-v-0809aa41]{background:#fff}.chat-categories__category[data-v-0809aa41]{align-items:center;border-radius:1rem;cursor:pointer;display:flex;flex-shrink:0;margin-right:1rem;min-height:3rem;padding:1rem;width:20rem}.chat-categories__category.currentcat[data-v-0809aa41]{border:1px solid #249b48}.chat-categories__category--header[data-v-0809aa41]{font-size:1rem}.chat-categories__category--png[data-v-0809aa41]{height:5rem;margin-right:.5rem;width:5rem}.chat-categories__category--png img[data-v-0809aa41]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-categories__category--description[data-v-0809aa41]{color:rgba(0,0,0,.5);font-size:1rem}.chat-categories__category.farmfresh[data-v-0809aa41]{background:#a8d1f0}.chat-categories__category.protein[data-v-0809aa41]{background:#f0e7a8}.chat-categories__category.cookingessentials[data-v-0809aa41]{background:#f0baa8}.chat-categories__category.fruits[data-v-0809aa41]{background:pink}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_b15c0f52_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_b15c0f52_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_b15c0f52_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_b15c0f52_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_b15c0f52_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-b15c0f52],[data-v-b15c0f52]:after,[data-v-b15c0f52]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-b15c0f52]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-b15c0f52]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-b15c0f52]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-b15c0f52]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-b15c0f52]{font-size:65%}}body[data-v-b15c0f52]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-b15c0f52]{padding:0}}[data-v-b15c0f52]::-moz-selection{background-color:#249b48;color:#fff}[data-v-b15c0f52]::selection{background-color:#249b48;color:#fff}[data-v-b15c0f52]::-webkit-scrollbar{height:8px;width:8px}[data-v-b15c0f52]::-webkit-scrollbar-track{background:transparent}[data-v-b15c0f52]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-b15c0f52]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-b15c0f52]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-b15c0f52{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-b15c0f52{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-b15c0f52{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-b15c0f52{to{transform:rotate(1turn)}}.slide-in-left[data-v-b15c0f52]{animation:slide-in-left-b15c0f52 .5s ease-out forwards}.button-primary[data-v-b15c0f52]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-b15c0f52]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-b15c0f52]{opacity:.4}.floating-element[data-v-b15c0f52]{animation:float-b15c0f52 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-b15c0f52]{height:100vh!important;overflow:hidden!important}.spinner[data-v-b15c0f52]{animation:spin-b15c0f52 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-b15c0f52]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-b15c0f52]{filter:blur(3px)}.error-message[data-v-b15c0f52]{animation:slideFadeInUp-b15c0f52 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-b15c0f52]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-b15c0f52]{overflow-x:hidden}.landing__top[data-v-b15c0f52]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-b15c0f52]{display:flex}}.landing__topleft[data-v-b15c0f52]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-b15c0f52]{display:block;width:100%}}.landing__topleft--auth[data-v-b15c0f52]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-b15c0f52]{padding:0;width:auto}}.landing__topright[data-v-b15c0f52],.landing__topright--img[data-v-b15c0f52]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-b15c0f52]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-b15c0f52]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-b15c0f52]{display:none}}.landing__content[data-v-b15c0f52]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-b15c0f52]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-b15c0f52]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-b15c0f52]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-b15c0f52]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatinput[data-v-b15c0f52]{background:#333;border:.3rem solid transparent;border-radius:3rem;margin:0 auto;min-height:6rem;overflow:hidden;padding:2rem;position:relative}@media only screen and (max-width:56.25em){.chatinput[data-v-b15c0f52]{border-radius:3rem 3rem 0 0}}.chatinput .error-message[data-v-b15c0f52]{color:#ff4d4d;font-size:1.6rem;font-weight:700;margin-bottom:1rem;text-align:center}.chatinput__field[data-v-b15c0f52]{background:transparent;border:none;color:#fff;font-size:2.1rem;line-height:1.5;max-height:15rem;min-height:2rem;outline:none;overflow-y:auto;resize:none;width:100%}.chatinput__sendbtn[data-v-b15c0f52]{background:#249b48;border-radius:100%;bottom:1rem;display:flex;display:none;height:4.5rem;justify-content:center;overflow:hidden;position:absolute;right:1rem;width:4.5rem}.chatinput__sendbtn.visible[data-v-b15c0f52]{display:flex}.chatinput__sendbtn button[data-v-b15c0f52]{background:transparent;border:none;cursor:pointer;display:flex;height:100%;justify-content:center;outline:none;width:100%}.chatinput__sendbtn button svg[data-v-b15c0f52]{fill:#fff;color:#fff;height:4rem;width:4rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatCategories.vue?vue&type=template&id=0809aa41&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"chat-categories__body\" data-v-0809aa41>", "</div>", [_vm._ssrNode("<div class=\"chat-categories__header\" data-v-0809aa41><p data-v-0809aa41>Explore Categories</p></div> "), _vm._ssrNode("<div" + _vm._ssrClass("chat-categories__categories", {
    'home-white': _vm.home
  }) + " data-v-0809aa41>", "</div>", _vm._l(_vm.categories, function (category, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass("chat-categories__category", [category.class, {
      currentcat: _vm.currentcat === index
    }]) + _vm._ssrStyle(null, {
      currentcat: _vm.currentcat === index
    }, null) + " data-v-0809aa41>", "</div>", [_vm._ssrNode("<div class=\"chat-categories__category--left\" data-v-0809aa41>", "</div>", [_vm._ssrNode("<figure class=\"chat-categories__category--png\" data-v-0809aa41>", "</figure>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: category.image,
        expression: "category.image"
      }],
      attrs: {
        "alt": "Category image"
      }
    }, [])])]), _vm._ssrNode(" <div class=\"chat-categories__category--right\" data-v-0809aa41><div class=\"chat-categories__category--header\" data-v-0809aa41><h2 data-v-0809aa41>" + _vm._ssrEscape(_vm._s(category.name)) + "</h2></div> <div class=\"chat-categories__category--description\" data-v-0809aa41><p data-v-0809aa41>" + _vm._ssrEscape(_vm._s(_vm.truncate(category.description, 20))) + "</p></div></div>")], 2);
  }), 0)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatCategories.vue?vue&type=template&id=0809aa41&scoped=true

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(44);

// EXTERNAL MODULE: ./mixins/product_mixin.js
var product_mixin = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatCategories.vue?vue&type=script&lang=js


/* harmony default export */ var ChatCategoriesvue_type_script_lang_js = ({
  props: ['prevent_click', 'home'],
  mixins: [jwt_mixin["a" /* default */], product_mixin["a" /* default */]],
  data() {
    return {
      currentcat: null,
      categories: [{
        image: '/imgs/farmfresh.png',
        name: 'Farm Fresh',
        description: 'Tomato, Pepper, Onions, Garden-fresh produce straight from the soil.',
        class: 'farmfresh'
      }, {
        image: '/imgs/protein.png',
        name: 'Protein',
        description: 'Beef, Chicken, Turkey, and fresh Fish — protein-packed goodness.',
        class: 'protein'
      }, {
        image: '/imgs/cookingessentials.png',
        name: 'Cooking Essentials',
        description: 'Salt, Oil, Maggi, Spices — everything you need to bring meals to life.',
        class: 'cookingessentials'
      }, {
        image: '/imgs/fruits.png',
        name: 'Fruits',
        description: 'Banana, Apple, Watermelon, Pineapple — sweet, juicy, and healthy.',
        class: 'fruits'
      }],
      animatedIndices: []
    };
  },
  methods: {
    truncate(text, maxLength) {
      return text.length > maxLength ? text.substring(0, maxLength).trim() + '...' : text;
    },
    searchCategory(index) {
      if (this.prevent_click) {
        return;
      }
      const category = this.categories[index];
      this.currentcat = index;
      this.setMessageAndPost(category.name, category.description);
    },
    async setMessageAndPost(value, description) {
      this.$router.replace({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          category: value,
          message: description
        }
      });

      //console.log(value)

      // Post the message to the server
      await this.postMessageFromQuery(description);
      this.$emit("update:replyuser");
    }
  }
});
// CONCATENATED MODULE: ./components/ChatCategories.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatCategoriesvue_type_script_lang_js = (ChatCategoriesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ChatCategories.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatCategoriesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0809aa41",
  "2a8359f2"
  
)

/* harmony default export */ var ChatCategories = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatInput.vue?vue&type=template&id=b15c0f52&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode((_vm.errorMessage ? "<div class=\"error-message\" data-v-b15c0f52>" + _vm._ssrEscape("\n        " + _vm._s(_vm.errorMessage) + "\n    ") + "</div>" : "<!---->") + " <div class=\"chatinput\" data-v-b15c0f52>" + (!_vm.currentUser.otpMode ? "<div data-v-b15c0f52>" + (_vm.currentUser.name && _vm.currentUser.phoneNumber && _vm.currentUser.detailsAdded ? "<textarea" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + " class=\"chatinput__field\" data-v-b15c0f52>" + _vm._ssrEscape(_vm._s(_vm.userinput)) + "</textarea>" : "<!---->") + " " + (_vm.isEmailMode ? "<input type=\"email\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + _vm._ssrAttr("value", _vm.userinput) + " class=\"chatinput__field\" data-v-b15c0f52>" : "<!---->") + " " + (_vm.isPhoneMode && !_vm.isEmailMode ? "<input type=\"tel\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + _vm._ssrAttr("value", _vm.userinput) + " class=\"chatinput__field\" data-v-b15c0f52>" : "<!---->") + " " + (_vm.isNameMode ? "<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + _vm._ssrAttr("value", _vm.userinput) + " class=\"chatinput__field\" data-v-b15c0f52>" : "<!---->") + "</div>" : "<!---->") + " <div" + _vm._ssrClass("chatinput__sendbtn slide-fade-in-up", {
    'visible': _vm.userinput.length
  }) + " data-v-b15c0f52><button data-v-b15c0f52><svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-2xl\" data-v-b15c0f52><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z\" fill=\"currentColor\" data-v-b15c0f52></path></svg></button></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatInput.vue?vue&type=template&id=b15c0f52&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(44);

// EXTERNAL MODULE: ./mixins/product_mixin.js
var product_mixin = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatInput.vue?vue&type=script&lang=js




/* harmony default export */ var ChatInputvue_type_script_lang_js = ({
  props: ['getOtp'],
  mixins: [jwt_mixin["a" /* default */], product_mixin["a" /* default */]],
  data() {
    return {
      userinput: "",
      errorMessage: ""
    };
  },
  watch: {
    currentUser(newVal) {
      console.log(newVal);
    },
    userinput(newValue) {
      if (this.errorMessage && newValue.length > 0) {
        this.errorMessage = "";
      }
      const wordArray = newValue.trim().split(/\s+/);
      const wordCount = wordArray.length;
      if (wordCount >= 1) {
        if (wordCount >= 5 || wordArray[0].length >= 5) {
          // console.log('hello wordcound')
        }
      }
    }
  },
  computed: {
    ...Object(external_vuex_["mapState"])("user", {
      currentUser: state => state.currentUser,
      isLoading: state => state.loading
    }),
    placeholder() {
      if (!this.currentUser.email) {
        return "Enter your email address";
      }
      if (!this.currentUser.phoneNumber) {
        return "Please add your phone number...";
      }
      if (this.currentUser.phoneNumber && !this.currentUser.name) {
        return "Please add your name...";
      }
      return "Enter your list";
    },
    isEmailMode() {
      return !this.currentUser.email;
    },
    isPhoneMode() {
      return !this.currentUser.phoneNumber;
    },
    isNameMode() {
      return !this.currentUser.name && this.currentUser.phoneNumber;
    }
  },
  mounted() {
    const message = this.$route.query.message;
    if (message) {
      this.postMessageFromQuery(message);
    }
  },
  methods: {
    autoResize() {
      this.$nextTick(() => {
        const textarea = this.$refs.textarea;
        if (textarea) {
          textarea.style.height = "auto";
          textarea.style.height = `${textarea.scrollHeight}px`;
        }
      });
    },
    async sendMessage() {
      this.errorMessage = "";
      try {
        const {
          userinput
        } = this;
        if (userinput.trim()) {
          if (this.isEmailMode) {
            if (this.getOtp) {
              await this.getOtp(userinput);
            }
            this.$store.dispatch('user/setUserEmail', userinput);
            this.$store.dispatch('user/setOtpMode', true);
            this.userinput = "";
            this.$router.push({
              query: {
                ...this.$route.query,
                email: this.currentUser.email
              }
            });
          } else if (this.isPhoneMode) {
            await this.$store.dispatch('user/updateUserPhoneNumber', userinput);
            this.userinput = "";
            this.$router.push({
              query: {
                ...this.$route.query,
                email: this.currentUser.email,
                phoneNumber: this.currentUser.phoneNumber
              }
            });
          } else if (this.isNameMode) {
            await this.$store.dispatch('user/setUserName', userinput);
            this.userinput = "";
            this.$router.push({
              path: '/',
              query: {
                ...this.$route.query,
                email: this.currentUser.email,
                phoneNumber: this.currentUser.phoneNumber,
                name: this.currentUser.name
              }
            });
          } else {
            this.$emit("update:products", []);
            this.$router.push({
              query: {
                message: userinput.trim(),
                email: this.currentUser.email,
                phoneNumber: this.currentUser.phoneNumber,
                name: this.currentUser.name
              }
            });
            await this.postMessageToServer();
            this.$emit("update:replyuser");
          }
        }
      } catch (error) {
        this.userinput = "";
        console.error('An error occurred in sendMessage:', error);

        // Set the error message based on the type of error
        if (error.status === 409) {
          //this.errorMessage = error.message;
        }
      }
    },
    handleEnter(e) {
      const width = window.innerWidth;
      if (width > 900) {
        e.preventDefault();
        this.sendMessage();
      }
    },
    async postMessageToServer() {
      try {
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/message',
          method: 'POST',
          body: {
            message: this.userinput
          }
        });
        const {
          products
        } = data;
        this.$emit("update:products", [...this.products, ...products]);
        this.$router.replace({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            message: this.userinput
          }
        });
        this.userinput = "";
        this.$nextTick(() => this.autoResize());
      } catch (error) {
        console.log(error, 'error catcher needs to be placed here');
      }
    },
    async postMessageFromQuery(message) {
      if (this.setLoading) this.setLoading(true);
      try {
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/message',
          method: 'POST',
          body: {
            message
          }
        });
        const {
          products
        } = data;
        this.$emit("update:products", [...this.products, ...products]);
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        if (this.setLoading) this.setLoading(false);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ChatInput.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatInputvue_type_script_lang_js = (ChatInputvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ChatInput.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatInputvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b15c0f52",
  "90f1b5a2"
  
)

/* harmony default export */ var ChatInput = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_f6e81e22_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_f6e81e22_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_f6e81e22_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_f6e81e22_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_f6e81e22_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-f6e81e22],[data-v-f6e81e22]:after,[data-v-f6e81e22]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-f6e81e22]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-f6e81e22]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-f6e81e22]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-f6e81e22]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-f6e81e22]{font-size:65%}}body[data-v-f6e81e22]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-f6e81e22]{padding:0}}[data-v-f6e81e22]::-moz-selection{background-color:#249b48;color:#fff}[data-v-f6e81e22]::selection{background-color:#249b48;color:#fff}[data-v-f6e81e22]::-webkit-scrollbar{height:8px;width:8px}[data-v-f6e81e22]::-webkit-scrollbar-track{background:transparent}[data-v-f6e81e22]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-f6e81e22]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-f6e81e22]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-f6e81e22{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-f6e81e22{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-f6e81e22{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-f6e81e22{to{transform:rotate(1turn)}}.slide-in-left[data-v-f6e81e22]{animation:slide-in-left-f6e81e22 .5s ease-out forwards}.button-primary[data-v-f6e81e22]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-f6e81e22]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-f6e81e22]{opacity:.4}.floating-element[data-v-f6e81e22]{animation:float-f6e81e22 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-f6e81e22]{height:100vh!important;overflow:hidden!important}.spinner[data-v-f6e81e22]{animation:spin-f6e81e22 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-f6e81e22]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-f6e81e22]{filter:blur(3px)}.error-message[data-v-f6e81e22]{animation:slideFadeInUp-f6e81e22 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-f6e81e22]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-f6e81e22]{overflow-x:hidden}.landing__top[data-v-f6e81e22]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-f6e81e22]{display:flex}}.landing__topleft[data-v-f6e81e22]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-f6e81e22]{display:block;width:100%}}.landing__topleft--auth[data-v-f6e81e22]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-f6e81e22]{padding:0;width:auto}}.landing__topright[data-v-f6e81e22],.landing__topright--img[data-v-f6e81e22]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-f6e81e22]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-f6e81e22]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-f6e81e22]{display:none}}.landing__content[data-v-f6e81e22]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-f6e81e22]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-f6e81e22]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-f6e81e22]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-f6e81e22]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.otp-inputs[data-v-f6e81e22]{display:grid;grid-template-columns:repeat(6,1fr);grid-gap:1rem;gap:1rem;width:100%}.otp-input[data-v-f6e81e22]:disabled{background-color:#f5f5f5;color:#aaa;cursor:not-allowed}.otp-inputs__area[data-v-f6e81e22]{height:5rem;width:100%}.otp-input[data-v-f6e81e22]{border:1px solid rgba(36,155,72,.2);border-radius:4px;font-size:1.5rem;height:100%;outline:none;text-align:center;transition:border .2s ease;width:100%}.otp-input[data-v-f6e81e22]:focus{border-color:rgba(36,155,72,.8)}.otp-input.filled[data-v-f6e81e22]{border-color:rgba(36,155,72,.7)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=authp.js.map