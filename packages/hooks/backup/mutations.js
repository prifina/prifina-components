export const getInfo = () => {
  return ["createMessage"];
};

export const createMessage = (stage, appID, uuid, variables) => {
  console.log("CREATE TEST ", stage);
  console.log("CREATE TEST ", appID);
  console.log("CREATE TEST ", uuid);
  console.log("CREATE TEST ", variables);
  if (stage === "dev") {
    return Promise.resolve({ data: { createMessage: {} } });
  }
};
