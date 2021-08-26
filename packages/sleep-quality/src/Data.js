import activityMockup from "./activityMockup";

const s3Query = `query s3Object($input:S3ObjectInput!) {
  getS3Object(input:$input) {
    result
  }
}`;

export const getInfo = () => {
  return ["queryActivities"];
};

export const getModuleName = () => {
  return "SleepQuality";
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
