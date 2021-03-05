"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.useHooks = exports.usePrifina = exports.PrifinaContext = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _short = require("short-uuid");

var connectorOpts = ["name", "function"];
var PrifinaContext = /*#__PURE__*/(0, _react.createContext)({});
exports.PrifinaContext = PrifinaContext;

var PrifinaContextProvider = function PrifinaContextProvider(props) {
  var providerContext = (0, _react.useRef)(null);
  var callbacks = (0, _react.useRef)([]);

  var _useState = (0, _react.useState)({
    name: "Tero",
    uuid: "Testing-uuid"
  }),
      _useState2 = _slicedToArray(_useState, 2),
      currentUser = _useState2[0],
      setCurrentUser = _useState2[1];

  var check = (0, _react.useCallback)(function () {
    console.log("Prifina current", providerContext.current);
    return {
      check: "OK"
    };
  }, []);
  var connector = (0, _react.useCallback)(function (opts) {
    console.log("Prifina current", providerContext.current);
    console.log("Prifina current connectors", providerContext.current.init.connectors); //console.log("CONNECTOR NAME ", opts);

    if (!Object.keys(opts).every(function (k) {
      return connectorOpts.indexOf(k) > -1;
    })) {
      throw new Error("Invalid connector, only (".concat(connectorOpts.join(","), ") allowed."));
    }

    var connectorIndex = providerContext.current.init.connectors.findIndex(function (c) {
      return c.getModuleName() === opts.name;
    });

    if (connectorIndex === -1) {
      throw new Error("Connector (".concat(opts.name, ") not found!"));
    } else {
      var selectedConnector = providerContext.current.init.connectors[connectorIndex];

      if (Object.keys(selectedConnector).indexOf(opts["function"]) > -1) {
        return selectedConnector[opts["function"]]();
      } else {
        throw new Error("Connector function (".concat(opts["function"], ") not found!"));
      }
    }
  }, []);
  var setSettings = (0, _react.useCallback)(function () {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    //console.log(providerContext.current.init.app);
    localStorage.setItem("PrifinaAppSettings-" + providerContext.current.init.appID, JSON.stringify(settings));
    return true;
  }, []);
  var getSettings = (0, _react.useCallback)(function () {
    //console.log(providerContext.current.init.app);
    var appSettings = JSON.parse(localStorage.getItem("PrifinaAppSettings-" + providerContext.current.init.appID));

    if (appSettings === null) {
      appSettings = {};
    }

    return appSettings;
  }, []);
  var getLocalization = (0, _react.useCallback)(function () {
    var appLocalization = JSON.parse(localStorage.getItem("PrifinaAppLocalization"));

    if (appLocalization === null) {
      appLocalization = {
        calendar: "gregory",
        country: "FI",
        day: "2-digit",
        desktop: true,
        language: "en-US,en;q=0.9",
        locale: "en-GB",
        mobile: false,
        month: "2-digit",
        numberingSystem: "latn",
        smarttv: false,
        tablet: false,
        timeZone: "Europe/Helsinki",
        timeZoneOffset: -120,
        year: "numeric"
      };
    }

    return appLocalization;
  }, []);
  var onUpdate = (0, _react.useCallback)(function (fn) {
    callbacks.current.push({
      //appID: providerContext.current.init.appID,
      callback: fn
    });
  }, []);
  var getCallbacks = (0, _react.useCallback)(function () {
    //console.log("GET CALLBACk ", data);
    return callbacks.current;
  }, []);
  providerContext.current = {
    check: check,
    connector: connector,
    setSettings: setSettings,
    getSettings: getSettings,
    getLocalization: getLocalization,
    onUpdate: onUpdate,
    getCallbacks: getCallbacks,
    currentUser: currentUser
  };
  console.log("Prifina ", providerContext);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(PrifinaContext.Provider, {
    value: providerContext
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "prifina-provider"
  }, props.children));
};
/* Hook */
// ==============================


