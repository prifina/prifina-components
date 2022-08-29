'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rawSync = require('../node_modules/@dynamic-data/sensor-bno055-data/dist/esm/mockups/raw-sync.js');
var rawAsync = require('../node_modules/@dynamic-data/sensor-bno055-data/dist/esm/mockups/raw-async.js');

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
  return ["queryRawSync", "queryRawAsync"];
};
var getModuleName = function getModuleName() {
  return "Sensor-BNO055";
};
var getFields = function getFields(query) {
  var fields = [];

  switch (query) {
    case "queryRawSync":
      fields = Object.keys(rawSync.RawSync);
      break;

    case "queryRawAsync":
      fields = rawAsync.RawAsync[0].split("\t");
      break;

    default:
      fields = [];
  }

  return fields;
};
var queryRawSync = function queryRawSync(_ref) {
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
          content: rawSync.RawSync
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
var queryRawAsync = function queryRawAsync(_ref2) {
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
          content: rawAsync.RawAsync
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

exports.getFields = getFields;
exports.getInfo = getInfo;
exports.getModuleName = getModuleName;
exports.queryRawAsync = queryRawAsync;
exports.queryRawSync = queryRawSync;
