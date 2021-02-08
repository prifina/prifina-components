"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.usePrifina = exports.PrifinaContext = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PrifinaContext = /*#__PURE__*/(0, _react.createContext)({});
exports.PrifinaContext = PrifinaContext;

var PrifinaContextProvider = function PrifinaContextProvider(props) {
  var providerContext = (0, _react.useRef)(null);
  var check = (0, _react.useCallback)(function () {
    console.log("Prifina current", providerContext.current);
    return {
      check: "OK"
    };
  }, []);
  providerContext.current = {
    check: check,
    currentUser: {
      name: "Tero"
    }
  };
  console.log("Prifina ", providerContext);
  return /*#__PURE__*/_react["default"].createElement(PrifinaContext.Provider, _extends({
    value: providerContext
  }, props));
};
/* Hook */
// ==============================


var usePrifina = function usePrifina(_ref) {
  var _ref$stage = _ref.stage,
      stage = _ref$stage === void 0 ? "dev" : _ref$stage,
      _ref$appID = _ref.appID,
      appID = _ref$appID === void 0 ? "" : _ref$appID;
  var prifinaContext = (0, _react.useContext)(PrifinaContext);
  var prifina = (0, _react.useMemo)(function () {
    /*
    if (theme === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
      }
      */
    prifinaContext.current.init = {
      stage: stage,
      app: appID
    };
    return prifinaContext.current;
  }, [prifinaContext]);
  return prifina;
};
/* @component */


exports.usePrifina = usePrifina;
PrifinaContextProvider.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PrifinaContextProvider"
};
var _default = PrifinaContextProvider;
exports["default"] = _default;