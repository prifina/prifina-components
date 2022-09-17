import { getModuleName, getInfo, getFields, queryActivity, queryActivityComments, queryActivityKudoers, queryActivityLaps, queryActivityStream, queryActivityZone, queryAthleteActivities, queryAthleteClubs, queryAthleteRoute, queryAthleteStats, queryAuthenticatedAthlete, queryClub, queryClubActivities, queryClubAdministrators, queryClubMembers, queryEquipment, queryRoute, queryRouteStream, querySegmentEfforts, querySegmentEffortsStream, querySegments, querySegmentsStreams, queryStarredSegments, queryUpload, queryZones } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryActivity: queryActivity,
  queryActivityComments: queryActivityComments,
  queryActivityKudoers: queryActivityKudoers,
  queryActivityLaps: queryActivityLaps,
  queryActivityStream: queryActivityStream,
  queryActivityZone: queryActivityZone,
  queryAthleteActivities: queryAthleteActivities,
  queryAthleteClubs: queryAthleteClubs,
  queryAthleteRoute: queryAthleteRoute,
  queryAthleteStats: queryAthleteStats,
  queryAuthenticatedAthlete: queryAuthenticatedAthlete,
  queryClub: queryClub,
  queryClubActivities: queryClubActivities,
  queryClubAdministrators: queryClubAdministrators,
  queryClubMembers: queryClubMembers,
  queryEquipment: queryEquipment,
  queryRoute: queryRoute,
  queryRouteStream: queryRouteStream,
  querySegmentEfforts: querySegmentEfforts,
  querySegmentEffortsStream: querySegmentEffortsStream,
  querySegments: querySegments,
  querySegmentsStreams: querySegmentsStreams,
  queryStarredSegments: queryStarredSegments,
  queryUpload: queryUpload,
  queryZones: queryZones
};

export { Data as default };
