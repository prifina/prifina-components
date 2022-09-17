'use strict';

var Data$1 = require('./Data.js');

var Data = {
  getModuleName: Data$1.getModuleName,
  getInfo: Data$1.getInfo,
  getFields: Data$1.getFields,
  queryCharacteristics: Data$1.queryCharacteristics,
  queryHKActivitySummary: Data$1.queryHKActivitySummary,
  queryHKAudiogramSample: Data$1.queryHKAudiogramSample,
  queryHKClinicalRecord: Data$1.queryHKClinicalRecord,
  queryHKElectrocardiogram: Data$1.queryHKElectrocardiogram,
  queryHKWorkout: Data$1.queryHKWorkout,
  queryHKWorkoutConfiguration: Data$1.queryHKWorkoutConfiguration,
  queryHKWorkoutRoute: Data$1.queryHKWorkoutRoute,
  queryHKWorkoutSession: Data$1.queryHKWorkoutSession
};

module.exports = Data;
