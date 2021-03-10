"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.usePrifina = exports.PrifinaContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var QLqueries = _interopRequireWildcard(require("./queries"));

var QLsubscriptions = _interopRequireWildcard(require("./subscriptions"));

var QLmutations = _interopRequireWildcard(require("./mutations"));

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
  console.log(QLmutations);
  var providerContext = (0, _react.useRef)(null);
  var callbacks = (0, _react.useRef)({});
  var mockups = (0, _react.useRef)({});
  var appSubscriptions = (0, _react.useRef)({});

  var _useState = (0, _react.useState)({
    name: "Tero",
    uuid: "Testing-uuid"
  }),
      _useState2 = _slicedToArray(_useState, 2),
      currentUser = _useState2[0],
      setCurrentUser = _useState2[1];

  var check = (0, _react.useCallback)(function () {
    console.log("Prifina current", providerContext.current); //timerTest();

    return {
      check: "OK"
    };
  }, []);
  var subscriptionTest = (0, _react.useCallback)(function (appID, mockupData) {
    var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10000;

    if (providerContext.current.init.stage === "dev") {
      if (mockups.current) {
        if (Object.keys(mockups.current).length === 0) mockups.current = {};
        mockups.current[appID] = mockupData;
      }

      var subscriptionTimer = setInterval(function () {
        var rInt = Math.floor(Math.random() * Math.floor(10)); //console.log("RANDOM ", rInt);

        if (!(rInt % 3)) {
          console.log("RANDOM ", rInt); //console.log("MOCKUPS ", mockups.current[appID]);
          //console.log("MOCKUP KEYS ", Object.keys(mockups.current[appID]));

          if (mockups.current[appID] && Object.keys(mockups.current[appID]).length > 0) {
            Object.keys(mockups.current[appID]).map(function (mockup) {
              var data = mockups.current[appID][mockup];

              if (Array.isArray(data)) {
                var r = Math.floor(Math.random() * Math.floor(data.length));
                callbacks.current[appID](data[r]);
              } else {
                callbacks.current[appID](data);
              }
            });
          } else {
            if (Object.keys(mockups.current).length === 0) {
              clearInterval(subscriptionTimer);
            }
          }
        }
      }, interval);
      return true;
    }
  }, []);
  var unSubscribe = (0, _react.useCallback)(function (appID, subscription) {
    if (providerContext.current.init.stage === "dev") {
      if (mockups.current[appID] && _typeof(mockups.current[appID][subscription])) {
        console.log("DELETE MOCKUP ");
        delete mockups.current[appID][subscription];

        if (Object.keys(mockups.current[appID]).length === 0) {
          delete mockups.current[appID];
        }
      }
    } else {//QL subscriptio...
      // register subscription to appSubscriptions.current[appID]
      // subscription.unsubscribe()
    }

    return true;
  }, []);
  var subscriptions = (0, _react.useCallback)(function (appID, subscription) {
    var variables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    console.log("QL ", _typeof(QLsubscriptions[subscription]));

    if (typeof QLsubscriptions[subscription] !== "function") {
      throw new Error("Invalid Subscription");
    } else if (subscription === "getInfo") {
      return QLsubscriptions.getInfo();
    } else {
      //console.log("CHECK 1 ", typeof callbacks.current[appID]);
      if (typeof callbacks.current[appID] === "undefined") {
        throw new Error("OnUpdate callback function is missing");
      } //console.log("CHECK 2 ", providerContext.current.init.stage);


      if (providerContext.current.init.stage === "dev") {
        //console.log("CHECK 3 ", typeof mockups.current[appID]);
        if (typeof mockups.current[appID] === "undefined") {
          throw new Error("Mockup Subscription data is missing");
        }

        return true;
      } else {
        //QL subscriptio...
        // register subscription to appSubscriptions.current[appID]
        // subscription.unsubscribe()
        return true;
      }
      /*
      return QLsubscription[subscription](
        providerContext.current.init.stage,
        appID,
        currentUser.uuid,
        variables
      );
      */

    }
  }, []);
  var mutations = (0, _react.useCallback)(function (appID, mutation, variables) {
    console.log("QL ", _typeof(QLmutations[mutation]), mutation);

    if (typeof QLmutations[mutation] !== "function") {
      return Promise.reject("INVALID_MUTATION");
    } else {
      return QLmutations[mutation](providerContext.current.init.stage, appID, currentUser.uuid, variables);
    }
  }, []);
  var queries = (0, _react.useCallback)(function (appID, query) {
    var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    console.log("QL ", _typeof(QLqueries[query]));

    if (typeof QLqueries[query] !== "function") {
      return Promise.reject("INVALID_QUERY");
    } else {
      return QLqueries[query](providerContext.current.init.stage, appID, currentUser.uuid, filter);
    }
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
  var setSettings = (0, _react.useCallback)(function (appID) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    //console.log(providerContext.current.init.app);
    if (providerContext.current.init.stage === "dev") {
      localStorage.setItem("PrifinaAppSettings-" + appID, JSON.stringify(settings));
    }

    return Promise.resolve(true);
  }, []);
  var getSettings = (0, _react.useCallback)(function (appID) {
    //console.log(providerContext.current.init.app);
    if (providerContext.current.init.stage === "dev") {
      var appSettings = JSON.parse(localStorage.getItem("PrifinaAppSettings-" + appID));

      if (appSettings === null) {
        appSettings = {};
      }

      return Promise.resolve(appSettings);
    } else {
      return Promise.resolve({});
    }
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
  var onUpdate = (0, _react.useCallback)(function (appID, fn) {
    //console.log("UPDATE SET ", appID);
    if (callbacks.current) {
      if (Object.keys(callbacks.current).length === 0) callbacks.current = {};
      callbacks.current[appID] = fn; //console.log("UPDATE SET ", callbacks.current);
    }
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
    currentUser: currentUser,
    queries: queries,
    mutations: mutations,
    subscriptions: subscriptions,
    subscriptionTest: subscriptionTest,
    unSubscribe: unSubscribe
  };

  if (props.stage === "dev") {
    console.log("DEV STAGE INIT FOR STORYBOOK");
    providerContext.current.init = {
      stage: "dev",
      apps: {}
    };
  }

  console.log("Prifina ", providerContext);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(PrifinaContext.Provider, {
    value: providerContext
  }, props.children);
}; //<div className={"prifina-provider"}>{props.children}</div>

/* Hook */
// ==============================

/*
export const usePrifina = ({ appID = "", connectors = [] }) => {
  const prifinaContext = useContext(PrifinaContext);
  console.log("PRIFINA CONTEXT ", prifinaContext);
  //console.log(window.location.hostname);
  const stage = "dev";

  if (appID === "" && stage === "dev") {
    appID = short.generate();
  }
  const prifina = useMemo(() => {
    prifinaContext.current.init = {
      stage: stage,
      appID: appID,
      connectors: connectors,
    };
    return prifinaContext.current;
  }, [prifinaContext]);
  return prifina;
};
*/

/* Hook */
// ==============================


var usePrifina = function usePrifina(_ref) {
  var Context = _ref.Context,
      _ref$appID = _ref.appID,
      appID = _ref$appID === void 0 ? "" : _ref$appID,
      _ref$connectors = _ref.connectors,
      connectors = _ref$connectors === void 0 ? [] : _ref$connectors;
  var contextExists = false;

  if (typeof Context !== "undefined") {
    Context = /*#__PURE__*/(0, _react.createContext)(Context);
    contextExists = true;
  }

  var prifinaContext = (0, _react.useContext)(Context || PrifinaContext);
  var stage = "dev";

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


exports.usePrifina = usePrifina;
PrifinaContextProvider.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PrifinaContextProvider"
};
var _default = PrifinaContextProvider;
exports["default"] = _default;