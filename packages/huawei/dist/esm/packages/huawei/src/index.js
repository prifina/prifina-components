import { getModuleName, getInfo, getFields, queryActivityRecord, queryDataCollector, queryHealthRecord } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryActivityRecord: queryActivityRecord,
  queryDataCollector: queryDataCollector,
  queryHealthRecord: queryHealthRecord
};

export { Data as default };
