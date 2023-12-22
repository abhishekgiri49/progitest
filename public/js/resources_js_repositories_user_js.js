"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_repositories_user_js"],{

/***/ "./resources/js/repositories/user.js":
/*!*******************************************!*\
  !*** ./resources/js/repositories/user.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./resources/js/repositories/Repository.js");

var resource = "/user";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get: function get() {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource, "/list")).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  find: function find(id) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource, "/").concat(id)).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  create: function create(payload) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  update: function update(id, payload) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource, "/").concat(id), payload).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  "delete": function _delete(id) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource, "/delete/").concat(id)).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  view: function view(id) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource, "/profile")).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  updateProfile: function updateProfile(payload) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("/update/profile", payload).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  updatePassword: function updatePassword(payload) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("/update/password", payload).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  }
});

/***/ })

}]);