(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_auth_login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
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
  name: "login",
  inject: ["authRepository"],
  mixins: [(_lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_1___default()), (_lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0___default())],
  data: function data() {
    return {
      title: "Welcome back!",
      form: this.buildForm(),
      errors: {}
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
        remember_me: auth ? auth.remember_me : false
      });
    },
    goToForgetPassword: function goToForgetPassword() {
      this.goToGivenRouteName("forget-password");
    },
    goToGivenRouteName: function goToGivenRouteName(routeName) {
      this.$router.push({
        name: routeName
      });
    },
    goToSignUp: function goToSignUp() {
      this.goToGivenRouteName("register");
    },
    login: function login() {
      var _this = this;

      var route = "";
      this.form.startProcessing();
      this.$store.dispatch("login");
      var operation = this.response(this.authRepository.login(this.form));
      operation.then(function (data) {
        if (operation.isFulfilled()) {
          // console.log(data);
          _this.$store.commit("loginSuccess", data);

          _this.form.finishProcessing();

          if (_this.$store.getters.getRole) {
            route = _lib_constant__WEBPACK_IMPORTED_MODULE_2__.NORMAL_REDIRECT_URL;
          }

          _this.$router.push(route); // this.$toastr.s("", "You are logged in successfully !");

        }
      })["catch"](function (err) {
        if (operation.isRejected()) {
          if (err.status === 417) {
            _this.errors.set(err.data.body);
          }

          if (err.status === 401) {
            // console.log(err.data.body);
            // this.$bvToast.toast(err.data.body, {
            //   title: `Login Error`,
            //   variant: "danger",
            //   solid: true,
            // });
            _this.errors = err.data.body;
          }

          _this.$store.commit("loginFailed", {
            err: err
          });
        }

        _this.form.finishProcessing();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
}, "LOG IN", -1
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
  "class": "invalid-feedback"
};
var _hoisted_10 = {
  "class": "input-wrapper"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "my-label"
}, "Password", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "invalid-feedback"
};
var _hoisted_13 = {
  "class": "login-flex flex space-between align-center"
};
var _hoisted_14 = {
  "class": "btn-wrapper mt-20"
};
var _hoisted_15 = {
  "class": "mt-30 txt-center"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Don't have an account?", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "auth-login-form mt-2",
    onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.login && $options.login.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.email = $event;
    }),
    "class": "my-input",
    placeholder: "Enter your email or username"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.errors.email, function (e, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(e), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.errors.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "password-field",
    type: "password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.password = $event;
    }),
    "class": "my-input",
    placeholder: "Enter Password"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.errors.password, function (e, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(e), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.errors.password]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0);",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.goToForgetPassword && $options.goToForgetPassword.apply($options, arguments);
    }, ["prevent"])),
    title: "Forgot Password?",
    "class": "primary"
  }, "Forgot Password?")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0);",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.login && $options.login.apply($options, arguments);
    }, ["prevent"])),
    title: "LOG IN",
    "class": "btn gradient-btn flex hvr-sweep-to-right"
  }, "LOG IN")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0);",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.goToSignUp && $options.goToSignUp.apply($options, arguments);
    }, ["prevent"])),
    title: "Join Now",
    "class": "primary"
  }, "Join Now")])])], 32
  /* HYDRATE_EVENTS */
  )])])]);
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

/***/ "./resources/js/views/auth/login.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/auth/login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_6517b581__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=6517b581 */ "./resources/js/views/auth/login.vue?vue&type=template&id=6517b581");
/* harmony import */ var _login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js */ "./resources/js/views/auth/login.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_progi_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_progi_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_login_vue_vue_type_template_id_6517b581__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/auth/login.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/auth/login.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/views/auth/login.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/auth/login.vue?vue&type=template&id=6517b581":
/*!*************************************************************************!*\
  !*** ./resources/js/views/auth/login.vue?vue&type=template&id=6517b581 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_template_id_6517b581__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_template_id_6517b581__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login.vue?vue&type=template&id=6517b581 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581");


/***/ })

}]);