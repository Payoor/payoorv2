exports.ids = [10];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=google-btn.js.map