var usePrifina = function usePrifina(_ref) {
  var _ref$appID = _ref.appID,
      appID = _ref$appID === void 0 ? "" : _ref$appID,
      _ref$connectors = _ref.connectors,
      connectors = _ref$connectors === void 0 ? [] : _ref$connectors;
  var prifinaContext = (0, _react.useContext)(PrifinaContext);
  console.log("PRIFINA CONTEXT ", prifinaContext); //console.log(window.location.hostname);

  var stage = "dev";

  if (appID === "" && stage === "dev") {
    appID = _short.generate();
  }

  var prifina = (0, _react.useMemo)(function () {
    prifinaContext.current.init = {
      stage: stage,
      appID: appID,
      connectors: connectors
    };
    return prifinaContext.current;
  }, [prifinaContext]);
  return prifina;
};
/* Hook */
// ==============================


exports.usePrifina = usePrifina;

var useHooks = function useHooks(_ref2) {
  var Context = _ref2.Context,
      _ref2$appID = _ref2.appID,
      appID = _ref2$appID === void 0 ? "" : _ref2$appID,
      _ref2$connectors = _ref2.connectors,
      connectors = _ref2$connectors === void 0 ? [] : _ref2$connectors;
  console.log("HOOK ", _typeof(Context), Context);
  var contextExists = false;

  if (typeof Context !== "undefined") {
    Context = /*#__PURE__*/(0, _react.createContext)(Context);
    contextExists = true;
    console.log("CONTEXT EXISTS...");
  }

  var prifinaContext = (0, _react.useContext)(Context || PrifinaContext);
  var stage = "dev";

  if (appID === "" && stage === "dev") {
    appID = _short.generate();
  }

  var prifina = (0, _react.useMemo)(function () {
    if (prifinaContext === null || typeof prifinaContext.current === "undefined") {
      console.log("MEMO 1 ", prifinaContext);

      if (contextExists) {
        prifinaContext.init.apps.push({
          app: appID,
          connectors: connectors
        });
      } else {
        throw new Error("Invalid Prifina context provider");
      }

      return prifinaContext;
    } else {
      //   console.log("MEMO 2.0 ", prifinaContext.current.init);
      if (appID === "WIDGETS" || appID == "APP") {
        prifinaContext.current.init = {
          stage: stage,
          apps: []
        };
      } else {
        prifinaContext.init.apps.push({
          app: appID,
          connectors: connectors
        });
      }

      console.log("MEMO 2 ", contextExists, prifinaContext);
      return prifinaContext.current;
    }
  }, [prifinaContext]);
  return prifina;
};
/*
export const useHooks = ({ Context, appID = "", connectors = [] }) => {
  console.log("HOOK ", typeof Context, Context);

  let contextExists = false;
  if (typeof Context !== "undefined") {
    Context = createContext(Context);
    contextExists = true;
    console.log("CONTEXT EXISTS...");
  }
  const prifinaContext = useContext(Context || PrifinaContext);
  const stage = "dev";

  if (appID === "" && stage === "dev") {
    appID = short.generate();
  }
  const prifina = useMemo(() => {
    if (
      prifinaContext === null ||
      typeof prifinaContext.current === "undefined"
    ) {
      console.log("MEMO 1 ", prifinaContext);

      if (contextExists) {
        prifinaContext.init.apps.push({
          app: appID,
          connectors: connectors,
        });
      } else {
        throw new Error("Invalid Prifina context provider");
      }
      return prifinaContext;
    } else {
      //   console.log("MEMO 2.0 ", prifinaContext.current.init);
      prifinaContext.current.init = {
        stage: stage,
        apps: [],
      };
      console.log("MEMO 2 ", contextExists, prifinaContext);
      return prifinaContext.current;
    }
  }, [prifinaContext]);
  return prifina;
};
*/

/* @component */


exports.useHooks = useHooks;
PrifinaContextProvider.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PrifinaContextProvider"
};
var _default = PrifinaContextProvider;
exports["default"] = _default;