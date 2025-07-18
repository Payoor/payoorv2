exports.ids = [9];
exports.modules = {

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

/***/ 59:
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
  add("ca819ac8", content, true, context)
};

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_5816f277_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_5816f277_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_5816f277_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_5816f277_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInput_vue_vue_type_style_index_0_id_5816f277_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-5816f277],[data-v-5816f277]:after,[data-v-5816f277]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-5816f277]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-5816f277]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-5816f277]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-5816f277]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-5816f277]{font-size:65%}}body[data-v-5816f277]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-5816f277]{padding:0}}[data-v-5816f277]::-moz-selection{background-color:#249b48;color:#fff}[data-v-5816f277]::selection{background-color:#249b48;color:#fff}[data-v-5816f277]::-webkit-scrollbar{height:8px;width:8px}[data-v-5816f277]::-webkit-scrollbar-track{background:transparent}[data-v-5816f277]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-5816f277]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-5816f277]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-5816f277{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-5816f277{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-5816f277{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-5816f277{to{transform:rotate(1turn)}}.slide-in-left[data-v-5816f277]{animation:slide-in-left-5816f277 .5s ease-out forwards}.button-primary[data-v-5816f277]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-5816f277]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-5816f277]{opacity:.4}.floating-element[data-v-5816f277]{animation:float-5816f277 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-5816f277]{height:100vh!important;overflow:hidden!important}.spinner[data-v-5816f277]{animation:spin-5816f277 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-5816f277]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-5816f277]{filter:blur(3px)}.error-message[data-v-5816f277]{animation:slideFadeInUp-5816f277 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-5816f277]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-5816f277]{overflow-x:hidden}.landing__top[data-v-5816f277]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-5816f277]{display:flex}}.landing__topleft[data-v-5816f277]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-5816f277]{display:block;width:100%}}.landing__topleft--auth[data-v-5816f277]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-5816f277]{padding:0;width:auto}}.landing__topright[data-v-5816f277],.landing__topright--img[data-v-5816f277]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-5816f277]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-5816f277]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-5816f277]{display:none}}.landing__content[data-v-5816f277]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-5816f277]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-5816f277]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-5816f277]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-5816f277]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.chatinput[data-v-5816f277]{background:#333;border:.3rem solid transparent;border-radius:3rem;margin:0 auto;min-height:6rem;overflow:hidden;padding:2rem;position:relative}@media only screen and (max-width:56.25em){.chatinput[data-v-5816f277]{border-radius:3rem 3rem 0 0}}.chatinput .error-message[data-v-5816f277]{color:#ff4d4d;font-size:1.6rem;font-weight:700;margin-bottom:1rem;text-align:center}.chatinput__field[data-v-5816f277]{background:transparent;border:none;color:#fff;font-size:2.1rem;line-height:1.5;max-height:15rem;min-height:2rem;outline:none;overflow-y:auto;resize:none;width:100%}.chatinput__sendbtn[data-v-5816f277]{background:#249b48;border-radius:100%;bottom:1rem;display:flex;display:none;height:4.5rem;justify-content:center;overflow:hidden;position:absolute;right:1rem;width:4.5rem}.chatinput__sendbtn.visible[data-v-5816f277]{display:flex}.chatinput__sendbtn button[data-v-5816f277]{background:transparent;border:none;cursor:pointer;display:flex;height:100%;justify-content:center;outline:none;width:100%}.chatinput__sendbtn button svg[data-v-5816f277]{fill:#fff;color:#fff;height:4rem;width:4rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChatInput.vue?vue&type=template&id=5816f277&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode((_vm.errorMessage ? "<div class=\"error-message\" data-v-5816f277>" + _vm._ssrEscape("\n        " + _vm._s(_vm.errorMessage) + "\n    ") + "</div>" : "<!---->") + " <div class=\"chatinput\" data-v-5816f277>" + (!_vm.currentUser.otpMode ? "<div data-v-5816f277>" + (_vm.currentUser.name && _vm.currentUser.phoneNumber && _vm.currentUser.detailsAdded ? "<textarea" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + " class=\"chatinput__field\" data-v-5816f277>" + _vm._ssrEscape(_vm._s(_vm.userinput)) + "</textarea>" : "<!---->") + " " + (_vm.isEmailMode ? "<input type=\"email\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + _vm._ssrAttr("value", _vm.userinput) + " class=\"chatinput__field\" data-v-5816f277>" : "<!---->") + " " + (_vm.isPhoneMode && !_vm.isEmailMode ? "<input type=\"tel\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + _vm._ssrAttr("value", _vm.userinput) + " class=\"chatinput__field\" data-v-5816f277>" : "<!---->") + " " + (_vm.isNameMode ? "<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.isLoading || _vm.currentUser.otpMode) + _vm._ssrAttr("value", _vm.userinput) + " class=\"chatinput__field\" data-v-5816f277>" : "<!---->") + "</div>" : "<!---->") + " <div" + _vm._ssrClass("chatinput__sendbtn slide-fade-in-up", {
    'visible': _vm.userinput.length
  }) + " data-v-5816f277><button data-v-5816f277><svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-2xl\" data-v-5816f277><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z\" fill=\"currentColor\" data-v-5816f277></path></svg></button></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChatInput.vue?vue&type=template&id=5816f277&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/jwt_mixin.js
var jwt_mixin = __webpack_require__(45);

// EXTERNAL MODULE: ./mixins/product_mixin.js
var product_mixin = __webpack_require__(59);

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
      // console.log(newVal)
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
          //this.errorMessage = error.message;
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
      try {
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/message',
          method: 'POST',
          body: {
            message: this.userinput
          }
        });
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
      } catch (error) {
        console.log(error, 'error catcher needs to be placed here');
      }
    },
    async postMessageFromQuery(message) {
      if (this.setLoading) this.setLoading(true);
      try {
        const data = await Object(api["a" /* handleFetch */])({
          apiroute: 'shopper/message',
          method: 'POST',
          body: {
            message
          }
        });
        const {
          products
        } = data;
        this.$emit("update:products", [...this.products, ...products]);
      } catch (error) {
        console.error(error);
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
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChatInputvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5816f277",
  "90f1b5a2"
  
)

/* harmony default export */ var ChatInput = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=chat-input.js.map