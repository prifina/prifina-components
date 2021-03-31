import activityMockup from "./activityMockup";

const s3Query = `query s3Object($input:S3ObjectInput!) {
  getS3Object(input:$input) {
    result
  }
}`;

export const getInfo = () => {
  return ["queryActivities"];
};

export const getSubscriptions = () => {
  return [{ subscription: "queryActivities", mockup: activityMockup }];
};

export const getModuleName = () => {
  return "GoogleTimeline";
};

export const queryActivities = (
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next
) => {
  console.log("QUERY STAGE", stage);
  console.log("QUERY APP", appID);
  //console.log("QUERY UUID", uuid);
  //console.log("QUERY EX", executionID);
  console.log("QUERY FIELDS", fields);
  console.log("QUERY FILTER", filter);
  console.log("QUERY NEXT", next);
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getS3Object: { content: activityMockup },
      },
    });
  } else {
    return createQuery({ query: s3Query, name: name, fields, filter, next });
  }
};
