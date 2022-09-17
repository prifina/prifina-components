import { AccConfig, AccData, AccInfo } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/Acc.js';
import { AdvSettings, AdvState, BleConfig, BondList, BondingSettings, PeerChange, PeerList, ScanResult } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/Ble.js';
import { DebugLogConfig, DebugLogResult, DebugMessage, DebugMessageConfig, FaultInfo, ResetReason } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/Debug.js';
import { ECGConfig, ECGData, ECGInfo } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/ECG.js';
import { GyroConfig, GyroData, GyroInfo } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/Gyro.js';
import { HRData, HRInfo } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/HR.js';
import { IMU6Data, IMU6MData, IMU9Data, IMUConfig, IMUInfo } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/IMU.js';
import { AppInfo, DeviceInfo, ModuleStatus } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/Info.js';
import { LedState, Leds } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/LED.js';
import { MagnConfig, MagnData, MagnInfo } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/Magn.js';
import { CalibrationData, CalibrationMatrix, ProductData, StepsDone } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/Manufacuring.js';
import { Memory } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/Memory.js';
import { SystemModeStatus } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/Mode.js';
import { State, StateChange } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/State.js';
import { TempInfo, TemperatureValue } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/Temp.js';
import { EepromData, EepromInfo } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/eeprom.js';
import { VisualIndState } from '../../../node_modules/@dynamic-data/movesense-data/dist/esm/mockups/ind.js';

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
  return ["queryAccConfig", "queryAccData", "queryAccInfo", "queryAdvSettings", "queryAdvState", "queryAppInfo", "queryBleConfig", "queryBondList", "queryBondingSettings", "queryCalibrationData", "queryCalibrationMatrix", "queryDebugLogConfig", "queryDebugLogResult", "queryDebugMessage", "queryDebugMessageConfig", "queryDeviceInfo", "queryECGConfig", "queryECGData", "queryECGInfo", "queryEepromData", "queryEepromInfo", "queryFaultInfo", "queryGyroConfig", "queryGyroData", "queryGyroInfo", "queryHRData", "queryHRInfo", "queryIMU6Data", "queryIMU6MData", "queryIMU9Data", "queryIMUConfig", "queryIMUInfo", "queryLedState", "queryLeds", "queryMagnConfig", "queryMagnData", "queryMagnInfo", "queryMemory", "queryModuleStatus", "queryPeerChange", "queryPeerList", "queryProductData", "queryResetReason", "queryScanResult", "queryState", "queryStateChange", "queryStepsDone", "querySystemModeStatus", "queryTempInfo", "queryTemperatureValue", "queryVisualIndState"];
};
var getModuleName = function getModuleName() {
  return "Movesense";
};
var getFields = function getFields(query) {
  var fields = [];

  switch (query) {
    case "queryAccConfig":
      fields = Object.keys(AccConfig);
      break;

    case "queryAccData":
      fields = Object.keys(AccData);
      break;

    case "queryAccInfo":
      fields = Object.keys(AccInfo);
      break;

    case "queryAdvSettings":
      fields = Object.keys(AdvSettings);
      break;

    case "queryAdvState":
      fields = Object.keys(AdvState);
      break;

    case "queryAppInfo":
      fields = Object.keys(AppInfo);
      break;

    case "queryBleConfig":
      fields = Object.keys(BleConfig);
      break;

    case "queryBondList":
      fields = Object.keys(BondList);
      break;

    case "queryBondingSettings":
      fields = Object.keys(BondingSettings);
      break;

    case "queryCalibrationData":
      fields = Object.keys(CalibrationData);
      break;

    case "queryCalibrationMatrix":
      fields = Object.keys(CalibrationMatrix);
      break;

    case "queryDebugLogConfig":
      fields = Object.keys(DebugLogConfig);
      break;

    case "queryDebugLogResult":
      fields = Object.keys(DebugLogResult);
      break;

    case "queryDebugMessage":
      fields = Object.keys(DebugMessage);
      break;

    case "queryDebugMessageConfig":
      fields = Object.keys(DebugMessageConfig);
      break;

    case "queryDeviceInfo":
      fields = Object.keys(DeviceInfo);
      break;

    case "queryECGConfig":
      fields = Object.keys(ECGConfig);
      break;

    case "queryECGData":
      fields = Object.keys(ECGData);
      break;

    case "queryECGInfo":
      fields = Object.keys(ECGInfo);
      break;

    case "queryEepromData":
      fields = Object.keys(EepromData);
      break;

    case "queryEepromInfo":
      fields = Object.keys(EepromInfo);
      break;

    case "queryFaultInfo":
      fields = Object.keys(FaultInfo);
      break;

    case "queryGyroConfig":
      fields = Object.keys(GyroConfig);
      break;

    case "queryGyroData":
      fields = Object.keys(GyroData);
      break;

    case "queryGyroInfo":
      fields = Object.keys(GyroInfo);
      break;

    case "queryHRData":
      fields = Object.keys(HRData);
      break;

    case "queryHRInfo":
      fields = Object.keys(HRInfo);
      break;

    case "queryIMU6Data":
      fields = Object.keys(IMU6Data);
      break;

    case "queryIMU6MData":
      fields = Object.keys(IMU6MData);
      break;

    case "queryIMU9Data":
      fields = Object.keys(IMU9Data);
      break;

    case "queryIMUConfig":
      fields = Object.keys(IMUConfig);
      break;

    case "queryIMUInfo":
      fields = Object.keys(IMUInfo);
      break;

    case "queryLedState":
      fields = Object.keys(LedState);
      break;

    case "queryLeds":
      fields = Object.keys(Leds);
      break;

    case "queryMagnConfig":
      fields = Object.keys(MagnConfig);
      break;

    case "queryMagnData":
      fields = Object.keys(MagnData);
      break;

    case "queryMagnInfo":
      fields = Object.keys(MagnInfo);
      break;

    case "queryMemory":
      fields = Object.keys(Memory);
      break;

    case "queryModuleStatus":
      fields = Object.keys(ModuleStatus);
      break;

    case "queryPeerChange":
      fields = Object.keys(PeerChange);
      break;

    case "queryPeerList":
      fields = Object.keys(PeerList);
      break;

    case "queryProductData":
      fields = Object.keys(ProductData);
      break;

    case "queryResetReason":
      fields = Object.keys(ResetReason);
      break;

    case "queryScanResult":
      fields = Object.keys(ScanResult);
      break;

    case "queryState":
      fields = Object.keys(State);
      break;

    case "queryStateChange":
      fields = Object.keys(StateChange);
      break;

    case "queryStepsDone":
      fields = Object.keys(StepsDone);
      break;

    case "querySystemModeStatus":
      fields = Object.keys(SystemModeStatus);
      break;

    case "queryTempInfo":
      fields = Object.keys(TempInfo);
      break;

    case "queryTemperatureValue":
      fields = Object.keys(TemperatureValue);
      break;

    case "queryVisualIndState":
      fields = Object.keys(VisualIndState);
      break;

    default:
      fields = [];
  }

  return fields;
};
var queryAccConfig = function queryAccConfig(_ref) {
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
          content: AccConfig
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
var queryAccData = function queryAccData(_ref2) {
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
          content: AccData
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
var queryAccInfo = function queryAccInfo(_ref3) {
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
          content: AccInfo
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
var queryAdvSettings = function queryAdvSettings(_ref4) {
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
          content: AdvSettings
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
var queryAdvState = function queryAdvState(_ref5) {
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
          content: AdvState
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
var queryAppInfo = function queryAppInfo(_ref6) {
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
          content: AppInfo
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
var queryBleConfig = function queryBleConfig(_ref7) {
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
          content: BleConfig
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
var queryBondList = function queryBondList(_ref8) {
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
          content: BondList
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
var queryBondingSettings = function queryBondingSettings(_ref9) {
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
          content: BondingSettings
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
var queryCalibrationData = function queryCalibrationData(_ref10) {
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
          content: CalibrationData
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
var queryCalibrationMatrix = function queryCalibrationMatrix(_ref11) {
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
          content: CalibrationMatrix
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
var queryDebugLogConfig = function queryDebugLogConfig(_ref12) {
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
          content: DebugLogConfig
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
var queryDebugLogResult = function queryDebugLogResult(_ref13) {
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
          content: DebugLogResult
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
var queryDebugMessage = function queryDebugMessage(_ref14) {
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
          content: DebugMessage
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
var queryDebugMessageConfig = function queryDebugMessageConfig(_ref15) {
  var stage = _ref15.stage,
      appID = _ref15.appID,
      name = _ref15.name,
      createQuery = _ref15.createQuery,
      fields = _ref15.fields,
      filter = _ref15.filter,
      next = _ref15.next,
      fieldsList = _ref15.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: DebugMessageConfig
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
var queryDeviceInfo = function queryDeviceInfo(_ref16) {
  var stage = _ref16.stage,
      appID = _ref16.appID,
      name = _ref16.name,
      createQuery = _ref16.createQuery,
      fields = _ref16.fields,
      filter = _ref16.filter,
      next = _ref16.next,
      fieldsList = _ref16.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: DeviceInfo
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
var queryECGConfig = function queryECGConfig(_ref17) {
  var stage = _ref17.stage,
      appID = _ref17.appID,
      name = _ref17.name,
      createQuery = _ref17.createQuery,
      fields = _ref17.fields,
      filter = _ref17.filter,
      next = _ref17.next,
      fieldsList = _ref17.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ECGConfig
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
var queryECGData = function queryECGData(_ref18) {
  var stage = _ref18.stage,
      appID = _ref18.appID,
      name = _ref18.name,
      createQuery = _ref18.createQuery,
      fields = _ref18.fields,
      filter = _ref18.filter,
      next = _ref18.next,
      fieldsList = _ref18.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ECGData
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
var queryECGInfo = function queryECGInfo(_ref19) {
  var stage = _ref19.stage,
      appID = _ref19.appID,
      name = _ref19.name,
      createQuery = _ref19.createQuery,
      fields = _ref19.fields,
      filter = _ref19.filter,
      next = _ref19.next,
      fieldsList = _ref19.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ECGInfo
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
var queryEepromData = function queryEepromData(_ref20) {
  var stage = _ref20.stage,
      appID = _ref20.appID,
      name = _ref20.name,
      createQuery = _ref20.createQuery,
      fields = _ref20.fields,
      filter = _ref20.filter,
      next = _ref20.next,
      fieldsList = _ref20.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: EepromData
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
var queryEepromInfo = function queryEepromInfo(_ref21) {
  var stage = _ref21.stage,
      appID = _ref21.appID,
      name = _ref21.name,
      createQuery = _ref21.createQuery,
      fields = _ref21.fields,
      filter = _ref21.filter,
      next = _ref21.next,
      fieldsList = _ref21.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: EepromInfo
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
var queryFaultInfo = function queryFaultInfo(_ref22) {
  var stage = _ref22.stage,
      appID = _ref22.appID,
      name = _ref22.name,
      createQuery = _ref22.createQuery,
      fields = _ref22.fields,
      filter = _ref22.filter,
      next = _ref22.next,
      fieldsList = _ref22.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: FaultInfo
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
var queryGyroConfig = function queryGyroConfig(_ref23) {
  var stage = _ref23.stage,
      appID = _ref23.appID,
      name = _ref23.name,
      createQuery = _ref23.createQuery,
      fields = _ref23.fields,
      filter = _ref23.filter,
      next = _ref23.next,
      fieldsList = _ref23.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: GyroConfig
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
var queryGyroData = function queryGyroData(_ref24) {
  var stage = _ref24.stage,
      appID = _ref24.appID,
      name = _ref24.name,
      createQuery = _ref24.createQuery,
      fields = _ref24.fields,
      filter = _ref24.filter,
      next = _ref24.next,
      fieldsList = _ref24.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: GyroData
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
var queryGyroInfo = function queryGyroInfo(_ref25) {
  var stage = _ref25.stage,
      appID = _ref25.appID,
      name = _ref25.name,
      createQuery = _ref25.createQuery,
      fields = _ref25.fields,
      filter = _ref25.filter,
      next = _ref25.next,
      fieldsList = _ref25.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: GyroInfo
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
var queryHRData = function queryHRData(_ref26) {
  var stage = _ref26.stage,
      appID = _ref26.appID,
      name = _ref26.name,
      createQuery = _ref26.createQuery,
      fields = _ref26.fields,
      filter = _ref26.filter,
      next = _ref26.next,
      fieldsList = _ref26.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: HRData
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
var queryHRInfo = function queryHRInfo(_ref27) {
  var stage = _ref27.stage,
      appID = _ref27.appID,
      name = _ref27.name,
      createQuery = _ref27.createQuery,
      fields = _ref27.fields,
      filter = _ref27.filter,
      next = _ref27.next,
      fieldsList = _ref27.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: HRInfo
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
var queryIMU6Data = function queryIMU6Data(_ref28) {
  var stage = _ref28.stage,
      appID = _ref28.appID,
      name = _ref28.name,
      createQuery = _ref28.createQuery,
      fields = _ref28.fields,
      filter = _ref28.filter,
      next = _ref28.next,
      fieldsList = _ref28.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: IMU6Data
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
var queryIMU6MData = function queryIMU6MData(_ref29) {
  var stage = _ref29.stage,
      appID = _ref29.appID,
      name = _ref29.name,
      createQuery = _ref29.createQuery,
      fields = _ref29.fields,
      filter = _ref29.filter,
      next = _ref29.next,
      fieldsList = _ref29.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: IMU6MData
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
var queryIMU9Data = function queryIMU9Data(_ref30) {
  var stage = _ref30.stage,
      appID = _ref30.appID,
      name = _ref30.name,
      createQuery = _ref30.createQuery,
      fields = _ref30.fields,
      filter = _ref30.filter,
      next = _ref30.next,
      fieldsList = _ref30.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: IMU9Data
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
var queryIMUConfig = function queryIMUConfig(_ref31) {
  var stage = _ref31.stage,
      appID = _ref31.appID,
      name = _ref31.name,
      createQuery = _ref31.createQuery,
      fields = _ref31.fields,
      filter = _ref31.filter,
      next = _ref31.next,
      fieldsList = _ref31.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: IMUConfig
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
var queryIMUInfo = function queryIMUInfo(_ref32) {
  var stage = _ref32.stage,
      appID = _ref32.appID,
      name = _ref32.name,
      createQuery = _ref32.createQuery,
      fields = _ref32.fields,
      filter = _ref32.filter,
      next = _ref32.next,
      fieldsList = _ref32.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: IMUInfo
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
var queryLedState = function queryLedState(_ref33) {
  var stage = _ref33.stage,
      appID = _ref33.appID,
      name = _ref33.name,
      createQuery = _ref33.createQuery,
      fields = _ref33.fields,
      filter = _ref33.filter,
      next = _ref33.next,
      fieldsList = _ref33.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: LedState
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
var queryLeds = function queryLeds(_ref34) {
  var stage = _ref34.stage,
      appID = _ref34.appID,
      name = _ref34.name,
      createQuery = _ref34.createQuery,
      fields = _ref34.fields,
      filter = _ref34.filter,
      next = _ref34.next,
      fieldsList = _ref34.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Leds
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
var queryMagnConfig = function queryMagnConfig(_ref35) {
  var stage = _ref35.stage,
      appID = _ref35.appID,
      name = _ref35.name,
      createQuery = _ref35.createQuery,
      fields = _ref35.fields,
      filter = _ref35.filter,
      next = _ref35.next,
      fieldsList = _ref35.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: MagnConfig
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
var queryMagnData = function queryMagnData(_ref36) {
  var stage = _ref36.stage,
      appID = _ref36.appID,
      name = _ref36.name,
      createQuery = _ref36.createQuery,
      fields = _ref36.fields,
      filter = _ref36.filter,
      next = _ref36.next,
      fieldsList = _ref36.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: MagnData
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
var queryMagnInfo = function queryMagnInfo(_ref37) {
  var stage = _ref37.stage,
      appID = _ref37.appID,
      name = _ref37.name,
      createQuery = _ref37.createQuery,
      fields = _ref37.fields,
      filter = _ref37.filter,
      next = _ref37.next,
      fieldsList = _ref37.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: MagnInfo
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
var queryMemory = function queryMemory(_ref38) {
  var stage = _ref38.stage,
      appID = _ref38.appID,
      name = _ref38.name,
      createQuery = _ref38.createQuery,
      fields = _ref38.fields,
      filter = _ref38.filter,
      next = _ref38.next,
      fieldsList = _ref38.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Memory
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
var queryModuleStatus = function queryModuleStatus(_ref39) {
  var stage = _ref39.stage,
      appID = _ref39.appID,
      name = _ref39.name,
      createQuery = _ref39.createQuery,
      fields = _ref39.fields,
      filter = _ref39.filter,
      next = _ref39.next,
      fieldsList = _ref39.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ModuleStatus
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
var queryPeerChange = function queryPeerChange(_ref40) {
  var stage = _ref40.stage,
      appID = _ref40.appID,
      name = _ref40.name,
      createQuery = _ref40.createQuery,
      fields = _ref40.fields,
      filter = _ref40.filter,
      next = _ref40.next,
      fieldsList = _ref40.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: PeerChange
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
var queryPeerList = function queryPeerList(_ref41) {
  var stage = _ref41.stage,
      appID = _ref41.appID,
      name = _ref41.name,
      createQuery = _ref41.createQuery,
      fields = _ref41.fields,
      filter = _ref41.filter,
      next = _ref41.next,
      fieldsList = _ref41.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: PeerList
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
var queryProductData = function queryProductData(_ref42) {
  var stage = _ref42.stage,
      appID = _ref42.appID,
      name = _ref42.name,
      createQuery = _ref42.createQuery,
      fields = _ref42.fields,
      filter = _ref42.filter,
      next = _ref42.next,
      fieldsList = _ref42.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ProductData
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
var queryResetReason = function queryResetReason(_ref43) {
  var stage = _ref43.stage,
      appID = _ref43.appID,
      name = _ref43.name,
      createQuery = _ref43.createQuery,
      fields = _ref43.fields,
      filter = _ref43.filter,
      next = _ref43.next,
      fieldsList = _ref43.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ResetReason
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
var queryScanResult = function queryScanResult(_ref44) {
  var stage = _ref44.stage,
      appID = _ref44.appID,
      name = _ref44.name,
      createQuery = _ref44.createQuery,
      fields = _ref44.fields,
      filter = _ref44.filter,
      next = _ref44.next,
      fieldsList = _ref44.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ScanResult
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
var queryState = function queryState(_ref45) {
  var stage = _ref45.stage,
      appID = _ref45.appID,
      name = _ref45.name,
      createQuery = _ref45.createQuery,
      fields = _ref45.fields,
      filter = _ref45.filter,
      next = _ref45.next,
      fieldsList = _ref45.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: State
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
var queryStateChange = function queryStateChange(_ref46) {
  var stage = _ref46.stage,
      appID = _ref46.appID,
      name = _ref46.name,
      createQuery = _ref46.createQuery,
      fields = _ref46.fields,
      filter = _ref46.filter,
      next = _ref46.next,
      fieldsList = _ref46.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: StateChange
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
var queryStepsDone = function queryStepsDone(_ref47) {
  var stage = _ref47.stage,
      appID = _ref47.appID,
      name = _ref47.name,
      createQuery = _ref47.createQuery,
      fields = _ref47.fields,
      filter = _ref47.filter,
      next = _ref47.next,
      fieldsList = _ref47.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: StepsDone
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
var querySystemModeStatus = function querySystemModeStatus(_ref48) {
  var stage = _ref48.stage,
      appID = _ref48.appID,
      name = _ref48.name,
      createQuery = _ref48.createQuery,
      fields = _ref48.fields,
      filter = _ref48.filter,
      next = _ref48.next,
      fieldsList = _ref48.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: SystemModeStatus
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
var queryTempInfo = function queryTempInfo(_ref49) {
  var stage = _ref49.stage,
      appID = _ref49.appID,
      name = _ref49.name,
      createQuery = _ref49.createQuery,
      fields = _ref49.fields,
      filter = _ref49.filter,
      next = _ref49.next,
      fieldsList = _ref49.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: TempInfo
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
var queryTemperatureValue = function queryTemperatureValue(_ref50) {
  var stage = _ref50.stage,
      appID = _ref50.appID,
      name = _ref50.name,
      createQuery = _ref50.createQuery,
      fields = _ref50.fields,
      filter = _ref50.filter,
      next = _ref50.next,
      fieldsList = _ref50.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: TemperatureValue
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
var queryVisualIndState = function queryVisualIndState(_ref51) {
  var stage = _ref51.stage,
      appID = _ref51.appID,
      name = _ref51.name,
      createQuery = _ref51.createQuery,
      fields = _ref51.fields,
      filter = _ref51.filter,
      next = _ref51.next,
      fieldsList = _ref51.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: VisualIndState
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

export { getFields, getInfo, getModuleName, queryAccConfig, queryAccData, queryAccInfo, queryAdvSettings, queryAdvState, queryAppInfo, queryBleConfig, queryBondList, queryBondingSettings, queryCalibrationData, queryCalibrationMatrix, queryDebugLogConfig, queryDebugLogResult, queryDebugMessage, queryDebugMessageConfig, queryDeviceInfo, queryECGConfig, queryECGData, queryECGInfo, queryEepromData, queryEepromInfo, queryFaultInfo, queryGyroConfig, queryGyroData, queryGyroInfo, queryHRData, queryHRInfo, queryIMU6Data, queryIMU6MData, queryIMU9Data, queryIMUConfig, queryIMUInfo, queryLedState, queryLeds, queryMagnConfig, queryMagnData, queryMagnInfo, queryMemory, queryModuleStatus, queryPeerChange, queryPeerList, queryProductData, queryResetReason, queryScanResult, queryState, queryStateChange, queryStepsDone, querySystemModeStatus, queryTempInfo, queryTemperatureValue, queryVisualIndState };
