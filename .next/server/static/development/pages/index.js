module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Form/NewMatchForm.js":
/*!*****************************************!*\
  !*** ./components/Form/NewMatchForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal */ "./components/Modal/index.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // TODO: Use this schema to check date

var MatchSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
  title: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(2, "Too short!").max(20, "Too long!").required("Required"),
  owner: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email("Must provide a valid email").required("Required"),
  // date: Yup.date()
  //   .min(new Date()) // Today?
  //   .max(new Date().getDate() + 5), // following 5 days?
  time: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Required")
});

var Input = function Input(_ref) {
  var field = _ref.field,
      _ref$form = _ref.form,
      touched = _ref$form.touched,
      errors = _ref$form.errors,
      props = _objectWithoutProperties(_ref, ["field", "form"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: field.name,
    className: "label"
  }, field.name.toUpperCase()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    id: field.name,
    className: "input"
  }, field, props)), touched[field.name] && errors[field.name] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error"
  }, errors[field.name])));
};
/**
 * TO DO: Make this work!
 */


/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var isVisible = _ref2.isVisible,
      toggleModal = _ref2.toggleModal,
      sendData = _ref2.sendData;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isVisible: isVisible,
    toggleModal: toggleModal
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "title"
  }, "Create new match"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"] // validationSchema={MatchSchema}
  , {
    onSubmit: function onSubmit(values, _ref3) {
      var setSubmitting = _ref3.setSubmitting;
      setSubmitting(true);
      console.log("submit", values);
      sendData(values).then(function () {
        // console.log("ok in form");
        setSubmitting(false);
      }).catch(function (err) {
        console.log("error inside form", err);
        setSubmitting(false);
      });
    }
  }, function (_ref4) {
    var values = _ref4.values,
        handleChange = _ref4.handleChange,
        handleBlur = _ref4.handleBlur,
        handleSubmit = _ref4.handleSubmit,
        isSubmitting = _ref4.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "title",
      required: true,
      type: "text",
      placeholder: "Title",
      component: Input
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "owner",
      required: true,
      type: "email",
      placeholder: "Owner email",
      component: Input
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "date",
      required: true,
      type: "date",
      placeholder: "Reservation date and time",
      component: Input
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "select"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "time",
      component: "select",
      required: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "",
      selected: true,
      disabled: true,
      hidden: true
    }, "Time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "17:00"
    }, "17:00hs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "18:00"
    }, "18:00hs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "19:00"
    }, "19:00hs"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "button is-primary",
      type: "submit",
      disabled: isSubmitting
    }, "Send"));
  })));
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navbar, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, children)));
    }
  }]);

  return Layout;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("navbar", {
    className: "navbar is-dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-brand"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://bulma.io/images/bulma-type-white.png",
    alt: "Logo"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-burger burger",
    "data-target": "navbarMenuHeroB"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "navbarMenu",
    className: "navbar-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Login"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Match/Matches.js":
/*!*************************************!*\
  !*** ./components/Match/Matches.js ***!
  \*************************************/
/*! exports provided: Matches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matches", function() { return Matches; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);

 // import Match from "./Match"

 // const MatchesOld = ({ matches }) => (
//   <table className="table">
//     <thead>
//       <tr>
//         {Object.keys(matches[0])
//           .filter(val => val !== "id")
//           .map(head => (
//             <td>{head}</td>
//           ))}
//       </tr>
//     </thead>
//     <tbody>
//       {matches.map((match, i) => (
//         <Match data={match} />
//       ))}
//     </tbody>
//   </table>
// )

var Matches = function Matches(_ref) {
  var matches = _ref.matches,
      currentTime = _ref.currentTime,
      isLoading = _ref.isLoading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_2___default.a, {
    loading: isLoading,
    showPageJump: false,
    showPageSizeOptions: false,
    defaultSortDesc: true,
    defaultSorted: ['reservation_date'],
    TableComponent: function TableComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Table, {
        props: props
      });
    },
    TheadComponent: function TheadComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Thead, {
        props: props
      });
    },
    TbodyComponent: function TbodyComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tbody, {
        props: props
      });
    },
    TrGroupComponent: function TrGroupComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TrGroup, {
        props: props
      });
    },
    TrComponent: function TrComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tr, {
        props: props
      });
    },
    ThComponent: function ThComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Th, {
        props: props
      });
    },
    TdComponent: function TdComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Td, {
        props: props
      });
    },
    PaginationComponent: function PaginationComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaginationComponent, {
        props: props
      });
    },
    LoadingComponent: function LoadingComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingComponent, {
        props: props
      });
    },
    data: matches,
    columns: [{
      Header: "Title",
      accessor: "title"
    }, {
      Header: "Owner",
      accessor: "owner"
    }, {
      Header: "Reservation Date",
      accessor: "reservation_date"
    }],
    defaultPageSize: 5
  }));
};

var Table = function Table(_ref2) {
  var props = _ref2.props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table",
    style: {
      minWidth: "100%"
    }
  }, props.children);
};

var Thead = function Thead(_ref3) {
  var props = _ref3.props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, props.children.children));
};

var Tbody = function Tbody(_ref4) {
  var props = _ref4.props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.children);
};

var TrGroup = function TrGroup(_ref5) {
  var props = _ref5.props;
  return props.children[0];
};

var Tr = function Tr(_ref6) {
  var props = _ref6.props;
  // TODO: Format this
  // const rowTime = moment(props.children[2].children[0])
  // const startRange = moment("3:00pm", "h:mma")
  // const endRange = moment("5:00pm", "h:mma")
  // TODO: Check this out.
  // const isCurrent = rowTime.isBetween(startRange, endRange)
  var isCurrent = false;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: isCurrent ? "is-selected" : ""
  }, props.children);
};

var Th = function Th(_ref7) {
  var props = _ref7.props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, props.children);
};

var Td = function Td(_ref8) {
  var props = _ref8.props;
  // if(moment(props.children).isValid() && !!props.children ) {
  //   return <td>{moment(props.children).local().format()}</td>;
  // } else {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.children); // }
}; // TODO: End this


var _PaginationComponent = function _PaginationComponent(_ref9) {
  var props = _ref9.props;
  var canPrevious = props.canPrevious,
      previousText = props.previousText,
      canNext = props.canNext,
      nextText = props.nextText,
      page = props.page,
      onPageChange = props.onPageChange;
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column",
    style: {
      textAlign: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button is-link",
    disabled: !canPrevious,
    onClick: function onClick() {
      return onPageChange(page - 1);
    }
  }, previousText)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column",
    style: {
      textAlign: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Text")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column",
    style: {
      textAlign: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button is-link",
    disabled: !canNext,
    onClick: function onClick() {
      return onPageChange(page + 1);
    }
  }, nextText)));
};

var _LoadingComponent = function _LoadingComponent(_ref10) {
  var _ref10$props = _ref10.props,
      loading = _ref10$props.loading,
      loadingText = _ref10$props.loadingText;
  console.log(loading, loadingText);
  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, loadingText);
};

/***/ }),

