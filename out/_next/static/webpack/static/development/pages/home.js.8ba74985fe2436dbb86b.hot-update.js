webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _modules_content_components_TrailersList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/content/components/TrailersList */ \"./modules/content/components/TrailersList.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _modules_layout_components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modules/layout/components/Header */ \"./modules/layout/components/Header.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _actions_movieDataActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/movieDataActions */ \"./actions/movieDataActions.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n/* harmony import */ var _modules_layout_styles_HomeLayout_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../modules/layout/styles/HomeLayout.scss */ \"./modules/layout/styles/HomeLayout.scss\");\n/* harmony import */ var _modules_layout_styles_HomeLayout_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modules_layout_styles_HomeLayout_scss__WEBPACK_IMPORTED_MODULE_17__);\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/suniljhamnani/Github projects/bms-trailers/pages/home.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) {\n  var hasNativeReflectConstruct = _isNativeReflectConstruct();\n\n  return function _createSuperInternal() {\n    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived),\n        result;\n\n    if (hasNativeReflectConstruct) {\n      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor;\n\n      result = Reflect.construct(Super, arguments, NewTarget);\n    } else {\n      result = Super.apply(this, arguments);\n    }\n\n    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result);\n  };\n}\n\nfunction _isNativeReflectConstruct() {\n  if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n  if (Reflect.construct.sham) return false;\n  if (typeof Proxy === \"function\") return true;\n\n  try {\n    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\n\n\n\n\n\n\n\n\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Home);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"state\", {});\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this$props = this.props,\n          data = _this$props.data,\n          StoreLanguages = _this$props.StoreLanguages,\n          StoreMovies = _this$props.StoreMovies;\n      StoreLanguages(data[0]);\n      StoreMovies(data[1]);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.data;\n      return __jsx(\"div\", {\n        className: \"home-layout\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 7\n        }\n      }, __jsx(_modules_layout_components_Header__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }\n      }), __jsx(_modules_content_components_TrailersList__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        moviesList: data[1],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 9\n        }\n      }));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var response, json;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()(_constants__WEBPACK_IMPORTED_MODULE_16__[\"API_URL\"]);\n\n              case 2:\n                response = _context.sent;\n                _context.next = 5;\n                return response.json();\n\n              case 5:\n                json = _context.sent;\n                console.log(json);\n                return _context.abrupt(\"return\", {\n                  data: json\n                });\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_14__[\"bindActionCreators\"])({\n    StoreLanguages: _actions_movieDataActions__WEBPACK_IMPORTED_MODULE_15__[\"StoreLanguages\"],\n    StoreMovies: _actions_movieDataActions__WEBPACK_IMPORTED_MODULE_15__[\"StoreMovies\"]\n  }, dispatch);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__[\"connect\"])(null, mapDispatchToProps)(Home));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLmpzPzA4N2QiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJTdG9yZUxhbmd1YWdlcyIsIlN0b3JlTW92aWVzIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJTdG9yZU1vdmllc0FjdGlvbiIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7SUFFTUEsSTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSSxFOzs7Ozs7O3dDQVdZO0FBQUEsd0JBQzRCLEtBRDVCO0FBQUEsVUFDVkMsSUFEVTtBQUFBLFVBQ0pDLGNBREk7QUFBQSxVQUNZQyxXQURaO0FBRWxCRCxvQkFBYyxDQUFDRCxJQUFJLENBQW5CQyxDQUFtQixDQUFMLENBQWRBO0FBQ0FDLGlCQUFXLENBQUNGLElBQUksQ0FBaEJFLENBQWdCLENBQUwsQ0FBWEE7QUFDRDs7OzZCQUVRO0FBQUEsVUFDQ0YsSUFERCxHQUNVLEtBRFYsS0FDVSxDQURWO0FBRVAsYUFDRTtBQUFLLGlCQUFTLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQWMsa0JBQVUsRUFBRUEsSUFBSSxDQUE5QixDQUE4QixDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERjtBQU1EOzs7Ozs7Ozs7Ozt1QkF0QndCRywwREFBSyxxRDs7O0FBQXRCQyx3QixnQkFBQUE7O3VCQUNhQSxRQUFRLENBQVJBLE07OztBQUFiQyxvQixnQkFBQUE7QUFDTkMsdUJBQU8sQ0FBUEE7aURBQ087QUFDTE4sc0JBQUksRUFBRUs7QUFERCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVBRRSw0Q0FBSyxDQUFDQyxTOztBQTZCekIsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixXQUFRO0FBQUEsU0FDakNDLGlFQUFrQixDQUFDO0FBQ2pCVCxrQkFBYyxFQURHO0FBRWpCQyxlQUFXLEVBQUVTLHNFQUFpQkE7QUFGYixHQUFELEVBRGUsUUFDZixDQURlO0FBQW5DOztBQU9lQywySEFBTyxPQUFQQSxrQkFBTyxDQUFQQSxDQUFmLElBQWVBLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWlsZXJzTGlzdCBmcm9tICcuLi9tb2R1bGVzL2NvbnRlbnQvY29tcG9uZW50cy9UcmFpbGVyc0xpc3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9sYXlvdXQvY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7XG4gIFN0b3JlTGFuZ3VhZ2VzIGFzIFN0b3JlTGFuZ3VhZ2VzQWN0aW9uLFxuICBTdG9yZU1vdmllcyBhcyBTdG9yZU1vdmllc0FjdGlvblxufSBmcm9tIFwiLi4vYWN0aW9ucy9tb3ZpZURhdGFBY3Rpb25zXCI7XG5pbXBvcnQgeyBBUElfVVJMfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgJy4uL21vZHVsZXMvbGF5b3V0L3N0eWxlcy9Ib21lTGF5b3V0LnNjc3MnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHt9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9VUkwpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coanNvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IGpzb25cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRhdGEsIFN0b3JlTGFuZ3VhZ2VzLCBTdG9yZU1vdmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICBTdG9yZUxhbmd1YWdlcyhkYXRhWzBdKTtcbiAgICBTdG9yZU1vdmllcyhkYXRhWzFdKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1sYXlvdXRcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8VHJhaWxlcnNMaXN0IG1vdmllc0xpc3Q9e2RhdGFbMV19Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoXG4gIGJpbmRBY3Rpb25DcmVhdG9ycyh7XG4gICAgU3RvcmVMYW5ndWFnZXM6IFN0b3JlTGFuZ3VhZ2VzQWN0aW9uLFxuICAgIFN0b3JlTW92aWVzOiBTdG9yZU1vdmllc0FjdGlvblxuICB9LCBkaXNwYXRjaClcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

})