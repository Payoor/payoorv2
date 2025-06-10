exports.ids = [31,3,4,5,6,7,8,9,10,12,14,15,16,17,18,19];
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
var content = __webpack_require__(52);
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
var external_vuex_ = __webpack_require__(3);

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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CartButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(51)
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
/* 48 */
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
  add("535167da", content, true, context)
};

/***/ }),
/* 49 */
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
/* 50 */
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
var componentNormalizer = __webpack_require__(2);

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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0803ca8a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0803ca8a],[data-v-0803ca8a]:after,[data-v-0803ca8a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0803ca8a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0803ca8a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0803ca8a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0803ca8a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0803ca8a]{font-size:65%}}body[data-v-0803ca8a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0803ca8a]{padding:0}}[data-v-0803ca8a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0803ca8a]::selection{background-color:#249b48;color:#fff}[data-v-0803ca8a]::-webkit-scrollbar{height:8px;width:8px}[data-v-0803ca8a]::-webkit-scrollbar-track{background:transparent}[data-v-0803ca8a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0803ca8a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0803ca8a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0803ca8a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0803ca8a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0803ca8a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-0803ca8a]{animation:slide-in-left-0803ca8a .5s ease-out forwards}.button-primary[data-v-0803ca8a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0803ca8a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0803ca8a]{opacity:.4}.floating-element[data-v-0803ca8a]{animation:float-0803ca8a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0803ca8a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0803ca8a]{animation:spin-0803ca8a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0803ca8a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0803ca8a]{filter:blur(3px)}.landing[data-v-0803ca8a]{overflow-x:hidden}.landing__top[data-v-0803ca8a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0803ca8a]{display:flex}}.landing__topleft[data-v-0803ca8a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0803ca8a]{display:block;width:100%}}.landing__topleft--auth[data-v-0803ca8a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0803ca8a]{padding:0;width:auto}}.landing__topright[data-v-0803ca8a],.landing__topright--img[data-v-0803ca8a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0803ca8a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0803ca8a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0803ca8a]{display:none}}.landing__content[data-v-0803ca8a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0803ca8a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0803ca8a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0803ca8a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0803ca8a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.cartbtn[data-v-0803ca8a]{color:#000;position:relative}.cartbtn__icon[data-v-0803ca8a]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-0803ca8a]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-0803ca8a]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-0803ca8a],.cartbtn__icon--total[data-v-0803ca8a]{color:#fff;font-weight:600}.cartbtn svg[data-v-0803ca8a]{height:80%;width:80%;fill:#fff}.loader[data-v-0803ca8a]{animation:spin-0803ca8a 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}@keyframes spin-0803ca8a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=template&id=8e9e6cda&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chat-header"
  }, [_vm._ssrNode("<div class=\"chat-header__left\" data-v-8e9e6cda>" + (_vm.name ? "<div class=\"chat-header__name\" data-v-8e9e6cda><span class=\"svg\" data-v-8e9e6cda><svg data-v-8e9e6cda><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-8e9e6cda></use></svg></span> <span class=\"label\" data-v-8e9e6cda>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></div>" : "<!---->") + " " + (_vm.logovisible ? "<figure" + _vm._ssrClass("chat-header__left--logo", {
    green: _vm.green
  }) + " data-v-8e9e6cda><img src=\"/imgs/logo.png\" data-v-8e9e6cda></figure>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"chat-header__right\" data-v-8e9e6cda>", "</div>", [_vm._ssrNode("<div class=\"chat-header__right--cart\" data-v-8e9e6cda>", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" <div" + _vm._ssrClass("chat-header__burger", {
    unauth: !_vm.jwtToken,
    green: _vm.green
  }) + " data-v-8e9e6cda><span data-v-8e9e6cda></span><span data-v-8e9e6cda></span><span data-v-8e9e6cda></span></div>")], 2), _vm._ssrNode(" "), _vm.menuopen ? _vm._ssrNode("<div" + _vm._ssrClass("chat-header__menu", {
    auth: _vm.jwtToken
  }) + " data-v-8e9e6cda>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menubody slide-in-left\" data-v-8e9e6cda>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menuitems\" data-v-8e9e6cda>", "</div>", [_vm._ssrNode("<figure class=\"chat-header__left--logo bottom-1rem\" data-v-8e9e6cda>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/logo.png',
      expression: "'/imgs/logo.png'"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chat-header__menuitem\" data-v-8e9e6cda><span class=\"svg\" data-v-8e9e6cda></span> <span class=\"label\" data-v-8e9e6cda>About us</span></div> " + (!_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-8e9e6cda><span class=\"svg\" data-v-8e9e6cda></span> <span class=\"label\" data-v-8e9e6cda>Sign In/Sign Up</span></div>" : "<!---->") + " " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-8e9e6cda><span class=\"svg\" data-v-8e9e6cda></span> <span class=\"label\" data-v-8e9e6cda>Orders</span></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"chat-header__menuitems\" data-v-8e9e6cda><div class=\"chat-header__menuitem\" data-v-8e9e6cda><span class=\"svg\" data-v-8e9e6cda></span></div> " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-8e9e6cda><span class=\"svg\" data-v-8e9e6cda></span> <span class=\"label\" data-v-8e9e6cda>Signout</span></div>" : "<!---->") + "</div>")], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=template&id=8e9e6cda&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(4);

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
      jwtToken: state => state.jwtToken
    })
  },
  async mounted() {
    const token = await this.getValidToken();
    if (token) {
      this.getValidUser(token);
    } else {
      this.redirectHome();
    }

    //this.$store.dispatch('cart/resetCart');

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
          ...this.$route.query
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
var componentNormalizer = __webpack_require__(2);

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
  "8e9e6cda",
  "5f357078"
  
)

