/*
import { ouraDaily } from "./activityMockup";
import { ouraHourly } from "./activityMockup";
import { netflixData } from "./activityMockup";
*/

import {
  HMAccessory,
  HMActionSet,
  HMCharacteristic,
  HMEventTrigger,
  HMHomeManager,
  HMMatterHome,
  HMMatterRoom,
  HMMatterTopology,
  HMService,
  HMTimerTrigger
} from "@dynamic-data/homekit-data/mockups";

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
    "queryHMAccessory",
    "queryHMActionSet",
    "queryHMCharacteristic",
    "queryHMEventTrigger",
    "queryHMHomeManager",
    "queryHMMatterHome",
    "queryHMMatterRoom",
    "queryHMMatterTopology",
    "queryHMService",
    "queryHMTimerTrigger"
  ];
};

export const getModuleName = () => {
  return "iOS Homekit";
};
export const getFields = (query) => {
  let fields = [];
  switch (query) {
    case "queryHMAccessory":
      fields = Object.keys(HMAccessory);
      break;
    case "queryHMActionSet":
      fields = Object.keys(HMActionSet);
      break;
    case "queryHMCharacteristic":
      fields = Object.keys(HMCharacteristic);
      break;
    case "queryHMEventTrigger":
      fields = Object.keys(HMEventTrigger);
      break;
    case "queryHMHomeManager":
      fields = Object.keys(HMHomeManager);
      break;
    case "queryHMMatterHome":
      fields = Object.keys(HMMatterHome);
      break;
    case "queryHMMatterRoom":
      fields = Object.keys(HMMatterRoom);
      break;
    case "queryHMMatterTopology":
      fields = Object.keys(HMMatterTopology);
      break;
    case "queryHMService":
      fields = Object.keys(HMService);
      break;
    case "queryHMTimerTrigger":
      fields = Object.keys(HMTimerTrigger);
      break;
    default:
      fields = [];
  }
  return fields;
};

export const queryHMTimerTrigger = ({
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
        getDataObject: { content: HMTimerTrigger },
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

export const queryHMService = ({
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
        getDataObject: { content: HMService },
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

export const queryHMMatterTopology = ({
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
        getDataObject: { content: HMMatterTopology },
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

export const queryHMMatterRoom = ({
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
        getDataObject: { content: HMMatterRoom },
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

export const queryHMMatterHome = ({
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
        getDataObject: { content: HMMatterHome },
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

export const queryHMHomeManager = ({
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
        getDataObject: { content: HMHomeManager },
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

export const queryHMEventTrigger = ({
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
        getDataObject: { content: HMEventTrigger },
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

export const queryHMCharacteristic = ({
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
        getDataObject: { content: HMCharacteristic },
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

export const queryHMActionSet = ({
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
        getDataObject: { content: HMActionSet },
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

export const queryHMAccessory = ({
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
        getDataObject: { content: HMAccessory },
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