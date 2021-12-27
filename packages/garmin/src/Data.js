import { DailiesData, EpochsData, SleepsData, PulseoxData } from "./Mockups";

const dataQuery = `query dataObject($input:DataObjectInput!) {
  getDataObject(input:$input) {
    result
  }
}`;

export const getInfo = () => {
  return [
    "queryDailiesDataAsync",
    "queryEpochssDataAsync",
    "querySleepsDataAsync",
    "queryPulseoxDataAsync",
  ];
};

export const getModuleName = () => {
  return "Garmin";
};

export const queryDailiesDataAsync = (
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
    });
  }
};

export const queryEpochsDataAsync = (
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
    });
  }
};

export const querySleepsDataAsync = (
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
    });
  }
};

export const queryPulseoxDataAsync = (
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
    });
  }
};
