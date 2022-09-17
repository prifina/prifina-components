import { getModuleName, getInfo, getFields, queryDriverETA, queryNearbyDrivers, queryRideEstimates, queryRideTypes } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryDriverETA: queryDriverETA,
  queryNearbyDrivers: queryNearbyDrivers,
  queryRideEstimates: queryRideEstimates,
  queryRideTypes: queryRideTypes
};

export { Data as default };
