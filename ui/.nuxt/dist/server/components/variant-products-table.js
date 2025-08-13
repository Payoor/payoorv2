exports.ids = [29];
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
//# sourceMappingURL=variant-products-table.js.map