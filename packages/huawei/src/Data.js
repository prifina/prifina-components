/*
import { ouraDaily } from "./activityMockup";
import { ouraHourly } from "./activityMockup";
import { netflixData } from "./activityMockup";
*/

import {
  ActivityRecord,
  DataCollector,
  HealthRecord
} from "@dynamic-data/huawei-data/mockups";

const dataQuery = `query dataObject($input:DataObjectInput!) {
  getDataObject(input:$input) {
    result
  }
}`;
/*
const s3Query = `query s3Object($input:S3ObjectInput!) {
  getS3Object(input:$input) {
    result
  }
}`;
*/

export const getInfo = () => {
  //return ["queryOuraDaily", "queryOuraHourly", "queryNetflixData"];
  return [
    "queryActivityRecord",
    "queryDataCollector",
    "queryHealthRecord"
  ];
};

export const getModuleName = () => {
  return "Huawei Healthkit";
};
export const getFields = (query) => {
  let fields = [];
  switch (query) {
    case "queryActivityRecord":
      fields = Object.keys(ActivityRecord);
      break;
    case "queryDataCollector":
      fields = Object.keys(DataCollector);
      break;
    case "queryHealthRecord":
      fields = Object.keys(HealthRecord);
      break;
    default:
      fields = [];
  }
  return fields;
};

export const queryActivityRecord = ({
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
        getDataObject: { content: ActivityRecord },
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

export const queryDataCollector = ({
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
        getDataObject: { content: DataCollector },
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

export const queryHealthRecord = ({
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
        getDataObject: { content: HealthRecord },
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
