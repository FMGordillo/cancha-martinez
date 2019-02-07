webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Form/NewMatchForm.js":
/*!*****************************************!*\
  !*** ./components/Form/NewMatchForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
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

  return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "field"
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: field.name,
    className: "label"
  }, field.name.toUpperCase()), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "control"
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", _extends({
    id: field.name,
    className: "input"
  }, field, props)), touched[field.name] && errors[field.name] && react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
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
  return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isVisible: isVisible,
    toggleModal: toggleModal
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "box"
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: "title"
  }, "Create new match"), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"] // validationSchema={MatchSchema}
  , {
    onSubmit: function onSubmit(values, _ref3) {
      var setSubmitting = _ref3.setSubmitting;
      console.log("submit", values);
      sendData(values).then(function () {
        console.log("ok in form");
        setSubmitting(false);
      }).catch(function () {
        console.log("error inside form");
        setSubmitting(false);
      });
    }
  }, function (_ref4) {
    var values = _ref4.values,
        handleChange = _ref4.handleChange,
        handleBlur = _ref4.handleBlur,
        handleSubmit = _ref4.handleSubmit,
        isSubmitting = _ref4.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", {
      onSubmit: handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "title",
      required: true,
      type: "text",
      placeholder: "Title",
      component: Input
    }), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "owner",
      required: true,
      type: "email",
      placeholder: "Owner email",
      component: Input
    }), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "date",
      required: true,
      type: "date",
      placeholder: "Reservation date and time",
      component: Input
    }), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "select"
    }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "time",
      component: "select",
      required: true
    }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
      value: "",
      selected: true,
      disabled: true,
      hidden: true
    }, "Time"), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
      value: "17:00"
    }, "17:00hs"), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
      value: "18:00"
    }, "18:00hs"), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", {
      value: "19:00"
    }, "19:00hs"))), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
      className: "button is-primary",
      type: "submit",
      disabled: isSubmitting
    }, "Send"));
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.0e0c31cd000f3b0540af.hot-update.js.map