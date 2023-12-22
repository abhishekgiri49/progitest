(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_auth_reset-password_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/reset-password.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/reset-password.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Mixins/Alert */ "./resources/js/lib/Mixins/Alert.js");
/* harmony import */ var _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/Mixins/ExtendedPromises */ "./resources/js/lib/Mixins/ExtendedPromises.js");
/* harmony import */ var _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/constant */ "./resources/js/lib/constant.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "reset-password",
  inject: ["authRepository"],
  mixins: [(_lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_1___default()), (_lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0___default())],
  data: function data() {
    return {
      title: "Welcome back!",
      form: this.buildForm()
    };
  },
  mounted: function mounted() {},
  computed: {
    authError: function authError() {
      return this.$store.getters.authError;
    },
    registeredUser: function registeredUser() {
      return this.$store.getters.registeredUser;
    }
  },
  methods: {
    buildForm: function buildForm(auth) {
      return new vform__WEBPACK_IMPORTED_MODULE_3__.Form({
        email: auth ? auth.email : null,
        password: auth ? auth.password : null,
        password_confirmation: auth ? auth.password_confirmation : null
      });
    },
    goToSignIn: function goToSignIn() {
      this.goToGivenRouteName("login");
    },
    goToGivenRouteName: function goToGivenRouteName(routeName) {
      this.$router.push({
        name: routeName
      });
    },
    resetPassword: function resetPassword() {
      var _this = this;

      var route = "";
      this.form.startProcessing();
      var formData = Object.assign(this.form, {
        token: this.$route.params.token
      });
      var operation = this.response(this.authRepository.resetPassword(formData));
      operation.then(function (data) {
        if (operation.isFulfilled()) {
          _this.form.finishProcessing();

          _this.$router.push("/login");

          _this.$swal({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            icon: "success",
            title: "Password Reset",
            text: "Password has been changed successfully!"
          }); // this.$toastr.s("", data.body);

        }
      })["catch"](function (err) {
        if (operation.isRejected()) {
          if (err.status === 401) {
            _this.form.errors.set(err.data.body);
          }

          if (err.status === 500) {
            _this.$swal({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              icon: "error",
              title: "Email Sent",
              text: err.data.body
            }); // this.$toastr.e("", err.data.body);

          }
        }

        _this.form.finishProcessing();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/reset-password.vue?vue&type=template&id=dffdd11e":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/reset-password.vue?vue&type=template&id=dffdd11e ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "login-section pb-100 pt-70"
};
var _hoisted_2 = {
  "class": "container"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "txt-center primary"
}, "NEEDZ", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "login-form form-box mt-50"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-title font-20 white txt-center"
}, "Reset password", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "form-wrapper"
};
var _hoisted_7 = {
  "class": "input-wrapper"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "my-label"
}, "Email", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "input-wrapper"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "my-label"
}, "New Password", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "input-wrapper"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "my-label"
}, "Confirm Password", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "btn-wrapper mt-10"
};
var _hoisted_14 = {
  "class": "mt-30 txt-center"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Back to  ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p class=\"black\">Enter the email address you use on needz. We'll send you a link to reset your password.</p>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.email = $event;
    }),
    "class": "my-input",
    placeholder: "Enter your email"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "invalid-feedback"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.get("email")), 513
  /* TEXT, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.form.errors.has('email')]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.password = $event;
    }),
    "class": "my-input",
    placeholder: "*********"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "invalid-feedback"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.get("password")), 513
  /* TEXT, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.form.errors.has('password')]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.password_confirmation = $event;
    }),
    "class": "my-input",
    placeholder: "*********"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.password_confirmation]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "invalid-feedback"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.get("password_confirmation")), 513
  /* TEXT, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.form.errors.has('password_confirmation')]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0);",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.resetPassword && $options.resetPassword.apply($options, arguments);
    }, ["prevent"])),
    title: "Reset Password",
    "class": "btn gradient-btn flex hvr-sweep-to-right"
  }, "RESSET PASSWORD")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0);",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.goToSignIn && $options.goToSignIn.apply($options, arguments);
    }, ["prevent"])),
    title: "Join Now",
    "class": "primary"
  }, "Log In")])])])])]);
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

/***/ "./resources/js/views/auth/reset-password.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/auth/reset-password.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reset_password_vue_vue_type_template_id_dffdd11e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.vue?vue&type=template&id=dffdd11e */ "./resources/js/views/auth/reset-password.vue?vue&type=template&id=dffdd11e");
/* harmony import */ var _reset_password_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.vue?vue&type=script&lang=js */ "./resources/js/views/auth/reset-password.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_progi_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_progi_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_reset_password_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_reset_password_vue_vue_type_template_id_dffdd11e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/auth/reset-password.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/auth/reset-password.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/views/auth/reset-password.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./reset-password.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/reset-password.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/auth/reset-password.vue?vue&type=template&id=dffdd11e":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/auth/reset-password.vue?vue&type=template&id=dffdd11e ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_vue_vue_type_template_id_dffdd11e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_vue_vue_type_template_id_dffdd11e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./reset-password.vue?vue&type=template&id=dffdd11e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/reset-password.vue?vue&type=template&id=dffdd11e");


/***/ })

}]);