(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard/dashboard.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard/dashboard.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Mixins/Alert */ "./resources/js/lib/Mixins/Alert.js");
/* harmony import */ var _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Mixins_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/Mixins/Error */ "./resources/js/lib/Mixins/Error.js");
/* harmony import */ var _lib_Mixins_Error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_Error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Mixins_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/Mixins/Utils */ "./resources/js/lib/Mixins/Utils.js");
/* harmony import */ var _lib_Mixins_Utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_Utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/Mixins/ExtendedPromises */ "./resources/js/lib/Mixins/ExtendedPromises.js");
/* harmony import */ var _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "dashboard",
  mixins: [(_lib_Mixins_Error__WEBPACK_IMPORTED_MODULE_1___default()), (_lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_3___default()), (_lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0___default()), (_lib_Mixins_Utils__WEBPACK_IMPORTED_MODULE_2___default())],
  inject: [],
  data: function data() {
    return {
      data: [],
      moment: moment
    };
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard/dashboard.vue?vue&type=template&id=192f09ac":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard/dashboard.vue?vue&type=template&id=192f09ac ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h1", null, "Dashboard");
}

/***/ }),

/***/ "./resources/js/lib/Mixins/Alert.js":
/*!******************************************!*\
  !*** ./resources/js/lib/Mixins/Alert.js ***!
  \******************************************/
/***/ ((module) => {

module.exports = {
  methods: {
    alert: function alert(options) {
      swal.fire(options);
    },
    success: function success() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$title = _ref.title,
          title = _ref$title === void 0 ? "Success!" : _ref$title,
          _ref$text = _ref.text,
          text = _ref$text === void 0 ? "That's all done!" : _ref$text,
          _ref$timer = _ref.timer,
          timer = _ref$timer === void 0 ? 1000 : _ref$timer,
          _ref$showConfirmation = _ref.showConfirmationButton,
          showConfirmationButton = _ref$showConfirmation === void 0 ? false : _ref$showConfirmation;

      this.alert({
        title: title,
        text: text,
        timer: timer,
        showConfirmButton: showConfirmationButton,
        type: 'success'
      });
    },
    error: function error() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$title = _ref2.title,
          title = _ref2$title === void 0 ? "Error!" : _ref2$title,
          _ref2$text = _ref2.text,
          text = _ref2$text === void 0 ? "Oops...Something went wrong" : _ref2$text;

      this.alert({
        title: title,
        text: text,
        type: 'error'
      });
    },
    confirm: function confirm(callback, options, title, text) {
      options = Object.assign({
        title: title || "Are you sure?",
        text: text || "Are you sure you want to do that?",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes" // closeOnConfirm: false

      }, options);
      this.$swal.fire(options).then(callback);
    }
  }
};

/***/ }),

/***/ "./resources/js/lib/Mixins/Error.js":
/*!******************************************!*\
  !*** ./resources/js/lib/Mixins/Error.js ***!
  \******************************************/
/***/ ((module) => {

module.exports = {
  data: function data() {
    return {
      errors: []
    };
  },
  methods: {
    hasError: function hasError(index, key) {
      return "".concat(index, ".").concat(key) in this.errors;
    },
    getError: function getError(index, key) {
      return this.errors["".concat(index, ".").concat(key)][0].replace('.', '').replace(new RegExp("[0-9]", "g"), ' ').replace(/#|_/g, ' ');
    },
    setDefaultErrors: function setDefaultErrors() {
      this.errors = [];
    }
  }
};

/***/ }),

/***/ "./resources/js/lib/Mixins/Utils.js":
/*!******************************************!*\
  !*** ./resources/js/lib/Mixins/Utils.js ***!
  \******************************************/
/***/ ((module) => {

module.exports = {
  methods: {
    reload: function reload() {
      var _this = this;

      var location = this.$route.fullPath;
      this.$router.replace('/');
      this.$nextTick(function () {
        return _this.$router.replace(location);
      });
    }
  }
};

/***/ }),

/***/ "./resources/js/views/dashboard/dashboard.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/dashboard/dashboard.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashboard_vue_vue_type_template_id_192f09ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=192f09ac */ "./resources/js/views/dashboard/dashboard.vue?vue&type=template&id=192f09ac");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js */ "./resources/js/views/dashboard/dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_progi_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_progi_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_dashboard_vue_vue_type_template_id_192f09ac__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/dashboard/dashboard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/dashboard/dashboard.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/views/dashboard/dashboard.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard/dashboard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/dashboard/dashboard.vue?vue&type=template&id=192f09ac":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/dashboard/dashboard.vue?vue&type=template&id=192f09ac ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dashboard_vue_vue_type_template_id_192f09ac__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dashboard_vue_vue_type_template_id_192f09ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./dashboard.vue?vue&type=template&id=192f09ac */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard/dashboard.vue?vue&type=template&id=192f09ac");


/***/ })

}]);