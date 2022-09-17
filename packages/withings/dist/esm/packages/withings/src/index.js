import { getModuleName, getInfo, getFields, queryGetactivity, queryGetgoals, queryGetintradayactivity, queryGetmeas, queryHeartList, queryHeart, querySleep, querySleepSummary, queryGetDevice, queryGetUser, queryGetWorkout } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryGetactivity: queryGetactivity,
  queryGetgoals: queryGetgoals,
  queryGetintradayactivity: queryGetintradayactivity,
  queryGetmeas: queryGetmeas,
  queryHeartList: queryHeartList,
  queryHeart: queryHeart,
  querySleep: querySleep,
  querySleepSummary: querySleepSummary,
  queryGetDevice: queryGetDevice,
  queryGetUser: queryGetUser,
  queryGetWorkout: queryGetWorkout
};

export { Data as default };
