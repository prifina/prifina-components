import { getModuleName, getInfo, getFields, queryActivities, queryActivitySummary, queryHeartRateSummary, querySleepSummary, queryHeartRateData, querySleepData, queryActivitySummariesAsync, queryHeartRateSummariesAsync, querySleepSummariesAsync, queryActivitiesAsync, queryHeartRateDataAsync, querySleepDataAsync, querySleepQualityAsync, querySleepQuality } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryActivities: queryActivities,
  queryActivitySummary: queryActivitySummary,
  queryHeartRateSummary: queryHeartRateSummary,
  querySleepSummary: querySleepSummary,
  queryHeartRateData: queryHeartRateData,
  querySleepData: querySleepData,
  queryActivitySummariesAsync: queryActivitySummariesAsync,
  queryHeartRateSummariesAsync: queryHeartRateSummariesAsync,
  querySleepSummariesAsync: querySleepSummariesAsync,
  queryActivitiesAsync: queryActivitiesAsync,
  queryHeartRateDataAsync: queryHeartRateDataAsync,
  querySleepDataAsync: querySleepDataAsync,
  querySleepQualityAsync: querySleepQualityAsync,
  querySleepQuality: querySleepQuality
};

export { Data as default };
