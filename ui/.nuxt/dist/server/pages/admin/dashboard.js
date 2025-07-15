exports.ids = [28];
exports.modules = {

/***/ 109:
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

/***/ 129:
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
  add("322167ec", content, true, context)
};

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_c0b91e18_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_c0b91e18_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_c0b91e18_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_c0b91e18_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_c0b91e18_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-c0b91e18],[data-v-c0b91e18]:after,[data-v-c0b91e18]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-c0b91e18]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-c0b91e18]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-c0b91e18]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-c0b91e18]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-c0b91e18]{font-size:65%}}body[data-v-c0b91e18]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-c0b91e18]{padding:0}}[data-v-c0b91e18]::-moz-selection{background-color:#249b48;color:#fff}[data-v-c0b91e18]::selection{background-color:#249b48;color:#fff}[data-v-c0b91e18]::-webkit-scrollbar{height:8px;width:8px}[data-v-c0b91e18]::-webkit-scrollbar-track{background:transparent}[data-v-c0b91e18]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-c0b91e18]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-c0b91e18]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-c0b91e18{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-c0b91e18{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-c0b91e18{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-c0b91e18]{animation:slide-in-left-c0b91e18 .5s ease-out forwards}.button-primary[data-v-c0b91e18]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-c0b91e18]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-c0b91e18]{opacity:.4}.floating-element[data-v-c0b91e18]{animation:float-c0b91e18 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-c0b91e18]{height:100vh!important;overflow:hidden!important}.spinner[data-v-c0b91e18]{animation:spin-c0b91e18 1s linear infinite;border:4px solid rgba(36,155,72,.3);height:3rem;width:3rem}.spinner.path[data-v-c0b91e18]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-c0b91e18]{filter:blur(3px)}.error-message[data-v-c0b91e18]{animation:slideFadeInUp-c0b91e18 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-c0b91e18]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-c0b91e18]{overflow-x:hidden}.landing__top[data-v-c0b91e18]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-c0b91e18]{display:flex}}.landing__topleft[data-v-c0b91e18]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-c0b91e18]{display:block;width:100%}}.landing__topleft--auth[data-v-c0b91e18]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-c0b91e18]{padding:0;width:auto}}.landing__topright[data-v-c0b91e18],.landing__topright--img[data-v-c0b91e18]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-c0b91e18]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-c0b91e18]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-c0b91e18]{display:none}}.landing__content[data-v-c0b91e18]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-c0b91e18]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-c0b91e18]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-c0b91e18]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-c0b91e18]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.spinner[data-v-c0b91e18]{animation:spin-c0b91e18 .6s linear infinite;border:2px solid #ccc;border-radius:50%;border-top-color:#249b48;display:inline-block;height:16px;margin-right:.4rem;width:16px}@keyframes spin-c0b91e18{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.search-bar[data-v-c0b91e18]{margin-bottom:1.5rem}.search-bar input[type=text][data-v-c0b91e18]{border:1px solid #ccc;border-radius:.4rem;font-size:1.2rem;outline:none;padding:.8rem 1rem;width:100%}.admin-dashboard[data-v-c0b91e18]{background:#fff;min-height:100vh;overflow-x:auto;padding:2rem}.add-product-form[data-v-c0b91e18]{background:#fff;border:1px solid #ddd;border-radius:1rem;box-shadow:0 0 15px rgba(0,0,0,.2);left:50%;max-width:600px;padding:2rem;position:fixed;top:10%;transform:translateX(-50%);width:90%;z-index:999}.add-product-form div[data-v-c0b91e18],.add-product-form h2[data-v-c0b91e18]{margin-bottom:1rem}.add-product-form input[type=file][data-v-c0b91e18],.add-product-form textarea[data-v-c0b91e18]{font-size:1.2rem;padding:.8rem;resize:vertical;width:100%}.add-product-form button[data-v-c0b91e18]{background:#249b48;border:none;border-radius:.4rem;color:#fff;cursor:pointer;font-size:1.2rem;margin-right:1rem;padding:.6rem 1.2rem}.add-product-form-overlay[data-v-c0b91e18]{background:rgba(0,0,0,.6);height:100vh;left:0;position:fixed;top:0;width:100vw}.add-product-form span.loading-text[data-v-c0b91e18]{color:#888;display:inline-block;font-size:.95rem;margin-top:.5rem}.dashboard-header[data-v-c0b91e18]{align-items:center;border-bottom:1px solid #ccc;display:flex;justify-content:space-between;margin-bottom:1.5rem;padding-bottom:1.5rem}.dashboard-header h1[data-v-c0b91e18]{font-size:2rem;font-weight:700;margin:0}.dashboard-header .dashboard-actions[data-v-c0b91e18]{display:flex;gap:1rem}.dashboard-header .dashboard-actions button[data-v-c0b91e18]{background:#249b48;border:none;border-radius:.4rem;color:#fff;cursor:pointer;font-size:1.2rem;padding:.6rem 1.2rem}.dashboard-header .dashboard-actions button[data-v-c0b91e18]:last-child{background:#dc3545}.product-table[data-v-c0b91e18]{border-collapse:collapse;font-size:1.3rem;width:100%}.product-table td[data-v-c0b91e18],.product-table th[data-v-c0b91e18]{border:1px solid #ddd;padding:.8rem;text-align:left;vertical-align:top}.product-table th[data-v-c0b91e18]{background-color:#f4f4f4;font-weight:700}.product-table textarea[data-v-c0b91e18]{border:none;font-family:inherit;min-height:3rem;outline:none;resize:vertical}.product-table input[type=checkbox][data-v-c0b91e18],.product-table input[type=number][data-v-c0b91e18],.product-table input[type=text][data-v-c0b91e18],.product-table textarea[data-v-c0b91e18]{font-size:1.2rem;padding:.4rem;width:100%}.product-table button[data-v-c0b91e18]{border:none;border-radius:.3rem;cursor:pointer;font-size:1.2rem;margin-right:.5rem;margin-top:.3rem;padding:.5rem 1rem}.product-thumb[data-v-c0b91e18]{border-radius:.5rem;height:2rem;-o-object-fit:cover;object-fit:cover;width:2rem}.variant-list[data-v-c0b91e18]{background:#fafafa;border:1px solid #eee;border-radius:.5rem;padding:1rem}.variant-list .variant-row[data-v-c0b91e18]{align-items:center;display:flex;font-size:1.2rem;gap:2rem;margin-bottom:1rem}.variant-list .variant-row div[data-v-c0b91e18]{display:flex;flex-direction:column}.variant-list .variant-row label[data-v-c0b91e18]{color:#444;font-size:.9rem;margin-bottom:.3rem}.pagination-nav[data-v-c0b91e18]{align-items:center;display:flex;gap:1rem;justify-content:center;margin:2rem 0}.pagination-nav button[data-v-c0b91e18]{background:#249b48;border:none;border-radius:.4rem;color:#fff;cursor:pointer;font-size:1.1rem;padding:.5rem 1rem}.pagination-nav button[data-v-c0b91e18]:disabled{background:#ccc;cursor:not-allowed}.pagination-nav span[data-v-c0b91e18]{font-size:1.2rem;font-weight:500}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/dashboard.vue?vue&type=template&id=c0b91e18&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "admin-dashboard"
  }, [_vm._ssrNode("<div class=\"dashboard-header\" data-v-c0b91e18><h1 data-v-c0b91e18>Admin Dashboard</h1> <div class=\"dashboard-actions\" data-v-c0b91e18><button data-v-c0b91e18>Add Product</button> <button data-v-c0b91e18>View Category Cards</button> <button data-v-c0b91e18>Logout</button></div></div> <div class=\"search-bar\" data-v-c0b91e18><input type=\"text\" placeholder=\"Search products by name...\"" + _vm._ssrAttr("value", _vm.searchQuery) + " data-v-c0b91e18></div> " + (_vm.showAddProductForm ? "<div class=\"add-product-form-overlay\" data-v-c0b91e18><div class=\"add-product-form\" data-v-c0b91e18><h2 data-v-c0b91e18>Add New Product</h2> <div data-v-c0b91e18><label data-v-c0b91e18>Name</label> <textarea data-v-c0b91e18>" + _vm._ssrEscape(_vm._s(_vm.newProduct.name)) + "</textarea></div> <div data-v-c0b91e18><label data-v-c0b91e18>Description</label> <textarea data-v-c0b91e18>" + _vm._ssrEscape(_vm._s(_vm.newProduct.generatedDescription)) + "</textarea></div> <div data-v-c0b91e18><label data-v-c0b91e18>Categories (comma separated)</label> <textarea data-v-c0b91e18>" + _vm._ssrEscape(_vm._s(_vm.newProduct.generatedCategoriesString)) + "</textarea></div> <div data-v-c0b91e18><label data-v-c0b91e18>Upload Image</label> <input type=\"file\" data-v-c0b91e18> " + (_vm.imageUploading ? "<span class=\"loading-text\" data-v-c0b91e18><span class=\"spinner\" data-v-c0b91e18></span> Uploading image...\n                </span>" : "<!---->") + "</div> <div data-v-c0b91e18><button" + _vm._ssrAttr("disabled", _vm.imageUploading || _vm.productSubmitting) + " data-v-c0b91e18>" + (_vm.productSubmitting ? "<span class=\"spinner\" data-v-c0b91e18></span>" : "<!---->") + _vm._ssrEscape("\n                    " + _vm._s(_vm.productSubmitting ? 'Submitting...' : 'Submit') + "\n                ") + "</button> <button data-v-c0b91e18>Cancel</button></div></div></div>" : "<!---->") + " <table class=\"product-table\" data-v-c0b91e18><thead data-v-c0b91e18><tr data-v-c0b91e18><th data-v-c0b91e18>Image</th> <th data-v-c0b91e18>Name</th> <th data-v-c0b91e18>Description</th> <th data-v-c0b91e18>Categories</th> <th data-v-c0b91e18>Synced</th> <th data-v-c0b91e18>Variant Count</th> <th data-v-c0b91e18>Created</th> <th data-v-c0b91e18>Updated</th> <th data-v-c0b91e18>Actions</th></tr></thead> <tbody data-v-c0b91e18>" + _vm._ssrList(_vm.products, function (product, index) {
    return "<tr data-v-c0b91e18><td data-v-c0b91e18><img" + _vm._ssrAttr("src", product.image || '/imgs/placeholder.png') + " class=\"product-thumb\" data-v-c0b91e18></td> <td data-v-c0b91e18><textarea data-v-c0b91e18>" + _vm._ssrEscape(_vm._s(product.name)) + "</textarea></td> <td data-v-c0b91e18><textarea data-v-c0b91e18>" + _vm._ssrEscape(_vm._s(product.generatedDescription)) + "</textarea></td> <td data-v-c0b91e18><textarea data-v-c0b91e18>" + _vm._ssrEscape(_vm._s(product.generatedCategoriesString)) + "</textarea></td> <td data-v-c0b91e18><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(product.synced_to_algolia) ? _vm._i(product.synced_to_algolia, null) > -1 : product.synced_to_algolia) + " data-v-c0b91e18></td> <td data-v-c0b91e18>" + _vm._ssrEscape(_vm._s(product.variantCount)) + "</td> <td data-v-c0b91e18>" + _vm._ssrEscape(_vm._s(_vm.formatDate(product.createdAt))) + "</td> <td data-v-c0b91e18>" + _vm._ssrEscape(_vm._s(_vm.formatDate(product.updatedAt))) + "</td> <td data-v-c0b91e18><button data-v-c0b91e18>" + _vm._ssrEscape("\n                            " + _vm._s(product.showVariants ? 'Hide Variants' : 'Show Variants') + "\n                        ") + "</button> <button data-v-c0b91e18>Show Categories</button> <button" + _vm._ssrAttr("disabled", product.isSaving) + " data-v-c0b91e18>" + (product.isSaving ? "<span class=\"spinner\" data-v-c0b91e18></span>" : "<!---->") + " Save\n                        </button> <button data-v-c0b91e18>Delete</button></td></tr> " + (product.showVariants ? "<tr data-v-c0b91e18><td colspan=\"9\" data-v-c0b91e18><div class=\"variant-list\" data-v-c0b91e18>" + _vm._ssrList(product.variants, function (variant) {
      return "<div class=\"variant-row\" data-v-c0b91e18><div data-v-c0b91e18><label data-v-c0b91e18>Unit</label> <textarea data-v-c0b91e18>" + _vm._ssrEscape(_vm._s(variant.unit)) + "</textarea></div> <div data-v-c0b91e18><label data-v-c0b91e18>Price</label> <input type=\"number\"" + _vm._ssrAttr("value", variant.price) + " data-v-c0b91e18></div> <div data-v-c0b91e18><label data-v-c0b91e18>Availability</label> <textarea data-v-c0b91e18>" + _vm._ssrEscape(_vm._s(variant.availability)) + "</textarea></div> <div data-v-c0b91e18><button data-v-c0b91e18>Delete Variant</button></div> <div data-v-c0b91e18><button" + _vm._ssrAttr("disabled", variant.isSaving) + " data-v-c0b91e18>" + (variant.isSaving ? "<span class=\"spinner\" data-v-c0b91e18></span>" : "<!---->") + " Save\n                                    </button></div></div>";
    }) + " <button data-v-c0b91e18>" + _vm._ssrEscape("\n                                " + _vm._s(product.showAddVariantForm ? 'Cancel' : 'Add New Variant') + "\n                            ") + "</button> " + (product.showAddVariantForm ? "<div class=\"add-variant-form\" data-v-c0b91e18><h4 data-v-c0b91e18>Add New Variant</h4> <div class=\"variant-row\" data-v-c0b91e18><div data-v-c0b91e18><label data-v-c0b91e18>Unit</label> <textarea data-v-c0b91e18>" + _vm._ssrEscape(_vm._s(product.newVariant.unit)) + "</textarea></div> <div data-v-c0b91e18><label data-v-c0b91e18>Price</label> <input type=\"number\"" + _vm._ssrAttr("value", product.newVariant.price) + " data-v-c0b91e18></div> <div data-v-c0b91e18><label data-v-c0b91e18>Availability</label> <textarea data-v-c0b91e18>" + _vm._ssrEscape(_vm._s(product.newVariant.availability)) + "</textarea></div> <div data-v-c0b91e18><label data-v-c0b91e18>Upload Image</label> <input type=\"file\" data-v-c0b91e18> " + (_vm.variantImageUploading[product._id] ? "<span class=\"loading-text\" data-v-c0b91e18><span class=\"spinner\" data-v-c0b91e18></span> Uploading image...\n                                        </span>" : "<!---->") + "</div> <div data-v-c0b91e18><button" + _vm._ssrAttr("disabled", _vm.variantImageUploading[product._id]) + " data-v-c0b91e18>\n                                            Submit\n                                        </button></div></div></div>" : "<!---->") + "</div></td></tr>" : "<!---->");
  }) + "</tbody></table> <div class=\"pagination-nav\" data-v-c0b91e18><button" + _vm._ssrAttr("disabled", _vm.page <= 1) + " data-v-c0b91e18>Previous</button> <span data-v-c0b91e18>" + _vm._ssrEscape("Page " + _vm._s(_vm.page) + " of " + _vm._s(_vm.totalPages)) + "</span> <button" + _vm._ssrAttr("disabled", _vm.page >= _vm.totalPages) + " data-v-c0b91e18>Next</button></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/dashboard.vue?vue&type=template&id=c0b91e18&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/dashboard.vue?vue&type=script&lang=js
var dashboardvue_type_script_lang_js = __webpack_require__(109);

// CONCATENATED MODULE: ./pages/admin/dashboard.vue?vue&type=script&lang=js
 /* harmony default export */ var admin_dashboardvue_type_script_lang_js = (dashboardvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/admin/dashboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(168)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_dashboardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c0b91e18",
  "2ba9d1c3"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dashboard.js.map