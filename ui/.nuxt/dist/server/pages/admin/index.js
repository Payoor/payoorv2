exports.ids = [26];
exports.modules = {

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("682bffc2", content, true, context)
};

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57315a92_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57315a92_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57315a92_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57315a92_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57315a92_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-57315a92],[data-v-57315a92]:after,[data-v-57315a92]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-57315a92]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-57315a92]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-57315a92]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-57315a92]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-57315a92]{font-size:65%}}body[data-v-57315a92]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-57315a92]{padding:0}}[data-v-57315a92]::-moz-selection{background-color:#249b48;color:#fff}[data-v-57315a92]::selection{background-color:#249b48;color:#fff}[data-v-57315a92]::-webkit-scrollbar{height:8px;width:8px}[data-v-57315a92]::-webkit-scrollbar-track{background:transparent}[data-v-57315a92]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-57315a92]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-57315a92]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-57315a92{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-57315a92{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-57315a92{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-57315a92{to{transform:rotate(1turn)}}.slide-in-left[data-v-57315a92]{animation:slide-in-left-57315a92 .5s ease-out forwards}.button-primary[data-v-57315a92]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-57315a92]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-57315a92]{opacity:.4}.floating-element[data-v-57315a92]{animation:float-57315a92 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-57315a92]{height:100vh!important;overflow:hidden!important}.spinner[data-v-57315a92]{animation:spin-57315a92 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-57315a92]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-57315a92]{filter:blur(3px)}.error-message[data-v-57315a92]{animation:slideFadeInUp-57315a92 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-57315a92]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-57315a92]{overflow-x:hidden}.landing__top[data-v-57315a92]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-57315a92]{display:flex}}.landing__topleft[data-v-57315a92]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-57315a92]{display:block;width:100%}}.landing__topleft--auth[data-v-57315a92]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-57315a92]{padding:0;width:auto}}.landing__topright[data-v-57315a92],.landing__topright--img[data-v-57315a92]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-57315a92]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-57315a92]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-57315a92]{display:none}}.landing__content[data-v-57315a92]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-57315a92]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-57315a92]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-57315a92]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-57315a92]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.adminlogin__content[data-v-57315a92]{align-items:center;background:#f7f7f7;display:flex;justify-content:center;min-height:100vh;padding:2rem}.adminlogin__form[data-v-57315a92]{background:#fff;border-radius:1.5rem;box-shadow:0 0 10px rgba(0,0,0,.1);max-width:400px;padding:3rem;width:100%}.adminlogin__title[data-v-57315a92]{font-size:2rem;margin-bottom:2rem;text-align:center}.adminlogin__field[data-v-57315a92]{margin-bottom:1.5rem}.adminlogin__field label[data-v-57315a92]{display:block;font-weight:600;margin-bottom:.5rem}.adminlogin__field input[data-v-57315a92]{border:1px solid #ccc;border-radius:.8rem;font-size:1rem;padding:.8rem;width:100%}.adminlogin .button-primary[data-v-57315a92]{border:none;border-radius:1rem;color:#fff;cursor:pointer;font-size:1.2rem;padding:1rem;transition:background .3s;width:100%}.adminlogin .button-primary[data-v-57315a92]:disabled{background:#a0a0a0;cursor:not-allowed}.adminlogin .button-primary[data-v-57315a92]:hover:not(:disabled){background:#0056b3}.adminlogin__error[data-v-57315a92]{color:red;font-size:1rem;margin-top:1rem;text-align:center}.adminlogin__error-msg[data-v-57315a92]{color:#d9534f;display:block;font-size:.9rem;margin-top:.2rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=template&id=57315a92&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "adminlogin"
  }, [_vm._ssrNode("<div class=\"adminlogin__content\" data-v-57315a92><div class=\"adminlogin__form\" data-v-57315a92><h2 class=\"adminlogin__title\" data-v-57315a92>Admin Login</h2> <form data-v-57315a92><div class=\"adminlogin__field\" data-v-57315a92><label for=\"email\" data-v-57315a92>Email</label> <input type=\"email\" id=\"email\" required=\"required\"" + _vm._ssrAttr("value", _vm.email) + " data-v-57315a92> " + (_vm.email && !_vm.validEmail ? "<small class=\"adminlogin__error-msg\" data-v-57315a92>\n                        Please enter a valid email.\n                    </small>" : "<!---->") + "</div> <div class=\"adminlogin__field\" data-v-57315a92><label for=\"password\" data-v-57315a92>Password</label> <input type=\"password\" id=\"password\" required=\"required\"" + _vm._ssrAttr("value", _vm.password) + " data-v-57315a92></div> <button type=\"submit\"" + _vm._ssrAttr("disabled", !_vm.canSubmit) + " class=\"button-primary\" data-v-57315a92>\n                    Login\n                </button></form> " + (_vm.error ? "<p class=\"adminlogin__error\" data-v-57315a92>" + _vm._ssrEscape(_vm._s(_vm.error)) + "</p>" : "<!---->") + "</div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=template&id=57315a92&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=script&lang=js

/* harmony default export */ var adminvue_type_script_lang_js = ({
  name: 'AdminLogin',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  computed: {
    validEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    },
    canSubmit() {
      return this.validEmail && this.password.trim().length > 0;
    }
  },
  methods: {
    async login() {
      this.error = '';
      if (!this.canSubmit) return;
      try {
        const response = await fetch(`${api["c" /* serverurl */]}/admin/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });
        await Object(api["b" /* handleFetchError */])(response);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Login failed');
        }

        // Store token in localStorage or Vuex
        localStorage.setItem('admin_token', data.token);

        // Redirect to dashboard
        this.$router.push('/admin/dashboard');
      } catch (err) {
        this.error = err.message;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_adminvue_type_script_lang_js = (adminvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/admin/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(143)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "57315a92",
  "3601a481"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map