/***/ "./components/Match/index.js":
/*!***********************************!*\
  !*** ./components/Match/index.js ***!
  \***********************************/
/*! exports provided: Matches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Matches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matches */ "./components/Match/Matches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matches", function() { return _Matches__WEBPACK_IMPORTED_MODULE_0__["Matches"]; });



/***/ }),

/***/ "./components/Modal/index.js":
/*!***********************************!*\
  !*** ./components/Modal/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.styl */ "./components/style.styl");
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_1__);

// TODO: Finish of polishing this

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var isVisible = _ref.isVisible,
      toggleModal = _ref.toggleModal,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal ".concat(isVisible && "is-active" || "is-inactive")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-background",
    onClick: toggleModal
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "modal-close is-large",
    "aria-label": "close",
    onClick: toggleModal
  })));
});

/***/ }),

/***/ "./components/style.styl":
/*!*******************************!*\
  !*** ./components/style.styl ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/cloudant.js":
/*!*************************!*\
  !*** ./lib/cloudant.js ***!
  \*************************/
/*! exports provided: getMatches, createMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatches", function() { return getMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMatch", function() { return createMatch; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var credentials = {
  DB_NAME: "cancha-martinez-test",
  API_HOST: "https://openwhisk.ng.bluemix.net/api/v1/namespaces/famargor%40ar.ibm.com_dev/actions/Cloudant%20FMGordillo",
  API_KEY: "b3ab8497-1978-4650-84f1-a2ba04d3df64:aaCmv0CmAR8DlbuwduXkRLgo8uSQXcOvhrMitpnGtVDPWZ4vqI1JQohmCOveZo07",
  QUERY: "blocking=true&result=true"
};
var getMatchesQuery = {
  selector: {
    _id: {
      $gt: 0
    }
  }
  /**
   * @returns {Promise}
   */

};
var getMatches = function getMatches() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(credentials.API_HOST, "/exec-query-find?").concat(credentials.QUERY), {
    dbname: credentials.DB_NAME,
    query: getMatchesQuery
  }, {
    auth: {
      username: credentials.API_KEY.split(/[:]/)[0],
      password: credentials.API_KEY.split(/[:]/)[1]
    }
  });
};
/**
 *
 * @param {Object} doc _id and _rev must be provided (if uploaded)
 */

