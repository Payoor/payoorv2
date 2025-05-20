exports.ids = [18,2,6];
exports.modules = {

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0397ddea", content, true, context)
};

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_0367d165_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_0367d165_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_0367d165_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_0367d165_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_0367d165_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0367d165],[data-v-0367d165]:after,[data-v-0367d165]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0367d165]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0367d165]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0367d165]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0367d165]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0367d165]{font-size:65%}}body[data-v-0367d165]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0367d165]{padding:0}}[data-v-0367d165]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0367d165]::selection{background-color:#249b48;color:#fff}[data-v-0367d165]::-webkit-scrollbar{height:8px;width:8px}[data-v-0367d165]::-webkit-scrollbar-track{background:transparent}[data-v-0367d165]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0367d165]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0367d165]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0367d165{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0367d165{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0367d165{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-0367d165]{animation:slide-in-left-0367d165 .5s ease-out forwards}.button-primary[data-v-0367d165]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0367d165]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0367d165]{opacity:.4}.floating-element[data-v-0367d165]{animation:float-0367d165 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0367d165]{height:100vh!important;overflow:hidden!important}.aboutus[data-v-0367d165]{background:#fff;min-height:100vh}.aboutus__header[data-v-0367d165]{left:0;position:fixed;top:0;width:100vw;z-index:6}.aboutus__header.auth[data-v-0367d165],.aboutus__header.unauth[data-v-0367d165]{background:transparent}@media only screen and (max-width:56.25em){.aboutus__header.auth[data-v-0367d165]{background:#fff}}.aboutus__jumbotron[data-v-0367d165]{border-radius:3rem;height:30rem;margin-bottom:3rem;overflow:hidden;width:100%}.aboutus__jumbotron img[data-v-0367d165]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.aboutus__h1[data-v-0367d165]{font-size:3rem;font-weight:400;margin-bottom:4rem}.aboutus__h1 span[data-v-0367d165]{color:#249b48;display:inline-block;font-size:4rem;position:relative}.aboutus__h1 span.name-text[data-v-0367d165]{animation:moveInUp .5s ease forwards}.aboutus__h1 span.name[data-v-0367d165]:after{animation:growFromLeft .5s ease forwards;background:#249b48;border-radius:3rem;bottom:-7px;content:\"\";height:.3rem;left:0;position:absolute;width:0}.aboutus__content[data-v-0367d165]{margin:0 auto;padding:2rem;width:100rem}@media only screen and (max-width:56.25em){.aboutus__content[data-v-0367d165]{width:auto}}.aboutus__content--heading[data-v-0367d165]{font-size:3rem;font-weight:400;margin-bottom:2rem}.aboutus__content--section[data-v-0367d165]{display:block;font-size:1.5rem;margin-bottom:1rem}.aboutus__content--section.last[data-v-0367d165]{margin-bottom:3rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/aboutus.vue?vue&type=template&id=0367d165&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"aboutus\" data-v-0367d165>", "</div>", [_vm._ssrNode("<div class=\"aboutus__header\" data-v-0367d165>", "</div>", [_c('ChatHeader', {
    attrs: {
      "logovisible": true,
      "jwt": true,
      "backRoute": '/'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"aboutus__content\" data-v-0367d165>", "</div>", [_vm._ssrNode("<figure class=\"aboutus__jumbotron\" data-v-0367d165>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/copy-mast-img.png',
      expression: "'/imgs/copy-mast-img.png'"
    }]
  }, [])]), _vm._ssrNode(" <h1 class=\"aboutus__h1\" data-v-0367d165>\n        About <span class=\"name\" data-v-0367d165><span class=\"name-text\" data-v-0367d165>Payoor</span></span></h1> <p class=\"aboutus__content--heading\" data-v-0367d165>Our Story</p> <p class=\"aboutus__content--section\" data-v-0367d165>\n        On May 22nd, 2023, Payoor was born out of a simple but powerful truth, grocery\n        shopping can be stressful, and one of our founders &quot;does not like stress&quot;. After\n        one too many exhausting market runs, the thought became clear: There has to be a\n        faster, easier way to get fresh groceries for home-cooked meals.\n      </p> <p class=\"aboutus__content--section last\" data-v-0367d165>\n        That single frustration sparked a journey that took over a year of research,\n        development, and fine-tuning to create Payoor; a smart, seamless grocery\n        shopping experience designed for people who value their time but still want\n        quality, fresh ingredients.\n      </p> <p class=\"aboutus__content--heading\" data-v-0367d165>Our Mission</p> <p class=\"aboutus__content--section last\" data-v-0367d165>\n        To make grocery shopping fast, effortless, and stress-free by providing a smart,\n        clean, and convenient way to get fresh food straight to your kitchen. We believe\n        that every meal shouldn't a stressful and tragic backstory.\n      </p> <p class=\"aboutus__content--heading\" data-v-0367d165>Our Vision</p> <p class=\"aboutus__content--section\" data-v-0367d165>\n        To redefine how people shop for groceries by making convenience, freshness, and\n        simplicity the new standard one home-cooked meal at a time.\n      </p>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/aboutus.vue?vue&type=template&id=0367d165&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/aboutus.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(119)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0367d165",
  "45c71c5a"
  
)

