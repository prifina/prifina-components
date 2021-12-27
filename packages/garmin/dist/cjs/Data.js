"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryPulseoxDataAsync = exports.querySleepsDataAsync = exports.queryEpochsDataAsync = exports.queryDailiesDataAsync = exports.getModuleName = exports.getInfo = void 0;

var _Mockups = require("./Mockups");

var dataQuery = "query dataObject($input:DataObjectInput!) {\n  getDataObject(input:$input) {\n    result\n  }\n}";

var getInfo = function getInfo() {
  return ["queryDailiesDataAsync", "queryEpochssDataAsync", "querySleepsDataAsync", "queryPulseoxDataAsync"];
};

exports.getInfo = getInfo;

var getModuleName = function getModuleName() {
  return "Garmin";
};

exports.getModuleName = getModuleName;

var queryDailiesDataAsync = function queryDailiesDataAsync(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _Mockups.DailiesData
        }
      }
    });
  } else {
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID
    });
  }
};

exports.queryDailiesDataAsync = queryDailiesDataAsync;

var queryEpochsDataAsync = function queryEpochsDataAsync(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _Mockups.EpochsData
        }
      }
    });
  } else {
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID
    });
  }
};

exports.queryEpochsDataAsync = queryEpochsDataAsync;

var querySleepsDataAsync = function querySleepsDataAsync(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _Mockups.SleepsData
        }
      }
    });
  } else {
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID
    });
  }
};

exports.querySleepsDataAsync = querySleepsDataAsync;

var queryPulseoxDataAsync = function queryPulseoxDataAsync(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _Mockups.PulseoxData
        }
      }
    });
  } else {
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID
    });
  }
};

exports.queryPulseoxDataAsync = queryPulseoxDataAsync;