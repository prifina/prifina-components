import { Activity } from '../../../node_modules/@dynamic-data/google-data/dist/esm/mockups/activity.js';
import { Location } from '../../../node_modules/@dynamic-data/google-data/dist/esm/mockups/location.js';
import { Places } from '../../../node_modules/@dynamic-data/google-data/dist/esm/mockups/places.js';
import { Routes } from '../../../node_modules/@dynamic-data/google-data/dist/esm/mockups/routes.js';

/*
export const Activity = [
  "p_timestamp\tp_datetime\tp_type\tp_confidence",
  "1417576831121\t2014-12-03T03:20:31.121Z\tSTILL\t87",
  "1417576831121\t2014-12-03T03:20:31.121Z\tUNKNOWN\t10",
*/

var dataQuery = "query dataObject($input:DataObjectInput!) {\n  getDataObject(input:$input) {\n    result\n  }\n}";
var getInfo = function getInfo() {
  return ["queryActivities", "queryLocations", "queryPlaces", "queryRoutes"];
};
var getFields = function getFields(query) {
  var fields = [];

  switch (query) {
    case "queryActivities":
      //console.log("FIELDS...FOUND");
      fields = Activity[0].split("\t");
      break;

    case "queryLocations":
      //console.log("FIELDS...FOUND");
      fields = Location[0].split("\t");
      break;

    case "queryPlaces":
      //console.log("FIELDS...FOUND");
      fields = Object.keys(Places);
      break;

    case "queryRoutes":
      //console.log("FIELDS...FOUND");
      fields = Object.keys(Routes);
      break;

    default:
      fields = [];
  }

  return fields;
};
var getModuleName = function getModuleName() {
  return "GoogleTimeline";
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

  // console.log("QUERY STAGE", stage);
  // console.log("QUERY APP", appID);
  // //console.log("QUERY UUID", uuid);
  // //console.log("QUERY EX", executionID);
  // console.log("QUERY FIELDS", fields);
  // console.log("QUERY FILTER", filter);
  // console.log("QUERY NEXT", next);
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Activity
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
var queryLocations = function queryLocations(_ref2) {
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
          content: Location
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
var queryPlaces = function queryPlaces(_ref3) {
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
          content: Places
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
var queryRoutes = function queryRoutes(_ref4) {
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
          content: Routes
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

export { getFields, getInfo, getModuleName, queryActivities, queryLocations, queryPlaces, queryRoutes };
