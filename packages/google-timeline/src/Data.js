import {
  Activity as activityMockup,
  Location as locationMockup,
  Places as placesMockup,
  Routes as routesMockup,
} from "@dynamic-data/google-data/mockups";

/*
export const Activity = [
  "p_timestamp\tp_datetime\tp_type\tp_confidence",
  "1417576831121\t2014-12-03T03:20:31.121Z\tSTILL\t87",
  "1417576831121\t2014-12-03T03:20:31.121Z\tUNKNOWN\t10",
*/

const dataQuery = `query dataObject($input:DataObjectInput!) {
  getDataObject(input:$input) {
    result
  }
}`;

export const getInfo = () => {
  return ["queryActivities", "queryLocations", "queryPlaces", "queryRoutes"];
};
export const getFields = (query) => {
  let fields = [];

  switch (query) {
    case "queryActivities":
      //console.log("FIELDS...FOUND");
      fields = activityMockup[0].split("\t");
      break;
    case "queryLocations":
      //console.log("FIELDS...FOUND");
      fields = locationMockup[0].split("\t");
      break;
    case "queryPlaces":
      //console.log("FIELDS...FOUND");
      fields = Object.keys(placesMockup);
      break;
    case "queryRoutes":
      //console.log("FIELDS...FOUND");
      fields = Object.keys(routesMockup);
      break;
    default:
      fields = [];
  }
  return fields;
};

export const getModuleName = () => {
  return "GoogleTimeline";
};

export const queryActivities = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  // console.log("QUERY STAGE", stage);
  // console.log("QUERY APP", appID);
  // //console.log("QUERY UUID", uuid);
  // //console.log("QUERY EX", executionID);
  // console.log("QUERY FIELDS", fields);
  // console.log("QUERY FILTER", filter);
  // console.log("QUERY NEXT", next);
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: activityMockup },
      },
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html

    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryLocations = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: locationMockup },
      },
    });
  } else {
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryPlaces = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: placesMockup },
      },
    });
  } else {
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryRoutes = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: routesMockup },
      },
    });
  } else {
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};
