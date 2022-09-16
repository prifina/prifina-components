import { getModuleName, getInfo, getFields, queryDailiesDataAsync, queryEpochsDataAsync, querySleepsDataAsync, queryPulseoxDataAsync, queryDailiesData, queryEpochsData, queryPulseoxData, querySleepsData } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryDailiesDataAsync: queryDailiesDataAsync,
  queryEpochsDataAsync: queryEpochsDataAsync,
  querySleepsDataAsync: querySleepsDataAsync,
  queryPulseoxDataAsync: queryPulseoxDataAsync,
  queryDailiesData: queryDailiesData,
  queryEpochsData: queryEpochsData,
  queryPulseoxData: queryPulseoxData,
  querySleepsData: querySleepsData
};

export { Data as default };
