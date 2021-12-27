"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querySleepQualityAsync = exports.querySleepQuality = exports.querySleepDataAsync = exports.querySleepData = exports.queryHeartRateDataAsync = exports.queryHeartRateData = exports.querySleepSummariesAsync = exports.querySleepSummary = exports.queryHeartRateSummariesAsync = exports.queryHeartRateSummary = exports.queryActivitySummariesAsync = exports.queryActivitySummary = exports.queryActivitiesAsync = exports.queryActivities = exports.getModuleName = exports.getInfo = void 0;

var _ActivitiesData = require("./ActivitiesData");

var _ActivitiesSummary = require("./ActivitiesSummary");

var _HeartRateData = require("./HeartRateData");

var _HeartRateSummary = require("./HeartRateSummary");

var _SleepData = require("./SleepData");

var _SleepSummary = require("./SleepSummary");

var dataQuery = "query dataObject($input:DataObjectInput!) {\n  getDataObject(input:$input) {\n    result\n  }\n}";
/*
const getAthenaResults = `subscription AthenaResults($id: String!) {
  athenaResults(id: $id) {
    data
    id
  }
}`;
*/

var getInfo = function getInfo() {
  return ["queryActivities", "queryActivitySummary", "queryHeartRateData", "queryHeartRateSummary", "querySleepData", "querySleepSummary", "querySleepQuality", "queryActivitySummariesAsync", "queryHeartRateSummariesAsync", "querySleepSummariesAsync", "queryActivitiesAsync", "queryHeartRateDataAsync", "querySleepDataAsync", "querySleepQualityAsync"];
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
      next: next,
      appId: appID
    });
  }
};

exports.queryActivities = queryActivities;

var queryActivitiesAsync = function queryActivitiesAsync(stage, appID, name, createQuery, fields, filter, next) {
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
      next: next,
      appId: appID
    });
  }
};

exports.queryActivitiesAsync = queryActivitiesAsync;

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
      next: next,
      appId: appID
    });
  }
};

exports.queryActivitySummary = queryActivitySummary;

var queryActivitySummariesAsync = function queryActivitySummariesAsync(stage, appID, name, createQuery, fields, filter, next) {
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
      next: next,
      appId: appID
    });
  }
};

exports.queryActivitySummariesAsync = queryActivitySummariesAsync;

var queryHeartRateSummary = function queryHeartRateSummary(stage, appID, name, createQuery, fields, filter, next) {
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
      next: next,
      appId: appID
    });
  }
};

exports.queryHeartRateSummary = queryHeartRateSummary;

var queryHeartRateSummariesAsync = function queryHeartRateSummariesAsync(stage, appID, name, createQuery, fields, filter, next) {
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
      next: next,
      appId: appID
    });
  }
};

exports.queryHeartRateSummariesAsync = queryHeartRateSummariesAsync;

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
      next: next,
      appId: appID
    });
  }
};

exports.querySleepSummary = querySleepSummary;

var querySleepSummariesAsync = function querySleepSummariesAsync(stage, appID, name, createQuery, fields, filter, next) {
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
      next: next,
      appId: appID
    });
  }
};

exports.querySleepSummariesAsync = querySleepSummariesAsync;

var queryHeartRateData = function queryHeartRateData(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _HeartRateData.HeartRateData
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

exports.queryHeartRateData = queryHeartRateData;

var queryHeartRateDataAsync = function queryHeartRateDataAsync(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _HeartRateData.HeartRateData
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

exports.queryHeartRateDataAsync = queryHeartRateDataAsync;

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
      next: next,
      appId: appID
    });
  }
};

exports.querySleepData = querySleepData;

var querySleepDataAsync = function querySleepDataAsync(stage, appID, name, createQuery, fields, filter, next) {
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
      next: next,
      appId: appID
    });
  }
};

exports.querySleepDataAsync = querySleepDataAsync;

var querySleepQuality = function querySleepQuality(stage, appID, name, createQuery, fields, filter, next) {
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
      next: next,
      appId: appID
    });
  }
};

exports.querySleepQuality = querySleepQuality;

var querySleepQualityAsync = function querySleepQualityAsync(stage, appID, name, createQuery, fields, filter, next) {
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
      next: next,
      appId: appID
    });
  }
};

exports.querySleepQualityAsync = querySleepQualityAsync;