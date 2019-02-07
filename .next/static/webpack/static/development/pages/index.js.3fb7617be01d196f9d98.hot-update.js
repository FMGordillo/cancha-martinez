webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.styl */ "./components/style.styl");
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLogin", function () {});

    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Navbar, null), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
        className: "section"
      }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: "container"
      }, children)));
    }
  }]);

  return Layout;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("navbar", {
    className: "navbar"
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "navbar-brand"
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", {
    className: "navbar-item"
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: "https://bulma.io/images/bulma-type-white.png",
    alt: "Logo"
  })), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "navbar-burger burger",
    "data-target": "navbarMenuHeroB"
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null))), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    id: "navbarMenu",
    className: "navbar-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "navbar-end"
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", {
    className: "navbar-item"
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", null, "Login"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.3fb7617be01d196f9d98.hot-update.js.map