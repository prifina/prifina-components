"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryNetflixData = exports.queryOuraHourly = exports.queryOuraDaily = exports.getModuleName = exports.getSubscriptions = exports.getInfo = void 0;

var _activityMockup = require("./activityMockup");

var s3Query = "query s3Object($input:S3ObjectInput!) {\n  getS3Object(input:$input) {\n    result\n  }\n}";

var getInfo = function getInfo() {
  return ["queryOuraDaily", "queryOuraHourly", "queryNetflixData"];
};

exports.getInfo = getInfo;

var getSubscriptions = function getSubscriptions() {
  return [{
    subscription: "queryOuraDaily",
    mockup: _activityMockup.ouraDaily
  }];
};

exports.getSubscriptions = getSubscriptions;

var getModuleName = function getModuleName() {
  return "OuraData";
};

exports.getModuleName = getModuleName;

var queryOuraDaily = function queryOuraDaily(stage, appID, name, createQuery, fields, filter, next) {
  console.log("QUERY STAGE", stage);
  console.log("QUERY APP", appID);
  console.log("QUERY FIELDS", fields);
  console.log("QUERY FILTER", filter);
  console.log("QUERY NEXT", next);

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getS3Object: {
          content: _activityMockup.ouraDaily
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: s3Query,
      name: name,
      fields: fields,
      filter: filter,
      next: next
    });
  }
};

exports.queryOuraDaily = queryOuraDaily;

var queryOuraHourly = function queryOuraHourly(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getS3Object: {
          content: _activityMockup.ouraHourly
        }
      }
    });
  } else {
    return createQuery({
      query: s3Query,
      name: name,
      fields: fields,
      filter: filter,
      next: next
    });
  }
};

exports.queryOuraHourly = queryOuraHourly;

var queryNetflixData = function queryNetflixData(stage, appID, name, createQuery, fields, filter, next) {
  console.log("QUERY STAGE", stage);
  console.log("QUERY APP", appID);
  console.log("QUERY FIELDS", fields);
  console.log("QUERY FILTER", filter);
  console.log("QUERY NEXT", next);

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getS3Object: {
          content: _activityMockup.netflixData
        }
      }
    });
  } else {
    return createQuery({
      query: s3Query,
      name: name,
      fields: fields,
      filter: filter,
      next: next
    });
  }
};

exports.queryNetflixData = queryNetflixData;