var createMatch = function createMatch(doc) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(credentials.API_HOST, "/create-document?").concat(credentials.QUERY), {
    dbname: credentials.DB_NAME,
    doc: doc
  }, {
    auth: {
      username: credentials.API_KEY.split(/[:]/)[0],
      password: credentials.API_KEY.split(/[:]/)[1]
    }
  });
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Match */ "./components/Match/index.js");
/* harmony import */ var _components_Form_NewMatchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Form/NewMatchForm */ "./components/Form/NewMatchForm.js");
/* harmony import */ var _lib_cloudant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/cloudant */ "./lib/cloudant.js");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      matches: [],
      currentTime: moment__WEBPACK_IMPORTED_MODULE_2___default()(),
      formVisible: false,
      isLoading: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleModal", function () {
      _this.setState(function (_ref) {
        var formVisible = _ref.formVisible;
        return {
          formVisible: !formVisible
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(raw_data) {
        var reservation_date, data, matchCreated;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                reservation_date = moment__WEBPACK_IMPORTED_MODULE_2___default()(raw_data.date + " " + raw_data.time);
                data = {
                  title: raw_data.title,
                  owner: raw_data.owner,
                  reservation_date: reservation_date
                };
                _context.next = 5;
                return Object(_lib_cloudant__WEBPACK_IMPORTED_MODULE_7__["createMatch"])(data);

              case 5:
                matchCreated = _context.sent;
                console.log("result from created match", matchCreated);

                _this.toggleModal();

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log("error", _context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_lib_cloudant__WEBPACK_IMPORTED_MODULE_7__["getMatches"])();

              case 3:
                _ref3 = _context2.sent;
                data = _ref3.data;
                this.setState({
                  matches: data.docs,
                  isLoading: false
                });
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.error("error componentDidMount()", _context2.t0.response);
                this.setState({
                  isLoading: false
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          matches = _this$state.matches,
          formVisible = _this$state.formVisible,
          currentTime = _this$state.currentTime,
          isLoading = _this$state.isLoading;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "title"
      }, "Cancha Martinez"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "button is-info",
        onClick: this.toggleModal
      }, "Add new game"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Match__WEBPACK_IMPORTED_MODULE_5__["Matches"], {
        matches: matches || this.state.matches // currentTime={currentTime}
        ,
        isLoading: isLoading
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Form_NewMatchForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isVisible: formVisible,
        toggleModal: this.toggleModal,
        sendData: this.handleSubmit
      }));
    }
  }]);

  return Home;
}(preact__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "preact":
/*!*************************!*\
  !*** external "preact" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-table":
/*!******************************!*\
  !*** external "react-table" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-table");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map