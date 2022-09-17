import { Activity } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/Activity.js';
import { ActivityComments } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/ActivityComments.js';
import { ActivityKudoers } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/ActivityKudoers.js';
import { ActivityLaps } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/ActivityLaps.js';
import { ActivityStream } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/ActivityStream.js';
import { ActivityZone } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/ActivityZones.js';
import { AthleteActivities } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/AthleteActivities.js';
import { AthleteClubs } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/AthleteClubs.js';
import { AthleteRoute } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/AthleteRoute.js';
import { AthleteStats } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/AthleteStats.js';
import { AuthenticatedAthlete } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/AuthenticatedAthlete.js';
import { Club } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/Club.js';
import { ClubActivities } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/ClubActivities.js';
import { ClubAdministrators } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/ClubAdministrators.js';
import { ClubMembers } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/ClubMembers.js';
import { Equipment } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/Equipment.js';
import { Route } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/Route.js';
import { RouteStream } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/RouteStream.js';
import { SegmentEfforts } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/SegmentEfforts.js';
import { SegmentEffortsStream } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/SegmentEffortsStream.js';
import { Segments } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/Segments.js';
import { SegmentsStreams } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/SegmentsStreams.js';
import { StarredSegments } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/StarredSegments.js';
import { Upload } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/Upload.js';
import { Zones } from '../../../node_modules/@dynamic-data/strava-data/dist/esm/mockups/Zones.js';

/*
import { ouraDaily } from "./activityMockup";
import { ouraHourly } from "./activityMockup";
import { netflixData } from "./activityMockup";
*/
var dataQuery = "query dataObject($input:DataObjectInput!) {\n  getDataObject(input:$input) {\n    result\n  }\n}";
/*
const s3Query = `query s3Object($input:S3ObjectInput!) {
  getS3Object(input:$input) {
    result
  }
}`;
*/

