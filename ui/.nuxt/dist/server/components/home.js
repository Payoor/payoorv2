exports.ids = [12,3,4,5,6,7,8,9,10,19];
exports.modules = Array(45).concat([
/* 45 */
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
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("06cdfc1e", content, true, context)
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("14a2e196", content, true, context)
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("cd9fc042", content, true, context)
};

/***/ }),
/* 49 */
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
  
  var style0 = __webpack_require__(50)
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
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0803ca8a],[data-v-0803ca8a]:after,[data-v-0803ca8a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0803ca8a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0803ca8a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0803ca8a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0803ca8a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0803ca8a]{font-size:65%}}body[data-v-0803ca8a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0803ca8a]{padding:0}}[data-v-0803ca8a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0803ca8a]::selection{background-color:#249b48;color:#fff}[data-v-0803ca8a]::-webkit-scrollbar{height:8px;width:8px}[data-v-0803ca8a]::-webkit-scrollbar-track{background:transparent}[data-v-0803ca8a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0803ca8a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0803ca8a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0803ca8a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0803ca8a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0803ca8a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-0803ca8a]{animation:slide-in-left-0803ca8a .5s ease-out forwards}.button-primary[data-v-0803ca8a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0803ca8a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0803ca8a]{opacity:.4}.floating-element[data-v-0803ca8a]{animation:float-0803ca8a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0803ca8a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0803ca8a]{animation:spin-0803ca8a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0803ca8a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0803ca8a]{filter:blur(3px)}.error-message[data-v-0803ca8a]{animation:slideFadeInUp-0803ca8a .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-0803ca8a]{overflow-x:hidden}.landing__top[data-v-0803ca8a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0803ca8a]{display:flex}}.landing__topleft[data-v-0803ca8a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0803ca8a]{display:block;width:100%}}.landing__topleft--auth[data-v-0803ca8a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0803ca8a]{padding:0;width:auto}}.landing__topright[data-v-0803ca8a],.landing__topright--img[data-v-0803ca8a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0803ca8a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0803ca8a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0803ca8a]{display:none}}.landing__content[data-v-0803ca8a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0803ca8a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0803ca8a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0803ca8a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0803ca8a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.cartbtn[data-v-0803ca8a]{color:#000;position:relative}.cartbtn__icon[data-v-0803ca8a]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-0803ca8a]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-0803ca8a]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-0803ca8a],.cartbtn__icon--total[data-v-0803ca8a]{color:#fff;font-weight:600}.cartbtn svg[data-v-0803ca8a]{height:80%;width:80%;fill:#fff}.loader[data-v-0803ca8a]{animation:spin-0803ca8a 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}@keyframes spin-0803ca8a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 52 */
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
  
  var style0 = __webpack_require__(56)
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=template&id=010227a9&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chat-header"
  }, [_vm._ssrNode("<div class=\"chat-header__left\" data-v-010227a9>" + (_vm.name ? "<div class=\"chat-header__name\" data-v-010227a9><span class=\"svg\" data-v-010227a9><svg data-v-010227a9><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-010227a9></use></svg></span> <span class=\"label\" data-v-010227a9>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></div>" : "<!---->") + " " + (_vm.logovisible ? "<figure" + _vm._ssrClass("chat-header__left--logo", {
    green: _vm.green
  }) + " data-v-010227a9><img src=\"/imgs/logo.png\" data-v-010227a9></figure>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"chat-header__right\" data-v-010227a9>", "</div>", [_vm._ssrNode("<div class=\"chat-header__right--cart\" data-v-010227a9>", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" <div" + _vm._ssrClass("chat-header__burger", {
    unauth: !_vm.jwtToken,
    green: _vm.green
  }) + " data-v-010227a9><span data-v-010227a9></span><span data-v-010227a9></span><span data-v-010227a9></span></div>")], 2), _vm._ssrNode(" "), _vm.menuopen ? _vm._ssrNode("<div" + _vm._ssrClass("chat-header__menu", {
    auth: _vm.jwtToken
  }) + " data-v-010227a9>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menubody slide-in-left\" data-v-010227a9>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menuitems\" data-v-010227a9>", "</div>", [_vm._ssrNode("<figure class=\"chat-header__left--logo bottom-1rem\" data-v-010227a9>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/logo.png',
      expression: "'/imgs/logo.png'"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chat-header__menuitem\" data-v-010227a9><span class=\"svg\" data-v-010227a9></span> <span class=\"label\" data-v-010227a9>About us</span></div> " + (!_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-010227a9><span class=\"svg\" data-v-010227a9></span> <span class=\"label\" data-v-010227a9>Sign In/Sign Up</span></div>" : "<!---->") + " " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-010227a9><span class=\"svg\" data-v-010227a9></span> <span class=\"label\" data-v-010227a9>Orders</span></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"chat-header__menuitems\" data-v-010227a9><div class=\"chat-header__menuitem\" data-v-010227a9><span class=\"svg\" data-v-010227a9></span></div> " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-010227a9><span class=\"svg\" data-v-010227a9></span> <span class=\"label\" data-v-010227a9>Signout</span></div>" : "<!---->") + "</div>")], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=template&id=010227a9&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

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
  computed: {
    ...Object(external_vuex_["mapState"])("user", {
      currentUser: state => state.currentUser,
      isLoading: state => state.loading,
      jwtToken: state => state.jwtToken,
      currentRoute: state => state.currentRoute,
      previousRoute: state => state.previousRoute
    }),
    currentRoute() {
      return this.$route.name;
    }
  },
  async mounted() {
    const token = await this.getValidToken();
    if (token) {
      this.getValidUser(token);
    } else {
      this.redirectHome();
    }
    console.log(this.currentRoute, 'this is a test');

    //this.$store.dispatch('cart/resetCart');

    this.$store.dispatch('user/trackRouteChange', this.currentRoute);
    this.$store.dispatch('cart/initializeCart');
    this.menuopen = window.innerWidth > 900 && this.jwtToken;
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
          ...this.$route.query,
          prevpage: this.$route.path
        }
      });
    },
    async getValidUser(token) {
      try {
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/auth/validuser?jwttoken=${token}`);
        if (response.status !== 200) {
          this.$store.dispatch('user/removeJwtToken');
          return this.redirectHome();
        }
        ;
        const data = await response.json();
        const {
          user,
          message
        } = data;
        console.log(user, 'curent user here', message, 'messahge left');
        this.$store.dispatch('user/setJwtToken', token);
        this.$store.dispatch('user/addCurrentUser', user);
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
        this.$store.dispatch('user/setLoading', true);
        const token = await this.getValidToken();
        if (!token) {
          this.$emit('update:authValue', null);
          // Remove specific query params
          const {
            unwantedParam1,
            unwantedParam2,
            ...cleanQuery
          } = this.$route.query;
          this.$router.push({
            path: '/',
            query: cleanQuery
          });
          return;
        }
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/auth/signout`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) throw new Error('Failed to sign out');
        await response.json();
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
        this.$store.dispatch('user/setLoading', false);
      } catch (error) {
        console.error('Sign out failed:', error.message);
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
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatHeadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "010227a9",
  "5f357078"
  
)

