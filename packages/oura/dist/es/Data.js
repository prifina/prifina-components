"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querySleepData = exports.querySleepDataAsync = exports.querySleepSummary = exports.querySleepSummariesAsync = exports.queryReadinessSummary = exports.queryReadinessSummariesAsync = exports.queryActivitySummary = exports.queryActivitySummariesAsync = exports.getFields = exports.getModuleName = exports.getInfo = void 0;

var _sleepSummary = require("./sleepSummary");

var _activitySummary = require("./activitySummary");

var _readinessSummary = require("./readinessSummary");

/*
import { ouraDaily } from "./activityMockup";
import { ouraHourly } from "./activityMockup";
import { netflixData } from "./activityMockup";
*/
var dataQuery = "query dataObject($input:DataObjectInput!) {\n  getDataObject(input:$input) {\n    result\n  }\n}";
/*
const s3Query = `query s3Object($input:S3ObjectInput!) {
  getS3Object(input:$input) {
    result
  }
}`;
*/

var getInfo = function getInfo() {
  //return ["queryOuraDaily", "queryOuraHourly", "queryNetflixData"];
  return ["queryActivitySummary", "queryActivitySummariesAsync", "queryReadinessSummary", "queryReadinessSummariesAsync", "querySleepData", // longest sleep period
  "querySleepDataAsync", "querySleepSummary", "querySleepSummariesAsync"];
};

exports.getInfo = getInfo;

var getModuleName = function getModuleName() {
  return "Oura";
};

exports.getModuleName = getModuleName;

var getFields = function getFields(query) {
  var fields = [];

  switch (query) {
    case "queryActivitySummary":
    case "queryActivitySummariesAsync":
      fields = Object.keys(_activitySummary.ActivitySummary);
      break;

    case "queryReadinessSummary":
    case "queryReadinessSummariesAsync":
      fields = Object.keys(_readinessSummary.ReadinessSummary);
      break;

    case "querySleepData":
    case "querySleepDataAsync":
    case "querySleepSummary":
    case "querySleepSummariesAsync":
      fields = Object.keys(_sleepSummary.SleepSummary);
      break;

    default:
      fields = [];
  }

  return fields;
};

exports.getFields = getFields;

var queryActivitySummariesAsync = function queryActivitySummariesAsync(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _activitySummary.ActivitySummary
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

exports.queryActivitySummariesAsync = queryActivitySummariesAsync;

var queryActivitySummary = function queryActivitySummary(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _activitySummary.ActivitySummary
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

var queryReadinessSummariesAsync = function queryReadinessSummariesAsync(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _readinessSummary.ReadinessSummary
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

exports.queryReadinessSummariesAsync = queryReadinessSummariesAsync;

var queryReadinessSummary = function queryReadinessSummary(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _readinessSummary.ReadinessSummary
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

exports.queryReadinessSummary = queryReadinessSummary;

var querySleepSummariesAsync = function querySleepSummariesAsync(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _sleepSummary.SleepSummary
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

exports.querySleepSummariesAsync = querySleepSummariesAsync;

var querySleepSummary = function querySleepSummary(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _sleepSummary.SleepSummary
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

var querySleepDataAsync = function querySleepDataAsync(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _sleepSummary.SleepSummary
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

exports.querySleepDataAsync = querySleepDataAsync;

var querySleepData = function querySleepData(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: _sleepSummary.SleepSummary
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
/*
export const queryOuraDaily = (
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next
) => {
  console.log("QUERY STAGE", stage);
  console.log("QUERY APP", appID);
  console.log("QUERY FIELDS", fields);
  console.log("QUERY FILTER", filter);
  console.log("QUERY NEXT", next);
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getS3Object: { content: ouraDaily },
      },
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html

    return createQuery({ query: s3Query, name: name, fields, filter, next });
  }
};

export const queryOuraHourly = (
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next
) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getS3Object: { content: ouraHourly },
      },
    });
  } else {
    return createQuery({ query: s3Query, name: name, fields, filter, next });
  }
};

export const queryNetflixData = (
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next
) => {
  console.log("QUERY STAGE", stage);
  console.log("QUERY APP", appID);
  console.log("QUERY FIELDS", fields);
  console.log("QUERY FILTER", filter);
  console.log("QUERY NEXT", next);
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getS3Object: { content: netflixData },
      },
    });
  } else {
    return createQuery({ query: s3Query, name: name, fields, filter, next });
  }
};

*/


exports.querySleepData = querySleepData;