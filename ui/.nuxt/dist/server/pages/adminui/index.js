exports.ids = [37,4,16,29];
exports.modules = {

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VariantProductsTable.vue?vue&type=template&id=03af0752
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"admintable__content\"><div class=\"admintable__headerarea\"><div class=\"admintable__headerarea--section\">" + (_vm.backFunction ? "<span class=\"admintable__headerarea--backbutton\"><svg data-v-7f082eaa><use data-v-7f082eaa xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\"></use></svg></span>" : "<!---->") + " <h1 class=\"admintable__h1\">" + _vm._ssrEscape(_vm._s(_vm.tableName)) + "</h1></div> " + (!_vm.currentItem ? "<div class=\"admintable__headerarea--section\"><button class=\"newitem\">New Item</button></div>" : "<!---->") + "</div> <div class=\"admintable__table-wrapper\"><table class=\"admintable__table\"><thead class=\"admintable__tableh\"><tr>" + _vm._ssrList(_vm.headers, function (header, index) {
    return "<th" + _vm._ssrClass(null, header.class) + "><span><span>" + _vm._ssrEscape(_vm._s(header.text)) + "</span></span></th>";
  }) + "</tr></thead> <tbody class=\"admintable__tableb\">" + _vm._ssrList(_vm.localItems, function (item, itemIndex) {
    return "<tr>" + _vm._ssrList(_vm.headers, function (header, headerIndex) {
      return "<td" + _vm._ssrClass(null, header.class) + "><div>" + (header.key === 'actions' ? "<div class=\"admintable__actions\">" + (_vm.focusedItem._id === item._id ? "<button class=\"admintable__actions--savebtn cancel\">\n                                                Cancel\n                                            </button>" : "<!---->") + " " + (_vm.focusedItem._id === item._id && item._id !== '0' && _vm.isRowDirty(item._id) || _vm.currentItem ? "<button class=\"admintable__actions--savebtn save\">\n                                                Save\n                                            </button>" : "<!---->") + " " + (_vm.focusedItem._id === item._id && item._id === `0` && item.image && item.unit && item.price && item.availability ? "<button class=\"admintable__actions--savebtn save\">Save</button>" : "<!---->") + " " + (_vm.focusedItem._id !== item._id ? "<button class=\"admintable__actions--savebtn delete\">\n                                                Delete\n                                            </button>" : "<!---->") + "</div>" : header.key === 'image' ? "<figure class=\"admintable__content--img\"><label" + _vm._ssrAttr("for", 'image-upload-' + item._id) + "><img width=\"30\" height=\"30\"" + _vm._ssrAttr("src", item.image ? item.image : '/imgs/cartlogo.png') + _vm._ssrAttr("alt", item.name) + "></label> <input" + _vm._ssrAttr("id", 'image-upload-' + item._id) + " type=\"file\" accept=\"image/*\" style=\"display: none;\"></figure>" : ['createdAt', 'updatedAt'].includes(header.key) ? "<span>" + _vm._ssrEscape(_vm._s(new Date(item[header.key]).toLocaleString())) + "</span>" : item._id === '0' ? "<input type=\"text\"" + _vm._ssrAttr("placeholder", header.key) + _vm._ssrAttr("value", item[header.key]) + _vm._ssrClass("table-input", {
        first: header.key === 'name' || header.key === 'unit',
        dirty: _vm.isKeyDirty(item._id, header.key)
      }) + ">" : "<input type=\"text\"" + _vm._ssrAttr("value", item[header.key]) + _vm._ssrClass("table-input", {
        first: header.key === 'name' || header.key === 'unit',
        dirty: _vm.isKeyDirty(item._id, header.key)
      }) + ">") + "</div></td>";
    }) + "</tr>";
  }) + "</tbody></table></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VariantProductsTable.vue?vue&type=template&id=03af0752

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

// EXTERNAL MODULE: ./mixins/admin_table.js
var admin_table = __webpack_require__(75);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VariantProductsTable.vue?vue&type=script&lang=js


















/* harmony default export */ var VariantProductsTablevue_type_script_lang_js = ({
  mixins: [admin_table["a" /* default */]],
  methods: {
    initializeItems(newValue) {
      let itemsWithNew = [...JSON.parse(JSON.stringify(newValue))];
      if (itemsWithNew.length > 0 && !this.currentItem) {
        const templateItem = itemsWithNew[0];
        const newItem = Object.keys(templateItem).reduce((acc, key) => {
          if (key === '_id') {
            acc[key] = `0`;
          } else if (key === 'image') {
            acc[key] = null;
          } else if (key === 'price') {
            acc[key] = 0;
          } else if (key === 'availability') {
            acc[key] = 'YES';
          } else if (key === 'productId') {
            acc[key] = this.parentItem._id;
            console.log('fond the prif', this.parentItem);
          } else if (['createdAt', 'updatedAt'].includes(key)) {
            acc[key] = new Date().toISOString();
          } else if (key === 'variants') {
            acc[key] = [];
          } else {
            acc[key] = '';
          }
          return acc;
        }, {});
        itemsWithNew.unshift(newItem);
      }
      const seenIds = new Set();
      const uniqueItems = itemsWithNew.filter(item => {
        const isDuplicate = seenIds.has(item._id);
        seenIds.add(item._id);
        return !isDuplicate;
      });
      this.localItems = uniqueItems;
    },
    async deleteItem(itemId) {
      if (!confirm('Are you sure you want to delete this variant?')) return;
      try {
        const res = await fetch(`${api["c" /* serverurl */]}/admin/delete-variant/${itemId}`, {
          method: 'DELETE',
          headers: this.getAuthHeaders()
        });
        await Object(api["b" /* handleFetchError */])(res);
        if (res.ok) {
          this.localItems = this.localItems.filter(item => item._id !== itemId);
          if (this.focusedItem && this.focusedItem._id === itemId) {
            this.focusedItem = {};
          }
          if (this.originalById && this.originalById[itemId]) {
            delete this.originalById[itemId];
          }
          if (this.dirtyById && this.dirtyById[itemId]) {
            if (this.$delete) this.$delete(this.dirtyById, itemId);else delete this.dirtyById[itemId];
          }
        } else {
          Object(api["d" /* showErrorMessage */])('Failed to delete variant. Please try again.');
        }
      } catch (error) {
        console.error('Delete variant error:', error);
        Object(api["d" /* showErrorMessage */])(error.message || 'Failed to delete variant');
      }
    },
    saveItem(itemToSave) {
      const updatedItem = this.localItems.find(item => item._id === itemToSave._id);
      console.log(updatedItem);
      this.saveItemToDB(updatedItem);
    },
    async saveItemToDB(itemToSave) {
      try {
        const res = await fetch(`${api["c" /* serverurl */]}/admin/update-variant/${itemToSave._id}`, {
          method: 'PUT',
          headers: this.getAuthHeaders(),
          body: JSON.stringify(itemToSave)
        });
        await Object(api["b" /* handleFetchError */])(res);
        this.focusedItem = {};
      } catch (error) {
        console.error('Update error:', error);
      }
    },
    async saveNewItemToDB() {
      try {
        const draft = this.localItems.find(i => i._id === '0') || this.localItems[0] || {};
        const productId = this.productId || draft.productId || this.editableItem && this.editableItem._id;
        console.log(productId, 'productId');
        if (!productId) {
          throw new Error('Missing productId for add-variant request');
        }
        const payload = {
          unit: draft.unit,
          price: draft.price,
          availability: draft.availability,
          image: draft.image
        };
        if (!payload.unit || !payload.price || !payload.availability || !payload.image) {
          throw new Error('All fields are required: unit, price, availability, image');
        }
        const res = await fetch(`${api["c" /* serverurl */]}/admin/add-variant/${productId}`, {
          method: 'POST',
          headers: this.getAuthHeaders(),
          body: JSON.stringify(payload)
        });
        await Object(api["b" /* handleFetchError */])(res);
        const {
          variant
        } = await res.json();
        const next = [...this.localItems];
        const idx = next.findIndex(i => i._id === '0');
        if (idx !== -1) next[idx] = variant;else next.unshift(variant);
        this.localItems = next;
        this.finalizeSaveSnapshot(variant);
        this.focusedItem = {};
        this.newItemFormOpen = false;
      } catch (error) {
        console.error('Add product error:', error);
        Object(api["d" /* showErrorMessage */])(error.message || 'Failed to add variant');
      }
    }
  }
});
// CONCATENATED MODULE: ./components/VariantProductsTable.vue?vue&type=script&lang=js
 /* harmony default export */ var components_VariantProductsTablevue_type_script_lang_js = (VariantProductsTablevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/VariantProductsTable.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VariantProductsTablevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8eb61a10"
  
)

/* harmony default export */ var VariantProductsTable = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EditableItemTable.vue?vue&type=template&id=4e22f9f6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"editabletable\"><div class=\"admintable__content\"><div class=\"admintable__table-wrapper\"><div class=\"admintable__editinputarea\"><textarea style=\"min-height: 200px;\">" + _vm._ssrEscape(_vm._s(_vm.formData['description'])) + "</textarea> <label>Product Description</label></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/EditableItemTable.vue?vue&type=template&id=4e22f9f6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EditableItemTable.vue?vue&type=script&lang=js
/* harmony default export */ var EditableItemTablevue_type_script_lang_js = ({
  props: {
    tableName: {
      type: String
    },
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    filters: {
      type: Array,
      default: () => []
    },
    hasPagination: {
      type: Boolean,
      default: false
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    },
    backFunction: {
      type: Function
    },
    editableItem: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      formData: {
        description: '',
        name: '',
        metadata: ''
      }
    };
  },
  mounted() {
    console.log(this.editableItem, 'hello fro t');
  },
  watch: {
    editableItem(newVal) {
      if (newVal) {
        console.log(this.editableItem, 'hello fro t');
        const {
          metadata,
          name
        } = this.editableItem;
        const formData = {
          metadata,
          name,
          description: ''
        };
        this.formData = formData;
      }
    }
  },
  methods: {
    saveToDB() {
      console.log(this.formData);
    }
  }
});
// CONCATENATED MODULE: ./components/EditableItemTable.vue?vue&type=script&lang=js
 /* harmony default export */ var components_EditableItemTablevue_type_script_lang_js = (EditableItemTablevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/EditableItemTable.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EditableItemTablevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "78469e58"
  
)

