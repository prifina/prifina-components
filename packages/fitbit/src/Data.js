import { ActivitiesData } from "./ActivitiesData";

import { ActivitiesSummary } from "./ActivitiesSummary";
import { HearRateData } from "./HeartRateData";
import { HeartRateSummary } from "./HeartRateSummary";
import { SleepData } from "./SleepData";
import { SleepSummary } from "./SleepSummary";

const dataQuery = `query dataObject($input:DataObjectInput!) {
  getDataObject(input:$input) {
    result
  }
}`;
/*
const getAthenaResults = `subscription AthenaResults($id: String!) {
  athenaResults(id: $id) {
    data
    id
  }
}`;
*/

export const getInfo = () => {
  return [
    "queryActivities",
    "queryActivitySummary",
    "queryHearRateData",
    "queryHearRataSummary",
    "querySleepData",
    "querySleepSummary",
    "queryActivitySummaries",
  ];
};

export const getModuleName = () => {
  return "Fitbit";
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
        getDataObject: { content: ActivitiesData },
      },
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html

    return createQuery({ query: dataQuery, name: name, fields, filter, next });
  }
};

export const queryActivitySummary = (
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
        getDataObject: { content: ActivitiesSummary },
      },
    });
  } else {
    return createQuery({ query: dataQuery, name: name, fields, filter, next });
  }
};

export const queryActivitySummaries = (
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
        getDataObject: { content: ActivitiesSummary },
      },
    });
  } else {
    return createQuery({ query: dataQuery, name: name, fields, filter, next });
  }
};

export const queryHearRataSummary = (
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
        getDataObject: { content: HeartRateSummary },
      },
    });
  } else {
    return createQuery({ query: dataQuery, name: name, fields, filter, next });
  }
};

export const querySleepSummary = (
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
        getDataObject: { content: SleepSummary },
      },
    });
  } else {
    return createQuery({ query: dataQuery, name: name, fields, filter, next });
  }
};

export const queryHearRateData = (
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
        getDataObject: { content: HearRateData },
      },
    });
  } else {
    return createQuery({ query: dataQuery, name: name, fields, filter, next });
  }
};

export const querySleepData = (
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
        getDataObject: { content: SleepData },
      },
    });
  } else {
    return createQuery({ query: dataQuery, name: name, fields, filter, next });
  }
};