/* harmony default export */ var ChatHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartButton: __webpack_require__(49).default})


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_010227a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_010227a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_010227a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_010227a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_010227a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-010227a9],[data-v-010227a9]:after,[data-v-010227a9]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-010227a9]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-010227a9]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-010227a9]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-010227a9]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-010227a9]{font-size:65%}}body[data-v-010227a9]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-010227a9]{padding:0}}[data-v-010227a9]::-moz-selection{background-color:#249b48;color:#fff}[data-v-010227a9]::selection{background-color:#249b48;color:#fff}[data-v-010227a9]::-webkit-scrollbar{height:8px;width:8px}[data-v-010227a9]::-webkit-scrollbar-track{background:transparent}[data-v-010227a9]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-010227a9]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-010227a9]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-010227a9{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-010227a9{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-010227a9{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-010227a9{to{transform:rotate(1turn)}}.slide-in-left[data-v-010227a9]{animation:slide-in-left-010227a9 .5s ease-out forwards}.button-primary[data-v-010227a9]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-010227a9]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-010227a9]{opacity:.4}.floating-element[data-v-010227a9]{animation:float-010227a9 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-010227a9]{height:100vh!important;overflow:hidden!important}.spinner[data-v-010227a9]{animation:spin-010227a9 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-010227a9]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-010227a9]{filter:blur(3px)}.error-message[data-v-010227a9]{animation:slideFadeInUp-010227a9 .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-010227a9]{overflow-x:hidden}.landing__top[data-v-010227a9]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-010227a9]{display:flex}}.landing__topleft[data-v-010227a9]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-010227a9]{display:block;width:100%}}.landing__topleft--auth[data-v-010227a9]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-010227a9]{padding:0;width:auto}}.landing__topright[data-v-010227a9],.landing__topright--img[data-v-010227a9]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-010227a9]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-010227a9]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-010227a9]{display:none}}.landing__content[data-v-010227a9]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-010227a9]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-010227a9]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-010227a9]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-010227a9]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-header[data-v-010227a9]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-010227a9]{padding:2rem}}.chat-header__name[data-v-010227a9],.chat-header__name span.svg[data-v-010227a9]{align-items:center;display:flex}.chat-header__name span.svg[data-v-010227a9]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-010227a9]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-010227a9]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-010227a9]{display:none}}.chat-header__left--logo[data-v-010227a9]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-010227a9]{margin-bottom:5rem}.chat-header__left--logo img[data-v-010227a9]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-010227a9]{height:3.5rem}.chat-header__burger[data-v-010227a9]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-010227a9]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-010227a9]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-010227a9]{background:#fff}.chat-header__burger.green span[data-v-010227a9]{background:#249b48}.chat-header__menu[data-v-010227a9]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-010227a9]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-010227a9],.chat-header__menu.auth[data-v-010227a9]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-010227a9]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-010227a9]{font-size:1.8rem}}.chat-header__menuitem span[data-v-010227a9]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-010227a9]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-3b87158c],[data-v-3b87158c]:after,[data-v-3b87158c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-3b87158c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-3b87158c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-3b87158c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-3b87158c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-3b87158c]{font-size:65%}}body[data-v-3b87158c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-3b87158c]{padding:0}}[data-v-3b87158c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::-webkit-scrollbar{height:8px;width:8px}[data-v-3b87158c]::-webkit-scrollbar-track{background:transparent}[data-v-3b87158c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-3b87158c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-3b87158c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-3b87158c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-3b87158c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes spin-3b87158c{to{transform:rotate(1turn)}}.slide-in-left[data-v-3b87158c]{animation:slide-in-left-3b87158c .5s ease-out forwards}.button-primary[data-v-3b87158c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-3b87158c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-3b87158c]{opacity:.4}.floating-element[data-v-3b87158c]{animation:float-3b87158c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-3b87158c]{height:100vh!important;overflow:hidden!important}.spinner[data-v-3b87158c]{animation:spin-3b87158c 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-3b87158c]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-3b87158c]{filter:blur(3px)}.error-message[data-v-3b87158c]{animation:slideFadeInUp-3b87158c .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-3b87158c]{overflow-x:hidden}.landing__top[data-v-3b87158c]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-3b87158c]{display:flex}}.landing__topleft[data-v-3b87158c]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-3b87158c]{display:block;width:100%}}.landing__topleft--auth[data-v-3b87158c]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-3b87158c]{padding:0;width:auto}}.landing__topright[data-v-3b87158c],.landing__topright--img[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-3b87158c]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-3b87158c]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-3b87158c]{display:none}}.landing__content[data-v-3b87158c]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-3b87158c]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-3b87158c]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-3b87158c]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.loading-animation[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.loading-animation figure[data-v-3b87158c]{animation:float-3b87158c 1.5s ease-in-out infinite alternate;border-radius:100%;height:3rem;overflow:hidden;width:3rem}.loading-animation figure img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@keyframes float-3b87158c{0%{transform:translateY(0)}to{transform:translateY(-10px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7847330c", content, true, context)
};

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-9248ea0c],[data-v-9248ea0c]:after,[data-v-9248ea0c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-9248ea0c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-9248ea0c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-9248ea0c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-9248ea0c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-9248ea0c]{font-size:65%}}body[data-v-9248ea0c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-9248ea0c]{padding:0}}[data-v-9248ea0c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-9248ea0c]::selection{background-color:#249b48;color:#fff}[data-v-9248ea0c]::-webkit-scrollbar{height:8px;width:8px}[data-v-9248ea0c]::-webkit-scrollbar-track{background:transparent}[data-v-9248ea0c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-9248ea0c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-9248ea0c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-9248ea0c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-9248ea0c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-9248ea0c{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-9248ea0c{to{transform:rotate(1turn)}}.slide-in-left[data-v-9248ea0c]{animation:slide-in-left-9248ea0c .5s ease-out forwards}.button-primary[data-v-9248ea0c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-9248ea0c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-9248ea0c]{opacity:.4}.floating-element[data-v-9248ea0c]{animation:float-9248ea0c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-9248ea0c]{height:100vh!important;overflow:hidden!important}.spinner[data-v-9248ea0c]{animation:spin-9248ea0c 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-9248ea0c]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-9248ea0c]{filter:blur(3px)}.error-message[data-v-9248ea0c]{animation:slideFadeInUp-9248ea0c .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-9248ea0c]{overflow-x:hidden}.landing__top[data-v-9248ea0c]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-9248ea0c]{display:flex}}.landing__topleft[data-v-9248ea0c]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-9248ea0c]{display:block;width:100%}}.landing__topleft--auth[data-v-9248ea0c]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-9248ea0c]{padding:0;width:auto}}.landing__topright[data-v-9248ea0c],.landing__topright--img[data-v-9248ea0c]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-9248ea0c]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-9248ea0c]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-9248ea0c]{display:none}}.landing__content[data-v-9248ea0c]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-9248ea0c]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-9248ea0c]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-9248ea0c]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-9248ea0c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption[data-v-9248ea0c]{background-color:#fff;border:2px solid rgba(36,155,72,.5);border-radius:1rem;display:flex;justify-content:space-between;margin-bottom:2rem;padding:2rem 1.5rem}.chatoption__loader[data-v-9248ea0c]{align-items:center;display:flex;height:12rem;justify-content:center}.chatoption__left[data-v-9248ea0c]{display:flex}.chatoption__details--productname[data-v-9248ea0c]{font-size:1.2rem;font-weight:500}.chatoption__details--name[data-v-9248ea0c]{font-size:1.5rem;font-weight:600;margin-bottom:1rem}.chatoption__details--price[data-v-9248ea0c]{display:flex;font-size:1.6rem;font-weight:600}.chatoption__details--price span[data-v-9248ea0c]{color:#249b48;font-size:600}.chatoption__details--productquantity[data-v-9248ea0c]{align-items:center;display:flex;margin-top:1rem}.chatoption__details--productquantity span[data-v-9248ea0c]{align-items:center;display:flex;font-size:1.2rem;font-weight:500;margin-right:.5rem}.chatoption__details--producttotal[data-v-9248ea0c]{align-items:center;display:flex}.chatoption__details--producttotal span[data-v-9248ea0c]{align-items:center;display:flex;font-size:1.2rem;font-weight:500;margin-right:.5rem}.chatoption__right[data-v-9248ea0c]{align-items:flex-end;display:flex;flex-direction:column;justify-content:space-between}.chatoption__img[data-v-9248ea0c]{border-radius:1rem;height:10rem;margin-right:.5rem;overflow:hidden;width:10rem}.chatoption__img img[data-v-9248ea0c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption__quantity[data-v-9248ea0c]{display:grid;grid-template-columns:repeat(3,1fr)}span[data-v-9248ea0c]{align-items:center;display:flex;justify-content:center}span.quantity[data-v-9248ea0c]{font-size:1.5rem;font-weight:600}span.svg[data-v-9248ea0c]{border:1px solid rgba(36,155,72,.5);border-radius:.5rem;padding:.5rem}span.svg svg[data-v-9248ea0c]{height:2rem;width:2rem;fill:rgba(0,0,0,.5)}span.svg svg.red[data-v-9248ea0c]{fill:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("de91e85c", content, true, context)
};

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOption.vue?vue&type=template&id=9248ea0c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.loading && !_vm.option ? _vm._ssrNode("<div class=\"chatoption__loader\" data-v-9248ea0c>", "</div>", [_c('LoadingAnimation')], 1) : _vm.option ? _vm._ssrNode("<div class=\"chatoption slide-fade-in-up\" data-v-9248ea0c>", "</div>", [_vm._ssrNode("<div class=\"chatoption__left\" data-v-9248ea0c>", "</div>", [_vm._ssrNode("<figure class=\"chatoption__img\" data-v-9248ea0c>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.option.image.length ? _vm.option.image : _vm.option.productimg,
      expression: "option.image.length ? option.image : option.productimg"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chatoption__details\" data-v-9248ea0c><p class=\"chatoption__details--productname\" data-v-9248ea0c>" + _vm._ssrEscape(_vm._s(_vm.product_name)) + "</p> <p class=\"chatoption__details--name\" data-v-9248ea0c>" + _vm._ssrEscape(_vm._s(_vm.option.unit)) + "</p> <p class=\"chatoption__details--price\" data-v-9248ea0c>\n                    ₦\n                    <span data-v-9248ea0c>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.option.price))) + "</span></p> " + (_vm.admin ? "<p class=\"chatoption__details--productquantity\" data-v-9248ea0c><span data-v-9248ea0c>Amount:</span> <span data-v-9248ea0c>" + _vm._ssrEscape(_vm._s(_vm.product_quantity)) + "</span></p>" : "<!---->") + " " + (_vm.admin ? "<p class=\"chatoption__details--producttotal\" data-v-9248ea0c><span data-v-9248ea0c>Total:</span> <span data-v-9248ea0c>" + _vm._ssrEscape(_vm._s(_vm.product_quantity * _vm.option.price)) + "</span></p>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" " + (!_vm.admin ? "<div class=\"chatoption__right\" data-v-9248ea0c><div class=\"chatoption__delete\" data-v-9248ea0c><span class=\"svg\" data-v-9248ea0c><svg data-v-9248ea0c><use xlink:href=\"/svg/symbol-defs.svg#icon-trash\" data-v-9248ea0c></use></svg></span></div> <div class=\"chatoption__quantity\" data-v-9248ea0c><span class=\"svg\" data-v-9248ea0c><svg data-v-9248ea0c><use xlink:href=\"/svg/symbol-defs.svg#icon-minus1\" data-v-9248ea0c></use></svg></span> <span class=\"quantity\" data-v-9248ea0c>" + _vm._ssrEscape(_vm._s(_vm.quantity)) + "</span> <span class=\"svg\" data-v-9248ea0c><svg data-v-9248ea0c><use xlink:href=\"/svg/symbol-defs.svg#icon-plus\" data-v-9248ea0c></use></svg></span></div></div>" : "<!---->"))], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatOption.vue?vue&type=template&id=9248ea0c&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOption.vue?vue&type=script&lang=js



/* harmony default export */ var ChatOptionvue_type_script_lang_js = ({
  mixins: [jwt_mixin["a" /* default */]],
  props: {
    data: {
      type: Object
    },
    mongooseid: {
      type: String
    },
    admin: {
      type: Boolean
    },
    product_quantity: {
      type: Number
    }
  },
  data() {
    return {
      quantity: 0,
      option: null,
      loading: false,
      product_name: ""
    };
  },
  mounted() {
    if (this.admin) {
      this.getOptionForAdmin();
      return;
    }
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
      console.log(total, 'check the total here');
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
        this.product_name = variant.productId.name;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async getOptionForAdmin() {
      this.loading = true;
      try {
        const response = await fetch(`${api["a" /* serverurl */]}/admin/getoption?mongooseid=${this.mongooseid}`, {
          method: 'GET',
          headers: {
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
        this.product_name = variant.productId.name;
        console.log(this.option, 'option shown here');
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
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ChatOption.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatOptionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9248ea0c",
  "3b35e260"
  
)

/* harmony default export */ var ChatOption = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(52).default})


/***/ }),
/* 63 */
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f2a5bc74", content, true, context)
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("07757d3b", content, true, context)
};

/***/ }),
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("77d8fee8", content, true, context)
};

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_c1b84912_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_c1b84912_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_c1b84912_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_c1b84912_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_c1b84912_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-c1b84912],[data-v-c1b84912]:after,[data-v-c1b84912]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-c1b84912]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-c1b84912]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-c1b84912]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-c1b84912]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-c1b84912]{font-size:65%}}body[data-v-c1b84912]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-c1b84912]{padding:0}}[data-v-c1b84912]::-moz-selection{background-color:#249b48;color:#fff}[data-v-c1b84912]::selection{background-color:#249b48;color:#fff}[data-v-c1b84912]::-webkit-scrollbar{height:8px;width:8px}[data-v-c1b84912]::-webkit-scrollbar-track{background:transparent}[data-v-c1b84912]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-c1b84912]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-c1b84912]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-c1b84912{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-c1b84912{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-c1b84912{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-c1b84912]{animation:slide-in-left-c1b84912 .5s ease-out forwards}.button-primary[data-v-c1b84912]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-c1b84912]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-c1b84912]{opacity:.4}.floating-element[data-v-c1b84912]{animation:float-c1b84912 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-c1b84912]{height:100vh!important;overflow:hidden!important}.spinner[data-v-c1b84912]{animation:spin-c1b84912 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-c1b84912]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-c1b84912]{filter:blur(3px)}.error-message[data-v-c1b84912]{animation:slideFadeInUp-c1b84912 .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-c1b84912]{overflow-x:hidden}.landing__top[data-v-c1b84912]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-c1b84912]{display:flex}}.landing__topleft[data-v-c1b84912]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-c1b84912]{display:block;width:100%}}.landing__topleft--auth[data-v-c1b84912]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-c1b84912]{padding:0;width:auto}}.landing__topright[data-v-c1b84912],.landing__topright--img[data-v-c1b84912]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-c1b84912]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-c1b84912]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-c1b84912]{display:none}}.landing__content[data-v-c1b84912]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-c1b84912]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-c1b84912]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-c1b84912]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-c1b84912]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoptions[data-v-c1b84912]{height:100vh;overflow:hidden;overflow-y:scroll;padding:4rem 2rem 19rem;width:100vw;z-index:10}.chatoptions[data-v-c1b84912],.chatoptions__header[data-v-c1b84912]{background:#fff;left:0;position:fixed;top:0}.chatoptions__header[data-v-c1b84912]{align-items:center;color:#000;display:flex;font-size:1.8rem;padding:2rem 1rem;text-transform:capitalize;width:100%;z-index:3}.chatoptions__header span[data-v-c1b84912]{cursor:pointer}.chatoptions__header span.svg[data-v-c1b84912]{align-items:center;display:flex;margin-right:.5rem}.chatoptions__header span.svg svg[data-v-c1b84912]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chatoptions__options[data-v-c1b84912]{margin-top:3rem}.chatoptions__description[data-v-c1b84912]{border-top:1px solid #eee;margin-top:2rem;padding:1rem 0}.chatoptions__description .description__title[data-v-c1b84912]{color:#000;font-size:1.6rem;font-weight:700;margin-bottom:1rem}.chatoptions__description .description__text[data-v-c1b84912]{color:#555;font-size:1.4rem;line-height:1.6}.chatoptions__content[data-v-c1b84912]{display:flex;justify-content:center}.chatoptions__content--body[data-v-c1b84912]{width:60rem}@media only screen and (max-width:56.25em){.chatoptions__content--body[data-v-c1b84912]{width:100%}}.chatoptions__loading[data-v-c1b84912]{align-items:center;display:flex;justify-content:center;padding:5rem 0}.chatoptions__bottom[data-v-c1b84912]{background:#fff;bottom:0;display:flex;justify-content:center;left:0;padding:1rem 1rem 2rem;position:fixed;width:100%;z-index:4}.chatoptions__bottom.column[data-v-c1b84912]{flex-direction:column}@media only screen and (max-width:56.25em){.chatoptions__bottom[data-v-c1b84912]{display:block}}.chatoptions__bottom button[data-v-c1b84912]{font-size:2rem;padding:2rem;width:100%}.chatoptions__bottom button.spacebetween[data-v-c1b84912]{display:flex;justify-content:space-between}.chatoptions__bottom button.transparent-button[data-v-c1b84912]{margin-bottom:2rem}.chatoptions__bottom .button-primary[data-v-c1b84912]{align-items:center;display:flex;gap:.5rem;justify-content:center}.loader[data-v-c1b84912]{animation:spin-c1b84912 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}.ml-1[data-v-c1b84912]{margin-left:.5rem}@keyframes spin-c1b84912{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.button-primary[disabled][data-v-c1b84912]{cursor:not-allowed;opacity:.7}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("b47621e8", content, true, context)
};