/* harmony default export */ var EditableItemTable = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony import */ var _components_AdminProductsTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'AdminPortal',
  components: {
    AdminProductsTable: _components_AdminProductsTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    return {
      // auth
      isAuthed: false,
      email: '',
      password: '',
      error: '',
      // dashboard state
      allAssets: [],
      tableHeaders: [{
        text: 'Image',
        key: 'image',
        class: 'fixed-column'
      }, {
        text: 'Product Name',
        key: 'name',
        class: 'fixed-column asset-column'
      }, {
        text: 'Variants',
        key: 'variantCount'
      }, {
        text: 'Metadata',
        key: 'metadata'
      }, {
        text: 'Created At',
        key: 'createdAt'
      }, {
        text: 'Updated At',
        key: 'updatedAt'
      }, {
        text: 'Actions',
        key: 'actions'
      }],
      searchQuery: '',
      //filters: ['All'], // extend as needed
      currentfilter: 'All',
      page: 1,
      limit: 10,
      totalPages: 1
    };
  },
  computed: {
    validEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    },
    canSubmit() {
      return this.validEmail && this.password.trim().length > 0;
    }
  },
  mounted() {
    if (false) {}
  },
  methods: {
    // -------- AUTH ----------
    async login() {
      this.error = '';
      if (!this.canSubmit) return;
      try {
        const response = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_1__[/* serverurl */ "c"]}/admin/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });
        await Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* handleFetchError */ "b"])(response);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Login failed');
        }
        if (false) {}
        this.isAuthed = true;
        this.fetchProducts();
      } catch (err) {
        this.error = err.message;
        this.isAuthed = false;
      }
    },
    logout() {
      if (false) {}
      // wipe state
      this.isAuthed = false;
      this.allAssets = [];
      this.email = '';
      this.password = '';
      this.error = '';
    },
    // -------- DASHBOARD ----------
    getAuthHeaders() {
      const token =  false ? undefined : '';
      return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token || ''}`
      };
    },
    setCurrent(filter) {
      this.currentfilter = filter;
      this.page = 1;
      this.fetchProducts();
    },
    async fetchProducts() {
      try {
        const query = new URLSearchParams({
          search: this.searchQuery,
          page: this.page,
          limit: this.limit
        }).toString();
        const res = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_1__[/* serverurl */ "c"]}/admin/products-with-variants?${query}`, {
          headers: this.getAuthHeaders()
        });

        // If token expired → flip back to login view gracefully
        if (res.status === 401) {
          this.logout();
          _api__WEBPACK_IMPORTED_MODULE_1__[/* showErrorMessage */ "d"] && Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* showErrorMessage */ "d"])('Session expired. Please log in again.');
          return;
        }
        await Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* handleFetchError */ "b"])(res);
        const data = await res.json();
        this.allAssets = data.products || [];
        this.totalPages = data.pages || 1;
      } catch (error) {
        console.error('Error loading products:', error);
        _api__WEBPACK_IMPORTED_MODULE_1__[/* showErrorMessage */ "d"] && Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* showErrorMessage */ "d"])(error.message || 'Failed to load products');
      }
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
    editItem(item) {
      // open editor / route / modal as you prefer
      console.log('Editing item:', item);
    },
    deleteItem(item) {
      console.log('Deleting item:', item);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)["URLSearchParams"]))

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AdminProductsTable.vue?vue&type=template&id=da75f11a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "admintable"
  }, [_vm._ssrNode("<div class=\"admintable__content\"><div class=\"admintable__headerarea\"><div class=\"admintable__headerarea--section\"><h1 class=\"admintable__h1\">" + _vm._ssrEscape(_vm._s(_vm.tableName)) + "</h1></div> " + (!_vm.currentItem ? "<div class=\"admintable__headerarea--section\"><button class=\"newitem\">New Item</button></div>" : "<!---->") + "</div> <div class=\"admintable__table-wrapper\"><table class=\"admintable__table\"><thead class=\"admintable__tableh\"><tr>" + _vm._ssrList(_vm.headers, function (header, index) {
    return "<th" + _vm._ssrClass(null, header.class) + "><span><span>" + _vm._ssrEscape(_vm._s(header.text)) + "</span></span></th>";
  }) + "</tr></thead> <tbody class=\"admintable__tableb\">" + _vm._ssrList(_vm.localItems, function (item, itemIndex) {
    return "<tr>" + _vm._ssrList(_vm.headers, function (header, headerIndex) {
      return "<td" + _vm._ssrClass(null, header.class) + "><div>" + (header.key === 'actions' ? "<div class=\"admintable__actions\">" + (!_vm.focusedItem._id && !_vm.currentItem && item._id !== `0` ? "<button class=\"admintable__actions--dropdown-button\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle> <circle cx=\"19\" cy=\"12\" r=\"1\"></circle> <circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></button>" : "<!---->") + " " + (_vm.focusedItem._id === item._id ? "<button class=\"admintable__actions--savebtn cancel\">Cancel</button>" : "<!---->") + " " + (_vm.focusedItem._id === item._id && item._id !== '0' && _vm.isRowDirty(item._id) || _vm.currentItem ? "<button class=\"admintable__actions--savebtn save\">\n                                            Save\n                                        </button>" : "<!---->") + " " + (_vm.focusedItem._id === item._id && item._id === `0` && item.image && item.name && item.metadata ? "<button class=\"admintable__actions--savebtn save\">Save</button>" : "<!---->") + " " + (_vm.currentItem ? "<button class=\"admintable__actions--savebtn close\">Close</button>" : "<!---->") + " " + (_vm.dropdownOpenItemId === item._id ? "<div class=\"admintable__actions--dropdown\"><button>View\n                                                Item</button> <button>Delete</button></div>" : "<!---->") + "</div>" : header.key === 'image' ? "<figure class=\"admintable__content--img\"><label" + _vm._ssrAttr("for", 'image-upload-' + item._id) + "><img width=\"30\" height=\"30\"" + _vm._ssrAttr("src", item.image ? item.image : '/imgs/cartlogo.png') + _vm._ssrAttr("alt", item.name) + "></label> <input" + _vm._ssrAttr("id", 'image-upload-' + item._id) + " type=\"file\" accept=\"image/*\" style=\"display: none;\"></figure>" : ['createdAt', 'updatedAt'].includes(header.key) ? "<span>" + _vm._ssrEscape(_vm._s(new Date(item[header.key]).toLocaleString())) + "</span>" : ['variantCount'].includes(header.key) ? "<span>" + _vm._ssrEscape(_vm._s(`${item[header.key]}`)) + "</span>" : item._id === '0' ? "<input type=\"text\"" + _vm._ssrAttr("id", `${header.key}-${item._id}`) + _vm._ssrAttr("placeholder", header.key) + _vm._ssrAttr("value", item[header.key]) + _vm._ssrClass("table-input", {
        first: header.key === 'name' || header.key === 'unit',
        dirty: _vm.isKeyDirty(item._id, header.key)
      }) + ">" : "<input type=\"text\"" + _vm._ssrAttr("id", `${header.key}-${item._id}`) + _vm._ssrAttr("value", item[header.key]) + _vm._ssrClass("table-input", {
        first: header.key === 'name' || header.key === 'unit',
        dirty: _vm.isKeyDirty(item._id, header.key)
      }) + ">") + "</div></td>";
    }) + "</tr>";
  }) + "</tbody></table></div></div> "), _vm.currentItem ? _vm._ssrNode("<div>", "</div>", [_c('VariantProductsTable', {
    attrs: {
      "headers": _vm.variantHeaders,
      "items": _vm.currentVariants,
      "tableName": `variants`,
      "model": 'ProductVariant',
      "parentItem": _vm.currentItem
    }
  }), _vm._ssrNode(" "), _c('EditableItemTable', {
    attrs: {
      "tableName": `Edit ${_vm.editableItem ? _vm.editableItem.name : ''}`,
      "headers": _vm.headers,
      "editableItem": _vm.editableItem,
      "items": []
    }
  })], 2) : _vm._e(), _vm._ssrNode(" " + (!_vm.currentItem ? "<div>" + (_vm.hasPagination ? "<div class=\"admintable__pagination\"><button" + _vm._ssrAttr("disabled", _vm.currentPage === 1) + " class=\"admintable__pagination--button\"><svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 192 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z\"></path></svg> Prev\n            </button> <span class=\"admintable__pagination--info\">\n                Page <strong class=\"admintable__pagination--current\">" + _vm._ssrEscape(_vm._s(_vm.currentPage)) + "</strong> of\n                <strong class=\"admintable__pagination--total\">" + _vm._ssrEscape(_vm._s(_vm.totalPages)) + "</strong></span> <button" + _vm._ssrAttr("disabled", _vm.currentPage === _vm.totalPages) + " class=\"admintable__pagination--button\">\n                Next <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 192 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z\"></path></svg></button></div>" : "<!---->") + "</div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AdminProductsTable.vue?vue&type=template&id=da75f11a

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

// EXTERNAL MODULE: ./mixins/admin_table.js
var admin_table = __webpack_require__(75);

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AdminProductsTable.vue?vue&type=script&lang=js


















/* harmony default export */ var AdminProductsTablevue_type_script_lang_js = ({
  mixins: [admin_table["a" /* default */]],
  data() {
    return {
      currentfilter: 'All',
      variantHeaders: [{
        text: 'Image',
        key: 'image',
        class: 'fixed-column'
      },
      //{ text: 'Product ID', key: 'productId', class: 'fixed-column asset-column' },
      {
        text: 'Unit',
        key: 'unit'
      }, {
        text: 'Price',
        key: 'price'
      }, {
        text: 'Availability',
        key: 'availability'
      }, {
        text: 'Created At',
        key: 'createdAt'
      }, {
        text: 'Updated At',
        key: 'updatedAt'
      }, {
        text: 'Actions',
        key: 'actions'
      }],
      currentVariants: []
    };
  },
  methods: {
    async fetchProductVariants(product_id) {
      this.currentItem = this.localItems.find(product => product._id === product_id);
      this.currentVariants = this.currentItem.variants;
      console.log(this.currentVariants);
      this.closeDropdown();
    },
    viewItem(item) {
      console.log(item, 'item here');
      this.fetchProductVariants(item._id);
      this.seteditableItem(item);
    },
    saveItem(itemToSave) {
      const updatedItem = this.localItems.find(item => item._id === itemToSave._id);
      this.saveItemToDB(updatedItem);
    },
    async saveItemToDB(itemToSave) {
      try {
        const res = await fetch(`${api["c" /* serverurl */]}/admin/update-product/${itemToSave._id}`, {
          method: 'PUT',
          headers: this.getAuthHeaders(),
          body: JSON.stringify(itemToSave)
        });
        await Object(api["b" /* handleFetchError */])(res);
        this.finalizeSaveSnapshot(itemToSave);
        this.focusedItem = {};
      } catch (error) {
        console.error('Update error:', error);
      }
    },
    async saveNewItemToDB(item) {
      try {
        const res = await fetch(`${api["c" /* serverurl */]}/admin/create-product`, {
          method: 'POST',
          headers: this.getAuthHeaders(),
          body: JSON.stringify(item)
        });
        await Object(api["b" /* handleFetchError */])(res);
        const {
          product
        } = await res.json();
        const localItems = [...this.localItems];
        localItems[0] = product;
        this.localItems = localItems;
        this.finalizeSaveSnapshot(product);
        this.currentItem = null;
        this.currentVariants = [];
        this.seteditableItem(null);
        this.focusedItem = {};
      } catch (error) {
        console.error('Add product error:', error);
      }
    },
    async deleteProduct(itemId) {
      if (!confirm('Are you sure you want to delete this product and its variants?')) return;
      try {
        const res = await fetch(`${api["c" /* serverurl */]}/admin/delete-product/${itemId}`, {
          method: 'DELETE',
          headers: this.getAuthHeaders()
        });
        await Object(api["b" /* handleFetchError */])(res);
        if (res.ok) {
          this.localItems = this.localItems.filter(item => item._id !== itemId);
          // showSuccessMessage('Product and variants deleted successfully!');
        } else {
          Object(api["d" /* showErrorMessage */])('Failed to delete product. Please try again.');
        }
      } catch (error) {
        console.error('Delete product error:', error);
      }
    },
    initializeItems(newValue) {
      let itemsWithNew = [...JSON.parse(JSON.stringify(newValue))];
      if (itemsWithNew.length > 0 && !this.currentItem) {
        const templateItem = itemsWithNew[0];
        const newItem = Object.keys(templateItem).reduce((acc, key) => {
          if (key === '_id') {
            acc[key] = `0`;
          } else if (key === 'image') {
            acc[key] = null;
          } else if (key === 'variantCount') {
            acc[key] = 0;
          } else if (['createdAt', 'updatedAt'].includes(key)) {
            acc[key] = new Date().toISOString();
          } else if (key === 'variants') {
            acc[key] = [];
          } else {
            acc[key] = '';
          }
          return acc;
        }, {});
        itemsWithNew.unshift(newItem);
      }
      const seenIds = new Set();
      const uniqueItems = itemsWithNew.filter(item => {
        const isDuplicate = seenIds.has(item._id);
        seenIds.add(item._id);
        return !isDuplicate;
      });
      this.localItems = uniqueItems;
    }
  },
  computed: {}
});
// CONCATENATED MODULE: ./components/AdminProductsTable.vue?vue&type=script&lang=js
 /* harmony default export */ var components_AdminProductsTablevue_type_script_lang_js = (AdminProductsTablevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/AdminProductsTable.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AdminProductsTablevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f16cfa4"
  
)

/* harmony default export */ var AdminProductsTable = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VariantProductsTable: __webpack_require__(107).default,EditableItemTable: __webpack_require__(108).default})


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("536b5f37", content, true, context)
};

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_12b20e20_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_12b20e20_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_12b20e20_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_12b20e20_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_12b20e20_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-12b20e20],[data-v-12b20e20]:after,[data-v-12b20e20]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-12b20e20]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-12b20e20]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-12b20e20]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-12b20e20]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-12b20e20]{font-size:65%}}body[data-v-12b20e20]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-12b20e20]{padding:0}}[data-v-12b20e20]::-moz-selection{background-color:#249b48;color:#fff}[data-v-12b20e20]::selection{background-color:#249b48;color:#fff}[data-v-12b20e20]::-webkit-scrollbar{height:8px;width:8px}[data-v-12b20e20]::-webkit-scrollbar-track{background:transparent}[data-v-12b20e20]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-12b20e20]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-12b20e20]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-12b20e20{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-12b20e20{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-12b20e20{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}@keyframes spin-12b20e20{to{transform:rotate(1turn)}}.slide-in-left[data-v-12b20e20]{animation:slide-in-left-12b20e20 .5s ease-out forwards}.button-primary[data-v-12b20e20]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-12b20e20]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-12b20e20]{opacity:.4}.floating-element[data-v-12b20e20]{animation:float-12b20e20 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-12b20e20]{height:100vh!important;overflow:hidden!important}.spinner[data-v-12b20e20]{animation:spin-12b20e20 1s linear infinite;border:4px solid rgba(36,155,72,.3);border-radius:50%;border-top-color:#249b48;height:3rem;width:3rem}.spinner.path[data-v-12b20e20]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-12b20e20]{filter:blur(3px)}.error-message[data-v-12b20e20]{animation:slideFadeInUp-12b20e20 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-12b20e20]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.table-input[data-v-12b20e20]{background:transparent;border:none;color:#fff;outline:none;text-align:right}.table-input.first[data-v-12b20e20]{text-align:left}.landing[data-v-12b20e20]{overflow-x:hidden}.landing__top[data-v-12b20e20]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-12b20e20]{display:flex}}.landing__topleft[data-v-12b20e20]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-12b20e20]{display:block;width:100%}}.landing__topleft--auth[data-v-12b20e20]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-12b20e20]{padding:0;width:auto}}.landing__topright[data-v-12b20e20],.landing__topright--img[data-v-12b20e20]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-12b20e20]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-12b20e20]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-12b20e20]{display:none}}.landing__content[data-v-12b20e20]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-12b20e20]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-12b20e20]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-12b20e20]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-12b20e20]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable[data-v-12b20e20]{color:#fff;font-weight:500}@media (max-width:480px){.admintable[data-v-12b20e20]{overflow:hidden}}.admintable__top[data-v-12b20e20]{margin-bottom:2rem}@media (max-width:480px){.admintable__top[data-v-12b20e20]{align-items:flex-start;flex-direction:column}}.admintable__top--pills[data-v-12b20e20]{display:flex;overflow:hidden}@media (max-width:480px){.admintable__top--pills[data-v-12b20e20]{margin-top:1rem;overflow-x:scroll;scrollbar-width:none;width:100vw;-ms-overflow-style:none}.admintable__top--pills[data-v-12b20e20]::-webkit-scrollbar{display:none;height:6px}.admintable__top--pills[data-v-12b20e20]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__top--pills[data-v-12b20e20]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__top--button[data-v-12b20e20]{background:transparent;border:.4px solid #d4d4d4;border-radius:.4rem;cursor:pointer;font-size:1.3rem;margin-left:.5rem;padding:.5rem 1rem;transition:all .5s ease}.admintable__top--button.current[data-v-12b20e20]{background:rgba(64,64,64,.1);font-weight:500}.admintable__top--button[data-v-12b20e20]:hover{background:rgba(64,64,64,.1)}@media (max-width:480px){.admintable__top--button[data-v-12b20e20]{margin-left:0;margin-right:.5rem}}.admintable__searchinput[data-v-12b20e20]{align-items:center;background:rgba(64,64,64,.1);border-radius:.5rem;display:flex;overflow:hidden;padding:.5rem}@media (max-width:480px){.admintable__searchinput[data-v-12b20e20]{padding:.6rem}}.admintable__searchinput svg[data-v-12b20e20]{height:1.2rem;width:1.2rem;fill:#fff;color:#fff;margin-right:.5rem}@media (max-width:480px){.admintable__searchinput svg[data-v-12b20e20]{height:1.7rem;width:1.7rem}}.admintable__searchinput input[data-v-12b20e20]{background:transparent;border:none;color:#fff;font-size:1.2rem;outline:none;width:30rem}@media (max-width:480px){.admintable__searchinput input[data-v-12b20e20]{font-size:1.2rem}}.admintable__content--link[data-v-12b20e20]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.admintable__content--asset[data-v-12b20e20]{align-items:center;display:flex}.admintable__content--asset a[data-v-12b20e20]{-webkit-text-decoration:none;text-decoration:none}.admintable__content--img[data-v-12b20e20]{border:.3px solid hsla(0,0%,100%,.5);border-radius:100%;cursor:pointer;height:2.3rem;margin-right:.5rem;overflow:hidden;width:2.3rem}.admintable__content--img img[data-v-12b20e20]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.admintable__content--assetname[data-v-12b20e20]{display:flex;flex-direction:column;line-height:1.5rem}.admintable__content--assetname span[data-v-12b20e20]{text-transform:uppercase}.admintable__content--assetname span.name[data-v-12b20e20]{text-transform:capitalize}.admintable__content--assetname span.ticker[data-v-12b20e20]{color:hsla(0,0%,100%,.5);font-size:.9rem;font-weight:500}.admintable__headerarea[data-v-12b20e20]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:2rem}.admintable__headerarea--backbutton[data-v-12b20e20]{align-items:center;display:flex;margin-right:.5rem}.admintable__headerarea--backbutton svg[data-v-12b20e20]{fill:#fff;height:1.5rem;width:1.5rem}.admintable__headerarea--section[data-v-12b20e20]{align-items:center;display:flex}.admintable__headerarea--section button[data-v-12b20e20]{background:red;border:none;border-radius:.3rem;color:#000;color:#fff;cursor:pointer;font-size:1.2rem;font-weight:600;margin-left:1.3rem;outline:none;padding:.5rem}.admintable__headerarea--section button.newitem[data-v-12b20e20]{background:#249b48}.admintable__headerarea--section button.logout[data-v-12b20e20]{background:transparent}.admintable__headerarea--section button.logout[data-v-12b20e20]:hover{-webkit-text-decoration:underline;text-decoration:underline}.admintable__h1[data-v-12b20e20]{font-size:1.5rem;font-weight:500;text-transform:capitalize}@media (max-width:480px){.admintable__table-wrapper[data-v-12b20e20]{overflow-x:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none;width:100%;-ms-overflow-style:none}.admintable__table-wrapper[data-v-12b20e20]::-webkit-scrollbar{display:none;height:6px}.admintable__table-wrapper[data-v-12b20e20]::-webkit-scrollbar-thumb{background-color:transparent;border:none;border-radius:10px}.admintable__table-wrapper[data-v-12b20e20]::-webkit-scrollbar-thumb:hover{background-color:transparent}}.admintable__table[data-v-12b20e20]{border-collapse:separate;border-spacing:0 1rem;font-size:1.2rem;margin-top:2rem;width:100%}.admintable__table td[data-v-12b20e20],.admintable__table th[data-v-12b20e20]{margin-bottom:2rem;padding-bottom:.3rem;text-align:right}.admintable__table td[data-v-12b20e20]:first-child,.admintable__table td[data-v-12b20e20]:nth-child(2),.admintable__table th[data-v-12b20e20]:first-child,.admintable__table th[data-v-12b20e20]:nth-child(2){text-align:left}.admintable__table td[data-v-12b20e20]{border-bottom:1px solid #fff}.admintable__table th[data-v-12b20e20]:first-child{width:4%}.admintable__table th[data-v-12b20e20]:nth-child(2){width:18%}.admintable__table th[data-v-12b20e20]:nth-child(3){width:2%}.admintable__table th[data-v-12b20e20]:nth-child(4){width:10%}.admintable__table th[data-v-12b20e20]:nth-child(5),.admintable__table th[data-v-12b20e20]:nth-child(6){width:12%}.admintable__table th[data-v-12b20e20]:nth-child(7),.admintable__table th[data-v-12b20e20]:nth-child(8),.admintable__table th[data-v-12b20e20]:nth-child(9){width:8%}.admintable__table th[data-v-12b20e20]:nth-child(10){width:18%}@media (max-width:480px){.admintable__table[data-v-12b20e20]{min-width:600px;width:auto}.admintable__table .fixed-column[data-v-12b20e20]{background-color:#fff;left:0;position:sticky;z-index:10}.admintable__table .asset-column[data-v-12b20e20]{left:10px}.admintable__table td[data-v-12b20e20]:first-child,.admintable__table th[data-v-12b20e20]:first-child{font-size:1rem;min-width:10px;width:10px}.admintable__table td[data-v-12b20e20]:nth-child(2),.admintable__table th[data-v-12b20e20]:nth-child(2){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-12b20e20]:nth-child(3),.admintable__table th[data-v-12b20e20]:nth-child(3){display:none;width:0}.admintable__table td[data-v-12b20e20]:nth-child(4),.admintable__table th[data-v-12b20e20]:nth-child(4){font-size:1.1rem;min-width:120px;width:120px}.admintable__table td[data-v-12b20e20]:nth-child(5),.admintable__table td[data-v-12b20e20]:nth-child(6),.admintable__table td[data-v-12b20e20]:nth-child(8),.admintable__table td[data-v-12b20e20]:nth-child(9),.admintable__table th[data-v-12b20e20]:nth-child(5),.admintable__table th[data-v-12b20e20]:nth-child(6),.admintable__table th[data-v-12b20e20]:nth-child(8),.admintable__table th[data-v-12b20e20]:nth-child(9){display:none;width:0}.admintable__table td[data-v-12b20e20]:nth-child(7),.admintable__table th[data-v-12b20e20]:nth-child(7){font-size:1.1rem;min-width:100px;width:100px}.admintable__table td[data-v-12b20e20]:nth-child(10),.admintable__table th[data-v-12b20e20]:nth-child(10){min-width:150px;width:150px}}.admintable__table tr[data-v-12b20e20]:hover{background:hsla(0,0%,100%,.1);padding:0 .2rem;transition:all .4s ease}.admintable__editinputarea[data-v-12b20e20]{display:flex;flex-direction:column;justify-content:start}.admintable__editinputarea input[data-v-12b20e20],.admintable__editinputarea textarea[data-v-12b20e20]{background:transparent;border:.3px solid hsla(0,0%,100%,.5);color:#fff;font-size:1.4rem;outline:none;padding:1rem}.admintable__editinputarea label[data-v-12b20e20]{font-size:1rem;font-weight:500;margin-top:1rem}.admintable__editinputimgarea[data-v-12b20e20]{margin-top:2rem}.admintable__editinputimgarea figure[data-v-12b20e20]{border-radius:1rem;height:10rem;width:10rem}.admintable__pagination[data-v-12b20e20]{align-items:center;display:flex;font-size:1.2rem;gap:1.5rem;justify-content:center;padding-top:2rem}.admintable__pagination--button[data-v-12b20e20]{align-items:center;background:transparent;border:1px solid #d4d4d4;border-radius:.4rem;color:#fff;cursor:pointer;display:flex;font-size:1.2rem;gap:.5rem;padding:.75rem 1rem}.admintable__pagination--button[data-v-12b20e20]:hover:not(:disabled){background:rgba(64,64,64,.1)}.admintable__pagination--button[data-v-12b20e20]:disabled{background-color:transparent;cursor:not-allowed;opacity:.4}.admintable__pagination--button svg[data-v-12b20e20]{height:.8rem;width:.8rem;fill:currentColor}.admintable__pagination--info[data-v-12b20e20]{align-items:center;color:#fff;display:flex;gap:.25rem}.admintable__pagination--current[data-v-12b20e20],.admintable__pagination--total[data-v-12b20e20]{color:#fff;font-weight:600}.admintable__actions[data-v-12b20e20]{position:relative}.admintable__actions--dropdown-button[data-v-12b20e20]{background:transparent;border:none;cursor:pointer;padding:.4rem}.admintable__actions--dropdown-button svg[data-v-12b20e20]{color:#555;height:1.5rem;width:1.5rem}.admintable__actions--dropdown[data-v-12b20e20]{background-color:#fff;border:1px solid #ddd;border-radius:.4rem;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;flex-direction:column;min-width:120px;overflow:hidden;position:absolute;right:0;top:100%;z-index:20}.admintable__actions--dropdown button[data-v-12b20e20]{background:transparent;border:none;cursor:pointer;padding:.8rem 1rem;text-align:left;transition:background-color .2s ease}.admintable__actions--dropdown button[data-v-12b20e20]:hover{background-color:#f4f4f4}.admintable__actions--savebtn[data-v-12b20e20]{background:#249b48;border:none;border-radius:.3rem;color:#000;cursor:pointer;font-size:1.2rem;font-weight:500;height:100%;padding:.1rem}.admintable__actions--savebtn.cancel[data-v-12b20e20]{background:hsla(0,0%,100%,.5)}.admintable__actions--savebtn.close[data-v-12b20e20]{background:transparent;border:.2px solid #249b48;color:#249b48}.admintable__actions--savebtn.save[data-v-12b20e20]{color:#fff}.admintable__actions--savebtn.delete[data-v-12b20e20]{background:red;color:#fff}.adminlogin__content[data-v-12b20e20]{align-items:center;background:#f7f7f7;display:flex;justify-content:center;min-height:100vh;padding:2rem}.adminlogin__form[data-v-12b20e20]{background:#fff;border-radius:1.5rem;box-shadow:0 0 10px rgba(0,0,0,.1);max-width:400px;padding:3rem;width:100%}.adminlogin__title[data-v-12b20e20]{font-size:2rem;margin-bottom:2rem;text-align:center}.adminlogin__field[data-v-12b20e20]{margin-bottom:1.5rem}.adminlogin__field label[data-v-12b20e20]{display:block;font-weight:600;margin-bottom:.5rem}.adminlogin__field input[data-v-12b20e20]{border:1px solid #ccc;border-radius:.8rem;font-size:1rem;padding:.8rem;width:100%}.adminlogin .button-primary[data-v-12b20e20]{border:none;border-radius:1rem;color:#fff;cursor:pointer;font-size:1.2rem;padding:1rem;transition:background .3s;width:100%}.adminlogin .button-primary[data-v-12b20e20]:disabled{background:#a0a0a0;cursor:not-allowed}.adminlogin .button-primary[data-v-12b20e20]:hover:not(:disabled){background:#0056b3}.adminlogin__error[data-v-12b20e20]{color:red;font-size:1rem;margin-top:1rem;text-align:center}.adminlogin__error-msg[data-v-12b20e20]{color:#d9534f;display:block;font-size:.9rem;margin-top:.2rem}.adminui[data-v-12b20e20]{background:rgba(0,0,0,.9);min-height:100vh;padding:4rem 30rem}.admintable__top[data-v-12b20e20]{align-items:center;display:flex;gap:1rem;justify-content:space-between}.admintable__top--side.left[data-v-12b20e20]{flex:1}.admintable__top--side.right[data-v-12b20e20]{align-items:center;display:flex;gap:1rem}.admintable__top--pills .admintable__top--button[data-v-12b20e20]{border-radius:1rem;padding:.4rem .8rem}.logout[data-v-12b20e20]{background:#444;border-radius:.6rem;color:#fff;padding:.5rem .9rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/adminui/index.vue?vue&type=template&id=12b20e20&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [!_vm.isAuthed ? _vm._ssrNode("<div class=\"adminlogin\" data-v-12b20e20>", "</div>", [_vm._ssrNode("<div class=\"adminlogin__content\" data-v-12b20e20><div class=\"adminlogin__form\" data-v-12b20e20><h2 class=\"adminlogin__title\" data-v-12b20e20>Admin Login</h2> <form data-v-12b20e20><div class=\"adminlogin__field\" data-v-12b20e20><label for=\"email\" data-v-12b20e20>Email</label> <input type=\"email\" id=\"email\" required=\"required\"" + _vm._ssrAttr("value", _vm.email) + " data-v-12b20e20> " + (_vm.email && !_vm.validEmail ? "<small class=\"adminlogin__error-msg\" data-v-12b20e20>\n                            Please enter a valid email.\n                        </small>" : "<!---->") + "</div> <div class=\"adminlogin__field\" data-v-12b20e20><label for=\"password\" data-v-12b20e20>Password</label> <input type=\"password\" id=\"password\" required=\"required\"" + _vm._ssrAttr("value", _vm.password) + " data-v-12b20e20></div> <button type=\"submit\"" + _vm._ssrAttr("disabled", !_vm.canSubmit) + " class=\"button-primary\" data-v-12b20e20>\n                        Login\n                    </button></form> " + (_vm.error ? "<p class=\"adminlogin__error\" data-v-12b20e20>" + _vm._ssrEscape(_vm._s(_vm.error)) + "</p>" : "<!---->") + "</div></div>")], 2) : _vm._ssrNode("<div class=\"adminui\" data-v-12b20e20>", "</div>", [_vm._ssrNode("<div class=\"admintable__top\" data-v-12b20e20><div class=\"admintable__top--side left\" data-v-12b20e20><div class=\"admintable__searchinput\" data-v-12b20e20><svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\" data-v-12b20e20><path fill=\"none\" d=\"M0 0h24v24H0V0z\" data-v-12b20e20></path> <path d=\"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\" data-v-12b20e20></path></svg> <input type=\"text\" placeholder=\"Search products by name...\"" + _vm._ssrAttr("value", _vm.searchQuery) + " data-v-12b20e20></div></div> <div class=\"admintable__top--side right\" data-v-12b20e20><div class=\"admintable__top--pills right\" data-v-12b20e20>" + _vm._ssrList(_vm.filters, function (filter, index) {
    return "<button" + _vm._ssrClass("admintable__top--button", {
      current: _vm.currentfilter === filter
    }) + " data-v-12b20e20><span data-v-12b20e20>" + _vm._ssrEscape(_vm._s(filter)) + "</span></button>";
  }) + "</div> <button class=\"logout\" data-v-12b20e20>Log out</button></div></div> "), _vm._ssrNode("<div data-v-12b20e20>", "</div>", [_c('AdminProductsTable', {
    attrs: {
      "headers": _vm.tableHeaders,
      "items": _vm.allAssets,
      "has-pagination": true,
      "tableName": 'Products',
      "current-page": _vm.page,
      "total-pages": _vm.totalPages,
      "model": 'NewProduct'
    },
    on: {
      "prev-page": _vm.prevPage,
      "next-page": _vm.nextPage,
      "edit-item": _vm.editItem,
      "delete-item": _vm.deleteItem
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/adminui/index.vue?vue&type=template&id=12b20e20&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/adminui/index.vue?vue&type=script&lang=js
var adminuivue_type_script_lang_js = __webpack_require__(111);

// CONCATENATED MODULE: ./pages/adminui/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_adminuivue_type_script_lang_js = (adminuivue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/adminui/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(157)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminuivue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "12b20e20",
  "fe746ed6"
  
)

/* harmony default export */ var adminui = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AdminProductsTable: __webpack_require__(121).default})


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    tableName: {
      type: String
    },
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    filters: {
      type: Array,
      default: () => []
    },
    hasPagination: {
      type: Boolean,
      default: false
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    },
    backFunction: {
      type: Function
    },
    model: {
      type: String
    },
    parentItem: {
      type: Object
    }
  },
  data() {
    return {
      dropdownOpenItemId: null,
      currentItem: null,
      editableItem: null,
      focusedItem: {},
      prevFocusedItem: null,
      localItems: [],
      newItemFormOpen: false,
      originalById: {},
      dirtyById: {}
    };
  },
  created() {
    this.localItems = JSON.parse(JSON.stringify(this.visibleItems));
  },
  computed: {
    visibleItems() {
      if (!this.currentItem) {
        return this.items;
      }
      return [this.currentItem];
    }
  },
  watch: {
    focusedItem: {
      handler(newValue, oldValue) {
        if (oldValue && Object.keys(oldValue).length > 0) {
          this.prevFocusedItem = JSON.parse(JSON.stringify(oldValue));
        }
        console.log('focusedItem has changed. Old value stored in prevFocusedItem:', this.prevFocusedItem);
      },
      deep: true
    },
    visibleItems(newValue) {
      this.newItemFormOpen = false;
      this.localItems = JSON.parse(JSON.stringify(newValue));
    },
    newItemFormOpen(newValue) {
      if (newValue) {
        this.initializeItems(this.localItems);
        this.focusedItem = this.localItems[0];
      } else {
        this.localItems = JSON.parse(JSON.stringify(this.visibleItems));
      }
    }
  },
  methods: {
    getAuthHeaders() {
      const token = localStorage.getItem('admin_token');
      return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      };
    },
    setCurrent(filter) {
      this.currentfilter = filter;
    },
    seteditableItem(item) {
      this.editableItem = item;
      console.log(this.editableItem);
    },
    toggleDropdown(item) {
      if (this.dropdownOpenItemId === item._id) {
        this.dropdownOpenItemId = null;
      } else {
        this.dropdownOpenItemId = item._id;
      }
    },
    closeDropdown(event) {
      this.dropdownOpenItemId = null;
    },
    setFocused({
      item,
      inputId
    }) {
      this.focusedItem = item;
      this.dropdownOpenItemId = null;
      this.$nextTick(() => {
        const el = document.getElementById(inputId);
        if (el) el.focus();
      });
      this.ensureOriginalSnapshot(item);
      if (this.focusedItem._id !== `0`) {
        this.closeNewItemForm();
      }
    },
    openNewItemForm() {
      //this.closeItem();
      this.newItemFormOpen = true;
    },
    closeNewItemForm() {
      this.newItemFormOpen = false;
    },
    closeItem() {
      this.currentItem = null;
      this.currentVariants = [];
      this.seteditableItem(null);
      this.focusedItem = {};
      this.closeNewItemForm();
    },
    async handleImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append('image', file);
      this.imageUploading = true;
      const fullId = event.target.id;
      const itemId = fullId.split('-').pop();
      try {
        const response = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__[/* serverurl */ "c"]}/admin/upload-image?itemId=${itemId}&model=${this.model}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('admin_token')}`
          },
          body: formData
        });
        await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* handleFetchError */ "b"])(response);
        const data = await response.json();
        if (data.url) {
          const itemIndex = this.localItems.findIndex(item => item._id === itemId);
          if (itemIndex !== -1) {
            const updatedItems = [...this.localItems];
            const updatedItem = {
              ...updatedItems[itemIndex],
              image: data.url
            };
            updatedItems[itemIndex] = updatedItem;
            this.localItems = updatedItems;
          }
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
    cloneDeep(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
    ensureOriginalSnapshot(item) {
      const id = item._id;
      if (!this.originalById[id]) {
        this.originalById[id] = this.cloneDeep(item);
        this.$set(this.dirtyById, id, {});
      }
    },
    isKeyDirty(id, key) {
      const map = this.dirtyById[id];
      return !!(map && map[key]);
    },
    isRowDirty(id) {
      const map = this.dirtyById[id];
      return !!map && Object.keys(map).length > 0;
    },
    onFieldInput(id, key) {
      var _this$originalById$id;
      const idx = this.localItems.findIndex(i => i._id === id);
      if (idx === -1) return;
      const original = (_this$originalById$id = this.originalById[id]) === null || _this$originalById$id === void 0 ? void 0 : _this$originalById$id[key];
      const current = this.localItems[idx][key];
      if (!this.dirtyById[id]) this.$set(this.dirtyById, id, {});
      const equal = JSON.stringify(original) === JSON.stringify(current);
      if (!equal) {
        this.$set(this.dirtyById[id], key, true);
      } else {
        if (this.dirtyById[id][key]) this.$delete(this.dirtyById[id], key);
      }
    },
    finalizeSaveSnapshot(item) {
      const id = item._id;
      this.originalById[id] = this.cloneDeep(item);
      this.$set(this.dirtyById, id, {});
    }
  }
});

/***/ })

};;
//# sourceMappingURL=index.js.map