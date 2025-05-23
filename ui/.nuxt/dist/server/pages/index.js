exports.ids = [26,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18];
exports.modules = Array(42).concat([
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("07bc124a", content, true, context)
};

/***/ }),
/* 45 */
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
  
  var style0 = __webpack_require__(47)
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("11cadb1b", content, true, context)
};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_4801e665_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 48 */
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
/* 49 */
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
var api = __webpack_require__(42);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(43);

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
  
  var style0 = __webpack_require__(50)
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
installComponents(component, {CartButton: __webpack_require__(45).default})


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_39a75015_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 51 */
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("055c85f0", content, true, context)
};

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_76d2fbc8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_76d2fbc8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_76d2fbc8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_76d2fbc8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_76d2fbc8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-76d2fbc8],[data-v-76d2fbc8]:after,[data-v-76d2fbc8]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-76d2fbc8]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-76d2fbc8]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-76d2fbc8]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-76d2fbc8]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-76d2fbc8]{font-size:65%}}body[data-v-76d2fbc8]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-76d2fbc8]{padding:0}}[data-v-76d2fbc8]::-moz-selection{background-color:#249b48;color:#fff}[data-v-76d2fbc8]::selection{background-color:#249b48;color:#fff}[data-v-76d2fbc8]::-webkit-scrollbar{height:8px;width:8px}[data-v-76d2fbc8]::-webkit-scrollbar-track{background:transparent}[data-v-76d2fbc8]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-76d2fbc8]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-76d2fbc8]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-76d2fbc8{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-76d2fbc8{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-76d2fbc8{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-76d2fbc8{to{transform:rotate(1turn)}}.slide-in-left[data-v-76d2fbc8]{animation:slide-in-left-76d2fbc8 .5s ease-out forwards}.button-primary[data-v-76d2fbc8]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-76d2fbc8]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-76d2fbc8]{opacity:.4}.floating-element[data-v-76d2fbc8]{animation:float-76d2fbc8 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-76d2fbc8]{height:100vh!important;overflow:hidden!important}.spinner[data-v-76d2fbc8]{animation:spin-76d2fbc8 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-76d2fbc8]{stroke:#249b48;stroke-linecap:round}.chatoption[data-v-76d2fbc8]{background-color:#fff;border:2px solid rgba(36,155,72,.5);border-radius:1rem;display:flex;justify-content:space-between;margin-bottom:2rem;padding:2rem 1.5rem}.chatoption__loader[data-v-76d2fbc8]{align-items:center;display:flex;height:12rem;justify-content:center}.chatoption__left[data-v-76d2fbc8]{display:flex}.chatoption__details--name[data-v-76d2fbc8]{font-size:1.7rem;font-weight:600;margin-bottom:1.2rem}.chatoption__details--price[data-v-76d2fbc8]{display:flex;font-size:1.6rem;font-weight:600}.chatoption__details--price span[data-v-76d2fbc8]{color:#249b48;font-size:600}.chatoption__right[data-v-76d2fbc8]{align-items:flex-end;display:flex;flex-direction:column;justify-content:space-between}.chatoption__img[data-v-76d2fbc8]{border-radius:1rem;height:10rem;margin-right:.5rem;overflow:hidden;width:10rem}.chatoption__img img[data-v-76d2fbc8]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption__quantity[data-v-76d2fbc8]{display:grid;grid-template-columns:repeat(3,1fr)}span[data-v-76d2fbc8]{align-items:center;display:flex;justify-content:center}span.quantity[data-v-76d2fbc8]{font-size:1.5rem;font-weight:600}span.svg[data-v-76d2fbc8]{border:1px solid rgba(36,155,72,.5);border-radius:.5rem;padding:.5rem}span.svg svg[data-v-76d2fbc8]{height:2rem;width:2rem;fill:rgba(0,0,0,.5)}span.svg svg.red[data-v-76d2fbc8]{fill:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2e7a3693", content, true, context)
};

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOption.vue?vue&type=template&id=76d2fbc8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.loading && !_vm.option ? _vm._ssrNode("<div class=\"chatoption__loader\" data-v-76d2fbc8>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-76d2fbc8></div>")], 2) : _vm.option ? _vm._ssrNode("<div class=\"chatoption slide-fade-in-up\" data-v-76d2fbc8>", "</div>", [_vm._ssrNode("<div class=\"chatoption__left\" data-v-76d2fbc8>", "</div>", [_vm._ssrNode("<figure class=\"chatoption__img\" data-v-76d2fbc8>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.option.image.length ? _vm.option.image : _vm.option.productimg,
      expression: "option.image.length ? option.image : option.productimg"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chatoption__details\" data-v-76d2fbc8><p class=\"chatoption__details--name\" data-v-76d2fbc8>" + _vm._ssrEscape(_vm._s(_vm.option.unit)) + "</p> <p class=\"chatoption__details--price\" data-v-76d2fbc8>\n                    ₦\n                    <span data-v-76d2fbc8>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.option.price))) + "</span></p></div>")], 2), _vm._ssrNode(" <div class=\"chatoption__right\" data-v-76d2fbc8><div class=\"chatoption__delete\" data-v-76d2fbc8><span class=\"svg\" data-v-76d2fbc8><svg data-v-76d2fbc8><use xlink:href=\"/svg/symbol-defs.svg#icon-trash\" data-v-76d2fbc8></use></svg></span></div> <div class=\"chatoption__quantity\" data-v-76d2fbc8><span class=\"svg\" data-v-76d2fbc8><svg data-v-76d2fbc8><use xlink:href=\"/svg/symbol-defs.svg#icon-minus1\" data-v-76d2fbc8></use></svg></span> <span class=\"quantity\" data-v-76d2fbc8>" + _vm._ssrEscape(_vm._s(_vm.quantity)) + "</span> <span class=\"svg\" data-v-76d2fbc8><svg data-v-76d2fbc8><use xlink:href=\"/svg/symbol-defs.svg#icon-plus\" data-v-76d2fbc8></use></svg></span></div></div>")], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatOption.vue?vue&type=template&id=76d2fbc8&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(42);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(43);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOption.vue?vue&type=script&lang=js



/* harmony default export */ var ChatOptionvue_type_script_lang_js = ({
  mixins: [jwt_mixin["a" /* default */]],
  props: {
    data: {
      type: Object
    },
    mongooseid: {
      type: String
    }
  },
  data() {
    return {
      quantity: 0,
      option: null,
      loading: false
    };
  },
  mounted() {
    if (this.data) {
      this.option = this.data;
    } else {
      this.getOption();
    }
    if (this.mongooseid) {
      this.quantity = this.cartItems[this.mongooseid] ? this.cartItems[this.mongooseid] : 0;
    } else {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
      this.quantity = cartItems[this.data._id] ? cartItems[this.data._id] : 0;
    }
  },
  computed: {
    ...Object(external_vuex_["mapState"])("cart", {
      cartTotal: state => state.total,
      cartItems: state => state.items,
      cartLength: state => state.totalItems.length
    })
  },
  /*
      stump
  watch: {
      cartItems: {
          handler(newItems) {
              console.log('this just ran', newItems)
               const safeCartItems = newItems || {};
              const safeCartLength = Object.keys(safeCartItems).length;
              const total = this.cartTotal;
               localStorage.setItem('cartItems', JSON.stringify(safeCartItems));
              localStorage.setItem('cartTotal', JSON.stringify(total));
              localStorage.setItem('cartLength', JSON.stringify(safeCartLength));
          },
          deep: true,
          immediate: true
      }
  },*/
  methods: {
    syncCartToLocalStorage(newItems = this.cartItems) {
      //  console.log('syncCartToLocalStorage ran', newItems);

      const safeCartItems = newItems || {};
      const safeCartLength = Object.keys(safeCartItems).length;
      const total = this.cartTotal;
      try {
        localStorage.setItem('cartItems', JSON.stringify(safeCartItems));
        localStorage.setItem('cartTotal', JSON.stringify(total));
        localStorage.setItem('cartLength', JSON.stringify(safeCartLength));
      } catch (err) {
        console.error('Failed to sync cart to localStorage:', err);
      }
    },
    async getOption() {
      this.loading = true;
      const token = await this.getValidToken();
      try {
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/getoption?mongooseid=${this.mongooseid}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
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
          variant
        } = data;
        this.option = variant;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    formatPrice(price) {
      return price ? price.toLocaleString() : 0;
    },
    incrementQuantity() {
      this.quantity++;

      //  console.log(typeof this.option.price, 'this.price')

      this.$store.dispatch("cart/addItem", {
        id: this.option._id,
        quantity: this.quantity,
        price: this.option.price
      });
      this.syncCartToLocalStorage();
    },
    decrementQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
        this.$store.dispatch("cart/removeItem", {
          id: this.option._id,
          quantity: this.quantity,
          price: this.option.price
        });
      }
      this.syncCartToLocalStorage();
    },
    removeItem() {
      if (this.quantity > 0) {
        this.quantity = 0;
        this.$store.dispatch("cart/removeItem", {
          id: this.option._id,
          quantity: this.quantity,
          price: this.option.price
        });
      }
      this.syncCartToLocalStorage();
    }
  }
});
// CONCATENATED MODULE: ./components/ChatOption.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatOptionvue_type_script_lang_js = (ChatOptionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ChatOption.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatOptionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "76d2fbc8",
  "3b35e260"
  
)

/* harmony default export */ var ChatOption = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 58 */
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
  add("672593f6", content, true, context)
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("8a77aa54", content, true, context)
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6f0700e4", content, true, context)
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("26eb682f", content, true, context)
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3fa4235a", content, true, context)
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4ffd796d", content, true, context)
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4a47b907", content, true, context)
};

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_4aab6ba2_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_4aab6ba2_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_4aab6ba2_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_4aab6ba2_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_4aab6ba2_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-4aab6ba2],[data-v-4aab6ba2]:after,[data-v-4aab6ba2]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-4aab6ba2]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-4aab6ba2]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-4aab6ba2]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-4aab6ba2]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-4aab6ba2]{font-size:65%}}body[data-v-4aab6ba2]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-4aab6ba2]{padding:0}}[data-v-4aab6ba2]::-moz-selection{background-color:#249b48;color:#fff}[data-v-4aab6ba2]::selection{background-color:#249b48;color:#fff}[data-v-4aab6ba2]::-webkit-scrollbar{height:8px;width:8px}[data-v-4aab6ba2]::-webkit-scrollbar-track{background:transparent}[data-v-4aab6ba2]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-4aab6ba2]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-4aab6ba2]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-4aab6ba2{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-4aab6ba2{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-4aab6ba2{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-4aab6ba2{to{transform:rotate(1turn)}}.slide-in-left[data-v-4aab6ba2]{animation:slide-in-left-4aab6ba2 .5s ease-out forwards}.button-primary[data-v-4aab6ba2]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-4aab6ba2]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-4aab6ba2]{opacity:.4}.floating-element[data-v-4aab6ba2]{animation:float-4aab6ba2 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-4aab6ba2]{height:100vh!important;overflow:hidden!important}.spinner[data-v-4aab6ba2]{animation:spin-4aab6ba2 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-4aab6ba2]{stroke:#249b48;stroke-linecap:round}.chatoptions[data-v-4aab6ba2]{height:100vh;overflow:hidden;overflow-y:scroll;padding:4rem 2rem 19rem;width:100vw;z-index:10}.chatoptions[data-v-4aab6ba2],.chatoptions__header[data-v-4aab6ba2]{background:#fff;left:0;position:fixed;top:0}.chatoptions__header[data-v-4aab6ba2]{align-items:center;color:#000;display:flex;font-size:1.9rem;padding:2rem 1rem;width:100%;z-index:3}.chatoptions__header span[data-v-4aab6ba2]{cursor:pointer}.chatoptions__header span.svg[data-v-4aab6ba2]{align-items:center;display:flex;margin-right:.5rem}.chatoptions__header span.svg svg[data-v-4aab6ba2]{height:2rem;width:2rem;fill:#fff;color:#fff}.chatoptions__options[data-v-4aab6ba2]{margin-top:3rem}.chatoptions__description[data-v-4aab6ba2]{border-top:1px solid #eee;margin-top:2rem;padding:1rem 0}.chatoptions__description .description__title[data-v-4aab6ba2]{color:#000;font-size:1.6rem;font-weight:700;margin-bottom:1rem}.chatoptions__description .description__text[data-v-4aab6ba2]{color:#555;font-size:1.4rem;line-height:1.6}.chatoptions__content[data-v-4aab6ba2]{display:flex;justify-content:center}.chatoptions__content--body[data-v-4aab6ba2]{width:60rem}@media only screen and (max-width:56.25em){.chatoptions__content--body[data-v-4aab6ba2]{width:100%}}.chatoptions__loading[data-v-4aab6ba2]{align-items:center;display:flex;justify-content:center;padding:5rem 0}.chatoptions__bottom[data-v-4aab6ba2]{background:#fff;bottom:0;display:flex;justify-content:center;left:0;padding:1rem 1rem 2rem;position:fixed;width:100%;z-index:4}.chatoptions__bottom.column[data-v-4aab6ba2]{flex-direction:column}@media only screen and (max-width:56.25em){.chatoptions__bottom[data-v-4aab6ba2]{display:block}}.chatoptions__bottom button[data-v-4aab6ba2]{font-size:2rem;padding:2rem;width:100%}.chatoptions__bottom button.spacebetween[data-v-4aab6ba2]{display:flex;justify-content:space-between}.chatoptions__bottom button.transparent-button[data-v-4aab6ba2]{margin-bottom:2rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    setLoading: Function
  },
  data() {
    return {
      products: []
    };
  },
  emits: ['update:products'],
  methods: {
    async postMessageFromQuery(message) {
      const token = localStorage.getItem('jwt');
      if (this.setLoading) this.setLoading(true); // 👉 Start loading

      try {
        const response = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__[/* serverurl */ "a"]}/shopper/message`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Origin: window.location.origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
          },
          body: JSON.stringify({
            message
          })
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        if (response.status === 200 || response.status === 201) {
          const data = await response.json();
          const {
            products
          } = data;
          this.$emit('update:products', [...this.products, ...products]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (this.setLoading) this.setLoading(false); // 👉 End loading
      }
    }
  }
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOptions.vue?vue&type=template&id=4aab6ba2&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatoptions"
  }, [_vm._ssrNode("<div class=\"chatoptions__content\" data-v-4aab6ba2><div class=\"chatoptions__content--body\" data-v-4aab6ba2><h1 class=\"chatoptions__header\" data-v-4aab6ba2><span class=\"svg\" data-v-4aab6ba2><svg data-v-4aab6ba2><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-4aab6ba2></use></svg></span> <span data-v-4aab6ba2>" + _vm._ssrEscape(_vm._s(_vm.productname)) + "</span></h1></div></div> "), _vm._ssrNode("<div class=\"chatoptions__content\" data-v-4aab6ba2>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__content--body\" data-v-4aab6ba2>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__options\" data-v-4aab6ba2>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"chatoptions__loading\" data-v-4aab6ba2>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-4aab6ba2></div>")], 2) : _vm._ssrNode("<div data-v-4aab6ba2>", "</div>", _vm._l(_vm.variants, function (variant) {
    return _vm._ssrNode("<div data-v-4aab6ba2>", "</div>", [_c('ChatOption', {
      attrs: {
        "data": {
          ...variant,
          productimg: _vm.productimg
        }
      }
    })], 1);
  }), 0), _vm._ssrNode(" <div class=\"chatoptions__description\" data-v-4aab6ba2><div class=\"chatoptions__content--body\" data-v-4aab6ba2><h2 class=\"description__title\" data-v-4aab6ba2>Product Description</h2> <p class=\"description__text\" data-v-4aab6ba2>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.productDescription || `This product comes in multiple variants. Select the one that
                            best fits your needs. Each
                            variant is carefully crafted to ensure the best quality and customer satisfaction.`) + "\n                        ") + "</p></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"chatoptions__bottom\" data-v-4aab6ba2>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__content--body\" data-v-4aab6ba2>", "</div>", [_vm._ssrNode("<button class=\"button-primary transparent-button\" data-v-4aab6ba2><span data-v-4aab6ba2>Continue Shopping</span></button> "), _vm.cartTotal === 0 ? _vm._ssrNode("<button class=\"button-primary spacebetween disabled-btn\" data-v-4aab6ba2>", "</button>", [_vm._ssrNode("<span data-v-4aab6ba2>Proceed to Checkout</span> "), _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e(), _vm._ssrNode(" "), _vm.cartTotal > 0 ? _vm._ssrNode("<button class=\"button-primary spacebetween\" data-v-4aab6ba2>", "</button>", [_vm._ssrNode("<span data-v-4aab6ba2>Proceed to Checkout</span> "), _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e()], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatOptions.vue?vue&type=template&id=4aab6ba2&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(42);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOptions.vue?vue&type=script&lang=js



/* harmony default export */ var ChatOptionsvue_type_script_lang_js = ({
  props: ['toggleViewOptions', 'mongooseid', 'productname', 'productimg', 'productDescription'],
  mixins: [jwt_mixin["a" /* default */]],
  data() {
    return {
      variants: [],
      loading: false
    };
  },
  mounted() {
    this.getOptions();
  },
  computed: {
    ...Object(external_vuex_["mapState"])("cart", {
      cartTotal: state => state.total,
      cartItems: state => state.items,
      cartTotalItems: state => state.totalItems
    })
  },
  methods: {
    async getOptions() {
      this.loading = true;
      const token = await this.getValidToken();
      try {
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/getoptions?mongooseid=${this.mongooseid}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
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
        this.variants = data.variants;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    continueShopping() {
      this.$router.push({
        path: '/',
        query: {
          ...this.$route.query
        }
      });
    },
    goToCheckout() {
      const {
        cartItems,
        cartTotal
      } = this;
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
      this.$router.push({
        path: '/checkout',
        query: {
          ...this.$route.query
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./components/ChatOptions.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatOptionsvue_type_script_lang_js = (ChatOptionsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ChatOptions.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatOptionsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4aab6ba2",
  "2f320ac3"
  
)

/* harmony default export */ var ChatOptions = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatOption: __webpack_require__(57).default,CartButton: __webpack_require__(45).default})


/***/ }),
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("38ce8ece", content, true, context)
};

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_2fc2056b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_2fc2056b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_2fc2056b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_2fc2056b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtpInput_vue_vue_type_style_index_0_id_2fc2056b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-2fc2056b],[data-v-2fc2056b]:after,[data-v-2fc2056b]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-2fc2056b]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-2fc2056b]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-2fc2056b]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-2fc2056b]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-2fc2056b]{font-size:65%}}body[data-v-2fc2056b]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-2fc2056b]{padding:0}}[data-v-2fc2056b]::-moz-selection{background-color:#249b48;color:#fff}[data-v-2fc2056b]::selection{background-color:#249b48;color:#fff}[data-v-2fc2056b]::-webkit-scrollbar{height:8px;width:8px}[data-v-2fc2056b]::-webkit-scrollbar-track{background:transparent}[data-v-2fc2056b]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-2fc2056b]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-2fc2056b]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-2fc2056b{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-2fc2056b{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-2fc2056b{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-2fc2056b{to{transform:rotate(1turn)}}.slide-in-left[data-v-2fc2056b]{animation:slide-in-left-2fc2056b .5s ease-out forwards}.button-primary[data-v-2fc2056b]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-2fc2056b]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-2fc2056b]{opacity:.4}.floating-element[data-v-2fc2056b]{animation:float-2fc2056b 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-2fc2056b]{height:100vh!important;overflow:hidden!important}.spinner[data-v-2fc2056b]{animation:spin-2fc2056b 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-2fc2056b]{stroke:#249b48;stroke-linecap:round}.otp-inputs[data-v-2fc2056b]{display:grid;grid-template-columns:repeat(6,1fr);grid-gap:1rem;gap:1rem;width:100%}.otp-input[data-v-2fc2056b]:disabled{background-color:#f5f5f5;color:#aaa;cursor:not-allowed}.otp-inputs__area[data-v-2fc2056b]{height:5rem;width:100%}.otp-input[data-v-2fc2056b]{border:1px solid rgba(36,155,72,.2);border-radius:4px;font-size:1.5rem;height:100%;outline:none;text-align:center;transition:border .2s ease;width:100%}.otp-input[data-v-2fc2056b]:focus{border-color:rgba(36,155,72,.8)}.otp-input.filled[data-v-2fc2056b]{border-color:rgba(36,155,72,.7)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_fa39a064_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_fa39a064_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_fa39a064_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_fa39a064_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleBtn_vue_vue_type_style_index_0_id_fa39a064_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-fa39a064],[data-v-fa39a064]:after,[data-v-fa39a064]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-fa39a064]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-fa39a064]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-fa39a064]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-fa39a064]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-fa39a064]{font-size:65%}}body[data-v-fa39a064]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-fa39a064]{padding:0}}[data-v-fa39a064]::-moz-selection{background-color:#249b48;color:#fff}[data-v-fa39a064]::selection{background-color:#249b48;color:#fff}[data-v-fa39a064]::-webkit-scrollbar{height:8px;width:8px}[data-v-fa39a064]::-webkit-scrollbar-track{background:transparent}[data-v-fa39a064]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-fa39a064]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-fa39a064]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-fa39a064{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-fa39a064{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-fa39a064{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-fa39a064{to{transform:rotate(1turn)}}.slide-in-left[data-v-fa39a064]{animation:slide-in-left-fa39a064 .5s ease-out forwards}.button-primary[data-v-fa39a064]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-fa39a064]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-fa39a064]{opacity:.4}.floating-element[data-v-fa39a064]{animation:float-fa39a064 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-fa39a064]{height:100vh!important;overflow:hidden!important}.spinner[data-v-fa39a064]{animation:spin-fa39a064 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-fa39a064]{stroke:#249b48;stroke-linecap:round}.google-btn[data-v-fa39a064]{display:flex;justify-content:center}@media screen and (max-width:720px){.google-btn[data-v-fa39a064]{display:flex;justify-content:center;margin-bottom:16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0222fd2c", content, true, context)
};

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-7dc10924],[data-v-7dc10924]:after,[data-v-7dc10924]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-7dc10924]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-7dc10924]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-7dc10924]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-7dc10924]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-7dc10924]{font-size:65%}}body[data-v-7dc10924]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-7dc10924]{padding:0}}[data-v-7dc10924]::-moz-selection{background-color:#249b48;color:#fff}[data-v-7dc10924]::selection{background-color:#249b48;color:#fff}[data-v-7dc10924]::-webkit-scrollbar{height:8px;width:8px}[data-v-7dc10924]::-webkit-scrollbar-track{background:transparent}[data-v-7dc10924]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-7dc10924]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-7dc10924]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-7dc10924{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-7dc10924{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-7dc10924{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-7dc10924{to{transform:rotate(1turn)}}.slide-in-left[data-v-7dc10924]{animation:slide-in-left-7dc10924 .5s ease-out forwards}.button-primary[data-v-7dc10924]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-7dc10924]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-7dc10924]{opacity:.4}.floating-element[data-v-7dc10924]{animation:float-7dc10924 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-7dc10924]{height:100vh!important;overflow:hidden!important}.spinner[data-v-7dc10924]{animation:spin-7dc10924 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-7dc10924]{stroke:#249b48;stroke-linecap:round}.categories[data-v-7dc10924]{background:#249b48;padding:6rem 20rem 0}@media (min-width:2519px){.categories[data-v-7dc10924]{padding-top:6rem}}@media only screen and (max-width:75em){.categories[data-v-7dc10924]{padding:0 10rem}}@media only screen and (max-width:56.25em){.categories[data-v-7dc10924]{padding:1rem}}.categories__header[data-v-7dc10924]{color:#fff;font-size:5rem;font-weight:400;margin-bottom:6rem;text-align:center}@media only screen and (max-width:56.25em){.categories__header[data-v-7dc10924]{font-size:3rem;margin-bottom:6rem;margin-top:6rem}}.categories__grids[data-v-7dc10924]{background:#65d587;border-radius:1rem}@media only screen and (max-width:75em){.categories__grids[data-v-7dc10924]{margin-bottom:6rem}}.categories__grid[data-v-7dc10924]{display:grid;grid-template-columns:repeat(3,1fr);padding:4rem;grid-gap:9rem}@media only screen and (max-width:56.25em){.categories__grid[data-v-7dc10924]{display:grid;grid-template-columns:repeat(2,1fr);padding:2rem;grid-gap:1rem}}.categories__grid[data-v-7dc10924]:first-child{padding-bottom:1.5rem}.categories__griditem figure[data-v-7dc10924]{height:27rem;width:100%}@media only screen and (max-width:56.25em){.categories__griditem figure[data-v-7dc10924]{height:18rem}}.categories__griditem figure img[data-v-7dc10924]{border-radius:1rem;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.categories__griditem h4[data-v-7dc10924]{font-size:1.5rem;font-size:1.4rem;font-weight:300;margin-top:2rem;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-c912de2a],[data-v-c912de2a]:after,[data-v-c912de2a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-c912de2a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-c912de2a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-c912de2a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-c912de2a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-c912de2a]{font-size:65%}}body[data-v-c912de2a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-c912de2a]{padding:0}}[data-v-c912de2a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-c912de2a]::selection{background-color:#249b48;color:#fff}[data-v-c912de2a]::-webkit-scrollbar{height:8px;width:8px}[data-v-c912de2a]::-webkit-scrollbar-track{background:transparent}[data-v-c912de2a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-c912de2a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-c912de2a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-c912de2a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-c912de2a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-c912de2a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-c912de2a{to{transform:rotate(1turn)}}.slide-in-left[data-v-c912de2a]{animation:slide-in-left-c912de2a .5s ease-out forwards}.button-primary[data-v-c912de2a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-c912de2a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-c912de2a]{opacity:.4}.floating-element[data-v-c912de2a]{animation:float-c912de2a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-c912de2a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-c912de2a]{animation:spin-c912de2a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-c912de2a]{stroke:#249b48;stroke-linecap:round}.landingcopy[data-v-c912de2a]{background:#249b48;padding:6rem 20rem 0}@media (min-width:2519px){.landingcopy[data-v-c912de2a]{padding-top:6rem}}@media only screen and (max-width:75em){.landingcopy[data-v-c912de2a]{padding:0 10rem}}@media only screen and (max-width:56.25em){.landingcopy[data-v-c912de2a]{padding:1rem}}.landingcopy__header[data-v-c912de2a]{color:#fff;font-size:5rem;font-weight:400;margin-bottom:6rem;text-align:center}@media only screen and (max-width:56.25em){.landingcopy__header[data-v-c912de2a]{font-size:3rem;margin-bottom:6rem;margin-top:6rem}}.landingcopy__mast[data-v-c912de2a]{display:flex;justify-content:center}.landingcopy__mast figure[data-v-c912de2a]{border-radius:1rem;height:48rem;margin-bottom:2rem;overflow:hidden}.landingcopy__mast figure img[data-v-c912de2a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.landingcopy__card[data-v-c912de2a]{background:blue;border-radius:1rem;display:flex;height:38rem;justify-content:space-between;margin-bottom:4rem;padding:5rem;position:relative}.landingcopy__card.sample-dish[data-v-c912de2a]{background:#a8d1f0}.landingcopy__card.paper-basket[data-v-c912de2a]{background:#f0e7a8}.landingcopy__card.paper-box[data-v-c912de2a]{background:#f0baa8}.landingcopy__card--left[data-v-c912de2a]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;z-index:4}.landingcopy__card--left h5[data-v-c912de2a]{font-size:3.5rem;font-weight:400;margin-bottom:2rem}.landingcopy__card--left p[data-v-c912de2a]{font-size:2.1rem;font-weight:300}.landingcopy__card--right[data-v-c912de2a]{position:relative;width:40%}@media only screen and (max-width:56.25em){.landingcopy__card--right[data-v-c912de2a]{height:76%;position:absolute;right:-4rem;top:5rem;width:43%;z-index:2}}.landingcopy__card--right figure[data-v-c912de2a]{height:40rem;position:absolute;right:0;top:0}.landingcopy__card--right figure img[data-v-c912de2a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@media only screen and (max-width:56.25em){.landingcopy__card--right figure img[data-v-c912de2a]{height:69%}}.landingcopy__card--right figure.sample-dish[data-v-c912de2a]{right:-7rem;top:-6rem}@media only screen and (max-width:56.25em){.landingcopy__card--right figure.sample-dish[data-v-c912de2a]{right:0;top:0}}.landingcopy__card--right figure.paper-basket[data-v-c912de2a]{right:-7rem;top:-6rem}@media only screen and (max-width:56.25em){.landingcopy__card--right figure.paper-basket[data-v-c912de2a]{right:0;top:0}}.landingcopy__card--right figure.paper-box[data-v-c912de2a]{right:-7rem;top:-6rem;transform:scale(1.1)}@media only screen and (max-width:56.25em){.landingcopy__card--right figure.paper-box[data-v-c912de2a]{right:0;top:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6fdbb52a],[data-v-6fdbb52a]:after,[data-v-6fdbb52a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-6fdbb52a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-6fdbb52a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-6fdbb52a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-6fdbb52a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-6fdbb52a]{font-size:65%}}body[data-v-6fdbb52a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-6fdbb52a]{padding:0}}[data-v-6fdbb52a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-6fdbb52a]::selection{background-color:#249b48;color:#fff}[data-v-6fdbb52a]::-webkit-scrollbar{height:8px;width:8px}[data-v-6fdbb52a]::-webkit-scrollbar-track{background:transparent}[data-v-6fdbb52a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-6fdbb52a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-6fdbb52a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-6fdbb52a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-6fdbb52a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-6fdbb52a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-6fdbb52a{to{transform:rotate(1turn)}}.slide-in-left[data-v-6fdbb52a]{animation:slide-in-left-6fdbb52a .5s ease-out forwards}.button-primary[data-v-6fdbb52a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-6fdbb52a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-6fdbb52a]{opacity:.4}.floating-element[data-v-6fdbb52a]{animation:float-6fdbb52a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-6fdbb52a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-6fdbb52a]{animation:spin-6fdbb52a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-6fdbb52a]{stroke:#249b48;stroke-linecap:round}.landingfaq[data-v-6fdbb52a]{background:#249b48;padding:0 20rem}@media (min-width:2519px){.landingfaq[data-v-6fdbb52a]{padding-top:6rem}}@media only screen and (max-width:75em){.landingfaq[data-v-6fdbb52a]{padding:0 10rem}}@media only screen and (max-width:56.25em){.landingfaq[data-v-6fdbb52a]{padding:1rem;padding:0}}.landingfaq__content[data-v-6fdbb52a]{background:#fff;border-radius:1rem;padding:3rem}.landingfaq__content h4[data-v-6fdbb52a]{font-size:4rem;font-weight:500;margin-top:4rem;text-align:center}.landingfaq__faqs[data-v-6fdbb52a]{margin-top:2rem}.landingfaq__faq[data-v-6fdbb52a]{border:1px solid #000;border-radius:1rem;margin-bottom:3rem;padding:2rem}.landingfaq__faq--header[data-v-6fdbb52a]{font-size:2rem;font-weight:500;margin-bottom:2rem}.landingfaq__faq--description[data-v-6fdbb52a]{font-size:1.5rem;font-weight:300;line-height:3rem}.landingfaq__faq--description.location[data-v-6fdbb52a]{color:#249b48;display:inline-block;font-weight:600;margin-right:.5rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6cc32934],[data-v-6cc32934]:after,[data-v-6cc32934]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-6cc32934]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-6cc32934]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-6cc32934]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-6cc32934]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-6cc32934]{font-size:65%}}body[data-v-6cc32934]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-6cc32934]{padding:0}}[data-v-6cc32934]::-moz-selection{background-color:#249b48;color:#fff}[data-v-6cc32934]::selection{background-color:#249b48;color:#fff}[data-v-6cc32934]::-webkit-scrollbar{height:8px;width:8px}[data-v-6cc32934]::-webkit-scrollbar-track{background:transparent}[data-v-6cc32934]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-6cc32934]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-6cc32934]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-6cc32934{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-6cc32934{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-6cc32934{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-6cc32934{to{transform:rotate(1turn)}}.slide-in-left[data-v-6cc32934]{animation:slide-in-left-6cc32934 .5s ease-out forwards}.button-primary[data-v-6cc32934]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-6cc32934]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-6cc32934]{opacity:.4}.floating-element[data-v-6cc32934]{animation:float-6cc32934 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-6cc32934]{height:100vh!important;overflow:hidden!important}.spinner[data-v-6cc32934]{animation:spin-6cc32934 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-6cc32934]{stroke:#249b48;stroke-linecap:round}.landingfooter[data-v-6cc32934]{align-items:center;background:#f4f4f4;display:flex;flex-direction:column;justify-content:center;margin-top:6rem;padding:2rem 0 10rem}.landingfooter__email[data-v-6cc32934]{color:#000;font-size:2rem;font-weight:300}.landingfooter__social[data-v-6cc32934]{align-items:center;display:flex;justify-content:center}.landingfooter__social figure[data-v-6cc32934]{cursor:pointer;display:inline-block;height:4rem;margin:1rem;transition:transform .2s ease;width:4rem}.landingfooter__social figure[data-v-6cc32934]:hover{transform:scale(1.1)}.landingfooter__social figure.xlogo[data-v-6cc32934]{padding:.6rem}.landingfooter__social figure img[data-v-6cc32934]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6152bb39", content, true, context)
};

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_8ab96160_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_8ab96160_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_8ab96160_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_8ab96160_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_8ab96160_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-8ab96160],[data-v-8ab96160]:after,[data-v-8ab96160]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-8ab96160]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-8ab96160]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-8ab96160]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-8ab96160]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-8ab96160]{font-size:65%}}body[data-v-8ab96160]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-8ab96160]{padding:0}}[data-v-8ab96160]::-moz-selection{background-color:#249b48;color:#fff}[data-v-8ab96160]::selection{background-color:#249b48;color:#fff}[data-v-8ab96160]::-webkit-scrollbar{height:8px;width:8px}[data-v-8ab96160]::-webkit-scrollbar-track{background:transparent}[data-v-8ab96160]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-8ab96160]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-8ab96160]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-8ab96160{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-8ab96160{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-8ab96160{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-8ab96160{to{transform:rotate(1turn)}}.slide-in-left[data-v-8ab96160]{animation:slide-in-left-8ab96160 .5s ease-out forwards}.button-primary[data-v-8ab96160]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-8ab96160]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-8ab96160]{opacity:.4}.floating-element[data-v-8ab96160]{animation:float-8ab96160 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-8ab96160]{height:100vh!important;overflow:hidden!important}.spinner[data-v-8ab96160]{animation:spin-8ab96160 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-8ab96160]{stroke:#249b48;stroke-linecap:round}.chatcard[data-v-8ab96160]{background:rgba(168,209,240,.6);border-radius:1rem;overflow:hidden;position:relative}.chatcard__contents[data-v-8ab96160]{padding:1rem}.chatcard__name[data-v-8ab96160]{font-size:1.5rem;font-weight:600;margin:1rem 0}.chatcard__viewmore button[data-v-8ab96160]{background:#249b48;border:none;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:500;outline:none;padding:1rem}.chatcard__img[data-v-8ab96160]{height:14rem}.chatcard__img img[data-v-8ab96160]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatcard__tags[data-v-8ab96160]{display:flex;flex-wrap:wrap;margin-top:1rem}.chatcard__tags span[data-v-8ab96160]{background:rgba(36,155,72,.4);border:1px solid rgba(36,155,72,.4);border-radius:3rem;display:inline-block;font-weight:500;margin-right:.5rem;padding:.5rem 1.4rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(109);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("266a8956", content, true, context)
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1fd24de8", content, true, context)
};

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OtpInput.vue?vue&type=template&id=2fc2056b&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "otp-inputs"
  }, [_vm._ssrNode(_vm._ssrList(_vm.otpLength, function (digit, index) {
    return "<div class=\"otp-inputs__area\" data-v-2fc2056b><input type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]*\" maxlength=\"1\"" + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("value", _vm.otpDigits[index]) + " class=\"otp-input\" data-v-2fc2056b></div>";
  }))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OtpInput.vue?vue&type=template&id=2fc2056b&scoped=true

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
  "2fc2056b",
  "7d8a8992"
  
)

/* harmony default export */ var OtpInput = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GoogleBtn.vue?vue&type=template&id=fa39a064&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "google-btn"
  }, [_vm._ssrNode("<div id=\"g_id_onload\"" + _vm._ssrAttr("data-client_id", _vm.clientId) + " data-context=\"signin\" data-ux_mode=\"popup\" data-callback=\"handleCredentialResponse\" data-auto_prompt=\"false\" data-v-fa39a064></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GoogleBtn.vue?vue&type=template&id=fa39a064&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(42);

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
          scope: "email",
          ux_mode: "redirect",
          login_uri: "https://shop.payoor.store/auth/googlecallback"
        });
        google.accounts.id.renderButton(document.getElementById("g_id_onload"), {
          theme: "outline",
          size: "large"
        });
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
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GoogleBtnvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fa39a064",
  "7f3e5ac0"
  
)

/* harmony default export */ var GoogleBtn = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingFaq.vue?vue&type=template&id=6fdbb52a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"landingfaq\" data-v-6fdbb52a><div class=\"landingfaq__content\" data-v-6fdbb52a><h4 data-v-6fdbb52a>FAQ</h4> <div class=\"landingfaq__faqs\" data-v-6fdbb52a>" + _vm._ssrList(_vm.faqs, function (faq, index) {
    return "<div class=\"landingfaq__faq\" data-v-6fdbb52a><h5 class=\"landingfaq__faq--header\" data-v-6fdbb52a>" + _vm._ssrEscape(_vm._s(faq.title)) + "</h5> " + _vm._ssrList(faq.content, function (content, contentIndex) {
      return "<p class=\"landingfaq__faq--description\" data-v-6fdbb52a>" + _vm._ssrEscape("\n            " + _vm._s(content) + "\n          ") + "</p>";
    }) + " " + (faq.locations ? "<div data-v-6fdbb52a>" + _vm._ssrList(faq.locations, function (location, locationIndex) {
      return "<p class=\"landingfaq__faq--description location\" data-v-6fdbb52a>" + _vm._ssrEscape("\n              " + _vm._s(location) + _vm._s(locationIndex < faq.locations.length - 1 ? "," : "") + "\n            ") + "</p>";
    }) + "</div>" : "<!---->") + "</div>";
  }) + "</div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LandingFaq.vue?vue&type=template&id=6fdbb52a&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingFaq.vue?vue&type=script&lang=js
/* harmony default export */ var LandingFaqvue_type_script_lang_js = ({
  data() {
    return {
      faqs: [{
        title: "What is Payoor?",
        content: ["Payoor is an online grocery assistant that helps you with your all your grocery and market needs."]
      }, {
        title: "How long do deliveries take?",
        content: ["Deliveries take 48hours from checkout and you can set future delivery day."]
      }, {
        title: "Which locations do we currently service?",
        content: ["Currently, we only deliver to some parts of Lagos, although we expanding rapidly across Nigeria,"],
        locations: ["Magodo", "Ikeja", "Victoria Island", "Ogudu", "Ikate", "Lekki (Phase 1)", "Lagos Island", "Maryland", "Mushin", "Ogba", "Oshodi", "Opebi/Allen", "Oshodi-Isolo", "Omole", "Shomolu", "Surulere", "Victoria Island", "Yaba", "Berger", "Ojota", "Ketu"]
      }, {
        title: "What is Service charge?",
        content: ["The service fee is a consumer fee that appears on the price breakdown at checkout on the payoor app. Unlike other consumer fees, the service fee depends on your order's subtotal, that is, a very small percentage of your bill excluding the delivery fee. It also does not apply to all restaurants on our platform."]
      }, {
        title: "What is Shop by Recipe?",
        content: ["The service fee is a consumer fee that appears on the price breakdown at checkout on the payoor app. Unlike other consumer fees, the service fee depends on your order's subtotal, that is, a very small percentage of your bill excluding the delivery fee. It also does not apply to all restaurants on our platform."]
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/LandingFaq.vue?vue&type=script&lang=js
 /* harmony default export */ var components_LandingFaqvue_type_script_lang_js = (LandingFaqvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LandingFaq.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LandingFaqvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6fdbb52a",
  "6d1e9e1c"
  
)

/* harmony default export */ var LandingFaq = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingFooter.vue?vue&type=template&id=6cc32934&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"landingfooter\" data-v-6cc32934>", "</div>", [_vm._ssrNode("<div class=\"landingfooter__email\" data-v-6cc32934><p data-v-6cc32934>Get in touch at contact@payoor.store</p></div> "), _vm._ssrNode("<div class=\"landingfooter__social\" data-v-6cc32934>", "</div>", [_vm._ssrNode("<figure class=\"xlogo\" data-v-6cc32934>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/xlogo.png',
      expression: "'/imgs/xlogo.png'"
    }]
  }, [])]), _vm._ssrNode(" "), _vm._ssrNode("<figure data-v-6cc32934>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/instagramlogo.png',
      expression: "'/imgs/instagramlogo.png'"
    }]
  }, [])])], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LandingFooter.vue?vue&type=template&id=6cc32934&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingFooter.vue?vue&type=script&lang=js
/* harmony default export */ var LandingFootervue_type_script_lang_js = ({
  methods: {
    openInNewTab(url) {
      const newWindow = window.open(url, "_blank");
      newWindow.focus();
    }
  }
});
// CONCATENATED MODULE: ./components/LandingFooter.vue?vue&type=script&lang=js
 /* harmony default export */ var components_LandingFootervue_type_script_lang_js = (LandingFootervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LandingFooter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LandingFootervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6cc32934",
  "76ab5def"
  
)

/* harmony default export */ var LandingFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatCard.vue?vue&type=template&id=8ab96160&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatcard"
  }, [_vm._ssrNode("<figure class=\"chatcard__img\" data-v-8ab96160>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.imageUrl,
      expression: "imageUrl"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chatcard__contents\" data-v-8ab96160><div class=\"chatcard__name\" data-v-8ab96160><p data-v-8ab96160>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</p></div> <div class=\"chatcard__viewmore\" data-v-8ab96160><button data-v-8ab96160>" + _vm._ssrEscape("View " + _vm._s(_vm.options) + " options") + "</button></div> <div class=\"chatcard__tags\" data-v-8ab96160>" + _vm._ssrList(_vm.tags, function (tag, index) {
    return "<span data-v-8ab96160>" + _vm._ssrEscape(_vm._s(_vm.formatTag(tag))) + "</span>";
  }) + "</div></div> "), _vm.view_options ? _vm._ssrNode("<div data-v-8ab96160>", "</div>", [_c('ChatOptions', {
    attrs: {
      "options": _vm.options,
      "toggleViewOptions": _vm.toggleViewOptions,
      "productname": _vm.name,
      "productimg": _vm.imageUrl,
      "mongooseid": _vm.product._mongooseid
    }
  })], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatCard.vue?vue&type=template&id=8ab96160&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatCard.vue?vue&type=script&lang=js
/* harmony default export */ var ChatCardvue_type_script_lang_js = ({
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data() {
    return {
      view_options: false
    };
  },
  computed: {
    name() {
      return this.product.name || '';
    },
    imageUrl() {
      return this.product.image || 'https://payoorimages.s3.ap-southeast-2.amazonaws.com/products/1739230188359-4hi1261thmy.webp';
    },
    options() {
      return this.product.variantCount || 0;
    },
    tags() {
      return typeof this.product.metadata === 'string' ? this.product.metadata.split(' ').map(item => item.trim()).slice(0, 2) : Array.isArray(this.product.metadata) ? this.product.metadata.slice(0, 3) : [];
    }
  },
  methods: {
    toggleViewOptions() {
      this.view_options = !this.view_options;
    },
    formatTag(tag) {
      if (tag.length > 6) {
        //return tag.substring(0, 9) + '...';
      }
      return tag;
    }
  }
});
// CONCATENATED MODULE: ./components/ChatCard.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatCardvue_type_script_lang_js = (ChatCardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ChatCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatCardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8ab96160",
  "2b5f683b"
  
)

/* harmony default export */ var ChatCard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatOptions: __webpack_require__(71).default})


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingCategories.vue?vue&type=template&id=7dc10924&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div id=\"landing-categories\" class=\"categories\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<h2 class=\"categories__header\" data-v-7dc10924>\n      Shop for Food Ingredients and Groceries at the lowest possible prices\n    </h2> "), _vm._ssrNode("<div class=\"categories__grid\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<div class=\"categories__griditem\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<figure data-v-7dc10924>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/chicken_lap.png',
      expression: "'/imgs/chicken_lap.png'"
    }]
  }, [])]), _vm._ssrNode(" <h4 data-v-7dc10924>Meat and Frozen Food</h4>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"categories__griditem\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<figure data-v-7dc10924>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/chai_seed.jpeg',
      expression: "'/imgs/chai_seed.jpeg'"
    }]
  }, [])]), _vm._ssrNode(" <h4 data-v-7dc10924>Soups and Stews</h4>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"categories__griditem\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<figure data-v-7dc10924>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/bournvita.jpeg',
      expression: "'/imgs/bournvita.jpeg'"
    }]
  }, [])]), _vm._ssrNode(" <h4 data-v-7dc10924>Beverages</h4>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"categories__griditem\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<figure data-v-7dc10924>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/fruits.png',
      expression: "'/imgs/fruits.png'"
    }]
  }, [])]), _vm._ssrNode(" <h4 data-v-7dc10924>Fruits</h4>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"categories__griditem\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<figure data-v-7dc10924>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/fruit_basket.jpeg',
      expression: "'/imgs/fruit_basket.jpeg'"
    }]
  }, [])]), _vm._ssrNode(" <h4 data-v-7dc10924>Farmers market</h4>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"categories__griditem\" data-v-7dc10924>", "</div>", [_vm._ssrNode("<figure data-v-7dc10924>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/pepper_container.png',
      expression: "'/imgs/pepper_container.png'"
    }]
  }, [])]), _vm._ssrNode(" <h4 data-v-7dc10924>Spices and packaged foods</h4>")], 2)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LandingCategories.vue?vue&type=template&id=7dc10924&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LandingCategories.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7dc10924",
  "0a9dc7f0"
  
)

/* harmony default export */ var LandingCategories = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingCopy.vue?vue&type=template&id=c912de2a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "landingcopy"
  }, [_vm._ssrNode("<div class=\"landingcopy__content\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<div class=\"landingcopy__mast\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<figure data-v-c912de2a>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/copy-mast-img.png',
      expression: "'/imgs/copy-mast-img.png'"
    }]
  }, [])])]), _vm._ssrNode(" <h4 class=\"landingcopy__header\" data-v-c912de2a>\n      Psst... here is why we are your best buddy for fresh food stuff and quality\n      grocery\n    </h4> "), _vm._ssrNode("<div class=\"landingcopy__cards\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<div class=\"landingcopy__card sample-dish\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<div class=\"landingcopy__card--left\" data-v-c912de2a><h5 class=\"landingcopy__card--h5\" data-v-c912de2a>Every meal deserves a great story</h5> <p class=\"landingcopy__card--p\" data-v-c912de2a>\n            We deliver all you need for home-cooked meals, saving you market the hassle\n            and stress\n          </p></div> "), _vm._ssrNode("<div class=\"landingcopy__card--right\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<figure class=\"sample-dish\" data-v-c912de2a>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/sample_dish.png',
      expression: "'/imgs/sample_dish.png'"
    }]
  }, [])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"landingcopy__card paper-basket\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<div class=\"landingcopy__card--left\" data-v-c912de2a><h5 class=\"landingcopy__card--h5\" data-v-c912de2a>Best prices, best quality</h5> <p class=\"landingcopy__card--p\" data-v-c912de2a>\n            We offer unbeatable prices and the best quality you can find anywhere\n          </p></div> "), _vm._ssrNode("<div class=\"landingcopy__card--right\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<figure class=\"paper-basket\" data-v-c912de2a>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/paper_basket.png',
      expression: "'/imgs/paper_basket.png'"
    }]
  }, [])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"landingcopy__card paper-box\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<div class=\"landingcopy__card--left\" data-v-c912de2a><h5 class=\"landingcopy__card--h5\" data-v-c912de2a>Packaged with love and care</h5> <p class=\"landingcopy__card--p\" data-v-c912de2a>\n            We deliver your order in pristine condition, ensuring it's clean and ready\n            to use straight out of the box\n          </p></div> "), _vm._ssrNode("<div class=\"landingcopy__card--right\" data-v-c912de2a>", "</div>", [_vm._ssrNode("<figure class=\"paper-box\" data-v-c912de2a>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/paper_box.png',
      expression: "'/imgs/paper_box.png'"
    }]
  }, [])])])], 2)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LandingCopy.vue?vue&type=template&id=c912de2a&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LandingCopy.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c912de2a",
  "13e479c9"
  
)

/* harmony default export */ var LandingCopy = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_a04e0bdc_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_a04e0bdc_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_a04e0bdc_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_a04e0bdc_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticator_vue_vue_type_style_index_0_id_a04e0bdc_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-a04e0bdc],[data-v-a04e0bdc]:after,[data-v-a04e0bdc]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-a04e0bdc]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-a04e0bdc]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-a04e0bdc]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-a04e0bdc]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-a04e0bdc]{font-size:65%}}body[data-v-a04e0bdc]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-a04e0bdc]{padding:0}}[data-v-a04e0bdc]::-moz-selection{background-color:#249b48;color:#fff}[data-v-a04e0bdc]::selection{background-color:#249b48;color:#fff}[data-v-a04e0bdc]::-webkit-scrollbar{height:8px;width:8px}[data-v-a04e0bdc]::-webkit-scrollbar-track{background:transparent}[data-v-a04e0bdc]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-a04e0bdc]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-a04e0bdc]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-a04e0bdc{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-a04e0bdc{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-a04e0bdc{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-a04e0bdc{to{transform:rotate(1turn)}}.slide-in-left[data-v-a04e0bdc]{animation:slide-in-left-a04e0bdc .5s ease-out forwards}.button-primary[data-v-a04e0bdc]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-a04e0bdc]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-a04e0bdc]{opacity:.4}.floating-element[data-v-a04e0bdc]{animation:float-a04e0bdc 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-a04e0bdc]{height:100vh!important;overflow:hidden!important}.spinner[data-v-a04e0bdc]{animation:spin-a04e0bdc 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-a04e0bdc]{stroke:#249b48;stroke-linecap:round}@keyframes growWidth-a04e0bdc{0%{width:0}to{width:13rem}}.auth[data-v-a04e0bdc]{background:#b6edf2;display:flex;height:100vh;padding:1rem}.auth__logo[data-v-a04e0bdc]{height:4rem;margin-bottom:1rem;width:auto}.auth__logo img[data-v-a04e0bdc]{height:100%}.auth__formarea[data-v-a04e0bdc]{padding:0 10rem;position:relative;width:100%;z-index:8}@media only screen and (max-width:56.25em){.auth__formarea[data-v-a04e0bdc]{padding:0;transform:translateY(-4rem)}}.auth__form[data-v-a04e0bdc]{background:#fff;border:1px solid #249b48;border-radius:1rem;margin:0 auto;min-height:3rem;padding:1rem;width:100%}.auth__form--google[data-v-a04e0bdc]{background:transparent;background:hsla(0,0%,89%,.2);border:none;border-radius:1rem;color:#000;cursor:pointer;font-size:2rem;font-weight:600;margin-bottom:1rem;outline:none;padding:1.9rem 1rem;width:100%}.auth__form--google[data-v-a04e0bdc],.auth__form--google span[data-v-a04e0bdc]{align-items:center;display:flex;justify-content:center}.auth__form--google span[data-v-a04e0bdc]:first-child{height:2rem;margin-right:.5rem;width:2rem}.auth__form--google span:first-child img[data-v-a04e0bdc]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.auth__input[data-v-a04e0bdc]{border-radius:1rem}.auth__input input[data-v-a04e0bdc]{background:#fff;border:none;font-size:2rem;outline:none;padding:1rem;width:100%}.auth__method[data-v-a04e0bdc]{padding:1rem}.auth__method button[data-v-a04e0bdc]{background:transparent;border:none;color:#249b48;font-size:1.4rem;font-weight:600}.auth__content[data-v-a04e0bdc]{align-items:center;background:#b6edf2;border-radius:1rem;flex-direction:column;height:65rem;margin-top:5rem;padding:3rem 1rem;position:relative}.auth__content[data-v-a04e0bdc],.auth__or[data-v-a04e0bdc]{display:flex;justify-content:center;width:100%}.auth__or[data-v-a04e0bdc]{font-size:1.6rem;margin:2rem 0 1rem;text-align:center;text-transform:uppercase}.auth__button[data-v-a04e0bdc]{margin-top:3rem}.auth__button button[data-v-a04e0bdc]{border-radius:12px;font-size:1.8rem;font-weight:600;padding:1.8rem;width:100%}.auth__h1[data-v-a04e0bdc]{flex-direction:column;font-size:3.7rem;font-weight:600;justify-content:center;line-height:5rem;margin-bottom:2rem;position:relative;text-align:center}.auth__h1[data-v-a04e0bdc],.auth__h1--bottom[data-v-a04e0bdc]{display:flex}.auth__h1--bottomp1 span[data-v-a04e0bdc]{display:inline-block;margin-right:1rem}.auth__h1--bottomp1 span.line[data-v-a04e0bdc]{bottom:-1.6rem;left:2rem;margin:0;position:absolute;width:13rem}.auth__h1--bottomp1 span.line img[data-v-a04e0bdc]{height:100%;width:100%}.auth__h2[data-v-a04e0bdc]{font-size:2rem;font-weight:500;text-align:center}.auth__htags[data-v-a04e0bdc]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:3rem;margin-top:5rem;transform:translateY(9rem);width:100%}.auth__googlebtn[data-v-a04e0bdc]{position:relative;z-index:4}@media only screen and (max-width:56.25em){.auth__googlebtn[data-v-a04e0bdc]{transform:translateY(-6rem)}}.auth__cartongif[data-v-a04e0bdc]{height:32rem;transform:translateY(5rem)}.auth__cartongif img[data-v-a04e0bdc]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.auth__cloud[data-v-a04e0bdc]{bottom:0;height:10rem;position:absolute;z-index:3}.auth__cloud img[data-v-a04e0bdc]{height:100;-o-object-fit:cover;object-fit:cover;width:auto}.auth__otp--header[data-v-a04e0bdc]{font-weight:600;margin-bottom:2rem}.auth__otp--header[data-v-a04e0bdc],.auth__otp--resendbtn[data-v-a04e0bdc]{color:#249b48;font-size:1.6rem;text-align:center}.auth__otp--resendbtn[data-v-a04e0bdc]{cursor:pointer;font-weight:500;margin-top:1rem}.auth__otp--resendotp[data-v-a04e0bdc]{-webkit-text-decoration:underline;text-decoration:underline}.auth__otp--counter[data-v-a04e0bdc]{color:#000;font-size:1.1rem}.grow-bar[data-v-a04e0bdc]{animation:growWidth-a04e0bdc 1s ease-out forwards;width:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_06675f5a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_06675f5a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_06675f5a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_06675f5a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_06675f5a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-06675f5a],[data-v-06675f5a]:after,[data-v-06675f5a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-06675f5a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-06675f5a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-06675f5a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-06675f5a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-06675f5a]{font-size:65%}}body[data-v-06675f5a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-06675f5a]{padding:0}}[data-v-06675f5a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-06675f5a]::selection{background-color:#249b48;color:#fff}[data-v-06675f5a]::-webkit-scrollbar{height:8px;width:8px}[data-v-06675f5a]::-webkit-scrollbar-track{background:transparent}[data-v-06675f5a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-06675f5a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-06675f5a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-06675f5a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-06675f5a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-06675f5a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-06675f5a{to{transform:rotate(1turn)}}.slide-in-left[data-v-06675f5a]{animation:slide-in-left-06675f5a .5s ease-out forwards}.button-primary[data-v-06675f5a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-06675f5a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-06675f5a]{opacity:.4}.floating-element[data-v-06675f5a]{animation:float-06675f5a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-06675f5a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-06675f5a]{animation:spin-06675f5a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-06675f5a]{stroke:#249b48;stroke-linecap:round}.landing[data-v-06675f5a]{overflow-x:hidden}.landing__top[data-v-06675f5a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-06675f5a]{display:flex}}.landing__topleft[data-v-06675f5a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-06675f5a]{display:block;width:100%}}.landing__topleft--auth[data-v-06675f5a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-06675f5a]{padding:0;width:auto}}.landing__topright[data-v-06675f5a],.landing__topright--img[data-v-06675f5a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-06675f5a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-06675f5a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-06675f5a]{display:none}}.landing__content[data-v-06675f5a]{background:#249b48;margin-top:100vh;position:relative}.landing__seemore[data-v-06675f5a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-06675f5a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-06675f5a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-06675f5a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_195bfee8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_195bfee8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_195bfee8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_195bfee8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_195bfee8_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-195bfee8],[data-v-195bfee8]:after,[data-v-195bfee8]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-195bfee8]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-195bfee8]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-195bfee8]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-195bfee8]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-195bfee8]{font-size:65%}}body[data-v-195bfee8]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-195bfee8]{padding:0}}[data-v-195bfee8]::-moz-selection{background-color:#249b48;color:#fff}[data-v-195bfee8]::selection{background-color:#249b48;color:#fff}[data-v-195bfee8]::-webkit-scrollbar{height:8px;width:8px}[data-v-195bfee8]::-webkit-scrollbar-track{background:transparent}[data-v-195bfee8]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-195bfee8]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-195bfee8]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-195bfee8{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-195bfee8{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-195bfee8{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-195bfee8{to{transform:rotate(1turn)}}.slide-in-left[data-v-195bfee8]{animation:slide-in-left-195bfee8 .5s ease-out forwards}.button-primary[data-v-195bfee8]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-195bfee8]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-195bfee8]{opacity:.4}.floating-element[data-v-195bfee8]{animation:float-195bfee8 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-195bfee8]{height:100vh!important;overflow:hidden!important}.spinner[data-v-195bfee8]{animation:spin-195bfee8 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-195bfee8]{stroke:#249b48;stroke-linecap:round}.chatbody__content[data-v-195bfee8]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.chatbody__content[data-v-195bfee8]{display:block}}.chatbody__products[data-v-195bfee8]{grid-template-columns:repeat(3,1fr);grid-gap:2rem;gap:2rem;grid-auto-rows:29rem;scrollbar-width:none;-ms-overflow-style:none;display:grid;width:82rem}.chatbody__products[data-v-195bfee8]::-webkit-scrollbar{display:none;height:6px}.chatbody__products[data-v-195bfee8]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.chatbody__products[data-v-195bfee8]::-webkit-scrollbar-thumb:hover{background-color:transparent}@media only screen and (max-width:56.25em){.chatbody__products[data-v-195bfee8]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:2rem;gap:2rem;grid-auto-rows:29rem;width:auto}}.chatbody__loading[data-v-195bfee8]{align-items:center;display:flex;grid-column:1/-1;justify-content:center;padding:5rem 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_e6112cda_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_e6112cda_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_e6112cda_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_e6112cda_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_e6112cda_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-e6112cda],[data-v-e6112cda]:after,[data-v-e6112cda]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-e6112cda]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-e6112cda]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-e6112cda]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-e6112cda]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-e6112cda]{font-size:65%}}body[data-v-e6112cda]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-e6112cda]{padding:0}}[data-v-e6112cda]::-moz-selection{background-color:#249b48;color:#fff}[data-v-e6112cda]::selection{background-color:#249b48;color:#fff}[data-v-e6112cda]::-webkit-scrollbar{height:8px;width:8px}[data-v-e6112cda]::-webkit-scrollbar-track{background:transparent}[data-v-e6112cda]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-e6112cda]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-e6112cda]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-e6112cda{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-e6112cda{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-e6112cda{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-e6112cda{to{transform:rotate(1turn)}}.slide-in-left[data-v-e6112cda]{animation:slide-in-left-e6112cda .5s ease-out forwards}.button-primary[data-v-e6112cda]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-e6112cda]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-e6112cda]{opacity:.4}.floating-element[data-v-e6112cda]{animation:float-e6112cda 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-e6112cda]{height:100vh!important;overflow:hidden!important}.spinner[data-v-e6112cda]{animation:spin-e6112cda 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-e6112cda]{stroke:#249b48;stroke-linecap:round}.chat-categories__categories[data-v-e6112cda]{background:#fff;display:flex;justify-content:flex-start;overflow-x:scroll;overflow-y:hidden;padding:1rem;scrollbar-width:none;width:100%;-ms-overflow-style:none}.chat-categories__categories[data-v-e6112cda]::-webkit-scrollbar{display:none;height:6px}.chat-categories__categories[data-v-e6112cda]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.chat-categories__categories[data-v-e6112cda]::-webkit-scrollbar-thumb:hover{background-color:transparent}.chat-categories__category[data-v-e6112cda]{align-items:center;border-radius:1rem;cursor:pointer;display:flex;flex-shrink:0;margin-right:1rem;min-height:3rem;padding:1rem;width:20rem}.chat-categories__category.currentcat[data-v-e6112cda]{border:1px solid #249b48}.chat-categories__category--header[data-v-e6112cda]{font-size:1rem}.chat-categories__category--png[data-v-e6112cda]{height:5rem;margin-right:.5rem;width:5rem}.chat-categories__category--png img[data-v-e6112cda]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-categories__category--description[data-v-e6112cda]{color:rgba(0,0,0,.5);font-size:1rem}.chat-categories__category.farmfresh[data-v-e6112cda]{background:#a8d1f0}.chat-categories__category.protein[data-v-e6112cda]{background:#f0e7a8}.chat-categories__category.cookingessentials[data-v-e6112cda]{background:#f0baa8}.chat-categories__category.fruits[data-v-e6112cda]{background:pink}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_04898832_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_04898832_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_04898832_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_04898832_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_04898832_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-04898832],[data-v-04898832]:after,[data-v-04898832]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-04898832]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-04898832]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-04898832]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-04898832]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-04898832]{font-size:65%}}body[data-v-04898832]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-04898832]{padding:0}}[data-v-04898832]::-moz-selection{background-color:#249b48;color:#fff}[data-v-04898832]::selection{background-color:#249b48;color:#fff}[data-v-04898832]::-webkit-scrollbar{height:8px;width:8px}[data-v-04898832]::-webkit-scrollbar-track{background:transparent}[data-v-04898832]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-04898832]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-04898832]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-04898832{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-04898832{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-04898832{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-04898832{to{transform:rotate(1turn)}}.slide-in-left[data-v-04898832]{animation:slide-in-left-04898832 .5s ease-out forwards}.button-primary[data-v-04898832]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-04898832]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-04898832]{opacity:.4}.floating-element[data-v-04898832]{animation:float-04898832 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-04898832]{height:100vh!important;overflow:hidden!important}.spinner[data-v-04898832]{animation:spin-04898832 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-04898832]{stroke:#249b48;stroke-linecap:round}.chatinput[data-v-04898832]{background:#333;border:.3rem solid transparent;border-radius:3rem;margin:0 auto;min-height:6rem;overflow:hidden;padding:2rem;position:relative}@media only screen and (max-width:56.25em){.chatinput[data-v-04898832]{border-radius:3rem 3rem 0 0}}.chatinput__field[data-v-04898832]{background:transparent;border:none;color:#fff;font-size:2.1rem;line-height:1.5;max-height:15rem;min-height:2rem;outline:none;overflow-y:auto;resize:none;width:100%}.chatinput__sendbtn[data-v-04898832]{background:#249b48;border-radius:100%;bottom:1rem;display:flex;display:none;height:4.5rem;justify-content:center;overflow:hidden;position:absolute;right:1rem;width:4.5rem}.chatinput__sendbtn.visible[data-v-04898832]{display:flex}.chatinput__sendbtn button[data-v-04898832]{background:transparent;border:none;cursor:pointer;display:flex;height:100%;justify-content:center;outline:none;width:100%}.chatinput__sendbtn button svg[data-v-04898832]{fill:#fff;color:#fff;height:4rem;width:4rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(148);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("d8488350", content, true, context)
};

/***/ }),
/* 122 */,
/* 123 */,
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Authenticator.vue?vue&type=template&id=a04e0bdc&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "auth"
  }, [_vm._ssrNode("<div class=\"auth__content\" data-v-a04e0bdc>", "</div>", [_vm._ssrNode("<div class=\"auth__header\" data-v-a04e0bdc></div> <div class=\"auth__htags\" data-v-a04e0bdc><h1 class=\"auth__h1\" data-v-a04e0bdc><div data-v-a04e0bdc>Your all in one</div> <div class=\"auth__h1--bottom\" data-v-a04e0bdc><p class=\"auth__h1--bottomp1\" data-v-a04e0bdc><span data-v-a04e0bdc>grocery</span> <span class=\"line grow-bar\" data-v-a04e0bdc><img src=\"/imgs/9b0498221204fb302eeee0e4809573e18a95723b.png\" data-v-a04e0bdc></span></p> assistant\n                </div></h1> <h2 class=\"auth__h2\" data-v-a04e0bdc>Make a list and leave the rest to us</h2></div> <figure class=\"auth__cartongif\" data-v-a04e0bdc></figure> "), _vm._ssrNode("<div class=\"auth__formarea\" data-v-a04e0bdc>", "</div>", [_vm._ssrNode("<div class=\"auth__form slide-fade-in-up\" data-v-a04e0bdc>", "</div>", [_vm._ssrNode((!_vm.otp_view ? "<div class=\"auth__input\" data-v-a04e0bdc>" + (_vm.auth_method === 'checkbox' ? "<input placeholder=\"Enter your email\" type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.value) ? _vm._i(_vm.value, null) > -1 : _vm.value) + " data-v-a04e0bdc>" : _vm.auth_method === 'radio' ? "<input placeholder=\"Enter your email\" type=\"radio\"" + _vm._ssrAttr("checked", _vm._q(_vm.value, null)) + " data-v-a04e0bdc>" : "<input placeholder=\"Enter your email\"" + _vm._ssrAttr("type", _vm.auth_method) + _vm._ssrAttr("value", _vm.value) + " data-v-a04e0bdc>") + "</div>" : "<!---->") + " "), _vm.otp_view ? _vm._ssrNode("<div class=\"auth__otp\" data-v-a04e0bdc>", "</div>", [_vm._ssrNode("<p class=\"auth__otp--header\" data-v-a04e0bdc>We just sent you an otp</p> "), _c('OtpInput', {
    attrs: {
      "disabled": _vm.loading,
      "otpLength": 6
    },
    on: {
      "update:modelValue": _vm.handleOtpChange
    }
  }), _vm._ssrNode(" <p class=\"auth__otp--resendbtn\" data-v-a04e0bdc>" + (_vm.allowResendOtp ? "<span class=\"auth__otp--resendotp\" data-v-a04e0bdc>Resend\n                            OTP</span>" : "<!---->") + " " + (!_vm.allowResendOtp ? "<span class=\"auth__otp--resendotp disabled-btn\" data-v-a04e0bdc>Resend OTP</span>" : "<!---->") + " <span class=\"auth__otp--counter\" data-v-a04e0bdc>" + _vm._ssrEscape(_vm._s(_vm.allowResendOtpCounter)) + "</span></p>")], 2) : _vm._e(), _vm._ssrNode(" " + (!_vm.otp_view ? "<div class=\"auth__button\" data-v-a04e0bdc>" + (_vm.allowSubmit ? "<button" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"button-primary slide-fade-in-up\" data-v-a04e0bdc>" + (_vm.loading ? "<span data-v-a04e0bdc><svg viewBox=\"0 0 50 50\" class=\"spinner\" data-v-a04e0bdc><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\" class=\"path\" data-v-a04e0bdc></circle></svg>\n                            Please wait...\n                        </span>" : "<span data-v-a04e0bdc>Start shopping</span>") + "</button>" : "<!---->") + " " + (!_vm.allowSubmit ? "<button class=\"button-primary slide-fade-in-up disabled-btn\" data-v-a04e0bdc>" + _vm._ssrEscape(_vm._s(_vm.loading ? `Please
                        wait...` : 'Start shopping')) + "</button>" : "<!---->") + "</div>" : "<!---->"))], 2)]), _vm._ssrNode(" <div class=\"auth__or\" data-v-a04e0bdc><span data-v-a04e0bdc></span></div> "), _vm._ssrNode("<div class=\"auth__googlebtn\" data-v-a04e0bdc>", "</div>", [_c('GoogleBtn', {
    on: {
      "update:authValue": _vm.handleAuthChange
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Authenticator.vue?vue&type=template&id=a04e0bdc&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(42);

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
  
  var style0 = __webpack_require__(102)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Authenticatorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a04e0bdc",
  "26f3e760"
  
)

/* harmony default export */ var Authenticator = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {OtpInput: __webpack_require__(92).default,GoogleBtn: __webpack_require__(93).default})


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Landing.vue?vue&type=template&id=06675f5a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "landing"
  }, [_vm._ssrNode("<div data-v-06675f5a>", "</div>", [_vm._ssrNode("<div class=\"landing__top\" data-v-06675f5a>", "</div>", [_vm._ssrNode("<div class=\"landing__topleft\" data-v-06675f5a>", "</div>", [_vm._ssrNode("<div class=\"landing__topleft--auth\" data-v-06675f5a>", "</div>", [_vm._t("top-left")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"landing__topright\" data-v-06675f5a>", "</div>", [_vm._ssrNode("<figure class=\"landing__topright--img\" data-v-06675f5a>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/bike-desktop.png',
      expression: "'/imgs/bike-desktop.png'"
    }]
  }, [])])])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"landing__content\" data-v-06675f5a>", "</div>", [_c('LandingCategories'), _vm._ssrNode(" "), _c('LandingCopy'), _vm._ssrNode(" "), _c('LandingFaq'), _vm._ssrNode(" "), _c('LandingFooter')], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Landing.vue?vue&type=template&id=06675f5a&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Landing.vue?vue&type=script&lang=js
/* harmony default export */ var Landingvue_type_script_lang_js = ({
  methods: {
    scrollDown(elementId, duration = 1000, offset = 0) {
      const targetElement = document.getElementById(elementId);
      if (!targetElement) {
        console.error(`Element with ID "${elementId}" not found`);
        return false;
      }
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeInOutQuad = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      requestAnimationFrame(animation);
      return true;
    }
  }
});
// CONCATENATED MODULE: ./components/Landing.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Landingvue_type_script_lang_js = (Landingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Landing.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(104)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Landingvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "06675f5a",
  "14e196b4"
  
)

/* harmony default export */ var Landing = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LandingCategories: __webpack_require__(97).default,LandingCopy: __webpack_require__(98).default,LandingFaq: __webpack_require__(94).default,LandingFooter: __webpack_require__(95).default})


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatBody.vue?vue&type=template&id=195bfee8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"chatbody\" data-v-195bfee8>", "</div>", [_vm._ssrNode("<div class=\"chatbody__content\" data-v-195bfee8>", "</div>", [_vm._ssrNode("<div data-v-195bfee8>", "</div>", [_vm.searchloading ? _vm._ssrNode("<div class=\"chatbody__loading\" data-v-195bfee8>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-195bfee8></div>")], 2) : _vm._ssrNode("<div class=\"chatbody__products\" data-v-195bfee8>", "</div>", _vm._l(_vm.products, function (product, index) {
    return _vm._ssrNode("<div data-v-195bfee8>", "</div>", [_c('ChatCard', {
      attrs: {
        "product": product
      }
    })], 1);
  }), 0)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatBody.vue?vue&type=template&id=195bfee8&scoped=true

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatBody.vue?vue&type=script&lang=js

/* harmony default export */ var ChatBodyvue_type_script_lang_js = ({
  props: ['products', 'searchloading'],
  emits: ['load-more'],
  mixins: [jwt_mixin["a" /* default */]],
  data() {
    return {
      observer: null
    };
  },
  methods: {
    setLastProductRef(index) {
      return index === this.products.length - 1 ? 'lastProduct' : null;
    },
    observeLastElement() {
      if (this.observer) {
        this.observer.disconnect();
      }
      this.$nextTick(() => {
        const lastEl = this.$refs.lastProduct;
        const target = Array.isArray(lastEl) ? lastEl[0] : lastEl;

        //console.log(target)

        if (!(target instanceof Element)) {
          return;
        }
        this.observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting && !this.searchloading) {
            this.$emit('load-more');
            console.log('Approaching last element — loading more');
          }
        }, {
          root: null,
          rootMargin: '200px',
          threshold: 0
        });
        this.observer.observe(target);
      });
    }
  },
  watch: {
    products() {
      this.observeLastElement();
    }
  },
  mounted() {
    this.observeLastElement();
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
});
// CONCATENATED MODULE: ./components/ChatBody.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatBodyvue_type_script_lang_js = (ChatBodyvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ChatBody.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(106)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatBodyvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "195bfee8",
  "dd4ce466"
  
)

/* harmony default export */ var ChatBody = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatCard: __webpack_require__(96).default})


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatCategories.vue?vue&type=template&id=e6112cda&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chat-categories__categories"
  }, _vm._l(_vm.categories, function (category, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass("chat-categories__category", [category.class, {
      currentcat: _vm.currentcat === index
    }]) + _vm._ssrStyle(null, {
      currentcat: _vm.currentcat === index
    }, null) + " data-v-e6112cda>", "</div>", [_vm._ssrNode("<div class=\"chat-categories__category--left\" data-v-e6112cda>", "</div>", [_vm._ssrNode("<figure class=\"chat-categories__category--png\" data-v-e6112cda>", "</figure>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: category.image,
        expression: "category.image"
      }],
      attrs: {
        "alt": "Category image"
      }
    }, [])])]), _vm._ssrNode(" <div class=\"chat-categories__category--right\" data-v-e6112cda><div class=\"chat-categories__category--header\" data-v-e6112cda><h2 data-v-e6112cda>" + _vm._ssrEscape(_vm._s(category.name)) + "</h2></div> <div class=\"chat-categories__category--description\" data-v-e6112cda><p data-v-e6112cda>" + _vm._ssrEscape(_vm._s(_vm.truncate(category.description, 20))) + "</p></div></div>")], 2);
  }), 0);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatCategories.vue?vue&type=template&id=e6112cda&scoped=true

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(43);

// EXTERNAL MODULE: ./mixins/product_mixin.js
var product_mixin = __webpack_require__(70);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatCategories.vue?vue&type=script&lang=js


/* harmony default export */ var ChatCategoriesvue_type_script_lang_js = ({
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
      const category = this.categories[index];
      this.currentcat = index;
      this.setMessageAndPost(category.description);
    },
    async setMessageAndPost(value) {
      this.$router.replace({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          message: value
        }
      });

      //console.log(value)

      // Post the message to the server
      await this.postMessageFromQuery(value);
    }
  }
});
// CONCATENATED MODULE: ./components/ChatCategories.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatCategoriesvue_type_script_lang_js = (ChatCategoriesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ChatCategories.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(108)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatCategoriesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e6112cda",
  "2a8359f2"
  
)

/* harmony default export */ var ChatCategories = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatInput.vue?vue&type=template&id=04898832&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"chatinput\" data-v-04898832><textarea" + _vm._ssrAttr("placeholder", _vm.placeholder) + " class=\"chatinput__field\" data-v-04898832>" + _vm._ssrEscape(_vm._s(_vm.userinput)) + "</textarea> <div" + _vm._ssrClass("chatinput__sendbtn slide-fade-in-up", {
    'visible': _vm.userinput.length
  }) + " data-v-04898832><button data-v-04898832><svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-2xl\" data-v-04898832><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z\" fill=\"currentColor\" data-v-04898832></path></svg></button></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatInput.vue?vue&type=template&id=04898832&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(42);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(43);

// EXTERNAL MODULE: ./mixins/product_mixin.js
var product_mixin = __webpack_require__(70);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatInput.vue?vue&type=script&lang=js



/* harmony default export */ var ChatInputvue_type_script_lang_js = ({
  mixins: [jwt_mixin["a" /* default */], product_mixin["a" /* default */]],
  data() {
    return {
      userinput: "",
      placeholder: "Enter your list"
    };
  },
  watch: {
    userinput(newValue) {
      const wordArray = newValue.trim().split(/\s+/); // split by spaces
      const wordCount = wordArray.length;

      //  console.log(wordArray, wordCount)

      if (wordCount >= 1) {
        if (wordCount >= 5 || wordArray[0].length >= 5) {
          // console.log('hello wordcound')
          //this.autoComplete(newValue);
        }
      }
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
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      });
    },
    async autoComplete(queryText) {
      try {
        const token = await this.getValidToken();
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/message/suggest?query=${queryText}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
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
        // console.log('Autocomplete response:', data);
      } catch (error) {
        console.error('Error performing autocomplete:', error.message);
      }
    },
    sendMessage() {
      const {
        userinput
      } = this;
      if (userinput) {
        if (userinput.length) {
          this.$emit("update:products", []);
          this.postMessageToServer();
        }
      }
    },
    handleEnter(e) {
      const width = window.innerWidth;
      if (width > 900) {
        e.preventDefault(); // prevent newline
        this.sendMessage(); // send the message
      }
      // else: allow natural newline on mobile (no preventDefault)
    },
    async postMessageToServer() {
      const token = await this.getValidToken();
      if (this.setLoading) this.setLoading(true); // start loading

      try {
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/message`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Origin': window.location.origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
          },
          body: JSON.stringify({
            message: this.userinput
          })
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        if (response.status === 200 || response.status === 201) {
          const data = await response.json();
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
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (this.setLoading) this.setLoading(false); // end loading
      }
    },
    async postMessageFromQuery(message) {
      const token = await this.getValidToken();
      if (this.setLoading) this.setLoading(true);
      try {
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/message`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Origin': window.location.origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
          },
          body: JSON.stringify({
            message
          })
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        if (response.status === 200 || response.status === 201) {
          const data = await response.json();
          const {
            products
          } = data;
          this.$emit("update:products", [...this.products, ...products]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (this.setLoading) this.setLoading(false);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ChatInput.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatInputvue_type_script_lang_js = (ChatInputvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ChatInput.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(110)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatInputvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "04898832",
  "90f1b5a2"
  
)

/* harmony default export */ var ChatInput = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_178bdb4a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_178bdb4a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_178bdb4a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_178bdb4a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_178bdb4a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*,:after,:before{box-sizing:inherit;margin:0;padding:0}html{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html{font-size:56.25%}}@media only screen and (max-width:56.25em){html{font-size:55%}}@media only screen and (max-width:37.5em){html{font-size:50%}}@media only screen and (min-width:112.5em){html{font-size:65%}}body{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body{padding:0}}::-moz-selection{background-color:#249b48;color:#fff}::selection{background-color:#249b48;color:#fff}::-webkit-scrollbar{height:8px;width:8px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin{to{transform:rotate(1turn)}}.slide-in-left{animation:slide-in-left .5s ease-out forwards}.button-primary{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn{opacity:.4}.floating-element{animation:float 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll{height:100vh!important;overflow:hidden!important}.spinner{animation:spin 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path{stroke:#249b48;stroke-linecap:round}.home{height:100vh;overflow:hidden;position:relative}.home__header{left:0;position:fixed;top:0;width:100vw;z-index:6}.home__header.auth,.home__header.unauth{background:transparent}@media only screen and (max-width:56.25em){.home__header.auth{background:#fff}}.home__chatbody{background:#fff;height:100vh;overflow:hidden;overflow-y:scroll;padding:3rem 3rem 30rem}@media only screen and (max-width:56.25em){.home__chatbody{padding:7rem 1rem 30rem}}.home__bottom{background:#fff;bottom:0;display:flex;justify-content:center;left:0;padding:3rem 3rem .4rem;position:fixed;width:100vw;z-index:5}.home__bottom--cart{display:none}@media only screen and (max-width:56.25em){.home__bottom--cart{display:block}.home__bottom{display:block;padding:0}}.home__content{overflow:hidden;position:relative}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=178bdb4a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [!_vm.jwt ? _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("home__header", {
    'unauth': !_vm.jwt
  }) + ">", "</div>", [_c('ChatHeader', {
    attrs: {
      "logovisible": true,
      "jwt": _vm.jwt,
      "green": true
    },
    on: {
      "update:authValue": _vm.handleAuthChange
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('Landing', {
    scopedSlots: _vm._u([{
      key: "top-left",
      fn: function () {
        return [_c('Authenticator', {
          on: {
            "update:authValue": _vm.handleAuthChange
          }
        })];
      },
      proxy: true
    }], null, false, 112552609)
  })], 1)], 2) : _vm._e(), _vm._ssrNode(" "), _vm.jwt ? _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"home\">", "</div>", [_vm._ssrNode("<div class=\"home__content\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("home__header", {
    'auth': _vm.jwt
  }) + ">", "</div>", [_c('ChatHeader', {
    attrs: {
      "logovisible": true,
      "jwt": _vm.jwt
    },
    on: {
      "update:authValue": _vm.handleAuthChange
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"home__chatbody\">", "</div>", [_c('ChatBody', {
    attrs: {
      "jwt": _vm.jwt,
      "products": _vm.products,
      "searchloading": _vm.loading
    },
    on: {
      "load-more": _vm.loadMoreProducts
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"home__bottom\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"home__bottom--cart\">", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" "), _c('ChatCategories', {
    attrs: {
      "jwt": _vm.jwt,
      "setLoading": _vm.setLoading
    },
    on: {
      "update:products": _vm.handleProductsChange
    }
  }), _vm._ssrNode(" "), _c('ChatInput', {
    attrs: {
      "jwt": _vm.jwt,
      "setLoading": _vm.setLoading
    },
    on: {
      "update:products": _vm.handleProductsChange
    }
  })], 2)])], 2)])]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=178bdb4a

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  data() {
    return {
      jwt: null,
      products: [],
      loading: false,
      page: 2,
      noMoreProducts: false
    };
  },
  async mounted() {
    this.jwt = localStorage.getItem('jwt');
  },
  methods: {
    handleAuthChange(value) {
      if (value) {
        this.jwt = value;
        localStorage.setItem('jwt', value);
      } else {
        this.jwt = null;
        console.log('logged out here');
      }
    },
    handleProductsChange(value) {
      this.products = value;
      this.page = 2;
      this.noMoreProducts = false;
    },
    setLoading(value) {
      this.loading = value;
    },
    async loadMoreProducts() {
      if (this.loading || this.noMoreProducts) return;

      //this.setLoading(true);

      try {
        const token = this.jwt;
        const message = this.$route.query.message;
        if (!message) {
          console.warn("No search message found in route query.");
          //this.setLoading(false);
          return;
        }
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/message?page=${this.page}&size=10`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message
          })
        });
        if (!response.ok) throw new Error(`Error loading more: ${response.status}`);
        const data = await response.json();
        const moreProducts = data.products;
        this.products = [...this.products, ...moreProducts];
        this.page += 1;
        if (!data.hasMore) {
          console.log("No more products to load.");
          this.noMoreProducts = true;
        }
      } catch (error) {
        console.error('Failed to load more products:', error);
      } finally {
        //this.setLoading(false);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(147)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e308befe"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatHeader: __webpack_require__(49).default,Authenticator: __webpack_require__(124).default,Landing: __webpack_require__(125).default,ChatBody: __webpack_require__(126).default,CartButton: __webpack_require__(45).default,ChatCategories: __webpack_require__(127).default,ChatInput: __webpack_require__(128).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map