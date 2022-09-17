'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ActivitySummary = require('../../../node_modules/@dynamic-data/ios-health-data/dist/esm/mockups/ActivitySummary.js');
var Characteristic = require('../../../node_modules/@dynamic-data/ios-health-data/dist/esm/mockups/Characteristic.js');
var HKAudiogramSample = require('../../../node_modules/@dynamic-data/ios-health-data/dist/esm/mockups/HKAudiogramSample.js');
var HKClinicalRecord = require('../../../node_modules/@dynamic-data/ios-health-data/dist/esm/mockups/HKClinicalRecord.js');
var HKElectrocardiogram = require('../../../node_modules/@dynamic-data/ios-health-data/dist/esm/mockups/HKElectrocardiogram.js');
var HKWorkoutConfiguration = require('../../../node_modules/@dynamic-data/ios-health-data/dist/esm/mockups/HKWorkoutConfiguration.js');
var HKWorkoutSession = require('../../../node_modules/@dynamic-data/ios-health-data/dist/esm/mockups/HKWorkoutSession.js');
var WorkoutRoute = require('../../../node_modules/@dynamic-data/ios-health-data/dist/esm/mockups/WorkoutRoute.js');
var Workouts = require('../../../node_modules/@dynamic-data/ios-health-data/dist/esm/mockups/Workouts.js');

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
  return ["queryCharacteristics", "queryHKActivitySummary", "queryHKAudiogramSample", "queryHKClinicalRecord", "queryHKElectrocardiogram", "queryHKWorkout", "queryHKWorkoutConfiguration", "queryHKWorkoutRoute", "queryHKWorkoutSession"];
};
var getModuleName = function getModuleName() {
  return "iOS Health";
};
var getFields = function getFields(query) {
  var fields = [];

  switch (query) {
    case "queryCharacteristics":
      fields = Object.keys(Characteristic.Characteristics);
      break;

    case "queryHKActivitySummary":
      fields = Object.keys(ActivitySummary.HKActivitySummary);
      break;

    case "queryHKAudiogramSample":
      fields = Object.keys(HKAudiogramSample.HKAudiogramSample);
      break;

    case "queryHKClinicalRecord":
      fields = Object.keys(HKClinicalRecord.HKClinicalRecord);
      break;

    case "queryHKElectrocardiogram":
      fields = Object.keys(HKElectrocardiogram.HKElectrocardiogram);
      break;

    case "queryHKWorkout":
      fields = Object.keys(Workouts.HKWorkout);
      break;

    case "queryHKWorkoutConfiguration":
      fields = Object.keys(HKWorkoutConfiguration.HKWorkoutConfiguration);
      break;

    case "queryHKWorkoutRoute":
      fields = Object.keys(WorkoutRoute.HKWorkoutRoute);
      break;

    case "queryHKWorkoutSession":
      fields = Object.keys(HKWorkoutSession.HKWorkoutSession);
      break;

    default:
      fields = [];
  }

  return fields;
};
var queryCharacteristics = function queryCharacteristics(_ref) {
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
          content: Characteristic.Characteristics
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
var queryHKActivitySummary = function queryHKActivitySummary(_ref2) {
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
          content: ActivitySummary.HKActivitySummary
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
var queryHKAudiogramSample = function queryHKAudiogramSample(_ref3) {
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
          content: HKAudiogramSample.HKAudiogramSample
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
var queryHKClinicalRecord = function queryHKClinicalRecord(_ref4) {
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
          content: HKClinicalRecord.HKClinicalRecord
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
var queryHKElectrocardiogram = function queryHKElectrocardiogram(_ref5) {
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
          content: HKElectrocardiogram.HKElectrocardiogram
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
var queryHKWorkout = function queryHKWorkout(_ref6) {
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
          content: Workouts.HKWorkout
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
var queryHKWorkoutConfiguration = function queryHKWorkoutConfiguration(_ref7) {
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
          content: HKWorkoutConfiguration.HKWorkoutConfiguration
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
var queryHKWorkoutRoute = function queryHKWorkoutRoute(_ref8) {
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
          content: WorkoutRoute.HKWorkoutRoute
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
var queryHKWorkoutSession = function queryHKWorkoutSession(_ref9) {
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
          content: HKWorkoutSession.HKWorkoutSession
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

exports.getFields = getFields;
exports.getInfo = getInfo;
exports.getModuleName = getModuleName;
exports.queryCharacteristics = queryCharacteristics;
exports.queryHKActivitySummary = queryHKActivitySummary;
exports.queryHKAudiogramSample = queryHKAudiogramSample;
exports.queryHKClinicalRecord = queryHKClinicalRecord;
exports.queryHKElectrocardiogram = queryHKElectrocardiogram;
exports.queryHKWorkout = queryHKWorkout;
exports.queryHKWorkoutConfiguration = queryHKWorkoutConfiguration;
exports.queryHKWorkoutRoute = queryHKWorkoutRoute;
exports.queryHKWorkoutSession = queryHKWorkoutSession;
