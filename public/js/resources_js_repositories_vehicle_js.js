"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_repositories_vehicle_js"],{

/***/ "./resources/js/repositories/vehicle.js":
/*!**********************************************!*\
  !*** ./resources/js/repositories/vehicle.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var resource = "/vehicle";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get: function get() {
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(resource, "/list")).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  find: function find(id) {
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(resource, "/").concat(id)).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  create: function create(payload) {
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(resource), payload).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  update: function update(id, payload) {
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(resource, "/").concat(id), payload).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  "delete": function _delete(id) {
    return new Promise(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(resource, "/delete/").concat(id)).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  }
});

/***/ })

}]);