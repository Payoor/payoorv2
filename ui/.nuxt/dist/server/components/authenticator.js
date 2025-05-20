exports.ids = [1,10,17];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Authenticator.vue?vue&type=template&id=6c986b2e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "auth"
  }, [_vm._ssrNode("<div class=\"auth__content\" data-v-6c986b2e>", "</div>", [_vm._ssrNode("<div class=\"auth__header\" data-v-6c986b2e></div> <div class=\"auth__htags\" data-v-6c986b2e><h1 class=\"auth__h1\" data-v-6c986b2e><div data-v-6c986b2e>Your all in one</div> <div class=\"auth__h1--bottom\" data-v-6c986b2e><p class=\"auth__h1--bottomp1\" data-v-6c986b2e><span data-v-6c986b2e>grocery</span> <span class=\"line grow-bar\" data-v-6c986b2e><img src=\"/imgs/9b0498221204fb302eeee0e4809573e18a95723b.png\" data-v-6c986b2e></span></p> assistant\n                </div></h1> <h2 class=\"auth__h2\" data-v-6c986b2e>Make a list and leave the rest to us</h2></div> <figure class=\"auth__cartongif\" data-v-6c986b2e></figure> "), _vm._ssrNode("<div class=\"auth__formarea\" data-v-6c986b2e>", "</div>", [_vm._ssrNode("<div class=\"auth__form slide-fade-in-up\" data-v-6c986b2e>", "</div>", [_vm._ssrNode((!_vm.otp_view ? "<div class=\"auth__input\" data-v-6c986b2e>" + (_vm.auth_method === 'checkbox' ? "<input placeholder=\"Enter your email\" type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.value) ? _vm._i(_vm.value, null) > -1 : _vm.value) + " data-v-6c986b2e>" : _vm.auth_method === 'radio' ? "<input placeholder=\"Enter your email\" type=\"radio\"" + _vm._ssrAttr("checked", _vm._q(_vm.value, null)) + " data-v-6c986b2e>" : "<input placeholder=\"Enter your email\"" + _vm._ssrAttr("type", _vm.auth_method) + _vm._ssrAttr("value", _vm.value) + " data-v-6c986b2e>") + "</div>" : "<!---->") + " "), _vm.otp_view ? _vm._ssrNode("<div class=\"auth__otp\" data-v-6c986b2e>", "</div>", [_vm._ssrNode("<p class=\"auth__otp--header\" data-v-6c986b2e>We just sent you an otp</p> "), _c('OtpInput', {
    attrs: {
      "otpLength": 6
    },
    on: {
      "update:modelValue": _vm.handleOtpChange
    }
  }), _vm._ssrNode(" <p class=\"auth__otp--resendbtn\" data-v-6c986b2e>" + (_vm.allowResendOtp ? "<span class=\"auth__otp--resendotp\" data-v-6c986b2e>Resend\n                            OTP</span>" : "<!---->") + " " + (!_vm.allowResendOtp ? "<span class=\"auth__otp--resendotp disabled-btn\" data-v-6c986b2e>Resend OTP</span>" : "<!---->") + " <span class=\"auth__otp--counter\" data-v-6c986b2e>" + _vm._ssrEscape(_vm._s(_vm.allowResendOtpCounter)) + "</span></p>")], 2) : _vm._e(), _vm._ssrNode(" " + (!_vm.otp_view ? "<div class=\"auth__button\" data-v-6c986b2e>" + (_vm.allowSubmit ? "<button class=\"button-primary slide-fade-in-up\" data-v-6c986b2e>" + _vm._ssrEscape(_vm._s(_vm.loading ? 'Please wait...' : 'Start shopping')) + "</button>" : "<!---->") + " " + (!_vm.allowSubmit ? "<button class=\"button-primary slide-fade-in-up disabled-btn\" data-v-6c986b2e>" + _vm._ssrEscape(_vm._s(_vm.loading ? `Please
                        wait...` : 'Start shopping')) + "</button>" : "<!---->") + "</div>" : "<!---->"))], 2)]), _vm._ssrNode(" <div class=\"auth__or\" data-v-6c986b2e><span data-v-6c986b2e></span></div> "), _vm._ssrNode("<div class=\"auth__googlebtn\" data-v-6c986b2e>", "</div>", [_c('GoogleBtn', {
    on: {
      "update:authValue": _vm.handleAuthChange
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Authenticator.vue?vue&type=template&id=6c986b2e&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(40);

// EXTERNAL MODULE: ./components/GoogleBtn.vue + 4 modules
var GoogleBtn = __webpack_require__(69);

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
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/auth/mail`, {
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
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/auth/verifyotp`, {
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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Authenticator.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Authenticatorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6c986b2e",
  "26f3e760"
  
)

/* harmony default export */ var Authenticator = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {OtpInput: __webpack_require__(90).default,GoogleBtn: __webpack_require__(69).default})


/***/ }),

/***/ 40:
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

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e18d677e", content, true, context)
};

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("bcf46d3c", content, true, context)
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GoogleBtn.vue?vue&type=template&id=158fa70a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "google-btn"
  }, [_vm._ssrNode("<div id=\"g_id_onload\"" + _vm._ssrAttr("data-client_id", _vm.clientId) + " data-context=\"signin\" data-ux_mode=\"popup\" data-callback=\"handleCredentialResponse\" data-auto_prompt=\"false\" data-v-158fa70a></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GoogleBtn.vue?vue&type=template&id=158fa70a&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GoogleBtn.vue?vue&type=script&lang=js

/* harmony default export */ var GoogleBtnvue_type_script_lang_js = ({
  data() {
    return {
      clientId: "845190882138-9pr7hgfgeidb7f90qom56r810mf7vnes.apps.googleusercontent.com"
    };
  },
  emits: ["update:authValue"],
  mounted() {
    this.loadGoogleSignIn();
  },
  methods: {
    loadGoogleSignIn() {
      window.onload = () => {
        google.accounts.id.initialize({
          client_id: this.clientId,
          callback: this.handleCredentialResponse,
          scope: "email"
        });
        google.accounts.id.renderButton(document.getElementById("g_id_onload"), {
          theme: "outline",
          size: "large"
        } // Customize as needed
        );
      };
    },
    parseJwt(token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    },
    handleCredentialResponse(response) {
      //console.log(response)
      this.sendTokenToBackend(response.credential);
    },
    async sendTokenToBackend(token) {
      const decoded = this.parseJwt(token);
      const email = decoded.email;
      const googleId = decoded.sub;
      const picture = decoded.picture;

      //console.log("Decoded Google data:", { email, googleId, picture });

      try {
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/auth/google`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            googleId,
            picture
          })
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.user.token) {
          localStorage.setItem('token', data.user.token);
          //console.log(data)
          // console.log("Auth token received:", data.token);
          this.$emit("update:authValue", data.user.token);
        }
      } catch (error) {
        console.error("Authentication error:", error.message);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/GoogleBtn.vue?vue&type=script&lang=js
 /* harmony default export */ var components_GoogleBtnvue_type_script_lang_js = (GoogleBtnvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/GoogleBtn.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GoogleBtnvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "158fa70a",
  "7f3e5ac0"
  
)

/* harmony default export */ var GoogleBtn = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_158fa70a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_158fa70a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_158fa70a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_158fa70a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_158fa70a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-158fa70a],[data-v-158fa70a]:after,[data-v-158fa70a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-158fa70a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-158fa70a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-158fa70a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-158fa70a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-158fa70a]{font-size:65%}}body[data-v-158fa70a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-158fa70a]{padding:0}}[data-v-158fa70a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-158fa70a]::selection{background-color:#249b48;color:#fff}[data-v-158fa70a]::-webkit-scrollbar{height:8px;width:8px}[data-v-158fa70a]::-webkit-scrollbar-track{background:transparent}[data-v-158fa70a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-158fa70a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-158fa70a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-158fa70a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-158fa70a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-158fa70a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-158fa70a]{animation:slide-in-left-158fa70a .5s ease-out forwards}.button-primary[data-v-158fa70a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-158fa70a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-158fa70a]{opacity:.4}.floating-element[data-v-158fa70a]{animation:float-158fa70a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-158fa70a]{height:100vh!important;overflow:hidden!important}.google-btn[data-v-158fa70a]{display:flex;justify-content:center}@media screen and (max-width:720px){.google-btn[data-v-158fa70a]{display:flex;justify-content:center;margin-bottom:16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e8d68d9a", content, true, context)
};

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_1c99f18c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_1c99f18c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_1c99f18c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_1c99f18c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_1c99f18c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-1c99f18c],[data-v-1c99f18c]:after,[data-v-1c99f18c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-1c99f18c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-1c99f18c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-1c99f18c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-1c99f18c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-1c99f18c]{font-size:65%}}body[data-v-1c99f18c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-1c99f18c]{padding:0}}[data-v-1c99f18c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-1c99f18c]::selection{background-color:#249b48;color:#fff}[data-v-1c99f18c]::-webkit-scrollbar{height:8px;width:8px}[data-v-1c99f18c]::-webkit-scrollbar-track{background:transparent}[data-v-1c99f18c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-1c99f18c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-1c99f18c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-1c99f18c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-1c99f18c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-1c99f18c{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-1c99f18c]{animation:slide-in-left-1c99f18c .5s ease-out forwards}.button-primary[data-v-1c99f18c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-1c99f18c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-1c99f18c]{opacity:.4}.floating-element[data-v-1c99f18c]{animation:float-1c99f18c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-1c99f18c]{height:100vh!important;overflow:hidden!important}.otp-inputs[data-v-1c99f18c]{display:grid;grid-template-columns:repeat(6,1fr);grid-gap:1rem;gap:1rem;width:100%}.otp-inputs__area[data-v-1c99f18c]{height:5rem;width:100%}.otp-input[data-v-1c99f18c]{border:1px solid rgba(36,155,72,.2);border-radius:4px;font-size:1.5rem;height:100%;outline:none;text-align:center;transition:border .2s ease;width:100%}.otp-input[data-v-1c99f18c]:focus{border-color:rgba(36,155,72,.8)}.otp-input.filled[data-v-1c99f18c]{border-color:rgba(36,155,72,.7)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OtpInput.vue?vue&type=template&id=1c99f18c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "otp-inputs"
  }, [_vm._ssrNode(_vm._ssrList(_vm.otpLength, function (digit, index) {
    return "<div class=\"otp-inputs__area\" data-v-1c99f18c><input type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]*\" maxlength=\"1\"" + _vm._ssrAttr("value", _vm.otpDigits[index]) + " class=\"otp-input\" data-v-1c99f18c></div>";
  }))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OtpInput.vue?vue&type=template&id=1c99f18c&scoped=true

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
    }
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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OtpInput.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OtpInputvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1c99f18c",
  "7d8a8992"
  
)

/* harmony default export */ var OtpInput = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_6c986b2e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_6c986b2e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_6c986b2e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_6c986b2e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_6c986b2e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6c986b2e],[data-v-6c986b2e]:after,[data-v-6c986b2e]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-6c986b2e]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-6c986b2e]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-6c986b2e]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-6c986b2e]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-6c986b2e]{font-size:65%}}body[data-v-6c986b2e]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-6c986b2e]{padding:0}}[data-v-6c986b2e]::-moz-selection{background-color:#249b48;color:#fff}[data-v-6c986b2e]::selection{background-color:#249b48;color:#fff}[data-v-6c986b2e]::-webkit-scrollbar{height:8px;width:8px}[data-v-6c986b2e]::-webkit-scrollbar-track{background:transparent}[data-v-6c986b2e]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-6c986b2e]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-6c986b2e]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-6c986b2e{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-6c986b2e{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-6c986b2e{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-6c986b2e]{animation:slide-in-left-6c986b2e .5s ease-out forwards}.button-primary[data-v-6c986b2e]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-6c986b2e]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-6c986b2e]{opacity:.4}.floating-element[data-v-6c986b2e]{animation:float-6c986b2e 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-6c986b2e]{height:100vh!important;overflow:hidden!important}@keyframes growWidth-6c986b2e{0%{width:0}to{width:13rem}}.auth[data-v-6c986b2e]{background:#b6edf2;display:flex;height:100vh;padding:1rem}.auth__logo[data-v-6c986b2e]{height:4rem;margin-bottom:1rem;width:auto}.auth__logo img[data-v-6c986b2e]{height:100%}.auth__formarea[data-v-6c986b2e]{padding:0 10rem;position:relative;width:100%;z-index:8}@media only screen and (max-width:56.25em){.auth__formarea[data-v-6c986b2e]{padding:0;transform:translateY(-4rem)}}.auth__form[data-v-6c986b2e]{background:#fff;border:1px solid #249b48;border-radius:1rem;margin:0 auto;min-height:3rem;padding:1rem;width:100%}.auth__form--google[data-v-6c986b2e]{background:transparent;background:hsla(0,0%,89%,.2);border:none;border-radius:1rem;color:#000;cursor:pointer;font-size:2rem;font-weight:600;margin-bottom:1rem;outline:none;padding:1.9rem 1rem;width:100%}.auth__form--google[data-v-6c986b2e],.auth__form--google span[data-v-6c986b2e]{align-items:center;display:flex;justify-content:center}.auth__form--google span[data-v-6c986b2e]:first-child{height:2rem;margin-right:.5rem;width:2rem}.auth__form--google span:first-child img[data-v-6c986b2e]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.auth__input[data-v-6c986b2e]{border-radius:1rem}.auth__input input[data-v-6c986b2e]{background:#fff;border:none;font-size:2rem;outline:none;padding:1rem;width:100%}.auth__method[data-v-6c986b2e]{padding:1rem}.auth__method button[data-v-6c986b2e]{background:transparent;border:none;color:#249b48;font-size:1.4rem;font-weight:600}.auth__content[data-v-6c986b2e]{align-items:center;background:#b6edf2;border-radius:1rem;flex-direction:column;height:65rem;margin-top:5rem;padding:3rem 1rem;position:relative}.auth__content[data-v-6c986b2e],.auth__or[data-v-6c986b2e]{display:flex;justify-content:center;width:100%}.auth__or[data-v-6c986b2e]{font-size:1.6rem;margin:2rem 0 1rem;text-align:center;text-transform:uppercase}.auth__button[data-v-6c986b2e]{margin-top:3rem}.auth__button button[data-v-6c986b2e]{border-radius:12px;font-size:1.8rem;font-weight:600;padding:1.8rem;width:100%}.auth__h1[data-v-6c986b2e]{flex-direction:column;font-size:3.7rem;font-weight:600;justify-content:center;line-height:5rem;margin-bottom:2rem;position:relative;text-align:center}.auth__h1[data-v-6c986b2e],.auth__h1--bottom[data-v-6c986b2e]{display:flex}.auth__h1--bottomp1 span[data-v-6c986b2e]{display:inline-block;margin-right:1rem}.auth__h1--bottomp1 span.line[data-v-6c986b2e]{bottom:-1.6rem;left:2rem;margin:0;position:absolute;width:13rem}.auth__h1--bottomp1 span.line img[data-v-6c986b2e]{height:100%;width:100%}.auth__h2[data-v-6c986b2e]{font-size:2rem;font-weight:500;text-align:center}.auth__htags[data-v-6c986b2e]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:3rem;margin-top:5rem;transform:translateY(9rem);width:100%}.auth__googlebtn[data-v-6c986b2e]{position:relative;z-index:4}@media only screen and (max-width:56.25em){.auth__googlebtn[data-v-6c986b2e]{transform:translateY(-6rem)}}.auth__cartongif[data-v-6c986b2e]{height:32rem;transform:translateY(5rem)}.auth__cartongif img[data-v-6c986b2e]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.auth__cloud[data-v-6c986b2e]{bottom:0;height:10rem;position:absolute;z-index:3}.auth__cloud img[data-v-6c986b2e]{height:100;-o-object-fit:cover;object-fit:cover;width:auto}.auth__otp--header[data-v-6c986b2e]{font-weight:600;margin-bottom:2rem}.auth__otp--header[data-v-6c986b2e],.auth__otp--resendbtn[data-v-6c986b2e]{color:#249b48;font-size:1.6rem;text-align:center}.auth__otp--resendbtn[data-v-6c986b2e]{cursor:pointer;font-weight:500;margin-top:1rem}.auth__otp--resendotp[data-v-6c986b2e]{-webkit-text-decoration:underline;text-decoration:underline}.auth__otp--counter[data-v-6c986b2e]{color:#000;font-size:1.1rem}.grow-bar[data-v-6c986b2e]{animation:growWidth-6c986b2e 1s ease-out forwards;width:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=authenticator.js.map