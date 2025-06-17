exports.ids = [28];
exports.modules = {

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("540fd781", content, true, context)
};

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_googlecallback_vue_vue_type_style_index_0_id_7b948869_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_googlecallback_vue_vue_type_style_index_0_id_7b948869_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_googlecallback_vue_vue_type_style_index_0_id_7b948869_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_googlecallback_vue_vue_type_style_index_0_id_7b948869_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_googlecallback_vue_vue_type_style_index_0_id_7b948869_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".redirecting[data-v-7b948869]{align-items:center;display:flex;font-size:1.2rem;height:100vh;justify-content:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/googlecallback.vue?vue&type=template&id=7b948869&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "redirecting"
  }, [_vm._ssrNode("<p data-v-7b948869>Signing you in with Google...</p>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/auth/googlecallback.vue?vue&type=template&id=7b948869&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/googlecallback.vue?vue&type=script&lang=js

/* harmony default export */ var googlecallbackvue_type_script_lang_js = ({
  mounted() {
    this.initGoogleRedirectFlow();
  },
  methods: {
    initGoogleRedirectFlow() {
      if (!window.google || !window.google.accounts) {
        console.error("Google Identity Services not loaded");
        return;
      }
      window.google.accounts.id.initialize({
        client_id: "845190882138-9pr7hgfgeidb7f90qom56r810mf7vnes.apps.googleusercontent.com",
        callback: this.handleCredentialResponse
      });

      // Auto-handles credential from URL fragment and triggers callback
      window.google.accounts.id.prompt();
    },
    parseJwt(token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    },
    async handleCredentialResponse(response) {
      if (!response.credential) {
        console.error("No credential received in redirect response.");
        return;
      }
      console.log(response, 'check here');

      /*const token = response.credential;
      console.log(token, 'token')
      /*const decoded = this.parseJwt(token);
      const { email, sub: googleId, picture } = decoded;
       console.log(email, googleId, picture)
         /*try {
        const res = await fetch(`${serverurl}/shopper/auth/google`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, googleId, picture }),
        });
           if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
           if (data.user.token) {
          localStorage.setItem('token', data.user.token);
          this.$router.replace('/'); // Redirect to homepage or dashboard
        }
      } catch (error) {
        console.error("Google Sign-In Failed:", error.message);
      }*/
    }
  }
});
// CONCATENATED MODULE: ./pages/auth/googlecallback.vue?vue&type=script&lang=js
 /* harmony default export */ var auth_googlecallbackvue_type_script_lang_js = (googlecallbackvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/auth/googlecallback.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(168)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_googlecallbackvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7b948869",
  "cfbbb298"
  
)

/* harmony default export */ var googlecallback = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=googlecallback.js.map