/***/ }),
/* 76 */,
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOptions.vue?vue&type=template&id=c1b84912&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatoptions"
  }, [_vm._ssrNode("<div class=\"chatoptions__content\" data-v-c1b84912><div class=\"chatoptions__content--body\" data-v-c1b84912><h1 class=\"chatoptions__header\" data-v-c1b84912><span class=\"svg\" data-v-c1b84912><svg data-v-c1b84912><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-c1b84912></use></svg></span> <span data-v-c1b84912>" + _vm._ssrEscape(_vm._s(_vm.productname)) + "</span></h1></div></div> "), _vm._ssrNode("<div class=\"chatoptions__content\" data-v-c1b84912>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__content--body\" data-v-c1b84912>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__options\" data-v-c1b84912>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"chatoptions__loading\" data-v-c1b84912>", "</div>", [_c('LoadingAnimation')], 1) : _vm._ssrNode("<div data-v-c1b84912>", "</div>", _vm._l(_vm.variants, function (variant) {
    return _vm._ssrNode("<div data-v-c1b84912>", "</div>", [_c('ChatOption', {
      attrs: {
        "data": {
          ...variant,
          productimg: _vm.productimg
        }
      }
    })], 1);
  }), 0), _vm._ssrNode(" <div class=\"chatoptions__description\" data-v-c1b84912><div class=\"chatoptions__content--body\" data-v-c1b84912><h2 class=\"description__title\" data-v-c1b84912>Product Description</h2> <p class=\"description__text\" data-v-c1b84912>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.productDescription || `This product comes in multiple variants. Select the one that
                            best fits your needs. Each
                            variant is carefully crafted to ensure the best quality and customer satisfaction.`) + "\n                        ") + "</p></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"chatoptions__bottom\" data-v-c1b84912>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__content--body\" data-v-c1b84912>", "</div>", [_vm._ssrNode("<button class=\"button-primary transparent-button\" data-v-c1b84912><span data-v-c1b84912>Continue Shopping</span></button> "), _vm.cartTotal === 0 ? _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.checkoutLoading) + " class=\"button-primary spacebetween disabled-btn\" data-v-c1b84912>", "</button>", [_vm._ssrNode("<span data-v-c1b84912>Proceed to Checkout</span> "), _vm.checkoutLoading ? _vm._ssrNode("<span class=\"loader ml-1\" data-v-c1b84912>", "</span>") : _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e(), _vm._ssrNode(" "), _vm.cartTotal > 0 ? _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.checkoutLoading) + " class=\"button-primary spacebetween\" data-v-c1b84912>", "</button>", [_vm._ssrNode("<span data-v-c1b84912>Proceed to Checkout</span> "), _vm.checkoutLoading ? _vm._ssrNode("<span class=\"loader ml-1\" data-v-c1b84912>", "</span>") : _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e()], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatOptions.vue?vue&type=template&id=c1b84912&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOptions.vue?vue&type=script&lang=js



/* harmony default export */ var ChatOptionsvue_type_script_lang_js = ({
  props: ['toggleViewOptions', 'mongooseid', 'productname', 'productimg', 'productDescription'],
  mixins: [jwt_mixin["a" /* default */]],
  data() {
    return {
      variants: [],
      backRoute: '/',
      loading: false,
      checkoutLoading: false // New data property to manage checkout button loading state
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
    async goToCheckout() {
      this.checkoutLoading = true;
      try {
        await this.$store.dispatch("cart/syncCartToServer");
        this.$router.push({
          path: '/checkout',
          query: {
            ...this.$route.query,
            prevpage: this.$route.path
          }
        });
      } catch (error) {
        console.error("Error syncing cart to server:", error);
      } finally {
        this.checkoutLoading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ChatOptions.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatOptionsvue_type_script_lang_js = (ChatOptionsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ChatOptions.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatOptionsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c1b84912",
  "2f320ac3"
  
)

/* harmony default export */ var ChatOptions = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(52).default,ChatOption: __webpack_require__(62).default,CartButton: __webpack_require__(49).default})


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_0809aa41_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_0809aa41_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_0809aa41_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_0809aa41_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_0809aa41_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0809aa41],[data-v-0809aa41]:after,[data-v-0809aa41]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0809aa41]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0809aa41]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0809aa41]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0809aa41]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0809aa41]{font-size:65%}}body[data-v-0809aa41]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0809aa41]{padding:0}}[data-v-0809aa41]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0809aa41]::selection{background-color:#249b48;color:#fff}[data-v-0809aa41]::-webkit-scrollbar{height:8px;width:8px}[data-v-0809aa41]::-webkit-scrollbar-track{background:transparent}[data-v-0809aa41]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0809aa41]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0809aa41]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0809aa41{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0809aa41{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0809aa41{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-0809aa41{to{transform:rotate(1turn)}}.slide-in-left[data-v-0809aa41]{animation:slide-in-left-0809aa41 .5s ease-out forwards}.button-primary[data-v-0809aa41]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0809aa41]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0809aa41]{opacity:.4}.floating-element[data-v-0809aa41]{animation:float-0809aa41 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0809aa41]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0809aa41]{animation:spin-0809aa41 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0809aa41]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0809aa41]{filter:blur(3px)}.error-message[data-v-0809aa41]{animation:slideFadeInUp-0809aa41 .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-0809aa41]{overflow-x:hidden}.landing__top[data-v-0809aa41]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0809aa41]{display:flex}}.landing__topleft[data-v-0809aa41]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0809aa41]{display:block;width:100%}}.landing__topleft--auth[data-v-0809aa41]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0809aa41]{padding:0;width:auto}}.landing__topright[data-v-0809aa41],.landing__topright--img[data-v-0809aa41]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0809aa41]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0809aa41]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0809aa41]{display:none}}.landing__content[data-v-0809aa41]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0809aa41]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0809aa41]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0809aa41]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0809aa41]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-categories__header[data-v-0809aa41]{font-size:1.5rem;font-weight:500;padding:2rem 1rem 0}.chat-categories__categories[data-v-0809aa41]{background:#b6edf2;display:flex;justify-content:flex-start;overflow-x:scroll;overflow-y:hidden;padding:1rem;scrollbar-width:none;width:100%;-ms-overflow-style:none}.chat-categories__categories[data-v-0809aa41]::-webkit-scrollbar{display:none;height:6px}.chat-categories__categories[data-v-0809aa41]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.chat-categories__categories[data-v-0809aa41]::-webkit-scrollbar-thumb:hover{background-color:transparent}.chat-categories__categories.home-white[data-v-0809aa41]{background:#fff}.chat-categories__category[data-v-0809aa41]{align-items:center;border-radius:1rem;cursor:pointer;display:flex;flex-shrink:0;margin-right:1rem;min-height:3rem;padding:1rem;width:20rem}.chat-categories__category.currentcat[data-v-0809aa41]{border:1px solid #249b48}.chat-categories__category--header[data-v-0809aa41]{font-size:1rem}.chat-categories__category--png[data-v-0809aa41]{height:5rem;margin-right:.5rem;width:5rem}.chat-categories__category--png img[data-v-0809aa41]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-categories__category--description[data-v-0809aa41]{color:rgba(0,0,0,.5);font-size:1rem}.chat-categories__category.farmfresh[data-v-0809aa41]{background:#a8d1f0}.chat-categories__category.protein[data-v-0809aa41]{background:#f0e7a8}.chat-categories__category.cookingessentials[data-v-0809aa41]{background:#f0baa8}.chat-categories__category.fruits[data-v-0809aa41]{background:pink}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_3b2de799_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_3b2de799_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_3b2de799_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_3b2de799_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_3b2de799_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-3b2de799],[data-v-3b2de799]:after,[data-v-3b2de799]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-3b2de799]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-3b2de799]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-3b2de799]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-3b2de799]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-3b2de799]{font-size:65%}}body[data-v-3b2de799]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-3b2de799]{padding:0}}[data-v-3b2de799]::-moz-selection{background-color:#249b48;color:#fff}[data-v-3b2de799]::selection{background-color:#249b48;color:#fff}[data-v-3b2de799]::-webkit-scrollbar{height:8px;width:8px}[data-v-3b2de799]::-webkit-scrollbar-track{background:transparent}[data-v-3b2de799]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-3b2de799]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-3b2de799]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-3b2de799{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-3b2de799{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-3b2de799{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-3b2de799{to{transform:rotate(1turn)}}.slide-in-left[data-v-3b2de799]{animation:slide-in-left-3b2de799 .5s ease-out forwards}.button-primary[data-v-3b2de799]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-3b2de799]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-3b2de799]{opacity:.4}.floating-element[data-v-3b2de799]{animation:float-3b2de799 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-3b2de799]{height:100vh!important;overflow:hidden!important}.spinner[data-v-3b2de799]{animation:spin-3b2de799 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-3b2de799]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-3b2de799]{filter:blur(3px)}.error-message[data-v-3b2de799]{animation:slideFadeInUp-3b2de799 .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-3b2de799]{overflow-x:hidden}.landing__top[data-v-3b2de799]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-3b2de799]{display:flex}}.landing__topleft[data-v-3b2de799]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-3b2de799]{display:block;width:100%}}.landing__topleft--auth[data-v-3b2de799]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-3b2de799]{padding:0;width:auto}}.landing__topright[data-v-3b2de799],.landing__topright--img[data-v-3b2de799]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-3b2de799]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-3b2de799]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-3b2de799]{display:none}}.landing__content[data-v-3b2de799]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-3b2de799]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-3b2de799]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-3b2de799]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-3b2de799]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatinput[data-v-3b2de799]{background:#333;border:.3rem solid transparent;border-radius:3rem;margin:0 auto;min-height:6rem;overflow:hidden;padding:2rem;position:relative}@media only screen and (max-width:56.25em){.chatinput[data-v-3b2de799]{border-radius:3rem 3rem 0 0}}.chatinput .error-message[data-v-3b2de799]{color:#ff4d4d;font-size:1.6rem;font-weight:700;margin-bottom:1rem;text-align:center}.chatinput__field[data-v-3b2de799]{background:transparent;border:none;color:#fff;font-size:2.1rem;line-height:1.5;max-height:15rem;min-height:2rem;outline:none;overflow-y:auto;resize:none;width:100%}.chatinput__sendbtn[data-v-3b2de799]{background:#249b48;border-radius:100%;bottom:1rem;display:flex;display:none;height:4.5rem;justify-content:center;overflow:hidden;position:absolute;right:1rem;width:4.5rem}.chatinput__sendbtn.visible[data-v-3b2de799]{display:flex}.chatinput__sendbtn button[data-v-3b2de799]{background:transparent;border:none;cursor:pointer;display:flex;height:100%;justify-content:center;outline:none;width:100%}.chatinput__sendbtn button svg[data-v-3b2de799]{fill:#fff;color:#fff;height:4rem;width:4rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_2594098a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_2594098a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_2594098a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_2594098a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_2594098a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-2594098a],[data-v-2594098a]:after,[data-v-2594098a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-2594098a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-2594098a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-2594098a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-2594098a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-2594098a]{font-size:65%}}body[data-v-2594098a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-2594098a]{padding:0}}[data-v-2594098a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-2594098a]::selection{background-color:#249b48;color:#fff}[data-v-2594098a]::-webkit-scrollbar{height:8px;width:8px}[data-v-2594098a]::-webkit-scrollbar-track{background:transparent}[data-v-2594098a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-2594098a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-2594098a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-2594098a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-2594098a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-2594098a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-2594098a]{animation:slide-in-left-2594098a .5s ease-out forwards}.button-primary[data-v-2594098a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-2594098a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-2594098a]{opacity:.4}.floating-element[data-v-2594098a]{animation:float-2594098a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-2594098a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-2594098a]{border:4px solid rgba(36,155,72,.3);border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-2594098a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-2594098a]{filter:blur(3px)}.error-message[data-v-2594098a]{animation:slideFadeInUp-2594098a .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-2594098a]{overflow-x:hidden}.landing__top[data-v-2594098a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-2594098a]{display:flex}}.landing__topleft[data-v-2594098a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-2594098a]{display:block;width:100%}}.landing__topleft--auth[data-v-2594098a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-2594098a]{padding:0;width:auto}}.landing__topright[data-v-2594098a],.landing__topright--img[data-v-2594098a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-2594098a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-2594098a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-2594098a]{display:none}}.landing__content[data-v-2594098a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-2594098a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-2594098a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-2594098a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-2594098a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatcard[data-v-2594098a]{background:rgba(168,209,240,.6);border-radius:1rem;overflow:hidden;position:relative}.chatcard__contents[data-v-2594098a]{padding:1rem}.chatcard__name[data-v-2594098a]{font-size:1.5rem;font-weight:600;margin:1rem 0}.chatcard__viewmore--flex[data-v-2594098a]{align-items:center;display:flex}.chatcard__viewmore--flex span[data-v-2594098a]{flex-shrink:0}.chatcard__viewmore--flex span[data-v-2594098a]:first-child{margin-right:.4rem}.chatcard__viewmore button[data-v-2594098a]{align-items:center;background:#249b48;border:none;border-radius:3rem;color:#fff;cursor:pointer;display:flex;font-size:1.4rem;font-weight:500;justify-content:center;outline:none;padding:1rem}.chatcard__viewmore button[data-v-2594098a]:disabled{cursor:not-allowed;opacity:.7}.chatcard__img[data-v-2594098a]{height:14rem}.chatcard__img img[data-v-2594098a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatcard__tags[data-v-2594098a]{display:flex;flex-wrap:wrap;margin-top:1rem}.chatcard__tags span[data-v-2594098a]{background:rgba(36,155,72,.4);border:1px solid rgba(36,155,72,.4);border-radius:3rem;display:inline-block;font-weight:500;margin-right:.5rem;padding:.5rem 1.4rem}.spinner[data-v-2594098a]{animation:spin-2594098a 1s linear infinite;border:.4rem solid hsla(0,0%,100%,.3);border-radius:50%;border-top-color:#fff;height:1rem;width:1rem}@keyframes spin-2594098a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 94 */
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
var jwt_mixin = __webpack_require__(45);

// EXTERNAL MODULE: ./mixins/product_mixin.js
var product_mixin = __webpack_require__(63);

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
  
  var style0 = __webpack_require__(78)
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
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatInput.vue?vue&type=template&id=3b2de799&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode((_vm.errorMessage ? "<div class=\"error-message\" data-v-3b2de799>" + _vm._ssrEscape("\n        " + _vm._s(_vm.errorMessage) + "\n    ") + "</div>" : "<!---->") + " <div class=\"chatinput\" data-v-3b2de799>" + (!_vm.currentUser.otpMode ? "<div data-v-3b2de799>" + (_vm.currentUser.name && _vm.currentUser.phoneNumber && _vm.currentUser.detailsAdded ? "<textarea" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + " class=\"chatinput__field\" data-v-3b2de799>" + _vm._ssrEscape(_vm._s(_vm.userinput)) + "</textarea>" : "<!---->") + " " + (_vm.isEmailMode ? "<input type=\"email\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + _vm._ssrAttr("value", _vm.userinput) + " class=\"chatinput__field\" data-v-3b2de799>" : "<!---->") + " " + (_vm.isPhoneMode && !_vm.isEmailMode ? "<input type=\"tel\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + _vm._ssrAttr("value", _vm.userinput) + " class=\"chatinput__field\" data-v-3b2de799>" : "<!---->") + " " + (_vm.isNameMode ? "<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + _vm._ssrAttr("value", _vm.userinput) + " class=\"chatinput__field\" data-v-3b2de799>" : "<!---->") + "</div>" : "<!---->") + " <div" + _vm._ssrClass("chatinput__sendbtn slide-fade-in-up", {
    'visible': _vm.userinput.length
  }) + " data-v-3b2de799><button data-v-3b2de799><svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-2xl\" data-v-3b2de799><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z\" fill=\"currentColor\" data-v-3b2de799></path></svg></button></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatInput.vue?vue&type=template&id=3b2de799&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

// EXTERNAL MODULE: ./mixins/product_mixin.js
var product_mixin = __webpack_require__(63);

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

    /*const token = localStorage.getItem('jwt')
     if (this.$route.name === 'authp') {
        const { email, phoneNumber, name } = this.$route.query;
         if (phoneNumber) {
            this.$store.dispatch('user/setUserPhoneNumber', phoneNumber);
        }
         if (name) {
            this.$store.dispatch('user/setUserName', name);
        }
         if (email) {
            this.$store.dispatch('user/setUserEmail', email);
        }
    }*/

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
          this.errorMessage = error.message;
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
            message: this.userinput
          })
        });
        if (!response.ok) {
          const errorData = await response.json(); // Try to get error details
          const error = new Error(`HTTP error! status: ${response.status}: ${errorData.message || 'Unknown error'}`);
          error.status = response.status;
          error.data = errorData;
          throw error;
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
        console.error(error);
        // Propagate error to sendMessage's catch block if this component doesn't handle it fully
        throw error;
      } finally {
        if (this.setLoading) this.setLoading(false);
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
          const errorData = await response.json(); // Try to get error details
          const error = new Error(`HTTP error! status: ${response.status}: ${errorData.message || 'Unknown error'}`);
          error.status = response.status;
          error.data = errorData;
          throw error;
        }
        if (response.status === 200 || response.status === 201) {
          const data = await response.json();
          const {
            products
          } = data;
          this.$emit("update:products", [...this.products, ...products]);
        }
      } catch (error) {
        console.error(error);
        // Propagate error to sendMessage's catch block if this component doesn't handle it fully
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
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatInputvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3b2de799",
  "90f1b5a2"
  
)

/* harmony default export */ var ChatInput = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatCard.vue?vue&type=template&id=2594098a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatcard"
  }, [_vm._ssrNode("<figure class=\"chatcard__img\" data-v-2594098a>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.imageUrl,
      expression: "imageUrl"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chatcard__contents\" data-v-2594098a><div class=\"chatcard__name\" data-v-2594098a><p data-v-2594098a>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</p></div> <div class=\"chatcard__viewmore\" data-v-2594098a><button" + _vm._ssrAttr("disabled", _vm.loading) + " data-v-2594098a><div class=\"chatcard__viewmore--flex\" data-v-2594098a><span data-v-2594098a>" + _vm._ssrEscape("View " + _vm._s(_vm.options) + " options") + "</span> " + (_vm.loading ? "<span class=\"spinner\" data-v-2594098a></span>" : "<!---->") + "</div></button></div> <div class=\"chatcard__tags\" data-v-2594098a>" + _vm._ssrList(_vm.tags, function (tag, index) {
    return "<span data-v-2594098a>" + _vm._ssrEscape(_vm._s(_vm.formatTag(tag))) + "</span>";
  }) + "</div></div> "), _vm.view_options ? _vm._ssrNode("<div data-v-2594098a>", "</div>", [_c('ChatOptions', {
    attrs: {
      "options": _vm.options,
      "toggleViewOptions": _vm.toggleViewOptions,
      "productname": _vm.name,
      "productimg": _vm.imageUrl,
      "mongooseid": _vm.product._mongooseid,
      "productDescription": _vm.productDescription
    }
  })], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatCard.vue?vue&type=template&id=2594098a&scoped=true

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
      view_options: false,
      loading: false // Introduce a loading state
    };
  },
  mounted() {
    const previousPage = this.$route.query.prevpage;
    const currentProduct = this.$route.query.currentproduct;
    if (previousPage === '/' && currentProduct === this.product._mongooseid) {
      this.view_options = true;
    }
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
    },
    productDescription() {
      return this.product.generatedDescription;
    }
  },
  methods: {
    async toggleViewOptions() {
      if (this.view_options) {
        const newQuery = {
          ...this.$route.query
        };
        delete newQuery.currentproduct;
        this.$router.push({
          path: '/',
          query: newQuery
        });
        this.view_options = false;
        return;
      }
      this.loading = true;
      try {
        await this.$store.dispatch("cart/syncCartToServer");
      } catch (error) {
        console.error("Error syncing cart to server:", error);
      } finally {
        this.loading = false;
      }
      this.view_options = true;
      this.$router.push({
        path: '/',
        query: {
          ...this.$route.query,
          currentproduct: this.product._mongooseid
        }
      });
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
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ChatCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(92)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatCardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2594098a",
  "2b5f683b"
  
)

/* harmony default export */ var ChatCard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatOptions: __webpack_require__(77).default})


/***/ }),
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3face694", content, true, context)
};

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_735f4fd9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_735f4fd9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_735f4fd9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_735f4fd9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_735f4fd9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-735f4fd9],[data-v-735f4fd9]:after,[data-v-735f4fd9]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-735f4fd9]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-735f4fd9]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-735f4fd9]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-735f4fd9]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-735f4fd9]{font-size:65%}}body[data-v-735f4fd9]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-735f4fd9]{padding:0}}[data-v-735f4fd9]::-moz-selection{background-color:#249b48;color:#fff}[data-v-735f4fd9]::selection{background-color:#249b48;color:#fff}[data-v-735f4fd9]::-webkit-scrollbar{height:8px;width:8px}[data-v-735f4fd9]::-webkit-scrollbar-track{background:transparent}[data-v-735f4fd9]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-735f4fd9]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-735f4fd9]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-735f4fd9{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-735f4fd9{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-735f4fd9{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-735f4fd9{to{transform:rotate(1turn)}}.slide-in-left[data-v-735f4fd9]{animation:slide-in-left-735f4fd9 .5s ease-out forwards}.button-primary[data-v-735f4fd9]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-735f4fd9]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-735f4fd9]{opacity:.4}.floating-element[data-v-735f4fd9]{animation:float-735f4fd9 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-735f4fd9]{height:100vh!important;overflow:hidden!important}.spinner[data-v-735f4fd9]{animation:spin-735f4fd9 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-735f4fd9]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-735f4fd9]{filter:blur(3px)}.error-message[data-v-735f4fd9]{animation:slideFadeInUp-735f4fd9 .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing[data-v-735f4fd9]{overflow-x:hidden}.landing__top[data-v-735f4fd9]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-735f4fd9]{display:flex}}.landing__topleft[data-v-735f4fd9]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-735f4fd9]{display:block;width:100%}}.landing__topleft--auth[data-v-735f4fd9]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-735f4fd9]{padding:0;width:auto}}.landing__topright[data-v-735f4fd9],.landing__topright--img[data-v-735f4fd9]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-735f4fd9]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-735f4fd9]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-735f4fd9]{display:none}}.landing__content[data-v-735f4fd9]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-735f4fd9]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-735f4fd9]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-735f4fd9]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-735f4fd9]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatbody__content[data-v-735f4fd9]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.chatbody__content[data-v-735f4fd9]{display:block}}.chatbody__products[data-v-735f4fd9]{grid-template-columns:repeat(3,1fr);grid-gap:2rem;gap:2rem;grid-auto-rows:29rem;scrollbar-width:none;-ms-overflow-style:none;display:grid;width:82rem}.chatbody__products[data-v-735f4fd9]::-webkit-scrollbar{display:none;height:6px}.chatbody__products[data-v-735f4fd9]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.chatbody__products[data-v-735f4fd9]::-webkit-scrollbar-thumb:hover{background-color:transparent}@media only screen and (max-width:56.25em){.chatbody__products[data-v-735f4fd9]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:2rem;gap:2rem;grid-auto-rows:29rem;width:auto}}.chatbody__products.user-details[data-v-735f4fd9]{grid-auto-rows:10rem}.chatbody__userdetails[data-v-735f4fd9]{font-size:1.7rem;grid-column:1/-1;padding-top:4rem}.chatbody__userdetails--ai[data-v-735f4fd9]{animation:slideFadeInUp-735f4fd9 .3s ease-out forwards;color:#249b48;font-weight:500}.chatbody__userdetails--prompt[data-v-735f4fd9]{color:#000;display:flex;justify-content:space-between}.chatbody__userdetails--prompt span.content[data-v-735f4fd9]{animation:slideFadeInUp-735f4fd9 .3s ease-out forwards;background:#249b48;border-radius:3rem;color:#fff;font-weight:400;padding:1rem}.chatbody__loading[data-v-735f4fd9]{align-items:center;display:flex;grid-column:1/-1;justify-content:center;padding:5rem 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatBody.vue?vue&type=template&id=735f4fd9&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"chatbody\" data-v-735f4fd9>", "</div>", [_vm._ssrNode("<div class=\"chatbody__content\" data-v-735f4fd9>", "</div>", [_vm._ssrNode("<div data-v-735f4fd9>", "</div>", [_vm.searchloading || _vm.globalLoading ? _vm._ssrNode("<div class=\"chatbody__loading\" data-v-735f4fd9>", "</div>", [_c('LoadingAnimation')], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div data-v-735f4fd9>", "</div>", [_vm._ssrNode("<div class=\"chatbody__products\" data-v-735f4fd9>", "</div>", _vm._l(_vm.products, function (product, index) {
    return _vm._ssrNode("<div data-v-735f4fd9>", "</div>", [_c('ChatCard', {
      attrs: {
        "product": product
      }
    })], 1);
  }), 0)])], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatBody.vue?vue&type=template&id=735f4fd9&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

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
  computed: {
    ...Object(external_vuex_["mapState"])("user", {
      currentUser: state => state.currentUser,
      tempUserName: state => state.currentUser.name ? state.currentUser.name : "",
      tempPhoneNumber: state => state.currentUser.phoneNumber ? state.currentUser.phoneNumber : "",
      globalLoading: state => state.loading
    }),
    cleanedUserName() {
      var _this$currentUser;
      if (!((_this$currentUser = this.currentUser) !== null && _this$currentUser !== void 0 && _this$currentUser.name)) return '';
      return this.currentUser.name.split(' ')[0].replace(/\s+/g, '');
    }
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
            //console.log('Approaching last element — loading more');
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
var componentNormalizer = __webpack_require__(3);

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
  "735f4fd9",
  "dd4ce466"
  
)

/* harmony default export */ var ChatBody = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(52).default,ChatCard: __webpack_require__(98).default})


/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_fcfb49be_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_fcfb49be_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_fcfb49be_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_fcfb49be_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_fcfb49be_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*,:after,:before{box-sizing:inherit;margin:0;padding:0}html{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html{font-size:56.25%}}@media only screen and (max-width:56.25em){html{font-size:55%}}@media only screen and (max-width:37.5em){html{font-size:50%}}@media only screen and (min-width:112.5em){html{font-size:65%}}body{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body{padding:0}}::-moz-selection{background-color:#249b48;color:#fff}::selection{background-color:#249b48;color:#fff}::-webkit-scrollbar{height:8px;width:8px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin{to{transform:rotate(1turn)}}.slide-in-left{animation:slide-in-left .5s ease-out forwards}.button-primary{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn{opacity:.4}.floating-element{animation:float 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll{height:100vh!important;overflow:hidden!important}.spinner{animation:spin 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path{stroke:#249b48;stroke-linecap:round}.blur-effect{filter:blur(3px)}.error-message{animation:slideFadeInUp .5s ease-out forwards;background:#fff;border-radius:1rem;color:red;font-size:1.3rem;font-weight:500;line-height:2.1rem;margin:2rem 16px;padding:1rem 3rem;position:absolute;top:0}.landing{overflow-x:hidden}.landing__top{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top{display:flex}}.landing__topleft{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft{display:block;width:100%}}.landing__topleft--auth{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth{padding:0;width:auto}}.landing__topright,.landing__topright--img{align-items:center;display:flex;justify-content:center}.landing__topright--img{transform:scale(1.1);width:100rem}.landing__topright--img img{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright{display:none}}.landing__content{background:#249b48;margin-top:90rem;position:relative}.landing__seemore{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.home{height:100vh;overflow:hidden;position:relative}.home__header{left:0;position:fixed;top:0;width:100vw;z-index:6}.home__header.auth,.home__header.unauth{background:transparent}@media only screen and (max-width:56.25em){.home__header.auth{background:#fff}}.home__chatbody{background:#fff;height:calc(100vh - 160px);overflow-y:scroll;padding:9rem 3rem 120px}@media only screen and (max-width:56.25em){.home__chatbody{padding:2rem 1rem 120px}}.home__naturallanguage{background:#fff;display:flex;justify-content:center;padding:9rem 2rem 2rem}@media only screen and (max-width:56.25em){.home__naturallanguage{display:block}}.home__naturallanguage--p{background:#249b48;border-radius:1.3rem;color:#000;color:#fff;font-size:1.6rem;font-style:italic;font-weight:300;padding:1.5rem;width:82rem}@media only screen and (max-width:56.25em){.home__naturallanguage--p{width:auto}}.home__naturallanguage--p:after{animation:blink 1s step-start infinite;content:\"|\";margin-left:4px;opacity:.6}.home__bottom{background:#fff;bottom:0;box-shadow:0 -2px 10px rgba(0,0,0,.1);display:flex;justify-content:center;left:0;padding:3rem 3rem .4rem;position:fixed;width:100vw;z-index:5}.home__bottom--cart{display:none}@media only screen and (max-width:56.25em){.home__bottom--cart{display:block}.home__bottom{display:block;padding:0}}.home__content{overflow:hidden;position:relative}@keyframes blink{50%{opacity:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home.vue?vue&type=template&id=fcfb49be
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"home\">", "</div>", [!_vm.globalLoading ? _vm._ssrNode("<div class=\"home__content\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("home__header", {
    'auth': _vm.jwtToken
  }) + ">", "</div>", [_c('ChatHeader', {
    attrs: {
      "logovisible": true,
      "jwt": _vm.jwtToken
    },
    on: {
      "update:authValue": _vm.handleAuthChange
    }
  })], 1), _vm._ssrNode(" "), _vm.currentUser.email && _vm.currentUser.name ? _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"home__naturallanguage\"><p class=\"home__naturallanguage--p\">" + _vm._ssrEscape(_vm._s(_vm.naturalLangResponseText)) + "</p></div> "), _vm._ssrNode("<div class=\"home__chatbody\">", "</div>", [_c('ChatBody', {
    attrs: {
      "jwt": _vm.jwtToken,
      "products": _vm.products,
      "searchloading": _vm.loading
    },
    on: {
      "load-more": _vm.loadMoreProducts
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"home__bottom\"" + _vm._ssrStyle(null, _vm.bottomTranslateStyle, null) + ">", "</div>", [_vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"home__bottom--cart\">", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" "), _c('ChatCategories', {
    attrs: {
      "jwt": _vm.jwtToken,
      "setLoading": _vm.setLoading,
      "home": true
    },
    on: {
      "update:products": _vm.handleProductsChange,
      "update:replyuser": _vm.handleReply
    }
  }), _vm._ssrNode(" "), _c('ChatInput', {
    attrs: {
      "jwt": _vm.jwtToken,
      "setLoading": _vm.setLoading
    },
    on: {
      "update:products": _vm.handleProductsChange,
      "update:replyuser": _vm.handleReply
    }
  })], 2)])], 2) : _vm._e()], 2) : _vm._e()])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Home.vue?vue&type=template&id=fcfb49be

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home.vue?vue&type=script&lang=js


/* harmony default export */ var Homevue_type_script_lang_js = ({
  data() {
    return {
      jwt: null,
      products: [],
      loading: false,
      page: 2,
      noMoreProducts: false,
      naturalLangResponseText: "",
      lastScrollTop: 0,
      isBottomHidden: false,
      translateAmount: 120
    };
  },
  mounted() {
    this.updateNaturalLangResponse();
    this.addScrollListener();
  },
  beforeUnmount() {
    this.removeScrollListener();
  },
  computed: {
    ...Object(external_vuex_["mapState"])("user", {
      currentUser: state => state.currentUser,
      isLoading: state => state.loading,
      jwtToken: state => state.jwtToken,
      globalLoading: state => state.loading
    }),
    cleanedUserName() {
      var _this$currentUser;
      if (!((_this$currentUser = this.currentUser) !== null && _this$currentUser !== void 0 && _this$currentUser.name)) return "";
      return this.currentUser.name.split(" ")[0].replace(/\s+/g, "");
    },
    bottomTranslateStyle() {
      return {
        transform: this.isBottomHidden ? `translateY(${this.translateAmount}px)` : 'translateY(0)',
        transition: 'transform 0.3s ease-out'
      };
    }
  },
  watch: {
    currentUser(newVal) {
      this.updateNaturalLangResponse();
    }
  },
  methods: {
    async updateNaturalLangResponse() {
      const queryMessage = this.$route.query.category ? this.$route.query.category : this.$route.query.message;
      const message = queryMessage ? `Here's what I found for "${queryMessage}"` : `Hello, ${this.cleanedUserName}, how may I help you with your shopping list?`;
      this.naturalLangResponseText = "";
      if (!queryMessage) {
        this.naturalLangResponseText = message;
        return;
      }
      const chars = message.split("");
      let built = "";
      for (const char of chars) {
        built += char;
        await this.sleep(5);
        this.naturalLangResponseText = built;
      }
    },
    sleep(ms) {
      return new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, ms)));
    },
    handleAuthChange(value) {
      if (value) {
        localStorage.setItem("jwt", value);
      } else {
        console.log("logged out here");
      }
    },
    handleProductsChange(value) {
      this.products = value;
      this.page = 2;
      this.noMoreProducts = false;
    },
    handleReply() {
      this.updateNaturalLangResponse();
    },
    setLoading(value) {
      this.loading = value;
    },
    async loadMoreProducts() {
      if (this.loading || this.noMoreProducts) return;
      try {
        const token = this.jwtToken;
        const message = this.$route.query.message;
        if (!message) {
          console.warn("No search message found in route query.");
          return;
        }
        const response = await fetch(`${api["a" /* serverurl */]}/shopper/message?page=${this.page}&size=10`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
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
        console.error("Failed to load more products:", error);
      }
    },
    handleScroll() {
      const chatBody = this.$refs.chatBodyRef;
      if (chatBody) {
        const currentScrollTop = chatBody.scrollTop;
        const scrollThreshold = 10;
        if (Math.abs(currentScrollTop - this.lastScrollTop) > scrollThreshold) {
          if (currentScrollTop > this.lastScrollTop) {
            console.log('Scrolling Downwards - Hiding bottom');
            this.isBottomHidden = true;
          } else if (currentScrollTop < this.lastScrollTop) {
            console.log('Scrolling Upwards - Showing bottom');
            this.isBottomHidden = false;
          }
        }
        this.lastScrollTop = currentScrollTop;
      }
    },
    addScrollListener() {
      const chatBody = this.$refs.chatBodyRef;
      if (chatBody) {
        chatBody.addEventListener('scroll', this.handleScroll);
      }
    },
    removeScrollListener() {
      const chatBody = this.$refs.chatBodyRef;
      if (chatBody) {
        chatBody.removeEventListener('scroll', this.handleScroll);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Home.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Homevue_type_script_lang_js = (Homevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Home.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(116)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Homevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "76420892"
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatHeader: __webpack_require__(53).default,ChatBody: __webpack_require__(110).default,CartButton: __webpack_require__(49).default,ChatCategories: __webpack_require__(94).default,ChatInput: __webpack_require__(95).default})


/***/ })
]);;
//# sourceMappingURL=home.js.map