/* harmony default export */ var aboutus = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatHeader: __webpack_require__(47).default})


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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['jwt'],
  data() {
    return {
      loading: false,
      validToken: null,
      excludedPaths: ['/aboutus']
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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("07bc124a", content, true, context)
};

/***/ }),

/***/ 43:
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
  
  var style0 = __webpack_require__(45)
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

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("04d1aed1", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-4801e665],[data-v-4801e665]:after,[data-v-4801e665]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-4801e665]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-4801e665]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-4801e665]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-4801e665]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-4801e665]{font-size:65%}}body[data-v-4801e665]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-4801e665]{padding:0}}[data-v-4801e665]::-moz-selection{background-color:#249b48;color:#fff}[data-v-4801e665]::selection{background-color:#249b48;color:#fff}[data-v-4801e665]::-webkit-scrollbar{height:8px;width:8px}[data-v-4801e665]::-webkit-scrollbar-track{background:transparent}[data-v-4801e665]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-4801e665]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-4801e665]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-4801e665{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-4801e665{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-4801e665{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-4801e665]{animation:slide-in-left-4801e665 .5s ease-out forwards}.button-primary[data-v-4801e665]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-4801e665]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-4801e665]{opacity:.4}.floating-element[data-v-4801e665]{animation:float-4801e665 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-4801e665]{height:100vh!important;overflow:hidden!important}.cartbtn[data-v-4801e665]{color:#000;position:relative}.cartbtn__icon[data-v-4801e665]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-4801e665]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-4801e665]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-4801e665],.cartbtn__icon--total[data-v-4801e665]{color:#fff;font-weight:600}.cartbtn svg[data-v-4801e665]{height:80%;width:80%;fill:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=template&id=a406779e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chat-header"
  }, [_vm._ssrNode("<div class=\"chat-header__left\" data-v-a406779e>" + (_vm.name ? "<div class=\"chat-header__name\" data-v-a406779e><span class=\"svg\" data-v-a406779e><svg data-v-a406779e><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-a406779e></use></svg></span> <span class=\"label\" data-v-a406779e>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></div>" : "<!---->") + " " + (_vm.logovisible ? "<figure" + _vm._ssrClass("chat-header__left--logo", {
    'green': _vm.green
  }) + " data-v-a406779e><img src=\"/imgs/logo.png\" data-v-a406779e></figure>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"chat-header__right\" data-v-a406779e>", "</div>", [_vm._ssrNode("<div class=\"chat-header__right--cart\" data-v-a406779e>", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" <div" + _vm._ssrClass("chat-header__burger", {
    'unauth': !_vm.jwt,
    'green': _vm.green
  }) + " data-v-a406779e><span data-v-a406779e></span> <span data-v-a406779e></span> <span data-v-a406779e></span></div>")], 2), _vm._ssrNode(" "), _vm.menuopen ? _vm._ssrNode("<div" + _vm._ssrClass("chat-header__menu", {
    'auth': _vm.jwt
  }) + " data-v-a406779e>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menubody slide-in-left\" data-v-a406779e>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menuitems\" data-v-a406779e>", "</div>", [_vm._ssrNode("<figure class=\"chat-header__left--logo bottom-1rem\" data-v-a406779e>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/logo.png',
      expression: "'/imgs/logo.png'"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chat-header__menuitem\" data-v-a406779e><span class=\"svg\" data-v-a406779e></span> <span class=\"label\" data-v-a406779e>About us</span></div> " + (_vm.jwt ? "<div class=\"chat-header__menuitem\" data-v-a406779e><span class=\"svg\" data-v-a406779e></span> <span class=\"label\" data-v-a406779e>Orders</span></div>" : "<!---->") + " <div class=\"chat-header__menuitem\" data-v-a406779e><span class=\"svg\" data-v-a406779e></span></div>")], 2), _vm._ssrNode(" <div class=\"chat-header__menuitems\" data-v-a406779e><div class=\"chat-header__menuitem\" data-v-a406779e><span class=\"svg\" data-v-a406779e></span></div> " + (_vm.jwt ? "<div class=\"chat-header__menuitem\" data-v-a406779e><span class=\"svg\" data-v-a406779e></span> <span class=\"label\" data-v-a406779e>Signout</span></div>" : "<!---->") + "</div>")], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=template&id=a406779e&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(40);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=script&lang=js


/* harmony default export */ var ChatHeadervue_type_script_lang_js = ({
  mixins: [jwt_mixin["a" /* default */]],
  props: ['logovisible', 'name', 'backRoute', 'green'],
  emits: ["update:authValue"],
  data() {
    return {
      menuopen: false
    };
  },
  async mounted() {
    const token = await this.getValidToken();
    if (token) {
      this.getValidUser(token);
    } else if (!this.excludedPaths.includes(this.$route.path)) {
      this.$router.push({
        path: '/',
        query: {
          ...this.$route.query
        }
      });
    }
    this.$store.dispatch("cart/initializeCart");
    if (window.innerWidth > 900 && this.jwt) {
      this.menuopen = true;
    } else {
      this.menuopen = false;
    }
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
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
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/auth/validuser?jwttoken=${token}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Origin': window.location.origin,
            'Access-Control-Request-Method': 'GET',
            'Access-Control-Request-Headers': 'Content-Type'
          }
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error performing autocomplete:', errorData);
          return;
        }
        const data = await response.json();
        if (response.status !== 200) {
          this.$router.push({
            path: this.backRoute,
            query: {
              ...this.$route.query
            }
          });
        } else {}
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
      if (window.innerWidth > 900) {
        this.menuopen = true;
      } else {
        this.menuopen = false;
      }
    },
    async signOut() {
      try {
        const token = await this.getValidToken();
        if (!token) {
          this.$router.push('/');
          this.$emit("update:authValue", null);
          return;
        }
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/auth/signout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to sign out');
        }
        const data = await response.json();
        console.log(data);
        localStorage.removeItem('jwt');
        this.$router.push('/');
        this.$emit("update:authValue", null);

        // console.log('logged out')
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
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatHeadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a406779e",
  "5f357078"
  
)

/* harmony default export */ var ChatHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartButton: __webpack_require__(43).default})


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_a406779e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_a406779e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_a406779e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_a406779e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_a406779e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-a406779e],[data-v-a406779e]:after,[data-v-a406779e]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-a406779e]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-a406779e]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-a406779e]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-a406779e]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-a406779e]{font-size:65%}}body[data-v-a406779e]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-a406779e]{padding:0}}[data-v-a406779e]::-moz-selection{background-color:#249b48;color:#fff}[data-v-a406779e]::selection{background-color:#249b48;color:#fff}[data-v-a406779e]::-webkit-scrollbar{height:8px;width:8px}[data-v-a406779e]::-webkit-scrollbar-track{background:transparent}[data-v-a406779e]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-a406779e]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-a406779e]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-a406779e{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-a406779e{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-a406779e{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-a406779e]{animation:slide-in-left-a406779e .5s ease-out forwards}.button-primary[data-v-a406779e]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-a406779e]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-a406779e]{opacity:.4}.floating-element[data-v-a406779e]{animation:float-a406779e 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-a406779e]{height:100vh!important;overflow:hidden!important}.chat-header[data-v-a406779e]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-a406779e]{padding:2rem 1rem 1rem}}.chat-header__name[data-v-a406779e],.chat-header__name span.svg[data-v-a406779e]{align-items:center;display:flex}.chat-header__name span.svg[data-v-a406779e]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-a406779e]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-a406779e]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-a406779e]{display:none}}.chat-header__left--logo[data-v-a406779e]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-a406779e]{margin-bottom:5rem}.chat-header__left--logo img[data-v-a406779e]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-a406779e]{height:4.5rem}.chat-header__burger[data-v-a406779e]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-a406779e]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-a406779e]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-a406779e]{background:#fff}.chat-header__burger.green span[data-v-a406779e]{background:#249b48}.chat-header__menu[data-v-a406779e]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-a406779e]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-a406779e],.chat-header__menu.auth[data-v-a406779e]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-a406779e]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-a406779e]{font-size:1.8rem}}.chat-header__menuitem span[data-v-a406779e]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-a406779e]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=aboutus.js.map