/* harmony default export */ var ChatHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartButton: __webpack_require__(47).default})


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_8e9e6cda_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_8e9e6cda_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_8e9e6cda_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_8e9e6cda_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_8e9e6cda_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-8e9e6cda],[data-v-8e9e6cda]:after,[data-v-8e9e6cda]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-8e9e6cda]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-8e9e6cda]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-8e9e6cda]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-8e9e6cda]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-8e9e6cda]{font-size:65%}}body[data-v-8e9e6cda]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-8e9e6cda]{padding:0}}[data-v-8e9e6cda]::-moz-selection{background-color:#249b48;color:#fff}[data-v-8e9e6cda]::selection{background-color:#249b48;color:#fff}[data-v-8e9e6cda]::-webkit-scrollbar{height:8px;width:8px}[data-v-8e9e6cda]::-webkit-scrollbar-track{background:transparent}[data-v-8e9e6cda]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-8e9e6cda]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-8e9e6cda]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-8e9e6cda{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-8e9e6cda{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-8e9e6cda{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-8e9e6cda{to{transform:rotate(1turn)}}.slide-in-left[data-v-8e9e6cda]{animation:slide-in-left-8e9e6cda .5s ease-out forwards}.button-primary[data-v-8e9e6cda]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-8e9e6cda]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-8e9e6cda]{opacity:.4}.floating-element[data-v-8e9e6cda]{animation:float-8e9e6cda 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-8e9e6cda]{height:100vh!important;overflow:hidden!important}.spinner[data-v-8e9e6cda]{animation:spin-8e9e6cda 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-8e9e6cda]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-8e9e6cda]{filter:blur(3px)}.landing[data-v-8e9e6cda]{overflow-x:hidden}.landing__top[data-v-8e9e6cda]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-8e9e6cda]{display:flex}}.landing__topleft[data-v-8e9e6cda]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-8e9e6cda]{display:block;width:100%}}.landing__topleft--auth[data-v-8e9e6cda]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-8e9e6cda]{padding:0;width:auto}}.landing__topright[data-v-8e9e6cda],.landing__topright--img[data-v-8e9e6cda]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-8e9e6cda]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-8e9e6cda]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-8e9e6cda]{display:none}}.landing__content[data-v-8e9e6cda]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-8e9e6cda]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-8e9e6cda]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-8e9e6cda]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-8e9e6cda]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-header[data-v-8e9e6cda]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-8e9e6cda]{padding:2rem}}.chat-header__name[data-v-8e9e6cda],.chat-header__name span.svg[data-v-8e9e6cda]{align-items:center;display:flex}.chat-header__name span.svg[data-v-8e9e6cda]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-8e9e6cda]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-8e9e6cda]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-8e9e6cda]{display:none}}.chat-header__left--logo[data-v-8e9e6cda]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-8e9e6cda]{margin-bottom:5rem}.chat-header__left--logo img[data-v-8e9e6cda]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-8e9e6cda]{height:3.5rem}.chat-header__burger[data-v-8e9e6cda]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-8e9e6cda]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-8e9e6cda]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-8e9e6cda]{background:#fff}.chat-header__burger.green span[data-v-8e9e6cda]{background:#249b48}.chat-header__menu[data-v-8e9e6cda]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-8e9e6cda]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-8e9e6cda],.chat-header__menu.auth[data-v-8e9e6cda]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-8e9e6cda]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-8e9e6cda]{font-size:1.8rem}}.chat-header__menuitem span[data-v-8e9e6cda]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-8e9e6cda]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingAnimation_vue_vue_type_style_index_0_id_3b87158c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-3b87158c],[data-v-3b87158c]:after,[data-v-3b87158c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-3b87158c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-3b87158c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-3b87158c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-3b87158c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-3b87158c]{font-size:65%}}body[data-v-3b87158c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-3b87158c]{padding:0}}[data-v-3b87158c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::selection{background-color:#249b48;color:#fff}[data-v-3b87158c]::-webkit-scrollbar{height:8px;width:8px}[data-v-3b87158c]::-webkit-scrollbar-track{background:transparent}[data-v-3b87158c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-3b87158c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-3b87158c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-3b87158c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-3b87158c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes spin-3b87158c{to{transform:rotate(1turn)}}.slide-in-left[data-v-3b87158c]{animation:slide-in-left-3b87158c .5s ease-out forwards}.button-primary[data-v-3b87158c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-3b87158c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-3b87158c]{opacity:.4}.floating-element[data-v-3b87158c]{animation:float-3b87158c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-3b87158c]{height:100vh!important;overflow:hidden!important}.spinner[data-v-3b87158c]{animation:spin-3b87158c 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-3b87158c]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-3b87158c]{filter:blur(3px)}.landing[data-v-3b87158c]{overflow-x:hidden}.landing__top[data-v-3b87158c]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-3b87158c]{display:flex}}.landing__topleft[data-v-3b87158c]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-3b87158c]{display:block;width:100%}}.landing__topleft--auth[data-v-3b87158c]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-3b87158c]{padding:0;width:auto}}.landing__topright[data-v-3b87158c],.landing__topright--img[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-3b87158c]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-3b87158c]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-3b87158c]{display:none}}.landing__content[data-v-3b87158c]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-3b87158c]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-3b87158c]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-3b87158c]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.loading-animation[data-v-3b87158c]{align-items:center;display:flex;justify-content:center}.loading-animation figure[data-v-3b87158c]{animation:float-3b87158c 1.5s ease-in-out infinite alternate;border-radius:100%;height:3rem;overflow:hidden;width:3rem}.loading-animation figure img[data-v-3b87158c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@keyframes float-3b87158c{0%{transform:translateY(0)}to{transform:translateY(-10px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
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
var api = __webpack_require__(4);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ChatOption.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
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
installComponents(component, {LoadingAnimation: __webpack_require__(50).default})


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOption_vue_vue_type_style_index_0_id_9248ea0c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-9248ea0c],[data-v-9248ea0c]:after,[data-v-9248ea0c]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-9248ea0c]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-9248ea0c]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-9248ea0c]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-9248ea0c]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-9248ea0c]{font-size:65%}}body[data-v-9248ea0c]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-9248ea0c]{padding:0}}[data-v-9248ea0c]::-moz-selection{background-color:#249b48;color:#fff}[data-v-9248ea0c]::selection{background-color:#249b48;color:#fff}[data-v-9248ea0c]::-webkit-scrollbar{height:8px;width:8px}[data-v-9248ea0c]::-webkit-scrollbar-track{background:transparent}[data-v-9248ea0c]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-9248ea0c]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-9248ea0c]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-9248ea0c{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-9248ea0c{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-9248ea0c{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-9248ea0c{to{transform:rotate(1turn)}}.slide-in-left[data-v-9248ea0c]{animation:slide-in-left-9248ea0c .5s ease-out forwards}.button-primary[data-v-9248ea0c]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-9248ea0c]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-9248ea0c]{opacity:.4}.floating-element[data-v-9248ea0c]{animation:float-9248ea0c 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-9248ea0c]{height:100vh!important;overflow:hidden!important}.spinner[data-v-9248ea0c]{animation:spin-9248ea0c 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-9248ea0c]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-9248ea0c]{filter:blur(3px)}.landing[data-v-9248ea0c]{overflow-x:hidden}.landing__top[data-v-9248ea0c]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-9248ea0c]{display:flex}}.landing__topleft[data-v-9248ea0c]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-9248ea0c]{display:block;width:100%}}.landing__topleft--auth[data-v-9248ea0c]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-9248ea0c]{padding:0;width:auto}}.landing__topright[data-v-9248ea0c],.landing__topright--img[data-v-9248ea0c]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-9248ea0c]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-9248ea0c]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-9248ea0c]{display:none}}.landing__content[data-v-9248ea0c]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-9248ea0c]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-9248ea0c]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-9248ea0c]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-9248ea0c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption[data-v-9248ea0c]{background-color:#fff;border:2px solid rgba(36,155,72,.5);border-radius:1rem;display:flex;justify-content:space-between;margin-bottom:2rem;padding:2rem 1.5rem}.chatoption__loader[data-v-9248ea0c]{align-items:center;display:flex;height:12rem;justify-content:center}.chatoption__left[data-v-9248ea0c]{display:flex}.chatoption__details--productname[data-v-9248ea0c]{font-size:1.2rem;font-weight:500}.chatoption__details--name[data-v-9248ea0c]{font-size:1.5rem;font-weight:600;margin-bottom:1rem}.chatoption__details--price[data-v-9248ea0c]{display:flex;font-size:1.6rem;font-weight:600}.chatoption__details--price span[data-v-9248ea0c]{color:#249b48;font-size:600}.chatoption__details--productquantity[data-v-9248ea0c]{align-items:center;display:flex;margin-top:1rem}.chatoption__details--productquantity span[data-v-9248ea0c]{align-items:center;display:flex;font-size:1.2rem;font-weight:500;margin-right:.5rem}.chatoption__details--producttotal[data-v-9248ea0c]{align-items:center;display:flex}.chatoption__details--producttotal span[data-v-9248ea0c]{align-items:center;display:flex;font-size:1.2rem;font-weight:500;margin-right:.5rem}.chatoption__right[data-v-9248ea0c]{align-items:flex-end;display:flex;flex-direction:column;justify-content:space-between}.chatoption__img[data-v-9248ea0c]{border-radius:1rem;height:10rem;margin-right:.5rem;overflow:hidden;width:10rem}.chatoption__img img[data-v-9248ea0c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoption__quantity[data-v-9248ea0c]{display:grid;grid-template-columns:repeat(3,1fr)}span[data-v-9248ea0c]{align-items:center;display:flex;justify-content:center}span.quantity[data-v-9248ea0c]{font-size:1.5rem;font-weight:600}span.svg[data-v-9248ea0c]{border:1px solid rgba(36,155,72,.5);border-radius:.5rem;padding:.5rem}span.svg svg[data-v-9248ea0c]{height:2rem;width:2rem;fill:rgba(0,0,0,.5)}span.svg svg.red[data-v-9248ea0c]{fill:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 62 */
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
  add("38ae1818", content, true, context)
};

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

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
  add("6bb94c18", content, true, context)
};

/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6f0700e4", content, true, context)
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("26eb682f", content, true, context)
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3fa4235a", content, true, context)
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4ffd796d", content, true, context)
};

