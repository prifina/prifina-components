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

var queryActivitySummariesAsync = function queryActivitySummariesAsync(_ref) {
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
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

exports.queryActivitySummariesAsync = queryActivitySummariesAsync;

var queryActivitySummary = function queryActivitySummary(_ref2) {
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
          content: _activitySummary.ActivitySummary
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
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

exports.queryActivitySummary = queryActivitySummary;

var queryReadinessSummariesAsync = function queryReadinessSummariesAsync(_ref3) {
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
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

exports.queryReadinessSummariesAsync = queryReadinessSummariesAsync;

var queryReadinessSummary = function queryReadinessSummary(_ref4) {
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
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

exports.queryReadinessSummary = queryReadinessSummary;

var querySleepSummariesAsync = function querySleepSummariesAsync(_ref5) {
  var stage = _ref5.stage,
      appID = _ref5.appID,
      name = _ref5.name,
      createQuery = _ref5.createQuery,
      fields = _ref5.fields,
      filter = _ref5.filter,
      next = _ref5.next,
      fieldsList = _ref5.fieldsList;

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
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

exports.querySleepSummariesAsync = querySleepSummariesAsync;

var querySleepSummary = function querySleepSummary(_ref6) {
  var stage = _ref6.stage,
      appID = _ref6.appID,
      name = _ref6.name,
      createQuery = _ref6.createQuery,
      fields = _ref6.fields,
      filter = _ref6.filter,
      next = _ref6.next,
      fieldsList = _ref6.fieldsList;

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
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

exports.querySleepSummary = querySleepSummary;

var querySleepDataAsync = function querySleepDataAsync(_ref7) {
  var stage = _ref7.stage,
      appID = _ref7.appID,
      name = _ref7.name,
      createQuery = _ref7.createQuery,
      fields = _ref7.fields,
      filter = _ref7.filter,
      next = _ref7.next,
      fieldsList = _ref7.fieldsList;

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
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

exports.querySleepDataAsync = querySleepDataAsync;

var querySleepData = function querySleepData(_ref8) {
  var stage = _ref8.stage,
      appID = _ref8.appID,
      name = _ref8.name,
      createQuery = _ref8.createQuery,
      fields = _ref8.fields,
      filter = _ref8.filter,
      next = _ref8.next,
      fieldsList = _ref8.fieldsList;

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
      appId: appID,
      fieldsList: fieldsList
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