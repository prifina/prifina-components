import { DailiesData, EpochsData, SleepsData, PulseoxData, DailiesDataObject,EpochsDataObject,PulseoxObject,SleepsDataObject, } from "@dynamic-data/garmin-data/mockups";

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
      fields = Object.keys(DailiesDataObject[0]);
      break;
    case "queryEpochsData":
      fields = Object.keys(EpochsDataObject[0]);
      break;
    case "querySleepsData":
      fields = Object.keys(SleepsDataObject[0]);
      break;
    case "queryPulseoxData":
      fields = Object.keys(PulseoxObject[0]);
      break;
    case "queryDailiesDataAsync":
      fields = DailiesData[0].split(",");
      break;
    case "queryEpochsDataAsync":
      fields = EpochsData[0].split(",");
      break;
    case "querySleepsDataAsync":
      fields = SleepsData[0].split(",");
      break;
    case "queryPulseoxDataAsync":
      fields = PulseoxData[0].split(",");
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
        getDataObject: { content: DailiesDataObject },
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
        getDataObject: { content: EpochsDataObject },
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
        getDataObject: { content: SleepsDataObject },
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
        getDataObject: { content: PulseoxObject },
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
