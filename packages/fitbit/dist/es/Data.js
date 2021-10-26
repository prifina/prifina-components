"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querySleepData = exports.queryHearRateData = exports.querySleepSummary = exports.queryHearRataSummary = exports.queryActivitySummary = exports.queryActivities = exports.getModuleName = exports.getInfo = void 0;

var _ActivitiesData = require("./ActivitiesData");

var _ActivitiesSummary = require("./ActivitiesSummary");

var _HeartRateData = require("./HeartRateData");

var _HeartRateSummary = require("./HeartRateSummary");

var _SleepData = require("./SleepData");

var _SleepSummary = require("./SleepSummary");

var dataQuery = "query dataObject($input:DataObjectInput!) {\n  getDataObject(input:$input) {\n    result\n  }\n}";

var getInfo = function getInfo() {
  return ["queryActivities", "queryActivitySummary", "queryHearRateData", "queryHearRataSummary", "querySleepData", "querySleepSummary"];
};

exports.getInfo = getInfo;

var getModuleName = function getModuleName() {
  return "Fitbit";
};

exports.getModuleName = getModuleName;

var queryActivities = function queryActivities(stage, appID, name, createQuery, fields, filter, next) {
  console.log("QUERY STAGE", stage);
  console.log("QUERY APP", appID); //console.log("QUERY UUID", uuid);
  //console.log("QUERY EX", executionID);

  console.log("QUERY FIELDS", fields);
  console.log("QUERY FILTER", filter);
  console.log("QUERY NEXT", next);

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _ActivitiesData.ActivitiesData
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next
    });
  }
};

exports.queryActivities = queryActivities;

var queryActivitySummary = function queryActivitySummary(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _ActivitiesSummary.ActivitiesSummary
        }
      }
    });
  } else {
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next
    });
  }
};

exports.queryActivitySummary = queryActivitySummary;

var queryHearRataSummary = function queryHearRataSummary(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _HeartRateSummary.HeartRateSummary
        }
      }
    });
  } else {
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next
    });
  }
};

exports.queryHearRataSummary = queryHearRataSummary;

var querySleepSummary = function querySleepSummary(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _SleepSummary.SleepSummary
        }
      }
    });
  } else {
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next
    });
  }
};

exports.querySleepSummary = querySleepSummary;

var queryHearRateData = function queryHearRateData(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _HeartRateData.HearRateData
        }
      }
    });
  } else {
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next
    });
  }
};

exports.queryHearRateData = queryHearRateData;

var querySleepData = function querySleepData(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _SleepData.SleepData
        }
      }
    });
  } else {
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next
    });
  }
};

exports.querySleepData = querySleepData;