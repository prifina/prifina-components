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
  queryActivities: _Data.queryActivities,
  queryActivitySummary: _Data.queryActivitySummary,
  queryHeartRateSummary: _Data.queryHeartRateSummary,
  querySleepSummary: _Data.querySleepSummary,
  queryHeartRateData: _Data.queryHeartRateData,
  querySleepData: _Data.querySleepData,
  queryActivitySummariesAsync: _Data.queryActivitySummariesAsync,
  queryHeartRateSummariesAsync: _Data.queryHeartRateSummariesAsync,
  querySleepSummariesAsync: _Data.querySleepSummariesAsync,
  queryActivitiesAsync: _Data.queryActivitiesAsync,
  queryHeartRateDataAsync: _Data.queryHeartRateDataAsync,
  querySleepDataAsync: _Data.querySleepDataAsync,
  querySleepQualityAsync: _Data.querySleepQualityAsync,
  querySleepQuality: _Data.querySleepQuality
};
var _default = Data;
exports["default"] = _default;