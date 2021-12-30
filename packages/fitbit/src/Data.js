import { ActivitiesData, ActivitiesDataAsync } from "./ActivitiesData";

import { ActivitiesSummary, ActivitiesSummaryAsync } from "./ActivitiesSummary";
import { HeartRateData, HeartRateDataAsync } from "./HeartRateData";
import { HeartRateSummary, HeartRateSummaryAsync } from "./HeartRateSummary";
import { SleepData, SleepDataAsync } from "./SleepData";
import { SleepSummary, SleepSummaryAsync } from "./SleepSummary";
import { SleepQuality, SleepQualityAsync } from "./SleepQuality";

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
    "queryHeartRateData",
    "queryHeartRateSummary",
    "querySleepData",
    "querySleepSummary",
    "querySleepQuality",
    "queryActivitySummariesAsync",
    "queryHeartRateSummariesAsync",
    "querySleepSummariesAsync",
    "queryActivitiesAsync",
    "queryHeartRateDataAsync",
    "querySleepDataAsync",
    "querySleepQualityAsync",
  ];
};

export const getModuleName = () => {
  return "Fitbit";
};
export const getFields = (query) => {
  let fields = [];

  switch (query) {
    case "queryActivitySummary":
      fields = Object.keys(ActivitiesSummary[0]);
      break;
    case "queryHeartRateSummary":
      fields = Object.keys(HeartRateSummary[0]);
      break;
    case "querySleepSummary":
      fields = Object.keys(SleepSummary[0]);
      break;
    case "queryActivities":
      fields = Object.keys(ActivitiesData[0]);
      break;
    case "queryHeartRateData":
      fields = Object.keys(HeartRateData[0]);
      break;
    case "querySleepData":
      fields = Object.keys(SleepData[0]);
      break;
    case "querySleepQuality":
      fields = Object.keys(SleepQuality[0]);
      break;
    case "queryActivitiesAsync":
      fields = Object.keys(ActivitiesDataAsync[0]);
      break;
    case "queryHeartRateDataAsync":
      fields = Object.keys(HeartRateDataAsync[0]);
      break;
    case "querySleepDataAsync":
      fields = Object.keys(SleepDataAsync[0]);
      break;
    case "querySleepQualityAsync":
      fields = Object.keys(SleepQualityAsync[0]);
      break;
    case "queryActivitySummariesAsync":
      fields = Object.keys(ActivitiesSummaryAsync[0]);
      break;
    case "queryHeartRateSummariesAsync":
      fields = Object.keys(HeartRateSummaryAsync[0]);
      break;
    case "querySleepSummariesAsync":
      fields = Object.keys(SleepSummaryAsync[0]);
      break;
    default:
      fields = [];
  }

  return fields;
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

    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList,
    });
  }
};

export const queryActivitiesAsync = ({
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
        getDataObject: { content: ActivitiesData },
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
      fieldsList,
    });
  }
};

export const queryActivitySummary = ({
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
        getDataObject: { content: ActivitiesSummary },
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
      fieldsList,
    });
  }
};

export const queryActivitySummariesAsync = ({
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
        getDataObject: { content: ActivitiesSummary },
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
      fieldsList,
    });
  }
};

export const queryHeartRateSummary = ({
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
        getDataObject: { content: HeartRateSummary },
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
      fieldsList,
    });
  }
};

export const queryHeartRateSummariesAsync = ({
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
        getDataObject: { content: HeartRateSummary },
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
      fieldsList,
    });
  }
};

export const querySleepSummary = ({
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
        getDataObject: { content: SleepSummary },
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
      fieldsList,
    });
  }
};

export const querySleepSummariesAsync = ({
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
        getDataObject: { content: SleepSummary },
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
      fieldsList,
    });
  }
};

export const queryHeartRateData = ({
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
        getDataObject: { content: HeartRateData },
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
      fieldsList,
    });
  }
};

export const queryHeartRateDataAsync = ({
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
        getDataObject: { content: HeartRateData },
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
      fieldsList,
    });
  }
};

export const querySleepData = ({
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
        getDataObject: { content: SleepData },
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
      fieldsList,
    });
  }
};

export const querySleepDataAsync = ({
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
        getDataObject: { content: SleepData },
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
      fieldsList,
    });
  }
};

export const querySleepQuality = ({
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
        getDataObject: { content: SleepData },
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
      fieldsList,
    });
  }
};

export const querySleepQualityAsync = ({
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
        getDataObject: { content: SleepData },
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
      fieldsList,
    });
  }
};
