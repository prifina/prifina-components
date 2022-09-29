'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var activitiesData = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/activitiesData.js');
var activitiesDataAsync = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/activitiesDataAsync.js');
var activitiesSummary = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/activitiesSummary.js');
var activitiesSummaryAsync = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/activitiesSummaryAsync.js');
var heartRateData = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/heartRateData.js');
var heartRateDataAsync = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/heartRateDataAsync.js');
var heartRateSummary = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/heartRateSummary.js');
var heartRateSummaryAsync = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/heartRateSummaryAsync.js');
var sleepData = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/sleepData.js');
var sleepDataAsync = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/sleepDataAsync.js');
var sleepSummary = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/sleepSummary.js');
var sleepSummaryAsync = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/sleepSummaryAsync.js');
var sleepQuality = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/sleepQuality.js');
var sleepQualityAsync = require('../../../node_modules/@dynamic-data/fitbit-data/dist/esm/mockups/sleepQualityAsync.js');

// import { ActivitiesData, ActivitiesDataAsync } from "./ActivitiesData";
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
var getModuleName = function getModuleName() {
  return "Fitbit";
};
var getFields = function getFields(query) {
  var fields = [];

  switch (query) {
    case "queryActivitySummary":
      fields = Object.keys(activitiesSummary.ActivitiesSummary);
      break;

    case "queryHeartRateSummary":
      fields = Object.keys(heartRateSummary.HeartRateSummary);
      break;

    case "querySleepSummary":
      fields = Object.keys(sleepSummary.SleepSummary);
      break;

    case "queryActivities":
      fields = Object.keys(activitiesData.ActivitiesData);
      break;

    case "queryHeartRateData":
      fields = Object.keys(heartRateData.HeartRateData);
      break;

    case "querySleepData":
      fields = Object.keys(sleepData.SleepData);
      break;

    case "querySleepQuality":
      fields = Object.keys(sleepQuality.SleepQuality);
      break;

    case "queryActivitiesAsync":
      fields = activitiesDataAsync.ActivitiesDataAsync[0].split("\t");
      break;

    case "queryHeartRateDataAsync":
      fields = heartRateDataAsync.HeartRateDataAsync[0].split("\t");
      break;

    case "querySleepDataAsync":
      fields = sleepDataAsync.SleepDataAsync[0].split("\t");
      break;

    case "querySleepQualityAsync":
      fields = sleepQualityAsync.SleepQualityAsync[0].split("\t");
      break;

    case "queryActivitySummariesAsync":
      fields = activitiesSummaryAsync.ActivitiesSummaryAsync[0].split("\t");
      break;

    case "queryHeartRateSummariesAsync":
      fields = heartRateSummaryAsync.HeartRateSummaryAsync[0].split("\t");
      break;

    case "querySleepSummariesAsync":
      fields = sleepSummaryAsync.SleepSummaryAsync[0].split("\t");
      break;

    default:
      fields = [];
  }

  return fields;
};
var queryActivities = function queryActivities(_ref) {
  var stage = _ref.stage,
      appID = _ref.appID,
      name = _ref.name,
      createQuery = _ref.createQuery,
      fields = _ref.fields,
      filter = _ref.filter,
      next = _ref.next,
      fieldsList = _ref.fieldsList;
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
          content: activitiesData.ActivitiesData
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
var queryActivitiesAsync = function queryActivitiesAsync(_ref2) {
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
          content: activitiesDataAsync.ActivitiesDataAsync
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
var queryActivitySummary = function queryActivitySummary(_ref3) {
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
          content: activitiesSummary.ActivitiesSummary
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
var queryActivitySummariesAsync = function queryActivitySummariesAsync(_ref4) {
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
          content: activitiesSummaryAsync.ActivitiesSummaryAsync
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
var queryHeartRateSummary = function queryHeartRateSummary(_ref5) {
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
          content: heartRateSummary.HeartRateSummary
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
var queryHeartRateSummariesAsync = function queryHeartRateSummariesAsync(_ref6) {
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
          content: heartRateSummaryAsync.HeartRateSummaryAsync
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
var querySleepSummary = function querySleepSummary(_ref7) {
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
          content: sleepSummary.SleepSummary
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
var querySleepSummariesAsync = function querySleepSummariesAsync(_ref8) {
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
          content: sleepSummaryAsync.SleepSummaryAsync
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
var queryHeartRateData = function queryHeartRateData(_ref9) {
  var stage = _ref9.stage,
      appID = _ref9.appID,
      name = _ref9.name,
      createQuery = _ref9.createQuery,
      fields = _ref9.fields,
      filter = _ref9.filter,
      next = _ref9.next,
      fieldsList = _ref9.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: heartRateData.HeartRateData
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
var queryHeartRateDataAsync = function queryHeartRateDataAsync(_ref10) {
  var stage = _ref10.stage,
      appID = _ref10.appID,
      name = _ref10.name,
      createQuery = _ref10.createQuery,
      fields = _ref10.fields,
      filter = _ref10.filter,
      next = _ref10.next,
      fieldsList = _ref10.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: heartRateDataAsync.HeartRateDataAsync
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
var querySleepData = function querySleepData(_ref11) {
  var stage = _ref11.stage,
      appID = _ref11.appID,
      name = _ref11.name,
      createQuery = _ref11.createQuery,
      fields = _ref11.fields,
      filter = _ref11.filter,
      next = _ref11.next,
      fieldsList = _ref11.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: sleepData.SleepData
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
var querySleepDataAsync = function querySleepDataAsync(_ref12) {
  var stage = _ref12.stage,
      appID = _ref12.appID,
      name = _ref12.name,
      createQuery = _ref12.createQuery,
      fields = _ref12.fields,
      filter = _ref12.filter,
      next = _ref12.next,
      fieldsList = _ref12.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: sleepDataAsync.SleepDataAsync
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
var querySleepQuality = function querySleepQuality(_ref13) {
  var stage = _ref13.stage,
      appID = _ref13.appID,
      name = _ref13.name,
      createQuery = _ref13.createQuery,
      fields = _ref13.fields,
      filter = _ref13.filter,
      next = _ref13.next,
      fieldsList = _ref13.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: sleepQuality.SleepQuality
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
var querySleepQualityAsync = function querySleepQualityAsync(_ref14) {
  var stage = _ref14.stage,
      appID = _ref14.appID,
      name = _ref14.name,
      createQuery = _ref14.createQuery,
      fields = _ref14.fields,
      filter = _ref14.filter,
      next = _ref14.next,
      fieldsList = _ref14.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: sleepQualityAsync.SleepQualityAsync
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

exports.getFields = getFields;
exports.getInfo = getInfo;
exports.getModuleName = getModuleName;
exports.queryActivities = queryActivities;
exports.queryActivitiesAsync = queryActivitiesAsync;
exports.queryActivitySummariesAsync = queryActivitySummariesAsync;
exports.queryActivitySummary = queryActivitySummary;
exports.queryHeartRateData = queryHeartRateData;
exports.queryHeartRateDataAsync = queryHeartRateDataAsync;
exports.queryHeartRateSummariesAsync = queryHeartRateSummariesAsync;
exports.queryHeartRateSummary = queryHeartRateSummary;
exports.querySleepData = querySleepData;
exports.querySleepDataAsync = querySleepDataAsync;
exports.querySleepQuality = querySleepQuality;
exports.querySleepQualityAsync = querySleepQualityAsync;
exports.querySleepSummariesAsync = querySleepSummariesAsync;
exports.querySleepSummary = querySleepSummary;
