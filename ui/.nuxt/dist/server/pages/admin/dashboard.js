exports.ids = [34];
exports.modules = {

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'AdminDashboard',
  data() {
    return {
      products: [],
      showAddProductForm: false,
      newProduct: {
        name: '',
        generatedDescription: '',
        generatedCategoriesString: '',
        image: ''
      },
      imageUploading: false,
      variantImageUploading: {},
      productSubmitting: false,
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 1
    };
  },
  async mounted() {
    await this.fetchProducts();
  },
  watch: {
    searchQuery() {
      this.page = 1;
      this.fetchProducts();
    }
  },
  methods: {
    getAuthHeaders() {
      const token = localStorage.getItem('admin_token');
      return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
        this.fetchProducts();
      }
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
        this.fetchProducts();
      }
    },
    onSearchInput() {
      console.log('Search:', this.searchQuery);
    },
    async handleImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append('image', file);
      this.imageUploading = true;
      try {
        const response = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__[/* serverurl */ "c"]}/admin/upload-image`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
          },
          body: formData
        });
        await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* handleFetchError */ "b"])(response);
        const data = await response.json();
        if (data.url) {
          this.newProduct.image = data.url;
        } else {
          Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* showErrorMessage */ "d"])('Failed to upload image');
        }
      } catch (err) {
        console.error('Image upload error:', err);
        Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* showErrorMessage */ "d"])(err.message || 'Image upload failed');
      } finally {
        this.imageUploading = false;
      }
    },
    async submitNewProduct() {
      const {
        name,
        generatedDescription,
        generatedCategoriesString,
        image
      } = this.newProduct;
      const generatedCategories = generatedCategoriesString.split(',').map(c => c.trim());
      if (!name || !image) {
        alert('Name and image are required');
        return;
      }
      this.productSubmitting = true;
      try {
        const res = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__[/* serverurl */ "c"]}/admin/create-product`, {
          method: 'POST',
          headers: this.getAuthHeaders(),
          body: JSON.stringify({
            name,
            generatedDescription,
            generatedCategories,
            image
          })
        });
        await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* handleFetchError */ "b"])(res);
        const data = await res.json();
        if (data.error) return alert(data.error);
        this.products.unshift({
          ...data.product,
          generatedCategoriesString: data.product.generatedCategories.join(', '),
          showVariants: false,
          showAddVariantForm: false,
          newVariant: {
            unit: '',
            price: 0,
            availability: ''
          }
        });
        this.newProduct = {
          name: '',
          generatedDescription: '',
          generatedCategoriesString: '',
          image: ''
        };
        this.showAddProductForm = false;
      } catch (err) {
        console.error('Add product error:', err);
        alert('Failed to create product');
      } finally {
        this.productSubmitting = false;
      }
    },
    logout() {
      localStorage.removeItem('admin_token');
      this.$router.push('/admin/login');
    },
    async fetchProducts() {
      try {
        const query = new URLSearchParams({
          search: this.searchQuery,
          page: this.page,
          limit: this.limit
        }).toString();
        const res = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__[/* serverurl */ "c"]}/admin/products-with-variants?${query}`, {
          headers: this.getAuthHeaders()
        });
        await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* handleFetchError */ "b"])(res);
        const data = await res.json();
        console.log(data, 'data is here in old ui');
        this.products = (data.products || []).map(p => ({
          ...p,
          showVariants: false,
          showAddVariantForm: false,
          newVariant: {
            unit: '',
            price: 0,
            availability: ''
          },
          generatedCategoriesString: (p.generatedCategories || []).join(', ')
        }));
        this.totalPages = data.pages || 1;
      } catch (error) {
        console.error('Error loading products:', error);
      }
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleDateString();
    },
    toggleVariants(index) {
      this.products[index].showVariants = !this.products[index].showVariants;
    },
    async deleteProduct(productId) {
      if (!confirm('Are you sure you want to delete this product and its variants?')) return;
      try {
        const res = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__[/* serverurl */ "c"]}/admin/delete-product/${productId}`, {
          method: 'DELETE',
          headers: this.getAuthHeaders()
        });
        await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* handleFetchError */ "b"])(res);
        if (res.ok) this.products = this.products.filter(p => p._id !== productId);else alert('Failed to delete product');
      } catch (error) {
        console.error('Delete product error:', error);
      }
    },
    async deleteVariant(product, variant) {
      if (!confirm('Delete this variant?')) return;
      try {
        const res = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__[/* serverurl */ "c"]}/admin/delete-variant/${variant._id}`, {
          method: 'DELETE',
          headers: this.getAuthHeaders()
        });
        await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* handleFetchError */ "b"])(res);
        if (res.ok) {
          product.variants = product.variants.filter(v => v._id !== variant._id);
          product.variantCount--;
        } else alert('Failed to delete variant');
      } catch (error) {
        console.error('Delete variant error:', error);
      }
    },
    async saveProduct(product) {
      try {
        const updated = {
          name: product.name,
          image: product.image,
          generatedDescription: product.generatedDescription,
          generatedCategories: product.generatedCategoriesString.split(',').map(c => c.trim()),
          synced_to_algolia: product.synced_to_algolia
        };
        console.log(updated);
        const res = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__[/* serverurl */ "c"]}/admin/update-product/${product._id}`, {
          method: 'PUT',
          headers: this.getAuthHeaders(),
          body: JSON.stringify(updated)
        });
        await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* handleFetchError */ "b"])(res);
      } catch (error) {
        console.error('Update error:', error);
      }
    },
    async saveVariant(productId, variant) {
      try {
        const updated = {
          unit: variant.unit,
          price: variant.price,
          availability: variant.availability,
          image: variant.image || ''
        };
        const res = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__[/* serverurl */ "c"]}/admin/update-variant/${variant._id}`, {
          method: 'PUT',
          headers: this.getAuthHeaders(),
          body: JSON.stringify(updated)
        });
        await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* handleFetchError */ "b"])(res);
      } catch (error) {
        console.error('Variant update error:', error);
      }
    },
    async handleVariantImageUpload(product, event) {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append('image', file);
      this.$set(this.variantImageUploading, product._id, true);
      try {
        const response = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__[/* serverurl */ "c"]}/admin/upload-image`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
          },
          body: formData
        });
        await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* handleFetchError */ "b"])(response);
        const data = await response.json();
        if (data.url) {
          product.newVariant.image = data.url;
        } else {
          alert('Failed to upload variant image');
        }
      } catch (err) {
        console.error('Variant image upload error:', err);
        alert('Variant image upload failed');
      } finally {
        this.$set(this.variantImageUploading, product._id, false);
      }
    },
    async submitNewVariant(product) {
      const {
        unit,
        price,
        availability,
        image
      } = product.newVariant;
      if (!unit || !price || !availability || !image) {
        alert('Please fill all fields and upload an image.');
        return;
      }
      try {
        const res = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__[/* serverurl */ "c"]}/admin/add-variant/${product._id}`, {
          method: 'POST',
          headers: this.getAuthHeaders(),
          body: JSON.stringify({
            unit,
            price,
            availability,
            image
          })
        });
        await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* handleFetchError */ "b"])(res);
        const data = await res.json();

        //if (data.error) return alert(data.error);

        alert('variant added');
        product.showAddVariantForm = false;
      } catch (err) {
        console.error('Add variant error:', err);
        alert('Failed to add variant');
      }
    },
    showProductCategories(product_id, product_name) {
      console.log(product_id);
      this.$router.push(`/admin/categorycards?product_id=${product_id}&product_name=${product_name}`);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)["URLSearchParams"]))

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(183);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("eb94b53e", content, true, context)
};

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_e2f3c960_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_e2f3c960_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_e2f3c960_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_e2f3c960_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_e2f3c960_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-e2f3c960],[data-v-e2f3c960]:after,[data-v-e2f3c960]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-e2f3c960]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-e2f3c960]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-e2f3c960]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-e2f3c960]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-e2f3c960]{font-size:65%}}body[data-v-e2f3c960]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-e2f3c960]{padding:0}}[data-v-e2f3c960]::-moz-selection{background-color:#249b48;color:#fff}[data-v-e2f3c960]::selection{background-color:#249b48;color:#fff}[data-v-e2f3c960]::-webkit-scrollbar{height:8px;width:8px}[data-v-e2f3c960]::-webkit-scrollbar-track{background:transparent}[data-v-e2f3c960]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-e2f3c960]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-e2f3c960]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-e2f3c960{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-e2f3c960{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-e2f3c960{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-e2f3c960]{animation:slide-in-left-e2f3c960 .5s ease-out forwards}.button-primary[data-v-e2f3c960]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-e2f3c960]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-e2f3c960]{opacity:.4}.floating-element[data-v-e2f3c960]{animation:float-e2f3c960 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-e2f3c960]{height:100vh!important;overflow:hidden!important}.spinner[data-v-e2f3c960]{animation:spin-e2f3c960 1s linear infinite;border:4px solid rgba(36,155,72,.3);height:3rem;width:3rem}.spinner.path[data-v-e2f3c960]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-e2f3c960]{filter:blur(3px)}.error-message[data-v-e2f3c960]{animation:slideFadeInUp-e2f3c960 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-e2f3c960]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-e2f3c960]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-e2f3c960]{text-align:left}.landing[data-v-e2f3c960]{overflow-x:hidden}.landing__top[data-v-e2f3c960]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-e2f3c960]{display:flex}}.landing__topleft[data-v-e2f3c960]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-e2f3c960]{display:block;width:100%}}.landing__topleft--auth[data-v-e2f3c960]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-e2f3c960]{padding:0;width:auto}}.landing__topright[data-v-e2f3c960],.landing__topright--img[data-v-e2f3c960]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-e2f3c960]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-e2f3c960]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-e2f3c960]{display:none}}.landing__content[data-v-e2f3c960]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-e2f3c960]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-e2f3c960]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-e2f3c960]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-e2f3c960]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable[data-v-e2f3c960]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-e2f3c960]{overflow:hidden}}.admintable__top[data-v-e2f3c960]{align-items:center;display:flex;justify-content:space-between;margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-e2f3c960]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-e2f3c960]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-e2f3c960]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-e2f3c960]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-e2f3c960]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-e2f3c960]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-e2f3c960]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-e2f3c960]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-e2f3c960]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-e2f3c960]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-e2f3c960]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-e2f3c960]{padding:.6rem}}.admintable__searchinput svg[data-v-e2f3c960]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-e2f3c960]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-e2f3c960]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-e2f3c960]{font-size:1.2rem}}.admintable__content--link[data-v-e2f3c960]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-e2f3c960]{align-items:center;display:flex}.admintable__content--asset a[data-v-e2f3c960]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-e2f3c960]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-e2f3c960]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-e2f3c960]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-e2f3c960]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-e2f3c960]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-e2f3c960]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-e2f3c960]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-e2f3c960]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-e2f3c960]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-e2f3c960]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-e2f3c960]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-e2f3c960]{background:#249b48}.admintable__headerarea--section button.logout[data-v-e2f3c960]{background:transparent}.admintable__headerarea--section button.logout[data-v-e2f3c960]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-e2f3c960]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-e2f3c960]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-e2f3c960]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-e2f3c960]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-e2f3c960]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-e2f3c960]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-e2f3c960],.admintable__table th[data-v-e2f3c960]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-e2f3c960]:first-child,.admintable__table td[data-v-e2f3c960]:nth-child(2),.admintable__table th[data-v-e2f3c960]:first-child,.admintable__table th[data-v-e2f3c960]:nth-child(2){text-align:left}.admintable__table td[data-v-e2f3c960]{border-bottom:1px solid #fff}.admintable__table th[data-v-e2f3c960]:first-child{width:4%}.admintable__table th[data-v-e2f3c960]:nth-child(2){width:18%}.admintable__table th[data-v-e2f3c960]:nth-child(3){width:2%}.admintable__table th[data-v-e2f3c960]:nth-child(4){width:10%}.admintable__table th[data-v-e2f3c960]:nth-child(5),.admintable__table th[data-v-e2f3c960]:nth-child(6){width:12%}.admintable__table th[data-v-e2f3c960]:nth-child(7),.admintable__table th[data-v-e2f3c960]:nth-child(8),.admintable__table th[data-v-e2f3c960]:nth-child(9){width:8%}.admintable__table th[data-v-e2f3c960]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-e2f3c960]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-e2f3c960]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-e2f3c960]{left:10px}.admintable__table td[data-v-e2f3c960]:first-child,.admintable__table th[data-v-e2f3c960]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-e2f3c960]:nth-child(2),.admintable__table th[data-v-e2f3c960]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-e2f3c960]:nth-child(3),.admintable__table th[data-v-e2f3c960]:nth-child(3){display:none;width:0}.admintable__table td[data-v-e2f3c960]:nth-child(4),.admintable__table th[data-v-e2f3c960]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-e2f3c960]:nth-child(5),.admintable__table td[data-v-e2f3c960]:nth-child(6),.admintable__table td[data-v-e2f3c960]:nth-child(8),.admintable__table td[data-v-e2f3c960]:nth-child(9),.admintable__table th[data-v-e2f3c960]:nth-child(5),.admintable__table th[data-v-e2f3c960]:nth-child(6),.admintable__table th[data-v-e2f3c960]:nth-child(8),.admintable__table th[data-v-e2f3c960]:nth-child(9){display:none;width:0}.admintable__table td[data-v-e2f3c960]:nth-child(7),.admintable__table th[data-v-e2f3c960]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-e2f3c960]:nth-child(10),.admintable__table th[data-v-e2f3c960]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-e2f3c960]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-e2f3c960]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-e2f3c960],.admintable__editinputarea textarea[data-v-e2f3c960]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-e2f3c960]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-e2f3c960]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-e2f3c960]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-e2f3c960]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-e2f3c960]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-e2f3c960]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-e2f3c960]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-e2f3c960]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-e2f3c960]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-e2f3c960],.admintable__pagination--total[data-v-e2f3c960]{color:#fff;font-weight:600}.admintable__actions[data-v-e2f3c960]{position:relative}.admintable__actions--dropdown-button[data-v-e2f3c960]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-e2f3c960]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-e2f3c960]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-e2f3c960]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-e2f3c960]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-e2f3c960]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-e2f3c960]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-e2f3c960]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-e2f3c960]{color:#fff}.admintable__actions--savebtn.delete[data-v-e2f3c960]{background:red;color:#fff}.spinner[data-v-e2f3c960]{animation:spin-e2f3c960 .6s linear infinite;border:2px solid #ccc;border-radius:50%;border-top-color:#249b48;display:inline-block;height:16px;margin-right:.4rem;width:16px}@keyframes spin-e2f3c960{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.search-bar[data-v-e2f3c960]{margin-bottom:1.5rem}.search-bar input[type=text][data-v-e2f3c960]{border:1px solid #ccc;border-radius:.4rem;font-size:1.2rem;outline:none;padding:.8rem 1rem;width:100%}.admin-dashboard[data-v-e2f3c960]{background:#fff;min-height:100vh;overflow-x:auto;padding:2rem}.add-product-form[data-v-e2f3c960]{background:#fff;border:1px solid #ddd;border-radius:1rem;box-shadow:0 0 15px rgba(0,0,0,.2);left:50%;max-width:600px;padding:2rem;position:fixed;top:10%;transform:translateX(-50%);width:90%;z-index:999}.add-product-form div[data-v-e2f3c960],.add-product-form h2[data-v-e2f3c960]{margin-bottom:1rem}.add-product-form input[type=file][data-v-e2f3c960],.add-product-form textarea[data-v-e2f3c960]{font-size:1.2rem;padding:.8rem;resize:vertical;width:100%}.add-product-form button[data-v-e2f3c960]{background:#249b48;border:none;border-radius:.4rem;color:#fff;cursor:pointer;font-size:1.2rem;margin-right:1rem;padding:.6rem 1.2rem}.add-product-form-overlay[data-v-e2f3c960]{background:rgba(0,0,0,.6);height:100vh;left:0;position:fixed;top:0;width:100vw}.add-product-form span.loading-text[data-v-e2f3c960]{color:#888;display:inline-block;font-size:.95rem;margin-top:.5rem}.dashboard-header[data-v-e2f3c960]{align-items:center;border-bottom:1px solid #ccc;display:flex;justify-content:space-between;margin-bottom:1.5rem;padding-bottom:1.5rem}.dashboard-header h1[data-v-e2f3c960]{font-size:2rem;font-weight:700;margin:0}.dashboard-header .dashboard-actions[data-v-e2f3c960]{display:flex;gap:1rem}.dashboard-header .dashboard-actions button[data-v-e2f3c960]{background:#249b48;border:none;border-radius:.4rem;color:#fff;cursor:pointer;font-size:1.2rem;padding:.6rem 1.2rem}.dashboard-header .dashboard-actions button[data-v-e2f3c960]:last-child{background:#dc3545}.product-table[data-v-e2f3c960]{border-collapse:collapse;font-size:1.3rem;width:100%}.product-table td[data-v-e2f3c960],.product-table th[data-v-e2f3c960]{border:1px solid #ddd;padding:.8rem;text-align:left;vertical-align:top}.product-table th[data-v-e2f3c960]{background-color:#f4f4f4;font-weight:700}.product-table textarea[data-v-e2f3c960]{border:none;font-family:inherit;min-height:3rem;outline:none;resize:vertical}.product-table input[type=checkbox][data-v-e2f3c960],.product-table input[type=number][data-v-e2f3c960],.product-table input[type=text][data-v-e2f3c960],.product-table textarea[data-v-e2f3c960]{font-size:1.2rem;padding:.4rem;width:100%}.product-table button[data-v-e2f3c960]{border:none;border-radius:.3rem;cursor:pointer;font-size:1.2rem;margin-right:.5rem;margin-top:.3rem;padding:.5rem 1rem}.product-thumb[data-v-e2f3c960]{border-radius:.5rem;height:2rem;-o-object-fit:cover;object-fit:cover;width:2rem}.variant-list[data-v-e2f3c960]{background:#fafafa;border:1px solid #eee;border-radius:.5rem;padding:1rem}.variant-list .variant-row[data-v-e2f3c960]{align-items:center;display:flex;font-size:1.2rem;gap:2rem;margin-bottom:1rem}.variant-list .variant-row div[data-v-e2f3c960]{display:flex;flex-direction:column}.variant-list .variant-row label[data-v-e2f3c960]{color:#444;font-size:.9rem;margin-bottom:.3rem}.pagination-nav[data-v-e2f3c960]{align-items:center;display:flex;gap:1rem;justify-content:center;margin:2rem 0}.pagination-nav button[data-v-e2f3c960]{background:#249b48;border:none;border-radius:.4rem;color:#fff;cursor:pointer;font-size:1.1rem;padding:.5rem 1rem}.pagination-nav button[data-v-e2f3c960]:disabled{background:#ccc;cursor:not-allowed}.pagination-nav span[data-v-e2f3c960]{font-size:1.2rem;font-weight:500}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/dashboard.vue?vue&type=template&id=e2f3c960&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "admin-dashboard"
  }, [_vm._ssrNode("<div class=\"dashboard-header\" data-v-e2f3c960><h1 data-v-e2f3c960>Admin Dashboard</h1> <div class=\"dashboard-actions\" data-v-e2f3c960><button data-v-e2f3c960>Add Product</button> <button data-v-e2f3c960>View Category Cards</button> <button data-v-e2f3c960>Logout</button></div></div> <div class=\"search-bar\" data-v-e2f3c960><input type=\"text\" placeholder=\"Search products by name...\"" + _vm._ssrAttr("value", _vm.searchQuery) + " data-v-e2f3c960></div> " + (_vm.showAddProductForm ? "<div class=\"add-product-form-overlay\" data-v-e2f3c960><div class=\"add-product-form\" data-v-e2f3c960><h2 data-v-e2f3c960>Add New Product</h2> <div data-v-e2f3c960><label data-v-e2f3c960>Name</label> <textarea data-v-e2f3c960>" + _vm._ssrEscape(_vm._s(_vm.newProduct.name)) + "</textarea></div> <div data-v-e2f3c960><label data-v-e2f3c960>Description</label> <textarea data-v-e2f3c960>" + _vm._ssrEscape(_vm._s(_vm.newProduct.generatedDescription)) + "</textarea></div> <div data-v-e2f3c960><label data-v-e2f3c960>Categories (comma separated)</label> <textarea data-v-e2f3c960>" + _vm._ssrEscape(_vm._s(_vm.newProduct.generatedCategoriesString)) + "</textarea></div> <div data-v-e2f3c960><label data-v-e2f3c960>Upload Image</label> <input type=\"file\" data-v-e2f3c960> " + (_vm.imageUploading ? "<span class=\"loading-text\" data-v-e2f3c960><span class=\"spinner\" data-v-e2f3c960></span> Uploading image...\n                </span>" : "<!---->") + "</div> <div data-v-e2f3c960><button" + _vm._ssrAttr("disabled", _vm.imageUploading || _vm.productSubmitting) + " data-v-e2f3c960>" + (_vm.productSubmitting ? "<span class=\"spinner\" data-v-e2f3c960></span>" : "<!---->") + _vm._ssrEscape("\n                    " + _vm._s(_vm.productSubmitting ? 'Submitting...' : 'Submit') + "\n                ") + "</button> <button data-v-e2f3c960>Cancel</button></div></div></div>" : "<!---->") + " <table class=\"product-table\" data-v-e2f3c960><thead data-v-e2f3c960><tr data-v-e2f3c960><th data-v-e2f3c960>Image</th> <th data-v-e2f3c960>Name</th> <th data-v-e2f3c960>Description</th> <th data-v-e2f3c960>Categories</th> <th data-v-e2f3c960>Synced</th> <th data-v-e2f3c960>Variant Count</th> <th data-v-e2f3c960>Created</th> <th data-v-e2f3c960>Updated</th> <th data-v-e2f3c960>Actions</th></tr></thead> <tbody data-v-e2f3c960>" + _vm._ssrList(_vm.products, function (product, index) {
    return "<tr data-v-e2f3c960><td data-v-e2f3c960><img" + _vm._ssrAttr("src", product.image || '/imgs/placeholder.png') + " class=\"product-thumb\" data-v-e2f3c960></td> <td data-v-e2f3c960><textarea data-v-e2f3c960>" + _vm._ssrEscape(_vm._s(product.name)) + "</textarea></td> <td data-v-e2f3c960><textarea data-v-e2f3c960>" + _vm._ssrEscape(_vm._s(product.generatedDescription)) + "</textarea></td> <td data-v-e2f3c960><textarea data-v-e2f3c960>" + _vm._ssrEscape(_vm._s(product.generatedCategoriesString)) + "</textarea></td> <td data-v-e2f3c960><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(product.synced_to_algolia) ? _vm._i(product.synced_to_algolia, null) > -1 : product.synced_to_algolia) + " data-v-e2f3c960></td> <td data-v-e2f3c960>" + _vm._ssrEscape(_vm._s(product.variantCount)) + "</td> <td data-v-e2f3c960>" + _vm._ssrEscape(_vm._s(_vm.formatDate(product.createdAt))) + "</td> <td data-v-e2f3c960>" + _vm._ssrEscape(_vm._s(_vm.formatDate(product.updatedAt))) + "</td> <td data-v-e2f3c960><button data-v-e2f3c960>" + _vm._ssrEscape("\n                            " + _vm._s(product.showVariants ? 'Hide Variants' : 'Show Variants') + "\n                        ") + "</button> <button data-v-e2f3c960>Show Categories</button> <button" + _vm._ssrAttr("disabled", product.isSaving) + " data-v-e2f3c960>" + (product.isSaving ? "<span class=\"spinner\" data-v-e2f3c960></span>" : "<!---->") + " Save\n                        </button> <button data-v-e2f3c960>Delete</button></td></tr> " + (product.showVariants ? "<tr data-v-e2f3c960><td colspan=\"9\" data-v-e2f3c960><div class=\"variant-list\" data-v-e2f3c960>" + _vm._ssrList(product.variants, function (variant) {
      return "<div class=\"variant-row\" data-v-e2f3c960><div data-v-e2f3c960><label data-v-e2f3c960>Unit</label> <textarea data-v-e2f3c960>" + _vm._ssrEscape(_vm._s(variant.unit)) + "</textarea></div> <div data-v-e2f3c960><label data-v-e2f3c960>Price</label> <input type=\"number\"" + _vm._ssrAttr("value", variant.price) + " data-v-e2f3c960></div> <div data-v-e2f3c960><label data-v-e2f3c960>Availability</label> <textarea data-v-e2f3c960>" + _vm._ssrEscape(_vm._s(variant.availability)) + "</textarea></div> <div data-v-e2f3c960><button data-v-e2f3c960>Delete Variant</button></div> <div data-v-e2f3c960><button" + _vm._ssrAttr("disabled", variant.isSaving) + " data-v-e2f3c960>" + (variant.isSaving ? "<span class=\"spinner\" data-v-e2f3c960></span>" : "<!---->") + " Save\n                                    </button></div></div>";
    }) + " <button data-v-e2f3c960>" + _vm._ssrEscape("\n                                " + _vm._s(product.showAddVariantForm ? 'Cancel' : 'Add New Variant') + "\n                            ") + "</button> " + (product.showAddVariantForm ? "<div class=\"add-variant-form\" data-v-e2f3c960><h4 data-v-e2f3c960>Add New Variant</h4> <div class=\"variant-row\" data-v-e2f3c960><div data-v-e2f3c960><label data-v-e2f3c960>Unit</label> <textarea data-v-e2f3c960>" + _vm._ssrEscape(_vm._s(product.newVariant.unit)) + "</textarea></div> <div data-v-e2f3c960><label data-v-e2f3c960>Price</label> <input type=\"number\"" + _vm._ssrAttr("value", product.newVariant.price) + " data-v-e2f3c960></div> <div data-v-e2f3c960><label data-v-e2f3c960>Availability</label> <textarea data-v-e2f3c960>" + _vm._ssrEscape(_vm._s(product.newVariant.availability)) + "</textarea></div> <div data-v-e2f3c960><label data-v-e2f3c960>Upload Image</label> <input type=\"file\" data-v-e2f3c960> " + (_vm.variantImageUploading[product._id] ? "<span class=\"loading-text\" data-v-e2f3c960><span class=\"spinner\" data-v-e2f3c960></span> Uploading image...\n                                        </span>" : "<!---->") + "</div> <div data-v-e2f3c960><button" + _vm._ssrAttr("disabled", _vm.variantImageUploading[product._id]) + " data-v-e2f3c960>\n                                            Submit\n                                        </button></div></div></div>" : "<!---->") + "</div></td></tr>" : "<!---->");
  }) + "</tbody></table> <div class=\"pagination-nav\" data-v-e2f3c960><button" + _vm._ssrAttr("disabled", _vm.page <= 1) + " data-v-e2f3c960>Previous</button> <span data-v-e2f3c960>" + _vm._ssrEscape("Page " + _vm._s(_vm.page) + " of " + _vm._s(_vm.totalPages)) + "</span> <button" + _vm._ssrAttr("disabled", _vm.page >= _vm.totalPages) + " data-v-e2f3c960>Next</button></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/dashboard.vue?vue&type=template&id=e2f3c960&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/dashboard.vue?vue&type=script&lang=js
var dashboardvue_type_script_lang_js = __webpack_require__(117);

// CONCATENATED MODULE: ./pages/admin/dashboard.vue?vue&type=script&lang=js
 /* harmony default export */ var admin_dashboardvue_type_script_lang_js = (dashboardvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/admin/dashboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(182)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_dashboardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e2f3c960",
  "2ba9d1c3"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dashboard.js.map