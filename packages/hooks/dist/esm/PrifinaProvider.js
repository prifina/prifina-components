"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.usePrifina = exports.PrifinaContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _RemoteComponent = require("./RemoteComponent");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _short = require("short-uuid");

var PrifinaContext = /*#__PURE__*/(0, _react.createContext)({});
exports.PrifinaContext = PrifinaContext;

var PrifinaContextProvider = function PrifinaContextProvider(_ref) {
  var _ref$stage = _ref.stage,
      stage = _ref$stage === void 0 ? "dev" : _ref$stage,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_RemoteComponent.RemoteComponent, {
    url: "https://raw.githubusercontent.com/prifina/prifina-components/main/packages/remote-hooks/dist/main.bundle.js",
    Context: PrifinaContext,
    stage: stage
  }, children);
};
/* Hook */
// ==============================


var usePrifina = function usePrifina(_ref2) {
  var Context = _ref2.Context,
      _ref2$appID = _ref2.appID,
      appID = _ref2$appID === void 0 ? "" : _ref2$appID,
      _ref2$connectors = _ref2.connectors,
      connectors = _ref2$connectors === void 0 ? [] : _ref2$connectors;
  var contextExists = false;

  if (typeof Context !== "undefined") {
    Context = /*#__PURE__*/(0, _react.createContext)(Context);
    contextExists = true;
  }

  var prifinaContext = (0, _react.useContext)(Context || PrifinaContext);
  var stage = "dev"; //console.log("HOOK ", prifinaContext);
  //console.log("HOOK2 ", prifinaContext.current);

  if (appID === "" && stage === "dev") {
    appID = _short.generate();
  }

  var prifina = (0, _react.useMemo)(function () {
    if (prifinaContext === null || typeof prifinaContext.current === "undefined") {
      if (contextExists) {
        prifinaContext.init.apps[appID] = {
          connectors: connectors
        };
      } else {
        throw new Error("Invalid Prifina context provider");
      }

      return prifinaContext;
    } else {
      //   console.log("MEMO 2.0 ", prifinaContext.current.init);
      if (appID === "WIDGETS" || appID == "APP") {
        prifinaContext.current.init = {
          stage: stage,
          apps: {}
        };
      } else {
        prifinaContext.current.init.apps[appID] = {
          connectors: connectors
        };
      } // console.log("MEMO 2 ", contextExists, prifinaContext);


      return prifinaContext.current;
    }
  }, [prifinaContext]);
  return prifina;
};
/* @component */


exports.usePrifina = usePrifina;
PrifinaContextProvider.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PrifinaContextProvider",
  "props": {
    "stage": {
      "defaultValue": {
        "value": "\"dev\"",
        "computed": false
      },
      "required": false
    }
  }
};
var _default = PrifinaContextProvider;
exports["default"] = _default;