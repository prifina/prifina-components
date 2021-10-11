import { netflixData } from "./activityMockup";

const s3Query = `query s3Object($input:S3ObjectInput!) {
  getS3Object(input:$input) {
    result
  }
}`;

export const getInfo = () => {
  return ["queryNetflixData"];
};

export const getSubscriptions = () => {
  return [{ subscription: "queryNetflixData", mockup: netflixData }];
};

export const getModuleName = () => {
  return "MockData";
};

export const queryNetflixData = (
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
        getS3Object: { content: netflixData },
      },
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html

    return createQuery({ query: s3Query, name: name, fields, filter, next });
  }
};
