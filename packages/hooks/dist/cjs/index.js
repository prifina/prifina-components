"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Op", {
  enumerable: true,
  get: function get() {
    return _queryBuilder.Op;
  }
});
Object.defineProperty(exports, "PrifinaContext", {
  enumerable: true,
  get: function get() {
    return _PrifinaProvider.PrifinaContext;
  }
});
Object.defineProperty(exports, "PrifinaProvider", {
  enumerable: true,
  get: function get() {
    return _PrifinaProvider["default"];
  }
});
Object.defineProperty(exports, "_fn", {
  enumerable: true,
  get: function get() {
    return _queryBuilder._fn;
  }
});
Object.defineProperty(exports, "buildFilter", {
  enumerable: true,
  get: function get() {
    return _queryBuilder.buildFilter;
  }
});
Object.defineProperty(exports, "usePrifina", {
  enumerable: true,
  get: function get() {
    return _PrifinaProvider.usePrifina;
  }
});

var _PrifinaProvider = _interopRequireWildcard(require("./PrifinaProvider"));

var _queryBuilder = require("./queryBuilder");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }