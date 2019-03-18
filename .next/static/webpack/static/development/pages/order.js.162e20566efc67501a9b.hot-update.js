webpackHotUpdate("static\\development\\pages\\order.js",{

/***/ "./components/Order.js":
/*!*****************************!*\
  !*** ./components/Order.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/OrderItemStyles */ "./components/styles/OrderItemStyles.js");
var _jsxFileName = "d:\\Nodejs\\React\\Advanced-React\\sick-fits\\frontend\\components\\Order.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query($id: ID!) {\n    order(id: $id) {\n      id\n      charge\n      total\n      createdAt\n      user {\n        id\n      }\n      items {\n        id\n        title\n        description\n        price\n        image\n        quantity\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var SINGLE_ORDER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var Order =
/*#__PURE__*/
function (_Component) {
  _inherits(Order, _Component);

  function Order() {
    _classCallCheck(this, Order);

    return _possibleConstructorReturn(this, _getPrototypeOf(Order).apply(this, arguments));
  }

  _createClass(Order, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: SINGLE_ORDER_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        });
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, "Loading...");
        var order = data.order;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "Supreme - Order ", order.id)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, "Order ID:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, _this.props.id)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "Charge"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, order.charge)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_5___default()(order.createdAt).format("MMMM d, YYYY h:mm A"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, "Order Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__["default"])(order.total))));
      });
    }
  }]);

  return Order;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Order.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/setUTCDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/setUTCISODay/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/setUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
false,

/***/ "./node_modules/date-fns/esm/addDays/index.js":
false,

/***/ "./node_modules/date-fns/esm/addHours/index.js":
false,

/***/ "./node_modules/date-fns/esm/addISOWeekYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/addMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
false,

/***/ "./node_modules/date-fns/esm/addQuarters/index.js":
false,

/***/ "./node_modules/date-fns/esm/addSeconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/addWeeks/index.js":
false,

/***/ "./node_modules/date-fns/esm/addYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/areIntervalsOverlapping/index.js":
false,

/***/ "./node_modules/date-fns/esm/closestIndexTo/index.js":
false,

/***/ "./node_modules/date-fns/esm/closestTo/index.js":
false,

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
false,

/***/ "./node_modules/date-fns/esm/compareDesc/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarISOWeekYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarISOWeeks/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarQuarters/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInDays/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInHours/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInISOWeekYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInQuarters/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInWeeks/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/eachDayOfInterval/index.js":
false,

/***/ "./node_modules/date-fns/esm/eachWeekOfInterval/index.js":
false,

/***/ "./node_modules/date-fns/esm/eachWeekendOfInterval/index.js":
false,

/***/ "./node_modules/date-fns/esm/eachWeekendOfMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/eachWeekendOfYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfDecade/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfHour/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfMinute/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfSecond/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/format/index.js":
false,

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/formatDistanceStrict/index.js":
false,

/***/ "./node_modules/date-fns/esm/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDate/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDayOfYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDaysInMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDaysInYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDecade/index.js":
false,

/***/ "./node_modules/date-fns/esm/getHours/index.js":
false,

/***/ "./node_modules/date-fns/esm/getISODay/index.js":
false,

/***/ "./node_modules/date-fns/esm/getISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/getISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/getISOWeeksInYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/getMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/getMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/getMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/getOverlappingDaysInIntervals/index.js":
false,

/***/ "./node_modules/date-fns/esm/getQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/getSeconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/getTime/index.js":
false,

/***/ "./node_modules/date-fns/esm/getUnixTime/index.js":
false,

/***/ "./node_modules/date-fns/esm/getWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/getWeekOfMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/getWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/getWeeksInMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/getYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/index.js":
false,

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
false,

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
false,

/***/ "./node_modules/date-fns/esm/isDate/index.js":
false,

/***/ "./node_modules/date-fns/esm/isEqual/index.js":
false,

/***/ "./node_modules/date-fns/esm/isFirstDayOfMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/isFriday/index.js":
false,

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/isLeapYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/isMonday/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameHour/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameMinute/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameSecond/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSaturday/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSunday/index.js":
false,

/***/ "./node_modules/date-fns/esm/isThursday/index.js":
false,

/***/ "./node_modules/date-fns/esm/isTuesday/index.js":
false,

/***/ "./node_modules/date-fns/esm/isValid/index.js":
false,

/***/ "./node_modules/date-fns/esm/isWednesday/index.js":
false,

/***/ "./node_modules/date-fns/esm/isWeekend/index.js":
false,

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
false,

/***/ "./node_modules/date-fns/esm/lastDayOfDecade/index.js":
false,

/***/ "./node_modules/date-fns/esm/lastDayOfISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/lastDayOfISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/lastDayOfMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/lastDayOfQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/lastDayOfWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/lastDayOfYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/lightFormat/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
false,

/***/ "./node_modules/date-fns/esm/max/index.js":
false,

/***/ "./node_modules/date-fns/esm/min/index.js":
false,

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/index.js":
false,

/***/ "./node_modules/date-fns/esm/parse/index.js":
false,

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
false,

/***/ "./node_modules/date-fns/esm/roundToNearestMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/setDate/index.js":
false,

/***/ "./node_modules/date-fns/esm/setDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/setDayOfYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/setHours/index.js":
false,

/***/ "./node_modules/date-fns/esm/setISODay/index.js":
false,

/***/ "./node_modules/date-fns/esm/setISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/setISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/setMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/setMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/setMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/setQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/setSeconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/setWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/setWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/setYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfDecade/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfHour/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfMinute/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfSecond/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/subDays/index.js":
false,

/***/ "./node_modules/date-fns/esm/subHours/index.js":
false,

/***/ "./node_modules/date-fns/esm/subISOWeekYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/subMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/subMonths/index.js":
false,

/***/ "./node_modules/date-fns/esm/subQuarters/index.js":
false,

/***/ "./node_modules/date-fns/esm/subSeconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/subWeeks/index.js":
false,

/***/ "./node_modules/date-fns/esm/subYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/toDate/index.js":
false

})
//# sourceMappingURL=order.js.162e20566efc67501a9b.hot-update.js.map