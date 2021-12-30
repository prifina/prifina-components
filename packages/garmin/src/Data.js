import { DailiesData, EpochsData, SleepsData, PulseoxData } from "./Mockups";

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
  ];
};

export const getModuleName = () => {
  return "Garmin";
};
export const getFields = (query) => {
  let fields = [];

  switch (query) {
    case "queryDailiesDataAsync":
      fields = DailiesData[0].join(",");
      break;
    case "xqueryEpochsDataAsync":
      fields = EpochsData[0].join(",");
      break;
    case "querySleepsDataAsync":
      fields = SleepsData[0].join(",");
      break;
    case "queryPulseoxDataAsync":
      fields = PulseoxData[0].join(",");
      break;
    default:
      fields = [];
  }

  return fields;
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
