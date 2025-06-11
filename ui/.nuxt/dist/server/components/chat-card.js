exports.ids = [5];
exports.modules = {

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4725caad", content, true, context)
};

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_14e6ec30_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_14e6ec30_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_14e6ec30_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_14e6ec30_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCard_vue_vue_type_style_index_0_id_14e6ec30_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-14e6ec30],[data-v-14e6ec30]:after,[data-v-14e6ec30]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-14e6ec30]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-14e6ec30]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-14e6ec30]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-14e6ec30]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-14e6ec30]{font-size:65%}}body[data-v-14e6ec30]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-14e6ec30]{padding:0}}[data-v-14e6ec30]::-moz-selection{background-color:#249b48;color:#fff}[data-v-14e6ec30]::selection{background-color:#249b48;color:#fff}[data-v-14e6ec30]::-webkit-scrollbar{height:8px;width:8px}[data-v-14e6ec30]::-webkit-scrollbar-track{background:transparent}[data-v-14e6ec30]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-14e6ec30]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-14e6ec30]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-14e6ec30{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-14e6ec30{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-14e6ec30{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-14e6ec30]{animation:slide-in-left-14e6ec30 .5s ease-out forwards}.button-primary[data-v-14e6ec30]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-14e6ec30]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-14e6ec30]{opacity:.4}.floating-element[data-v-14e6ec30]{animation:float-14e6ec30 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-14e6ec30]{height:100vh!important;overflow:hidden!important}.spinner[data-v-14e6ec30]{border:4px solid rgba(36,155,72,.3);border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-14e6ec30]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-14e6ec30]{filter:blur(3px)}.error-message[data-v-14e6ec30]{animation:slideFadeInUp-14e6ec30 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-14e6ec30]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-14e6ec30]{overflow-x:hidden}.landing__top[data-v-14e6ec30]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-14e6ec30]{display:flex}}.landing__topleft[data-v-14e6ec30]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-14e6ec30]{display:block;width:100%}}.landing__topleft--auth[data-v-14e6ec30]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-14e6ec30]{padding:0;width:auto}}.landing__topright[data-v-14e6ec30],.landing__topright--img[data-v-14e6ec30]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-14e6ec30]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-14e6ec30]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-14e6ec30]{display:none}}.landing__content[data-v-14e6ec30]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-14e6ec30]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-14e6ec30]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-14e6ec30]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-14e6ec30]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatcard[data-v-14e6ec30]{background:rgba(168,209,240,.6);border-radius:1rem;overflow:hidden;position:relative}.chatcard__contents[data-v-14e6ec30]{padding:1rem}.chatcard__name[data-v-14e6ec30]{font-size:1.5rem;font-weight:600;margin:1rem 0}.chatcard__viewmore--flex[data-v-14e6ec30]{align-items:center;display:flex}.chatcard__viewmore--flex span[data-v-14e6ec30]{flex-shrink:0}.chatcard__viewmore--flex span[data-v-14e6ec30]:first-child{margin-right:.4rem}.chatcard__viewmore button[data-v-14e6ec30]{align-items:center;background:#249b48;border:none;border-radius:3rem;color:#fff;cursor:pointer;display:flex;font-size:1.4rem;font-weight:500;justify-content:center;outline:none;padding:1rem}.chatcard__viewmore button[data-v-14e6ec30]:disabled{cursor:not-allowed;opacity:.7}.chatcard__img[data-v-14e6ec30]{height:14rem}.chatcard__img img[data-v-14e6ec30]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatcard__tags[data-v-14e6ec30]{display:flex;flex-wrap:wrap;margin-top:1rem}.chatcard__tags span[data-v-14e6ec30]{background:rgba(36,155,72,.4);border:1px solid rgba(36,155,72,.4);border-radius:3rem;display:inline-block;font-weight:500;margin-right:.5rem;padding:.5rem 1.4rem}.spinner[data-v-14e6ec30]{animation:spin-14e6ec30 1s linear infinite;border:.4rem solid hsla(0,0%,100%,.3);border-radius:50%;border-top-color:#fff;height:1rem;width:1rem}@keyframes spin-14e6ec30{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatCard.vue?vue&type=template&id=14e6ec30&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatcard"
  }, [_vm._ssrNode("<figure class=\"chatcard__img\" data-v-14e6ec30>", "</figure>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.imageUrl,
      expression: "imageUrl"
    }]
  }, [])]), _vm._ssrNode(" <div class=\"chatcard__contents\" data-v-14e6ec30><div class=\"chatcard__name\" data-v-14e6ec30><p data-v-14e6ec30>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</p></div> <div class=\"chatcard__viewmore\" data-v-14e6ec30><button" + _vm._ssrAttr("disabled", _vm.loading) + " data-v-14e6ec30><div class=\"chatcard__viewmore--flex\" data-v-14e6ec30><span data-v-14e6ec30>" + _vm._ssrEscape("View " + _vm._s(_vm.options) + " options") + "</span> " + (_vm.loading ? "<span class=\"spinner\" data-v-14e6ec30></span>" : "<!---->") + "</div></button></div> <div class=\"chatcard__tags\" data-v-14e6ec30>" + _vm._ssrList(_vm.tags, function (tag, index) {
    return "<span data-v-14e6ec30>" + _vm._ssrEscape(_vm._s(_vm.formatTag(tag))) + "</span>";
  }) + "</div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatCard.vue?vue&type=template&id=14e6ec30&scoped=true

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
      loading: false // Introduce a loading state
    };
  },
  mounted() {
    const previousPage = this.$route.query.prevpage;
    const currentProduct = this.$route.query.currentproduct;
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
    async viewOptions() {
      this.loading = true;
      try {
        await this.$store.dispatch("cart/syncCartToServer");
      } catch (error) {
        console.error("Error syncing cart to server:", error);
      } finally {
        this.loading = false;
      }
      this.$router.push({
        path: '/options',
        query: {
          ...this.$route.query,
          currentproduct: this.product._mongooseid,
          productname: this.name
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
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatCardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "14e6ec30",
  "2b5f683b"
  
)

/* harmony default export */ var ChatCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=chat-card.js.map