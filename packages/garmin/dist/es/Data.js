"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryPulseoxDataAsync = exports.querySleepsDataAsync = exports.queryEpochsDataAsync = exports.queryDailiesDataAsync = exports.getFields = exports.getModuleName = exports.getInfo = void 0;

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

var getFields = function getFields(query) {
  var fields = [];
  /*
  switch (query) {
    case "queryActivitySummary":
      fields = Object.keys(ActivitySummary);
      break;
    default:
      fields = [];
  }
  */

  return fields;
};

exports.getFields = getFields;

var queryDailiesDataAsync = function queryDailiesDataAsync(_ref) {
  var stage = _ref.stage,
      appID = _ref.appID,
      name = _ref.name,
      createQuery = _ref.createQuery,
      fields = _ref.fields,
      filter = _ref.filter,
      next = _ref.next,
      fieldsList = _ref.fieldsList;

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
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

exports.queryDailiesDataAsync = queryDailiesDataAsync;

var queryEpochsDataAsync = function queryEpochsDataAsync(_ref2) {
  var stage = _ref2.stage,
      appID = _ref2.appID,
      name = _ref2.name,
      createQuery = _ref2.createQuery,
      fields = _ref2.fields,
      filter = _ref2.filter,
      next = _ref2.next,
      fieldsList = _ref2.fieldsList;

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
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

exports.queryEpochsDataAsync = queryEpochsDataAsync;

var querySleepsDataAsync = function querySleepsDataAsync(_ref3) {
  var stage = _ref3.stage,
      appID = _ref3.appID,
      name = _ref3.name,
      createQuery = _ref3.createQuery,
      fields = _ref3.fields,
      filter = _ref3.filter,
      next = _ref3.next,
      fieldsList = _ref3.fieldsList;

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
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

exports.querySleepsDataAsync = querySleepsDataAsync;

var queryPulseoxDataAsync = function queryPulseoxDataAsync(_ref4) {
  var stage = _ref4.stage,
      appID = _ref4.appID,
      name = _ref4.name,
      createQuery = _ref4.createQuery,
      fields = _ref4.fields,
      filter = _ref4.filter,
      next = _ref4.next,
      fieldsList = _ref4.fieldsList;

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
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

exports.queryPulseoxDataAsync = queryPulseoxDataAsync;