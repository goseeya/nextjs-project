(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/auth.js"],{

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/gosia/Desktop/myGreatProject/nextjs-project/components/User.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var user = function user(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Age: ", props.age));
};

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth&absolutePagePath=%2FUsers%2Fgosia%2FDesktop%2FmyGreatProject%2Fnextjs-project%2Fpages%2Fauth%2Findex.js!./":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth&absolutePagePath=%2FUsers%2Fgosia%2FDesktop%2FmyGreatProject%2Fnextjs-project%2Fpages%2Fauth%2Findex.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/auth", function() {
      var mod = __webpack_require__(/*! ./pages/auth/index.js */ "./pages/auth/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/auth/index.js */ "./pages/auth/index.js", function() {
          if(!next.router.components["/auth"]) return
          var updatedPage = __webpack_require__(/*! ./pages/auth/index.js */ "./pages/auth/index.js")
          next.router.update("/auth", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/User */ "./components/User.js");
var _jsxFileName = "/Users/gosia/Desktop/myGreatProject/nextjs-project/pages/auth/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var authIndexPage = function authIndexPage() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "The Auth Index Page"), __jsx(_components_User__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "Gosha",
    age: "25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (authIndexPage);

/***/ }),

/***/ 0:
/*!***********************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fauth&absolutePagePath=%2FUsers%2Fgosia%2FDesktop%2FmyGreatProject%2Fnextjs-project%2Fpages%2Fauth%2Findex.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fauth&absolutePagePath=%2FUsers%2Fgosia%2FDesktop%2FmyGreatProject%2Fnextjs-project%2Fpages%2Fauth%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth&absolutePagePath=%2FUsers%2Fgosia%2FDesktop%2FmyGreatProject%2Fnextjs-project%2Fpages%2Fauth%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=auth.js.map