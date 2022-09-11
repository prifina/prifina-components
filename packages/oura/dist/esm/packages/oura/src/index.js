import { getModuleName, getInfo, getFields, queryActivitySummary, queryActivitySummariesAsync, queryReadinessSummary, queryReadinessSummariesAsync, querySleepData, querySleepDataAsync, querySleepSummary, querySleepSummariesAsync } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryActivitySummary: queryActivitySummary,
  queryActivitySummariesAsync: queryActivitySummariesAsync,
  queryReadinessSummary: queryReadinessSummary,
  queryReadinessSummariesAsync: queryReadinessSummariesAsync,
  querySleepData: querySleepData,
  querySleepDataAsync: querySleepDataAsync,
  querySleepSummary: querySleepSummary,
  querySleepSummariesAsync: querySleepSummariesAsync
};

export { Data as default };