var getInfo = function getInfo() {
  //return ["queryOuraDaily", "queryOuraHourly", "queryNetflixData"];
  return ["queryActivity", "queryActivityComments", "queryActivityKudoers", "queryActivityLaps", "queryActivityStream", "queryActivityZone", "queryAthleteActivities", "queryAthleteClubs", "queryAthleteRoute", "queryAthleteStats", "queryAuthenticatedAthlete", "queryClub", "queryClubActivities", "queryClubAdministrators", "queryClubMembers", "queryEquipment", "queryRoute", "queryRouteStream", "querySegmentEfforts", "querySegmentEffortsStream", "querySegments", "querySegmentsStreams", "queryStarredSegments", "queryUpload", "queryZones"];
};
var getModuleName = function getModuleName() {
  return "Strava";
};
var getFields = function getFields(query) {
  var fields = [];

  switch (query) {
    case "queryActivity":
      fields = Object.keys(Activity);
      break;

    case "queryActivityComments":
      fields = Object.keys(ActivityComments);
      break;

    case "queryActivityKudoers":
      fields = Object.keys(ActivityKudoers);
      break;

    case "queryActivityLaps":
      fields = Object.keys(ActivityLaps);
      break;

    case "queryActivityStream":
      fields = Object.keys(ActivityStream);
      break;

    case "queryActivityZone":
      fields = Object.keys(ActivityZone);
      break;

    case "queryAthleteActivities":
      fields = Object.keys(AthleteActivities);
      break;

    case "queryAthleteClubs":
      fields = Object.keys(AthleteClubs);
      break;

    case "queryAthleteRoute":
      fields = Object.keys(AthleteRoute);
      break;

    case "queryAthleteStats":
      fields = Object.keys(AthleteStats);
      break;

    case "queryAuthenticatedAthlete":
      fields = Object.keys(AuthenticatedAthlete);
      break;

    case "queryClub":
      fields = Object.keys(Club);
      break;

    case "queryClubActivities":
      fields = Object.keys(ClubActivities);
      break;

    case "queryClubAdministrators":
      fields = Object.keys(ClubAdministrators);
      break;

    case "queryClubMembers":
      fields = Object.keys(ClubMembers);
      break;

    case "queryEquipment":
      fields = Object.keys(Equipment);
      break;

    case "queryRoute":
      fields = Object.keys(Route);
      break;

    case "queryRouteStream":
      fields = Object.keys(RouteStream);
      break;

    case "querySegmentEfforts":
      fields = Object.keys(SegmentEfforts);
      break;

    case "querySegmentEffortsStream":
      fields = Object.keys(SegmentEffortsStream);
      break;

    case "querySegments":
      fields = Object.keys(Segments);
      break;

    case "querySegmentsStreams":
      fields = Object.keys(SegmentsStreams);
      break;

    case "queryStarredSegments":
      fields = Object.keys(StarredSegments);
      break;

    case "queryUpload":
      fields = Object.keys(Upload);
      break;

    case "queryZones":
      fields = Object.keys(Zones);
      break;

    default:
      fields = [];
  }

  return fields;
};
var queryActivity = function queryActivity(_ref) {
  var stage = _ref.stage,
      appID = _ref.appID,
      name = _ref.name,
      createQuery = _ref.createQuery,
      fields = _ref.fields,
      filter = _ref.filter,
      next = _ref.next,
      fieldsList = _ref.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Activity
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryActivityComments = function queryActivityComments(_ref2) {
  var stage = _ref2.stage,
      appID = _ref2.appID,
      name = _ref2.name,
      createQuery = _ref2.createQuery,
      fields = _ref2.fields,
      filter = _ref2.filter,
      next = _ref2.next,
      fieldsList = _ref2.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ActivityComments
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryActivityKudoers = function queryActivityKudoers(_ref3) {
  var stage = _ref3.stage,
      appID = _ref3.appID,
      name = _ref3.name,
      createQuery = _ref3.createQuery,
      fields = _ref3.fields,
      filter = _ref3.filter,
      next = _ref3.next,
      fieldsList = _ref3.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ActivityKudoers
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryActivityLaps = function queryActivityLaps(_ref4) {
  var stage = _ref4.stage,
      appID = _ref4.appID,
      name = _ref4.name,
      createQuery = _ref4.createQuery,
      fields = _ref4.fields,
      filter = _ref4.filter,
      next = _ref4.next,
      fieldsList = _ref4.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ActivityLaps
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryActivityStream = function queryActivityStream(_ref5) {
  var stage = _ref5.stage,
      appID = _ref5.appID,
      name = _ref5.name,
      createQuery = _ref5.createQuery,
      fields = _ref5.fields,
      filter = _ref5.filter,
      next = _ref5.next,
      fieldsList = _ref5.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ActivityStream
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryActivityZone = function queryActivityZone(_ref6) {
  var stage = _ref6.stage,
      appID = _ref6.appID,
      name = _ref6.name,
      createQuery = _ref6.createQuery,
      fields = _ref6.fields,
      filter = _ref6.filter,
      next = _ref6.next,
      fieldsList = _ref6.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ActivityZone
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryAthleteActivities = function queryAthleteActivities(_ref7) {
  var stage = _ref7.stage,
      appID = _ref7.appID,
      name = _ref7.name,
      createQuery = _ref7.createQuery,
      fields = _ref7.fields,
      filter = _ref7.filter,
      next = _ref7.next,
      fieldsList = _ref7.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: AthleteActivities
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryAthleteClubs = function queryAthleteClubs(_ref8) {
  var stage = _ref8.stage,
      appID = _ref8.appID,
      name = _ref8.name,
      createQuery = _ref8.createQuery,
      fields = _ref8.fields,
      filter = _ref8.filter,
      next = _ref8.next,
      fieldsList = _ref8.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: AthleteClubs
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryAthleteRoute = function queryAthleteRoute(_ref9) {
  var stage = _ref9.stage,
      appID = _ref9.appID,
      name = _ref9.name,
      createQuery = _ref9.createQuery,
      fields = _ref9.fields,
      filter = _ref9.filter,
      next = _ref9.next,
      fieldsList = _ref9.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: AthleteRoute
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryAthleteStats = function queryAthleteStats(_ref10) {
  var stage = _ref10.stage,
      appID = _ref10.appID,
      name = _ref10.name,
      createQuery = _ref10.createQuery,
      fields = _ref10.fields,
      filter = _ref10.filter,
      next = _ref10.next,
      fieldsList = _ref10.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: AthleteStats
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryAuthenticatedAthlete = function queryAuthenticatedAthlete(_ref11) {
  var stage = _ref11.stage,
      appID = _ref11.appID,
      name = _ref11.name,
      createQuery = _ref11.createQuery,
      fields = _ref11.fields,
      filter = _ref11.filter,
      next = _ref11.next,
      fieldsList = _ref11.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: AuthenticatedAthlete
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryClub = function queryClub(_ref12) {
  var stage = _ref12.stage,
      appID = _ref12.appID,
      name = _ref12.name,
      createQuery = _ref12.createQuery,
      fields = _ref12.fields,
      filter = _ref12.filter,
      next = _ref12.next,
      fieldsList = _ref12.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Club
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryClubActivities = function queryClubActivities(_ref13) {
  var stage = _ref13.stage,
      appID = _ref13.appID,
      name = _ref13.name,
      createQuery = _ref13.createQuery,
      fields = _ref13.fields,
      filter = _ref13.filter,
      next = _ref13.next,
      fieldsList = _ref13.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ClubActivities
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryClubAdministrators = function queryClubAdministrators(_ref14) {
  var stage = _ref14.stage,
      appID = _ref14.appID,
      name = _ref14.name,
      createQuery = _ref14.createQuery,
      fields = _ref14.fields,
      filter = _ref14.filter,
      next = _ref14.next,
      fieldsList = _ref14.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ClubAdministrators
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryClubMembers = function queryClubMembers(_ref15) {
  var stage = _ref15.stage,
      appID = _ref15.appID,
      name = _ref15.name,
      createQuery = _ref15.createQuery,
      fields = _ref15.fields,
      filter = _ref15.filter,
      next = _ref15.next,
      fieldsList = _ref15.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ClubMembers
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryEquipment = function queryEquipment(_ref16) {
  var stage = _ref16.stage,
      appID = _ref16.appID,
      name = _ref16.name,
      createQuery = _ref16.createQuery,
      fields = _ref16.fields,
      filter = _ref16.filter,
      next = _ref16.next,
      fieldsList = _ref16.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Equipment
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryRoute = function queryRoute(_ref17) {
  var stage = _ref17.stage,
      appID = _ref17.appID,
      name = _ref17.name,
      createQuery = _ref17.createQuery,
      fields = _ref17.fields,
      filter = _ref17.filter,
      next = _ref17.next,
      fieldsList = _ref17.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Route
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryRouteStream = function queryRouteStream(_ref18) {
  var stage = _ref18.stage,
      appID = _ref18.appID,
      name = _ref18.name,
      createQuery = _ref18.createQuery,
      fields = _ref18.fields,
      filter = _ref18.filter,
      next = _ref18.next,
      fieldsList = _ref18.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: RouteStream
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var querySegmentEfforts = function querySegmentEfforts(_ref19) {
  var stage = _ref19.stage,
      appID = _ref19.appID,
      name = _ref19.name,
      createQuery = _ref19.createQuery,
      fields = _ref19.fields,
      filter = _ref19.filter,
      next = _ref19.next,
      fieldsList = _ref19.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: SegmentEfforts
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var querySegmentEffortsStream = function querySegmentEffortsStream(_ref20) {
  var stage = _ref20.stage,
      appID = _ref20.appID,
      name = _ref20.name,
      createQuery = _ref20.createQuery,
      fields = _ref20.fields,
      filter = _ref20.filter,
      next = _ref20.next,
      fieldsList = _ref20.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: SegmentEffortsStream
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var querySegments = function querySegments(_ref21) {
  var stage = _ref21.stage,
      appID = _ref21.appID,
      name = _ref21.name,
      createQuery = _ref21.createQuery,
      fields = _ref21.fields,
      filter = _ref21.filter,
      next = _ref21.next,
      fieldsList = _ref21.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Segments
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var querySegmentsStreams = function querySegmentsStreams(_ref22) {
  var stage = _ref22.stage,
      appID = _ref22.appID,
      name = _ref22.name,
      createQuery = _ref22.createQuery,
      fields = _ref22.fields,
      filter = _ref22.filter,
      next = _ref22.next,
      fieldsList = _ref22.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: SegmentsStreams
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryStarredSegments = function queryStarredSegments(_ref23) {
  var stage = _ref23.stage,
      appID = _ref23.appID,
      name = _ref23.name,
      createQuery = _ref23.createQuery,
      fields = _ref23.fields,
      filter = _ref23.filter,
      next = _ref23.next,
      fieldsList = _ref23.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: StarredSegments
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryUpload = function queryUpload(_ref24) {
  var stage = _ref24.stage,
      appID = _ref24.appID,
      name = _ref24.name,
      createQuery = _ref24.createQuery,
      fields = _ref24.fields,
      filter = _ref24.filter,
      next = _ref24.next,
      fieldsList = _ref24.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Upload
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryZones = function queryZones(_ref25) {
  var stage = _ref25.stage,
      appID = _ref25.appID,
      name = _ref25.name,
      createQuery = _ref25.createQuery,
      fields = _ref25.fields,
      filter = _ref25.filter,
      next = _ref25.next,
      fieldsList = _ref25.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Zones
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

export { getFields, getInfo, getModuleName, queryActivity, queryActivityComments, queryActivityKudoers, queryActivityLaps, queryActivityStream, queryActivityZone, queryAthleteActivities, queryAthleteClubs, queryAthleteRoute, queryAthleteStats, queryAuthenticatedAthlete, queryClub, queryClubActivities, queryClubAdministrators, queryClubMembers, queryEquipment, queryRoute, queryRouteStream, querySegmentEfforts, querySegmentEffortsStream, querySegments, querySegmentsStreams, queryStarredSegments, queryUpload, queryZones };
