import { getModuleName, getInfo, getFields, queryActivityType, queryAggregateData, queryEvent, queryMembership, queryMetric, queryReport, querySleepDetails, querySurveryResponse, queryUser, queryVoiceOfWhoop, queryVoiceOfWhoopCycle, queryWorkout } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryActivityType: queryActivityType,
  queryAggregateData: queryAggregateData,
  queryEvent: queryEvent,
  queryMembership: queryMembership,
  queryMetric: queryMetric,
  queryReport: queryReport,
  querySleepDetails: querySleepDetails,
  querySurveryResponse: querySurveryResponse,
  queryUser: queryUser,
  queryVoiceOfWhoop: queryVoiceOfWhoop,
  queryVoiceOfWhoopCycle: queryVoiceOfWhoopCycle,
  queryWorkout: queryWorkout
};

export { Data as default };
