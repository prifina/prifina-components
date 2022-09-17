import { getModuleName, getInfo, getFields, queryCharacteristics, queryHKActivitySummary, queryHKAudiogramSample, queryHKClinicalRecord, queryHKElectrocardiogram, queryHKWorkout, queryHKWorkoutConfiguration, queryHKWorkoutRoute, queryHKWorkoutSession } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryCharacteristics: queryCharacteristics,
  queryHKActivitySummary: queryHKActivitySummary,
  queryHKAudiogramSample: queryHKAudiogramSample,
  queryHKClinicalRecord: queryHKClinicalRecord,
  queryHKElectrocardiogram: queryHKElectrocardiogram,
  queryHKWorkout: queryHKWorkout,
  queryHKWorkoutConfiguration: queryHKWorkoutConfiguration,
  queryHKWorkoutRoute: queryHKWorkoutRoute,
  queryHKWorkoutSession: queryHKWorkoutSession
};

export { Data as default };
