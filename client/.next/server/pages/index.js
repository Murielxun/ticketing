"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req  })=>{\n    if (true) {\n        // on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            baseURL: \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n            headers: req.headers\n        });\n    } else {}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixpRUFBZSxDQUFDLEVBQUVDLEdBQUcsR0FBRSxHQUFLO0lBQzFCLElBQUksSUFBNkIsRUFBRTtRQUNqQyxnQkFBZ0I7UUFDaEIsT0FBT0QsbURBQVksQ0FBQztZQUNsQkcsT0FBTyxFQUNMLGlFQUFpRTtZQUNuRUMsT0FBTyxFQUFFSCxHQUFHLENBQUNHLE9BQU87U0FDckIsQ0FBQyxDQUFDO0tBQ0osTUFBTSxFQUtOO0NBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2FwaS9idWlsZC1jbGllbnQuanM/YzZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgcmVxIH0pID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIG9uIHRoZSBzZXJ2ZXJcclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOlxyXG4gICAgICAgICdodHRwOi8vaW5ncmVzcy1uZ2lueC1jb250cm9sbGVyLmluZ3Jlc3Mtbmdpbnguc3ZjLmNsdXN0ZXIubG9jYWwnLFxyXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyB3ZSBhcmUgaW4gYnJvd3NlclxyXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgIGJhc2VVcmw6ICcvJ1xyXG4gICAgfSlcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiYmFzZVVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\n\n\nconst Landing = ({ currentUser  })=>{\n    return currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are signed in\"\n    }, void 0, false, {\n        fileName: \"E:\\\\Coding-Related\\\\UdemyMicro\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are NOT signed in \"\n    }, void 0, false, {\n        fileName: \"E:\\\\Coding-Related\\\\UdemyMicro\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\nLanding.getInitialProps = async (context)=>{\n    // // window is only existed in browser, not in node js environment\n    // if (typeof window === 'undefined') {\n    //   // we are on server\n    //   // request should be made to http:ingress-nginx-controller....\n    //   // also need to specify the domain (host)\n    //   const { data } = await axios.get(\n    //     'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',\n    //     {\n    //       // adding cookies & host\n    //       headers: req.headers,\n    //     }\n    //   );\n    //   return data;\n    // } else {\n    //   // we are on browser\n    //   // request can be made with a base url of ''\n    //   // rely on browser to put the base url for us\n    //   const { data } = await axios.get('/api/users/currentuser');\n    //   // {currentUser: {}}\n    //   return data;\n    // }\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(context);\n    const { data  } = await client.get(\"/api/users/currentuser\");\n    return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNvQjtBQUU5QyxNQUFNRSxPQUFPLEdBQUcsQ0FBQyxFQUFFQyxXQUFXLEdBQUUsR0FBSztJQUNuQyxPQUFPQSxXQUFXLGlCQUNoQiw4REFBQ0MsSUFBRTtrQkFBQyxtQkFBaUI7Ozs7O2lCQUFLLGlCQUUxQiw4REFBQ0EsSUFBRTtrQkFBQyx3QkFBc0I7Ozs7O2lCQUFLLENBQy9CO0NBQ0g7QUFFREYsT0FBTyxDQUFDRyxlQUFlLEdBQUcsT0FBT0MsT0FBTyxHQUFLO0lBQzNDLG1FQUFtRTtJQUNuRSx1Q0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLG1FQUFtRTtJQUNuRSw4Q0FBOEM7SUFDOUMsc0NBQXNDO0lBQ3RDLCtGQUErRjtJQUMvRixRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5QixRQUFRO0lBQ1IsT0FBTztJQUNQLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlEQUFpRDtJQUNqRCxrREFBa0Q7SUFDbEQsZ0VBQWdFO0lBQ2hFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsSUFBSTtJQUNKLE1BQU1DLE1BQU0sR0FBR04sNkRBQVcsQ0FBQ0ssT0FBTyxDQUFDO0lBQ25DLE1BQU0sRUFBRUUsSUFBSSxHQUFFLEdBQUcsTUFBTUQsTUFBTSxDQUFDRSxHQUFHLENBQUMsd0JBQXdCLENBQUM7SUFDM0QsT0FBT0QsSUFBSSxDQUFDO0NBQ2IsQ0FBQztBQUVGLGlFQUFlTixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBidWlsZENsaWVudCBmcm9tICcuLi9hcGkvYnVpbGQtY2xpZW50JztcclxuXHJcbmNvbnN0IExhbmRpbmcgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgcmV0dXJuIGN1cnJlbnRVc2VyID8gKFxyXG4gICAgPGgxPllvdSBhcmUgc2lnbmVkIGluPC9oMT5cclxuICApIDogKFxyXG4gICAgPGgxPllvdSBhcmUgTk9UIHNpZ25lZCBpbiA8L2gxPlxyXG4gICk7XHJcbn07XHJcblxyXG5MYW5kaW5nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgLy8gLy8gd2luZG93IGlzIG9ubHkgZXhpc3RlZCBpbiBicm93c2VyLCBub3QgaW4gbm9kZSBqcyBlbnZpcm9ubWVudFxyXG4gIC8vIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gIC8vICAgLy8gd2UgYXJlIG9uIHNlcnZlclxyXG4gIC8vICAgLy8gcmVxdWVzdCBzaG91bGQgYmUgbWFkZSB0byBodHRwOmluZ3Jlc3MtbmdpbngtY29udHJvbGxlci4uLi5cclxuICAvLyAgIC8vIGFsc28gbmVlZCB0byBzcGVjaWZ5IHRoZSBkb21haW4gKGhvc3QpXHJcbiAgLy8gICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAvLyAgICAgJ2h0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbC9hcGkvdXNlcnMvY3VycmVudHVzZXInLFxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgLy8gYWRkaW5nIGNvb2tpZXMgJiBob3N0XHJcbiAgLy8gICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXHJcbiAgLy8gICAgIH1cclxuICAvLyAgICk7XHJcbiAgLy8gICByZXR1cm4gZGF0YTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgLy8gd2UgYXJlIG9uIGJyb3dzZXJcclxuICAvLyAgIC8vIHJlcXVlc3QgY2FuIGJlIG1hZGUgd2l0aCBhIGJhc2UgdXJsIG9mICcnXHJcbiAgLy8gICAvLyByZWx5IG9uIGJyb3dzZXIgdG8gcHV0IHRoZSBiYXNlIHVybCBmb3IgdXNcclxuICAvLyAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyk7XHJcbiAgLy8gICAvLyB7Y3VycmVudFVzZXI6IHt9fVxyXG4gIC8vICAgcmV0dXJuIGRhdGE7XHJcbiAgLy8gfVxyXG4gIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGNvbnRleHQpO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldCgnL2FwaS91c2Vycy9jdXJyZW50dXNlcicpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZztcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYnVpbGRDbGllbnQiLCJMYW5kaW5nIiwiY3VycmVudFVzZXIiLCJoMSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjbGllbnQiLCJkYXRhIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();