exports.ids = [4,16,29];
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
//# sourceMappingURL=admin-products-table.js.map