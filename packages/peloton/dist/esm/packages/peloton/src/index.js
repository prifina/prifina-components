import { getModuleName, getInfo, getFields, queryAchievementTemplate, queryAuthDetails, queryFacebookUserProfile, queryInstructor, queryRelationship, queryReservation, queryRideDetails, queryRideFilter, queryRideSorts, queryUserData, queryUserOverview, queryUserProfile, queryUserSettings, queryWorkoutDetails } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryAchievementTemplate: queryAchievementTemplate,
  queryAuthDetails: queryAuthDetails,
  queryFacebookUserProfile: queryFacebookUserProfile,
  queryInstructor: queryInstructor,
  queryRelationship: queryRelationship,
  queryReservation: queryReservation,
  queryRideDetails: queryRideDetails,
  queryRideFilter: queryRideFilter,
  queryRideSorts: queryRideSorts,
  queryUserData: queryUserData,
  queryUserOverview: queryUserOverview,
  queryUserProfile: queryUserProfile,
  queryUserSettings: queryUserSettings,
  queryWorkoutDetails: queryWorkoutDetails
};

export { Data as default };
