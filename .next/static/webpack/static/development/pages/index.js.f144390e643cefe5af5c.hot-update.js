webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Match/Matches.js":
/*!*************************************!*\
  !*** ./components/Match/Matches.js ***!
  \*************************************/
/*! exports provided: Matches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matches", function() { return Matches; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js");

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
  return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    loading: isLoading,
    showPageJump: false,
    showPageSizeOptions: false,
    TableComponent: function TableComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Table, {
        props: props
      });
    },
    TheadComponent: function TheadComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Thead, {
        props: props
      });
    },
    TbodyComponent: function TbodyComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Tbody, {
        props: props
      });
    },
    TrGroupComponent: function TrGroupComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(TrGroup, {
        props: props
      });
    },
    TrComponent: function TrComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Tr, {
        props: props
      });
    },
    ThComponent: function ThComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Th, {
        props: props
      });
    },
    TdComponent: function TdComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Td, {
        props: props
      });
    },
    PaginationComponent: function PaginationComponent(props) {
      return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_PaginationComponent, {
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
  return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("table", {
    className: "table",
    style: {
      minWidth: "100%"
    }
  }, props.children);
};

var Thead = function Thead(_ref3) {
  var props = _ref3.props;
  return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", null, props.children.children));
};

var Tbody = function Tbody(_ref4) {
  var props = _ref4.props;
  return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tbody", null, props.children);
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
  return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", {
    className: isCurrent ? "is-selected" : ""
  }, props.children);
};

var Th = function Th(_ref7) {
  var props = _ref7.props;
  return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", null, props.children);
};

var Td = function Td(_ref8) {
  var props = _ref8.props;
  console.log('is valid?', moment__WEBPACK_IMPORTED_MODULE_1___default()(props.children).isValid);

  if (moment__WEBPACK_IMPORTED_MODULE_1___default()(props.children).isValid) {
    return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, moment__WEBPACK_IMPORTED_MODULE_1___default()(props.children));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, props.children);
  }
};

var _PaginationComponent = function _PaginationComponent(_ref9) {
  var props = _ref9.props;
  return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "column",
    style: {
      textAlign: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    className: "button is-secondary"
  }, "A button")), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "column",
    style: {
      textAlign: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, "Text")), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "column",
    style: {
      textAlign: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    className: "button is-secondary"
  }, "A button")));
};

/***/ })

})
//# sourceMappingURL=index.js.f144390e643cefe5af5c.hot-update.js.map