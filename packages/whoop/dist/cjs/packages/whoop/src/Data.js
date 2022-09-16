'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var activityTypes = require('../../../node_modules/@dynamic-data/whoop-data/dist/esm/mockups/activityTypes.js');
var aggregateData = require('../../../node_modules/@dynamic-data/whoop-data/dist/esm/mockups/aggregateData.js');
var event = require('../../../node_modules/@dynamic-data/whoop-data/dist/esm/mockups/event.js');
var membership = require('../../../node_modules/@dynamic-data/whoop-data/dist/esm/mockups/membership.js');
var metric = require('../../../node_modules/@dynamic-data/whoop-data/dist/esm/mockups/metric.js');
var report = require('../../../node_modules/@dynamic-data/whoop-data/dist/esm/mockups/report.js');
var sleepDetails = require('../../../node_modules/@dynamic-data/whoop-data/dist/esm/mockups/sleepDetails.js');
var surveryResponse = require('../../../node_modules/@dynamic-data/whoop-data/dist/esm/mockups/surveryResponse.js');
var user = require('../../../node_modules/@dynamic-data/whoop-data/dist/esm/mockups/user.js');
var VoiceOfWhoop = require('../../../node_modules/@dynamic-data/whoop-data/dist/esm/mockups/VoiceOfWhoop.js');
var VoiceOfWhoopCycle = require('../../../node_modules/@dynamic-data/whoop-data/dist/esm/mockups/VoiceOfWhoopCycle.js');
var workout = require('../../../node_modules/@dynamic-data/whoop-data/dist/esm/mockups/workout.js');

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
  return ["queryActivityType", "queryAggregateData", "queryEvent", "queryMembership", "queryMetric", "queryReport", "querySleepDetails", "querySurveryResponse", "queryUser", "queryVoiceOfWhoop", "queryVoiceOfWhoopCycle", "queryWorkout"];
};
var getModuleName = function getModuleName() {
  return "Whoop";
};
var getFields = function getFields(query) {
  var fields = [];

  switch (query) {
    case "queryActivityType":
      fields = Object.keys(activityTypes.ActivityType);
      break;

    case "queryAggregateData":
      fields = Object.keys(aggregateData.AggregateData);
      break;

    case "queryEvent":
      fields = Object.keys(event.Event);
      break;

    case "queryMembership":
      fields = Object.keys(membership.Membership);
      break;

    case "queryMetric":
      fields = Object.keys(metric.Metric);
      break;

    case "queryReport":
      fields = Object.keys(report.Report);
      break;

    case "querySleepDetails":
      fields = Object.keys(sleepDetails.SleepDetails);
      break;

    case "querySurveryResponse":
      fields = Object.keys(surveryResponse.SurveryResponse);
      break;

    case "queryUser":
      fields = Object.keys(user.User);
      break;

    case "queryVoiceOfWhoop":
      fields = Object.keys(VoiceOfWhoop.VoiceOfWhoop);
      break;

    case "queryVoiceOfWhoopCycle":
      fields = Object.keys(VoiceOfWhoopCycle.VoiceOfWhoopCycle);
      break;

    case "queryWorkout":
      fields = Object.keys(workout.Workout);
      break;

    default:
      fields = [];
  }

  return fields;
};
var queryActivityType = function queryActivityType(_ref) {
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
          content: activityTypes.ActivityType
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
var queryAggregateData = function queryAggregateData(_ref2) {
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
          content: aggregateData.AggregateData
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
var queryEvent = function queryEvent(_ref3) {
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
          content: event.Event
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
var queryMembership = function queryMembership(_ref4) {
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
          content: membership.Membership
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
var queryMetric = function queryMetric(_ref5) {
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
          content: metric.Metric
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
var queryReport = function queryReport(_ref6) {
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
          content: report.Report
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
var querySleepDetails = function querySleepDetails(_ref7) {
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
          content: sleepDetails.SleepDetails
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
var querySurveryResponse = function querySurveryResponse(_ref8) {
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
          content: surveryResponse.SurveryResponse
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
var queryUser = function queryUser(_ref9) {
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
          content: user.User
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
var queryVoiceOfWhoop = function queryVoiceOfWhoop(_ref10) {
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
          content: VoiceOfWhoop.VoiceOfWhoop
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
var queryVoiceOfWhoopCycle = function queryVoiceOfWhoopCycle(_ref11) {
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
          content: VoiceOfWhoopCycle.VoiceOfWhoopCycle
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
var queryWorkout = function queryWorkout(_ref12) {
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
          content: workout.Workout
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
exports.queryActivityType = queryActivityType;
exports.queryAggregateData = queryAggregateData;
exports.queryEvent = queryEvent;
exports.queryMembership = queryMembership;
exports.queryMetric = queryMetric;
exports.queryReport = queryReport;
exports.querySleepDetails = querySleepDetails;
exports.querySurveryResponse = querySurveryResponse;
exports.queryUser = queryUser;
exports.queryVoiceOfWhoop = queryVoiceOfWhoop;
exports.queryVoiceOfWhoopCycle = queryVoiceOfWhoopCycle;
exports.queryWorkout = queryWorkout;
