exports.ids = [20,4,8,16,17,18,19];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6eaa762e", content, true, context)
};

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_33a6e265_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_33a6e265_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_33a6e265_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_33a6e265_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_33a6e265_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-33a6e265],[data-v-33a6e265]:after,[data-v-33a6e265]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-33a6e265]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-33a6e265]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-33a6e265]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-33a6e265]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-33a6e265]{font-size:65%}}body[data-v-33a6e265]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-33a6e265]{padding:0}}[data-v-33a6e265]::-moz-selection{background-color:#249b48;color:#fff}[data-v-33a6e265]::selection{background-color:#249b48;color:#fff}[data-v-33a6e265]::-webkit-scrollbar{height:8px;width:8px}[data-v-33a6e265]::-webkit-scrollbar-track{background:transparent}[data-v-33a6e265]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-33a6e265]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-33a6e265]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-33a6e265{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-33a6e265{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-33a6e265{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-33a6e265{to{transform:rotate(1turn)}}.slide-in-left[data-v-33a6e265]{animation:slide-in-left-33a6e265 .5s ease-out forwards}.button-primary[data-v-33a6e265]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-33a6e265]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-33a6e265]{opacity:.4}.floating-element[data-v-33a6e265]{animation:float-33a6e265 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-33a6e265]{height:100vh!important;overflow:hidden!important}.spinner[data-v-33a6e265]{animation:spin-33a6e265 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-33a6e265]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-33a6e265]{filter:blur(3px)}.error-message[data-v-33a6e265]{animation:slideFadeInUp-33a6e265 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-33a6e265]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-33a6e265]{overflow-x:hidden}.landing__top[data-v-33a6e265]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-33a6e265]{display:flex}}.landing__topleft[data-v-33a6e265]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-33a6e265]{display:block;width:100%}}.landing__topleft--auth[data-v-33a6e265]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-33a6e265]{padding:0;width:auto}}.landing__topright[data-v-33a6e265],.landing__topright--img[data-v-33a6e265]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-33a6e265]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-33a6e265]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-33a6e265]{display:none}}.landing__content[data-v-33a6e265]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-33a6e265]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-33a6e265]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-33a6e265]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-33a6e265]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.landing[data-v-33a6e265]{overflow:hidden;position:relative}.landing__header[data-v-33a6e265]{left:0;position:fixed;top:0;width:100vw;z-index:6}.landing__header.auth[data-v-33a6e265],.landing__header.unauth[data-v-33a6e265]{background:transparent}@media only screen and (max-width:56.25em){.landing__header.auth[data-v-33a6e265]{background:#fff}}.landing__h1[data-v-33a6e265]{align-items:center;animation:fadeIn-33a6e265 1s ease-out forwards;display:flex;font-size:3rem;justify-content:center}.landing__h1--section[data-v-33a6e265]{position:relative}.landing__h1--section span[data-v-33a6e265]{display:inline-block;margin-right:1rem}.landing__h1--section span.line[data-v-33a6e265]{animation:growLine-33a6e265 1s ease-out 1s forwards;bottom:-1rem;left:0;margin:0;position:absolute;width:0}.landing__h1--section span.line img[data-v-33a6e265]{height:100%;width:100%}@keyframes growLine-33a6e265{0%{width:0}to{width:11rem}}.landing__h2[data-v-33a6e265]{align-items:center;animation:fadeIn-33a6e265 1s ease-out forwards;display:flex;flex-direction:column;font-size:1.6rem;font-weight:300}@keyframes fadeIn-33a6e265{0%{opacity:0}to{opacity:1}}.landing__vharea[data-v-33a6e265]{height:100vh;height:86rem;left:0;padding-top:11rem;position:fixed;top:0;width:100vw;z-index:3}.landing__animation[data-v-33a6e265]{align-items:center;display:flex;justify-content:center;position:relative;z-index:4}.landing__animation.mobile[data-v-33a6e265]{display:none}@media only screen and (max-width:56.25em){.landing__animation.mobile[data-v-33a6e265]{display:flex}}.landing__animation--content[data-v-33a6e265]{position:relative;transform:scale(1.2);width:100%}.landing__animation figure[data-v-33a6e265]{height:auto;left:0;position:absolute;top:-3rem}.landing__animation figure.hand-receiver[data-v-33a6e265]{animation:slideInFromLeft-33a6e265 1s ease-out forwards;animation-delay:.3s;transform:translateX(-100%);z-index:2}.landing__animation figure.hand-giver[data-v-33a6e265]{animation:slideInFromRight-33a6e265 1s ease-out forwards;transform:translateX(100%);z-index:1}.landing__animation figure img[data-v-33a6e265]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@keyframes slideInFromLeft-33a6e265{0%{transform:translateX(-100%) scale(.9)}to{transform:translateX(0) scale(.9)}}@keyframes slideInFromRight-33a6e265{0%{transform:translateX(100%) scale(.9)}to{transform:translateX(0) scale(.9)}}.landing__greeting[data-v-33a6e265]{background:#b6edf2;height:100vh;height:86rem;left:0;position:fixed;top:0;width:100vw}.landing__greencloud[data-v-33a6e265]{animation:slideInFromBottom-33a6e265 1s ease-out forwards;bottom:-20rem;height:20rem;left:0;position:fixed;position:absolute;width:100vw;z-index:4}.landing__greencloud figure.mobile[data-v-33a6e265]{display:none}@media only screen and (max-width:56.25em){.landing__greencloud figure.mobile[data-v-33a6e265]{display:block}}.landing__greencloud img[data-v-33a6e265]{height:100%;-o-object-fit:cover;object-fit:cover;transform:translateY(6rem);width:100%}@keyframes slideInFromBottom-33a6e265{0%{bottom:-5rem}to{bottom:0}}.landing__inputboxarea[data-v-33a6e265]{animation:fadeInFromTop-33a6e265 1s ease-out forwards;display:flex;justify-content:center;margin-top:2rem}@keyframes fadeInFromTop-33a6e265{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}.landing__inputbox[data-v-33a6e265]{background:#fff;border:1px solid #249b48;border-radius:2rem;height:16.2rem;overflow:hidden;padding:1.5rem 0;position:relative;width:40rem}.landing__inputbox--input[data-v-33a6e265]{background:#fff;border:none;border-radius:1rem;font-size:1.6rem;height:59%;line-height:1.8em;max-height:10.8em;min-height:5.4em;outline:none;overflow-y:auto;padding:1rem 2rem;position:absolute;resize:none;top:1rem;width:100%}.landing__inputbox--buttonarea[data-v-33a6e265]{bottom:0;padding:1rem;position:relative;position:absolute;width:100%}.landing__inputbox--button[data-v-33a6e265]{background:#249b48;border:none;border-radius:3rem;color:#fff;font-size:1.9rem;font-weight:600;outline:none;padding:1.5rem 2rem;text-align:center;width:100%}.landing__learnmore[data-v-33a6e265]{display:flex;justify-content:center;position:absolute;top:0;top:13rem;width:100%;z-index:4}.landing__learnmore--btn[data-v-33a6e265]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;outline:none;padding:1rem 4rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LandingPage.vue?vue&type=template&id=33a6e265&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"landing\" data-v-33a6e265>", "</div>", [_vm._ssrNode("<div class=\"landing__greeting\" data-v-33a6e265>", "</div>", [_vm._ssrNode("<div class=\"landing__header unauth\" data-v-33a6e265>", "</div>", [_c('ChatHeader', {
    attrs: {
      "logovisible": true,
      "green": true
    }
  })], 1), _vm._ssrNode(" <div class=\"landing__vharea\" data-v-33a6e265><h1 class=\"landing__h1\" data-v-33a6e265><div class=\"landing__h1--section\" data-v-33a6e265><span data-v-33a6e265>Hi,</span></div> <div class=\"landing__h1--section\" data-v-33a6e265><span data-v-33a6e265>I'm </span></div> <div class=\"landing__h1--section\" data-v-33a6e265><span data-v-33a6e265>Payoor</span> <span class=\"line grow-bar\" data-v-33a6e265><img src=\"/imgs/9b0498221204fb302eeee0e4809573e18a95723b.png\" data-v-33a6e265></span></div></h1> <h2 class=\"landing__h2\" data-v-33a6e265><span data-v-33a6e265>Make A Grocery List &amp; Leave</span> <span data-v-33a6e265>The Rest to me</span></h2> <div class=\"landing__inputboxarea\" data-v-33a6e265><div class=\"landing__inputbox\" data-v-33a6e265><textarea placeholder=\"Create a list\" class=\"landing__inputbox--input\" data-v-33a6e265>" + _vm._ssrEscape(_vm._s(_vm.userInput)) + "</textarea> <div class=\"landing__inputbox--buttonarea\" data-v-33a6e265><button" + _vm._ssrAttr("disabled", _vm.userInput.length === 0) + _vm._ssrClass("landing__inputbox--button", {
    'disabled-btn': _vm.userInput.length === 0
  }) + " data-v-33a6e265>\n                                Get started\n                            </button></div></div></div> <div class=\"landing__animation mobile\" data-v-33a6e265><div class=\"landing__animation--content\" data-v-33a6e265><figure class=\"hand-receiver\" data-v-33a6e265><img src=\"/svg/handreceiver.svg\" data-v-33a6e265></figure> <figure class=\"hand-giver\" data-v-33a6e265><img src=\"/svg/handgiver.svg\" data-v-33a6e265></figure></div></div> <div class=\"landing__greencloud\" data-v-33a6e265><div class=\"landing__learnmore\" data-v-33a6e265><button class=\"landing__learnmore--btn\" data-v-33a6e265>Learn more</button></div> <figure class=\"mobile\" data-v-33a6e265><img src=\"/svg/greencloud.svg\" data-v-33a6e265></figure></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"landing-content\" class=\"landing__content\" data-v-33a6e265>", "</div>", [_c('LandingCategories'), _vm._ssrNode(" "), _c('LandingCopy'), _vm._ssrNode(" "), _c('LandingFaq'), _vm._ssrNode(" "), _c('LandingFooter')], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LandingPage.vue?vue&type=template&id=33a6e265&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

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
        //this.sendMessage();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/LandingPage.vue?vue&type=script&lang=js
 /* harmony default export */ var components_LandingPagevue_type_script_lang_js = (LandingPagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LandingPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(110)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LandingPagevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "33a6e265",
  "65470fe3"
  
)

/* harmony default export */ var LandingPage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ChatHeader: __webpack_require__(52).default,LandingCategories: __webpack_require__(95).default,LandingCopy: __webpack_require__(96).default,LandingFaq: __webpack_require__(92).default,LandingFooter: __webpack_require__(93).default})


