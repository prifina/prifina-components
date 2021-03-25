import activityMockup from "./activityMockup";

export const getInfo = () => {
  return ["queryActivities"];
};

export const getSubscriptions = () => {
  return [{ subscription: "queryActivities", mockup: activityMockup }];
};

export const getModuleName = () => {
  return "GoogleTimeline";
};

export const queryActivities = (stage, appID, uuid, executionID, filter) => {
  console.log("QUERY STAGE", stage);
  console.log("QUERY APP", appID);
  console.log("QUERY UUID", uuid);
  console.log("QUERY EX", executionID);
  console.log("QUERY FILTER", filter);
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        queryActivities: {
          id: executionID,
          status: "PENDING",
        },
      },
    });
  }
};
