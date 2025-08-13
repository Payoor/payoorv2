exports.ids = [16];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=editable-item-table.js.map