/***/ }),

/***/ 45:
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

        //  console.log(this.validToken, 'this.validToken')

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

/***/ 46:
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
  add("67444d1d", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("c64b4228", content, true, context)
};

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartButton.vue?vue&type=template&id=0e337d1b&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cartbtn"
  }, [_vm._ssrNode((!_vm.showicon ? "<div class=\"cartbtn__icon--amount\" data-v-0e337d1b><p data-v-0e337d1b>" + _vm._ssrEscape("₦" + _vm._s(_vm.cartTotal)) + "</p></div>" : "<!---->") + " " + (_vm.showicon ? "<div" + _vm._ssrClass(null, {
    'disabled-btn': !_vm.cartLength || _vm.cartLength === 0
  }) + " data-v-0e337d1b><div class=\"cartbtn__icon\" data-v-0e337d1b>" + (_vm.isLoading ? "<div class=\"loader\" data-v-0e337d1b></div>" : (_vm.cartLength !== 0 ? "<div class=\"cartbtn__icon--total\" data-v-0e337d1b><span data-v-0e337d1b>" + _vm._ssrEscape(_vm._s(_vm.cartLength === 0 ? '' : _vm.cartLength)) + "</span></div>" : "<!---->") + " <svg data-v-0e337d1b><use xlink:href=\"/svg/symbol-defs.svg#icon-shopping-bag\" data-v-0e337d1b></use></svg>") + "</div></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CartButton.vue?vue&type=template&id=0e337d1b&scoped=true

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
        //await this.$store.dispatch("cart/syncCartToServer");

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
  "0e337d1b",
  "0826af36"
  
)

/* harmony default export */ var CartButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartButton_vue_vue_type_style_index_0_id_0e337d1b_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0e337d1b],[data-v-0e337d1b]:after,[data-v-0e337d1b]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-0e337d1b]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-0e337d1b]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-0e337d1b]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-0e337d1b]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-0e337d1b]{font-size:65%}}body[data-v-0e337d1b]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-0e337d1b]{padding:0}}[data-v-0e337d1b]::-moz-selection{background-color:#249b48;color:#fff}[data-v-0e337d1b]::selection{background-color:#249b48;color:#fff}[data-v-0e337d1b]::-webkit-scrollbar{height:8px;width:8px}[data-v-0e337d1b]::-webkit-scrollbar-track{background:transparent}[data-v-0e337d1b]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-0e337d1b]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-0e337d1b]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-0e337d1b{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-0e337d1b{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-0e337d1b{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-0e337d1b]{animation:slide-in-left-0e337d1b .5s ease-out forwards}.button-primary[data-v-0e337d1b]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-0e337d1b]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-0e337d1b]{opacity:.4}.floating-element[data-v-0e337d1b]{animation:float-0e337d1b 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-0e337d1b]{height:100vh!important;overflow:hidden!important}.spinner[data-v-0e337d1b]{animation:spin-0e337d1b 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-0e337d1b]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-0e337d1b]{filter:blur(3px)}.error-message[data-v-0e337d1b]{animation:slideFadeInUp-0e337d1b .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-0e337d1b]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-0e337d1b]{overflow-x:hidden}.landing__top[data-v-0e337d1b]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-0e337d1b]{display:flex}}.landing__topleft[data-v-0e337d1b]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-0e337d1b]{display:block;width:100%}}.landing__topleft--auth[data-v-0e337d1b]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-0e337d1b]{padding:0;width:auto}}.landing__topright[data-v-0e337d1b],.landing__topright--img[data-v-0e337d1b]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-0e337d1b]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-0e337d1b]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-0e337d1b]{display:none}}.landing__content[data-v-0e337d1b]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-0e337d1b]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-0e337d1b]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-0e337d1b]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-0e337d1b]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.cartbtn[data-v-0e337d1b]{color:#000;position:relative}.cartbtn__icon[data-v-0e337d1b]{align-items:center;background:#249b48;border-radius:100%;display:flex;height:4.5rem;justify-content:center;padding:1rem;position:fixed;right:15rem;top:3rem;width:4.5rem}@media only screen and (max-width:56.25em){.cartbtn__icon[data-v-0e337d1b]{bottom:23rem;position:fixed;right:2rem;top:auto}}.cartbtn__icon--total[data-v-0e337d1b]{align-items:center;background:red;border-radius:100%;display:flex;font-size:1.3rem;height:2rem;justify-content:center;left:-.4rem;position:absolute;top:-.4rem;width:2rem}.cartbtn__icon--amount[data-v-0e337d1b],.cartbtn__icon--total[data-v-0e337d1b]{color:#fff;font-weight:600}.cartbtn svg[data-v-0e337d1b]{height:80%;width:80%;fill:#fff}.loader[data-v-0e337d1b]{animation:spin-0e337d1b 1s linear infinite;border:.4rem solid #f3f3f3;border-radius:50%;border-top-color:#fff;height:2.5rem;width:2.5rem}@keyframes spin-0e337d1b{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=template&id=7f082eaa&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chat-header"
  }, [_vm._ssrNode("<div class=\"chat-header__left\" data-v-7f082eaa>" + (_vm.name ? "<div class=\"chat-header__name\" data-v-7f082eaa><span class=\"svg\" data-v-7f082eaa><svg data-v-7f082eaa><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-7f082eaa></use></svg></span> <span class=\"label\" data-v-7f082eaa>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></div>" : "<!---->") + " " + (_vm.logovisible ? "<figure" + _vm._ssrClass("chat-header__left--logo", {
    green: _vm.green
  }) + " data-v-7f082eaa><img src=\"/imgs/logo.png\" data-v-7f082eaa></figure>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"chat-header__right\" data-v-7f082eaa>", "</div>", [_vm._ssrNode("<div class=\"chat-header__right--cart\" data-v-7f082eaa>", "</div>", [_c('CartButton', {
    attrs: {
      "showicon": true
    }
  })], 1), _vm._ssrNode(" <div" + _vm._ssrClass("chat-header__burger", {
    unauth: !_vm.jwtToken,
    green: _vm.green
  }) + " data-v-7f082eaa><span data-v-7f082eaa></span><span data-v-7f082eaa></span><span data-v-7f082eaa></span></div>")], 2), _vm._ssrNode(" "), _vm.menuopen ? _vm._ssrNode("<div" + _vm._ssrClass("chat-header__menu", {
    auth: _vm.jwtToken
  }) + " data-v-7f082eaa>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menubody slide-in-left\" data-v-7f082eaa>", "</div>", [_vm._ssrNode("<div class=\"chat-header__menuitems\" data-v-7f082eaa>", "</div>", [_vm._ssrNode("<figure class=\"chat-header__left--logo bottom-1rem\" data-v-7f082eaa>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: '/imgs/logo.png',
      expression: "'/imgs/logo.png'"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chat-header__menuitem\" data-v-7f082eaa><span class=\"svg\" data-v-7f082eaa></span> " + (!_vm.jwtToken ? "<span class=\"label\" data-v-7f082eaa>About us</span>" : "<!---->") + "</div> " + (!_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-7f082eaa><span class=\"svg\" data-v-7f082eaa></span> <span class=\"label\" data-v-7f082eaa>Sign In/Sign Up</span></div>" : "<!---->") + " " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-7f082eaa><span class=\"svg\" data-v-7f082eaa></span> <span class=\"label\" data-v-7f082eaa>Orders</span></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"chat-header__menuitems\" data-v-7f082eaa><div class=\"chat-header__menuitem\" data-v-7f082eaa><span class=\"svg\" data-v-7f082eaa></span></div> " + (_vm.jwtToken ? "<div class=\"chat-header__menuitem\" data-v-7f082eaa><span class=\"svg\" data-v-7f082eaa></span> <span class=\"label\" data-v-7f082eaa>Signout</span></div>" : "<!---->") + "</div>")], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatHeader.vue?vue&type=template&id=7f082eaa&scoped=true

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
var jwt_mixin = __webpack_require__(45);

// CONCATENATED MODULE: ./mixins/navigation_mixin.js
/* harmony default export */ var navigation_mixin = ({
  data() {
    return {
      routeStack: ['/']
    };
  },
  methods: {
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
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatHeader.vue?vue&type=script&lang=js




















/* harmony default export */ var ChatHeadervue_type_script_lang_js = ({
  mixins: [jwt_mixin["a" /* default */], navigation_mixin],
  props: ['logovisible', 'name', 'backRoute', 'green'],
  emits: ['update:authValue'],
  data() {
    return {
      menuopen: false
      //routeStack: ['/']
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

    //this.$store.dispatch('cart/resetCart');

    await this.$store.dispatch('cart/loadCartFromIndexedDB');

    //this.$store.dispatch('cart/clearAllCartItems');

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

        // console.log(user)

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
    /* goBack() {
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
     },*/
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
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatHeadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7f082eaa",
  "5f357078"
  
)

/* harmony default export */ var ChatHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartButton: __webpack_require__(49).default})


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_7f082eaa_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-7f082eaa],[data-v-7f082eaa]:after,[data-v-7f082eaa]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-7f082eaa]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-7f082eaa]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-7f082eaa]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-7f082eaa]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-7f082eaa]{font-size:65%}}body[data-v-7f082eaa]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-7f082eaa]{padding:0}}[data-v-7f082eaa]::-moz-selection{background-color:#249b48;color:#fff}[data-v-7f082eaa]::selection{background-color:#249b48;color:#fff}[data-v-7f082eaa]::-webkit-scrollbar{height:8px;width:8px}[data-v-7f082eaa]::-webkit-scrollbar-track{background:transparent}[data-v-7f082eaa]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-7f082eaa]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-7f082eaa]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-7f082eaa{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-7f082eaa{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-7f082eaa{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-7f082eaa{to{transform:rotate(1turn)}}.slide-in-left[data-v-7f082eaa]{animation:slide-in-left-7f082eaa .5s ease-out forwards}.button-primary[data-v-7f082eaa]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-7f082eaa]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-7f082eaa]{opacity:.4}.floating-element[data-v-7f082eaa]{animation:float-7f082eaa 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-7f082eaa]{height:100vh!important;overflow:hidden!important}.spinner[data-v-7f082eaa]{animation:spin-7f082eaa 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-7f082eaa]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-7f082eaa]{filter:blur(3px)}.error-message[data-v-7f082eaa]{animation:slideFadeInUp-7f082eaa .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-7f082eaa]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-7f082eaa]{overflow-x:hidden}.landing__top[data-v-7f082eaa]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-7f082eaa]{display:flex}}.landing__topleft[data-v-7f082eaa]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-7f082eaa]{display:block;width:100%}}.landing__topleft--auth[data-v-7f082eaa]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-7f082eaa]{padding:0;width:auto}}.landing__topright[data-v-7f082eaa],.landing__topright--img[data-v-7f082eaa]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-7f082eaa]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-7f082eaa]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-7f082eaa]{display:none}}.landing__content[data-v-7f082eaa]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-7f082eaa]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-7f082eaa]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-7f082eaa]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-7f082eaa]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-header[data-v-7f082eaa]{align-items:center;display:flex;justify-content:space-between;padding:3rem}@media only screen and (max-width:37.5em){.chat-header[data-v-7f082eaa]{padding:2rem}}.chat-header__name[data-v-7f082eaa],.chat-header__name span.svg[data-v-7f082eaa]{align-items:center;display:flex}.chat-header__name span.svg[data-v-7f082eaa]{margin-right:.5rem}.chat-header__name span.svg svg[data-v-7f082eaa]{height:2rem;width:2rem;fill:#249b48;color:#249b48}.chat-header__name span.label[data-v-7f082eaa]{align-items:center;color:#249b48;display:flex;font-size:2rem;font-weight:600}@media only screen and (max-width:56.25em){.chat-header__right--cart[data-v-7f082eaa]{display:none}}.chat-header__left--logo[data-v-7f082eaa]{height:3rem}.chat-header__left--logo.bottom-1rem[data-v-7f082eaa]{margin-bottom:5rem}.chat-header__left--logo img[data-v-7f082eaa]{height:100%;-o-object-fit:cover;object-fit:cover;width:auto}.chat-header__left--logo.green[data-v-7f082eaa]{height:3.5rem}.chat-header__burger[data-v-7f082eaa]{display:flex;flex-direction:column;height:2.5rem;justify-content:space-between}.chat-header__burger span[data-v-7f082eaa]{background:#249b48;border-radius:1rem;display:inline-block;flex-shrink:0;height:.35rem;margin:.2rem 0;width:3rem}.chat-header__burger span[data-v-7f082eaa]:nth-child(2){height:.35rem;width:2rem}.chat-header__burger.unauth span[data-v-7f082eaa]{background:#fff}.chat-header__burger.green span[data-v-7f082eaa]{background:#249b48}.chat-header__menu[data-v-7f082eaa]{background:rgba(0,0,0,.6);height:100vh;left:0;overflow:hidden;overflow-y:scroll;position:fixed;top:0;width:100vw}.chat-header__menu.auth[data-v-7f082eaa]{background:transparent;box-shadow:20px 0 30px -10px rgba(36,155,72,.1);width:auto}@media only screen and (max-width:56.25em){.chat-header__menu[data-v-7f082eaa],.chat-header__menu.auth[data-v-7f082eaa]{background:rgba(0,0,0,.6);box-shadow:none;overflow:hidden;overflow-y:scroll;width:100vw}}.chat-header__menuitem[data-v-7f082eaa]{cursor:pointer;font-size:1.4rem;font-weight:500;margin-bottom:3rem;-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:56.25em){.chat-header__menuitem[data-v-7f082eaa]{font-size:1.8rem}}.chat-header__menuitem span[data-v-7f082eaa]{-webkit-text-decoration:none;text-decoration:none}.chat-header__menubody[data-v-7f082eaa]{background:#fff;color:#000;display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:2rem 2rem 14rem;width:35rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 63:
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
  add("6f0700e4", content, true, context)
};

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("26eb682f", content, true, context)
};

