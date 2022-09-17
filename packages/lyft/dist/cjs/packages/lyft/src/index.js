'use strict';

var Data$1 = require('./Data.js');

var Data = {
  getModuleName: Data$1.getModuleName,
  getInfo: Data$1.getInfo,
  getFields: Data$1.getFields,
  queryDriverETA: Data$1.queryDriverETA,
  queryNearbyDrivers: Data$1.queryNearbyDrivers,
  queryRideEstimates: Data$1.queryRideEstimates,
  queryRideTypes: Data$1.queryRideTypes
};

module.exports = Data;
