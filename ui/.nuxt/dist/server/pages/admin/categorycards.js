exports.ids = [26];
exports.modules = {

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("742fa21e", content, true, context)
};

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorycards_vue_vue_type_style_index_0_id_54992c87_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorycards_vue_vue_type_style_index_0_id_54992c87_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorycards_vue_vue_type_style_index_0_id_54992c87_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorycards_vue_vue_type_style_index_0_id_54992c87_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categorycards_vue_vue_type_style_index_0_id_54992c87_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-54992c87],[data-v-54992c87]:after,[data-v-54992c87]:before{box-sizing:inherit;margin:0;padding:0}html[data-v-54992c87]{background:#249b48;font-size:62.5%}@media only screen and (max-width:75em){html[data-v-54992c87]{font-size:56.25%}}@media only screen and (max-width:56.25em){html[data-v-54992c87]{font-size:55%}}@media only screen and (max-width:37.5em){html[data-v-54992c87]{font-size:50%}}@media only screen and (min-width:112.5em){html[data-v-54992c87]{font-size:65%}}body[data-v-54992c87]{background:#249b48;box-sizing:border-box;display:none;font-family:\"Poppins\",sans-serif}@media only screen and (max-width:56.25em){body[data-v-54992c87]{padding:0}}[data-v-54992c87]::-moz-selection{background-color:#249b48;color:#fff}[data-v-54992c87]::selection{background-color:#249b48;color:#fff}[data-v-54992c87]::-webkit-scrollbar{height:8px;width:8px}[data-v-54992c87]::-webkit-scrollbar-track{background:transparent}[data-v-54992c87]::-webkit-scrollbar-thumb{background-color:#249b48;border:none;border-radius:10px}[data-v-54992c87]::-webkit-scrollbar-thumb:hover{background-color:#1a7235}*[data-v-54992c87]{scrollbar-color:#249b48 transparent;scrollbar-width:thin}@keyframes slideFadeInUp-54992c87{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left-54992c87{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes float-54992c87{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.slide-in-left[data-v-54992c87]{animation:slide-in-left-54992c87 .5s ease-out forwards}.button-primary[data-v-54992c87]{background:#249b48;border:none;border-radius:1rem;color:#fff;font-weight:500;outline:none;padding:1rem}.transparent-button[data-v-54992c87]{background:transparent;border:1px solid #249b48;color:#249b48}.disabled-btn[data-v-54992c87]{opacity:.4}.floating-element[data-v-54992c87]{animation:float-54992c87 3s ease-in-out infinite;animation-delay:0s;transition:transform .2s ease}.no-scroll[data-v-54992c87]{height:100vh!important;overflow:hidden!important}.spinner[data-v-54992c87]{animation:spin-54992c87 1s linear infinite;border:4px solid rgba(36,155,72,.3);height:3rem;width:3rem}.spinner.path[data-v-54992c87]{stroke:#249b48;stroke-linecap:round}.blur-effect[data-v-54992c87]{filter:blur(3px)}.error-message[data-v-54992c87]{animation:slideFadeInUp-54992c87 .5s ease-out forwards;background:#fff;border-radius:1rem;bottom:15rem;color:red;font-size:1.48rem;font-weight:500;left:0;line-height:2.1rem;margin:2rem 16px;padding:2rem;position:fixed;right:0;z-index:30}.error-message-timeout-bar[data-v-54992c87]{background-color:#249b48;bottom:0;height:4px;left:0;position:absolute;transition:width 4s linear;width:100%}.landing[data-v-54992c87]{overflow-x:hidden}.landing__top[data-v-54992c87]{background:#b6edf2;display:grid;grid-template-columns:repeat(2,1fr);height:100vh;left:0;position:fixed;top:0;width:100%}@media only screen and (max-width:56.25em){.landing__top[data-v-54992c87]{display:flex}}.landing__topleft[data-v-54992c87]{display:flex;justify-content:center}@media only screen and (max-width:56.25em){.landing__topleft[data-v-54992c87]{display:block;width:100%}}.landing__topleft--auth[data-v-54992c87]{padding:0 10rem;width:100rem}@media only screen and (max-width:56.25em){.landing__topleft--auth[data-v-54992c87]{padding:0;width:auto}}.landing__topright[data-v-54992c87],.landing__topright--img[data-v-54992c87]{align-items:center;display:flex;justify-content:center}.landing__topright--img[data-v-54992c87]{transform:scale(1.1);width:100rem}.landing__topright--img img[data-v-54992c87]{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}@media only screen and (max-width:56.25em){.landing__topright[data-v-54992c87]{display:none}}.landing__content[data-v-54992c87]{background:#249b48;margin-top:90rem;position:relative}.landing__seemore[data-v-54992c87]{bottom:10rem;display:flex;justify-content:center;left:0;position:absolute;width:100%}.landing__seemore button[data-v-54992c87]{background:transparent;border:1px solid #fff;border-radius:3rem;color:#fff;cursor:pointer;font-size:1.4rem;font-weight:600;padding:1rem 4rem}.landing__cloud[data-v-54992c87]{bottom:0;height:34rem;position:absolute;transform:scale(1.1);width:100vw;z-index:3}.landing__cloud img[data-v-54992c87]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.spinner[data-v-54992c87]{animation:spin-54992c87 .6s linear infinite;border:2px solid #ccc;border-radius:50%;border-top-color:#249b48;display:inline-block;height:16px;margin-right:.4rem;width:16px}@keyframes spin-54992c87{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.search-bar[data-v-54992c87]{margin-bottom:1.5rem}.search-bar input[type=text][data-v-54992c87]{border:1px solid #ccc;border-radius:.4rem;font-size:1.2rem;outline:none;padding:.8rem 1rem;width:100%}.admin-category-dashboard[data-v-54992c87]{background:#fff;min-height:100vh;overflow-x:auto;padding:2rem}.add-category-form[data-v-54992c87]{background:#fff;border:1px solid #ddd;border-radius:1rem;box-shadow:0 0 15px rgba(0,0,0,.2);left:50%;max-width:600px;padding:2rem;position:fixed;top:10%;transform:translateX(-50%);width:90%;z-index:999}.add-category-form div[data-v-54992c87],.add-category-form h2[data-v-54992c87]{margin-bottom:1rem}.add-category-form input[type=file][data-v-54992c87],.add-category-form input[type=text][data-v-54992c87],.add-category-form textarea[data-v-54992c87]{border:1px solid #ccc;border-radius:.4rem;font-size:1.2rem;padding:.8rem;resize:vertical;width:100%}.add-category-form button[data-v-54992c87]{background:#249b48;border:none;border-radius:.4rem;color:#fff;cursor:pointer;font-size:1.2rem;margin-right:1rem;padding:.6rem 1.2rem}.add-category-form button[data-v-54992c87]:disabled{background-color:#ccc;cursor:not-allowed}.add-category-form-overlay[data-v-54992c87]{background:rgba(0,0,0,.6);height:100vh;left:0;position:fixed;top:0;width:100vw}.add-category-form span.loading-text[data-v-54992c87]{color:#888;display:inline-block;font-size:.95rem;margin-top:.5rem}.dashboard-header[data-v-54992c87]{align-items:center;border-bottom:1px solid #ccc;display:flex;justify-content:space-between;margin-bottom:1.5rem;padding-bottom:1.5rem}.dashboard-header h1[data-v-54992c87]{font-size:2rem;font-weight:700;margin:0}.dashboard-header h1[data-v-54992c87],.dashboard-header h1 span[data-v-54992c87]{align-items:center;display:flex}.dashboard-header h1 span svg[data-v-54992c87]{cursor:pointer;height:2rem;width:3rem}.dashboard-header .dashboard-actions[data-v-54992c87]{display:flex;gap:1rem}.dashboard-header .dashboard-actions button[data-v-54992c87]{background:#249b48;border:none;border-radius:.4rem;color:#fff;cursor:pointer;font-size:1.2rem;padding:.6rem 1.2rem}.dashboard-header .dashboard-actions button[data-v-54992c87]:last-child{background:#dc3545}.category-table[data-v-54992c87]{border-collapse:collapse;font-size:1.3rem;width:100%}.category-table td[data-v-54992c87],.category-table th[data-v-54992c87]{border:1px solid #ddd;padding:.8rem;text-align:left;vertical-align:top}.category-table th[data-v-54992c87]{background-color:#f4f4f4;font-weight:700}.category-table input[type=text][data-v-54992c87],.category-table textarea[data-v-54992c87]{border:1px solid #eee;font-family:inherit;font-size:1.2rem;min-height:3rem;outline:none;padding:.4rem;resize:vertical;width:100%}.category-table button[data-v-54992c87]{background:#007bff;border:none;border-radius:.3rem;color:#fff;cursor:pointer;font-size:1.2rem;margin-right:.5rem;margin-top:.3rem;padding:.5rem 1rem}.category-table button[data-v-54992c87]:last-child{background:#dc3545}.category-table button[data-v-54992c87]:disabled{background-color:#ccc;cursor:not-allowed}.category-thumb[data-v-54992c87]{border-radius:.5rem;height:3rem;-o-object-fit:cover;object-fit:cover;width:3rem}.loading-row[data-v-54992c87],.no-categories[data-v-54992c87]{color:#666;font-size:1.4rem;padding:2rem;text-align:center}.loading-row[data-v-54992c87]{align-items:center;display:flex;gap:.5rem;justify-content:center}.category-pills-section[data-v-54992c87]{border-top:1px solid #eee;margin-bottom:2rem;margin-top:1.5rem;padding-top:1.5rem}.view-more-button[data-v-54992c87]{background:#6c757d;border:none;border-radius:.5rem;color:#fff;cursor:pointer;font-size:1.1rem;padding:.7rem 1.5rem;transition:background-color .2s ease}.view-more-button[data-v-54992c87]:hover{background-color:#5a6268}.category-pills-container[data-v-54992c87]{background-color:#f9f9f9;border:1px solid #e0e0e0;border-radius:.8rem;display:flex;flex-wrap:wrap;gap:.8rem;margin-top:1rem;padding:1rem}.category-pill[data-v-54992c87]{align-items:center;background-color:#249b48;border-radius:20px;box-shadow:0 2px 4px rgba(0,0,0,.1);color:#fff;cursor:pointer;display:inline-flex;font-size:.95rem;font-weight:600;padding:.5rem 1rem;text-shadow:0 1px 2px rgba(0,0,0,.2);transition:transform .2s ease;white-space:nowrap}.category-pill[data-v-54992c87]:hover{transform:translateY(-2px)}.no-categories-pills[data-v-54992c87]{color:#888;font-style:italic;padding:1rem 0;text-align:center;width:100%}.category-details-overlay[data-v-54992c87]{align-items:center;background:rgba(0,0,0,.6);display:flex;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:1000}.category-details-popup[data-v-54992c87]{background:#fff;border-radius:1rem;box-shadow:0 0 20px rgba(0,0,0,.3);max-width:500px;padding:2rem;text-align:center;width:90%}.category-details-popup h2[data-v-54992c87]{color:#333;font-size:1.8rem;margin-bottom:1rem;margin-top:0}.category-details-popup .description-text[data-v-54992c87]{color:#555;font-size:1.1rem;line-height:1.6;margin-bottom:1.5rem}.category-details-popup .button-group[data-v-54992c87]{display:flex;gap:1rem;justify-content:center}.category-details-popup .button-group button[data-v-54992c87]{border:none;border-radius:.5rem;cursor:pointer;font-size:1.1rem;padding:.8rem 1.5rem;transition:background-color .2s ease}.category-details-popup .button-group button[data-v-54992c87]:first-child{background:#249b48;color:#fff}.category-details-popup .button-group button[data-v-54992c87]:first-child:hover{background-color:#1a7235}.category-details-popup .button-group button.cancel-button[data-v-54992c87]{background:#6c757d;color:#fff}.category-details-popup .button-group button.cancel-button[data-v-54992c87]:hover{background-color:#5a6268}.remove-button[data-v-54992c87]{background-color:#ffc107!important;color:#333!important}.remove-button[data-v-54992c87]:hover{background-color:#d39e00!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/categorycards.vue?vue&type=template&id=54992c87&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "admin-category-dashboard"
  }, [_vm._ssrNode("<div class=\"dashboard-header\" data-v-54992c87><h1 data-v-54992c87><span class=\"svg\" data-v-54992c87><svg data-v-54992c87><use xlink:href=\"/svg/symbol-defs.svg#icon-arrow_back\" data-v-54992c87></use></svg></span> <span data-v-54992c87>" + _vm._ssrEscape("\n                Category Dashboard " + _vm._s(_vm.$route.query.product_name ? _vm.$route.query.product_name : "") + "\n            ") + "</span></h1> <div class=\"dashboard-actions\" data-v-54992c87>" + (!_vm.hasProductId ? "<button data-v-54992c87>Add Category</button>" : "<!---->") + " <button data-v-54992c87>Logout</button></div></div> <div class=\"search-bar\" data-v-54992c87><input type=\"text\" placeholder=\"Search categories by name...\"" + _vm._ssrAttr("value", _vm.searchQuery) + " data-v-54992c87></div> " + (_vm.showAddCategoryForm ? "<div class=\"add-category-form-overlay\" data-v-54992c87><div class=\"add-category-form\" data-v-54992c87><h2 data-v-54992c87>Add New Category</h2> <div data-v-54992c87><label data-v-54992c87>Name</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.newCategory.name) + " data-v-54992c87></div> <div data-v-54992c87><label data-v-54992c87>Description</label> <textarea data-v-54992c87>" + _vm._ssrEscape(_vm._s(_vm.newCategory.description)) + "</textarea></div> <div data-v-54992c87><label data-v-54992c87>Hex Color</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.newCategory.hexcolor) + " data-v-54992c87></div> <div data-v-54992c87><label data-v-54992c87>Upload Image</label> <input type=\"file\" data-v-54992c87> " + (_vm.imageUploading ? "<span class=\"loading-text\" data-v-54992c87><span class=\"spinner\" data-v-54992c87></span> Uploading image...\n                </span>" : "<!---->") + "</div> <div data-v-54992c87><button" + _vm._ssrAttr("disabled", _vm.imageUploading || _vm.categorySubmitting) + " data-v-54992c87>" + (_vm.categorySubmitting ? "<span class=\"spinner\" data-v-54992c87></span>" : "<!---->") + _vm._ssrEscape("\n                    " + _vm._s(_vm.categorySubmitting ? 'Submitting...' : 'Submit') + "\n                ") + "</button> <button data-v-54992c87>Cancel</button></div></div></div>" : "<!---->") + " <div class=\"category-pills-section\" data-v-54992c87><button class=\"view-more-button\" data-v-54992c87>" + _vm._ssrEscape("\n            " + _vm._s(_vm.showCategoryPills ? 'Hide Categories' : 'View More Categories') + "\n        ") + "</button> " + (_vm.showCategoryPills ? "<div class=\"category-pills-container\" data-v-54992c87>" + _vm._ssrList(_vm.unlinkedCategories, function (category) {
    return "<span class=\"category-pill\"" + _vm._ssrStyle(null, {
      backgroundColor: category.hexcolor || '#249b48'
    }, null) + " data-v-54992c87>" + _vm._ssrEscape("\n                " + _vm._s(category.name) + "\n            ") + "</span>";
  }) + " " + (_vm.unlinkedCategories.length === 0 && !_vm.loadingCategories ? "<p class=\"no-categories-pills\" data-v-54992c87>\n                No more categories to link to this product.\n            </p>" : "<!---->") + "</div>" : "<!---->") + " " + (_vm.showCategoryDetails && _vm.selectedCategory ? "<div class=\"category-details-overlay\" data-v-54992c87><div class=\"category-details-popup\" data-v-54992c87><h2 data-v-54992c87>" + _vm._ssrEscape(_vm._s(_vm.selectedCategory.name)) + "</h2> <p class=\"description-text\" data-v-54992c87>" + _vm._ssrEscape(_vm._s(_vm.selectedCategory.description)) + "</p> <div class=\"button-group\" data-v-54992c87>" + (_vm.hasProductId && !_vm.isCategoryLinked(_vm.selectedCategory._id) ? "<button data-v-54992c87>Add</button>" : "<!---->") + " " + (_vm.hasProductId && _vm.isCategoryLinked(_vm.selectedCategory._id) ? "<button data-v-54992c87>Remove</button>" : "<!---->") + " <button class=\"cancel-button\" data-v-54992c87>Close</button></div></div></div>" : "<!---->") + "</div> <table class=\"category-table\" data-v-54992c87><thead data-v-54992c87><tr data-v-54992c87><th data-v-54992c87>Image</th> <th data-v-54992c87>Name</th> <th data-v-54992c87>Description</th> <th data-v-54992c87>Hex color</th> <th data-v-54992c87>Actions</th></tr></thead> <tbody data-v-54992c87>" + (_vm.loadingCategories ? "<tr data-v-54992c87><td colspan=\"5\" class=\"loading-row\" data-v-54992c87><span class=\"spinner\" data-v-54992c87></span> Loading categories...\n                </td></tr>" : _vm.filteredCategories.length === 0 && !_vm.searchQuery ? "<tr data-v-54992c87><td colspan=\"5\" class=\"no-categories\" data-v-54992c87>\n                    No categories found. Add a new one!\n                </td></tr>" : _vm.filteredCategories.length === 0 && _vm.searchQuery ? "<tr data-v-54992c87><td colspan=\"5\" class=\"no-categories\" data-v-54992c87>" + _vm._ssrEscape("\n                    No categories found matching \"" + _vm._s(_vm.searchQuery) + "\".\n                ") + "</td></tr>" : "<!---->") + " " + _vm._ssrList(_vm.filteredCategories, function (category) {
    return "<tr data-v-54992c87><td data-v-54992c87><img" + _vm._ssrAttr("src", category.image || '/imgs/placeholder.png') + " class=\"category-thumb\" data-v-54992c87></td> <td data-v-54992c87><input type=\"text\"" + _vm._ssrAttr("value", category.name) + " data-v-54992c87></td> <td data-v-54992c87><textarea data-v-54992c87>" + _vm._ssrEscape(_vm._s(category.description)) + "</textarea></td> <td data-v-54992c87><input type=\"text\"" + _vm._ssrAttr("value", category.hexcolor) + " data-v-54992c87></td> <td data-v-54992c87><button" + _vm._ssrAttr("disabled", category.isSaving) + " data-v-54992c87>" + (category.isSaving ? "<span class=\"spinner\" data-v-54992c87></span>" : "<!---->") + " Save\n                    </button> " + (_vm.hasProductId && _vm.isCategoryLinked(category._id) ? "<button" + _vm._ssrAttr("disabled", category.isRemoving) + " class=\"remove-button\" data-v-54992c87>" + (category.isRemoving ? "<span class=\"spinner\" data-v-54992c87></span>" : "<!---->") + " Remove\n                    </button>" : "<!---->") + " " + (!_vm.hasProductId ? "<button" + _vm._ssrAttr("disabled", category.isDeleting) + " data-v-54992c87>" + (category.isDeleting ? "<span class=\"spinner\" data-v-54992c87></span>" : "<!---->") + " Delete\n                    </button>" : "<!---->") + "</td></tr>";
  }) + "</tbody></table>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/categorycards.vue?vue&type=template&id=54992c87&scoped=true

// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/categorycards.vue?vue&type=script&lang=js

/* harmony default export */ var categorycardsvue_type_script_lang_js = ({
  name: 'AdminCategoryDashboard',
  data() {
    return {
      categories: [],
      // Categories for the main table (product-specific by default)
      allCategories: [],
      // New array to store all categories for the pills
      showAddCategoryForm: false,
      newCategory: {
        name: '',
        description: '',
        hexcolor: '',
        image: ''
      },
      imageUploading: false,
      categorySubmitting: false,
      searchQuery: '',
      loadingCategories: false,
      showCategoryPills: false,
      loadingAllCategories: false,
      // New state for loading all categories
      selectedCategory: null,
      // Holds the category whose pill was clicked
      showCategoryDetails: false,
      // Controls visibility of the description popup
      productCategories: [] // Stores IDs of categories linked to the current product
    };
  },
  computed: {
    filteredCategories() {
      if (!this.searchQuery) {
        return this.categories;
      }
      const query = this.searchQuery.toLowerCase();
      return this.categories.filter(category => category.name.toLowerCase().includes(query) || category.description.toLowerCase().includes(query));
    },
    hasProductId() {
      return !!this.$route.query.product_id;
    },
    // New computed property to filter categories not linked to the current product
    unlinkedCategories() {
      if (!this.hasProductId) {
        return this.allCategories; // If not on a product page, show all categories
      }
      // Filter all categories to show only those whose IDs are NOT in productCategories
      return this.allCategories.filter(category => !this.productCategories.includes(category._id));
    }
  },
  watch: {
    showCategoryPills(newValue) {
      if (newValue && this.allCategories.length === 0 && !this.loadingAllCategories) {
        this.fetchAllCategories();
      }
    }
  },
  async mounted() {
    await this.fetchCategories(); // Fetch product-specific categories when component mounts
  },
  methods: {
    getAuthHeaders() {
      const token = localStorage.getItem('admin_token');
      return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
    },
    async fetchCategories() {
      this.loadingCategories = true;
      this.productCategories = []; // Reset productCategories on each fetch
      const productId = this.$route.query.product_id;
      try {
        let url = `${api["c" /* serverurl */]}/admin/categories`;
        if (productId) {
          url += `?product_id=${productId}`;
        }
        const res = await fetch(url, {
          headers: this.getAuthHeaders()
        });
        await Object(api["b" /* handleFetchError */])(res);
        const data = await res.json();
        const {
          categories
        } = data;
        this.categories = categories.map(cat => ({
          ...cat,
          isSaving: false,
          isDeleting: false,
          isRemoving: false // New state for removing from product
        }));

        // If product_id exists, populate productCategories with the IDs of these categories
        if (productId) {
          this.productCategories = categories.map(cat => cat._id);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        Object(api["d" /* showErrorMessage */])('Failed to load categories.');
      } finally {
        this.loadingCategories = false;
      }
    },
    async fetchAllCategories() {
      this.loadingAllCategories = true;
      try {
        const res = await fetch(`${api["c" /* serverurl */]}/admin/categories`, {
          // This fetch DOES NOT include product_id
          headers: this.getAuthHeaders()
        });
        const data = await res.json();
        const {
          categories
        } = data;
        this.allCategories = categories.map(cat => ({
          ...cat,
          isSaving: false,
          isDeleting: false
        }));
      } catch (error) {
        console.error('Error fetching all categories:', error);
        Object(api["d" /* showErrorMessage */])('Failed to load all categories.');
      } finally {
        this.loadingAllCategories = false;
      }
    },
    async handleImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append('image', file);
      this.imageUploading = true;
      try {
        const response = await fetch(`${api["c" /* serverurl */]}/admin/upload-image`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
          },
          body: formData
        });
        await Object(api["b" /* handleFetchError */])(response);
        const data = await response.json();
        if (data.url) {
          this.newCategory.image = data.url;
        } else {
          Object(api["d" /* showErrorMessage */])('Failed to upload image');
        }
      } catch (err) {
        console.error('Image upload error:', err);
        Object(api["d" /* showErrorMessage */])(err.message || 'Image upload failed');
      } finally {
        this.imageUploading = false;
      }
    },
    async submitNewCategory() {
      const {
        name,
        description,
        image,
        hexcolor
      } = this.newCategory;
      if (!name || !description || !image || !hexcolor) {
        alert('Name, description, hexcolor, and image are required!');
        return;
      }
      this.categorySubmitting = true;
      try {
        let url = `${api["c" /* serverurl */]}/admin/create-category`;
        // If we're on a product-specific dashboard, add it directly to that product
        if (this.$route.query.product_id) {
          url += `?product_id=${this.$route.query.product_id}`;
        }
        const res = await fetch(url, {
          method: 'POST',
          headers: this.getAuthHeaders(),
          body: JSON.stringify({
            name,
            description,
            image,
            hexcolor
          })
        });
        await Object(api["b" /* handleFetchError */])(res);
        const data = await res.json();
        if (data.error) {
          Object(api["d" /* showErrorMessage */])(data.error);
          return;
        }
        const newCat = {
          ...data.category,
          isSaving: false,
          isDeleting: false,
          isRemoving: false
        };

        // Add to product-specific list if relevant, and mark as linked
        if (this.$route.query.product_id) {
          this.categories.unshift(newCat);
          this.productCategories.push(newCat._id); // Mark as linked
        }
        this.allCategories.unshift(newCat); // Always add to allCategories

        this.newCategory = {
          name: '',
          description: '',
          hexcolor: '',
          image: ''
        };
        this.showAddCategoryForm = false;
        alert('Category created successfully!');
      } catch (err) {
        console.error('Add category error:', err);
        Object(api["d" /* showErrorMessage */])(err.message || 'Failed to create category');
      } finally {
        this.categorySubmitting = false;
      }
    },
    logout() {
      localStorage.removeItem('admin_token');
      this.$router.push('/admin/login');
    },
    filterCategories() {
      // Computed property `filteredCategories` handles this automatically
    },
    async saveCategory(category) {
      this.$set(category, 'isSaving', true);
      try {
        const updatedData = {
          name: category.name,
          description: category.description,
          image: category.image,
          hexcolor: category.hexcolor
        };
        const res = await fetch(`${api["c" /* serverurl */]}/admin/update-category/${category._id}`, {
          method: 'PUT',
          headers: this.getAuthHeaders(),
          body: JSON.stringify(updatedData)
        });
        await Object(api["b" /* handleFetchError */])(res);
        const data = await res.json();
        if (data.error) {
          Object(api["d" /* showErrorMessage */])(data.error);
          return;
        }
        alert(`Category "${category.name}" updated successfully!`);
        const index = this.categories.findIndex(cat => cat._id === category._id);
        if (index !== -1) this.$set(this.categories, index, {
          ...category,
          isSaving: false
        });
        const allIndex = this.allCategories.findIndex(cat => cat._id === category._id);
        if (allIndex !== -1) this.$set(this.allCategories, allIndex, {
          ...category,
          isSaving: false
        });
      } catch (error) {
        console.error('Save category error:', error);
        Object(api["d" /* showErrorMessage */])(error.message || 'Failed to save category');
      } finally {
        this.$set(category, 'isSaving', false);
      }
    },
    async deleteCategory(categoryToDelete) {
      if (!confirm(`Are you sure you want to delete the category "${categoryToDelete.name}" permanently? This cannot be undone.`)) return;
      this.$set(categoryToDelete, 'isDeleting', true);
      try {
        const res = await fetch(`${api["c" /* serverurl */]}/admin/delete-category/${categoryToDelete._id}`, {
          method: 'DELETE',
          headers: this.getAuthHeaders()
        });
        await Object(api["b" /* handleFetchError */])(res);
        if (res.ok) {
          // Remove from both lists
          this.categories = this.categories.filter(category => category._id !== categoryToDelete._id);
          this.allCategories = this.allCategories.filter(category => category._id !== categoryToDelete._id);
          // Also remove from productCategories if it was linked
          this.productCategories = this.productCategories.filter(id => id !== categoryToDelete._id);
          alert(`Category "${categoryToDelete.name}" deleted successfully!`);
        } else {
          Object(api["d" /* showErrorMessage */])('Failed to delete category.');
        }
      } catch (error) {
        console.error('Delete category error:', error);
        Object(api["d" /* showErrorMessage */])(error.message || 'Failed to delete category');
      } finally {
        this.$set(categoryToDelete, 'isDeleting', false);
      }
    },
    async removeCategoryFromProduct(categoryToRemove) {
      if (!confirm(`Are you sure you want to remove "${categoryToRemove.name}" from this product? This will NOT delete the category permanently.`)) return;
      const productId = this.$route.query.product_id;
      if (!productId) {
        Object(api["d" /* showErrorMessage */])('No product ID found in the URL. Cannot remove category from product.');
        return;
      }
      this.$set(categoryToRemove, 'isRemoving', true); // Set loading state for this specific category
      try {
        const res = await fetch(`${api["c" /* serverurl */]}/admin/remove-category-from-product`, {
          // Assuming new backend route
          method: 'POST',
          // Using POST for consistency with add, but DELETE is also common
          headers: this.getAuthHeaders(),
          body: JSON.stringify({
            productId: productId,
            categoryId: categoryToRemove._id
          })
        });
        await Object(api["b" /* handleFetchError */])(res);
        const data = await res.json();
        if (data.error) {
          Object(api["d" /* showErrorMessage */])(data.error);
        } else {
          alert(data.message);
          // Remove from product-specific categories and productCategories array
          this.categories = this.categories.filter(cat => cat._id !== categoryToRemove._id);
          this.productCategories = this.productCategories.filter(id => id !== categoryToRemove._id);
          this.closeCategoryDetails(); // Close popup if open
        }
      } catch (error) {
        console.error('Error removing category from product:', error);
        Object(api["d" /* showErrorMessage */])(error.message || 'Failed to remove category from product.');
      } finally {
        this.$set(categoryToRemove, 'isRemoving', false);
      }
    },
    showCategoryDescription(category) {
      this.selectedCategory = category;
      this.showCategoryDetails = true;
    },
    closeCategoryDetails() {
      this.selectedCategory = null;
      this.showCategoryDetails = false;
    },
    async addCategoryToProduct(category) {
      const productId = this.$route.query.product_id;
      if (!productId) {
        Object(api["d" /* showErrorMessage */])('No product ID found in the URL. Cannot add category.');
        this.closeCategoryDetails();
        return;
      }
      try {
        const res = await fetch(`${api["c" /* serverurl */]}/admin/add-category-to-product`, {
          method: 'POST',
          headers: this.getAuthHeaders(),
          body: JSON.stringify({
            productId: productId,
            categoryId: category._id
          })
        });
        await Object(api["b" /* handleFetchError */])(res);
        const data = await res.json();
        if (data.error) {
          Object(api["d" /* showErrorMessage */])(data.error);
        } else {
          alert(data.message);
          // Add the category to the `categories` array if it's not already there
          // and update the `productCategories` to reflect the link
          if (!this.categories.some(cat => cat._id === category._id)) {
            this.categories.push({
              ...category,
              isSaving: false,
              isDeleting: false,
              isRemoving: false
            });
          }
          if (!this.productCategories.includes(category._id)) {
            this.productCategories.push(category._id);
          }
        }
      } catch (error) {
        console.error('Error adding category to product:', error);
        Object(api["d" /* showErrorMessage */])(error.message || 'Failed to add category to product.');
      } finally {
        this.closeCategoryDetails();
      }
    },
    isCategoryLinked(categoryId) {
      return this.productCategories.includes(categoryId);
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/categorycards.vue?vue&type=script&lang=js
 /* harmony default export */ var admin_categorycardsvue_type_script_lang_js = (categorycardsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/admin/categorycards.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_categorycardsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "54992c87",
  "f372a758"
  
)

/* harmony default export */ var categorycards = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=categorycards.js.map