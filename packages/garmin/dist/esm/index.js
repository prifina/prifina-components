"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Data = require("./Data");

var Data = {
  getModuleName: _Data.getModuleName,
  getInfo: _Data.getInfo,
  getFields: _Data.getFields,
  queryDailiesDataAsync: _Data.queryDailiesDataAsync,
  queryEpochsDataAsync: _Data.queryEpochsDataAsync,
  querySleepsDataAsync: _Data.querySleepsDataAsync,
  queryPulseoxDataAsync: _Data.queryPulseoxDataAsync
};
var _default = Data;
exports["default"] = _default;