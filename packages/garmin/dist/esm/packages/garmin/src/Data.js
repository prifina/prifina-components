import { DailiesData } from '../../../node_modules/@dynamic-data/garmin-data/dist/esm/mockups/dailies.js';
import { DailiesDataObject } from '../../../node_modules/@dynamic-data/garmin-data/dist/esm/mockups/dailiesObject.js';
import { EpochsData } from '../../../node_modules/@dynamic-data/garmin-data/dist/esm/mockups/epochs.js';
import { EpochsDataObject } from '../../../node_modules/@dynamic-data/garmin-data/dist/esm/mockups/epochsObject.js';
import { SleepsData } from '../../../node_modules/@dynamic-data/garmin-data/dist/esm/mockups/sleeps.js';
import { SleepsDataObject } from '../../../node_modules/@dynamic-data/garmin-data/dist/esm/mockups/sleepsObject.js';
import { PulseoxData } from '../../../node_modules/@dynamic-data/garmin-data/dist/esm/mockups/pulseox.js';
import { PulseoxObject } from '../../../node_modules/@dynamic-data/garmin-data/dist/esm/mockups/pulseoxObject.js';

var dataQuery = "query dataObject($input:DataObjectInput!) {\n  getDataObject(input:$input) {\n    result\n  }\n}";
var getInfo = function getInfo() {
  return ["queryDailiesDataAsync", "queryEpochsDataAsync", "querySleepsDataAsync", "queryPulseoxDataAsync", "queryDailiesData", "queryEpochsData", "querySleepsData", "queryPulseoxData"];
};
var getModuleName = function getModuleName() {
  return "Garmin";
};
var getFields = function getFields(query) {
  var fields = [];

  switch (query) {
    case "queryDailiesData":
      fields = Object.keys(DailiesDataObject[0]);
      break;

    case "queryEpochsData":
      fields = Object.keys(EpochsDataObject[0]);
      break;

    case "querySleepsData":
      fields = Object.keys(SleepsDataObject[0]);
      break;

    case "queryPulseoxData":
      fields = Object.keys(PulseoxObject[0]);
      break;

    case "queryDailiesDataAsync":
      fields = DailiesData[0].split(",");
      break;

    case "queryEpochsDataAsync":
      fields = EpochsData[0].split(",");
      break;

    case "querySleepsDataAsync":
      fields = SleepsData[0].split(",");
      break;

    case "queryPulseoxDataAsync":
      fields = PulseoxData[0].split(",");
      break;

    default:
      fields = [];
  }

  return fields;
};
var queryDailiesData = function queryDailiesData(_ref) {
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
          content: DailiesDataObject
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
var queryEpochsData = function queryEpochsData(_ref2) {
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
          content: EpochsDataObject
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
var querySleepsData = function querySleepsData(_ref3) {
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
          content: SleepsDataObject
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
var queryPulseoxData = function queryPulseoxData(_ref4) {
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
          content: PulseoxObject
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
var queryDailiesDataAsync = function queryDailiesDataAsync(_ref5) {
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
          content: DailiesData
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
var queryEpochsDataAsync = function queryEpochsDataAsync(_ref6) {
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
          content: EpochsData
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
var querySleepsDataAsync = function querySleepsDataAsync(_ref7) {
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
          content: SleepsData
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
var queryPulseoxDataAsync = function queryPulseoxDataAsync(_ref8) {
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
          content: PulseoxData
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

export { getFields, getInfo, getModuleName, queryDailiesData, queryDailiesDataAsync, queryEpochsData, queryEpochsDataAsync, queryPulseoxData, queryPulseoxDataAsync, querySleepsData, querySleepsDataAsync };
