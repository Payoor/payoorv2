exports.ids = [10];
exports.modules = {

/***/ 46:
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

/***/ 60:
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
      if (this.setLoading) this.setLoading(true);
      try {
        const data = await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* handleFetch */ "a"])({
          apiroute: 'shopper/message',
          method: 'POST',
          body: {
            message
          }
        });
        const {
          products
        } = data;
        this.$emit('update:products', [...this.products, ...products]);
      } catch (error) {
        console.error('Error posting message:', error);
      } finally {
        if (this.setLoading) this.setLoading(false);
      }
    }
  }
});

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("e47ca1c0", content, true, context)
};

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_e050102a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_e050102a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_e050102a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_e050102a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatCategories_vue_vue_type_style_index_0_id_e050102a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-e050102a],[data-v-e050102a]:after,[data-v-e050102a]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-e050102a]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-e050102a]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-e050102a]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-e050102a]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-e050102a]{font-size:65%}}body[data-v-e050102a]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-e050102a]{padding:0}}[data-v-e050102a]::-moz-selection{background-color:#249b48;color:#fff}[data-v-e050102a]::selection{background-color:#249b48;color:#fff}[data-v-e050102a]::-webkit-scrollbar{height:8px;width:8px}[data-v-e050102a]::-webkit-scrollbar-track{background:transparent}[data-v-e050102a]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-e050102a]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-e050102a]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-e050102a{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-e050102a{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-e050102a{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-e050102a{to{transform:rotate(1turn)}}.slide-in-left[data-v-e050102a]{animation:slide-in-left-e050102a .5s ease-out forwards}.button-primary[data-v-e050102a]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-e050102a]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-e050102a]{opacity:.4}.floating-element[data-v-e050102a]{animation:float-e050102a 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-e050102a]{height:100vh!important;overflow:hidden!important}.spinner[data-v-e050102a]{animation:spin-e050102a 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-e050102a]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-e050102a]{filter:blur(3px)}.error-message[data-v-e050102a]{animation:slideFadeInUp-e050102a .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-e050102a]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-e050102a]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-e050102a]{text-align:left}.landing[data-v-e050102a]{overflow-x:hidden}.landing__top[data-v-e050102a]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-e050102a]{display:flex}}.landing__topleft[data-v-e050102a]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-e050102a]{display:block;width:100%}}.landing__topleft--auth[data-v-e050102a]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-e050102a]{padding:0;width:auto}}.landing__topright[data-v-e050102a],.landing__topright--img[data-v-e050102a]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-e050102a]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-e050102a]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-e050102a]{display:none}}.landing__content[data-v-e050102a]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-e050102a]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-e050102a]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-e050102a]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-e050102a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable[data-v-e050102a]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-e050102a]{overflow:hidden}}.admintable__top[data-v-e050102a]{align-items:center;display:flex;justify-content:space-between;margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-e050102a]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-e050102a]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-e050102a]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-e050102a]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-e050102a]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-e050102a]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-e050102a]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-e050102a]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-e050102a]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-e050102a]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-e050102a]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-e050102a]{padding:.6rem}}.admintable__searchinput svg[data-v-e050102a]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-e050102a]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-e050102a]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-e050102a]{font-size:1.2rem}}.admintable__content--link[data-v-e050102a]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-e050102a]{align-items:center;display:flex}.admintable__content--asset a[data-v-e050102a]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-e050102a]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-e050102a]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-e050102a]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-e050102a]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-e050102a]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-e050102a]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-e050102a]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-e050102a]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-e050102a]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-e050102a]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-e050102a]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-e050102a]{background:#249b48}.admintable__headerarea--section button.logout[data-v-e050102a]{background:transparent}.admintable__headerarea--section button.logout[data-v-e050102a]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-e050102a]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-e050102a]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-e050102a]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-e050102a]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-e050102a]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-e050102a]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-e050102a],.admintable__table th[data-v-e050102a]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-e050102a]:first-child,.admintable__table td[data-v-e050102a]:nth-child(2),.admintable__table th[data-v-e050102a]:first-child,.admintable__table th[data-v-e050102a]:nth-child(2){text-align:left}.admintable__table td[data-v-e050102a]{border-bottom:1px solid #fff}.admintable__table th[data-v-e050102a]:first-child{width:4%}.admintable__table th[data-v-e050102a]:nth-child(2){width:18%}.admintable__table th[data-v-e050102a]:nth-child(3){width:2%}.admintable__table th[data-v-e050102a]:nth-child(4){width:10%}.admintable__table th[data-v-e050102a]:nth-child(5),.admintable__table th[data-v-e050102a]:nth-child(6){width:12%}.admintable__table th[data-v-e050102a]:nth-child(7),.admintable__table th[data-v-e050102a]:nth-child(8),.admintable__table th[data-v-e050102a]:nth-child(9){width:8%}.admintable__table th[data-v-e050102a]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-e050102a]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-e050102a]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-e050102a]{left:10px}.admintable__table td[data-v-e050102a]:first-child,.admintable__table th[data-v-e050102a]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-e050102a]:nth-child(2),.admintable__table th[data-v-e050102a]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-e050102a]:nth-child(3),.admintable__table th[data-v-e050102a]:nth-child(3){display:none;width:0}.admintable__table td[data-v-e050102a]:nth-child(4),.admintable__table th[data-v-e050102a]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-e050102a]:nth-child(5),.admintable__table td[data-v-e050102a]:nth-child(6),.admintable__table td[data-v-e050102a]:nth-child(8),.admintable__table td[data-v-e050102a]:nth-child(9),.admintable__table th[data-v-e050102a]:nth-child(5),.admintable__table th[data-v-e050102a]:nth-child(6),.admintable__table th[data-v-e050102a]:nth-child(8),.admintable__table th[data-v-e050102a]:nth-child(9){display:none;width:0}.admintable__table td[data-v-e050102a]:nth-child(7),.admintable__table th[data-v-e050102a]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-e050102a]:nth-child(10),.admintable__table th[data-v-e050102a]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-e050102a]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-e050102a]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-e050102a],.admintable__editinputarea textarea[data-v-e050102a]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-e050102a]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-e050102a]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-e050102a]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-e050102a]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-e050102a]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-e050102a]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-e050102a]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-e050102a]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-e050102a]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-e050102a],.admintable__pagination--total[data-v-e050102a]{color:#fff;font-weight:600}.admintable__actions[data-v-e050102a]{position:relative}.admintable__actions--dropdown-button[data-v-e050102a]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-e050102a]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-e050102a]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-e050102a]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-e050102a]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-e050102a]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-e050102a]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-e050102a]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-e050102a]{color:#fff}.admintable__actions--savebtn.delete[data-v-e050102a]{background:red;color:#fff}.chat-categories__header[data-v-e050102a]{font-size:1.5rem;font-weight:500;padding:2rem 1rem 0}.chat-categories__categories[data-v-e050102a]{background:#b6edf2;display:flex;justify-content:flex-start;overflow-x:scroll;overflow-y:hidden;padding:1rem;scrollbar-width:none;width:100%;-ms-overflow-style:none}.chat-categories__categories[data-v-e050102a]::-webkit-scrollbar{display:none;height:6px}.chat-categories__categories[data-v-e050102a]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.chat-categories__categories[data-v-e050102a]::-webkit-scrollbar-thumb:hover{background-color:transparent}.chat-categories__categories.home-white[data-v-e050102a]{background:#fff}.chat-categories__category[data-v-e050102a]{align-items:center;border-radius:1rem;cursor:pointer;display:flex;flex-shrink:0;margin-right:1rem;min-height:3rem;padding:1rem;width:20rem}.chat-categories__category.currentcat[data-v-e050102a]{border:1px solid #249b48}.chat-categories__category--header[data-v-e050102a]{font-size:1rem}.chat-categories__category--png[data-v-e050102a]{border-radius:100%;height:5rem;margin-right:.5rem;overflow:hidden;width:5rem}.chat-categories__category--png img[data-v-e050102a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chat-categories__category--description[data-v-e050102a]{color:rgba(0,0,0,.5);font-size:1rem}.chat-categories__category.farmfresh[data-v-e050102a]{background:#a8d1f0}.chat-categories__category.protein[data-v-e050102a]{background:#f0e7a8}.chat-categories__category.cookingessentials[data-v-e050102a]{background:#f0baa8}.chat-categories__category.fruits[data-v-e050102a]{background:pink}.chat-categories__category.fit-fam[data-v-e050102a]{background:#a8f0b7}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatCategories.vue?vue&type=template&id=e050102a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"chat-categories__body\" data-v-e050102a>", "</div>", [_vm._ssrNode("<div class=\"chat-categories__header\" data-v-e050102a><p data-v-e050102a>Explore Categories</p></div> "), _vm._ssrNode("<div" + _vm._ssrClass("chat-categories__categories", {
    'home-white': _vm.home
  }) + " data-v-e050102a>", "</div>", _vm._l(_vm.categories, function (category, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass("chat-categories__category", [category.class, {
      currentcat: _vm.currentcat === index
    }]) + _vm._ssrStyle(null, {
      currentcat: _vm.currentcat === index
    }, null) + " data-v-e050102a>", "</div>", [_vm._ssrNode("<div class=\"chat-categories__category--left\" data-v-e050102a>", "</div>", [_vm._ssrNode("<figure class=\"chat-categories__category--png\" data-v-e050102a>", "</figure>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: category.image,
        expression: "category.image"
      }],
      attrs: {
        "alt": "Category image"
      }
    }, [])])]), _vm._ssrNode(" <div class=\"chat-categories__category--right\" data-v-e050102a><div class=\"chat-categories__category--header\" data-v-e050102a><h2 data-v-e050102a>" + _vm._ssrEscape(_vm._s(category.name)) + "</h2></div> <div class=\"chat-categories__category--description\" data-v-e050102a><p data-v-e050102a>" + _vm._ssrEscape(_vm._s(_vm.truncate(category.description, 20))) + "</p></div></div>")], 2);
  }), 0)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatCategories.vue?vue&type=template&id=e050102a&scoped=true

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(46);

// EXTERNAL MODULE: ./mixins/product_mixin.js
var product_mixin = __webpack_require__(60);

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
        image: '/imgs/avocados-fit-fam.png',
        name: 'Fit Fam',
        description: 'Beef, Chicken, Turkey, and fresh Fish — protein-packed goodness.',
        class: 'fit-fam'
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
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatCategoriesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e050102a",
  "2a8359f2"
  
)

/* harmony default export */ var ChatCategories = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=chat-categories.js.map