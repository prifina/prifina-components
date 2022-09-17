'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getActivity = require('../../../node_modules/@dynamic-data/withings-data/dist/esm/mockups/getActivity.js');
var getDevice = require('../../../node_modules/@dynamic-data/withings-data/dist/esm/mockups/getDevice.js');
var Getgoals = require('../../../node_modules/@dynamic-data/withings-data/dist/esm/mockups/Getgoals.js');
var getintradayactivity = require('../../../node_modules/@dynamic-data/withings-data/dist/esm/mockups/getintradayactivity.js');
var getMeas = require('../../../node_modules/@dynamic-data/withings-data/dist/esm/mockups/getMeas.js');
var getUser = require('../../../node_modules/@dynamic-data/withings-data/dist/esm/mockups/getUser.js');
var getworkouts = require('../../../node_modules/@dynamic-data/withings-data/dist/esm/mockups/getworkouts.js');
var heartGet = require('../../../node_modules/@dynamic-data/withings-data/dist/esm/mockups/heartGet.js');
var heartList = require('../../../node_modules/@dynamic-data/withings-data/dist/esm/mockups/heartList.js');
var sleepGet = require('../../../node_modules/@dynamic-data/withings-data/dist/esm/mockups/sleepGet.js');
var sleepSummary = require('../../../node_modules/@dynamic-data/withings-data/dist/esm/mockups/sleepSummary.js');

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
  return ["queryGetactivity", "queryGetgoals", "queryGetintradayactivity", "queryGetmeas", "queryHeartList", "queryHeart", "querySleep", "querySleepSummary", "queryGetDevice", "queryGetUser", "queryGetWorkout"];
};
var getModuleName = function getModuleName() {
  return "Withings";
};
var getFields = function getFields(query) {
  var fields = [];

  switch (query) {
    case "queryGetactivity":
      fields = Object.keys(getActivity.Getactivity);
      break;

    case "queryGetgoals":
      fields = Object.keys(Getgoals.Getgoals);
      break;

    case "queryGetintradayactivity":
      fields = Object.keys(getintradayactivity.Getintradayactivity);
      break;

    case "queryGetmeas":
      fields = Object.keys(getMeas.Getmeas);
      break;

    case "queryHeartList":
      fields = Object.keys(heartList.HeartList);
      break;

    case "queryHeart":
      fields = Object.keys(heartGet.Heart);
      break;

    case "querySleep":
      fields = Object.keys(sleepGet.Sleep);
      break;

    case "querySleepSummary":
      fields = Object.keys(sleepSummary.SleepSummary);
      break;

    case "queryGetDevice":
      fields = Object.keys(getDevice.getDevice);
      break;

    case "queryGetUser":
      fields = Object.keys(getUser.getUser);
      break;

    case "queryGetWorkout":
      fields = Object.keys(getworkouts.getWorkout);
      break;

    default:
      fields = [];
  }

  return fields;
};
var queryGetactivity = function queryGetactivity(_ref) {
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
          content: getActivity.Getactivity
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
var queryGetgoals = function queryGetgoals(_ref2) {
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
          content: Getgoals.Getgoals
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
var queryGetintradayactivity = function queryGetintradayactivity(_ref3) {
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
          content: getintradayactivity.Getintradayactivity
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
var queryGetmeas = function queryGetmeas(_ref4) {
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
          content: getMeas.Getmeas
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
var queryHeartList = function queryHeartList(_ref5) {
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
          content: heartList.HeartList
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
var queryHeart = function queryHeart(_ref6) {
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
          content: heartGet.Heart
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
var querySleep = function querySleep(_ref7) {
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
          content: sleepGet.Sleep
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
var querySleepSummary = function querySleepSummary(_ref8) {
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
          content: sleepSummary.SleepSummary
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
var queryGetDevice = function queryGetDevice(_ref9) {
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
          content: getDevice.getDevice
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
var queryGetUser = function queryGetUser(_ref10) {
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
          content: getUser.getUser
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
var queryGetWorkout = function queryGetWorkout(_ref11) {
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
          content: getworkouts.getWorkout
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
exports.queryGetDevice = queryGetDevice;
exports.queryGetUser = queryGetUser;
exports.queryGetWorkout = queryGetWorkout;
exports.queryGetactivity = queryGetactivity;
exports.queryGetgoals = queryGetgoals;
exports.queryGetintradayactivity = queryGetintradayactivity;
exports.queryGetmeas = queryGetmeas;
exports.queryHeart = queryHeart;
exports.queryHeartList = queryHeartList;
exports.querySleep = querySleep;
exports.querySleepSummary = querySleepSummary;
