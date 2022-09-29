//import { DailiesData, EpochsData, SleepsData, PulseoxData, DailiesDataObject,EpochsDataObject,PulseoxObject,SleepsDataObject, } from "@dynamic-data/garmin-data/mockups";
import { DailiesData, EpochsData, SleepsData, PulseoxData, DailiesDataAsync, EpochsDataAsync, SleepsDataAsync, PulseoxDataAsync } from "@dynamic-data/garmin-data/mockups";

const dataQuery = `query dataObject($input:DataObjectInput!) {
  getDataObject(input:$input) {
    result
  }
}`;

export const getInfo = () => {
  return [
    "queryDailiesDataAsync",
    "queryEpochsDataAsync",
    "querySleepsDataAsync",
    "queryPulseoxDataAsync",
    "queryDailiesData",
    "queryEpochsData",
    "querySleepsData",
    "queryPulseoxData",
  ];
};

export const getModuleName = () => {
  return "Garmin";
};
export const getFields = (query) => {
  let fields = [];

  switch (query) {
    case "queryDailiesData":
      fields = Object.keys(DailiesData);
      break;
    case "queryEpochsData":
      fields = Object.keys(EpochsData);
      break;
    case "querySleepsData":
      fields = Object.keys(SleepsData);
      break;
    case "queryPulseoxData":
      fields = Object.keys(PulseoxData);
      break;
    case "queryDailiesDataAsync":
      fields = DailiesDataAsync[0].split("\t");
      break;
    case "queryEpochsDataAsync":
      fields = EpochsDataAsync[0].split("\t");
      break;
    case "querySleepsDataAsync":
      fields = SleepsDataAsync[0].split("\t");
      break;
    case "queryPulseoxDataAsync":
      fields = PulseoxDataAsync[0].split("\t");
      break;
    default:
      fields = [];
  }

  return fields;
};

export const queryDailiesData = ({
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
        getDataObject: { content: DailiesData },
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

export const queryEpochsData = ({
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
        getDataObject: { content: EpochsData },
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

export const querySleepsData = ({
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
        getDataObject: { content: SleepsData },
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

export const queryPulseoxData = ({
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
        getDataObject: { content: PulseoxData },
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

export const queryDailiesDataAsync = ({
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
        getDataObject: { content: DailiesData },
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

export const queryEpochsDataAsync = ({
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
        getDataObject: { content: EpochsDataAsync },
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

export const querySleepsDataAsync = ({
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
        getDataObject: { content: SleepsDataAsync },
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

export const queryPulseoxDataAsync = ({
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
        getDataObject: { content: PulseoxDataAsync },
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