/***/ }),
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
  add("01f3fc66", content, true, context)
};

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_3235fa5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_3235fa5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_3235fa5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_3235fa5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatOptions_vue_vue_type_style_index_0_id_3235fa5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-3235fa5e],[data-v-3235fa5e]:after,[data-v-3235fa5e]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-3235fa5e]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-3235fa5e]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-3235fa5e]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-3235fa5e]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-3235fa5e]{font-size:65%}}body[data-v-3235fa5e]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-3235fa5e]{padding:0}}[data-v-3235fa5e]::-moz-selection{background-color:#249b48;color:#fff}[data-v-3235fa5e]::selection{background-color:#249b48;color:#fff}[data-v-3235fa5e]::-webkit-scrollbar{height:8px;width:8px}[data-v-3235fa5e]::-webkit-scrollbar-track{background:transparent}[data-v-3235fa5e]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-3235fa5e]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-3235fa5e]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-3235fa5e{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-3235fa5e{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-3235fa5e{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-3235fa5e]{animation:slide-in-left-3235fa5e .5s ease-out forwards}.button-primary[data-v-3235fa5e]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-3235fa5e]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-3235fa5e]{opacity:.4}.floating-element[data-v-3235fa5e]{animation:float-3235fa5e 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-3235fa5e]{height:100vh!important;overflow:hidden!important}.spinner[data-v-3235fa5e]{animation:spin-3235fa5e 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-3235fa5e]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-3235fa5e]{filter:blur(3px)}.landing[data-v-3235fa5e]{overflow-x:hidden}.landing__top[data-v-3235fa5e]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-3235fa5e]{display:flex}}.landing__topleft[data-v-3235fa5e]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-3235fa5e]{display:block;width:100%}}.landing__topleft--auth[data-v-3235fa5e]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-3235fa5e]{padding:0;width:auto}}.landing__topright[data-v-3235fa5e],.landing__topright--img[data-v-3235fa5e]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-3235fa5e]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-3235fa5e]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-3235fa5e]{display:none}}.landing__content[data-v-3235fa5e]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-3235fa5e]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-3235fa5e]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-3235fa5e]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-3235fa5e]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatoptions[data-v-3235fa5e]{height:100vh;overflow:hidden;overflow-y:scroll;padding:4rem 2rem 19rem;width:100vw;z-index:10}.chatoptions[data-v-3235fa5e],.chatoptions__header[data-v-3235fa5e]{background:#fff;left:0;position:fixed;top:0}.chatoptions__header[data-v-3235fa5e]{align-items:center;color:#000;display:flex;font-size:1.8rem;padding:2rem 1rem;text-transform:capitalize;width:100%;z-index:3}.chatoptions__header span[data-v-3235fa5e]{cursor:pointer}.chatoptions__header span.svg[data-v-3235fa5e]{align-items:center;display:flex;margin-right:.5rem}.chatoptions__header span.svg svg[data-v-3235fa5e]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chatoptions__options[data-v-3235fa5e]{margin-top:3rem}.chatoptions__description[data-v-3235fa5e]{border-top:1px solid #eee;margin-top:2rem;padding:1rem 0}.chatoptions__description .description__title[data-v-3235fa5e]{color:#000;font-size:1.6rem;font-weight:700;margin-bottom:1rem}.chatoptions__description .description__text[data-v-3235fa5e]{color:#555;font-size:1.4rem;line-height:1.6}.chatoptions__content[data-v-3235fa5e]{display:flex;justify-content:center}.chatoptions__content--body[data-v-3235fa5e]{width:60rem}@media only screen and (max-width:56.25em){.chatoptions__content--body[data-v-3235fa5e]{width:100%}}.chatoptions__loading[data-v-3235fa5e]{align-items:center;display:flex;justify-content:center;padding:5rem 0}.chatoptions__bottom[data-v-3235fa5e]{background:#fff;bottom:0;display:flex;justify-content:center;left:0;padding:1rem 1rem 2rem;position:fixed;width:100%;z-index:4}.chatoptions__bottom.column[data-v-3235fa5e]{flex-direction:column}@media only screen and (max-width:56.25em){.chatoptions__bottom[data-v-3235fa5e]{display:block}}.chatoptions__bottom button[data-v-3235fa5e]{font-size:2rem;padding:2rem;width:100%}.chatoptions__bottom button.spacebetween[data-v-3235fa5e]{display:flex;justify-content:space-between}.chatoptions__bottom button.transparent-button[data-v-3235fa5e]{margin-bottom:2rem}.chatoptions__bottom .button-primary[data-v-3235fa5e]{align-items:center;display:flex;gap:.5rem;justify-content:center}.loader[data-v-3235fa5e]{animation:spin-3235fa5e 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}.ml-1[data-v-3235fa5e]{margin-left:.5rem}@keyframes spin-3235fa5e{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.button-primary[disabled][data-v-3235fa5e]{cursor:not-allowed;opacity:.7}", ""]);
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOptions.vue?vue&type=template&id=3235fa5e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatoptions"
  }, [_vm._ssrNode("<div class=\"chatoptions__content\" data-v-3235fa5e><div class=\"chatoptions__content--body\" data-v-3235fa5e><h1 class=\"chatoptions__header\" data-v-3235fa5e><span class=\"svg\" data-v-3235fa5e><svg data-v-3235fa5e><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-3235fa5e></use></svg></span> <span data-v-3235fa5e>" + _vm._ssrEscape(_vm._s(_vm.productname)) + "</span></h1></div></div> "), _vm._ssrNode("<div class=\"chatoptions__content\" data-v-3235fa5e>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__content--body\" data-v-3235fa5e>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__options\" data-v-3235fa5e>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"chatoptions__loading\" data-v-3235fa5e>", "</div>", [_c('LoadingAnimation')], 1) : _vm._ssrNode("<div data-v-3235fa5e>", "</div>", _vm._l(_vm.variants, function (variant) {
    return _vm._ssrNode("<div data-v-3235fa5e>", "</div>", [_c('ChatOption', {
      attrs: {
        "data": {
          ...variant,
          productimg: _vm.productimg
        }
      }
    })], 1);
  }), 0), _vm._ssrNode(" <div class=\"chatoptions__description\" data-v-3235fa5e><div class=\"chatoptions__content--body\" data-v-3235fa5e><h2 class=\"description__title\" data-v-3235fa5e>Product Description</h2> <p class=\"description__text\" data-v-3235fa5e>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.productDescription || `This product comes in multiple variants. Select the one that
                            best fits your needs. Each
                            variant is carefully crafted to ensure the best quality and customer satisfaction.`) + "\n                        ") + "</p></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"chatoptions__bottom\" data-v-3235fa5e>", "</div>", [_vm._ssrNode("<div class=\"chatoptions__content--body\" data-v-3235fa5e>", "</div>", [_vm._ssrNode("<button class=\"button-primary transparent-button\" data-v-3235fa5e><span data-v-3235fa5e>Continue Shopping</span></button> "), _vm.cartTotal === 0 ? _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.checkoutLoading) + " class=\"button-primary spacebetween disabled-btn\" data-v-3235fa5e>", "</button>", [_vm._ssrNode("<span data-v-3235fa5e>Proceed to Checkout</span> "), _vm.checkoutLoading ? _vm._ssrNode("<span class=\"loader ml-1\" data-v-3235fa5e>", "</span>") : _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e(), _vm._ssrNode(" "), _vm.cartTotal > 0 ? _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.checkoutLoading) + " class=\"button-primary spacebetween\" data-v-3235fa5e>", "</button>", [_vm._ssrNode("<span data-v-3235fa5e>Proceed to Checkout</span> "), _vm.checkoutLoading ? _vm._ssrNode("<span class=\"loader ml-1\" data-v-3235fa5e>", "</span>") : _c('CartButton', {
    attrs: {
      "showicon": false
    }
  })], 2) : _vm._e()], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatOptions.vue?vue&type=template&id=3235fa5e&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(4);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

// EXTERNAL MODULE: ./components/LoadingAnimation.vue + 4 modules
var LoadingAnimation = __webpack_require__(50);

// EXTERNAL MODULE: ./components/CartButton.vue + 4 modules
var CartButton = __webpack_require__(47);

// EXTERNAL MODULE: ./components/ChatOption.vue + 4 modules
var ChatOption = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatOptions.vue?vue&type=script&lang=js



 // Assuming you have this component
 // Assuming you have this component
 // Assuming you have this component

/* harmony default export */ var ChatOptionsvue_type_script_lang_js = ({
  props: ['toggleViewOptions', 'mongooseid', 'productname', 'productimg', 'productDescription'],
  mixins: [jwt_mixin["a" /* default */]],
  components: {
    LoadingAnimation: LoadingAnimation["default"],
    // Register the component
    CartButton: CartButton["default"],
    ChatOption: ChatOption["default"]
  },
  data() {
    return {
      variants: [],
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
      this.checkoutLoading = true; // Start loading
      try {
        await this.$store.dispatch("cart/syncCartToServer");
        this.$router.push({
          path: '/checkout',
          query: {
            ...this.$route.query
          }
        });
      } catch (error) {
        console.error("Error syncing cart to server:", error);
        // Optionally handle the error, e.g., show a toast message
      } finally {
        this.checkoutLoading = false; // Stop loading regardless of success or failure
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ChatOptions.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ChatOptionsvue_type_script_lang_js = (ChatOptionsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

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
  "3235fa5e",
  "2f320ac3"
  
)

/* harmony default export */ var ChatOptions = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(50).default,ChatOption: __webpack_require__(59).default,CartButton: __webpack_require__(47).default})


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
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0809aa41],[data-v-0809aa41]:after,[data-v-0809aa41]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0809aa41]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0809aa41]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0809aa41]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0809aa41]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0809aa41]{font-size:65%}}body[data-v-0809aa41]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0809aa41]{padding:0}}[data-v-0809aa41]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0809aa41]::selection{background-color:#249b48;color:#fff}[data-v-0809aa41]::-webkit-scrollbar{height:8px;width:8px}[data-v-0809aa41]::-webkit-scrollbar-track{background:transparent}[data-v-0809aa41]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0809aa41]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0809aa41]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0809aa41{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0809aa41{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0809aa41{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-0809aa41{to{transform:rotate(1turn)}}.slide-in-left[data-v-0809aa41]{animation:slide-in-left-0809aa41 .5s ease-out forwards}.button-primary[data-v-0809aa41]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0809aa41]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0809aa41]{opacity:.4}.floating-element[data-v-0809aa41]{animation:float-0809aa41 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0809aa41]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0809aa41]{animation:spin-0809aa41 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0809aa41]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0809aa41]{filter:blur(3px)}.landing[data-v-0809aa41]{overflow-x:hidden}.landing__top[data-v-0809aa41]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0809aa41]{display:flex}}.landing__topleft[data-v-0809aa41]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0809aa41]{display:block;width:100%}}.landing__topleft--auth[data-v-0809aa41]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0809aa41]{padding:0;width:auto}}.landing__topright[data-v-0809aa41],.landing__topright--img[data-v-0809aa41]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0809aa41]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0809aa41]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0809aa41]{display:none}}.landing__content[data-v-0809aa41]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0809aa41]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0809aa41]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0809aa41]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0809aa41]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-categories__header[data-v-0809aa41]{font-size:1.5rem;font-weight:500;padding:2rem 1rem 0}.chat-categories__categories[data-v-0809aa41]{background:#b6edf2;display:flex;justify-content:flex-start;overflow-x:scroll;overflow-y:hidden;padding:1rem;scrollbar-width:none;width:100%;-ms-overflow-style:none}.chat-categories__categories[data-v-0809aa41]::-webkit-scrollbar{display:none;height:6px}.chat-categories__categories[data-v-0809aa41]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.chat-categories__categories[data-v-0809aa41]::-webkit-scrollbar-thumb:hover{background-color:transparent}.chat-categories__categories.home-white[data-v-0809aa41]{background:#fff}.chat-categories__category[data-v-0809aa41]{align-items:center;border-radius:1rem;cursor:pointer;display:flex;flex-shrink:0;margin-right:1rem;min-height:3rem;padding:1rem;width:20rem}.chat-categories__category.currentcat[data-v-0809aa41]{border:1px solid #249b48}.chat-categories__category--header[data-v-0809aa41]{font-size:1rem}.chat-categories__category--png[data-v-0809aa41]{height:5rem;margin-right:.5rem;width:5rem}.chat-categories__category--png img[data-v-0809aa41]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-categories__category--description[data-v-0809aa41]{color:rgba(0,0,0,.5);font-size:1rem}.chat-categories__category.farmfresh[data-v-0809aa41]{background:#a8d1f0}.chat-categories__category.protein[data-v-0809aa41]{background:#f0e7a8}.chat-categories__category.cookingessentials[data-v-0809aa41]{background:#f0baa8}.chat-categories__category.fruits[data-v-0809aa41]{background:pink}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_b2777c5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_b2777c5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_b2777c5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_b2777c5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_b2777c5e_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-b2777c5e],[data-v-b2777c5e]:after,[data-v-b2777c5e]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-b2777c5e]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-b2777c5e]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-b2777c5e]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-b2777c5e]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-b2777c5e]{font-size:65%}}body[data-v-b2777c5e]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-b2777c5e]{padding:0}}[data-v-b2777c5e]::-moz-selection{background-color:#249b48;color:#fff}[data-v-b2777c5e]::selection{background-color:#249b48;color:#fff}[data-v-b2777c5e]::-webkit-scrollbar{height:8px;width:8px}[data-v-b2777c5e]::-webkit-scrollbar-track{background:transparent}[data-v-b2777c5e]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-b2777c5e]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-b2777c5e]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-b2777c5e{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-b2777c5e{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-b2777c5e{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-b2777c5e{to{transform:rotate(1turn)}}.slide-in-left[data-v-b2777c5e]{animation:slide-in-left-b2777c5e .5s ease-out forwards}.button-primary[data-v-b2777c5e]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-b2777c5e]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-b2777c5e]{opacity:.4}.floating-element[data-v-b2777c5e]{animation:float-b2777c5e 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-b2777c5e]{height:100vh!important;overflow:hidden!important}.spinner[data-v-b2777c5e]{animation:spin-b2777c5e 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-b2777c5e]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-b2777c5e]{filter:blur(3px)}.landing[data-v-b2777c5e]{overflow-x:hidden}.landing__top[data-v-b2777c5e]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-b2777c5e]{display:flex}}.landing__topleft[data-v-b2777c5e]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-b2777c5e]{display:block;width:100%}}.landing__topleft--auth[data-v-b2777c5e]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-b2777c5e]{padding:0;width:auto}}.landing__topright[data-v-b2777c5e],.landing__topright--img[data-v-b2777c5e]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-b2777c5e]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-b2777c5e]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-b2777c5e]{display:none}}.landing__content[data-v-b2777c5e]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-b2777c5e]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-b2777c5e]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-b2777c5e]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-b2777c5e]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatinput[data-v-b2777c5e]{background:#333;border:.3rem solid transparent;border-radius:3rem;margin:0 auto;min-height:6rem;overflow:hidden;padding:2rem;position:relative}@media only screen and (max-width:56.25em){.chatinput[data-v-b2777c5e]{border-radius:3rem 3rem 0 0}}.chatinput__field[data-v-b2777c5e]{background:transparent;border:none;color:#fff;font-size:2.1rem;line-height:1.5;max-height:15rem;min-height:2rem;outline:none;overflow-y:auto;resize:none;width:100%}.chatinput__sendbtn[data-v-b2777c5e]{background:#249b48;border-radius:100%;bottom:1rem;display:flex;display:none;height:4.5rem;justify-content:center;overflow:hidden;position:absolute;right:1rem;width:4.5rem}.chatinput__sendbtn.visible[data-v-b2777c5e]{display:flex}.chatinput__sendbtn button[data-v-b2777c5e]{background:transparent;border:none;cursor:pointer;display:flex;height:100%;justify-content:center;outline:none;width:100%}.chatinput__sendbtn button svg[data-v-b2777c5e]{fill:#fff;color:#fff;height:4rem;width:4rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-7dc10924],[data-v-7dc10924]:after,[data-v-7dc10924]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-7dc10924]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-7dc10924]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-7dc10924]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-7dc10924]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-7dc10924]{font-size:65%}}body[data-v-7dc10924]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-7dc10924]{padding:0}}[data-v-7dc10924]::-moz-selection{background-color:#249b48;color:#fff}[data-v-7dc10924]::selection{background-color:#249b48;color:#fff}[data-v-7dc10924]::-webkit-scrollbar{height:8px;width:8px}[data-v-7dc10924]::-webkit-scrollbar-track{background:transparent}[data-v-7dc10924]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-7dc10924]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-7dc10924]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-7dc10924{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-7dc10924{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-7dc10924{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-7dc10924{to{transform:rotate(1turn)}}.slide-in-left[data-v-7dc10924]{animation:slide-in-left-7dc10924 .5s ease-out forwards}.button-primary[data-v-7dc10924]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-7dc10924]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-7dc10924]{opacity:.4}.floating-element[data-v-7dc10924]{animation:float-7dc10924 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-7dc10924]{height:100vh!important;overflow:hidden!important}.spinner[data-v-7dc10924]{animation:spin-7dc10924 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-7dc10924]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-7dc10924]{filter:blur(3px)}.landing[data-v-7dc10924]{overflow-x:hidden}.landing__top[data-v-7dc10924]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-7dc10924]{display:flex}}.landing__topleft[data-v-7dc10924]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-7dc10924]{display:block;width:100%}}.landing__topleft--auth[data-v-7dc10924]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-7dc10924]{padding:0;width:auto}}.landing__topright[data-v-7dc10924],.landing__topright--img[data-v-7dc10924]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-7dc10924]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-7dc10924]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-7dc10924]{display:none}}.landing__content[data-v-7dc10924]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-7dc10924]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-7dc10924]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-7dc10924]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-7dc10924]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.categories[data-v-7dc10924]{background:#249b48;padding:6rem 20rem 0}@media (min-width:2519px){.categories[data-v-7dc10924]{padding-top:6rem}}@media only screen and (max-width:75em){.categories[data-v-7dc10924]{padding:0 10rem}}@media only screen and (max-width:56.25em){.categories[data-v-7dc10924]{padding:1rem}}.categories__header[data-v-7dc10924]{color:#fff;font-size:5rem;font-weight:400;margin-bottom:6rem;text-align:center}@media only screen and (max-width:56.25em){.categories__header[data-v-7dc10924]{font-size:3rem;margin-bottom:6rem;margin-top:6rem}}.categories__grids[data-v-7dc10924]{background:#65d587;border-radius:1rem}@media only screen and (max-width:75em){.categories__grids[data-v-7dc10924]{margin-bottom:6rem}}.categories__grid[data-v-7dc10924]{display:grid;grid-template-columns:repeat(3,1fr);padding:4rem;grid-gap:9rem}@media only screen and (max-width:56.25em){.categories__grid[data-v-7dc10924]{display:grid;grid-template-columns:repeat(2,1fr);padding:2rem;grid-gap:1rem}}.categories__grid[data-v-7dc10924]:first-child{padding-bottom:1.5rem}.categories__griditem figure[data-v-7dc10924]{height:27rem;width:100%}@media only screen and (max-width:56.25em){.categories__griditem figure[data-v-7dc10924]{height:18rem}}.categories__griditem figure img[data-v-7dc10924]{border-radius:1rem;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.categories__griditem h4[data-v-7dc10924]{font-size:1.5rem;font-size:1.4rem;font-weight:300;margin-top:2rem;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-c912de2a],[data-v-c912de2a]:after,[data-v-c912de2a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-c912de2a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-c912de2a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-c912de2a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-c912de2a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-c912de2a]{font-size:65%}}body[data-v-c912de2a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-c912de2a]{padding:0}}[data-v-c912de2a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-c912de2a]::selection{background-color:#249b48;color:#fff}[data-v-c912de2a]::-webkit-scrollbar{height:8px;width:8px}[data-v-c912de2a]::-webkit-scrollbar-track{background:transparent}[data-v-c912de2a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-c912de2a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-c912de2a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-c912de2a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-c912de2a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-c912de2a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-c912de2a{to{transform:rotate(1turn)}}.slide-in-left[data-v-c912de2a]{animation:slide-in-left-c912de2a .5s ease-out forwards}.button-primary[data-v-c912de2a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-c912de2a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-c912de2a]{opacity:.4}.floating-element[data-v-c912de2a]{animation:float-c912de2a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-c912de2a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-c912de2a]{animation:spin-c912de2a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-c912de2a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-c912de2a]{filter:blur(3px)}.landing[data-v-c912de2a]{overflow-x:hidden}.landing__top[data-v-c912de2a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-c912de2a]{display:flex}}.landing__topleft[data-v-c912de2a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-c912de2a]{display:block;width:100%}}.landing__topleft--auth[data-v-c912de2a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-c912de2a]{padding:0;width:auto}}.landing__topright[data-v-c912de2a],.landing__topright--img[data-v-c912de2a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-c912de2a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-c912de2a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-c912de2a]{display:none}}.landing__content[data-v-c912de2a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-c912de2a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-c912de2a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-c912de2a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-c912de2a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.landingcopy[data-v-c912de2a]{background:#249b48;padding:6rem 20rem 0}@media (min-width:2519px){.landingcopy[data-v-c912de2a]{padding-top:6rem}}@media only screen and (max-width:75em){.landingcopy[data-v-c912de2a]{padding:0 10rem}}@media only screen and (max-width:56.25em){.landingcopy[data-v-c912de2a]{padding:1rem}}.landingcopy__header[data-v-c912de2a]{color:#fff;font-size:5rem;font-weight:400;margin-bottom:6rem;text-align:center}@media only screen and (max-width:56.25em){.landingcopy__header[data-v-c912de2a]{font-size:3rem;margin-bottom:6rem;margin-top:6rem}}.landingcopy__mast[data-v-c912de2a]{display:flex;justify-content:center}.landingcopy__mast figure[data-v-c912de2a]{border-radius:1rem;height:48rem;margin-bottom:2rem;overflow:hidden}.landingcopy__mast figure img[data-v-c912de2a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.landingcopy__card[data-v-c912de2a]{background:blue;border-radius:1rem;display:flex;height:38rem;justify-content:space-between;margin-bottom:4rem;padding:5rem;position:relative}.landingcopy__card.sample-dish[data-v-c912de2a]{background:#a8d1f0}.landingcopy__card.paper-basket[data-v-c912de2a]{background:#f0e7a8}.landingcopy__card.paper-box[data-v-c912de2a]{background:#f0baa8}.landingcopy__card--left[data-v-c912de2a]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;z-index:4}.landingcopy__card--left h5[data-v-c912de2a]{font-size:3.5rem;font-weight:400;margin-bottom:2rem}.landingcopy__card--left p[data-v-c912de2a]{font-size:2.1rem;font-weight:300}.landingcopy__card--right[data-v-c912de2a]{position:relative;width:40%}@media only screen and (max-width:56.25em){.landingcopy__card--right[data-v-c912de2a]{height:76%;position:absolute;right:-4rem;top:5rem;width:43%;z-index:2}}.landingcopy__card--right figure[data-v-c912de2a]{height:40rem;position:absolute;right:0;top:0}.landingcopy__card--right figure img[data-v-c912de2a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@media only screen and (max-width:56.25em){.landingcopy__card--right figure img[data-v-c912de2a]{height:69%}}.landingcopy__card--right figure.sample-dish[data-v-c912de2a]{right:-7rem;top:-6rem}@media only screen and (max-width:56.25em){.landingcopy__card--right figure.sample-dish[data-v-c912de2a]{right:0;top:0}}.landingcopy__card--right figure.paper-basket[data-v-c912de2a]{right:-7rem;top:-6rem}@media only screen and (max-width:56.25em){.landingcopy__card--right figure.paper-basket[data-v-c912de2a]{right:0;top:0}}.landingcopy__card--right figure.paper-box[data-v-c912de2a]{right:-7rem;top:-6rem;transform:scale(1.1)}@media only screen and (max-width:56.25em){.landingcopy__card--right figure.paper-box[data-v-c912de2a]{right:0;top:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6fdbb52a],[data-v-6fdbb52a]:after,[data-v-6fdbb52a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-6fdbb52a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-6fdbb52a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-6fdbb52a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-6fdbb52a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-6fdbb52a]{font-size:65%}}body[data-v-6fdbb52a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-6fdbb52a]{padding:0}}[data-v-6fdbb52a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-6fdbb52a]::selection{background-color:#249b48;color:#fff}[data-v-6fdbb52a]::-webkit-scrollbar{height:8px;width:8px}[data-v-6fdbb52a]::-webkit-scrollbar-track{background:transparent}[data-v-6fdbb52a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-6fdbb52a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-6fdbb52a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-6fdbb52a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-6fdbb52a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-6fdbb52a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-6fdbb52a{to{transform:rotate(1turn)}}.slide-in-left[data-v-6fdbb52a]{animation:slide-in-left-6fdbb52a .5s ease-out forwards}.button-primary[data-v-6fdbb52a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-6fdbb52a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-6fdbb52a]{opacity:.4}.floating-element[data-v-6fdbb52a]{animation:float-6fdbb52a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-6fdbb52a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-6fdbb52a]{animation:spin-6fdbb52a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-6fdbb52a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-6fdbb52a]{filter:blur(3px)}.landing[data-v-6fdbb52a]{overflow-x:hidden}.landing__top[data-v-6fdbb52a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-6fdbb52a]{display:flex}}.landing__topleft[data-v-6fdbb52a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-6fdbb52a]{display:block;width:100%}}.landing__topleft--auth[data-v-6fdbb52a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-6fdbb52a]{padding:0;width:auto}}.landing__topright[data-v-6fdbb52a],.landing__topright--img[data-v-6fdbb52a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-6fdbb52a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-6fdbb52a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-6fdbb52a]{display:none}}.landing__content[data-v-6fdbb52a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-6fdbb52a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-6fdbb52a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-6fdbb52a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-6fdbb52a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.landingfaq[data-v-6fdbb52a]{background:#249b48;padding:0 20rem}@media (min-width:2519px){.landingfaq[data-v-6fdbb52a]{padding-top:6rem}}@media only screen and (max-width:75em){.landingfaq[data-v-6fdbb52a]{padding:0 10rem}}@media only screen and (max-width:56.25em){.landingfaq[data-v-6fdbb52a]{padding:1rem;padding:0}}.landingfaq__content[data-v-6fdbb52a]{background:#fff;border-radius:1rem;padding:3rem}.landingfaq__content h4[data-v-6fdbb52a]{font-size:4rem;font-weight:500;margin-top:4rem;text-align:center}.landingfaq__faqs[data-v-6fdbb52a]{margin-top:2rem}.landingfaq__faq[data-v-6fdbb52a]{border:1px solid #000;border-radius:1rem;margin-bottom:3rem;padding:2rem}.landingfaq__faq--header[data-v-6fdbb52a]{font-size:2rem;font-weight:500;margin-bottom:2rem}.landingfaq__faq--description[data-v-6fdbb52a]{font-size:1.5rem;font-weight:300;line-height:3rem}.landingfaq__faq--description.location[data-v-6fdbb52a]{color:#249b48;display:inline-block;font-weight:600;margin-right:.5rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6cc32934],[data-v-6cc32934]:after,[data-v-6cc32934]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-6cc32934]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-6cc32934]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-6cc32934]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-6cc32934]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-6cc32934]{font-size:65%}}body[data-v-6cc32934]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-6cc32934]{padding:0}}[data-v-6cc32934]::-moz-selection{background-color:#249b48;color:#fff}[data-v-6cc32934]::selection{background-color:#249b48;color:#fff}[data-v-6cc32934]::-webkit-scrollbar{height:8px;width:8px}[data-v-6cc32934]::-webkit-scrollbar-track{background:transparent}[data-v-6cc32934]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-6cc32934]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-6cc32934]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-6cc32934{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-6cc32934{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-6cc32934{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-6cc32934{to{transform:rotate(1turn)}}.slide-in-left[data-v-6cc32934]{animation:slide-in-left-6cc32934 .5s ease-out forwards}.button-primary[data-v-6cc32934]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-6cc32934]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-6cc32934]{opacity:.4}.floating-element[data-v-6cc32934]{animation:float-6cc32934 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-6cc32934]{height:100vh!important;overflow:hidden!important}.spinner[data-v-6cc32934]{animation:spin-6cc32934 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-6cc32934]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-6cc32934]{filter:blur(3px)}.landing[data-v-6cc32934]{overflow-x:hidden}.landing__top[data-v-6cc32934]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-6cc32934]{display:flex}}.landing__topleft[data-v-6cc32934]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-6cc32934]{display:block;width:100%}}.landing__topleft--auth[data-v-6cc32934]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-6cc32934]{padding:0;width:auto}}.landing__topright[data-v-6cc32934],.landing__topright--img[data-v-6cc32934]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-6cc32934]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-6cc32934]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-6cc32934]{display:none}}.landing__content[data-v-6cc32934]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-6cc32934]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-6cc32934]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-6cc32934]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-6cc32934]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.landingfooter[data-v-6cc32934]{align-items:center;background:#f4f4f4;display:flex;flex-direction:column;justify-content:center;margin-top:6rem;padding:2rem 0 10rem}.landingfooter__email[data-v-6cc32934]{color:#000;font-size:2rem;font-weight:300}.landingfooter__social[data-v-6cc32934]{align-items:center;display:flex;justify-content:center}.landingfooter__social figure[data-v-6cc32934]{cursor:pointer;display:inline-block;height:4rem;margin:1rem;transition:transform .2s ease;width:4rem}.landingfooter__social figure[data-v-6cc32934]:hover{transform:scale(1.1)}.landingfooter__social figure.xlogo[data-v-6cc32934]{padding:.6rem}.landingfooter__social figure img[data-v-6cc32934]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_1723e096_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_1723e096_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_1723e096_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_1723e096_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_1723e096_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-1723e096],[data-v-1723e096]:after,[data-v-1723e096]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-1723e096]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-1723e096]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-1723e096]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-1723e096]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-1723e096]{font-size:65%}}body[data-v-1723e096]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-1723e096]{padding:0}}[data-v-1723e096]::-moz-selection{background-color:#249b48;color:#fff}[data-v-1723e096]::selection{background-color:#249b48;color:#fff}[data-v-1723e096]::-webkit-scrollbar{height:8px;width:8px}[data-v-1723e096]::-webkit-scrollbar-track{background:transparent}[data-v-1723e096]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-1723e096]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-1723e096]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-1723e096{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-1723e096{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-1723e096{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-1723e096]{animation:slide-in-left-1723e096 .5s ease-out forwards}.button-primary[data-v-1723e096]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-1723e096]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-1723e096]{opacity:.4}.floating-element[data-v-1723e096]{animation:float-1723e096 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-1723e096]{height:100vh!important;overflow:hidden!important}.spinner[data-v-1723e096]{border:4px solid rgba(36,155,72,.3);border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-1723e096]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-1723e096]{filter:blur(3px)}.landing[data-v-1723e096]{overflow-x:hidden}.landing__top[data-v-1723e096]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-1723e096]{display:flex}}.landing__topleft[data-v-1723e096]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-1723e096]{display:block;width:100%}}.landing__topleft--auth[data-v-1723e096]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-1723e096]{padding:0;width:auto}}.landing__topright[data-v-1723e096],.landing__topright--img[data-v-1723e096]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-1723e096]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-1723e096]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-1723e096]{display:none}}.landing__content[data-v-1723e096]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-1723e096]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-1723e096]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-1723e096]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-1723e096]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatcard[data-v-1723e096]{background:rgba(168,209,240,.6);border-radius:1rem;overflow:hidden;position:relative}.chatcard__contents[data-v-1723e096]{padding:1rem}.chatcard__name[data-v-1723e096]{font-size:1.5rem;font-weight:600;margin:1rem 0}.chatcard__viewmore--flex[data-v-1723e096]{align-items:center;display:flex}.chatcard__viewmore--flex span[data-v-1723e096]{flex-shrink:0}.chatcard__viewmore--flex span[data-v-1723e096]:first-child{margin-right:.4rem}.chatcard__viewmore button[data-v-1723e096]{align-items:center;background:#249b48;border:none;border-radius:3rem;color:#fff;cursor:pointer;display:flex;font-size:1.4rem;font-weight:500;justify-content:center;outline:none;padding:1rem}.chatcard__viewmore button[data-v-1723e096]:disabled{cursor:not-allowed;opacity:.7}.chatcard__img[data-v-1723e096]{height:14rem}.chatcard__img img[data-v-1723e096]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatcard__tags[data-v-1723e096]{display:flex;flex-wrap:wrap;margin-top:1rem}.chatcard__tags span[data-v-1723e096]{background:rgba(36,155,72,.4);border:1px solid rgba(36,155,72,.4);border-radius:3rem;display:inline-block;font-weight:500;margin-right:.5rem;padding:.5rem 1.4rem}.spinner[data-v-1723e096]{animation:spin-1723e096 1s linear infinite;border:.4rem solid hsla(0,0%,100%,.3);border-radius:50%;border-top-color:#fff;height:1rem;width:1rem}@keyframes spin-1723e096{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
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
var componentNormalizer = __webpack_require__(2);

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatInput.vue?vue&type=template&id=b2777c5e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"chatinput\" data-v-b2777c5e>" + (!_vm.currentUser.otpMode ? "<div data-v-b2777c5e>" + (_vm.currentUser.name && _vm.currentUser.phoneNumber && _vm.currentUser.detailsAdded ? "<textarea" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + " class=\"chatinput__field\" data-v-b2777c5e>" + _vm._ssrEscape(_vm._s(_vm.userinput)) + "</textarea>" : "<!---->") + " " + (_vm.isEmailMode ? "<input type=\"email\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + _vm._ssrAttr("value", _vm.userinput) + " class=\"chatinput__field\" data-v-b2777c5e>" : "<!---->") + " " + (_vm.isPhoneMode && !_vm.isEmailMode ? "<input type=\"tel\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + _vm._ssrAttr("value", _vm.userinput) + " class=\"chatinput__field\" data-v-b2777c5e>" : "<!---->") + " " + (_vm.isNameMode ? "<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + _vm._ssrAttr("value", _vm.userinput) + " class=\"chatinput__field\" data-v-b2777c5e>" : "<!---->") + "</div>" : "<!---->") + " <div" + _vm._ssrClass("chatinput__sendbtn slide-fade-in-up", {
    'visible': _vm.userinput.length
  }) + " data-v-b2777c5e><button data-v-b2777c5e><svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-2xl\" data-v-b2777c5e><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z\" fill=\"currentColor\" data-v-b2777c5e></path></svg></button></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatInput.vue?vue&type=template&id=b2777c5e&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(4);

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
      userinput: ""
    };
  },
  watch: {
    currentUser(newVal) {
      console.log(newVal);
    },
    userinput(newValue) {
      const wordArray = newValue.trim().split(/\s+/); // split by spaces
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
    if (this.$route.name === 'authp') {
      const {
        email,
        phoneNumber,
        name
      } = this.$route.query;
      if (phoneNumber) {
        this.$store.dispatch('user/setUserPhoneNumber', phoneNumber);
      }
      if (name) {
        this.$store.dispatch('user/setUserName', name);
      }
      if (email) {
        this.$store.dispatch('user/setUserEmail', email);
      }
    }
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
    async sendMessage() {
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
          this.$store.dispatch('user/setUserPhoneNumber', userinput);
          this.userinput = "";
          this.$router.push({
            query: {
              ...this.$route.query,
              email: this.currentUser.email,
              phoneNumber: this.currentUser.phoneNumber
            }
          });
        } else if (this.isNameMode) {
          this.$store.dispatch('user/setUserName', userinput);
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
  "b2777c5e",
  "90f1b5a2"
  
)

/* harmony default export */ var ChatInput = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 96 */
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
  
  var style0 = __webpack_require__(88)
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
/* 97 */
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
  
  var style0 = __webpack_require__(90)
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
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatCard.vue?vue&type=template&id=1723e096&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatcard"
  }, [_vm._ssrNode("<figure class=\"chatcard__img\" data-v-1723e096>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.imageUrl,
      expression: "imageUrl"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chatcard__contents\" data-v-1723e096><div class=\"chatcard__name\" data-v-1723e096><p data-v-1723e096>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</p></div> <div class=\"chatcard__viewmore\" data-v-1723e096><button" + _vm._ssrAttr("disabled", _vm.loading) + " data-v-1723e096><div class=\"chatcard__viewmore--flex\" data-v-1723e096><span data-v-1723e096>" + _vm._ssrEscape("View " + _vm._s(_vm.options) + " options") + "</span> " + (_vm.loading ? "<span class=\"spinner\" data-v-1723e096></span>" : "<!---->") + "</div></button></div> <div class=\"chatcard__tags\" data-v-1723e096>" + _vm._ssrList(_vm.tags, function (tag, index) {
    return "<span data-v-1723e096>" + _vm._ssrEscape(_vm._s(_vm.formatTag(tag))) + "</span>";
  }) + "</div></div> "), _vm.view_options ? _vm._ssrNode("<div data-v-1723e096>", "</div>", [_c('ChatOptions', {
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

// CONCATENATED MODULE: ./components/ChatCard.vue?vue&type=template&id=1723e096&scoped=true

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
      this.loading = true; // Set loading to true when the async operation starts
      try {
        await this.$store.dispatch("cart/syncCartToServer");
      } catch (error) {
        console.error("Error syncing cart to server:", error);
        // Optionally handle the error, e.g., show a toast notification
      } finally {
        this.loading = false; // Set loading to false when the async operation completes (success or failure)
      }
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
  "1723e096",
  "2b5f683b"
  
)

/* harmony default export */ var ChatCard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatOptions: __webpack_require__(77).default})


/***/ }),
/* 99 */
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
  
  var style0 = __webpack_require__(84)
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
/* 100 */
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
  
  var style0 = __webpack_require__(86)
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
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("71f93c49", content, true, context)
};

/***/ }),
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
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-735f4fd9],[data-v-735f4fd9]:after,[data-v-735f4fd9]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-735f4fd9]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-735f4fd9]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-735f4fd9]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-735f4fd9]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-735f4fd9]{font-size:65%}}body[data-v-735f4fd9]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-735f4fd9]{padding:0}}[data-v-735f4fd9]::-moz-selection{background-color:#249b48;color:#fff}[data-v-735f4fd9]::selection{background-color:#249b48;color:#fff}[data-v-735f4fd9]::-webkit-scrollbar{height:8px;width:8px}[data-v-735f4fd9]::-webkit-scrollbar-track{background:transparent}[data-v-735f4fd9]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-735f4fd9]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-735f4fd9]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-735f4fd9{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-735f4fd9{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-735f4fd9{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-735f4fd9{to{transform:rotate(1turn)}}.slide-in-left[data-v-735f4fd9]{animation:slide-in-left-735f4fd9 .5s ease-out forwards}.button-primary[data-v-735f4fd9]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-735f4fd9]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-735f4fd9]{opacity:.4}.floating-element[data-v-735f4fd9]{animation:float-735f4fd9 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-735f4fd9]{height:100vh!important;overflow:hidden!important}.spinner[data-v-735f4fd9]{animation:spin-735f4fd9 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-735f4fd9]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-735f4fd9]{filter:blur(3px)}.landing[data-v-735f4fd9]{overflow-x:hidden}.landing__top[data-v-735f4fd9]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-735f4fd9]{display:flex}}.landing__topleft[data-v-735f4fd9]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-735f4fd9]{display:block;width:100%}}.landing__topleft--auth[data-v-735f4fd9]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-735f4fd9]{padding:0;width:auto}}.landing__topright[data-v-735f4fd9],.landing__topright--img[data-v-735f4fd9]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-735f4fd9]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-735f4fd9]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-735f4fd9]{display:none}}.landing__content[data-v-735f4fd9]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-735f4fd9]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-735f4fd9]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-735f4fd9]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-735f4fd9]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatbody__content[data-v-735f4fd9]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.chatbody__content[data-v-735f4fd9]{display:block}}.chatbody__products[data-v-735f4fd9]{grid-template-columns:repeat(3,1fr);grid-gap:2rem;gap:2rem;grid-auto-rows:29rem;scrollbar-width:none;-ms-overflow-style:none;display:grid;width:82rem}.chatbody__products[data-v-735f4fd9]::-webkit-scrollbar{display:none;height:6px}.chatbody__products[data-v-735f4fd9]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.chatbody__products[data-v-735f4fd9]::-webkit-scrollbar-thumb:hover{background-color:transparent}@media only screen and (max-width:56.25em){.chatbody__products[data-v-735f4fd9]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:2rem;gap:2rem;grid-auto-rows:29rem;width:auto}}.chatbody__products.user-details[data-v-735f4fd9]{grid-auto-rows:10rem}.chatbody__userdetails[data-v-735f4fd9]{font-size:1.7rem;grid-column:1/-1;padding-top:4rem}.chatbody__userdetails--ai[data-v-735f4fd9]{animation:slideFadeInUp-735f4fd9 .3s ease-out forwards;color:#249b48;font-weight:500}.chatbody__userdetails--prompt[data-v-735f4fd9]{color:#000;display:flex;justify-content:space-between}.chatbody__userdetails--prompt span.content[data-v-735f4fd9]{animation:slideFadeInUp-735f4fd9 .3s ease-out forwards;background:#249b48;border-radius:3rem;color:#fff;font-weight:400;padding:1rem}.chatbody__loading[data-v-735f4fd9]{align-items:center;display:flex;grid-column:1/-1;justify-content:center;padding:5rem 0}", ""]);
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
var external_vuex_ = __webpack_require__(3);

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
  "735f4fd9",
  "dd4ce466"
  
)

/* harmony default export */ var ChatBody = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingAnimation: __webpack_require__(50).default,ChatCard: __webpack_require__(98).default})


/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_4cc76785_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_4cc76785_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_4cc76785_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_4cc76785_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_4cc76785_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-4cc76785],[data-v-4cc76785]:after,[data-v-4cc76785]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-4cc76785]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-4cc76785]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-4cc76785]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-4cc76785]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-4cc76785]{font-size:65%}}body[data-v-4cc76785]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-4cc76785]{padding:0}}[data-v-4cc76785]::-moz-selection{background-color:#249b48;color:#fff}[data-v-4cc76785]::selection{background-color:#249b48;color:#fff}[data-v-4cc76785]::-webkit-scrollbar{height:8px;width:8px}[data-v-4cc76785]::-webkit-scrollbar-track{background:transparent}[data-v-4cc76785]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-4cc76785]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-4cc76785]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-4cc76785{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-4cc76785{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-4cc76785{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-4cc76785{to{transform:rotate(1turn)}}.slide-in-left[data-v-4cc76785]{animation:slide-in-left-4cc76785 .5s ease-out forwards}.button-primary[data-v-4cc76785]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-4cc76785]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-4cc76785]{opacity:.4}.floating-element[data-v-4cc76785]{animation:float-4cc76785 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-4cc76785]{height:100vh!important;overflow:hidden!important}.spinner[data-v-4cc76785]{animation:spin-4cc76785 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-4cc76785]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-4cc76785]{filter:blur(3px)}.landing[data-v-4cc76785]{overflow-x:hidden}.landing__top[data-v-4cc76785]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-4cc76785]{display:flex}}.landing__topleft[data-v-4cc76785]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-4cc76785]{display:block;width:100%}}.landing__topleft--auth[data-v-4cc76785]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-4cc76785]{padding:0;width:auto}}.landing__topright[data-v-4cc76785],.landing__topright--img[data-v-4cc76785]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-4cc76785]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-4cc76785]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-4cc76785]{display:none}}.landing__content[data-v-4cc76785]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-4cc76785]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-4cc76785]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-4cc76785]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-4cc76785]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.landing[data-v-4cc76785]{overflow:hidden;position:relative}.landing__header[data-v-4cc76785]{left:0;position:fixed;top:0;width:100vw;z-index:6}.landing__header.auth[data-v-4cc76785],.landing__header.unauth[data-v-4cc76785]{background:transparent}@media only screen and (max-width:56.25em){.landing__header.auth[data-v-4cc76785]{background:#fff}}.landing__h1[data-v-4cc76785]{align-items:center;animation:fadeIn-4cc76785 1s ease-out forwards;display:flex;font-size:3rem;justify-content:center}.landing__h1--section[data-v-4cc76785]{position:relative}.landing__h1--section span[data-v-4cc76785]{display:inline-block;margin-right:1rem}.landing__h1--section span.line[data-v-4cc76785]{animation:growLine-4cc76785 1s ease-out 1s forwards;bottom:-1rem;left:0;margin:0;position:absolute;width:0}.landing__h1--section span.line img[data-v-4cc76785]{height:100%;width:100%}@keyframes growLine-4cc76785{0%{width:0}to{width:11rem}}.landing__h2[data-v-4cc76785]{align-items:center;animation:fadeIn-4cc76785 1s ease-out forwards;display:flex;flex-direction:column;font-size:1.6rem;font-weight:300}@keyframes fadeIn-4cc76785{0%{opacity:0}to{opacity:1}}.landing__vharea[data-v-4cc76785]{height:100vh;height:86rem;left:0;padding-top:11rem;position:fixed;top:0;width:100vw;z-index:3}.landing__animation[data-v-4cc76785]{align-items:center;display:flex;justify-content:center;position:relative;z-index:4}.landing__animation.mobile[data-v-4cc76785]{display:none}@media only screen and (max-width:56.25em){.landing__animation.mobile[data-v-4cc76785]{display:flex}}.landing__animation--content[data-v-4cc76785]{position:relative;transform:scale(1.2);width:100%}.landing__animation figure[data-v-4cc76785]{height:auto;left:0;position:absolute;top:-3rem}.landing__animation figure.hand-receiver[data-v-4cc76785]{animation:slideInFromLeft-4cc76785 1s ease-out forwards;animation-delay:.3s;transform:translateX(-100%);z-index:2}.landing__animation figure.hand-giver[data-v-4cc76785]{animation:slideInFromRight-4cc76785 1s ease-out forwards;transform:translateX(100%);z-index:1}.landing__animation figure img[data-v-4cc76785]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@keyframes slideInFromLeft-4cc76785{0%{transform:translateX(-100%) scale(.9)}to{transform:translateX(0) scale(.9)}}@keyframes slideInFromRight-4cc76785{0%{transform:translateX(100%) scale(.9)}to{transform:translateX(0) scale(.9)}}.landing__greeting[data-v-4cc76785]{background:#b6edf2;height:100vh;height:86rem;left:0;position:fixed;top:0;width:100vw}.landing__greencloud[data-v-4cc76785]{animation:slideInFromBottom-4cc76785 1s ease-out forwards;bottom:-20rem;height:20rem;left:0;position:fixed;position:absolute;width:100vw;z-index:4}.landing__greencloud figure.mobile[data-v-4cc76785]{display:none}@media only screen and (max-width:56.25em){.landing__greencloud figure.mobile[data-v-4cc76785]{display:block}}.landing__greencloud img[data-v-4cc76785]{height:100%;-o-object-fit:cover;object-fit:cover;transform:translateY(6rem);width:100%}@keyframes slideInFromBottom-4cc76785{0%{bottom:-5rem}to{bottom:0}}.landing__inputboxarea[data-v-4cc76785]{animation:fadeInFromTop-4cc76785 1s ease-out forwards;display:flex;justify-content:center;margin-top:2rem}@keyframes fadeInFromTop-4cc76785{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}.landing__inputbox[data-v-4cc76785]{background:#fff;border:1px solid #249b48;border-radius:2rem;height:16.2rem;overflow:hidden;padding:1.5rem 0;position:relative;width:40rem}.landing__inputbox--input[data-v-4cc76785]{background:#fff;border:none;border-radius:1rem;font-size:1.6rem;height:59%;line-height:1.8em;max-height:10.8em;min-height:5.4em;outline:none;overflow-y:auto;padding:1rem 2rem;position:absolute;resize:none;top:1rem;width:100%}.landing__inputbox--buttonarea[data-v-4cc76785]{bottom:0;padding:1rem;position:relative;position:absolute;width:100%}.landing__inputbox--button[data-v-4cc76785]{background:#249b48;border:none;border-radius:3rem;color:#fff;font-size:1.9rem;font-weight:600;outline:none;padding:1.5rem 2rem;text-align:center;width:100%}.landing__learnmore[data-v-4cc76785]{display:flex;justify-content:center;position:absolute;top:0;top:13rem;width:100%;z-index:4}.landing__learnmore--btn[data-v-4cc76785]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;outline:none;padding:1rem 4rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
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
___CSS_LOADER_EXPORT___.push([module.i, "*,:after,:before{box-sizing:inherit;margin:0;padding:0}html{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html{font-size:56.25%}}@media only screen and (max-width:56.25em){html{font-size:55%}}@media only screen and (max-width:37.5em){html{font-size:50%}}@media only screen and (min-width:112.5em){html{font-size:65%}}body{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body{padding:0}}::-moz-selection{background-color:#249b48;color:#fff}::selection{background-color:#249b48;color:#fff}::-webkit-scrollbar{height:8px;width:8px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin{to{transform:rotate(1turn)}}.slide-in-left{animation:slide-in-left .5s ease-out forwards}.button-primary{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn{opacity:.4}.floating-element{animation:float 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll{height:100vh!important;overflow:hidden!important}.spinner{animation:spin 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path{stroke:#249b48;stroke-linecap:round}.blur-effect{filter:blur(3px)}.landing{overflow-x:hidden}.landing__top{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top{display:flex}}.landing__topleft{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft{display:block;width:100%}}.landing__topleft--auth{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth{padding:0;width:auto}}.landing__topright,.landing__topright--img{align-items:center;display:flex;justify-content:center}.landing__topright--img{transform:scale(1.1);width:100rem}.landing__topright--img img{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright{display:none}}.landing__content{background:#249b48;margin-top:90rem;position:relative}.landing__seemore{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.home{height:100vh;overflow:hidden;position:relative}.home__header{left:0;position:fixed;top:0;width:100vw;z-index:6}.home__header.auth,.home__header.unauth{background:transparent}@media only screen and (max-width:56.25em){.home__header.auth{background:#fff}}.home__chatbody{background:#fff;height:calc(100vh - 160px);overflow-y:scroll;padding:9rem 3rem 120px}@media only screen and (max-width:56.25em){.home__chatbody{padding:2rem 1rem 120px}}.home__naturallanguage{background:#fff;display:flex;justify-content:center;padding:9rem 2rem 2rem}@media only screen and (max-width:56.25em){.home__naturallanguage{display:block}}.home__naturallanguage--p{background:#249b48;border-radius:1.3rem;color:#000;color:#fff;font-size:1.6rem;font-style:italic;font-weight:300;padding:1.5rem;width:82rem}@media only screen and (max-width:56.25em){.home__naturallanguage--p{width:auto}}.home__naturallanguage--p:after{animation:blink 1s step-start infinite;content:\"|\";margin-left:4px;opacity:.6}.home__bottom{background:#fff;bottom:0;box-shadow:0 -2px 10px rgba(0,0,0,.1);display:flex;justify-content:center;left:0;padding:3rem 3rem .4rem;position:fixed;width:100vw;z-index:5}.home__bottom--cart{display:none}@media only screen and (max-width:56.25em){.home__bottom--cart{display:block}.home__bottom{display:block;padding:0}}.home__content{overflow:hidden;position:relative}@keyframes blink{50%{opacity:0}}", ""]);
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
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingPage.vue?vue&type=template&id=4cc76785&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"landing\" data-v-4cc76785>", "</div>", [_vm._ssrNode("<div class=\"landing__greeting\" data-v-4cc76785>", "</div>", [_vm._ssrNode("<div class=\"landing__header unauth\" data-v-4cc76785>", "</div>", [_c('ChatHeader', {
    attrs: {
      "logovisible": true,
      "green": true
    }
  })], 1), _vm._ssrNode(" <div class=\"landing__vharea\" data-v-4cc76785><h1 class=\"landing__h1\" data-v-4cc76785><div class=\"landing__h1--section\" data-v-4cc76785><span data-v-4cc76785>Hi,</span></div> <div class=\"landing__h1--section\" data-v-4cc76785><span data-v-4cc76785>I'm </span></div> <div class=\"landing__h1--section\" data-v-4cc76785><span data-v-4cc76785>Payoor</span> <span class=\"line grow-bar\" data-v-4cc76785><img src=\"/imgs/9b0498221204fb302eeee0e4809573e18a95723b.png\" data-v-4cc76785></span></div></h1> <h2 class=\"landing__h2\" data-v-4cc76785><span data-v-4cc76785>Make A Grocery List &amp; Leave</span> <span data-v-4cc76785>The Rest to me</span></h2> <div class=\"landing__inputboxarea\" data-v-4cc76785><div class=\"landing__inputbox\" data-v-4cc76785><textarea placeholder=\"Create a list\" class=\"landing__inputbox--input\" data-v-4cc76785>" + _vm._ssrEscape(_vm._s(_vm.userInput)) + "</textarea> <div class=\"landing__inputbox--buttonarea\" data-v-4cc76785><button" + _vm._ssrAttr("disabled", _vm.userInput.length === 0) + _vm._ssrClass("landing__inputbox--button", {
    'disabled-btn': _vm.userInput.length === 0
  }) + " data-v-4cc76785>\n                                Get started\n                            </button></div></div></div> <div class=\"landing__animation mobile\" data-v-4cc76785><div class=\"landing__animation--content\" data-v-4cc76785><figure class=\"hand-receiver\" data-v-4cc76785><img src=\"/svg/handreceiver.svg\" data-v-4cc76785></figure> <figure class=\"hand-giver\" data-v-4cc76785><img src=\"/svg/handgiver.svg\" data-v-4cc76785></figure></div></div> <div class=\"landing__greencloud\" data-v-4cc76785><div class=\"landing__learnmore\" data-v-4cc76785><button class=\"landing__learnmore--btn\" data-v-4cc76785>Learn more</button></div> <figure class=\"mobile\" data-v-4cc76785><img src=\"/svg/greencloud.svg\" data-v-4cc76785></figure></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"landing-content\" class=\"landing__content\" data-v-4cc76785>", "</div>", [_c('LandingCategories'), _vm._ssrNode(" "), _c('LandingCopy'), _vm._ssrNode(" "), _c('LandingFaq'), _vm._ssrNode(" "), _c('LandingFooter')], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LandingPage.vue?vue&type=template&id=4cc76785&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingPage.vue?vue&type=script&lang=js

/* harmony default export */ var LandingPagevue_type_script_lang_js = ({
  data() {
    return {
      userInput: ""
    };
  },
  methods: {
    async getStarted() {
      if (this.userInput.length > 0) {
        this.$router.push({
          path: '/authp',
          query: {
            ...this.$route.query,
            message: this.userInput
          }
        });
      }
    },
    scrollToTop() {
      const landingContent = document.getElementById('landing-content');
      landingContent.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
    handleEnter(e) {
      const width = window.innerWidth;
      if (width > 900) {
        e.preventDefault();
        this.sendMessage();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/LandingPage.vue?vue&type=script&lang=js
 /* harmony default export */ var components_LandingPagevue_type_script_lang_js = (LandingPagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LandingPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(114)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LandingPagevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4cc76785",
  "65470fe3"
  
)

/* harmony default export */ var LandingPage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatHeader: __webpack_require__(53).default,LandingCategories: __webpack_require__(99).default,LandingCopy: __webpack_require__(100).default,LandingFaq: __webpack_require__(96).default,LandingFooter: __webpack_require__(97).default})


/***/ }),
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
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(4);

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
var componentNormalizer = __webpack_require__(2);

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
installComponents(component, {ChatHeader: __webpack_require__(53).default,ChatBody: __webpack_require__(110).default,CartButton: __webpack_require__(47).default,ChatCategories: __webpack_require__(94).default,ChatInput: __webpack_require__(95).default})


/***/ }),
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
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2316a080
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [!_vm.currentUser.email ? _vm._ssrNode("<div>", "</div>", [_c('LandingPage')], 1) : _vm._e(), _vm._ssrNode(" "), _vm.currentUser.email && _vm.currentUser.name ? _vm._ssrNode("<div>", "</div>", [_c('Home')], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2316a080

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  mounted() {},
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
    }
  },
  watch: {
    currentUser(newVal) {
      if (newVal.email && !newVal.name || newVal.name && !newVal.email) {
        this.$router.push('/authp');
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e308befe"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LandingPage: __webpack_require__(135).default,Home: __webpack_require__(136).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map