import { getModuleName, getInfo, getFields, queryActivities, queryLocations, queryPlaces, queryRoutes } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryActivities: queryActivities,
  queryLocations: queryLocations,
  queryPlaces: queryPlaces,
  queryRoutes: queryRoutes
};

export { Data as default };
