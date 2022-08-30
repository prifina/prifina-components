'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');

require('react');

var stringify = function stringify(obj) {
  if (_rollupPluginBabelHelpers["typeof"](obj) !== "object" || obj === null || obj instanceof Array) {
    console.log("WRONG OBJ TYPE ", _rollupPluginBabelHelpers["typeof"](obj));
    return value(obj);
  }

  var logicalOperators = Object.getOwnPropertySymbols(obj);
  var objKeys = Object.keys(obj);

  if (logicalOperators.length > 0) {
    return "{" + logicalOperators.map(function (k) {
      if (_rollupPluginBabelHelpers["typeof"](k) === "symbol") {
        return '"' + k.toString() + '":' + value(obj[k]);
      } else {
        return null;
      }
    }).filter(function (i) {
      return i;
    }) + "}";
  }

  if (objKeys.length > 0) {
    return "{" + objKeys.map(function (k) {
      return typeof obj[k] === "function" ? null : '"' + k + '":' + value(obj[k]);
    }).filter(function (i) {
      return i;
    }) + "}";
  }
  /*
  return '{' + Object.keys(obj).map(function (k) {
      return (typeof obj[k] === 'function') ? null : '"' + k + '":' + value(obj[k]);
  }).filter(function (i) { return i; }) + '}';
  */

};

var value = function value(val) {
  //console.log("VAL TYPE ",typeof val);
  switch (_rollupPluginBabelHelpers["typeof"](val)) {
    case "string":
      return '"' + val.replace(/\\/g, "\\\\").replace('"', '\\"') + '"';

    case "number":
    case "boolean":
      return "" + val;

    case "function":
      return "null";

    case "symbol":
      return val.toString();

    case "object":
      if (val instanceof Date) return '"' + val.toISOString() + '"';
      if (val instanceof Array) return "[" + val.map(value).join(",") + "]";
      if (val === null) return "null";
      return stringify(val);
  }
};

var shortId = function shortId() {
  // this is unique enough...
  return Math.random().toString(36).slice(-10);
};
/*
  export const usePrifina = () => {
    const prifinaContext = useContext(PrifinaContext);
    const prifina = useMemo(() => {
      return prifinaContext.current;
    }, [prifinaContext]);
    
    return prifina;
  };


  useCallback((appID, index) => {
    console.log("APP ",appID,index);
    const currentCount=callbacks.current[appID].length;
    if (currentCount>1) {
      callbacks.current[appID].splice(index,1);
    } else {
      delete callbacks.current[appID];
    }
    return true;
  }, []);

  */


exports.shortId = shortId;
exports.stringify = stringify;