/***/ }),

/***/ 65:
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
  add("3fa4235a", content, true, context)
};

/***/ }),

/***/ 66:
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
  add("4ffd796d", content, true, context)
};

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCategories_vue_vue_type_style_index_0_id_7dc10924_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-7dc10924],[data-v-7dc10924]:after,[data-v-7dc10924]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-7dc10924]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-7dc10924]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-7dc10924]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-7dc10924]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-7dc10924]{font-size:65%}}body[data-v-7dc10924]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-7dc10924]{padding:0}}[data-v-7dc10924]::-moz-selection{background-color:#249b48;color:#fff}[data-v-7dc10924]::selection{background-color:#249b48;color:#fff}[data-v-7dc10924]::-webkit-scrollbar{height:8px;width:8px}[data-v-7dc10924]::-webkit-scrollbar-track{background:transparent}[data-v-7dc10924]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-7dc10924]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-7dc10924]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-7dc10924{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-7dc10924{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-7dc10924{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-7dc10924{to{transform:rotate(1turn)}}.slide-in-left[data-v-7dc10924]{animation:slide-in-left-7dc10924 .5s ease-out forwards}.button-primary[data-v-7dc10924]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-7dc10924]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-7dc10924]{opacity:.4}.floating-element[data-v-7dc10924]{animation:float-7dc10924 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-7dc10924]{height:100vh!important;overflow:hidden!important}.spinner[data-v-7dc10924]{animation:spin-7dc10924 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-7dc10924]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-7dc10924]{filter:blur(3px)}.error-message[data-v-7dc10924]{animation:slideFadeInUp-7dc10924 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-7dc10924]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-7dc10924]{overflow-x:hidden}.landing__top[data-v-7dc10924]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-7dc10924]{display:flex}}.landing__topleft[data-v-7dc10924]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-7dc10924]{display:block;width:100%}}.landing__topleft--auth[data-v-7dc10924]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-7dc10924]{padding:0;width:auto}}.landing__topright[data-v-7dc10924],.landing__topright--img[data-v-7dc10924]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-7dc10924]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-7dc10924]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-7dc10924]{display:none}}.landing__content[data-v-7dc10924]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-7dc10924]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-7dc10924]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-7dc10924]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-7dc10924]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.categories[data-v-7dc10924]{background:#249b48;padding:6rem 20rem 0}@media (min-width:2519px){.categories[data-v-7dc10924]{padding-top:6rem}}@media only screen and (max-width:75em){.categories[data-v-7dc10924]{padding:0 10rem}}@media only screen and (max-width:56.25em){.categories[data-v-7dc10924]{padding:1rem}}.categories__header[data-v-7dc10924]{color:#fff;font-size:5rem;font-weight:400;margin-bottom:6rem;text-align:center}@media only screen and (max-width:56.25em){.categories__header[data-v-7dc10924]{font-size:3rem;margin-bottom:6rem;margin-top:6rem}}.categories__grids[data-v-7dc10924]{background:#65d587;border-radius:1rem}@media only screen and (max-width:75em){.categories__grids[data-v-7dc10924]{margin-bottom:6rem}}.categories__grid[data-v-7dc10924]{display:grid;grid-template-columns:repeat(3,1fr);padding:4rem;grid-gap:9rem}@media only screen and (max-width:56.25em){.categories__grid[data-v-7dc10924]{display:grid;grid-template-columns:repeat(2,1fr);padding:2rem;grid-gap:1rem}}.categories__grid[data-v-7dc10924]:first-child{padding-bottom:1.5rem}.categories__griditem figure[data-v-7dc10924]{height:27rem;width:100%}@media only screen and (max-width:56.25em){.categories__griditem figure[data-v-7dc10924]{height:18rem}}.categories__griditem figure img[data-v-7dc10924]{border-radius:1rem;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.categories__griditem h4[data-v-7dc10924]{font-size:1.5rem;font-size:1.4rem;font-weight:300;margin-top:2rem;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingCopy_vue_vue_type_style_index_0_id_c912de2a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-c912de2a],[data-v-c912de2a]:after,[data-v-c912de2a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-c912de2a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-c912de2a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-c912de2a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-c912de2a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-c912de2a]{font-size:65%}}body[data-v-c912de2a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-c912de2a]{padding:0}}[data-v-c912de2a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-c912de2a]::selection{background-color:#249b48;color:#fff}[data-v-c912de2a]::-webkit-scrollbar{height:8px;width:8px}[data-v-c912de2a]::-webkit-scrollbar-track{background:transparent}[data-v-c912de2a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-c912de2a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-c912de2a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-c912de2a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-c912de2a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-c912de2a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-c912de2a{to{transform:rotate(1turn)}}.slide-in-left[data-v-c912de2a]{animation:slide-in-left-c912de2a .5s ease-out forwards}.button-primary[data-v-c912de2a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-c912de2a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-c912de2a]{opacity:.4}.floating-element[data-v-c912de2a]{animation:float-c912de2a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-c912de2a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-c912de2a]{animation:spin-c912de2a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-c912de2a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-c912de2a]{filter:blur(3px)}.error-message[data-v-c912de2a]{animation:slideFadeInUp-c912de2a .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-c912de2a]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-c912de2a]{overflow-x:hidden}.landing__top[data-v-c912de2a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-c912de2a]{display:flex}}.landing__topleft[data-v-c912de2a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-c912de2a]{display:block;width:100%}}.landing__topleft--auth[data-v-c912de2a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-c912de2a]{padding:0;width:auto}}.landing__topright[data-v-c912de2a],.landing__topright--img[data-v-c912de2a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-c912de2a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-c912de2a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-c912de2a]{display:none}}.landing__content[data-v-c912de2a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-c912de2a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-c912de2a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-c912de2a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-c912de2a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.landingcopy[data-v-c912de2a]{background:#249b48;padding:6rem 20rem 0}@media (min-width:2519px){.landingcopy[data-v-c912de2a]{padding-top:6rem}}@media only screen and (max-width:75em){.landingcopy[data-v-c912de2a]{padding:0 10rem}}@media only screen and (max-width:56.25em){.landingcopy[data-v-c912de2a]{padding:1rem}}.landingcopy__header[data-v-c912de2a]{color:#fff;font-size:5rem;font-weight:400;margin-bottom:6rem;text-align:center}@media only screen and (max-width:56.25em){.landingcopy__header[data-v-c912de2a]{font-size:3rem;margin-bottom:6rem;margin-top:6rem}}.landingcopy__mast[data-v-c912de2a]{display:flex;justify-content:center}.landingcopy__mast figure[data-v-c912de2a]{border-radius:1rem;height:48rem;margin-bottom:2rem;overflow:hidden}.landingcopy__mast figure img[data-v-c912de2a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.landingcopy__card[data-v-c912de2a]{background:blue;border-radius:1rem;display:flex;height:38rem;justify-content:space-between;margin-bottom:4rem;padding:5rem;position:relative}.landingcopy__card.sample-dish[data-v-c912de2a]{background:#a8d1f0}.landingcopy__card.paper-basket[data-v-c912de2a]{background:#f0e7a8}.landingcopy__card.paper-box[data-v-c912de2a]{background:#f0baa8}.landingcopy__card--left[data-v-c912de2a]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;z-index:4}.landingcopy__card--left h5[data-v-c912de2a]{font-size:3.5rem;font-weight:400;margin-bottom:2rem}.landingcopy__card--left p[data-v-c912de2a]{font-size:2.1rem;font-weight:300}.landingcopy__card--right[data-v-c912de2a]{position:relative;width:40%}@media only screen and (max-width:56.25em){.landingcopy__card--right[data-v-c912de2a]{height:76%;position:absolute;right:-4rem;top:5rem;width:43%;z-index:2}}.landingcopy__card--right figure[data-v-c912de2a]{height:40rem;position:absolute;right:0;top:0}.landingcopy__card--right figure img[data-v-c912de2a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@media only screen and (max-width:56.25em){.landingcopy__card--right figure img[data-v-c912de2a]{height:69%}}.landingcopy__card--right figure.sample-dish[data-v-c912de2a]{right:-7rem;top:-6rem}@media only screen and (max-width:56.25em){.landingcopy__card--right figure.sample-dish[data-v-c912de2a]{right:0;top:0}}.landingcopy__card--right figure.paper-basket[data-v-c912de2a]{right:-7rem;top:-6rem}@media only screen and (max-width:56.25em){.landingcopy__card--right figure.paper-basket[data-v-c912de2a]{right:0;top:0}}.landingcopy__card--right figure.paper-box[data-v-c912de2a]{right:-7rem;top:-6rem;transform:scale(1.1)}@media only screen and (max-width:56.25em){.landingcopy__card--right figure.paper-box[data-v-c912de2a]{right:0;top:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFaq_vue_vue_type_style_index_0_id_6fdbb52a_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6fdbb52a],[data-v-6fdbb52a]:after,[data-v-6fdbb52a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-6fdbb52a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-6fdbb52a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-6fdbb52a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-6fdbb52a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-6fdbb52a]{font-size:65%}}body[data-v-6fdbb52a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-6fdbb52a]{padding:0}}[data-v-6fdbb52a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-6fdbb52a]::selection{background-color:#249b48;color:#fff}[data-v-6fdbb52a]::-webkit-scrollbar{height:8px;width:8px}[data-v-6fdbb52a]::-webkit-scrollbar-track{background:transparent}[data-v-6fdbb52a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-6fdbb52a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-6fdbb52a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-6fdbb52a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-6fdbb52a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-6fdbb52a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-6fdbb52a{to{transform:rotate(1turn)}}.slide-in-left[data-v-6fdbb52a]{animation:slide-in-left-6fdbb52a .5s ease-out forwards}.button-primary[data-v-6fdbb52a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-6fdbb52a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-6fdbb52a]{opacity:.4}.floating-element[data-v-6fdbb52a]{animation:float-6fdbb52a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-6fdbb52a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-6fdbb52a]{animation:spin-6fdbb52a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-6fdbb52a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-6fdbb52a]{filter:blur(3px)}.error-message[data-v-6fdbb52a]{animation:slideFadeInUp-6fdbb52a .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-6fdbb52a]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-6fdbb52a]{overflow-x:hidden}.landing__top[data-v-6fdbb52a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-6fdbb52a]{display:flex}}.landing__topleft[data-v-6fdbb52a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-6fdbb52a]{display:block;width:100%}}.landing__topleft--auth[data-v-6fdbb52a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-6fdbb52a]{padding:0;width:auto}}.landing__topright[data-v-6fdbb52a],.landing__topright--img[data-v-6fdbb52a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-6fdbb52a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-6fdbb52a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-6fdbb52a]{display:none}}.landing__content[data-v-6fdbb52a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-6fdbb52a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-6fdbb52a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-6fdbb52a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-6fdbb52a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.landingfaq[data-v-6fdbb52a]{background:#249b48;padding:0 20rem}@media (min-width:2519px){.landingfaq[data-v-6fdbb52a]{padding-top:6rem}}@media only screen and (max-width:75em){.landingfaq[data-v-6fdbb52a]{padding:0 10rem}}@media only screen and (max-width:56.25em){.landingfaq[data-v-6fdbb52a]{padding:1rem;padding:0}}.landingfaq__content[data-v-6fdbb52a]{background:#fff;border-radius:1rem;padding:3rem}.landingfaq__content h4[data-v-6fdbb52a]{font-size:4rem;font-weight:500;margin-top:4rem;text-align:center}.landingfaq__faqs[data-v-6fdbb52a]{margin-top:2rem}.landingfaq__faq[data-v-6fdbb52a]{border:1px solid #000;border-radius:1rem;margin-bottom:3rem;padding:2rem}.landingfaq__faq--header[data-v-6fdbb52a]{font-size:2rem;font-weight:500;margin-bottom:2rem}.landingfaq__faq--description[data-v-6fdbb52a]{font-size:1.5rem;font-weight:300;line-height:3rem}.landingfaq__faq--description.location[data-v-6fdbb52a]{color:#249b48;display:inline-block;font-weight:600;margin-right:.5rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingFooter_vue_vue_type_style_index_0_id_6cc32934_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6cc32934],[data-v-6cc32934]:after,[data-v-6cc32934]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-6cc32934]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-6cc32934]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-6cc32934]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-6cc32934]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-6cc32934]{font-size:65%}}body[data-v-6cc32934]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-6cc32934]{padding:0}}[data-v-6cc32934]::-moz-selection{background-color:#249b48;color:#fff}[data-v-6cc32934]::selection{background-color:#249b48;color:#fff}[data-v-6cc32934]::-webkit-scrollbar{height:8px;width:8px}[data-v-6cc32934]::-webkit-scrollbar-track{background:transparent}[data-v-6cc32934]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-6cc32934]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-6cc32934]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-6cc32934{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-6cc32934{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-6cc32934{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-6cc32934{to{transform:rotate(1turn)}}.slide-in-left[data-v-6cc32934]{animation:slide-in-left-6cc32934 .5s ease-out forwards}.button-primary[data-v-6cc32934]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-6cc32934]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-6cc32934]{opacity:.4}.floating-element[data-v-6cc32934]{animation:float-6cc32934 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-6cc32934]{height:100vh!important;overflow:hidden!important}.spinner[data-v-6cc32934]{animation:spin-6cc32934 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-6cc32934]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-6cc32934]{filter:blur(3px)}.error-message[data-v-6cc32934]{animation:slideFadeInUp-6cc32934 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-6cc32934]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-6cc32934]{overflow-x:hidden}.landing__top[data-v-6cc32934]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-6cc32934]{display:flex}}.landing__topleft[data-v-6cc32934]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-6cc32934]{display:block;width:100%}}.landing__topleft--auth[data-v-6cc32934]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-6cc32934]{padding:0;width:auto}}.landing__topright[data-v-6cc32934],.landing__topright--img[data-v-6cc32934]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-6cc32934]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-6cc32934]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-6cc32934]{display:none}}.landing__content[data-v-6cc32934]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-6cc32934]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-6cc32934]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-6cc32934]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-6cc32934]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.landingfooter[data-v-6cc32934]{align-items:center;background:#f4f4f4;display:flex;flex-direction:column;justify-content:center;margin-top:6rem;padding:2rem 0 10rem}.landingfooter__email[data-v-6cc32934]{color:#000;font-size:2rem;font-weight:300}.landingfooter__social[data-v-6cc32934]{align-items:center;display:flex;justify-content:center}.landingfooter__social figure[data-v-6cc32934]{cursor:pointer;display:inline-block;height:4rem;margin:1rem;transition:transform .2s ease;width:4rem}.landingfooter__social figure[data-v-6cc32934]:hover{transform:scale(1.1)}.landingfooter__social figure.xlogo[data-v-6cc32934]{padding:.6rem}.landingfooter__social figure img[data-v-6cc32934]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 92:
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
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LandingFaq.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(84)
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

/***/ 93:
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
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LandingFooter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(86)
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

/***/ 95:
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
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LandingCategories.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(80)
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

/***/ 96:
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
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LandingCopy.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
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

/***/ })

};;
//# sourceMappingURL=landing-page.js.map